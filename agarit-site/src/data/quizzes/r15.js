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
          { label: '핵심어 찾기', prompt: '지문에서 중요하게 다뤄지는 핵심 단어(또는 표현)를 2~3개 찾아 써보세요.' },
          { label: '중심 문장 찾기', prompt: '지문에서 글쓴이의 주장이나 핵심 내용이 담긴 중심 문장을 찾아 그대로 옮겨 적어보세요.' },
          { label: '근거 찾기', prompt: '위 중심 문장(주장)을 뒷받침하는 근거나 예시를 지문에서 찾아 적어보세요.' },
          { label: '논리적으로 연결하기', prompt: '주장과 근거를 "therefore", "because", "for example" 같은 접속어를 사용해 한 문장으로 연결해 보세요.' },
          { label: '단락별 요약', prompt: '지문을 문단별로 나누고, 각 문단의 내용을 한 문장씩 짧게 요약해 보세요.' },
          { label: '중심 문장 엮기', prompt: '문단별 요약 문장들을 순서대로 엮어서 하나의 논리적인 글로 연결해 보세요.' },
          { label: '자기 말로 표현하기', prompt: '위에서 정리한 내용 중 어려운 단어나 표현을 자신만의 쉬운 말로 바꾸어 다시 써보세요.' },
        ],
        task: {
          title: '자신의 생각을 문장으로 완성해보세요',
          items: [
            { label: '무엇에 대해 쓸지 고르기', prompt: '조건에서 요구하는 대상(예: 예방 방법, 가치, 경험 등) 중 하나를 정하고, 그 이름을 한 단어(구)로 적어보세요.' },
            { label: '관련 사실·경험 찾기', prompt: '그것과 관련하여 지문에 나온 사실이나 자신의 경험을 한 문장으로 적어보세요. 예: "The passage says that ~." 또는 "Once, I ~."' },
            { label: '이유를 한 문장으로 쓰기', prompt: '왜 그렇게 생각하는지 이유를 "I think this is effective/important because ~." 형태로 완성해보세요.' },
            { label: '구체적인 근거·예시 덧붙이기', prompt: '이유를 뒷받침할 구체적인 근거나 예시를 한 문장 더 적어보세요. 예: "For example, ~." "This is because ~."' },
            { label: '문장 연결하여 완성하기', prompt: '위에서 쓴 문장들을 "Also", "In addition", "Therefore" 같은 접속어로 자연스럽게 이어 3~5문장의 글로 완성해보세요.' },
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
          { label: '핵심어 찾기', prompt: '지문에서 중요하게 다뤄지는 핵심 단어(또는 표현)를 2~3개 찾아 써보세요.' },
          { label: '중심 문장 찾기', prompt: '지문에서 글쓴이의 주장이나 핵심 내용이 담긴 중심 문장을 찾아 그대로 옮겨 적어보세요.' },
          { label: '근거 찾기', prompt: '위 중심 문장(주장)을 뒷받침하는 근거나 예시를 지문에서 찾아 적어보세요.' },
          { label: '논리적으로 연결하기', prompt: '주장과 근거를 "therefore", "because", "for example" 같은 접속어를 사용해 한 문장으로 연결해 보세요.' },
          { label: '단락별 요약', prompt: '지문을 문단별로 나누고, 각 문단의 내용을 한 문장씩 짧게 요약해 보세요.' },
          { label: '중심 문장 엮기', prompt: '문단별 요약 문장들을 순서대로 엮어서 하나의 논리적인 글로 연결해 보세요.' },
          { label: '자기 말로 표현하기', prompt: '위에서 정리한 내용 중 어려운 단어나 표현을 자신만의 쉬운 말로 바꾸어 다시 써보세요.' },
        ],
        task: {
          title: '설명하는 글을 완성해보세요',
          items: [
            { label: '대상 확인하기', prompt: '조건에서 설명하라고 요구하는 대상(사건·개념·경험)이 정확히 무엇인지 한 문장으로 적어보세요.' },
            { label: '사실 정보 정리하기', prompt: '지문에서 그 대상과 관련된 사실이나 정보를 찾아 목록으로 나열해보세요.' },
            { label: '순서 정하기', prompt: '조건에 제시된 항목(예: 안내문 형식, 원인-결과 등) 순서대로 배열해보세요.' },
            { label: '객관적으로 서술하기', prompt: '개인적인 느낌은 빼고, 사실에 근거한 문장으로 각 항목을 서술해보세요. 예: "First, ~. Second, ~."' },
            { label: '형식 갖추기', prompt: '제목이나 문단 구성 등 조건에서 요구하는 형식을 마지막으로 점검하고 완성하세요.' },
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
