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
