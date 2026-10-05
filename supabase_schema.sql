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

