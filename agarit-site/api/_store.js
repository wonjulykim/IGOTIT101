// Supabase 기반 저장소 — 관리자 수정 내용(lesson override)을 DB에 저장한다.
// 함수 시그니처(getOverride/setOverride/deleteOverride/listOverrideKeys)는 이전 파일 기반 구현과 동일하게 유지.

import { createClient } from '@supabase/supabase-js'

const TABLE = 'lesson_overrides'

let client = null
function db() {
  if (!client) {
    client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    })
  }
  return client
}

export async function getOverride(chapterId, lessonId) {
  const { data, error } = await db()
    .from(TABLE)
    .select('title, blocks, updated_at')
    .eq('chapter_id', chapterId)
    .eq('lesson_id', lessonId)
    .maybeSingle()
  if (error) throw error
  if (!data) return null
  return { title: data.title, blocks: data.blocks, updatedAt: data.updated_at }
}

export async function setOverride(chapterId, lessonId, data) {
  const { error } = await db()
    .from(TABLE)
    .upsert({
      chapter_id: chapterId,
      lesson_id: lessonId,
      title: data.title ?? null,
      blocks: data.blocks,
      updated_at: new Date().toISOString(),
    })
  if (error) throw error
}

export async function deleteOverride(chapterId, lessonId) {
  const { error } = await db()
    .from(TABLE)
    .delete()
    .eq('chapter_id', chapterId)
    .eq('lesson_id', lessonId)
  if (error) throw error
}

export async function listOverrideKeys() {
  const { data, error } = await db().from(TABLE).select('chapter_id, lesson_id')
  if (error) throw error
  return (data || []).map((row) => `${row.chapter_id}/${row.lesson_id}`)
}
