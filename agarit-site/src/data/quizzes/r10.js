export const r10Quiz = {
  mcq: [
    {
      id: 'r10-mcq-1',
      q: '이 글에서 안전한 부시워킹을 위해 권장하지 않는 것은?',
      options: [
        '떠나기 전에 경로를 미리 조사하기',
        '가장 느린 사람의 속도에 맞춰 걷기',
        '날씨와 공원 상황을 확인하기',
        '누구에게도 알리지 않고 혼자 조용히 떠나기',
        '벌레 스프레이와 조명을 챙기기',
      ],
      answer: 3,
      explain: '글은 친구나 당국에 목적지와 예상 귀가 시간을 알리라고 권장하므로, 아무에게도 알리지 않는 것은 권장 사항과 반대됩니다.',
    },
  ],
  short: [
    {
      id: 'r10-short-1',
      subtype: '문장완성',
      q: '다음 글을 읽고, 7단어 이내로 (반드시 safety라는 단어를 포함하여) 이 글에 어울리는 제목을 영어로 쓰시오.',
      answers: [
        'The Safety Rules of Bushwalking',
        'Safety Rules of Bushwalking',
        'Safety Tips for Bushwalking',
      ],
      explain: '글 전체가 부시워킹의 안전 수칙을 안내하는 내용이므로, safety를 포함한 제목이 적절합니다. (유사 표현도 정답으로 인정)',
    },
    {
      id: 'r10-short-2',
      subtype: '문법',
      q: '다음 문장을 명령문으로 바꿀 때 빈칸에 들어갈 단어를 쓰시오. (동사원형 한 단어)\n"You should check the weather and park conditions." → "________ the weather and park conditions."',
      answers: ['Check', 'check'],
      explain: '명령문은 주어 없이 동사원형(Check)으로 시작합니다.',
    },
  ],
  essay: [
    {
      id: 'r10-essay-short',
      subtype: '단문 서술형',
      q: '부시워킹(또는 자연 활동)을 떠나기 전 지켜야 할 안전 수칙 중 한 가지를 골라, 그것이 왜 중요한지와 함께 3~5문장으로 서술하시오.',
      standard: '[10영03-04] 친숙한 일반적 주제에 관한 글을 읽고 필자의 의도나 글의 목적을 파악할 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '지문에 언급된 안전 수칙을 최소 한 가지 포함할 것'],
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
        'One important safety rule before going on a nature walk is to check the weather and park conditions in advance. This matters because conditions in natural areas can change very quickly, sometimes turning a safe trail into a dangerous one. For example, sudden rain can make a path slippery or cause a river to rise. Because of this, I think checking the weather is one of the simplest but most useful things a walker can do before setting out.',
      totalScore: 6,
      rubric: [
        {
          criterion: '안전 수칙 제시 및 이유 설명',
          maxScore: 4,
          levels: [
            { score: 4, desc: '지문의 안전 수칙 한 가지를 정확히 제시하고 그 이유를 구체적으로 설명함' },
            { score: 2, desc: '안전 수칙은 제시했으나 이유 설명이 부족함' },
            { score: 1, desc: '안전 수칙이나 이유를 거의 제시하지 않음' },
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
      id: 'r10-essay-1',
      subtype: '서술형',
      q: '부시워킹(또는 등산이나 캠핑 등 자연 활동)을 떠나기 전 지켜야 할 안전 수칙을 아래 조건에 맞게 서술하시오.',
      standard: '[10영03-04] 친숙한 일반적 주제에 관한 글을 읽고 필자의 의도나 글의 목적을 파악할 수 있다.',
      difficulty: '중',
      score: 10,
      conditions: ['지문에서 언급된 안전 수칙을 최소 두 가지 이상 포함할 것', '자신의 표현으로 재구성하여 서술할 것'],
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
        'Before going on a nature walk, it is important to follow some basic safety rules. First, you should research the route beforehand and check the weather and park conditions, since conditions can change quickly. Second, you should always tell a friend or the local authorities where you are going and when you expect to return, so that someone knows in case of an emergency.',
      totalScore: 10,
      rubric: [
        {
          criterion: '안전 수칙의 구체성',
          maxScore: 6,
          levels: [
            { score: 6, desc: '지문의 안전 수칙 두 가지 이상을 자신의 표현으로 구체적으로 서술함' },
            { score: 3, desc: '안전 수칙을 한 가지만 구체적으로 서술함' },
            { score: 1, desc: '안전 수칙을 거의 서술하지 않음' },
          ],
        },
        {
          criterion: '표현의 정확성',
          maxScore: 4,
          levels: [
            { score: 4, desc: '문법과 어휘 사용이 정확하며 의미 전달에 지장이 없음' },
            { score: 2, desc: '오류가 있으나 의미 전달에 큰 지장은 없음' },
            { score: 1, desc: '오류가 많아 의미 전달이 어려움' },
          ],
        },
      ],
    },
  ],
}
