export const r8Quiz = {
  mcq: [
    {
      id: 'r8-mcq-1',
      q: '이 글에서 멕시코 음식이 매운 이유로 설명한 것은?',
      options: [
        '멕시코 사람들이 단맛을 싫어해서',
        '날씨가 더워서 향신료가 음식을 신선하게 유지하는 데 도움이 되기 때문에',
        '옥수수가 매운맛을 내기 때문에',
        '학교 급식 규정 때문에',
        '멕시코에는 소금이 부족해서',
      ],
      answer: 1,
      explain: '"Mexican food is often spicy because the weather is hot, and spices help keep food fresh."라고 설명합니다.',
    },
  ],
  short: [
    {
      id: 'r8-short-1',
      subtype: '완성형',
      q: '다음 빈칸에 들어갈 단어를 지문에서 찾아 쓰시오.\n"Food in Mexico is also part of family life — families often eat together and ________ food during special days."',
      answers: ['share'],
      explain: '가족들이 특별한 날에 음식을 "함께 나눈다(share)"고 설명합니다.',
    },
    {
      id: 'r8-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 이유를 나타내는 접속사를 쓰시오.\n"Mexican food is often spicy ________ the weather is hot."',
      answers: ['because'],
      explain: 'because는 "왜냐하면 ~ 때문에"라는 뜻으로 이유를 나타내는 절을 이끕니다.',
    },
  ],
  essay: [
    {
      id: 'r8-essay-short',
      subtype: '단문 서술형',
      q: '지문에서 소개된 멕시코 음식 외에, 자신이 먹어보고 싶은 다른 나라의 음식과 그 이유를 3~5문장으로 쓰시오.',
      standard: '[9영02-04] 친숙한 주제에 관해 경험이나 계획을 설명한다. / [9영02-06] 친숙한 주제에 관해 자신의 의견을 주장한다.',
      difficulty: '하',
      score: 6,
      conditions: [
        '3~5문장으로 쓸 것',
        '먹어보고 싶은 나라의 음식과 그 이유를 포함할 것',
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
        'I would like to try Vietnamese food, especially a noodle soup called pho. I have seen pictures of it online, and it looks fresh and delicious with lots of herbs on top. I am curious about how the broth is made, since I heard it takes a long time to prepare properly. Trying this dish would help me learn more about Vietnamese culture, just like tasting Mexican food taught me about Mexico.',
      totalScore: 6,
      rubric: [
        {
          criterion: '음식과 이유 제시',
          maxScore: 3,
          levels: [
            { score: 3, desc: '먹어보고 싶은 음식과 그 이유를 구체적으로 제시함' },
            { score: 2, desc: '음식이나 이유 중 하나만 제시함' },
            { score: 1, desc: '음식과 이유를 거의 제시하지 않음' },
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
      id: 'r8-essay-1',
      subtype: '서술형',
      q: "'세계 문화 이해' 주간을 맞아 세계 여러 나라의 음식을 통해 문화의 다양성을 경험했다고 가정하고, 아래 조건에 맞게 체험 보고서·블로그 글·일기 중 하나의 형식을 선택하여 영어로 작성하시오.",
      standard: '[9영02-04] 친숙한 주제에 관해 경험이나 계획을 설명한다. / [9영02-06] 친숙한 주제에 관해 자신의 의견을 주장한다.',
      difficulty: '중',
      score: 20,
      conditions: [
        '경험한 음식(국가, 특징, 맛)을 소개할 것',
        '경험한 음식이 그 나라 문화(기후, 종교, 생활 방식 등)와 어떻게 연관되어 있는지 설명할 것',
        '이번 활동을 통해 느낀 점이나 배운 점을 문화 다양성과 연결하여 설명할 것',
        '체험 보고서, 블로그 글, 일기 중 하나의 양식에 맞게 작성할 것',
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
        "Blog Post — A Taste of Mexico\n\nHi, everyone! Last week, we had Cultural Diversity Week at school. I tried Mexican food — tacos with beef, vegetables, and spicy salsa. It was very tasty and fun to eat! I learned that Mexican food is often spicy because the weather is hot, and spices help keep food fresh. People in Mexico also use a lot of corn and beans, which are traditional foods in their country. Food in Mexico is also part of family life, since families eat together and share food during special days. This activity helped me learn about Mexican culture. I learned that food can help us understand other cultures, and now I want to try food from other countries too!",
      totalScore: 20,
      rubric: [
        {
          criterion: '경험한 음식 소개',
          maxScore: 4,
          levels: [
            { score: 4, desc: '음식의 국가, 특징, 맛을 구체적이고 명확하게 소개함' },
            { score: 2, desc: '일부 요소만 소개함' },
            { score: 1, desc: '음식을 거의 소개하지 않음' },
          ],
        },
        {
          criterion: '음식과 문화의 연관성 설명',
          maxScore: 5,
          levels: [
            { score: 5, desc: '음식과 문화의 연관성과 그 이유를 설득력 있게 설명함' },
            { score: 3, desc: '연관성은 설명했으나 이유가 부족함' },
            { score: 1, desc: '연관성을 설명하지 않음' },
          ],
        },
        {
          criterion: '문화 다양성과 연결한 느낀 점',
          maxScore: 5,
          levels: [
            { score: 5, desc: '느낀 점이나 배운 점을 문화 다양성과 명확하게 연결하여 설명함' },
            { score: 3, desc: '느낀 점은 있으나 문화 다양성과의 연결이 부족함' },
            { score: 1, desc: '느낀 점을 제시하지 않음' },
          ],
        },
        {
          criterion: '글의 양식 및 어휘',
          maxScore: 6,
          levels: [
            { score: 6, desc: '선택한 양식의 특성에 맞게 구성하고 다양한 어휘를 정확히 사용함' },
            { score: 3, desc: '양식이나 어휘 중 하나가 다소 미흡함' },
            { score: 1, desc: '양식과 어휘 사용이 모두 미흡함' },
          ],
        },
      ],
    },
  ],
}
