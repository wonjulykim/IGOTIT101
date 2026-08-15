export const r5Quiz = {
  mcq: [
    {
      id: 'r5-mcq-1',
      q: '"함께 힘을 모아 일함"이라는 의미에 해당하는 가치(Value)는?',
      options: ['Honesty', 'Cooperation', 'Courage', 'Gratitude', 'Perseverance'],
      answer: 1,
      explain: 'Cooperation(협력)은 함께 힘을 모아 일하는 것을 의미합니다.',
    },
  ],
  short: [
    {
      id: 'r5-short-1',
      q: '"어려움을 참고 견디며 끝까지 노력하는 자세"를 뜻하는 영어 단어를 표에서 찾아 쓰시오.',
      answers: ['perseverance', 'Perseverance'],
      explain: 'Perseverance(인내)가 이 의미에 해당합니다.',
    },
  ],
  essay: [
    {
      id: 'r5-essay-1',
      q: '위 표에 제시된 가치 중(또는 그 외의 가치 중) 자신이 중요하게 여기는 가치를 하나 선택하여, 그 가치에 대한 글을 아래 조건에 맞게 영어로 작성하시오.',
      standard: '[9영02-04] 친숙한 주제에 관해 경험이나 계획을 설명한다. / [9영02-06] 친숙한 주제에 관해 자신의 의견을 주장한다.',
      difficulty: '중',
      score: 15,
      conditions: [
        '자신이 중요하게 여기는 가치를 선택하고 그 의미를 제시할 것 (표에 없는 가치도 선택 가능)',
        '그 가치가 나의 행동에 미친 영향을 구체적인 경험을 들어 서술할 것',
        '그 가치가 주변 사람이나 사회에 미칠 긍정적 영향을 설득력 있게 제시할 것',
        '100~120 단어로 쓸 것',
      ],
      model:
        'I believe in the power of kindness. Kindness means being nice, helping others, and thinking about their feelings. Every day, I try to smile at my classmates and help them when they have problems. One day, I saw a new student sitting alone during lunch. I felt sad, so I walked over and invited her to sit with me. She smiled and looked much happier. I believe small acts of kindness can change someone\'s day. If more people practice kindness, the world will be more peaceful, with less conflict and more understanding between people.',
      totalScore: 15,
      rubric: [
        {
          criterion: '가치와 의미 제시',
          maxScore: 3,
          levels: [
            { score: 3, desc: '중요하게 여기는 가치와 그 의미를 명확하게 제시함' },
            { score: 2, desc: '가치 또는 의미 중 하나만 제시함' },
            { score: 1, desc: '가치와 의미를 모두 제시하지 않음' },
          ],
        },
        {
          criterion: '개인 행동에 미친 영향(경험)',
          maxScore: 4,
          levels: [
            { score: 4, desc: '가치가 개인 행동에 미친 영향을 구체적 경험과 연결해 설명함' },
            { score: 2, desc: '경험과의 연결이 부족함' },
            { score: 1, desc: '경험을 제시하지 않음' },
          ],
        },
        {
          criterion: '사회적/공동체 영향 설명',
          maxScore: 4,
          levels: [
            { score: 4, desc: '주변이나 사회에 미칠 긍정적 영향을 설득력 있게 설명함' },
            { score: 2, desc: '영향을 설명했으나 설득력이 부족함' },
            { score: 1, desc: '영향을 설명하지 않음' },
          ],
        },
        {
          criterion: '적절한 어휘 및 언어 형식',
          maxScore: 4,
          levels: [
            { score: 4, desc: '다양한 어휘와 언어 형식을 정확하게 사용함' },
            { score: 2, desc: '오류가 있으나 의미 전달에 큰 지장은 없음' },
            { score: 1, desc: '오류가 많아 의미 전달이 어려움' },
          ],
        },
      ],
    },
  ],
}
