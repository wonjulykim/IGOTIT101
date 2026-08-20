export const r15Quiz = {
  mcq: [
    {
      id: 'r15-mcq-1',
      q: '이 글에서 Gutenberg의 사례를 소개한 이유로 가장 적절한 것은?',
      options: [
        '인쇄기의 작동 원리를 설명하기 위해',
        '서로 다른 것을 연결하는 창의적 사고의 예를 보여주기 위해',
        '와인 제조 과정을 설명하기 위해',
        '동전의 역사에 대해 알려주기 위해',
        '실수는 항상 나쁘다는 것을 보여주기 위해',
      ],
      answer: 1,
      explain: 'Gutenberg가 와인 압착기와 동전 펀치를 연결해 인쇄기를 발명한 사례는 창의적 사고(서로 다른 것을 연결하는 것)의 좋은 예입니다.',
    },
  ],
  short: [
    {
      id: 'r15-short-1',
      subtype: '단답형',
      q: '이 글에서 제시한 창의적으로 생각하는 방법 세 가지를 우리말로 간단히 쓰시오.',
      answers: [
        '많은 답을 찾는다, 실수를 통해 배운다, 새로운 것을 계속 배운다',
        '가능한 한 많은 답 찾기, 실수를 두려워하지 않기, 새로운 지식과 경험 쌓기',
      ],
      explain: '(1) 가능한 한 많은 답을 찾는다 (2) 실수를 두려워하지 않고 그로부터 배운다 (3) 계속해서 새로운 것을 배운다 — 이 세 가지가 핵심입니다.',
    },
    {
      id: 'r15-short-2',
      subtype: '문법',
      q: '다음 문장을 자연스럽게 완성할 때 빈칸에 들어갈 표현을 지문에서 찾아 쓰시오. (두 단어)\n"________ I took a bunch of these coin punches and put them under the wine press?"',
      answers: ['What if'],
      explain: '"만약 ~하면 어떨까?"라는 상상·제안을 나타낼 때 What if를 씁니다.',
    },
  ],
  essay: [
    {
      id: 'r15-essay-short',
      subtype: '단문 서술형',
      q: '위 글에서 제시한 창의적 사고 방법 중 하나를 골라 3~5문장으로 짧게 서술하시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '지문에 언급된 세 가지 방법 중 하나를 명시할 것'],
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
        'One way to think more creatively is to keep asking, "What if...?" instead of accepting the first answer that comes to mind. Gutenberg used this kind of thinking when he wondered what would happen if he combined a wine press with coin punches. I try to do something similar when I\'m stuck on a school project, asking myself odd questions to see if they lead anywhere useful. Even if most of these questions don\'t work, I think the habit itself makes it easier to notice good ideas when they appear.',
      totalScore: 6,
      rubric: [
        {
          criterion: '방법 제시의 명확성',
          maxScore: 4,
          levels: [
            { score: 4, desc: '지문의 방법을 정확히 명시하고 관련 내용을 구체적으로 서술함' },
            { score: 2, desc: '방법을 언급했으나 설명이 다소 막연함' },
            { score: 1, desc: '방법을 거의 명시하지 않음' },
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
      id: 'r15-essay-1',
      subtype: '서술형',
      q: '위 글에서 제시한 창의적 사고 방법 중 한 가지를 골라, 자신의 경험에 비추어 그 방법을 어떻게 실천할 수 있을지 서술하시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '중',
      score: 8,
      conditions: ['지문에 언급된 세 가지 방법 중 하나를 명시할 것', '자신만의 구체적인 실천 방법이나 예시를 포함할 것'],
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
          title: '설명하는 글을 완성해보세요',
          items: [
            '1단계: 설명할 대상이나 사건이 무엇인지 지문에서 확인하기',
            '2단계: 관련된 사실 정보나 근거를 지문에서 찾아 정리하기',
            '3단계: 아래 조건에 제시된 항목 순서대로 정보를 배열하기',
            '4단계: 사실에 근거하여 객관적이고 간결한 문장으로 쓰기',
            '5단계: 조건에 맞는 형식(제목, 문단 구성 등)을 갖추어 완성하기',
          ],
        },
      },
      model:
        'One way to think more creatively is to not be afraid of making mistakes. In my art class, I used to erase my drawings whenever they looked wrong. Now, instead of erasing right away, I try to turn the "mistake" into a new part of the drawing. This has helped me come up with ideas I never would have thought of if I had just started over.',
      totalScore: 8,
      rubric: [
        {
          criterion: '방법 제시 및 실천 방안',
          maxScore: 5,
          levels: [
            { score: 5, desc: '지문의 방법을 명시하고 구체적인 실천 방안을 제시함' },
            { score: 3, desc: '방법은 언급했으나 실천 방안이 구체적이지 않음' },
            { score: 1, desc: '방법과 실천 방안을 거의 제시하지 않음' },
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
