export const r23Quiz = {
  mcq: [
    {
      id: 'r23-mcq-1',
      q: '탄산음료 속 산성분이 제품에 미치는 긍정적 효과로 언급된 것은?',
      options: [
        '칼슘 흡수를 돕는다.',
        '유통기한을 늘려준다.',
        '치아를 더 튼튼하게 만든다.',
        '소화를 빠르게 해준다.',
        '뼈를 더 단단하게 만든다.',
      ],
      answer: 1,
      explain: '산은 세균 번식을 늦춰 제품의 유통기한을 늘려준다고 설명합니다.',
    },
  ],
  short: [
    {
      id: 'r23-short-1',
      subtype: '단답형',
      q: '이 글에서 설명한, 탄산음료 속 산이 건강에 미치는 부정적 영향 세 가지를 우리말로 쓰시오.',
      answers: [
        '뼈를 약하게 함, 소화를 느리게 하고 영양분 흡수를 막음, 치아 에나멜을 손상시켜 이가 쉽게 썩게 함',
      ],
      explain: '(1) 칼슘 흡수를 방해해 뼈를 약하게 함 (2) 소화를 느리게 하고 영양분 흡수를 막음 (3) 치아 에나멜을 손상시켜 충치를 유발함',
    },
    {
      id: 'r23-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 관계대명사를 쓰시오.\n"It can damage tooth enamel, the hard substance ________ protects your teeth."',
      answers: ['that', 'which'],
      explain: '선행사(the hard substance)를 수식하는 주격 관계대명사 that/which가 알맞습니다.',
    },
  ],
  essay: [
    {
      id: 'r23-essay-short',
      subtype: '단문 서술형',
      q: '탄산음료 속 산이 몸에 미치는 부정적 영향 중 한 가지를 골라, 그것이 무엇인지와 이를 줄이기 위한 간단한 방법을 3~5문장으로 쓰시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '지문에 언급된 부정적 영향 한 가지와 이를 줄이는 방법을 포함할 것'],
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
        'One negative effect of the acid in soda is that it can damage tooth enamel over time. This can make it much easier for tooth decay to happen if soda is drunk often. To reduce this risk, I try to drink water right after having soda. I also try not to brush my teeth immediately after drinking soda, since that can spread the acid instead of removing it.',
      totalScore: 6,
      rubric: [
        {
          criterion: '부정적 영향 및 방법 제시',
          maxScore: 4,
          levels: [
            { score: 4, desc: '지문의 부정적 영향 한 가지와 이를 줄이는 방법을 정확히 제시함' },
            { score: 2, desc: '영향이나 방법 중 하나가 다소 막연하거나 부정확함' },
            { score: 1, desc: '영향과 방법을 거의 제시하지 않음' },
          ],
        },
        {
          criterion: '문장 수 및 언어 사용',
          maxScore: 2,
          levels: [
            { score: 2, desc: '3~5문장을 지켰으며 문법과 어휘 사용이 정확함' },
            { score: 1, desc: '문장 수를 지키지 않았거나 오류가 다소 있음' },
          ],
        },
      ],
    },
    {
      id: 'r23-essay-1',
      subtype: '서술형',
      q: '이 글의 내용을 바탕으로, 탄산음료를 건강하게 즐기기 위한 자신만의 습관이나 규칙을 서술하시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '중',
      score: 8,
      conditions: ['지문에 언급된 부정적 영향을 최소 한 가지 근거로 들 것', '구체적인 습관이나 규칙을 제시할 것'],
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
        'Since soda can damage tooth enamel, I try to drink water right after having soda to wash the acid away. I also try to limit myself to soda only once or twice a week instead of drinking it every day, so that my teeth and bones stay healthy in the long run.',
      totalScore: 8,
      rubric: [
        {
          criterion: '근거 및 습관 제시',
          maxScore: 5,
          levels: [
            { score: 5, desc: '지문의 부정적 영향을 근거로 들고 구체적인 습관을 제시함' },
            { score: 3, desc: '근거나 습관 중 하나가 다소 막연함' },
            { score: 1, desc: '근거와 습관을 거의 제시하지 않음' },
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
  ],
}
