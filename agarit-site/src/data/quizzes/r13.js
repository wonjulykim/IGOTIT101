export const r13Quiz = {
  mcq: [
    {
      id: 'r13-mcq-1',
      q: '나무의 잎이 더 초록색으로 변하는 이유로 지문이 설명하는 것은?',
      options: [
        '화산에서 나오는 이산화탄소를 나무가 흡수하기 때문에',
        '나무가 겨울잠에서 깨어났기 때문에',
        '과학자들이 나뭇잎에 염료를 뿌렸기 때문에',
        '화산 활동이 완전히 멈췄기 때문에',
        '위성이 나무에 신호를 보내기 때문에',
      ],
      answer: 0,
      explain: '마그마가 지각을 뚫고 올라오며 방출하는 이산화탄소를 나무가 흡수해 잎이 더 초록빛을 띠게 됩니다.',
    },
  ],
  short: [
    {
      id: 'r13-short-1',
      subtype: '완성형',
      q: '다음 빈칸에 들어갈 단어를 지문에서 찾아 쓰시오.\n"As magma moves upward through the Earth\'s crust, it releases carbon dioxide. Trees ________ this gas, and their leaves become greener."',
      answers: ['absorb'],
      explain: '나무가 이산화탄소를 "absorb(흡수)"한다고 설명합니다.',
    },
    {
      id: 'r13-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 접속사를 쓰시오. (~함에 따라)\n"________ magma moves upward through the Earth\'s crust, it releases carbon dioxide."',
      answers: ['As', 'as'],
      explain: 'as는 "~함에 따라"라는 뜻으로 두 동작이 함께 일어남을 나타냅니다.',
    },
  ],
  essay: [
    {
      id: 'r13-essay-short',
      subtype: '단문 서술형',
      q: '위 글에서 설명한 화산 예측 방법(나뭇잎 색 변화 관찰)에 대한 자신의 생각을 3~5문장으로 쓰시오.',
      standard: '[9영01-03] 친숙한 주제에 관한 담화나 글의 중심 내용을 파악한다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', 'carbon dioxide 또는 absorb 중 하나를 반드시 포함할 것'],
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
        'I think it is fascinating that scientists can predict volcanic eruptions just by studying the color of tree leaves. It makes sense that trees absorb the carbon dioxide released by rising magma and turn a brighter green as a result. This method seems especially helpful for volcanoes located in remote areas that are hard to monitor directly. I hope researchers continue improving this technique so that more communities can be warned before a dangerous eruption happens.',
      totalScore: 6,
      rubric: [
        {
          criterion: '내용 이해 및 필수 어휘 포함',
          maxScore: 4,
          levels: [
            { score: 4, desc: '나뭇잎 색 변화를 이용한 예측 원리를 정확히 이해하고 필수 단어를 포함함' },
            { score: 2, desc: '이해가 다소 부정확하거나 필수 단어를 포함하지 않음' },
            { score: 1, desc: '내용을 거의 이해하지 못함' },
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
      id: 'r13-essay-1',
      subtype: '서술형',
      q: '아래 글을 읽고 요약하시오.',
      standard: '[9영01-03] 친숙한 주제에 관한 담화나 글의 중심 내용을 파악한다. / [9영01-06] 화자나 필자의 의도나 목적을 추론한다.',
      difficulty: '상',
      score: 5,
      conditions: ['change / before / because / absorb 단어를 반드시 활용할 것', "Scientists found that the colour of tree leaves 로 문장을 시작할 것"],
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
      },
      model:
        'Scientists found that the colour of tree leaves changes before a volcanic eruption because they absorb carbon dioxide emitted by volcanoes.',
      totalScore: 5,
      rubric: [
        {
          criterion: '과제 완성도(내용 반영)',
          maxScore: 3,
          levels: [
            { score: 3, desc: '본문 내용을 반영하고 주어진 조건(단어·문장 시작)을 모두 만족함' },
            { score: 2, desc: '본문 내용을 대부분 반영하고 조건을 대체로 만족함' },
            { score: 1, desc: '본문 내용을 일부만 반영하거나 조건을 만족하지 못함' },
          ],
        },
        {
          criterion: '언어 사용의 정확성',
          maxScore: 2,
          levels: [
            { score: 2, desc: '문법과 어휘 사용이 정확하며 의사소통에 지장이 없음' },
            { score: 1, desc: '약간의 오류가 있으나 의미 전달에 큰 문제는 없음' },
          ],
        },
      ],
    },
  ],
}
