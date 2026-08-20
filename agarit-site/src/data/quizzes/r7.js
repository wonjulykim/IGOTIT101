export const r7Quiz = {
  mcq: [
    {
      id: 'r7-mcq-1',
      q: '이 제안서에서 "Why We Need This Club" 항목이 하는 역할로 가장 적절한 것은?',
      options: [
        '동아리 활동 일정을 안내한다',
        '동아리가 필요한 이유를 설명한다',
        '동아리 회비를 안내한다',
        '동아리 회원 명단을 제시한다',
        '동아리 로고를 소개한다',
      ],
      answer: 1,
      explain: '"Why We Need This Club"은 동아리가 왜 필요한지, 어떤 학생들의 요구를 충족하는지를 설명하는 항목입니다.',
    },
  ],
  short: [
    {
      id: 'r7-short-1',
      subtype: '단답형',
      q: '이 제안서의 5개 항목 중, 동아리 활동의 "기대 효과"를 설명하는 항목의 이름을 영어로 쓰시오.',
      answers: ['expected results', 'Expected Results'],
      explain: 'Expected Results 항목에서 동아리 활동의 기대 효과를 설명합니다.',
    },
    {
      id: 'r7-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 말을 쓰시오. (to부정사 형태로)\n"I would like ________ a Cooking Club." (propose)',
      answers: ['to propose'],
      explain: 'would like는 to부정사를 목적어로 취하므로 to propose가 알맞습니다.',
    },
  ],
  essay: [
    {
      id: 'r7-essay-short',
      subtype: '단문 서술형',
      q: '자신이 만들고 싶은 동아리 이름과 그 동아리가 필요한 이유를 3~5문장으로 쓰시오.',
      standard: '[9영02-06] 친숙한 주제에 관해 자신의 의견을 주장한다. / [9영02-08] 간단한 일기, 편지, 이메일 등의 글을 쓴다.',
      difficulty: '하',
      score: 6,
      conditions: [
        '3~5문장으로 쓸 것',
        '동아리명과 그 동아리가 필요한 이유를 포함할 것',
      ],
      steps: {
        summarize: [
          '1단계: 제시된 글에서 핵심어 찾아내기',
          '2단계: 중심 문장 / 핵심 주장 찾기',
          '3단계: 주장을 뒷받침하는 근거 찾기',
          '4단계: 주장과 근거를 논리적으로 연결해 보기',
          '5단계: 단락별로 나누어 짧게 요약해 보기',
          '6단계: 여러 중심 문장을 엮어서 논리적·체계적으로 연결해 보기',
          '7단계: 주요 어휘를 자기의 말로 바꾸어서 표현해 보기',
        ],
        task: {
          title: '자신의 생각을 문장으로 완성해보세요',
          items: [
            '1단계: 무엇에 대해 쓸지 하나 고르기',
            '2단계: 그것과 관련된 사실이나 경험을 지문(또는 자신의 경험)에서 찾기',
            '3단계: 그렇게 생각하는 이유를 한 문장으로 쓰기',
            '4단계: 이유를 뒷받침하는 구체적인 근거나 예시 덧붙이기',
            '5단계: 문장들을 자연스럽게 연결하여 완성하기',
          ],
        },
      },
      model:
        'I would like to start a Board Game Club at our school. Many students enjoy playing board games, but there is no regular time or place for them to do so together. This club would give students a fun way to relax and make new friends after class. It could also help students practice skills like problem-solving and teamwork while playing games with others.',
      totalScore: 6,
      rubric: [
        {
          criterion: '동아리명과 필요성 제시',
          maxScore: 3,
          levels: [
            { score: 3, desc: '동아리명과 그것이 필요한 이유를 구체적으로 제시함' },
            { score: 2, desc: '동아리명이나 이유 중 하나만 제시함' },
            { score: 1, desc: '동아리명과 이유를 거의 제시하지 않음' },
          ],
        },
        {
          criterion: '문장 수 및 언어 형식',
          maxScore: 3,
          levels: [
            { score: 3, desc: '3~5문장을 지키고 언어 형식이 정확함' },
            { score: 2, desc: '문장 수는 지켰으나 오류가 다소 있음' },
            { score: 1, desc: '문장 수를 지키지 않거나 오류가 많음' },
          ],
        },
      ],
    },
    {
      id: 'r7-essay-1',
      subtype: '서술형',
      q: '위 제안서의 형식을 참고하여, 친구들의 흥미와 재능을 키울 수 있는 새로운 동아리를 하나 정하고 개설을 제안하는 글을 아래 조건에 맞게 영어로 작성하시오.',
      standard: '[9영02-06] 친숙한 주제에 관해 자신의 의견을 주장한다. / [9영02-08] 간단한 일기, 편지, 이메일 등의 글을 쓴다.',
      difficulty: '중',
      score: 16,
      conditions: [
        'Introduction, Why We Need This Club, What We Will Do, Expected Results, Conclusion 다섯 항목을 모두 작성할 것',
        '동아리명을 명확히 제시할 것',
        '100~150 단어로 쓸 것',
      ],
      steps: {
        summarize: [
          '1단계: 제시된 글에서 핵심어 찾아내기',
          '2단계: 중심 문장 / 핵심 주장 찾기',
          '3단계: 주장을 뒷받침하는 근거 찾기',
          '4단계: 주장과 근거를 논리적으로 연결해 보기',
          '5단계: 단락별로 나누어 짧게 요약해 보기',
          '6단계: 여러 중심 문장을 엮어서 논리적·체계적으로 연결해 보기',
          '7단계: 주요 어휘를 자기의 말로 바꾸어서 표현해 보기',
        ],
        task: {
          title: '설명하는 글을 완성해보세요',
          items: [
            '1단계: 설명할 대상이나 사건이 무엇인지 지문에서 확인하기',
            '2단계: 관련된 사실 정보나 근거를 지문에서 찾아 정리하기',
            '3단계: 아래 조건에 제시된 항목 순서대로 정보를 배열하기',
            '4단계: 사실에 근거하여 객관적이고 간결한 문장으로 쓰기',
            '5단계: 조건에 맞는 형식(제목, 문단 구성 등)을 갖추어 완성하기',
          ],
        },
      },
      model:
        'Proposal for a New Photography Club\n\n1. Introduction: I would like to propose a Photography Club.\n2. Why We Need This Club: Many students enjoy taking pictures but do not have a place to learn photography skills or share their work.\n3. What We Will Do: In this club, we will learn basic camera and phone photography skills and go on short photo walks around the school every Thursday.\n4. Expected Results: This club will help students express their creativity and build a portfolio of photos for future use.\n5. Conclusion: The Photography Club will give students a fun and creative way to spend their free time, and I hope the school will support this proposal.',
      totalScore: 16,
      rubric: [
        {
          criterion: '동아리명 제시',
          maxScore: 2,
          levels: [
            { score: 2, desc: '개설할 동아리명을 적절하게 제시함' },
            { score: 1, desc: '동아리명을 제시하지 못함' },
          ],
        },
        {
          criterion: '5개 항목 구성',
          maxScore: 6,
          levels: [
            { score: 6, desc: '5개 항목을 모두 명확하게 작성함' },
            { score: 3, desc: '일부 항목이 빠지거나 불명확함' },
            { score: 1, desc: '대부분의 항목을 작성하지 않음' },
          ],
        },
        {
          criterion: '내용의 주제 적합성',
          maxScore: 4,
          levels: [
            { score: 4, desc: '각 항목의 내용이 주제와 목적에 맞게 구체적으로 작성됨' },
            { score: 2, desc: '내용이 다소 형식적이거나 구체성이 부족함' },
            { score: 1, desc: '내용이 주제와 맞지 않음' },
          ],
        },
        {
          criterion: '적절한 어휘 및 언어 형식',
          maxScore: 4,
          levels: [
            { score: 4, desc: '다양한 어휘와 언어 형식을 정확하게 사용함' },
            { score: 2, desc: '오류가 있으나 의미 전달에 큰 지장은 없음' },
            { score: 1, desc: '오류가 많아 의미 전달이 어려움' },
          ],
        },
      ],
    },
  ],
}
