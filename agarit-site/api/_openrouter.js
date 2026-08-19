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

const GRADER_SYSTEM_PROMPT = `너는 한국 중·고등학교 영어과 서술형/논술형 쓰기 평가를 채점하는 전문 교사야.
학생이 작성한 영어 답안을 아래에 주어지는 채점 루브릭에 따라 엄격하고 공정하게 채점한다.
- 각 루브릭 항목(criterion)마다 해당 항목의 만점(maxScore) 이하의 정수 점수를 부여하고, 왜 그 점수를 줬는지 한국어로 간결하게 근거(reason)를 설명한다.
- 루브릭에 제시된 가장 낮은 단계 점수(예: 1점, 2점)는 "글은 썼지만 부족한" 경우를 위한 점수다. 학생 답안이 사실상 비어 있거나, 의미 없는 문자열이거나, 문제와 전혀 관련 없는 내용이라면 루브릭 단계와 상관없이 모든 항목에 0점을 부여한다.
- 조건(conditions)이 주어졌다면 학생 답안이 각 조건을 충족했는지 true/false로 판정한다.
- 총점(totalScore)은 각 항목 점수의 합이며 만점(maxScore)을 넘을 수 없다.
- feedback에는 학생에게 도움이 되는 한국어 피드백(잘한 점 1가지 이상, 개선할 점 1가지 이상)을 3~5문장으로 작성한다.
- annotations에는 학생 답안에서 고쳐야 할 부분을 문장/구 단위로 최대 6개까지 짚어준다. 각 항목의 quote는 학생 답안 원문에서 한 글자도 틀리지 않고 그대로 가져온 연속된 substring이어야 하며(따옴표·마침표 등 포함 여부까지 원문과 동일하게), 답안에 등장하는 순서대로 배열에 담는다. 이미 잘 쓴 부분은 표시하지 않는다. 답안에 고칠 부분이 전혀 없으면 빈 배열을 반환한다.
  - type은 "grammar"(문법·시제·어순 오류), "word"(어색하거나 부정확한 단어·표현 선택), "clarity"(내용이 불명확하거나 논리적 비약이 있는 경우) 중 하나로 분류한다.
  - issue에는 무엇이 왜 문제인지 한국어로 1문장 설명한다.
  - suggestion에는 고친 영어 표현이나 문장을 제시한다.
- 반드시 아래 JSON 형식으로만 응답하고 다른 텍스트는 절대 포함하지 않는다:
{"criteria":[{"name":"...", "score":0, "maxScore":0, "reason":"..."}],"conditionsCheck":[{"condition":"...", "met":true}],"annotations":[{"quote":"...", "type":"grammar", "issue":"...", "suggestion":"..."}],"totalScore":0,"maxScore":0,"feedback":"..."}`

export async function gradeWriting({ prompt, conditions, model, similarAnswers, rubric, totalScore, studentAnswer }) {
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY가 설정되지 않았습니다.')
  }
  if (!studentAnswer || !String(studentAnswer).trim()) {
    throw new Error('채점할 답안이 비어있습니다.')
  }

  const context = [
    `[문제] ${prompt || ''}`,
    conditions?.length ? `[조건]\n${conditions.map((c) => `- ${c}`).join('\n')}` : null,
    model ? `[모범답안 예시]\n${model}` : null,
    similarAnswers?.length ? `[유사답안 예시]\n${similarAnswers.join('\n')}` : null,
    rubric?.length
      ? `[채점 루브릭]\n${rubric
          .map(
            (r) =>
              `- ${r.criterion} (만점 ${r.maxScore}점): ${r.levels?.map((l) => `${l.score}점=${l.desc}`).join(' / ') || ''}`
          )
          .join('\n')}`
      : null,
    totalScore ? `[전체 만점] ${totalScore}점` : null,
    `[학생 답안]\n${studentAnswer}`,
  ]
    .filter(Boolean)
    .join('\n\n')

  const res = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      'HTTP-Referer': process.env.SITE_URL || 'https://agarit-101.local',
      'X-Title': 'Agarit 101 AI Grader',
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_MODEL || DEFAULT_MODEL,
      messages: [
        { role: 'system', content: GRADER_SYSTEM_PROMPT },
        { role: 'user', content: context },
      ],
      max_tokens: 1000,
      temperature: 0.2,
      response_format: { type: 'json_object' },
    }),
    signal: AbortSignal.timeout(30000),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`OpenRouter 오류 (${res.status}): ${text.slice(0, 300)}`)
  }

  const data = await res.json()
  const raw = data?.choices?.[0]?.message?.content
  if (!raw) {
    throw new Error('AI 채점 응답을 받지 못했습니다.')
  }

  try {
    return JSON.parse(raw)
  } catch {
    const match = raw.match(/\{[\s\S]*\}/)
    if (match) {
      try {
        return JSON.parse(match[0])
      } catch {
        // fall through to error below
      }
    }
    throw new Error('AI 채점 결과를 해석하지 못했습니다. 다시 시도해주세요.')
  }
}
