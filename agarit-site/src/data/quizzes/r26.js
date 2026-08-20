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
