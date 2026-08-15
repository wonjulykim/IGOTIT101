export const r28Quiz = {
  mcq: [
    {
      id: 'r28-mcq-1',
      q: 'Franklin이 자신을 비판한 사람의 마음을 바꾸기 위해 한 행동은?',
      options: [
        '그에게 화를 내며 맞섰다.',
        '그에게 책을 빌려달라고 부탁했다.',
        '그를 험담하는 편지를 보냈다.',
        '그를 완전히 무시했다.',
        '그에게 값비싼 선물을 보냈다.',
      ],
      answer: 1,
      explain: 'Franklin은 그에게 귀한 책을 빌려달라고 부탁하는 편지를 보냈습니다.',
    },
  ],
  short: [
    {
      id: 'r28-short-1',
      subtype: '단답형',
      q: "이 글에서 설명하는 심리학 이론의 이름을 영어(또는 한글)로 쓰고, 그 개념을 한 문장으로 설명하시오.",
      answers: [
        'cognitive dissonance - 생각과 행동 사이에 갈등이 생기면 불편함을 느끼고, 그 갈등을 줄이기 위해 생각이나 행동 중 하나를 바꾸는 현상',
        '인지부조화 - 생각과 행동 사이의 갈등을 줄이기 위해 둘 중 하나를 바꾸는 심리 현상',
      ],
      explain: '인지부조화(cognitive dissonance)는 생각과 행동의 불일치에서 오는 불편함을 줄이기 위해 둘 중 하나를 바꾸는 심리 현상입니다.',
    },
    {
      id: 'r28-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 것을 쓰시오. (전치사+관계대명사)\n"We feel more positively toward people ________ we do favors." (for whom / who)',
      answers: ['for whom'],
      explain: '"do favors for people"에서 for people을 for whom으로 바꾼 전치사+관계대명사 형태가 격식체로 적절합니다.',
    },
  ],
  essay: [
    {
      id: 'r28-essay-1',
      subtype: '서술형',
      q: '인지부조화(cognitive dissonance) 이론을 자신의 경험이나 주변에서 본 사례에 적용하여 설명하시오.',
      standard: '[10영03-02] 친숙한 일반적 주제에 관한 글을 읽고 주제 및 요지를 파악할 수 있다.',
      difficulty: '상',
      score: 10,
      conditions: ['인지부조화 개념을 정확히 언급할 것', '구체적인 경험이나 사례를 포함할 것'],
      model:
        "I once helped a classmate I didn't really like with a group project, even though I didn't want to. After spending time helping him, I noticed that I actually started to see him more positively. This is a good example of cognitive dissonance: since I couldn't easily undo the effort I had already put in, my mind adjusted my feelings toward him instead, just like what happened between Franklin and his opponent.",
      totalScore: 10,
      rubric: [
        {
          criterion: '개념 이해 및 사례 적용',
          maxScore: 6,
          levels: [
            { score: 6, desc: '인지부조화 개념을 정확히 이해하고 구체적인 사례에 잘 적용함' },
            { score: 3, desc: '개념 언급은 있으나 사례 적용이 다소 부족함' },
            { score: 1, desc: '개념이나 사례를 거의 제시하지 않음' },
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
