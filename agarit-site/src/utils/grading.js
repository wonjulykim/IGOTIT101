// 단답형 채점: 공백/대소문자/전각기호 등을 정규화한 뒤 정답 후보군과 비교
export function normalizeAnswer(str) {
  return String(str || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[.,!?'"]/g, '')
}

export function isShortAnswerCorrect(userInput, acceptableAnswers) {
  const normalizedInput = normalizeAnswer(userInput)
  if (!normalizedInput) return false
  return acceptableAnswers.some((ans) => normalizeAnswer(ans) === normalizedInput)
}

// 서술형: 자동 정답 처리는 하지 않고, 모범답안 대비 키워드 포함 여부만 참고 지표로 제공
export function essayKeywordHits(userInput, keywords) {
  const text = String(userInput || '').toLowerCase()
  const hits = keywords.filter((k) => text.includes(String(k).toLowerCase()))
  return { hits, total: keywords.length }
}
