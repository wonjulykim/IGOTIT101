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
      id: 'r14-essay-short',
      subtype: '단문 서술형',
      q: '동물원이 동물에게 도움이 되는지 해가 되는지에 대한 자신의 생각을 3~5문장으로 짧게 쓰시오.',
      standard: '[9영02-06] 친숙한 주제에 관해 자신의 의견을 주장한다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '자신의 입장을 분명히 밝힐 것'],
      steps: {
        summarize: [
          '1단계: 제시된 글에서 핵심어 찾아내기',
          '2단계: 중심 문장 / 핵심 주장 찾기',
          '3단계: 주장을 뒷받침하는 근거 찾기',
          '4단계: 주장과 근거를 논리적으로 연결해 보기',
          '5단계: 단락별로 나누어 짧게 요약해 보기',
          '6단계: 여러 중심 문장을 엮어서 논리적·체계적으로 연결해 보기',
          '7단계: 주요 어휘를 자기의 말로 바꾸어서 표현해 보기',
        ],
        task: {
          title: '자신의 생각을 문장으로 완성해보세요',
          items: [
            '1단계: 무엇에 대해 쓸지 하나 고르기',
            '2단계: 그것과 관련된 사실이나 경험을 지문(또는 자신의 경험)에서 찾기',
            '3단계: 그렇게 생각하는 이유를 한 문장으로 쓰기',
            '4단계: 이유를 뒷받침하는 구체적인 근거나 예시 덧붙이기',
            '5단계: 문장들을 자연스럽게 연결하여 완성하기',
          ],
        },
      },
      model:
        "I believe zoos can be helpful for animals if they are run responsibly. Many zoos today protect endangered species and give injured animals medical care they could not get in the wild. At the same time, I understand why some people worry that zoos take away an animal's freedom and natural behavior. Overall, I think the key is making sure zoos focus on the animals' well-being rather than just entertaining visitors.",
      totalScore: 6,
      rubric: [
        {
          criterion: '입장 제시 및 근거',
          maxScore: 4,
          levels: [
            { score: 4, desc: '자신의 입장을 분명히 밝히고 타당한 근거를 제시함' },
            { score: 2, desc: '입장은 밝혔으나 근거가 부족함' },
            { score: 1, desc: '입장이나 근거가 불분명함' },
          ],
        },
        {
          criterion: '문장 개수 및 형식 준수',
          maxScore: 2,
          levels: [
            { score: 2, desc: '3~5문장의 완전한 문장으로 서술함' },
            { score: 1, desc: '문장 개수 조건을 지키지 않았거나 문장이 불완전함' },
          ],
        },
      ],
    },
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
      steps: {
        summarize: [
          '1단계: 제시된 글에서 핵심어 찾아내기',
          '2단계: 중심 문장 / 핵심 주장 찾기',
          '3단계: 주장을 뒷받침하는 근거 찾기',
          '4단계: 주장과 근거를 논리적으로 연결해 보기',
          '5단계: 단락별로 나누어 짧게 요약해 보기',
          '6단계: 여러 중심 문장을 엮어서 논리적·체계적으로 연결해 보기',
          '7단계: 주요 어휘를 자기의 말로 바꾸어서 표현해 보기',
        ],
        task: {
          title: '주장하는 글(논술문)을 완성해보세요',
          items: [
            '1단계: 주제에 대한 자신의 입장(주장)을 한 문장으로 정하기',
            '2단계: 주장을 뒷받침할 근거(사실·경험·지문 내용)를 두 가지 이상 찾기',
            '3단계: 반대 의견이나 다른 입장도 떠올려보고 자신의 주장과 비교하기',
            '4단계: 서론(문제 제기)-본론(근거 제시)-결론(주장 재확인) 구조로 개요 짜기',
            '5단계: 개요에 따라 문단을 순서대로 작성하기',
          ],
        },
      },
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
