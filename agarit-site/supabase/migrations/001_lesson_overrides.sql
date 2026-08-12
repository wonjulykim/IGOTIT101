create table if not exists lesson_overrides (
  chapter_id text not null,
  lesson_id text not null,
  title text,
  blocks jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (chapter_id, lesson_id)
);

alter table lesson_overrides enable row level security;

-- 서버(API 라우트)는 service role 키로 접근하므로 RLS를 우회한다.
-- 아래 정책은 명시적으로 아무 접근도 허용하지 않아 anon/authenticated 키로는 막아둔다.
