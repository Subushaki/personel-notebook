-- ============================================================================
-- PERSONEL NOTEBOOK - YENİ NESİL BİRLEŞİK VERİTABANI ŞEMASI (SUPABASE SQL)
-- ============================================================================
-- Bu şema, seviye bariyerlerini kaldırıp kategori bazlı (Kelime, Cümle, Deyim,
-- Saatler, Gramer Formülleri, Phrasal Verbs, Düzensiz Fiiller vb.) sonsuz
-- ölçeklenebilir bir öğrenme platformu için tasarlanmıştır.
-- ============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- 2. KULLANICI PROFİLLERİ (PROFILES)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT, -- Özel auth akışı için
    avatar TEXT DEFAULT 'fox',
    avatar_bg TEXT DEFAULT '#3b82f6',
    is_admin BOOLEAN DEFAULT FALSE,
    chat_banned BOOLEAN DEFAULT FALSE,
    mute_expires_at TIMESTAMPTZ,
    profanity_warnings INT DEFAULT 0,
    last_seen TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- 3. DİNAMİK KATEGORİLER TABLOSU (CATEGORIES)
-- İleride istenen her an yeni kategori eklenebilir.
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.categories (
    id SERIAL PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,               -- 'vocab', 'sentences', 'grammar', 'idioms', 'times', 'phrasal_verbs', 'irregular_verbs'
    name TEXT NOT NULL,                      -- 'Kelimeler', 'Gramer Formülleri', vb.
    icon TEXT NOT NULL,                      -- '📖', '⚡', '💬', vb.
    description TEXT,                        -- Açıklama
    quiz_modes TEXT[] DEFAULT ARRAY['en-tr', 'tr-en'], -- Bu kategorinin desteklediği quiz modları
    display_order INT DEFAULT 0,             -- Sıralama
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Varsayılan Kategoriler
INSERT INTO public.categories (slug, name, icon, description, quiz_modes, display_order)
VALUES 
    ('vocab', 'Kelimeler (Vocabulary)', '📖', 'Kurs ve genel İngilizce kelimeleri', ARRAY['en-tr', 'tr-en'], 1),
    ('sentences', 'Cümleler (Sentences)', '💬', 'Günlük diyaloglar ve kalıp cümleler', ARRAY['en-tr', 'tr-en'], 2),
    ('grammar', 'Gramer Formülleri', '⚡', 'Formülleri gör, doğru gramer konusunu yaz', ARRAY['formula-topic'], 3),
    ('idioms', 'Deyimler (Idioms)', '🎭', 'Popüler İngilizce deyimler ve atasözleri', ARRAY['en-tr', 'tr-en'], 4),
    ('times', 'Saatler & Zaman', '⏰', 'Dijital/analog saat okuma ve zaman kalıpları', ARRAY['en-tr', 'tr-en'], 5),
    ('phrasal_verbs', 'Phrasal Verbs', '🔄', 'En çok kullanılan deyimsel fiiller', ARRAY['en-tr', 'tr-en'], 6),
    ('irregular_verbs', 'Düzensiz Fiiller', '📊', 'V1 - V2 - V3 fiil çekimleri', ARRAY['en-tr', 'v1-v2-v3'], 7)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, icon = EXCLUDED.icon, description = EXCLUDED.description;

-- ============================================================================
-- 4. BİRLEŞİK İÇERİK TABLOSU (LEARNING_ITEMS)
-- Tüm kelimeler, cümleler, deyimler, saatler ve gramer formülleri burada tutulur.
-- 'metadata' sütunu (JSONB) sayesinde her kategorinin kendine has özel alanları
-- (gramer formülleri, sinyal kelimeler, v2-v3 halleri vb.) sınırsızca saklanabilir!
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.learning_items (
    id BIGINT PRIMARY KEY,                   -- 1000'den başlayan veya özel ID
    category_slug TEXT NOT NULL REFERENCES public.categories(slug) ON DELETE CASCADE,
    en TEXT NOT NULL,                        -- İngilizce kelime, cümle, veya gramer formülü
    tr TEXT NOT NULL,                        -- Türkçe anlamı veya gramer konu adı
    hint_en TEXT,                            -- İngilizce ipucu / örnek cümle
    hint_tr TEXT,                            -- Türkçe ipucu
    level_tag TEXT DEFAULT 'all',            -- 'a2', 'b1', 'b2', 'all' vb. (isteğe bağlı etiket)
    metadata JSONB DEFAULT '{}'::jsonb,      -- Esnek meta veriler (örnek gramer detayları aşağıda)
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hızlı arama ve filtreleme için indexler
CREATE INDEX IF NOT EXISTS idx_learning_items_cat ON public.learning_items(category_slug);
CREATE INDEX IF NOT EXISTS idx_learning_items_level ON public.learning_items(level_tag);
CREATE INDEX IF NOT EXISTS idx_learning_items_metadata ON public.learning_items USING GIN (metadata);

-- ============================================================================
-- 5. KULLANICI KELİME VE İÇERİK SONUÇLARI (WORD_RESULTS)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.word_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    word_id BIGINT NOT NULL,                 -- learning_items(id)
    result TEXT NOT NULL CHECK (result IN ('first_try', 'retry', 'hard', 'unknown')),
    session_id UUID,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_word_results_user_word ON public.word_results(user_id, word_id);
CREATE INDEX IF NOT EXISTS idx_word_results_user_result ON public.word_results(user_id, result);

-- ============================================================================
-- 6. YILDIZLANAN / ÇALIŞILAN İÇERİKLER (STUDY_WORDS)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.study_words (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    word_id BIGINT NOT NULL,                 -- learning_items(id)
    starred BOOLEAN DEFAULT FALSE,
    notes TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, word_id)
);

CREATE INDEX IF NOT EXISTS idx_study_words_user_starred ON public.study_words(user_id, starred);

-- ============================================================================
-- 7. QUİZ OTURUMLARI (QUIZ_SESSIONS)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.quiz_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    category_slug TEXT NOT NULL DEFAULT 'vocab',
    mode TEXT NOT NULL DEFAULT 'en-tr',
    total_words INT DEFAULT 0,
    first_try_count INT DEFAULT 0,
    retry_count INT DEFAULT 0,
    hard_count INT DEFAULT 0,
    unknown_count INT DEFAULT 0,
    accuracy NUMERIC(5,2) DEFAULT 0,
    time_spent_seconds INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_quiz_sessions_user ON public.quiz_sessions(user_id);

-- ============================================================================
-- 8. SOSYAL & DİĞER DESTEK TABLOLARI (CHAT & ANALYTICS)
-- Mevcut sistemin çalışmaya devam etmesi için eksiksiz tanımlar.
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.chat_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    reply_to_id UUID REFERENCES public.chat_messages(id) ON DELETE SET NULL,
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.chat_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    message_id UUID NOT NULL REFERENCES public.chat_messages(id) ON DELETE CASCADE,
    reporter_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    reason TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.direct_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sender_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    recipient_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content TEXT,
    type TEXT DEFAULT 'system',
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.site_analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    path TEXT,
    country TEXT,
    time_spent_ms BIGINT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    word_id BIGINT,
    issue_type TEXT,
    details TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- 9. ROW LEVEL SECURITY (RLS) POLİTİKALARI
-- ============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.word_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_words ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.direct_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

-- Herkes kategorileri ve içerikleri okuyabilir (Public Read)
CREATE POLICY "Public read categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public read learning items" ON public.learning_items FOR SELECT USING (true);

-- Profiller: Herkes okuyabilir, kullanıcı kendi profilini güncelleyebilir
CREATE POLICY "Public read profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "User insert own profile" ON public.profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "User update own profile" ON public.profiles FOR UPDATE USING (true);

-- Word Results: Kullanıcı kendi sonuçlarını ekleyebilir ve okuyabilir
CREATE POLICY "User results select" ON public.word_results FOR SELECT USING (true);
CREATE POLICY "User results insert" ON public.word_results FOR INSERT WITH CHECK (true);
CREATE POLICY "User results update" ON public.word_results FOR UPDATE USING (true);
CREATE POLICY "User results delete" ON public.word_results FOR DELETE USING (true);

-- Study Words: Kullanıcı kendi favorilerini yönetebilir
CREATE POLICY "User study select" ON public.study_words FOR SELECT USING (true);
CREATE POLICY "User study insert" ON public.study_words FOR INSERT WITH CHECK (true);
CREATE POLICY "User study update" ON public.study_words FOR UPDATE USING (true);
CREATE POLICY "User study delete" ON public.study_words FOR DELETE USING (true);

-- Quiz Sessions: Oturum kayıtları
CREATE POLICY "User quiz_sessions select" ON public.quiz_sessions FOR SELECT USING (true);
CREATE POLICY "User quiz_sessions insert" ON public.quiz_sessions FOR INSERT WITH CHECK (true);
CREATE POLICY "User quiz_sessions update" ON public.quiz_sessions FOR UPDATE USING (true);

-- Chat & DM & Notifications
CREATE POLICY "Public chat select" ON public.chat_messages FOR SELECT USING (true);
CREATE POLICY "User chat insert" ON public.chat_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "User chat update" ON public.chat_messages FOR UPDATE USING (true);

CREATE POLICY "DM select" ON public.direct_messages FOR SELECT USING (true);
CREATE POLICY "DM insert" ON public.direct_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "DM update" ON public.direct_messages FOR UPDATE USING (true);

CREATE POLICY "Notifications policy" ON public.notifications FOR ALL USING (true);
CREATE POLICY "Analytics policy" ON public.site_analytics FOR ALL USING (true);
CREATE POLICY "Reports policy" ON public.reports FOR ALL USING (true);

-- ============================================================================
-- ÖRNEK: İLERİDE YENİ KELİME VEYA GRAMER EKLEME SQL ŞABLONU
-- ============================================================================
/*
-- Yeni Kelime Ekleme:
INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr)
VALUES (1500, 'vocab', 'Accomplish', 'Başarmak', 'To finish something successfully.', 'Bir şeyi başarıyla tamamlamak.');

-- Yeni Gramer Konusu & Formülü Ekleme:
INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, metadata)
VALUES (
    6001,
    'grammar',
    'S + have/has + V3',
    'Present Perfect',
    'I have finished my homework.',
    'Geçmişte başlayıp etkisi süren veya zamanı belirtilmeyen olaylar.',
    '{
        "formula_short": "S + have/has + V3",
        "formula_long": "Subject + have/has + Past Participle (V3) + Object",
        "topic_en": "Present Perfect",
        "topic_tr": "Yakın Geçmiş Zaman",
        "accepted_answers": ["Present Perfect", "Present Perfect Tense", "Simple Present Perfect", "Yakın Geçmiş Zaman"],
        "signal_words": ["already", "just", "yet", "ever", "never", "since", "for"],
        "forms": {
            "positive": {"short": "S + have/has + V3", "long": "Subject + have/has + V3 + ...", "example": "I have finished my homework."},
            "negative": {"short": "S + have/has + not + V3", "long": "Subject + have/has + not + V3 + ...", "example": "I have not finished my homework."},
            "question": {"short": "Have/Has + S + V3?", "long": "Have/Has + Subject + V3 + ...?", "example": "Have you finished your homework?"}
        }
    }'::jsonb
);
*/


-- ============================================================================


-- ============================================================================
-- 10. A2-B1 İNGİLİZCE TENSE (ZAMANLAR) BAŞLANGIÇ VERİLERİ (SEED DATA)
-- ============================================================================
INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6001, 'grammar', 'S + V1 (s/es) | S + do/does not + V1', 'Present Simple (Geniş Zaman)', 'Example: ''She works every day.'' / ''The Earth goes around the Sun.'' (Clues: always, usually, every day)', 'Geniş Zaman (Rutinler ve genel doğrular: V1 / s-es)', 'a2-b1', '{"group":"Present","formula_short":"S + V1 (he/she/it: V1 + s/es)","formula_long":"Subject + Base Verb (V1) [+ s/es] + Object/Time","topic_en":"Present Simple","topic_tr":"Geniş Zaman","accepted_answers":["Present Simple","Simple Present","Geniş Zaman","Present Simple Tense","Simple Present Tense"],"signal_words":["always","usually","often","sometimes","rarely","never","every day","every week","on Mondays"],"usage":"Rutinler, alışkanlıklar, genel doğrular, programlar ve kalıcı durumlar.","forms":{"positive":{"short":"S + V1 (s/es)","long":"Subject + V1 (s/es) + ...","example":"I work every day. / She works hard."},"negative":{"short":"S + do/does not + V1","long":"Subject + do/does + not + V1 + ...","example":"I do not work. / She does not work (doesn''t work)."},"question":{"short":"Do/Does + S + V1?","long":"Do/Does + Subject + V1 + ...?","example":"Do you work? / Does she work?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6002, 'grammar', 'S + am/is/are + V-ing', 'Present Continuous (Şimdiki Zaman)', 'Example: ''She is reading a book right now.'' (Clues: now, at the moment, look!)', 'Şimdiki Zaman (am/is/are + V-ing)', 'a2-b1', '{"group":"Present","formula_short":"S + am/is/are + V-ing","formula_long":"Subject + am/is/are + Verb(-ing) + Object","topic_en":"Present Continuous","topic_tr":"Şimdiki Zaman","accepted_answers":["Present Continuous","Present Progressive","Şimdiki Zaman","Present Continuous Tense","Present Progressive Tense"],"signal_words":["now","right now","at the moment","currently","look!","listen!","these days"],"usage":"Şu anda gerçekleşen veya geçici olarak devam eden eylemler.","forms":{"positive":{"short":"S + am/is/are + V-ing","long":"Subject + am/is/are + V-ing + ...","example":"I am working now. / She is studying English right now."},"negative":{"short":"S + am/is/are + not + V-ing","long":"Subject + am/is/are + not + V-ing + ...","example":"I am not working. / She is not studying (isn''t studying)."},"question":{"short":"Am/Is/Are + S + V-ing?","long":"Am/Is/Are + Subject + V-ing + ...?","example":"Are you working? / Is she studying?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6003, 'grammar', 'S + have/has + V3', 'Present Perfect (Yakın Geçmiş Zaman)', 'Example: ''I have already eaten.'' / ''Have you ever been to London?'' (Clues: already, just, yet, ever)', 'Yakın Geçmiş Zaman (have/has + V3)', 'a2-b1', '{"group":"Present","formula_short":"S + have/has + V3","formula_long":"Subject + have/has + Past Participle (V3) + Object","topic_en":"Present Perfect","topic_tr":"Yakın Geçmiş Zaman","accepted_answers":["Present Perfect","Present Perfect Tense","Simple Present Perfect","Yakın Geçmiş Zaman","Belirsiz Geçmiş Zaman"],"signal_words":["already","just","yet","ever","never","since","for","recently","so far"],"usage":"Geçmişte olmuş ama zamanı belirtilmemiş deneyimler, henüz biten işler ve etkisi süren durumlar.","forms":{"positive":{"short":"S + have/has + V3","long":"Subject + have/has + V3 + ...","example":"I have finished my homework. / She has gone."},"negative":{"short":"S + have/has + not + V3","long":"Subject + have/has + not (haven''t/hasn''t) + V3 + ...","example":"I have not worked. / She has not finished her project."},"question":{"short":"Have/Has + S + V3?","long":"Have/Has + Subject + V3 + ...?","example":"Have you worked? / Has she gone? / Have you ever seen this movie?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6004, 'grammar', 'S + have/has + been + V-ing', 'Present Perfect Continuous', 'Example: ''I have been studying English for three hours.'' (Clues: have/has been + V-ing, for, since)', 'Sürece Vurgu Yapan Sürekli Geçmiş (have/has been + V-ing)', 'a2-b1', '{"group":"Present","formula_short":"S + have/has + been + V-ing","formula_long":"Subject + have/has + been + Verb(-ing) + Object","topic_en":"Present Perfect Continuous","topic_tr":"Süregelen Yakın Geçmiş Zaman","accepted_answers":["Present Perfect Continuous","Present Perfect Progressive","Süregelen Yakın Geçmiş Zaman","Present Perfect Continuous Tense"],"signal_words":["for three hours","since morning","all day","how long","lately","recently"],"usage":"Geçmişte başlayıp şimdiye kadar kesintisiz süren eylemin sürecine vurgu yapar.","forms":{"positive":{"short":"S + have/has + been + V-ing","long":"Subject + have/has + been + V-ing + ...","example":"I have been studying for three hours. / She has been working since morning."},"negative":{"short":"S + have/has + not + been + V-ing","long":"Subject + have/has + not + been + V-ing + ...","example":"I have not been studying. / She hasn''t been working long."},"question":{"short":"Have/Has + S + been + V-ing?","long":"Have/Has + Subject + been + V-ing + ...?","example":"Have you been studying? / How long have you been waiting here?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6005, 'grammar', 'S + V2 | S + did not + V1', 'Past Simple (Geçmiş Zaman)', 'Example: ''She went home two hours ago.'' / ''I worked yesterday.'' (Clues: yesterday, last week, ago)', 'Geçmiş Zaman (V2 / did not + V1)', 'a2-b1', '{"group":"Past","formula_short":"S + V2 | S + did not + V1","formula_long":"Subject + Past Form (V2) + Object / Subject + did not + V1","topic_en":"Past Simple","topic_tr":"Geçmiş Zaman","accepted_answers":["Past Simple","Simple Past","Geçmiş Zaman","Past Simple Tense","Simple Past Tense","Di''li Geçmiş Zaman"],"signal_words":["yesterday","last night","last week","last year","ago","two days ago","in 2015"],"usage":"Geçmişte belirli bir zamanda gerçekleşmiş ve tamamen bitmiş eylemler.","forms":{"positive":{"short":"S + V2","long":"Subject + V2 + ...","example":"I worked yesterday. / She went to London last year."},"negative":{"short":"S + did not + V1","long":"Subject + did not (didn''t) + V1 + ...","example":"I did not work. / She did not go (didn''t go)."},"question":{"short":"Did + S + V1?","long":"Did + Subject + V1 + ...?","example":"Did you work yesterday? / Did she go to school?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6006, 'grammar', 'S + was/were + V-ing', 'Past Continuous (Geçmişte Süregelen Zaman)', 'Example: ''I was sleeping when he called me.'' (Clues: was/were + V-ing, while, when)', 'Geçmişte Devam Eden Zaman (was/were + V-ing)', 'a2-b1', '{"group":"Past","formula_short":"S + was/were + V-ing","formula_long":"Subject + was/were + Verb(-ing) + Object","topic_en":"Past Continuous","topic_tr":"Geçmişte Süregelen Zaman","accepted_answers":["Past Continuous","Past Progressive","Geçmişte Süregelen Zaman","Past Continuous Tense","Geçmişte Sürekli Zaman"],"signal_words":["while","as","when","at 10 PM yesterday","all evening","all day yesterday"],"usage":"Geçmişte belirli bir anda devam etmekte olan eylem (özellikle when/while ile).","forms":{"positive":{"short":"S + was/were + V-ing","long":"Subject + was/were + V-ing + ...","example":"I was sleeping when he called. / They were studying at 8 PM."},"negative":{"short":"S + was/were + not + V-ing","long":"Subject + was/were + not (wasn''t/weren''t) + V-ing + ...","example":"I was not working. / They were not studying."},"question":{"short":"Was/Were + S + V-ing?","long":"Was/Were + Subject + V-ing + ...?","example":"Were you sleeping? / Was she studying when it rained?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6007, 'grammar', 'S + had + V3', 'Past Perfect (Önceki Geçmiş Zaman)', 'Example: ''When I arrived at the station, the train had already left.'' (Clues: had + V3, before)', 'Geçmişin Geçmişi (had + V3, diğer olaydan önce tamamlanan)', 'a2-b1', '{"group":"Past","formula_short":"S + had + V3","formula_long":"Subject + had + Past Participle (V3) + Object","topic_en":"Past Perfect","topic_tr":"Önceki Geçmiş Zaman","accepted_answers":["Past Perfect","Past Perfect Tense","Simple Past Perfect","Önceki Geçmiş Zaman","Mişli Geçmiş Zaman"],"signal_words":["before","after","by the time","already","when"],"usage":"Geçmişteki iki olaydan daha önce gerçekleşmiş ve tamamlanmış olanı anlatır (had + V3).","forms":{"positive":{"short":"S + had + V3","long":"Subject + had + V3 + ...","example":"I had finished my homework before dinner. / She had gone."},"negative":{"short":"S + had not (hadn''t) + V3","long":"Subject + had not (hadn''t) + V3 + ...","example":"I had not worked. / She hadn''t left when I arrived."},"question":{"short":"Had + S + V3?","long":"Had + Subject + V3 + ...?","example":"Had you finished before he called? / Had she gone?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6008, 'grammar', 'S + had + been + V-ing', 'Past Perfect Continuous', 'Example: ''He was tired because he had been running for an hour.'' (Clues: had been + V-ing)', 'Geçmişte Başka Bir Olaydan Önce Sürmüş Eylem (had been + V-ing)', 'a2-b1', '{"group":"Past","formula_short":"S + had + been + V-ing","formula_long":"Subject + had + been + Verb(-ing) + Object","topic_en":"Past Perfect Continuous","topic_tr":"Geçmişte Süregelen Önceki Zaman","accepted_answers":["Past Perfect Continuous","Past Perfect Progressive","Geçmişte Süregelen Önceki Zaman","Past Perfect Continuous Tense"],"signal_words":["had been doing","for two hours before","by the time","until then"],"usage":"Geçmişteki bir andan veya olaydan önce bir süre devam etmiş olan süreç.","forms":{"positive":{"short":"S + had + been + V-ing","long":"Subject + had + been + V-ing + ...","example":"I had been working for two hours when he arrived. / She had been studying."},"negative":{"short":"S + had not (hadn''t) + been + V-ing","long":"Subject + had not (hadn''t) + been + V-ing + ...","example":"I had not been working. / She hadn''t been studying long before the test."},"question":{"short":"Had + S + been + V-ing?","long":"Had + Subject + been + V-ing + ...?","example":"Had you been working long before they called? / Had she been studying?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6009, 'grammar', 'S + will + V1', 'Simple Future (Gelecek Zaman - Will)', 'Example: ''I think it will rain tomorrow.'' / ''I will help you.'' (Clues: will + V1, tomorrow)', 'Gelecek Zaman (will + V1, anlık kararlar ve tahminler)', 'a2-b1', '{"group":"Future","formula_short":"S + will + V1","formula_long":"Subject + will + Base Verb (V1) + Object","topic_en":"Simple Future","topic_tr":"Gelecek Zaman (Will)","accepted_answers":["Simple Future","Future Simple","Future Tense","Future T","Gelecek Zaman","Will Future","Simple Future Tense","Gelecek Zaman (Will)","Will"],"signal_words":["tomorrow","next week","next month","soon","in the future","probably","I think","I hope"],"usage":"Geleceğe yönelik anlık kararlar, vaatler, tahminler ve teklifler.","forms":{"positive":{"short":"S + will + V1","long":"Subject + will + V1 + ...","example":"I will work tomorrow. / She will come."},"negative":{"short":"S + will not (won''t) + V1","long":"Subject + will not (won''t) + V1 + ...","example":"I will not work. / She won''t come to the party."},"question":{"short":"Will + S + V1?","long":"Will + Subject + V1 + ...?","example":"Will you work tomorrow? / Will she come?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6010, 'grammar', 'S + am/is/are + going to + V1', 'Be Going To (Planlanan Gelecek Zaman)', 'Example: ''Look at those dark clouds! It is going to rain.'' / ''I am going to study tonight.''', 'Planlı Gelecek Zaman (am/is/are + going to + V1)', 'a2-b1', '{"group":"Future","formula_short":"S + am/is/are + going to + V1","formula_long":"Subject + am/is/are + going to + Base Verb (V1) + Object","topic_en":"Be Going To","topic_tr":"Planlanan Gelecek Zaman","accepted_answers":["Be Going To","Going to","Future with Going To","Planlanan Gelecek Zaman","Planlı Gelecek Zaman"],"signal_words":["planned","decided","look at those clouds","tonight","next weekend"],"usage":"Önceden planlanmış niyetler ve şu andaki güçlü bir kanıta dayanan gelecek tahminleri.","forms":{"positive":{"short":"S + am/is/are + going to + V1","long":"Subject + am/is/are + going to + V1 + ...","example":"I am going to study tonight. / She is going to buy a car."},"negative":{"short":"S + am/is/are + not + going to + V1","long":"Subject + am/is/are + not + going to + V1 + ...","example":"I am not going to attend the meeting. / They aren''t going to come."},"question":{"short":"Am/Is/Are + S + going to + V1?","long":"Am/Is/Are + Subject + going to + V1 + ...?","example":"Are you going to watch the match? / Is she going to travel?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6011, 'grammar', 'S + will + be + V-ing', 'Future Continuous (Gelecekte Süregelen Zaman)', 'Example: ''This time tomorrow, I will be flying to London.'' (Clues: will be + V-ing)', 'Gelecekte Devam Edecek Zaman (will be + V-ing)', 'a2-b1', '{"group":"Future","formula_short":"S + will + be + V-ing","formula_long":"Subject + will + be + Verb(-ing) + Object","topic_en":"Future Continuous","topic_tr":"Gelecekte Süregelen Zaman","accepted_answers":["Future Continuous","Future Progressive","Gelecekte Süregelen Zaman","Future Continuous Tense","Gelecekte Sürekli Zaman"],"signal_words":["this time tomorrow","at 3 PM next Monday","at this hour next week","in two years"],"usage":"Gelecekte belirli bir anda gerçekleşmekte ve devam etmekte olacak olaylar.","forms":{"positive":{"short":"S + will + be + V-ing","long":"Subject + will + be + V-ing + ...","example":"I will be working at 10 AM tomorrow. / She will be studying."},"negative":{"short":"S + will not (won''t) + be + V-ing","long":"Subject + will not (won''t) + be + V-ing + ...","example":"I will not be working. / She won''t be studying tonight."},"question":{"short":"Will + S + be + V-ing?","long":"Will + Subject + be + V-ing + ...?","example":"Will you be working tomorrow at noon? / Will she be studying?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6012, 'grammar', 'S + will + have + V3', 'Future Perfect (Gelecekte Tamamlanmış Zaman)', 'Example: ''By the time you arrive, I will have finished cooking.'' (Clues: will have + V3, by tomorrow)', 'Gelecekte Tamamlanmış Olacak Eylemler (will have + V3)', 'a2-b1', '{"group":"Future","formula_short":"S + will + have + V3","formula_long":"Subject + will + have + Past Participle (V3) + Object","topic_en":"Future Perfect","topic_tr":"Gelecekte Tamamlanmış Zaman","accepted_answers":["Future Perfect","Future Perfect Tense","Simple Future Perfect","Gelecekte Tamamlanmış Zaman"],"signal_words":["by tomorrow","by next week","by 2030","by the time","in two hours"],"usage":"Gelecekte belirli bir zamana veya başka bir olaya kadar tamamlanmış, bitmiş olacak eylemler.","forms":{"positive":{"short":"S + will + have + V3","long":"Subject + will + have + V3 + ...","example":"I will have finished my homework by 8 PM. / She will have gone."},"negative":{"short":"S + will not (won''t) + have + V3","long":"Subject + will not (won''t) + have + V3 + ...","example":"I will not have finished. / She won''t have left by then."},"question":{"short":"Will + S + have + V3?","long":"Will + Subject + have + V3 + ...?","example":"Will you have finished the report by tomorrow? / Will she have gone?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6013, 'grammar', 'S + will + have + been + V-ing', 'Future Perfect Continuous', 'Example: ''By 5 PM, she will have been driving for six hours.'' (Clues: will have been + V-ing)', 'Gelecekte Sürecek Olan Eylemin Süresi (will have been + V-ing)', 'a2-b1', '{"group":"Future","formula_short":"S + will + have + been + V-ing","formula_long":"Subject + will + have + been + Verb(-ing) + Object","topic_en":"Future Perfect Continuous","topic_tr":"Gelecekte Süregelen Tamamlanmış Zaman","accepted_answers":["Future Perfect Continuous","Future Perfect Progressive","Gelecekte Süregelen Tamamlanmış Zaman","Future Perfect Continuous Tense"],"signal_words":["by next year for ... years","by 2028 for a decade","by the time"],"usage":"Gelecekteki belirli bir noktaya gelindiğinde bir eylemin ne kadar süredir devam ediyor olacağını vurgular.","forms":{"positive":{"short":"S + will + have + been + V-ing","long":"Subject + will + have + been + V-ing + ...","example":"By next year, I will have been working here for 5 years. / She will have been studying."},"negative":{"short":"S + will not (won''t) + have + been + V-ing","long":"Subject + will not (won''t) + have + been + V-ing + ...","example":"I will not have been working. / She won''t have been studying long enough."},"question":{"short":"Will + S + have + been + V-ing?","long":"Will + Subject + have + been + V-ing + ...?","example":"Will you have been working here for a long time by then?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;


-- ============================================================================
-- 10. EK A1-A2 GRAMER VE YAPI KONULARI (6014 - 6037)
-- ============================================================================
INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6014, 'grammar', 'Noun + s/es/ies (cat → cats, child → children)', 'Plural Nouns (Çoğul İsimler)', 'Examples: ''book → books'', ''watch → watches'', ''child → children'', ''foot → feet''.', 'Çoğul İsimler (İsim sonuna -s/-es getirme veya düzensiz çoğul)', 'a1-a2', '{"group":"Nouns","formula_short":"Noun + s/es/ies | Irregular (child → children)","formula_long":"Regular: cat → cats, box → boxes, baby → babies | Irregular: man → men, child → children","topic_en":"Plural Nouns","topic_tr":"Çoğul İsimler","accepted_answers":["Plural Nouns","Plural Noun","Plurals","Çoğul İsimler","Çoğul İsim","Plural"],"signal_words":["two","three","many","several","a few","these","those"],"usage":"Sayılabilen isimlerin birden fazla olduğunu belirtmek için -s, -es, -ies takıları veya düzensiz çekimler kullanılır.","forms":{"positive":{"short":"cat → cats / box → boxes","long":"Noun + s / es / ies","example":"I have two cats and three boxes."},"negative":{"short":"Irregular: man → men, person → people","long":"Düzensiz çoğullar (-s almaz)","example":"There are many children in the park."},"question":{"short":"How many + plural noun?","long":"How many + Çoğul İsim?","example":"How many books do you read?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6015, 'grammar', 'a/an + Noun vs some + Noun (no plural -s)', 'Countable & Uncountable (Sayılabilir & Sayılamaz)', 'Clues: an apple (countable), some milk (uncountable - no ''a milk'').', 'Sayılabilir ve Sayılamaz İsimler (a/an vs some, much vs many)', 'a1-a2', '{"group":"Nouns","formula_short":"Countable: a/an, one, two... | Uncountable: some + noun (no -s)","formula_long":"Countable: an apple, three books | Uncountable: water, money, information, bread, milk","topic_en":"Countable & Uncountable","topic_tr":"Sayılabilir & Sayılamaz İsimler","accepted_answers":["Countable and Uncountable","Countable & Uncountable","Countable Nouns","Uncountable Nouns","Sayılabilir ve Sayılamaz İsimler","Sayılabilir Sayılamaz","Countable","Uncountable"],"signal_words":["a/an","some","a bottle of water","a piece of advice","money","bread","furniture"],"usage":"Adet ile sayılabilenler (countable) ve sıvı, kütle, soyut kavram gibi sayılamayanlar (uncountable).","forms":{"positive":{"short":"Countable: a car / two cars | Uncountable: some water","long":"Sayılabilenler çoğul olur, sayılamayanlar daima tekil çekimlenir.","example":"An apple is on the table. / Some milk is in the fridge."},"negative":{"short":"No plural for uncountable: ❌ waters","long":"Sayılamayan isimler -s takısı almaz ve ''a/an'' ile kullanılmaz.","example":"I need some information, not an information."},"question":{"short":"How many (sayılabilir) vs How much (sayılamaz)","long":"How many books? vs How much water?","example":"How much money do you need?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6016, 'grammar', 'much (uncountable) vs many (countable) vs a lot of', 'Much / Many / A lot of (Miktar Belirteçleri)', 'Clues: How much water? / How many students? / A lot of books.', 'Miktar Belirteçleri (much: sayılamaz, many: sayılabilir)', 'a1-a2', '{"group":"Nouns","formula_short":"much + uncountable | many + plural countable | a lot of + both","formula_long":"Much + Sayılamaz (water/money) | Many + Sayılabilir Çoğul (books/friends) | A lot of + Her ikisi de","topic_en":"Much / Many / A lot of","topic_tr":"Miktar Belirteçleri (Much / Many / A lot of)","accepted_answers":["Much Many A lot of","Much / Many","Much Many","Quantifiers","Miktar Belirteçleri","Much and Many","Much","Many","A lot of"],"signal_words":["how much","how many","too much","too many","a lot of","plenty of"],"usage":"Miktar sormak veya çokluğu ifade etmek için kullanılır (much: sayılamaz, many: sayılabilir).","forms":{"positive":{"short":"a lot of + books / money","long":"Olumlu cümlelerde genellikle ''a lot of'' tercih edilir.","example":"She has a lot of friends. / We have a lot of time."},"negative":{"short":"not much (sayılamaz) / not many (sayılabilir)","long":"Olumsuz cümlelerde ''much'' ve ''many'' yaygındır.","example":"I don''t have much money. / He doesn''t read many books."},"question":{"short":"How much...? / How many...?","long":"How much + Sayılamaz? / How many + Çoğul?","example":"How much coffee do you drink? / How many pens do you have?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6017, 'grammar', 'some (+) & offer vs any (-) & (?)', 'Some / Any', 'Clues: ''I have some friends.'' / ''I don''t have any money.'' / ''Would you like some tea?''', 'Some (+) ve Any (- / ?)', 'a1-a2', '{"group":"Nouns","formula_short":"some: (+) & offer (?) | any: (-) & question (?)","formula_long":"(+) I have some apples / (?) Would you like some tea? | (-) I don''t have any money / (?) Do you have any milk?","topic_en":"Some / Any","topic_tr":"Some & Any (Biraz / Birkaç / Hiç)","accepted_answers":["Some / Any","Some Any","Some and Any","Some","Any"],"signal_words":["would you like some","don''t have any","are there any","is there any"],"usage":"Belirsiz miktarları ifade eder. Some olumlularda ve tekliflerde; Any olumsuzlarda ve sorularda kullanılır.","forms":{"positive":{"short":"some + plural / uncountable (+)","long":"Olumlu cümlelerde ve ikram/teklif sorularında ''some''.","example":"There is some sugar in the kitchen. / Would you like some coffee?"},"negative":{"short":"not + any (-)","long":"Olumsuz cümlelerde hiç olmadığını belirtmek için ''any''.","example":"I don''t have any brothers or sisters."},"question":{"short":"any in general questions (?)","long":"Genel soru cümlelerinde ''any''.","example":"Are there any questions? / Do you have any cash?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6018, 'grammar', 'I/he/she (Subject) vs me/him/her (Object)', 'Subject & Object Pronouns (Özne & Nesne Zamirleri)', 'Example: ''He (Subject) called me (Object).'' / ''We saw them.''', 'Özne ve Nesne Zamirleri (I/he vs me/him/them)', 'a1-a2', '{"group":"Pronouns","formula_short":"Subject: I, you, he, she, it, we, they | Object: me, you, him, her, it, us, them","formula_long":"Subject (eylemi yapan) + Verb + Object (eylemden etkilenen nesne)","topic_en":"Subject & Object Pronouns","topic_tr":"Özne & Nesne Zamirleri","accepted_answers":["Subject & Object Pronouns","Subject and Object Pronouns","Pronouns","Özne ve Nesne Zamirleri","Zamirler","Subject Pronouns","Object Pronouns"],"signal_words":["me","you","him","her","us","them","with me","for him","to us"],"usage":"Özne zamirleri (I, you, he...) cümlenin öznesi; nesne zamirleri (me, him, them...) fiilin nesnesidir.","forms":{"positive":{"short":"He (Subj) loves her (Obj)","long":"Özne cümlenin başında, nesne fiil veya edattan sonra gelir.","example":"She gave the book to me."},"negative":{"short":"They don''t know us","long":"Nesne zamiri fiilin hemen arkasında yer alır.","example":"I didn''t invite them to the party."},"question":{"short":"Can you help me?","long":"Soru cümlesinde de nesne fiilden sonra gelir.","example":"Do you know him?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6019, 'grammar', 'my/your/their (Adj) vs mine/yours/theirs (Pronoun)', 'Possessive Adjectives & Pronouns', 'Clues: ''This is my dog.'' (Adj) vs ''The dog is mine.'' (Pronoun).', 'Sahiplik Sıfatları (my/your) ve Zamirleri (mine/yours)', 'a1-a2', '{"group":"Pronouns","formula_short":"Adj + Noun: my, your, his, her, our, their | Pronoun: mine, yours, his, hers, ours, theirs","formula_long":"Possessive Adj: my car, your pen | Possessive Pronoun: That car is mine, This pen is yours","topic_en":"Possessive Adjectives & Pronouns","topic_tr":"Sahiplik Sıfatları & Zamirleri","accepted_answers":["Possessive Adjectives & Pronouns","Possessives","Possessive Pronouns","Possessive Adjectives","İyelik Zamirleri","Sahiplik Sıfatları ve Zamirleri"],"signal_words":["my","your","his","her","its","our","their","mine","yours","hers","ours","theirs","whose"],"usage":"Aitlik bildirir. my/your isimden önce gelir (my car); mine/yours isimsiz tek başına kullanılır (it is mine).","forms":{"positive":{"short":"my/your + noun vs mine/yours","long":"Sıfat isimle kullanılır, zamir ismin yerine geçer (tek başına durur).","example":"This is my bag. / That bag is mine."},"negative":{"short":"It is not hers / It isn''t our car","long":"Olumsuzda da aynı kural geçerlidir.","example":"That phone isn''t mine; it''s hers."},"question":{"short":"Whose is this? Is it yours?","long":"Whose (kimin) sorusuna sahiplik zamiriyle cevap verilir.","example":"Whose car is that? - It''s ours."}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6020, 'grammar', 'Owner + ''s (Ali''s car, the boys'' room)', 'Possessive Case (''s - İyelik Eki)', 'Example: ''This is Ali''s car.'' / ''The girls'' school is near here.''', 'Kesme İşareti ile Sahiplik (''s İyelik Eki)', 'a1-a2', '{"group":"Pronouns","formula_short":"Singular: Name/Noun + ''s (Ali''s car) | Plural: Noun'' + ... (boys'' room)","formula_long":"Owner + ''s + possession -> John''s computer, the teacher''s desk, children''s toys","topic_en":"Possessive Case (''s)","topic_tr":"Possessive Case (''s - İyelik Eki)","accepted_answers":["Possessive Case","Possessive ''s","Apostrophe s","Apostrof Sahiplik","İyelik Eki (''s)","Possessive S","Possessive"],"signal_words":["''s","whose","Ali''s","my brother''s","the doctor''s"],"usage":"İnsan veya hayvanların bir şeye sahip olduğunu göstermek için ismin sonuna gelen kesme işareti (''s).","forms":{"positive":{"short":"Ali''s phone / the teacher''s car","long":"Tekil isimlere ve özel adlara ''s eklenir.","example":"David''s father is a doctor."},"negative":{"short":"Irregular plurals take ''s: children''s books","long":"-s ile bitmeyen düzensiz çoğullar ''s alır.","example":"The women''s bags are here."},"question":{"short":"Regular plurals take only '': students'' books","long":"-s ile biten çoğullara sadece kesme işareti ('') konur.","example":"The students'' scores were high."}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6021, 'grammar', 'myself / yourself / himself / herself (Dönüşlü Zamirler)', 'Reflexive Pronouns (Dönüşlü Zamirler)', 'Example: ''I cut myself with the knife.'' / ''She repaired the car herself.''', 'Dönüşlü Zamirler (myself, himself, themselves)', 'a1-a2', '{"group":"Pronouns","formula_short":"myself, yourself, himself, herself, itself, ourselves, yourselves, themselves","formula_long":"Subject + Verb + Reflexive Pronoun (eylem öznenin kendisine döner veya ''bizzat / kendi kendine'' vurgulanır)","topic_en":"Reflexive Pronouns","topic_tr":"Dönüşlü Zamirler (-self / -selves)","accepted_answers":["Reflexive Pronouns","Reflexive Pronoun","Dönüşlü Zamirler","Dönüşlü Zamir","Reflexive"],"signal_words":["myself","yourself","himself","herself","itself","ourselves","themselves","by myself"],"usage":"Özne ile nesne aynı olduğunda (-self / -selves) veya eylemin tek başına/bizzat yapıldığını vurgularken.","forms":{"positive":{"short":"I did it myself / She hurt herself","long":"Eylemi yapan ve etkilenen aynı kişiyse veya kendi başına yapıldıysa kullanılır.","example":"He made this cake himself. / Take care of yourself!"},"negative":{"short":"by + reflexive: by myself (tek başıma)","long":"by myself = on my own (kendi başıma / yalnız).","example":"I don''t like living by myself."},"question":{"short":"Did you do it yourself?","long":"Bizzat kendin mi yaptın sorusunda kullanılır.","example":"Did they paint the house themselves?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6022, 'grammar', 'do/does/did + V1 (Yardımcı Fiiller)', 'Auxiliary Verbs (Yardımcı Fiiller: Do / Does / Did)', 'Example: ''Does she work here?'' / ''He didn''t go to school.'' (Rule: Always followed by V1).', 'Yardımcı Fiiller (do/does/did + V1 kuralı)', 'a1-a2', '{"group":"Modals","formula_short":"do/does/did + Base Verb (V1)","formula_long":"Present: do/does + not + V1 | Past: did + not + V1 | Question: Do/Does/Did + S + V1?","topic_en":"Auxiliary Verbs","topic_tr":"Yardımcı Fiiller (Do / Does / Did)","accepted_answers":["Auxiliary Verbs","Auxiliary Verb","Yardımcı Fiiller","Yardımcı Fiil","Do Does Did","Auxiliary"],"signal_words":["do","does","did","don''t","doesn''t","didn''t","Y.F"],"usage":"Soru ve olumsuz cümle yapımında kullanılır. Yanlarındaki ana fiil her zaman V1 (yalın) halde kalır.","forms":{"positive":{"short":"do/does (present) / did (past)","long":"Yardımcı fiil devreye girdiğinde ana fiil DAİMA yalın (V1) kalır.","example":"He did go to the store. (emphasis)"},"negative":{"short":"don''t / doesn''t / didn''t + V1","long":"❌ didn''t went yerine ✅ didn''t go.","example":"She didn''t call me yesterday. / I don''t eat meat."},"question":{"short":"Do/Does/Did + S + V1?","long":"Soru sorarken başa gelir, ana fiil V1 olur.","example":"Did you finish your project? / Does he speak Turkish?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6023, 'grammar', 'S + can / could + V1', 'Can / Could (Yetenek ve İzin)', 'Example: ''She can play the piano.'' / ''Could you open the door, please?''', 'Modal Fiiller: Can (şimdiki yetenek) ve Could (geçmiş yetenek / kibar rica)', 'a1-a2', '{"group":"Modals","formula_short":"S + can/could + V1 | can''t/couldn''t + V1","formula_long":"Present Ability: can + V1 | Past Ability: could + V1 | Polite Request: Could you please...?","topic_en":"Can / Could","topic_tr":"Can & Could (Yetenek ve İzin)","accepted_answers":["Can Could","Can / Could","Can","Could","Modal Can","Yetenek ve İzin","Can and Could"],"signal_words":["can","could","can''t","couldn''t","ability","polite request"],"usage":"Şimdiki yetenek/olanak için ''can'', geçmiş yetenek veya kibarca ricada bulunmak için ''could'' kullanılır.","forms":{"positive":{"short":"can + V1 (şimdiki) / could + V1 (geçmiş)","long":"Özneden bağımsız olarak daima yalın fiil (V1) ile birleşir.","example":"I can speak English. / When I was 6, I could swim."},"negative":{"short":"cannot (can''t) / couldn''t + V1","long":"Yetersizlik veya izin verilmeyen durumlar.","example":"She can''t come today. / I couldn''t sleep last night."},"question":{"short":"Can / Could + S + V1?","long":"Yetenek sormak veya kibar rica/istek bildirmek.","example":"Could you pass the salt, please? / Can you drive?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6024, 'grammar', 'S + must / have to + V1', 'Must / Have to (Zorunluluk)', 'Example: ''You must stop at red lights.'' / ''You don''t have to wake up early tomorrow.''', 'Zorunluluk Modalları (must, have to, don''t have to, mustn''t)', 'a1-a2', '{"group":"Modals","formula_short":"must + V1 (kişisel) | have to + V1 (kural/dışsal) | don''t have to (gerek yok)","formula_long":"Must: içten gelen zorunluluk | Have to: kanun/dış kural | Mustn''t: yasak | Don''t have to: zorunluluk yok","topic_en":"Must / Have to","topic_tr":"Must & Have to (Zorunluluk)","accepted_answers":["Must Have to","Must / Have to","Must","Have to","Zorunluluk Modalları","Must and Have to"],"signal_words":["must","have to","has to","mustn''t","don''t have to","obligation","rule"],"usage":"Zorunlulukları anlatır. Must kişisel karardır; have to kurallar ve kanunlardır; mustn''t yasaktır.","forms":{"positive":{"short":"must + V1 / have to + V1","long":"Yapılması zorunlu eylemleri belirtir.","example":"I must study for the exam. / You have to wear a seatbelt."},"negative":{"short":"mustn''t (yasak) vs don''t have to (gerek yok)","long":"⚠️ Mustn''t = kesin yasak (don''t do it!), Don''t have to = gerek yok (isteğe bağlı).","example":"You mustn''t smoke here (yasak). / You don''t have to pay now (gerek yok)."},"question":{"short":"Do I have to...? / Must we...?","long":"Zorunluluk sorusu.","example":"Do we have to leave right now?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6025, 'grammar', 'S + should / shouldn''t + V1', 'Should / Shouldn''t (Tavsiye)', 'Example: ''You should drink more water.'' / ''You shouldn''t stay up late.''', 'Tavsiye ve Öneri Modalı (should / shouldn''t + V1)', 'a1-a2', '{"group":"Modals","formula_short":"S + should/shouldn''t + V1","formula_long":"Subject + should + Base Verb (V1) (tavsiye) | should not (shouldn''t) (yapılmaması önerilen)","topic_en":"Should / Shouldn''t","topic_tr":"Should & Shouldn''t (Tavsiye & Öneri)","accepted_answers":["Should Shouldn''t","Should / Shouldn''t","Should","Shouldn''t","Tavsiye Modalı","Should and Shouldn''t"],"signal_words":["should","shouldn''t","ought to","advice","you should see a doctor","I think you should"],"usage":"Öğüt, öneri ve tavsiye vermek için kullanılır. Zorunluluk değil, iyi bir fikir olduğunu belirtir.","forms":{"positive":{"short":"should + V1 (tavsiye)","long":"Birine yapmasının doğru veya iyi olacağını söylerken.","example":"You look tired; you should go to bed."},"negative":{"short":"shouldn''t + V1 (olumsuz tavsiye)","long":"Birine bir şeyi yapmamasını öğütlerken.","example":"You shouldn''t eat so much junk food."},"question":{"short":"Should + S + V1?","long":"Fikir veya tavsiye danışırken.","example":"What should I wear tonight? / Should we call him?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6026, 'grammar', 'What / Where / When / Who / Why / How + Aux + S + V?', 'Question Words (Wh- Soru Kelimeleri)', 'Examples: ''Where do you go?'' / ''Why are you learning English?'' / ''How often do you travel?''', 'Soru Kelimeleri (What, Where, When, Who, Why, How)', 'a1-a2', '{"group":"Modals","formula_short":"What / Where / When / Who / Why / Which / How (+ Aux + S + V?)","formula_long":"Wh- Word + Auxiliary (do/does/is/can) + Subject + Verb + ...?","topic_en":"Question Words","topic_tr":"Question Words (Wh- Soru Kelimeleri)","accepted_answers":["Question Words","Wh Questions","Wh- Words","Soru Kelimeleri","Wh- Soru Kelimeleri","Wh Words"],"signal_words":["what","where","when","who","why","which","how","how often","how much","how many"],"usage":"Evet/hayır cevabı yerine bilgi isteyen açık uçlu soru sormak için cümlenin en başına gelir.","forms":{"positive":{"short":"What (ne), Where (nerede), When (ne zaman)","long":"Bilgi almak için sorulan cümlenin en başında yer alır.","example":"Where do you live? / What is your name?"},"negative":{"short":"Who (kim), Why (neden), Which (hangisi)","long":"Sebepler, kişiler ve seçenekler için kullanılır.","example":"Why are you late? / Who called you?"},"question":{"short":"How (nasıl), How often (ne sıklıkla), How much/many","long":"How ile türetilen miktar, sıklık ve yaş soruları.","example":"How often do you exercise? / How old are you?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6027, 'grammar', 'taller than / more expensive than (Karşılaştırma)', 'Comparatives (Karşılaştırma Sıfatları)', 'Clues: ''taller than'', ''faster than'', ''more beautiful than'', ''better than''.', 'Karşılaştırma Sıfatları (-er than / more than)', 'a1-a2', '{"group":"Adjectives & Adverbs","formula_short":"adj + -er + than (taller than) | more + adj + than (more expensive than)","formula_long":"Kısa sıfat: A is older than B | Uzun sıfat: A is more comfortable than B | Düzensiz: better, worse, farther","topic_en":"Comparatives","topic_tr":"Comparatives (Karşılaştırma Sıfatları)","accepted_answers":["Comparatives","Comparative","Comparative Adjectives","Karşılaştırma Sıfatları","Karşılaştırma"],"signal_words":["than","more","-er","better","worse","bigger","taller","less"],"usage":"İki kişiyi, yeri veya nesneyi birbiriyle kıyaslamak için kullanılır (-er than / more than).","forms":{"positive":{"short":"taller than / more expensive than","long":"İki nesne veya kişiyi kıyaslarken sıfata -er veya başına more eklenir.","example":"An elephant is bigger than a horse. / Gold is more expensive than silver."},"negative":{"short":"not as ... as (kadar değil)","long":"Eşitlik olumsuzluğu: not as tall as.","example":"He is not as tall as his brother."},"question":{"short":"Who is taller? / Which one is better?","long":"Hangisi daha... sorusu.","example":"Is English easier than German?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6028, 'grammar', 'the tallest / the most beautiful (En Üstünlük)', 'Superlatives (En Üstünlük Sıfatları)', 'Clues: ''the highest mountain'', ''the most popular sport'', ''the best film''.', 'En Üstünlük Sıfatları (the -est / the most)', 'a1-a2', '{"group":"Adjectives & Adverbs","formula_short":"the + adj + -est (the tallest) | the most + adj (the most beautiful)","formula_long":"Kısa sıfat: the highest mountain | Uzun sıfat: the most interesting film | Düzensiz: the best, the worst","topic_en":"Superlatives","topic_tr":"Superlatives (En Üstünlük Sıfatları)","accepted_answers":["Superlatives","Superlative","Superlative Adjectives","En Üstünlük Sıfatları","Üstünlük Sıfatları"],"signal_words":["the -est","the most","the best","the worst","in the world","in the class","of all"],"usage":"Üç veya daha fazla şey arasında ''en'' olanı (en uzun, en pahalı, en iyi) belirtmek için kullanılır.","forms":{"positive":{"short":"the + -est / the most + adj","long":"Bir grubun içindeki ''en'' olanı ifade eder, başına mutlaka ''the'' gelir.","example":"Everest is the highest mountain in the world. / She is the most intelligent student."},"negative":{"short":"the least + adj (en az)","long":"En az üstünlük.","example":"This is the least expensive option."},"question":{"short":"What is the longest river?","long":"En... olan nedir sorusu.","example":"Who is the fastest runner in the team?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6029, 'grammar', 'always / usually / often / sometimes / never + V1', 'Adverbs of Frequency (Sıklık Zarfları)', 'Clues: always (100%), usually (80%), sometimes (50%), never (0%). Position: before main verb.', 'Sıklık Zarfları (always, usually, sometimes, never)', 'a1-a2', '{"group":"Adjectives & Adverbs","formula_short":"Subject + adverb + main verb | Subject + be + adverb","formula_long":"always (100%) > usually (80%) > often (60%) > sometimes (50%) > rarely (20%) > never (0%)","topic_en":"Adverbs of Frequency","topic_tr":"Adverbs of Frequency (Sıklık Zarfları)","accepted_answers":["Adverbs of Frequency","Frequency Adverbs","Sıklık Zarfları","Sıklık Zarfı","Frequency"],"signal_words":["always","usually","often","sometimes","rarely","seldom","never","hardly ever","how often"],"usage":"Bir eylemin ne sıklıkla yapıldığını ifade eder. Genellikle Present Simple (Geniş Zaman) ile kullanılır.","forms":{"positive":{"short":"I always wake up early / He is usually happy","long":"Ana fiilden önce, ''to be'' (am/is/are) fiilinden sonra gelir.","example":"I often drink green tea. / She is always on time."},"negative":{"short":"never = not ever (olumsuz anlam)","long":"Never zaten olumsuzluk içerdiği için cümle yapısı olumlu kurulur.","example":"He never eats pork. (❌ He doesn''t never eat)"},"question":{"short":"How often do you...?","long":"Eylemin ne sıklıkla yapıldığını sorar.","example":"How often do you travel abroad?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6030, 'grammar', 'There is (tekil/sayılamaz) vs There are (çoğul)', 'There is / There are (Var / Yok)', 'Example: ''There is a book on the table.'' / ''There are two spiders on the wall!''', 'Var/Yok Cümleleri (There is / There are)', 'a1-a2', '{"group":"Structures","formula_short":"Singular/Uncountable: There is | Plural: There are | (-) isn''t / aren''t","formula_long":"(+) There is a cat / There is some milk | There are three cars | (-) There isn''t any milk | (?) Is there / Are there...?","topic_en":"There is / There are","topic_tr":"There is & There are (Var / Yok)","accepted_answers":["There is There are","There is / There are","There is","There are","Var Yok","There be"],"signal_words":["there is","there are","there isn''t","there aren''t","is there","are there"],"usage":"Bir nesnenin veya kişinin belirli bir yerde mevcut (var) veya yok olduğunu ifade eder.","forms":{"positive":{"short":"There is + singular / There are + plural","long":"Bir yerde bir şeyin var olduğunu bildirmek için kullanılır.","example":"There is a supermarket near my house. / There are 30 students in the class."},"negative":{"short":"There isn''t / There aren''t","long":"Yok olduğunu bildirmek için.","example":"There isn''t any milk left. / There aren''t any tickets."},"question":{"short":"Is there...? / Are there...?","long":"Var mı sorusu.","example":"Is there a hospital nearby? / Are there any questions?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6031, 'grammar', 'S + have/has got (Sahiplik)', 'Have got / Has got', 'Example: ''I have got a bicycle.'' / ''She has got brown eyes.'' / ''Have you got any money?''', 'Sahiplik İfadesi (Have got / Has got)', 'a1-a2', '{"group":"Structures","formula_short":"S + have/has got | (-) haven''t/hasn''t got | (?) Have/Has + S + got?","formula_long":"I/You/We/They have got (''ve got) | He/She/It has got (''s got) | Sahiplik, aile fertleri ve fiziksel özellikler","topic_en":"Have got / Has got","topic_tr":"Have got & Has got (Sahiplik)","accepted_answers":["Have got Has got","Have got / Has got","Have got","Has got","Sahiplik (Have got)","Have/Has got"],"signal_words":["have got","has got","haven''t got","hasn''t got","''ve got","''s got"],"usage":"Bir şeye sahip olmayı, aile üyelerini veya fiziksel özellikleri belirtir (I have got = I have).","forms":{"positive":{"short":"I''ve got a car / She''s got blue eyes","long":"Sahip olunan şeyleri belirtmek için (İngiliz İngilizcesinde çok yaygın).","example":"I have got two sisters. / He has got a new bicycle."},"negative":{"short":"haven''t got / hasn''t got","long":"Sahip olunmayan durumlar.","example":"We haven''t got much time. / She hasn''t got a car."},"question":{"short":"Have you got...? / Has she got...?","long":"Sahiplik sorusu.","example":"Have you got a pen I can borrow? / Has he got a dog?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6032, 'grammar', 'V1! (Sit down!) vs Don''t + V1! (Don''t run!)', 'Imperatives (Emir Cümleleri)', 'Example: ''Sit down, please!'' / ''Don''t touch that!'' (Rule: No subject, starts with V1).', 'Emir Cümleleri (Yalın Fiil! / Don''t + Fiil!)', 'a1-a2', '{"group":"Structures","formula_short":"(+) Base Verb (V1)! | (-) Don''t + Base Verb (V1)!","formula_long":"Özne kullanılmaz! Cümle doğrudan yalın fiil ile başlar: Sit down! / Listen! / Don''t run! / Don''t speak!","topic_en":"Imperatives","topic_tr":"Imperatives (Emir Cümleleri)","accepted_answers":["Imperatives","Imperative","Emir Cümleleri","Emir Kipi"],"signal_words":["don''t","please","let''s","listen!","look!","be quiet!"],"usage":"Emir vermek, talimat veya tavsiye sunmak için kullanılır. Cümlede özne (you) söylenmez, doğrudan fiille başlar.","forms":{"positive":{"short":"V1! (Open the door!)","long":"Talimat, emir, yön tarifi veya doğrudan tavsiye verirken.","example":"Turn left at the traffic lights. / Please sit down."},"negative":{"short":"Don''t + V1! (Don''t touch!)","long":"Bir şeyin yapılmamasını emrederken başına ''Don''t'' gelir.","example":"Don''t forget your umbrella! / Don''t make noise!"},"question":{"short":"Let''s + V1 (hadi yapalım)","long":"Birlikte yapma önerisinde ''Let''s'' kullanılır.","example":"Let''s go to the cinema!"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6033, 'grammar', 'in / on / at (Zaman ve Yer Edatları)', 'Prepositions of Place & Time (In / On / At)', 'Clues: at 7:00 (exact time), on Monday (days), in 2024 (years/months).', 'Zaman ve Yer Edatları (In, On, At)', 'a1-a2', '{"group":"Structures","formula_short":"Time: at 5 PM, on Monday, in July | Place: at the door, on the table, in the room","formula_long":"IN (aylar, yıllar, mevsimler, kapalı alanlar) | ON (günler, tarihler, yüzeyler) | AT (saatler, net noktalar)","topic_en":"Prepositions of Place & Time","topic_tr":"Prepositions of Place & Time (In / On / At)","accepted_answers":["Prepositions of Place and Time","Prepositions","In On At","Edatlar","Zaman ve Yer Edatları","Prepositions of Place","Prepositions of Time"],"signal_words":["in July","in 2025","in the morning","on Monday","on the table","at 9 PM","at night","at home"],"usage":"Zaman ve yer konumlarını belirtir: In (genel/ay/yıl/içinde), On (gün/tarih/yüzey), At (nokta/saat).","forms":{"positive":{"short":"at 8:00 / on Sunday / in 2024","long":"Zaman ve konum bildiren temel üç edatın hiyerarşisi.","example":"The meeting is at 3 PM on Monday in July."},"negative":{"short":"at home / on the wall / in the car","long":"Konum edatları: at (nokta), on (yüzey), in (içinde).","example":"He is at home. The picture is on the wall."},"question":{"short":"When? At 5. Where? In London.","long":"When ve Where sorularının temel edat yanıtları.","example":"Where is the cat? - It is in the box."}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6034, 'grammar', 'and / but / so / because / or (Bağlaçlar)', 'Linking Words (Bağlaçlar)', 'Examples: ''He was tired, so he slept.'' / ''I called him, but he didn''t answer.'' / ''She smiled because she won.''', 'Cümle Bağlaçları (and, but, so, because, or)', 'a1-a2', '{"group":"Structures","formula_short":"and (ve) | but (ama) | so (bu yüzden) | because (çünkü) | or (veya)","formula_long":"Sentence A + [and / but / so / because / or] + Sentence B","topic_en":"Linking Words","topic_tr":"Linking Words (Bağlaçlar: And, But, So, Because, Or)","accepted_answers":["Linking Words","Conjunctions","Bağlaçlar","And But So Because","Connectors"],"signal_words":["and","but","so","because","or","although"],"usage":"İki cümleyi veya fikri birbirine bağlar. And (ekleme), but (zıtlık), because (sebep), so (sonuç), or (seçenek).","forms":{"positive":{"short":"because (neden) vs so (sonuç)","long":"Because nedene, so sonuca bağlar.","example":"I stayed home because it was raining. / It was raining, so I stayed home."},"negative":{"short":"but (zıtlık) vs and (ekleme)","long":"But zıt iki fikri, and benzer fikirleri bağlar.","example":"He is rich but unhappy. / She likes tea and coffee."},"question":{"short":"or (seçenek)","long":"İki seçenek arasında tercih sunarken.","example":"Do you want tea or coffee?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6035, 'grammar', 'If + Present Simple, will + V1 (First Conditional)', 'Zero & First Conditional (Koşul Cümleleri)', 'Example: ''If it rains tomorrow, we will stay at home.'' (Pattern: If + Present, will + V1).', 'Koşul Cümleleri: First Conditional (If + Present, will + V1)', 'a1-a2', '{"group":"Conditionals","formula_short":"Zero: If + Present, Present | First: If + Present Simple, will + V1","formula_long":"Zero (genel kural): If you heat water, it boils. | First (gelecekte olası): If it rains tomorrow, we will stay home.","topic_en":"Zero & First Conditional","topic_tr":"Zero & First Conditional (Koşul Cümleleri)","accepted_answers":["Conditionals","Zero and First Conditional","First Conditional","Zero Conditional","If Clauses","Koşul Cümleleri"],"signal_words":["if","unless (if not)","if it rains","will","condition"],"usage":"Zero: Genel bilimsel doğrular. First Conditional: Gelecekte gerçekleşmesi muhtemel durumlar ve olası sonuçları.","forms":{"positive":{"short":"If + Present Simple, will + V1","long":"Gelecekte olması muhtemel durumlar ve onların sonuçları.","example":"If I study hard, I will pass the exam."},"negative":{"short":"If + S + don''t/doesn''t + V1, won''t + V1","long":"Olumsuz koşul cümleleri.","example":"If you don''t hurry, you will miss the train."},"question":{"short":"What will you do if it rains?","long":"Koşul ve sonuç soruları.","example":"Will you come if I invite you?"}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6036, 'grammar', 'for (süreç: for 3 years) vs since (başlangıç: since 2020)', 'For and Since (Süreç ve Başlangıç)', 'Clues: for 5 hours (duration) vs since 2 o''clock (starting point).', 'For (süreç: for 3 days) ve Since (başlangıç noktası: since 2018)', 'a1-a2', '{"group":"Conditionals","formula_short":"For + Period (for 3 years) | Since + Specific Point (since 2020, since morning)","formula_long":"Present Perfect ile: For = süreç uzunluğu (for 10 minutes, for 2 days) | Since = eylemin başladığı nokta (since yesterday, since 5 o''clock)","topic_en":"For and Since","topic_tr":"For & Since (Zaman Edatları - Süreç ve Başlangıç)","accepted_answers":["For and Since","For / Since","For Since","For","Since","For ve Since"],"signal_words":["for three days","for a long time","since 2020","since yesterday","since childhood","how long"],"usage":"Present Perfect ile eylemin ne kadar süredir devam ettiğini (for) veya ne zaman başladığını (since) belirtir.","forms":{"positive":{"short":"have lived here for 5 years / since 2019","long":"Geçmişten bugüne süren eylemin zamanını belirtirken.","example":"I have known him for ten years. / She has worked here since January."},"negative":{"short":"haven''t seen him since Monday","long":"Belli bir zamandan beri yapılmayan eylem.","example":"I haven''t eaten anything for six hours."},"question":{"short":"How long have you lived here?","long":"How long sorusuna For veya Since ile cevap verilir.","example":"How long have you been in Istanbul? - Since 2020."}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

INSERT INTO public.learning_items (id, category_slug, en, tr, hint_en, hint_tr, level_tag, metadata)
VALUES (6037, 'grammar', 'He said (that) he was tired (Dolaylı Anlatım)', 'Reported Speech (Dolaylı Anlatım - Temel)', 'Example: Direct: ''I am hungry.'' → Indirect: ''He said he was hungry.''', 'Dolaylı Anlatım (He said that... zamanın geçmişe kayması)', 'a1-a2', '{"group":"Conditionals","formula_short":"He said (that) S + Past Tense... / She told me (that)...","formula_long":"Direct: ''I am tired'' → Reported: He said that he was tired. (Present tense geçmiş zamana kayar)","topic_en":"Reported Speech","topic_tr":"Reported Speech (Dolaylı Anlatım - Temel)","accepted_answers":["Reported Speech","Indirect Speech","Dolaylı Anlatım","Aktarılan Söz"],"signal_words":["he said that","she told me","he asked if","reported speech"],"usage":"Bir başkasının söylediği cümleyi aktarırken kullanılır. Ana fiil ''said/told'' olduğunda cümle bir derece geçmiş zamana kayar.","forms":{"positive":{"short":"am/is → was | have → had | will → would","long":"Bir başkasının söylediği sözü aktarırken zaman bir derece geçmişe kayar.","example":"''I like pizza.'' → He said that he liked pizza."},"negative":{"short":"don''t → didn''t | can''t → couldn''t","long":"Olumsuz aktarma.","example":"''I cannot come.'' → She said she couldn''t come."},"question":{"short":"He asked if / whether...","long":"Dolaylı soru sorma.","example":"He asked me if I was hungry."}}}'::jsonb)
ON CONFLICT (id) DO UPDATE SET 
    category_slug = EXCLUDED.category_slug,
    en = EXCLUDED.en,
    tr = EXCLUDED.tr,
    hint_en = EXCLUDED.hint_en,
    hint_tr = EXCLUDED.hint_tr,
    level_tag = EXCLUDED.level_tag,
    metadata = EXCLUDED.metadata;

