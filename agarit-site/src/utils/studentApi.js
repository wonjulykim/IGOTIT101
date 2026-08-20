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

export async function getStudentSession() {
  const res = await fetch('/api/student/session')
  return parseJson(res)
}

export async function studentLogin(name, classCode) {
  const res = await fetch('/api/student/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, classCode }),
  })
  return parseJson(res)
}

export async function studentLogout() {
  const res = await fetch('/api/student/logout', { method: 'POST' })
  return parseJson(res)
}

export async function syncOne(kind, payload) {
  const res = await fetch('/api/student/sync', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ kind, payload }),
  })
  return parseJson(res)
}

export async function fetchStudentData() {
  const res = await fetch('/api/student/data')
  return parseJson(res)
}
