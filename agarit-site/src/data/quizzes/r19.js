export const r19Quiz = {
  mcq: [
    {
      id: 'r19-mcq-1',
      q: '영양성분표를 읽을 때 이 글이 권장하지 않는 것은?',
      options: [
        '퍼센트 일일 권장량(% DV)을 확인한다.',
        '식이섬유, 비타민 D, 무기질 섭취를 충분히 챙긴다.',
        '포화지방, 트랜스지방, 나트륨 섭취를 주의한다.',
        '칼로리는 전혀 신경 쓰지 않아도 된다.',
        '건강 관점에서 두 식품을 비교해볼 수 있다.',
      ],
      answer: 3,
      explain: '지문은 % DV 확인, 유익 영양소 섭취, 유해 성분 주의를 권장하며, 칼로리를 무시해도 된다는 내용은 없습니다.',
    },
  ],
  short: [
    {
      id: 'r19-short-1',
      subtype: '문장완성',
      q: '다음 조건에 맞게 빈칸을 완성하시오.\n[조건] "it has more ~ than ~." 또는 "it has less ~ than ~." 표현 중 하나를 사용할 것\n\nQ. Which would you choose between the two cakes from a health point of view?\nA. From a health point, I would choose the chestnut cake because it ________________________________.',
      answers: [
        'has more dietary fiber than the cheesecake',
        'has less cholesterol than the cheesecake',
        'has less sodium than the cheesecake',
      ],
      explain: '치즈케이크보다 식이섬유가 많거나(more), 콜레스테롤·나트륨이 적다는(less) 내용을 조건에 맞게 쓰면 정답입니다.',
    },
    {
      id: 'r19-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 형태를 쓰시오. (many의 비교급)\n"The chestnut cake has ________ dietary fiber than the cheesecake."',
      answers: ['more'],
      explain: 'many/much의 비교급은 more입니다.',
    },
  ],
  essay: [
    {
      id: 'r19-essay-short',
      subtype: '단문 서술형',
      q: '자신이 좋아하는 간식 하나를 정하고, 그 간식의 영양성분표에서 어떤 점을 가장 눈여겨볼 것인지 3~5문장으로 간단히 쓰시오.',
      standard: '[10영04-06] 일상생활이나 친숙한 일반적 주제에 관한 그림, 도표 등을 설명하는 글을 쓸 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '간식 이름과 살펴볼 항목을 한 가지 이상 포함할 것'],
      model:
        'My favorite snack is a chocolate cookie. When I check its nutrition facts label, I always look at the sugar and saturated fat first. These snacks often have a high percent daily value for both. Even though I enjoy eating them, checking the label helps me eat them in smaller amounts.',
      totalScore: 6,
      rubric: [
        {
          criterion: '간식 및 확인 항목 제시',
          maxScore: 3,
          levels: [
            { score: 3, desc: '간식과 살펴볼 항목을 구체적으로 밝히고 3~5문장 분량으로 자연스럽게 서술함' },
            { score: 2, desc: '간식이나 항목 중 하나가 다소 막연함' },
            { score: 1, desc: '간식이나 항목을 거의 제시하지 않음' },
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
      id: 'r19-essay-1',
      subtype: '서술형',
      q: '평소 자신이 즐겨 먹는 간식이나 음식 두 가지를 골라, 영양성분표를 참고한다고 가정하고 어떤 것이 더 건강한 선택인지 비교하여 서술하시오.',
      standard: '[10영04-06] 일상생활이나 친숙한 일반적 주제에 관한 그림, 도표 등을 설명하는 글을 쓸 수 있다.',
      difficulty: '중',
      score: 10,
      conditions: ['more ~ than 또는 less ~ than 표현을 최소 한 번 사용할 것', '건강 관점에서의 이유를 포함할 것'],
      model:
        'When comparing a granola bar and a chocolate bar, I would choose the granola bar from a health point of view. It has more dietary fiber than the chocolate bar, and it also has less sugar. Even though the chocolate bar tastes sweeter, the granola bar is a better choice for maintaining a balanced diet.',
      totalScore: 10,
      rubric: [
        {
          criterion: '비교 표현 및 근거',
          maxScore: 6,
          levels: [
            { score: 6, desc: 'more/less ~ than 표현을 정확히 사용하고 건강 관점의 근거를 구체적으로 제시함' },
            { score: 3, desc: '비교 표현이나 근거 중 하나가 미흡함' },
            { score: 1, desc: '비교 표현과 근거가 거의 없음' },
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
