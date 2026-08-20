export const r20Quiz = {
  mcq: [
    {
      id: 'r20-mcq-1',
      q: '글쓴이(고민을 올린 학생)의 심정으로 가장 적절한 것은?',
      options: ['자신감 넘치고 행복함', '외롭고 자신에게 실망함', '화가 나고 공격적임', '전혀 신경 쓰지 않음', '친구가 너무 많아 힘듦'],
      answer: 1,
      explain: "\"Nobody seems to like me. I don't like myself, either.\"에서 외로움과 자기 실망감이 드러납니다.",
    },
  ],
  short: [
    {
      id: 'r20-short-1',
      subtype: '문장완성',
      q: '다음 조건에 맞게 위로의 덧글을 완성하시오.\n[조건] 1. 긍정적인 내용일 것 2. 위에 나온 덧글과 똑같이 반복하지 말 것 3. 3단어 이상 문장으로 쓸 것\n\nHey, ________________________________.',
      answers: [
        "sometimes it takes a long time to make close friends",
        "you're always a better person than you think",
        'it just takes time to find real friends',
      ],
      explain: '진심 어린 위로와 긍정적인 메시지를 담은 3단어 이상의 문장이면 정답으로 인정합니다.',
    },
    {
      id: 'r20-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 형태를 쓰시오. (동사원형 hate를 활용, 동명사 형태로)\n"Stop ________ yourself for what you\'re not." (hate)',
      answers: ['hating'],
      explain: 'stop은 목적어로 동명사(hating)를 취합니다.',
    },
  ],
  essay: [
    {
      id: 'r20-essay-short',
      subtype: '단문 서술형',
      q: '글쓴이의 고민글을 읽고, 자신이라면 어떤 한 문장으로 위로해줄지 3~5문장으로 간단히 쓰시오.',
      standard: '[10영04-03] 일상생활이나 친숙한 일반적 주제에 관해 자신의 의견이나 감정을 쓸 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '실제 위로의 말을 한 문장 이상 포함할 것'],
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
        'I would tell the writer, "It just takes time to find the right friends." Making close friends after only three months is hard for almost everyone. I would remind them that being kind to themselves matters just as much as making new friends. Things usually get better with a little more time.',
      totalScore: 6,
      rubric: [
        {
          criterion: '위로의 말 및 내용 완성도',
          maxScore: 3,
          levels: [
            { score: 3, desc: '실제 위로의 말을 포함하여 3~5문장 분량으로 자연스럽게 서술함' },
            { score: 2, desc: '위로의 말은 있으나 문장 수나 내용 전개가 다소 부족함' },
            { score: 1, desc: '위로의 말이 없거나 문장 수를 지키지 않음' },
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
      id: 'r20-essay-1',
      subtype: '서술형',
      q: '친구가 힘든 일을 겪고 있을 때 힘이 되어준 경험이 있다면(또는 앞으로 그렇게 하고 싶다면), 어떤 말이나 행동으로 위로했는지(또는 위로하고 싶은지) 서술하시오.',
      standard: '[10영04-03] 일상생활이나 친숙한 일반적 주제에 관해 자신의 의견이나 감정을 쓸 수 있다.',
      difficulty: '중',
      score: 10,
      conditions: ['구체적인 상황을 포함할 것', '실제로 사용한(또는 사용하고 싶은) 위로의 말을 포함할 것'],
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
        "Last year, my friend felt really down after failing an important test. I told her, \"One test doesn't define who you are, and I know how hard you worked.\" We then studied together for the next test, and she felt much more confident. Small words of encouragement can really help someone feel less alone during a hard time.",
      totalScore: 10,
      rubric: [
        {
          criterion: '구체적 상황 및 위로의 말',
          maxScore: 6,
          levels: [
            { score: 6, desc: '구체적인 상황과 실제 위로의 말(또는 계획)을 명확하게 제시함' },
            { score: 3, desc: '상황이나 위로의 말 중 하나가 다소 막연함' },
            { score: 1, desc: '상황과 위로의 말을 거의 제시하지 않음' },
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
