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
