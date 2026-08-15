export const r3Quiz = {
  mcq: [
    {
      id: 'r3-mcq-1',
      q: '글쓴이가 이 경험을 통해 깨달은 것으로 가장 적절한 것은?',
      options: [
        '무대 위에서는 절대 실수하면 안 된다.',
        '자신감은 완벽함이 아니라 어려움에 어떻게 대응하는가에 달려 있다.',
        '연극반 활동은 시간 낭비이다.',
        '친구의 도움 없이는 아무것도 해낼 수 없다.',
        '무대 공포증은 절대 극복할 수 없다.',
      ],
      answer: 1,
      explain: "글쓴이는 \"confidence isn't about being flawless — it's about how you respond when things go wrong\"라고 말하며 깨달음을 서술합니다.",
    },
  ],
  short: [
    {
      id: 'r3-short-1',
      q: '글쓴이가 무대 위에서 얼어붙었을 때 느낀 감정을 나타내는 단어를 지문에서 찾아 쓰시오. (예: p로 시작하는 단어)',
      answers: ['panic'],
      explain: '"panic rising in my chest"라는 표현에서 확인할 수 있습니다.',
    },
  ],
  essay: [
    {
      id: 'r3-essay-1',
      q: '위 글을 참고하여, 자신이 겪은 어려운 순간을 극복하며 성장한 경험에 대한 글을 아래 조건에 맞게 영어로 작성하시오.',
      standard: '[10공영1-02-03] 경험이나 계획 등을 말하거나 기술한다. / [10공영1-02-06] 어휘나 표현을 점검하여 내용을 명확하게 전달한다.',
      difficulty: '상',
      score: 16,
      conditions: [
        '개인 경험 서사문(narrative essay) 형식으로 작성할 것',
        '도입, 전개, 절정, 결말의 4단 구조로 작성할 것',
        '어려운 상황과 극복 과정, 그 과정에서 깨달은 점, 개인의 성장을 명확하게 제시할 것',
        '자신의 경험에서 느낀 감정을 구체적으로 묘사할 것',
        '180~220 단어로 쓸 것',
      ],
      model:
        "I always believed I was confident, but during my first year of high school, that belief was tested when I had to perform on stage. As the spotlight hit me, my mind went blank and panic rose in my chest. I stood frozen, unable to speak. Then my partner quietly whispered the first line, and slowly my memory returned. I wasn't perfect, but I didn't give up. That moment changed how I saw confidence. I realized it isn't about being flawless — it's about how you respond when things go wrong. Since then, whenever I feel afraid, I remind myself that failure can be the start of growth, not the end.",
      totalScore: 16,
      rubric: [
        {
          criterion: '경험의 구체성(상황·극복·깨달음·성장)',
          maxScore: 5,
          levels: [
            { score: 5, desc: '어려운 상황, 극복 과정, 깨달음, 성장을 모두 명확하게 표현함' },
            { score: 3, desc: '위 요소 중 일부만 명확하게 표현함' },
            { score: 1, desc: '위 요소를 거의 표현하지 않음' },
          ],
        },
        {
          criterion: '감정 묘사의 구체성',
          maxScore: 2,
          levels: [
            { score: 2, desc: '경험에서 느낀 감정을 구체적으로 묘사함' },
            { score: 1, desc: '감정을 거의 묘사하지 않음' },
          ],
        },
        {
          criterion: '서사문 형식(도입-전개-절정-결말)',
          maxScore: 5,
          levels: [
            { score: 5, desc: '도입-전개-절정-결말 구조를 모두 논리적으로 작성함' },
            { score: 3, desc: '구조 중 일부만 갖춤' },
            { score: 1, desc: '구조를 거의 갖추지 않음' },
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
