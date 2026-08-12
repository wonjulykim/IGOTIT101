async function parseJson(res) {
  const raw = await res.text()
  let data = null
  try {
    data = raw ? JSON.parse(raw) : null
  } catch {
    throw new Error('서버 응답을 읽지 못했습니다.')
  }
  if (!res.ok) throw new Error(data?.error || `요청 실패 (${res.status})`)
  return data
}

export async function getSession() {
  const res = await fetch('/api/admin/session')
  return parseJson(res)
}

export async function login(password) {
  const res = await fetch('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  })
  return parseJson(res)
}

export async function logout() {
  const res = await fetch('/api/admin/logout', { method: 'POST' })
  return parseJson(res)
}

export async function getOverride(chapterId, lessonId) {
  const res = await fetch(`/api/admin/lesson?chapterId=${encodeURIComponent(chapterId)}&lessonId=${encodeURIComponent(lessonId)}`)
  return parseJson(res)
}

export async function saveOverride(chapterId, lessonId, { title, blocks }) {
  const res = await fetch(`/api/admin/lesson?chapterId=${encodeURIComponent(chapterId)}&lessonId=${encodeURIComponent(lessonId)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, blocks }),
  })
  return parseJson(res)
}

export async function revertOverride(chapterId, lessonId) {
  const res = await fetch(`/api/admin/lesson?chapterId=${encodeURIComponent(chapterId)}&lessonId=${encodeURIComponent(lessonId)}`, {
    method: 'DELETE',
  })
  return parseJson(res)
}
