export async function gradeWriting(payload) {
  const res = await fetch('/api/grade', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const raw = await res.text()
  let data = null
  try {
    data = raw ? JSON.parse(raw) : null
  } catch {
    throw new Error('AI 채점 서버 응답을 해석하지 못했습니다.')
  }
  if (!res.ok) {
    throw new Error(data?.error || 'AI 채점에 실패했습니다.')
  }
  return data
}
