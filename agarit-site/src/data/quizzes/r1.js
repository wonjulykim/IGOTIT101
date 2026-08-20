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
      subtype: '완성형',
      q: "다음 빈칸에 들어갈 단어를 지문에서 찾아 쓰시오.\n\"________ uses fake emails or text messages to trick people into giving away their personal details.\"",
      answers: ['phishing', 'Phishing'],
      explain: '피싱(phishing)은 가짜 이메일이나 문자로 개인정보를 빼내는 수법입니다.',
    },
    {
      id: 'r1-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 관계대명사로 가장 적절한 것을 쓰시오.\n"Malware is harmful software ________ quietly installs itself on a device."',
      answers: ['that', 'which'],
      explain: '선행사가 사물(software)이므로 주격 관계대명사 that 또는 which가 들어갑니다.',
    },
  ],
  essay: [
    {
      id: 'r1-essay-short',
      subtype: '단문 서술형',
      q: '지문에서 소개된 예방 방법 중 하나를 골라, 그것이 왜 효과적인지에 대한 자신의 생각을 3~5문장으로 쓰시오.',
      standard: '[10공영1-02-02] 사실적 정보나 지식을 말이나 글로 전달한다. / [10공영1-02-04] 자신의 생각이나 의견을 표현한다.',
      difficulty: '하',
      score: 8,
      conditions: [
        '3~5문장으로 쓸 것',
        '지문에 언급된 예방 방법(발신자 확인, 보안 소프트웨어 사용, 이중 인증 등) 중 최소 한 가지를 구체적으로 언급할 것',
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
        "One simple way to prevent identity theft is checking the sender's email address before clicking any link. Many phishing emails look real, but they often come from strange addresses that do not match the company they claim to be from. If people take just a few seconds to look carefully, they can avoid giving away their passwords or bank details. I think this habit is effective because it costs nothing and can be done by anyone, even without special technical knowledge.",
      totalScore: 8,
      rubric: [
        {
          criterion: '예방 방법 제시 및 설명',
          maxScore: 5,
          levels: [
            { score: 5, desc: '예방 방법을 구체적으로 언급하고 그것이 효과적인 이유를 논리적으로 설명함' },
            { score: 3, desc: '예방 방법은 언급했으나 이유 설명이 부족함' },
            { score: 1, desc: '예방 방법을 제시하지 않음' },
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
      id: 'r1-essay-1',
      subtype: '논술형',
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
