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
          title: '비교·대조하는 글을 완성해보세요',
          items: [
            { label: '대상 확인하기', prompt: '비교(대조)할 두 대상이 같은 범주·층위인지 확인하고 각각 한 단어로 적어보세요.' },
            { label: '공통점 찾기', prompt: '두 대상의 공통점(유사점)을 한 문장으로 적어보세요. 예: "Both ~." "Similarly, ~."' },
            { label: '차이점 찾기', prompt: '두 대상의 차이점을 한 문장으로 적어보세요. 예: "However, ~." "On the other hand, ~."' },
            { label: '기준 정리하기', prompt: '비교 기준(무엇을 기준으로 비교했는지)을 표나 목록으로 정리해보세요.' },
            { label: '균형 있게 서술하기', prompt: '공통점과 차이점을 균형 있게 문장으로 연결해 완성해보세요.' },
          ],
        },
      },
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
