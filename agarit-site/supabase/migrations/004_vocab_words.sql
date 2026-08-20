-- 학생 개인 단어장. 어휘 노트에서 저장한 단어를 학생별로 보관한다.

create table if not exists vocab_words (
  student_id uuid not null references students(id) on delete cascade,
  unit_id text not null,
  word text not null,
  meaning text not null default '',
  added_at timestamptz not null default now(),
  primary key (student_id, unit_id, word)
);

create index if not exists vocab_words_student_idx on vocab_words(student_id);

alter table vocab_words enable row level security;

-- 서버(API 라우트)는 service role 키로 접근하므로 RLS를 우회한다.
-- 아래 정책은 명시적으로 아무 접근도 허용하지 않아 anon/authenticated 키로는 막아둔다.
