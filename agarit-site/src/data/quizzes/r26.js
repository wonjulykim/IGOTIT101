export const r26Quiz = {
  mcq: [
    {
      id: 'r26-mcq-1',
      q: 'Eric Whitacre가 가상 합창단 아이디어를 떠올린 계기는?',
      options: [
        '음악 학교에서 강의를 듣고 나서',
        '한 팬이 그의 곡을 부르는 영상을 보고 감동받아서',
        '다른 작곡가의 합창단을 모방하려고',
        '음반 회사의 요청을 받아서',
        '오래된 합창곡을 발견해서',
      ],
      answer: 1,
      explain: '한 팬이 자신의 곡을 부르는 영상을 보고 깊이 감동받은 것이 계기가 되었습니다.',
    },
  ],
  short: [
    {
      id: 'r26-short-1',
      subtype: '순서배열',
      q: '다음 사건들을 이야기의 흐름에 맞게 순서대로 배열하여 기호만 쓰시오.\n(A) Whitacre asked fans to download his musical work and posted a conducting video.\n(B) Whitacre was inspired by a fan\'s video and decided to create a virtual choir.\n(C) 185 singers from 12 countries uploaded their videos, which were combined into one performance.',
      answers: ['B-A-C', 'B, A, C'],
      explain: '영감을 받음(B) → 구체적 단계 진행(A) → 최종 결과물 완성(C)의 순서가 자연스럽습니다.',
    },
    {
      id: 'r26-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 단어를 쓰시오. (사람을 선행사로 하는 관계대명사)\n"Thanks to the help of a participant ________ offered to edit the recordings..."',
      answers: ['who', 'that'],
      explain: '선행사가 사람(a participant)이므로 주격 관계대명사 who 또는 that이 알맞습니다.',
    },
  ],
  essay: [
    {
      id: 'r26-essay-short',
      subtype: '단문 서술형',
      q: '가상 합창단(virtual choir)이 만들어진 과정을 한 가지 이상 언급하며, 이에 대한 자신의 생각을 3~5문장으로 쓰시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '가상 합창단이 만들어진 과정을 한 가지 이상 언급할 것'],
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
        'Whitacre asked singers around the world to record videos of themselves singing their parts and upload them online. Then, one participant helped combine all of the videos into a single performance. I think this is a wonderful way to create music, because it lets people who have never met work together on something beautiful. It also shows how much technology can help people share their talents with the world.',
      totalScore: 6,
      rubric: [
        {
          criterion: '제작 과정 언급 및 생각 제시',
          maxScore: 4,
          levels: [
            { score: 4, desc: '가상 합창단 제작 과정을 정확히 언급하고 자신의 생각을 명확히 제시함' },
            { score: 2, desc: '과정 언급이나 생각 제시 중 하나가 미흡함' },
            { score: 1, desc: '과정과 생각을 거의 제시하지 않음' },
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
      id: 'r26-essay-1',
      subtype: '서술형',
      q: '온라인 기술이 사람들의 협업(collaboration) 방식을 어떻게 바꾸었는지, 이 글의 사례를 활용하여 서술하시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '중',
      score: 10,
      conditions: ['글의 사례(가상 합창단)를 구체적으로 언급할 것', '온라인 기술의 장점을 한 가지 이상 서술할 것'],
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
          title: '설명하는 글을 완성해보세요',
          items: [
            '1단계: 설명할 대상이나 사건이 무엇인지 지문에서 확인하기',
            '2단계: 관련된 사실 정보나 근거를 지문에서 찾아 정리하기',
            '3단계: 아래 조건에 제시된 항목 순서대로 정보를 배열하기',
            '4단계: 사실에 근거하여 객관적이고 간결한 문장으로 쓰기',
            '5단계: 조건에 맞는 형식(제목, 문단 구성 등)을 갖추어 완성하기',
          ],
        },
      },
      model:
        "Online technology has made it possible for people to collaborate without being in the same place. In the case of the virtual choir, 185 singers from 12 countries were able to record their parts separately and still create one unified performance together. This shows that online tools can connect people who share the same passion, even when they live far apart from each other.",
      totalScore: 10,
      rubric: [
        {
          criterion: '사례 언급 및 장점 설명',
          maxScore: 6,
          levels: [
            { score: 6, desc: '가상 합창단 사례를 구체적으로 언급하고 온라인 기술의 장점을 명확히 설명함' },
            { score: 3, desc: '사례나 장점 설명 중 하나가 미흡함' },
            { score: 1, desc: '사례와 장점을 거의 제시하지 않음' },
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
