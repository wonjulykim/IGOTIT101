export const r1Quiz = {
  mcq: [
    {
      id: 'r1-mcq-1',
      q: '이 글의 주된 목적으로 가장 적절한 것은?',
      options: [
        '신분 도용의 위험성과 그 배경을 설명하기 위해',
        '새로운 스마트폰 보안 앱을 광고하기 위해',
        '경찰에 신고하는 절차를 안내하기 위해',
        '피싱 이메일을 직접 작성하는 방법을 알려주기 위해',
        '온라인 쇼핑을 홍보하기 위해',
      ],
      answer: 0,
      explain: '글은 신분 도용의 개념, 유형(피싱·악성코드), 그리고 최근 심각해지는 통계를 설명하고 있습니다.',
    },
  ],
  short: [
    {
      id: 'r1-short-1',
      q: "다음 빈칸에 들어갈 단어를 지문에서 찾아 쓰시오.\n\"________ uses fake emails or text messages to trick people into giving away their personal details.\"",
      answers: ['phishing', 'Phishing'],
      explain: '피싱(phishing)은 가짜 이메일이나 문자로 개인정보를 빼내는 수법입니다.',
    },
  ],
  essay: [
    {
      id: 'r1-essay-1',
      q: '최근 온라인 신분 도용(Identity Theft)으로 인한 피해가 늘고 있다. 학교 신문에 이 문제의 위험성을 경고하고 예방법을 알리는 기고문을 아래 조건에 맞게 영어로 작성하시오.',
      standard: '[10공영1-02-02] 사실적 정보나 지식을 말이나 글로 전달한다. / [10공영1-02-04] 자신의 생각이나 의견을 표현한다.',
      difficulty: '상',
      score: 25,
      conditions: [
        '서론: 주변의 피해 사례나 뉴스를 언급하며 시작할 것',
        '본론1: 신분 도용의 개념과 유형(피싱, 악성코드)을 지문 내용을 활용해 설명할 것',
        '본론2: 개인이 실천할 수 있는 예방 방법을 두 가지 구체적으로 제안할 것',
        '결론: 독자에게 경각심을 주거나 행동을 촉구하는 문장으로 마무리할 것',
        '제목을 붙이고, 180~220 단어로 쓸 것',
      ],
      model:
        'Title: Protect Your Digital Self: Beware of Identity Theft\n\nLast month, a classmate discovered that someone used her email to buy games online, and news reports show identity theft is rising among teenagers. Identity theft is when a person secretly takes your private details and uses them to act as if they are you. Two common types are phishing and malware. Phishing uses fake emails or texts to trick you into giving away personal details, while malware is harmful software that quietly collects data such as passwords. Recent statistics show these attacks have become far more common and far more costly than before.\n\nTo prevent identity theft, everyone can take simple action. First, check the sender\'s email address carefully before clicking any link. Second, keep your devices updated with security software so it can block malware automatically. Both steps are simple but effective.\n\nPlease stay alert and protect your information. Together, we can keep our digital lives safe!',
      totalScore: 25,
      rubric: [
        {
          criterion: '서론 · 본론 사실 정보 설명하기',
          maxScore: 9,
          levels: [
            { score: 9, desc: '피해 사례로 서론을 열고, 개념·유형·심각성을 지문 내용을 활용해 명확히 설명함' },
            { score: 5, desc: '개념이나 유형 중 일부만 설명하거나 지문 내용을 부분적으로만 활용함' },
            { score: 2, desc: '서론이 없거나 개념/유형 설명이 거의 없음' },
          ],
        },
        {
          criterion: '예방 방안 제시',
          maxScore: 6,
          levels: [
            { score: 6, desc: '실천 가능한 예방 방법 두 가지를 구체적으로 제시함' },
            { score: 3, desc: '예방 방법을 한 가지만 구체적으로 제시함' },
            { score: 1, desc: '예방 방법을 제시하지 않음' },
          ],
        },
        {
          criterion: '결론 및 글의 형식',
          maxScore: 6,
          levels: [
            { score: 6, desc: '경각심을 주는 결론과 제목을 갖추고 기고문 형식(서론-본론-결론)에 맞게 작성함' },
            { score: 3, desc: '결론이나 제목 중 하나가 미흡함' },
            { score: 1, desc: '결론과 제목이 모두 없음' },
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
