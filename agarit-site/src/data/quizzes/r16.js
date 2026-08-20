export const r16Quiz = {
  mcq: [
    {
      id: 'r16-mcq-1',
      q: 'Minsu가 교복에 대해 가지고 있는 생각으로 가장 적절한 것은?',
      options: [
        '교복은 불편하므로 입지 말아야 한다.',
        '교복을 입으면 아침마다 옷을 고민할 필요가 없어서 좋다.',
        '교복은 학생의 개성을 완전히 없앤다.',
        '교복은 반드시 값비싼 브랜드여야 한다.',
        '교복은 학교 성적에 영향을 준다.',
      ],
      answer: 1,
      explain: 'Minsu는 "We don\'t need to decide what to wear every morning"이라며 교복의 장점을 이야기합니다.',
    },
  ],
  short: [
    {
      id: 'r16-short-1',
      subtype: '단답형',
      q: 'Sujin과 Minsu의 교복에 대한 의견과 그 이유를 각각 우리말로 한 문장씩 쓰시오.',
      answers: [
        'Sujin은 교복이 불편해서 반대하고, Minsu는 아침에 옷을 고민할 필요가 없어서 찬성한다',
      ],
      explain: 'Sujin은 불편함을 이유로 반대하고, Minsu는 편리함을 이유로 찬성 의견을 보입니다.',
    },
    {
      id: 'r16-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 것을 쓰시오. (do/does 중 알맞은 것)\n"Why ________ you think so?"',
      answers: ['do'],
      explain: '주어가 you이고 일반동사(think)를 쓰는 의문문이므로 do가 알맞습니다.',
    },
  ],
  essay: [
    {
      id: 'r16-essay-short',
      subtype: '단문 서술형',
      q: '교복 착용에 대한 자신의 생각을 3~5문장으로 간단히 쓰시오.',
      standard: '[10영04-03] 일상생활이나 친숙한 일반적 주제에 관해 자신의 의견이나 감정을 쓸 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '찬성 또는 반대 입장을 한 문장으로 밝힐 것'],
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
        "I think school uniforms are helpful for students. They save time in the morning because I don't have to choose what to wear. Uniforms also make it harder for students to judge each other based on clothing brands. For these reasons, I support wearing school uniforms.",
      totalScore: 6,
      rubric: [
        {
          criterion: '입장 제시 및 내용 완성도',
          maxScore: 3,
          levels: [
            { score: 3, desc: '입장을 분명히 밝히고 3~5문장 분량으로 내용을 자연스럽게 전개함' },
            { score: 2, desc: '입장은 밝혔으나 문장 수나 내용 전개가 다소 부족함' },
            { score: 1, desc: '입장이 불분명하거나 문장 수를 지키지 않음' },
          ],
        },
        {
          criterion: '언어 사용의 정확성',
          maxScore: 3,
          levels: [
            { score: 3, desc: '문법과 어휘 사용이 정확하며 의사소통에 지장이 없음' },
            { score: 2, desc: '오류가 있으나 의미 전달에 큰 지장은 없음' },
            { score: 1, desc: '오류가 많아 의미 전달이 어려움' },
          ],
        },
      ],
    },
    {
      id: 'r16-essay-1',
      subtype: '논술형',
      q: '교복 착용에 대한 자신의 입장(찬성/반대)을 정하고, 위 대화에 나온 근거 이외의 근거를 들어 의견을 서술하시오.',
      standard: '[10영04-03] 일상생활이나 친숙한 일반적 주제에 관해 자신의 의견이나 감정을 쓸 수 있다.',
      difficulty: '중',
      score: 12,
      conditions: ['찬성 또는 반대 입장을 분명히 밝힐 것', '대화에 나오지 않은 새로운 근거를 최소 한 가지 포함할 것', '80단어 이상으로 쓸 것'],
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
          title: '주장하는 글(논술문)을 완성해보세요',
          items: [
            { label: '입장 정하기', prompt: '주제에 대한 자신의 주장을 한 문장으로 적어보세요. 예: "I believe that ~."' },
            { label: '근거 두 가지 찾기', prompt: '주장을 뒷받침할 근거를 지문 내용이나 경험에서 2가지 이상 짧게 적어보세요. 예: "First, ~." "Second, ~."' },
            { label: '반대 의견 고려하기', prompt: '다른 입장이나 반대 의견을 한 문장 적어보고, 자신의 주장과 비교해보세요. 예: "Some people think ~, but ~."' },
            { label: '개요 짜기', prompt: '서론(문제 제기)-본론1(근거1)-본론2(근거2)-결론(주장 재확인) 순서로, 각 문단에 들어갈 핵심 내용을 한 줄씩 적어보세요.' },
            { label: '문단 작성하기', prompt: '개요를 바탕으로 서론부터 결론까지 순서대로 문단을 작성해보세요. 각 문단은 핵심 문장(topic sentence)으로 시작하는 것이 좋습니다.' },
          ],
        },
      },
      model:
        "I think school uniforms are a good idea. Uniforms create a sense of equality among students, since no one is judged by how expensive or fashionable their clothes are. This can reduce bullying related to appearance and help students focus more on their studies instead of worrying about what to wear. For these reasons, I support wearing school uniforms.",
      totalScore: 12,
      rubric: [
        {
          criterion: '입장 및 새로운 근거 제시',
          maxScore: 6,
          levels: [
            { score: 6, desc: '입장을 분명히 밝히고 대화에 없던 새로운 근거를 설득력 있게 제시함' },
            { score: 3, desc: '입장은 밝혔으나 근거가 대화 내용과 중복되거나 빈약함' },
            { score: 1, desc: '입장이나 근거가 불분명함' },
          ],
        },
        {
          criterion: '언어 사용의 정확성',
          maxScore: 6,
          levels: [
            { score: 6, desc: '문법과 어휘 사용이 정확하며 의사소통에 지장이 없음' },
            { score: 3, desc: '오류가 있으나 의미 전달에 큰 지장은 없음' },
            { score: 1, desc: '오류가 많아 의미 전달이 어려움' },
          ],
        },
      ],
    },
  ],
}
