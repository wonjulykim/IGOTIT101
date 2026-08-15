export const r6Quiz = {
  mcq: [
    {
      id: 'r6-mcq-1',
      q: '이 글에서 설명하는 환경 문제의 원인으로 가장 적절한 것은?',
      options: [
        '바다 온도가 너무 낮아서',
        '플라스틱을 아무 생각 없이 버리는 일상 습관 때문에',
        '물고기 수가 너무 많아져서',
        '재사용 가능한 물병을 사용하는 사람들이 늘어서',
        '바닷새들이 이동을 하지 않아서',
      ],
      answer: 1,
      explain: '지문은 플라스틱 병, 봉지 등을 무심코 버리는 습관이 바다 오염의 주요 원인이라고 설명합니다.',
    },
  ],
  short: [
    {
      id: 'r6-short-1',
      subtype: '완성형',
      q: '다음 빈칸에 들어갈 단어를 지문에서 찾아 쓰시오.\n"Sea animals such as whales are found with their bodies full of plastic bags, bottles, and other trash they ________ for food."',
      answers: ['mistook', 'mistake'],
      explain: '"mistake A for B(A를 B로 착각하다)"의 과거형 mistook이 정답입니다.',
    },
    {
      id: 'r6-short-2',
      subtype: '문법',
      q: '다음 문장에서 생략된 목적격 관계대명사를 넣어 문장을 다시 쓸 때, 빈칸에 들어갈 한 단어를 쓰시오.\n"...other trash they mistook for food." → "...other trash ________ they mistook for food."',
      answers: ['that', 'which'],
      explain: 'trash와 they 사이에는 목적격 관계대명사 that(또는 which)이 생략되어 있습니다.',
    },
  ],
  essay: [
    {
      id: 'r6-essay-1',
      subtype: '논술형',
      q: '위 글을 참고하여, 환경 문제의 심각성을 알리고 작은 실천이 변화를 만들 수 있다는 메시지를 전하는 글을 아래 조건에 맞게 영어로 작성하시오.',
      standard: '[9영02-04] 친숙한 주제에 관해 경험이나 계획을 설명한다. / [9영02-05] 친숙한 주제에 관해 일이나 사건의 논리적 관계를 설명한다.',
      difficulty: '중',
      score: 20,
      conditions: [
        '지문에 나타난 환경 문제(해양 플라스틱 오염)와 그 원인을 설명할 것',
        '그 원인을 자신의 일상 속 경험과 연결해 성찰할 것',
        '문제를 해결할 수 있는 실천 가능한 행동을 두 가지 제시하고, 기대 효과를 설명할 것',
        '친구들에게 함께 실천하자고 제안하는 문장을 포함할 것',
        '100~150 단어로 쓸 것',
      ],
      model:
        "These photos show ocean pollution caused by plastic waste. Many sea animals swallow plastic because they mistake it for food, and this is a serious problem. Before, I always bought drinks in plastic bottles and threw them away without thinking. I didn't know that my trash could end up in the ocean. After learning about this, I felt bad and wanted to change my habits. Now, I use my own reusable water bottle, and I also help clean up trash at school. These are small actions, but they can help the Earth. If many students try together, we can reduce pollution. Let's care for the ocean and protect the animals together!",
      totalScore: 20,
      rubric: [
        {
          criterion: '환경 문제 및 원인 설명',
          maxScore: 6,
          levels: [
            { score: 6, desc: '환경 문제와 그 원인을 논리적으로 명확하게 설명함' },
            { score: 3, desc: '문제나 원인 중 하나만 명확하게 설명함' },
            { score: 1, desc: '문제와 원인을 거의 설명하지 않음' },
          ],
        },
        {
          criterion: '개인 경험과 성찰',
          maxScore: 4,
          levels: [
            { score: 4, desc: '개인의 경험과 환경 문제의 원인을 깊이 있게 연결하고 성찰함' },
            { score: 2, desc: '경험은 제시했으나 원인과의 연결이 부족함' },
            { score: 1, desc: '개인 경험을 제시하지 않음' },
          ],
        },
        {
          criterion: '해결 방안·기대효과·실천 제안',
          maxScore: 6,
          levels: [
            { score: 6, desc: '실천 가능한 해결 방안 두 가지와 기대효과, 함께 실천하자는 제안을 모두 제시함' },
            { score: 3, desc: '해결 방안을 한 가지만 제시하거나 기대효과·제안 중 일부가 빠짐' },
            { score: 1, desc: '해결 방안과 제안을 거의 제시하지 않음' },
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
