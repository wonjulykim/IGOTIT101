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
      q: '지문에서 소개한, 시험 스트레스를 줄이기 위한 방법의 이름을 영어로 쓰시오.',
      answers: ['stress-relief journaling', 'stress relief journaling'],
      explain: '지문은 "stress-relief journaling"이라는 방법을 소개하고 있습니다.',
    },
  ],
  essay: [
    {
      id: 'r2-essay-1',
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
