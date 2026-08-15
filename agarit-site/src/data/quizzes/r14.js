export const r14Quiz = {
  mcq: [
    {
      id: 'r14-mcq-1',
      q: '동물원에 반대하는 사람들이 제시하는 이유가 아닌 것은?',
      options: [
        '동물들이 충분한 공간을 갖지 못한다.',
        '동물들이 스트레스를 받을 수 있다.',
        '멸종 위기 동물을 보호하고 번식을 돕는다.',
        '야생에서 가족과 분리된 동물이 있다.',
        '돌고래 등이 부자연스러운 쇼를 강요받기도 한다.',
      ],
      answer: 2,
      explain: '멸종 위기 동물 보호는 동물원을 지지하는 사람들의 근거이며, 반대하는 사람들의 근거가 아닙니다.',
    },
  ],
  short: [
    {
      id: 'r14-short-1',
      subtype: '완성형',
      q: '다음 빈칸에 들어갈 단어를 지문에서 찾아 쓰시오.\n"Zoos also teach visitors about animals and nature, which can make people care more about the ________."',
      answers: ['environment'],
      explain: '동물원은 방문객이 환경(environment)에 더 관심을 갖도록 돕는다고 설명합니다.',
    },
    {
      id: 'r14-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 관계대명사를 쓰시오. (선행사는 사람)\n"People ________ support zoos say that zoos protect endangered animals."',
      answers: ['who', 'that'],
      explain: '선행사가 사람(People)이므로 주격 관계대명사 who 또는 that이 알맞습니다.',
    },
  ],
  essay: [
    {
      id: 'r14-essay-1',
      subtype: '논술형',
      q: '아래 주장에 대해 위 글의 자료를 참고하여 조건에 맞게 찬성 또는 반대 의견을 쓰시오.\n"Do zoos help or harm animals?"',
      standard: '[9영02-06] 친숙한 주제에 관해 자신의 의견을 주장한다. / [9영02-09] 적절한 매체를 활용하여 정보 윤리를 준수하며 쓴다.',
      difficulty: '상',
      score: 8,
      conditions: [
        '서론-본론-결론의 형식을 갖춘 한 단락의 글로 완성할 것',
        '찬성/반대에 대한 입장을 분명히 밝히고, 지문 이외의 근거를 2가지 제시할 것',
        '논리를 강화하기 위해 조건문(if절 등)을 사용할 것',
      ],
      model:
        "I believe zoos can help animals if they are managed responsibly. First, well-run zoos support breeding programs for endangered species, which increases their chances of survival. Second, zoos provide veterinary care that many injured or abandoned animals could not receive in the wild. If a zoo focuses on conservation and animal welfare rather than only entertainment, it can do more good than harm. Therefore, I think zoos can be beneficial as long as animal well-being remains the top priority.",
      totalScore: 8,
      rubric: [
        {
          criterion: '입장 및 근거 제시',
          maxScore: 4,
          levels: [
            { score: 4, desc: '입장을 분명히 밝히고 지문 이외의 근거 두 가지를 설득력 있게 제시함' },
            { score: 2, desc: '근거를 한 가지만 제시하거나 지문 내용에만 의존함' },
            { score: 1, desc: '입장이나 근거가 불분명함' },
          ],
        },
        {
          criterion: '글의 형식 및 조건문 사용',
          maxScore: 2,
          levels: [
            { score: 2, desc: '서론-본론-결론 구조를 갖추고 조건문을 사용함' },
            { score: 1, desc: '구조나 조건문 중 하나가 미흡함' },
          ],
        },
        {
          criterion: '언어 사용의 정확성',
          maxScore: 2,
          levels: [
            { score: 2, desc: '문법과 어휘 사용이 정확하며 의사소통에 지장이 없음' },
            { score: 1, desc: '오류가 있으나 의미는 전달됨' },
          ],
        },
      ],
    },
  ],
}
