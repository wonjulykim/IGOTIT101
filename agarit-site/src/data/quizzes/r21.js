export const r21Quiz = {
  mcq: [
    {
      id: 'r21-mcq-1',
      q: 'Mr. Jo가 강조한 내용으로 가장 적절한 것은?',
      options: [
        '긴급한 일은 항상 나중에 해야 한다.',
        '중요하지만 긴급하지 않은 일(운동, 진로 계획 등)에도 시간을 내야 한다.',
        '다른 사람에게 도움을 요청하는 것은 게으른 행동이다.',
        '긴급하지도 중요하지도 않은 일을 가장 먼저 해야 한다.',
        '시간 관리표는 하루에 한 번만 확인하면 충분하다.',
      ],
      answer: 1,
      explain: 'Mr. Jo는 중요하지만 긴급하지 않은 일(운동, 진로 계획 등)을 위한 시간을 반드시 확보해야 한다고 강조합니다.',
    },
  ],
  short: [
    {
      id: 'r21-short-1',
      subtype: '완성형',
      q: '다음 빈칸에 들어갈 말을 지문에서 찾아 쓰시오. (숫자를 영어 단어로)\n"He showed me a table that divides tasks into ________ categories based on urgency and importance."',
      answers: ['four'],
      explain: '긴급함과 중요함을 기준으로 일을 네(four) 가지 범주로 나눈다고 설명합니다.',
    },
    {
      id: 'r21-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 단어를 쓰시오. (A도 B도 아닌)\n"I should stop doing things that are ________ urgent ________ important."',
      answers: ['neither, nor', 'neither...nor'],
      explain: '"neither A nor B"는 "A도 B도 아닌"이라는 뜻입니다.',
    },
  ],
  essay: [
    {
      id: 'r21-essay-1',
      subtype: '서술형',
      q: '이 글에서 소개한 네 가지 범주(긴급하고 중요함 / 긴급하지만 중요하지 않음 / 중요하지만 긴급하지 않음 / 둘 다 아님) 중 자신이 가장 소홀히 하는 범주를 고르고, 앞으로 어떻게 시간을 관리할지 서술하시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '중',
      score: 8,
      conditions: ['네 가지 범주 중 하나를 명확히 언급할 것', '구체적인 개선 계획을 포함할 것'],
      model:
        'I think I neglect the "important but not urgent" category the most. I rarely make time for exercise because it never feels urgent. From now on, I will set aside 30 minutes every evening for exercise, treating it as seriously as my homework, so that it becomes a regular habit instead of something I always postpone.',
      totalScore: 8,
      rubric: [
        {
          criterion: '범주 선택 및 개선 계획',
          maxScore: 5,
          levels: [
            { score: 5, desc: '범주를 명확히 언급하고 구체적인 개선 계획을 제시함' },
            { score: 3, desc: '범주는 언급했으나 계획이 막연함' },
            { score: 1, desc: '범주나 계획을 거의 제시하지 않음' },
          ],
        },
        {
          criterion: '언어 사용의 정확성',
          maxScore: 3,
          levels: [
            { score: 3, desc: '문법과 어휘 사용이 정확함' },
            { score: 2, desc: '오류가 있으나 의미 전달에 지장 없음' },
            { score: 1, desc: '오류가 많아 의미 전달이 어려움' },
          ],
        },
      ],
    },
  ],
}
