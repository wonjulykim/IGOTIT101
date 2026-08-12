// 로컬 개발용 저장소 — JSON 파일에 관리자 수정 내용을 저장한다.
// 주의: Vercel 등 서버리스 배포 환경에서는 파일시스템이 읽기 전용이라 이 구현은 동작하지 않는다.
// 배포 시에는 이 파일의 함수 시그니처(getOverride/setOverride/deleteOverride/listOverrideKeys)를
// 그대로 유지한 채 내부 구현만 Supabase 등 실제 DB 호출로 교체하면 된다.

import fs from 'node:fs'
import path from 'node:path'

const DATA_DIR = path.join(process.cwd(), 'data')
const FILE = path.join(DATA_DIR, 'lesson-overrides.json')

function readAll() {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf8'))
  } catch {
    return {}
  }
}

function writeAll(obj) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(FILE, JSON.stringify(obj, null, 2), 'utf8')
}

export function getOverride(chapterId, lessonId) {
  const all = readAll()
  return all?.[chapterId]?.[lessonId] || null
}

export function setOverride(chapterId, lessonId, data) {
  const all = readAll()
  if (!all[chapterId]) all[chapterId] = {}
  all[chapterId][lessonId] = { ...data, updatedAt: new Date().toISOString() }
  writeAll(all)
}

export function deleteOverride(chapterId, lessonId) {
  const all = readAll()
  if (all[chapterId]) {
    delete all[chapterId][lessonId]
    if (Object.keys(all[chapterId]).length === 0) delete all[chapterId]
  }
  writeAll(all)
}

export function listOverrideKeys() {
  const all = readAll()
  const out = []
  for (const ch of Object.keys(all)) {
    for (const ls of Object.keys(all[ch])) out.push(`${ch}/${ls}`)
  }
  return out
}
