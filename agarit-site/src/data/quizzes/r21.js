export const r21Quiz = {
  mcq: [
    {
      id: 'r21-mcq-1',
      q: 'Mr. Jo가 강조한 내용으로 가장 적절한 것은?',
      options: [
        '긴급한 일은 항상 나중에 해야 한다.',
        '중요하지만 긴급하지 않은 일(운동, 진로 계획 등)에도 시간을 내야 한다.',
        '다른 사람에게 도움을 요청하는 것은 게으른 행동이다.',
        '긴급하지도 중요하지도 않은 일을 가장 먼저 해야 한다.',
        '시간 관리표는 하루에 한 번만 확인하면 충분하다.',
      ],
      answer: 1,
      explain: 'Mr. Jo는 중요하지만 긴급하지 않은 일(운동, 진로 계획 등)을 위한 시간을 반드시 확보해야 한다고 강조합니다.',
    },
  ],
  short: [
    {
      id: 'r21-short-1',
      subtype: '완성형',
      q: '다음 빈칸에 들어갈 말을 지문에서 찾아 쓰시오. (숫자를 영어 단어로)\n"He showed me a table that divides tasks into ________ categories based on urgency and importance."',
      answers: ['four'],
      explain: '긴급함과 중요함을 기준으로 일을 네(four) 가지 범주로 나눈다고 설명합니다.',
    },
    {
      id: 'r21-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 단어를 쓰시오. (A도 B도 아닌)\n"I should stop doing things that are ________ urgent ________ important."',
      answers: ['neither, nor', 'neither...nor'],
      explain: '"neither A nor B"는 "A도 B도 아닌"이라는 뜻입니다.',
    },
  ],
  essay: [
    {
      id: 'r21-essay-short',
      subtype: '단문 서술형',
      q: '오늘 자신이 한 일 중 하나를 골라 어느 범주(긴급/중요 여부)에 속하는지 3~5문장으로 간단히 쓰시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '오늘 한 일과 해당하는 범주를 명확히 밝힐 것'],
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
        'Today I studied for a math quiz that is scheduled for tomorrow. This task belongs to the "urgent and important" category, since the quiz was close and my score really matters. Because of this, I decided to study before doing anything else. Sorting it this way helped me use my time more wisely.',
      totalScore: 6,
      rubric: [
        {
          criterion: '범주 제시 및 내용 완성도',
          maxScore: 3,
          levels: [
            { score: 3, desc: '오늘 한 일과 범주를 명확히 밝히고 3~5문장 분량으로 자연스럽게 서술함' },
            { score: 2, desc: '범주는 밝혔으나 문장 수나 내용 전개가 다소 부족함' },
            { score: 1, desc: '범주가 불분명하거나 문장 수를 지키지 않음' },
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
      id: 'r21-essay-1',
      subtype: '서술형',
      q: '이 글에서 소개한 네 가지 범주(긴급하고 중요함 / 긴급하지만 중요하지 않음 / 중요하지만 긴급하지 않음 / 둘 다 아님) 중 자신이 가장 소홀히 하는 범주를 고르고, 앞으로 어떻게 시간을 관리할지 서술하시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '중',
      score: 8,
      conditions: ['네 가지 범주 중 하나를 명확히 언급할 것', '구체적인 개선 계획을 포함할 것'],
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
        'I think I neglect the "important but not urgent" category the most. I rarely make time for exercise because it never feels urgent. From now on, I will set aside 30 minutes every evening for exercise, treating it as seriously as my homework, so that it becomes a regular habit instead of something I always postpone.',
      totalScore: 8,
      rubric: [
        {
          criterion: '범주 선택 및 개선 계획',
          maxScore: 5,
          levels: [
            { score: 5, desc: '범주를 명확히 언급하고 구체적인 개선 계획을 제시함' },
            { score: 3, desc: '범주는 언급했으나 계획이 막연함' },
            { score: 1, desc: '범주나 계획을 거의 제시하지 않음' },
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
