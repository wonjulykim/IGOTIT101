-- 학생 로그인(이름 + 반 코드) 및 학습 진행 데이터 동기화용 테이블.
-- 클라이언트는 이 테이블에 직접 접근하지 않고, 반드시 /api/student/* 서버 라우트(service role 키)를 통해서만 접근한다.

create table if not exists students (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  class_code text not null,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  unique (name, class_code)
);

create table if not exists completed_lessons (
  student_id uuid not null references students(id) on delete cascade,
  chapter_id text not null,
  lesson_id text not null,
  completed_at timestamptz not null default now(),
  primary key (student_id, chapter_id, lesson_id)
);

create table if not exists quiz_scores (
  student_id uuid not null references students(id) on delete cascade,
  chapter_id text not null,
  quiz_type text not null,
  score int not null,
  total int not null,
  updated_at timestamptz not null default now(),
  primary key (student_id, chapter_id, quiz_type)
);

create table if not exists writing_results (
  student_id uuid not null references students(id) on delete cascade,
  unit_id text not null,
  question_id text not null,
  result jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (student_id, unit_id, question_id)
);

create table if not exists essay_answers (
  student_id uuid not null references students(id) on delete cascade,
  unit_id text not null,
  question_id text not null,
  answer_text text not null default '',
  updated_at timestamptz not null default now(),
  primary key (student_id, unit_id, question_id)
);

create table if not exists korean_drafts (
  student_id uuid not null references students(id) on delete cascade,
  unit_id text not null,
  question_id text not null,
  draft_text text not null default '',
  updated_at timestamptz not null default now(),
  primary key (student_id, unit_id, question_id)
);

create table if not exists step_drafts (
  student_id uuid not null references students(id) on delete cascade,
  unit_id text not null,
  question_id text not null,
  step_key text not null,
  draft_text text not null default '',
  updated_at timestamptz not null default now(),
  primary key (student_id, unit_id, question_id, step_key)
);

create index if not exists quiz_scores_student_idx on quiz_scores(student_id);
create index if not exists writing_results_student_idx on writing_results(student_id);
create index if not exists essay_answers_student_idx on essay_answers(student_id);
create index if not exists korean_drafts_student_idx on korean_drafts(student_id);
create index if not exists step_drafts_student_idx on step_drafts(student_id);
create index if not exists completed_lessons_student_idx on completed_lessons(student_id);

alter table students enable row level security;
alter table completed_lessons enable row level security;
alter table quiz_scores enable row level security;
alter table writing_results enable row level security;
alter table essay_answers enable row level security;
alter table korean_drafts enable row level security;
alter table step_drafts enable row level security;

-- 서버(API 라우트)는 service role 키로 접근하므로 RLS를 우회한다.
-- 아래 정책은 명시적으로 아무 접근도 허용하지 않아 anon/authenticated 키로는 막아둔다.
