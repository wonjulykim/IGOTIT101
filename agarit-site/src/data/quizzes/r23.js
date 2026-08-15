export const r23Quiz = {
  mcq: [
    {
      id: 'r23-mcq-1',
      q: '탄산음료 속 산성분이 제품에 미치는 긍정적 효과로 언급된 것은?',
      options: [
        '칼슘 흡수를 돕는다.',
        '유통기한을 늘려준다.',
        '치아를 더 튼튼하게 만든다.',
        '소화를 빠르게 해준다.',
        '뼈를 더 단단하게 만든다.',
      ],
      answer: 1,
      explain: '산은 세균 번식을 늦춰 제품의 유통기한을 늘려준다고 설명합니다.',
    },
  ],
  short: [
    {
      id: 'r23-short-1',
      subtype: '단답형',
      q: '이 글에서 설명한, 탄산음료 속 산이 건강에 미치는 부정적 영향 세 가지를 우리말로 쓰시오.',
      answers: [
        '뼈를 약하게 함, 소화를 느리게 하고 영양분 흡수를 막음, 치아 에나멜을 손상시켜 이가 쉽게 썩게 함',
      ],
      explain: '(1) 칼슘 흡수를 방해해 뼈를 약하게 함 (2) 소화를 느리게 하고 영양분 흡수를 막음 (3) 치아 에나멜을 손상시켜 충치를 유발함',
    },
    {
      id: 'r23-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 관계대명사를 쓰시오.\n"It can damage tooth enamel, the hard substance ________ protects your teeth."',
      answers: ['that', 'which'],
      explain: '선행사(the hard substance)를 수식하는 주격 관계대명사 that/which가 알맞습니다.',
    },
  ],
  essay: [
    {
      id: 'r23-essay-1',
      subtype: '서술형',
      q: '이 글의 내용을 바탕으로, 탄산음료를 건강하게 즐기기 위한 자신만의 습관이나 규칙을 서술하시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '중',
      score: 8,
      conditions: ['지문에 언급된 부정적 영향을 최소 한 가지 근거로 들 것', '구체적인 습관이나 규칙을 제시할 것'],
      model:
        'Since soda can damage tooth enamel, I try to drink water right after having soda to wash the acid away. I also try to limit myself to soda only once or twice a week instead of drinking it every day, so that my teeth and bones stay healthy in the long run.',
      totalScore: 8,
      rubric: [
        {
          criterion: '근거 및 습관 제시',
          maxScore: 5,
          levels: [
            { score: 5, desc: '지문의 부정적 영향을 근거로 들고 구체적인 습관을 제시함' },
            { score: 3, desc: '근거나 습관 중 하나가 다소 막연함' },
            { score: 1, desc: '근거와 습관을 거의 제시하지 않음' },
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
