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
