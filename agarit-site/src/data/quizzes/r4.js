export const r4Quiz = {
  mcq: [
    {
      id: 'r4-mcq-1',
      q: '이 글의 중심 내용으로 가장 적절한 것은?',
      options: [
        'AI 이미지 생성 프로그램의 사용법',
        'AI가 만든 예술 작품의 저작권을 누가 가져야 하는가에 대한 논쟁',
        '유명 화가들의 작품 목록',
        'AI가 인간의 일자리를 대체하는 속도',
        '컴퓨터 그래픽 기술의 발전 역사',
      ],
      answer: 1,
      explain: '글은 AI가 만든 작품의 저작권을 현재 누가 갖는지, 그리고 앞으로 어떤 법적 논의가 필요한지를 다룹니다.',
    },
  ],
  short: [
    {
      id: 'r4-short-1',
      subtype: '완성형',
      q: '다음 빈칸에 들어갈 단어를 지문에서 찾아 쓰시오.\n"Under current law, only humans can hold ________, so the rights usually go to whoever set up the AI."',
      answers: ['copyright'],
      explain: '현재 법으로는 인간만이 저작권(copyright)을 가질 수 있다고 설명합니다.',
    },
    {
      id: 'r4-short-2',
      subtype: '문법',
      q: '다음 빈칸에 들어갈 복합관계대명사를 쓰시오.\n"The rights usually go to ________ set up the AI — the developer, the founder, or the person who wrote the prompt."',
      answers: ['whoever'],
      explain: '"~하는 누구든지"라는 뜻의 복합관계대명사 whoever가 들어갑니다.',
    },
  ],
  essay: [
    {
      id: 'r4-essay-short',
      subtype: '단문 서술형',
      q: 'AI가 생성한 예술 작품의 저작권을 인간(개발자 또는 프롬프트 작성자)과 AI 중 누가 가져야 한다고 생각하는지 자신의 의견과 이유를 3~5문장으로 쓰시오.',
      standard: '[10공영1-02-04] 자신의 생각이나 의견을 표현한다. / [10공영1-02-06] 어휘나 표현을 점검하여 내용을 명확하게 전달한다.',
      difficulty: '하',
      score: 7,
      conditions: [
        '3~5문장으로 쓸 것',
        '저작권을 누가 가져야 하는지에 대한 자신의 입장과 이유를 포함할 것',
      ],
      model:
        'In my opinion, the person who writes the prompt should hold the copyright for AI-generated art. Even though the AI produces the final image, the human still has to imagine the idea and choose the right words to describe it. Without a clear and creative prompt, the AI cannot create anything meaningful on its own. For this reason, I believe the prompt writer deserves to be treated as the true creator, similar to how a photographer is credited for a photo taken with a camera.',
      totalScore: 7,
      rubric: [
        {
          criterion: '입장과 이유 제시',
          maxScore: 4,
          levels: [
            { score: 4, desc: '저작권을 누가 가져야 하는지에 대한 입장과 구체적인 이유를 명확히 제시함' },
            { score: 2, desc: '입장만 제시하고 이유가 부족함' },
            { score: 1, desc: '입장과 이유를 거의 제시하지 않음' },
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
      id: 'r4-essay-1',
      subtype: '논술형',
      q: '위 글을 읽고 AI가 생성한 예술 작품의 저작권을 누가 가져야 하는지에 대한 의견을 아래 조건에 맞게 영어로 작성하시오.',
      standard: '[10공영1-02-04] 자신의 생각이나 의견을 표현한다. / [10공영1-02-06] 어휘나 표현을 점검하여 내용을 명확하게 전달한다.',
      difficulty: '상',
      score: 15,
      conditions: [
        '저작권을 누가 가져야 하는지에 대한 자신의 의견을 명확히 밝힐 것',
        'AI 도구를 사용해 무언가를 창작한 경험(사용한 AI 종류, 목적, 창작 과정, 결과)을 구체적으로 서술할 것',
        '그 경험에서 인간 또는 AI가 창작 과정에 기여한 정도를 설명할 것',
        '150~200 단어로 쓸 것',
      ],
      model:
        "In my opinion, humans should hold the copyright to AI-generated art. I once used an AI image tool to create a picture for a school project. I wrote a detailed description of the scene I wanted, and the AI produced several images within seconds. I selected the one that best matched my vision and refined my wording several times to get a better result. Throughout this process, I directed every step: I chose the subject, the style, and the final image. The AI didn't make its own creative decisions — it followed my prompts closely. I was the one who imagined the idea, evaluated the results, and decided on the final version. The AI was simply a tool, like a camera, that helped me realize my idea more efficiently. Therefore, I believe the human who designs and refines the process should be recognized as the true author.",
      totalScore: 15,
      rubric: [
        {
          criterion: '입장 제시',
          maxScore: 2,
          levels: [
            { score: 2, desc: '저작권을 누가 가져야 하는지 명확히 제시함' },
            { score: 1, desc: '입장이 불명확함' },
          ],
        },
        {
          criterion: 'AI 사용 경험 제시',
          maxScore: 5,
          levels: [
            { score: 5, desc: 'AI 종류, 사용 목적, 창작 과정, 결과를 모두 구체적으로 제시함' },
            { score: 3, desc: '일부 요소만 제시함' },
            { score: 1, desc: 'AI 사용 경험을 거의 제시하지 않음' },
          ],
        },
        {
          criterion: '창작 기여도 설명',
          maxScore: 4,
          levels: [
            { score: 4, desc: '인간과 AI의 역할, 기여도 판단 기준을 설득력 있게 설명함' },
            { score: 2, desc: '기여도에 대한 설명이 다소 단편적임' },
            { score: 1, desc: '기여도에 대한 설명이 없음' },
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
