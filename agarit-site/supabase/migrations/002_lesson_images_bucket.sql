-- lesson-images 버킷은 대시보드/스크립트로 이미 생성됨 (public, 5MB 제한).
-- 이 파일은 참고용 기록이며, 버킷이 없는 새 프로젝트에서는 아래 SQL로 만들 수 있다.
insert into storage.buckets (id, name, public, file_size_limit)
values ('lesson-images', 'lesson-images', true, 5242880)
on conflict (id) do nothing;
