const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions'
const DEFAULT_MODEL = 'openai/gpt-4o-mini'

const SYSTEM_PROMPT = `너는 "아가릿(I GOT IT) 101" 중학교 영문법 학습 사이트에 붙어 있는 AI 튜터야.
대상은 중학교 1~3학년 학생이다. 다음 원칙을 지켜라.
- 항상 한국어로, 쉽고 친근하게 설명한다. 학생을 절대 무시하거나 다그치지 않는다.
- 정답만 던져주지 말고, 이 사이트가 강조하는 "왜 그런가"(원리)를 짧게 짚어준다. 예문을 함께 준다.
- 답변은 중학생이 읽기에 너무 길지 않게, 핵심만 간결하게 정리한다(불필요하게 늘어놓지 않는다).
- 질문이 영어 문법/이 책의 내용과 관련 없으면, 정중하게 문법 질문으로 화제를 돌린다.
- 숙제 정답을 그대로 알려달라는 요청에는 답을 바로 주지 말고, 스스로 풀 수 있도록 원리와 힌트를 먼저 제시한다.
- 욕설, 선정적/폭력적 내용, 개인정보 요구에는 응답하지 않고 정중히 거절한다.`

export async function askTutor(messages, { maxTokens = 500, temperature = 0.5 } = {}) {
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY가 설정되지 않았습니다.')
  }

  const trimmed = Array.isArray(messages)
    ? messages
        .filter((m) => m && typeof m.content === 'string' && (m.role === 'user' || m.role === 'assistant'))
        .slice(-12)
    : []

  const res = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      'HTTP-Referer': process.env.SITE_URL || 'https://agarit-101.local',
      'X-Title': 'Agarit 101 AI Tutor',
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_MODEL || DEFAULT_MODEL,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...trimmed],
      max_tokens: maxTokens,
      temperature,
    }),
    signal: AbortSignal.timeout(30000),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`OpenRouter 오류 (${res.status}): ${text.slice(0, 300)}`)
  }

  const data = await res.json()
  const reply = data?.choices?.[0]?.message?.content
  if (!reply) {
    throw new Error('AI 응답을 받지 못했습니다.')
  }
  return reply
}
