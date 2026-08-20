export const r17Quiz = {
  mcq: [
    {
      id: 'r17-mcq-1',
      q: '이 글에서 몽고메리 버스 보이콧이 시작된 계기로 가장 적절한 것은?',
      options: [
        '버스 요금이 갑자기 인상되어서',
        'Rosa Parks가 백인 승객에게 자리를 양보하지 않아 체포되었기 때문에',
        '버스 회사가 파산했기 때문에',
        '연방 정부가 보이콧을 지시했기 때문에',
        '버스 운행 시간이 변경되어서',
      ],
      answer: 1,
      explain: 'Rosa Parks의 체포 4일 후 몽고메리 버스 보이콧이 시작되었다고 설명합니다.',
    },
  ],
  short: [
    {
      id: 'r17-short-1',
      subtype: '단답형',
      q: '밑줄 친 "Rosa Parks\' small decision"이 구체적으로 가리키는 내용을 영어로 쓰시오. (동명사로 시작할 것)',
      answers: ['Refusing to give up her seat', 'Standing up to injustice', 'refusing to give up her seat to white passengers'],
      explain: '백인 승객에게 자리를 양보하지 않고 불의에 맞선 것이 Rosa Parks의 작은 결심입니다.',
    },
    {
      id: 'r17-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 형태를 쓰시오. (동사원형 stand를 활용, 동명사 형태로)\n"________ up to injustice was Rosa Parks\' small but powerful decision." (Stand)',
      answers: ['Standing'],
      explain: '문장의 주어 자리에는 동명사(Standing)가 와야 합니다.',
    },
  ],
  essay: [
    {
      id: 'r17-essay-short',
      subtype: '단문 서술형',
      q: 'Rosa Parks의 결심에서 가장 인상 깊은 점이 무엇인지 3~5문장으로 간단히 쓰시오.',
      standard: '[10영04-01] 일상생활이나 친숙한 일반적 주제에 관하여 듣거나 읽고 세부 정보를 기록할 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '인상 깊은 점 한 가지를 구체적으로 밝힐 것'],
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
        "The most impressive part of the story is that Rosa Parks stayed calm and quiet when she refused to give up her seat. She did not shout or fight; she simply chose not to move. Her small, peaceful action ended up leading to a huge change in the law. This shows that one person's quiet courage can inspire many others.",
      totalScore: 6,
      rubric: [
        {
          criterion: '인상 깊은 점 제시 및 내용 완성도',
          maxScore: 3,
          levels: [
            { score: 3, desc: '인상 깊은 점을 구체적으로 밝히고 3~5문장 분량으로 자연스럽게 서술함' },
            { score: 2, desc: '인상 깊은 점은 밝혔으나 문장 수나 내용 전개가 다소 부족함' },
            { score: 1, desc: '인상 깊은 점이 불분명하거나 문장 수를 지키지 않음' },
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
    {
      id: 'r17-essay-1',
      subtype: '서술형',
      q: 'Rosa Parks의 작은 결심이 어떻게 큰 사회적 변화로 이어졌는지, 사건의 순서에 따라 서술하시오.',
      standard: '[10영04-01] 일상생활이나 친숙한 일반적 주제에 관하여 듣거나 읽고 세부 정보를 기록할 수 있다.',
      difficulty: '중',
      score: 10,
      conditions: ['사건이 일어난 순서(결심 → 체포 → 보이콧 → 판결)를 포함할 것', '완전한 문장으로 서술할 것'],
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
        "Rosa Parks refused to give up her seat to a white passenger, and she was arrested for this decision. Four days later, a boycott of the Montgomery bus system began, and it lasted 381 days. The boycott ended when the U.S. Supreme Court ruled that the segregation law was unconstitutional, and this ruling led to many non-violent civil rights protests across the country.",
      totalScore: 10,
      rubric: [
        {
          criterion: '사건 순서 및 내용의 정확성',
          maxScore: 6,
          levels: [
            { score: 6, desc: '결심-체포-보이콧-판결의 순서를 정확하고 구체적으로 서술함' },
            { score: 3, desc: '일부 사건이 누락되거나 순서가 다소 부정확함' },
            { score: 1, desc: '사건의 순서나 내용을 거의 서술하지 않음' },
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
