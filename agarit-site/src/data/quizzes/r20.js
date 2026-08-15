export const r20Quiz = {
  mcq: [
    {
      id: 'r20-mcq-1',
      q: '글쓴이(고민을 올린 학생)의 심정으로 가장 적절한 것은?',
      options: ['자신감 넘치고 행복함', '외롭고 자신에게 실망함', '화가 나고 공격적임', '전혀 신경 쓰지 않음', '친구가 너무 많아 힘듦'],
      answer: 1,
      explain: "\"Nobody seems to like me. I don't like myself, either.\"에서 외로움과 자기 실망감이 드러납니다.",
    },
  ],
  short: [
    {
      id: 'r20-short-1',
      subtype: '문장완성',
      q: '다음 조건에 맞게 위로의 덧글을 완성하시오.\n[조건] 1. 긍정적인 내용일 것 2. 위에 나온 덧글과 똑같이 반복하지 말 것 3. 3단어 이상 문장으로 쓸 것\n\nHey, ________________________________.',
      answers: [
        "sometimes it takes a long time to make close friends",
        "you're always a better person than you think",
        'it just takes time to find real friends',
      ],
      explain: '진심 어린 위로와 긍정적인 메시지를 담은 3단어 이상의 문장이면 정답으로 인정합니다.',
    },
    {
      id: 'r20-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 형태를 쓰시오. (동사원형 hate를 활용, 동명사 형태로)\n"Stop ________ yourself for what you\'re not." (hate)',
      answers: ['hating'],
      explain: 'stop은 목적어로 동명사(hating)를 취합니다.',
    },
  ],
  essay: [
    {
      id: 'r20-essay-1',
      subtype: '서술형',
      q: '친구가 힘든 일을 겪고 있을 때 힘이 되어준 경험이 있다면(또는 앞으로 그렇게 하고 싶다면), 어떤 말이나 행동으로 위로했는지(또는 위로하고 싶은지) 서술하시오.',
      standard: '[10영04-03] 일상생활이나 친숙한 일반적 주제에 관해 자신의 의견이나 감정을 쓸 수 있다.',
      difficulty: '중',
      score: 10,
      conditions: ['구체적인 상황을 포함할 것', '실제로 사용한(또는 사용하고 싶은) 위로의 말을 포함할 것'],
      model:
        "Last year, my friend felt really down after failing an important test. I told her, \"One test doesn't define who you are, and I know how hard you worked.\" We then studied together for the next test, and she felt much more confident. Small words of encouragement can really help someone feel less alone during a hard time.",
      totalScore: 10,
      rubric: [
        {
          criterion: '구체적 상황 및 위로의 말',
          maxScore: 6,
          levels: [
            { score: 6, desc: '구체적인 상황과 실제 위로의 말(또는 계획)을 명확하게 제시함' },
            { score: 3, desc: '상황이나 위로의 말 중 하나가 다소 막연함' },
            { score: 1, desc: '상황과 위로의 말을 거의 제시하지 않음' },
          ],
        },
        {
          criterion: '언어 사용의 정확성',
          maxScore: 4,
          levels: [
            { score: 4, desc: '문법과 어휘 사용이 정확함' },
            { score: 2, desc: '오류가 있으나 의미 전달에 지장 없음' },
            { score: 1, desc: '오류가 많아 의미 전달이 어려움' },
          ],
        },
      ],
    },
  ],
}
