export const r2Quiz = {
  mcq: [
    {
      id: 'r2-mcq-1',
      q: '지문에서 소개하는 "stress-relief journaling"에 대한 설명으로 옳지 않은 것은?',
      options: [
        '매일 5분씩 감정과 걱정을 글로 적는다.',
        '걱정을 적은 뒤 긍정적인 생각이나 해결책도 함께 적는다.',
        '연구에 따르면 이런 표현적 글쓰기는 스트레스를 낮추는 데 도움이 된다.',
        '이 방법은 반드시 전문 상담사와 함께해야만 효과가 있다.',
        '자기 성찰을 도와 더 나은 학습 습관으로 이어질 수 있다.',
      ],
      answer: 3,
      explain: '지문은 학생이 스스로 매일 짧게 실천하는 글쓰기 방법을 소개하며, 상담사가 반드시 필요하다는 내용은 없습니다.',
    },
  ],
  short: [
    {
      id: 'r2-short-1',
      subtype: '단답형',
      q: '지문에서 소개한, 시험 스트레스를 줄이기 위한 방법의 이름을 영어로 쓰시오.',
      answers: ['stress-relief journaling', 'stress relief journaling'],
      explain: '지문은 "stress-relief journaling"이라는 방법을 소개하고 있습니다.',
    },
    {
      id: 'r2-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 형태로 가장 적절한 것을 쓰시오. (동사원형으로 쓸 것)\n"This practice helps students ________ their feelings and reduce anxiety."',
      answers: ['understand'],
      explain: 'help는 목적격보어로 동사원형을 취할 수 있으므로 understand가 적절합니다. (help + 목적어 + 동사원형)',
    },
  ],
  essay: [
    {
      id: 'r2-essay-short',
      subtype: '단문 서술형',
      q: '스트레스 해소 저널링(stress-relief journaling)이 자신에게 도움이 될 것 같은지에 대한 생각을 3~5문장으로 쓰시오.',
      standard: '[10공영1-02-02] 사실적 정보나 지식을 말이나 글로 전달한다. / [10공영1-02-04] 자신의 생각이나 의견을 표현한다.',
      difficulty: '하',
      score: 7,
      conditions: [
        '3~5문장으로 쓸 것',
        '저널링 방법이 자신에게 도움이 될지 여부와 그 이유를 포함할 것',
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
        'I think stress-relief journaling could help me manage my exam stress. Writing down my worries for just five minutes might make my mind feel less crowded before I start studying. I especially like the idea of writing a positive thought afterward, because I usually forget to think about solutions when I am anxious. I plan to try this method during my next exam period to see if it really works for me.',
      totalScore: 7,
      rubric: [
        {
          criterion: '자신의 생각과 이유 제시',
          maxScore: 4,
          levels: [
            { score: 4, desc: '저널링이 도움이 될지에 대한 생각과 구체적인 이유를 명확히 제시함' },
            { score: 2, desc: '생각만 제시하고 이유가 부족함' },
            { score: 1, desc: '생각과 이유를 거의 제시하지 않음' },
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
      id: 'r2-essay-1',
      subtype: '논술형',
      q: '고등학생들이 겪는 스트레스의 원인을 한 가지 정하고, 이를 해소할 수 있는 실천 가능한 방안을 제안하는 글을 아래 조건에 맞게 영어로 작성하시오.',
      standard: '[10공영1-02-02] 사실적 정보나 지식을 말이나 글로 전달한다. / [10공영1-02-04] 자신의 생각이나 의견을 표현한다.',
      difficulty: '중',
      score: 17,
      conditions: [
        '고등학생이 겪는 스트레스의 원인을 한 가지 구체적으로 제시할 것',
        '그 원인을 해소할 수 있는 실천 가능한 해결 방안을 구체적으로 제시할 것',
        '해결 방안의 효과에 대해 객관적인 자료(연구·통계 등)를 인용할 것',
        '서론-본론-결론 구조를 갖추어 작성할 것',
        '200~250단어로 쓸 것',
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
          title: '주장하는 글(논술문)을 완성해보세요',
          items: [
            '1단계: 주제에 대한 자신의 입장(주장)을 한 문장으로 정하기',
            '2단계: 주장을 뒷받침할 근거(사실·경험·지문 내용)를 두 가지 이상 찾기',
            '3단계: 반대 의견이나 다른 입장도 떠올려보고 자신의 주장과 비교하기',
            '4단계: 서론(문제 제기)-본론(근거 제시)-결론(주장 재확인) 구조로 개요 짜기',
            '5단계: 개요에 따라 문단을 순서대로 작성하기',
          ],
        },
      },
      model:
        'A Creative Way to Reduce Exam Stress\n\nMany high school students feel stressed mainly because of exams. The pressure to perform well can cause anxiety and worry about their future. To help students manage this stress, I suggest a creative and proven method: "Stress-Relief Journaling."\n\nThis method involves students writing down their feelings and worries about exams for just five minutes each day. Then, they write positive thoughts or solutions to their problems. Studies show that this kind of expressive writing can lower stress and improve mental health. This practice helps students understand their feelings, reduce anxiety, and develop a positive mindset.\n\nIn conclusion, exam stress is a common problem, but "Stress-Relief Journaling" offers a creative and effective solution. I encourage everyone to try this method regularly.',
      totalScore: 17,
      rubric: [
        {
          criterion: '스트레스 원인 및 해결 방안 제시',
          maxScore: 6,
          levels: [
            { score: 6, desc: '원인과 실천 가능한 해결 방안을 모두 구체적으로 제시함' },
            { score: 3, desc: '원인이나 해결 방안 중 하나만 구체적으로 제시함' },
            { score: 1, desc: '원인과 해결 방안을 모두 제시하지 않음' },
          ],
        },
        {
          criterion: '객관적 자료로 효과 설명하기',
          maxScore: 3,
          levels: [
            { score: 3, desc: '해결 방안의 효과를 객관적 자료를 인용해 명확히 설명함' },
            { score: 2, desc: '효과를 설명했으나 객관적 자료를 활용하지 않음' },
            { score: 1, desc: '효과를 설명하지 않음' },
          ],
        },
        {
          criterion: '글의 형식(서론-본론-결론)',
          maxScore: 4,
          levels: [
            { score: 4, desc: '서론-본론-결론 구조를 갖추어 논리적으로 작성함' },
            { score: 2, desc: '구조의 일부만 갖춤' },
            { score: 1, desc: '구조를 갖추지 않음' },
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
