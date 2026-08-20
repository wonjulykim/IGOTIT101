export const r5Quiz = {
  mcq: [
    {
      id: 'r5-mcq-1',
      q: '"함께 힘을 모아 일함"이라는 의미에 해당하는 가치(Value)는?',
      options: ['Honesty', 'Cooperation', 'Courage', 'Gratitude', 'Perseverance'],
      answer: 1,
      explain: 'Cooperation(협력)은 함께 힘을 모아 일하는 것을 의미합니다.',
    },
  ],
  short: [
    {
      id: 'r5-short-1',
      subtype: '단답형',
      q: '"어려움을 참고 견디며 끝까지 노력하는 자세"를 뜻하는 영어 단어를 표에서 찾아 쓰시오.',
      answers: ['perseverance', 'Perseverance'],
      explain: 'Perseverance(인내)가 이 의미에 해당합니다.',
    },
    {
      id: 'r5-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 형태로 알맞은 것을 쓰시오. (be동사를 -ing 형태로 바꿀 것)\n"________ nice to others is one way to show respect."',
      answers: ['being', 'Being'],
      explain: '문장의 주어 자리에는 동명사(Being)가 와서 "친절한 것"이라는 뜻을 나타냅니다.',
    },
  ],
  essay: [
    {
      id: 'r5-essay-short',
      subtype: '단문 서술형',
      q: '표에 제시된 가치(Value) 중 하나를 골라, 그 가치가 왜 중요한지에 대한 자신의 생각을 3~5문장으로 쓰시오.',
      standard: '[9영02-04] 친숙한 주제에 관해 경험이나 계획을 설명한다. / [9영02-06] 친숙한 주제에 관해 자신의 의견을 주장한다.',
      difficulty: '하',
      score: 6,
      conditions: [
        '3~5문장으로 쓸 것',
        '표에 제시된 가치 중 하나를 선택하여 그것이 중요한 이유를 포함할 것',
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
        'I think honesty is the most important value. When people tell the truth, others can trust them and feel safe around them. If someone lies even one time, it becomes harder for people to believe them again in the future. That is why I always try to tell the truth, even when it is difficult or embarrassing.',
      totalScore: 6,
      rubric: [
        {
          criterion: '가치 선택 및 이유 제시',
          maxScore: 3,
          levels: [
            { score: 3, desc: '가치를 선택하고 그것이 중요한 이유를 구체적으로 제시함' },
            { score: 2, desc: '가치는 선택했으나 이유가 부족함' },
            { score: 1, desc: '가치와 이유를 거의 제시하지 않음' },
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
      id: 'r5-essay-1',
      subtype: '논술형',
      q: '위 표에 제시된 가치 중(또는 그 외의 가치 중) 자신이 중요하게 여기는 가치를 하나 선택하여, 그 가치에 대한 글을 아래 조건에 맞게 영어로 작성하시오.',
      standard: '[9영02-04] 친숙한 주제에 관해 경험이나 계획을 설명한다. / [9영02-06] 친숙한 주제에 관해 자신의 의견을 주장한다.',
      difficulty: '중',
      score: 15,
      conditions: [
        '자신이 중요하게 여기는 가치를 선택하고 그 의미를 제시할 것 (표에 없는 가치도 선택 가능)',
        '그 가치가 나의 행동에 미친 영향을 구체적인 경험을 들어 서술할 것',
        '그 가치가 주변 사람이나 사회에 미칠 긍정적 영향을 설득력 있게 제시할 것',
        '100~120 단어로 쓸 것',
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
        'I believe in the power of kindness. Kindness means being nice, helping others, and thinking about their feelings. Every day, I try to smile at my classmates and help them when they have problems. One day, I saw a new student sitting alone during lunch. I felt sad, so I walked over and invited her to sit with me. She smiled and looked much happier. I believe small acts of kindness can change someone\'s day. If more people practice kindness, the world will be more peaceful, with less conflict and more understanding between people.',
      totalScore: 15,
      rubric: [
        {
          criterion: '가치와 의미 제시',
          maxScore: 3,
          levels: [
            { score: 3, desc: '중요하게 여기는 가치와 그 의미를 명확하게 제시함' },
            { score: 2, desc: '가치 또는 의미 중 하나만 제시함' },
            { score: 1, desc: '가치와 의미를 모두 제시하지 않음' },
          ],
        },
        {
          criterion: '개인 행동에 미친 영향(경험)',
          maxScore: 4,
          levels: [
            { score: 4, desc: '가치가 개인 행동에 미친 영향을 구체적 경험과 연결해 설명함' },
            { score: 2, desc: '경험과의 연결이 부족함' },
            { score: 1, desc: '경험을 제시하지 않음' },
          ],
        },
        {
          criterion: '사회적/공동체 영향 설명',
          maxScore: 4,
          levels: [
            { score: 4, desc: '주변이나 사회에 미칠 긍정적 영향을 설득력 있게 설명함' },
            { score: 2, desc: '영향을 설명했으나 설득력이 부족함' },
            { score: 1, desc: '영향을 설명하지 않음' },
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
