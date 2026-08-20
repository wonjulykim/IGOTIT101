export const r22Quiz = {
  mcq: [
    {
      id: 'r22-mcq-1',
      q: '뭄바이 노동자들이 다바왈라 서비스를 이용하는 이유로 언급되지 않은 것은?',
      options: [
        '꽉 들어찬 기차에서 도시락을 직접 들고 다니기 어려워서',
        '종교에 따른 식단 제한이 있어서',
        '집에서 만든 음식을 선호해서',
        '회사 근처 식당 음식이 너무 비싸서',
        '자신에게 맞는 음식을 식당에서 찾기 어려워서',
      ],
      answer: 3,
      explain: '지문은 만원 기차, 종교적 식단 제한, 집밥 선호를 이유로 들며, 식당 음식 가격에 대한 언급은 없습니다.',
    },
  ],
  short: [
    {
      id: 'r22-short-1',
      subtype: '문장완성',
      q: '다음 요약문을 완성하시오. (본문의 표현을 활용할 것)\n"Mumbai workers use the dabbawala service because it would be difficult for them ________________________ on a packed train."',
      answers: ['to carry their own dabba', 'to carry their own lunch box'],
      explain: '꽉 들어찬 기차에서 자신의 도시락(dabba)을 직접 나르기 어렵기 때문입니다.',
    },
    {
      id: 'r22-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 단어를 쓰시오. (가주어)\n"________ would be difficult for them to carry their own dabba on a packed train."',
      answers: ['It', 'it'],
      explain: '진주어(to carry ~)가 뒤로 가고 그 자리에 가주어 It이 쓰였습니다.',
    },
  ],
  essay: [
    {
      id: 'r22-essay-short',
      subtype: '단문 서술형',
      q: '다바왈라 서비스가 해결해 주는 어려움 중 한 가지만 골라 3~5문장으로 간단히 쓰시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '본문에 나온 어려움 한 가지를 명확히 밝힐 것'],
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
        "The dabbawala service solves the problem of carrying lunch on a packed train. Many Mumbai workers commute early in the morning, and the trains are extremely crowded. Carrying a heavy dabba in such conditions would be inconvenient and difficult. Thanks to the dabbawala service, workers can travel with just their hands free.",
      totalScore: 6,
      rubric: [
        {
          criterion: '어려움 제시 및 내용 완성도',
          maxScore: 3,
          levels: [
            { score: 3, desc: '본문에 나온 어려움 한 가지를 명확히 밝히고 3~5문장 분량으로 자연스럽게 서술함' },
            { score: 2, desc: '어려움은 밝혔으나 문장 수나 내용 전개가 다소 부족함' },
            { score: 1, desc: '어려움이 불분명하거나 문장 수를 지키지 않음' },
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
      id: 'r22-essay-1',
      subtype: '서술형',
      q: '다바왈라 서비스가 뭄바이 노동자들의 어떤 어려움을 해결해 주는지, 본문의 내용을 바탕으로 두 가지를 들어 서술하시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '중',
      score: 8,
      conditions: ['두 가지 이유를 모두 포함할 것', '완전한 문장으로 서술할 것'],
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
        'The dabbawala service solves two main problems for Mumbai workers. First, it is difficult for them to carry their own lunch boxes while riding a packed train every morning. Second, many workers have dietary restrictions based on their religion, so it is hard to find suitable food near their office. The dabbawala service delivers home-cooked meals that meet their specific needs.',
      totalScore: 8,
      rubric: [
        {
          criterion: '두 가지 이유 설명',
          maxScore: 5,
          levels: [
            { score: 5, desc: '두 가지 이유를 모두 정확하고 구체적으로 설명함' },
            { score: 3, desc: '한 가지 이유만 정확하게 설명함' },
            { score: 1, desc: '이유를 거의 설명하지 않음' },
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
