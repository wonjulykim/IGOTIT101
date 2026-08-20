export const r11Quiz = {
  mcq: [
    {
      id: 'r11-mcq-1',
      q: '이 글의 요지로 가장 적절한 것은?',
      options: [
        '고대 그리스인의 일상은 오늘날 우리의 삶과 여러 면에서 비슷했다.',
        '고대 그리스에는 학교라는 개념이 없었다.',
        '고대 그리스인들은 전자제품을 사용했다.',
        '고대 그리스의 도시들은 정부 없이 운영되었다.',
        '아크로폴리스는 평범한 주택가였다.',
      ],
      answer: 0,
      explain: '글 전체는 고대 그리스인의 삶이 오늘날과 여러 면에서 닮아 있었음을 설명합니다.',
    },
  ],
  short: [
    {
      id: 'r11-short-1',
      subtype: '완성형',
      q: '다음 빈칸에 들어갈 단어를 지문에서 찾아 쓰시오.\n"The daily life of an ancient Greek was, in many ways, quite ________ to our lives today."',
      answers: ['similar'],
      explain: '글의 첫 문장에서 고대 그리스인의 삶이 오늘날과 "similar(비슷)"했다고 설명합니다.',
    },
    {
      id: 'r11-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 관계대명사를 쓰시오. (콤마 뒤에서 앞 내용을 보충 설명)\n"The polis was located in the center of the city, ________ usually surrounded the acropolis."',
      answers: ['which'],
      explain: '콤마 뒤에서 앞 내용을 보충 설명하는 계속적 용법의 관계대명사 which가 알맞습니다.',
    },
  ],
  essay: [
    {
      id: 'r11-essay-short',
      subtype: '단문 서술형',
      q: '고대 그리스 사회와 오늘날 우리 사회의 공통점 중 한 가지를 골라 3~5문장으로 서술하시오.',
      standard: '[9영01-03] 친숙한 주제에 관한 담화나 글의 중심 내용을 파악한다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '지문에 언급된 근거를 한 가지 이상 포함할 것'],
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
        'One similarity between ancient Greek society and ours today is that both value education and organized government. Just like students today, young Greeks attended different kinds of schools to learn various subjects. Their cities were also run by governments centered around the polis, similar to how modern cities have city halls and local governments. This shows that even though thousands of years have passed, some basic parts of society have stayed the same.',
      totalScore: 6,
      rubric: [
        {
          criterion: '공통점 근거 제시',
          maxScore: 4,
          levels: [
            { score: 4, desc: '지문의 근거를 활용해 공통점 한 가지를 명확히 제시함' },
            { score: 2, desc: '공통점을 제시했으나 근거가 다소 막연함' },
            { score: 1, desc: '공통점을 거의 제시하지 않음' },
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
      id: 'r11-essay-1',
      subtype: '서술형',
      q: '위 글을 읽고, 고대 그리스 사회와 오늘날 우리 사회의 공통점을 두 가지 이상 들어 요약하여 서술하시오.',
      standard: '[9영01-03] 친숙한 주제에 관한 담화나 글의 중심 내용을 파악한다.',
      difficulty: '중',
      score: 8,
      conditions: ['지문에 언급된 근거를 최소 두 가지 포함할 것', '완전한 문장으로 서술할 것'],
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
      },
      model:
        'Ancient Greek society and modern society share several similarities. Like us, ancient Greeks enjoyed cultural activities such as plays, sports, and music, and their cities had organized governments led by a polis. They also valued education, attending different kinds of schools, much like students do today.',
      totalScore: 8,
      rubric: [
        {
          criterion: '공통점 근거 제시',
          maxScore: 5,
          levels: [
            { score: 5, desc: '지문의 근거를 활용해 공통점 두 가지 이상을 명확히 제시함' },
            { score: 3, desc: '공통점을 한 가지만 명확히 제시함' },
            { score: 1, desc: '공통점을 거의 제시하지 않음' },
          ],
        },
        {
          criterion: '문장의 완성도 및 어휘',
          maxScore: 3,
          levels: [
            { score: 3, desc: '완전한 문장과 정확한 어휘로 서술함' },
            { score: 2, desc: '사소한 오류가 있으나 의미 전달에 지장 없음' },
            { score: 1, desc: '오류가 많아 의미 전달이 어려움' },
          ],
        },
      ],
    },
  ],
}
