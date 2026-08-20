export const r9Quiz = {
  mcq: [
    {
      id: 'r9-mcq-1',
      q: '이 글의 중심 내용으로 가장 적절한 것은?',
      options: [
        'AI의 개념과 기계 학습(machine learning)의 원리',
        'AI가 인간의 직업을 대체하는 사례',
        '인간 뇌의 구조를 치료하는 방법',
        '컴퓨터 프로그래밍 언어의 종류',
        'AI 로봇의 외형 디자인',
      ],
      answer: 0,
      explain: '글은 AI가 무엇인지, 그리고 AI가 패턴 인식을 통해 스스로 학습하는 원리를 설명합니다.',
    },
  ],
  short: [
    {
      id: 'r9-short-1',
      subtype: '완성형',
      q: '다음 요약문의 빈칸에 들어갈 표현을 지문에서 찾아 쓰시오.\n"AI programs become more intelligent through machine learning. One way is ________ — by observing patterns in data, they learn by themselves."',
      answers: ['pattern recognition'],
      explain: '패턴 인식(pattern recognition)을 통해 데이터 속의 패턴을 관찰함으로써 스스로 학습합니다.',
    },
    {
      id: 'r9-short-2',
      subtype: '단답형',
      q: '인간 뇌에서 정보를 뇌 안팎으로 계속 이동시키는 연결망을 이루는 신경세포를 가리키는 단어를 지문에서 찾아 쓰시오.',
      answers: ['neurons', 'neuron'],
      explain: '인간 뇌에는 약 1,000억 개의 뉴런(neuron)이 있으며, 이들이 연결되어 신경망을 이룹니다.',
    },
    {
      id: 'r9-short-3',
      subtype: '문법',
      q: '다음 문장을 수동태 문장으로 완성할 때 빈칸에 들어갈 형태를 쓰시오.\n"AI programs are ________ (design) to teach themselves in various ways."',
      answers: ['designed'],
      explain: '수동태는 「be동사 + 과거분사」 형태이므로 designed가 알맞습니다.',
    },
  ],
  essay: [
    {
      id: 'r9-essay-short',
      subtype: '단문 서술형',
      q: '위 글에서 설명한 AI의 학습 방식(패턴 인식 등)에 대한 자신의 생각을 3~5문장으로 쓰시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', 'pattern recognition 또는 neuron 중 하나를 반드시 포함할 것'],
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
        'I found it interesting that AI learns in a way similar to how the human brain works. The idea of pattern recognition surprised me the most, because it means AI can improve just by looking at large amounts of data. I still wonder, though, how AI decides which patterns are actually important. Overall, I think machine learning is a powerful tool, but it still has a lot in common with how humans naturally learn.',
      totalScore: 6,
      rubric: [
        {
          criterion: '핵심 개념 이해 및 필수 어휘 포함',
          maxScore: 4,
          levels: [
            { score: 4, desc: '패턴 인식(또는 뉴런) 개념을 정확히 이해하고 필수 단어를 포함하여 서술함' },
            { score: 2, desc: '개념 이해가 다소 부정확하거나 필수 단어를 포함하지 않음' },
            { score: 1, desc: '개념을 거의 이해하지 못함' },
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
      id: 'r9-essay-1',
      subtype: '서술형',
      q: '위 글을 읽고, AI가 스스로 학습하는 원리를 패턴 인식과 데이터 학습을 포함하여 자신의 말로 요약하여 서술하시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '중',
      score: 8,
      conditions: ['pattern recognition과 data라는 단어를 반드시 포함할 것', '3문장 이상으로 서술할 것'],
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
        'AI programs are designed to teach themselves in various ways. One important way is pattern recognition, where the program observes patterns in large amounts of data. By continuously processing more data, the AI gradually becomes more intelligent and capable, similar to how a child learns more as they grow and experience new things.',
      totalScore: 8,
      rubric: [
        {
          criterion: '패턴 인식·데이터 학습 원리 설명',
          maxScore: 5,
          levels: [
            { score: 5, desc: '패턴 인식과 데이터 학습의 원리를 자신의 말로 정확하게 설명함' },
            { score: 3, desc: '원리를 설명했으나 다소 단편적임' },
            { score: 1, desc: '원리를 거의 설명하지 않음' },
          ],
        },
        {
          criterion: '필수 단어 포함 및 어휘 정확성',
          maxScore: 3,
          levels: [
            { score: 3, desc: 'pattern recognition, data를 모두 포함하고 어휘 사용이 정확함' },
            { score: 2, desc: '필수 단어 중 일부만 포함하거나 사소한 오류가 있음' },
            { score: 1, desc: '필수 단어를 포함하지 않거나 오류가 많음' },
          ],
        },
      ],
    },
  ],
}
