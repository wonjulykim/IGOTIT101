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
