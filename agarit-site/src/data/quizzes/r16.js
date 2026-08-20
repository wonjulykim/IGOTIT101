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
