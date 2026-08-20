export const r12Quiz = {
  mcq: [
    {
      id: 'r12-mcq-1',
      q: '위 대화에서 도서관의 위치로 가장 적절한 것은?',
      options: [
        '강의실 옆',
        '등록 사무실 옆',
        '기숙사 옆',
        '학생회관 안',
        '주차장 옆',
      ],
      answer: 1,
      explain: '"The library? It\'s next to the registration office."라고 말합니다.',
    },
  ],
  short: [
    {
      id: 'r12-short-1',
      subtype: '순서배열',
      q: "다음 <보기> 이후로 이어질 대화를 흐름에 맞게 순서대로 배열하여 번호만 쓰시오.\n\n<보기>\nA: Hi. Excuse me.\nB: Yes? How can I help you?\nA: Where's the library?\n\n[1]: Oh... sorry, I'm new here. Where's the post office?\n[2]: Yes, I see it.\n[3]: The library? It's next to the post office.\n[4]: That's the city hall. The post office is on the right, and the library is right next to it.\n[5]: I see. Thanks!\n[6]: See that big building over there?",
      answers: ['3-1-6-2-4-5', '[3]-[1]-[6]-[2]-[4]-[5]'],
      explain: '"library → post office가 어디인지 되물음 → 큰 건물을 보라고 안내 → 보인다고 답함 → 시청과 우체국·도서관 위치 설명 → 감사 인사"의 순서가 자연스럽습니다.',
    },
    {
      id: 'r12-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 축약형을 쓰시오.\n"________ the library?" (= Where is the library?)',
      answers: ["Where's", "where's"],
      explain: 'Where is의 축약형은 Where\'s입니다.',
    },
  ],
  essay: [
    {
      id: 'r12-essay-short',
      subtype: '단문 서술형',
      q: '위 대화를 참고하여, 자신이 낯선 장소에서 길을 물어봤던 경험(또는 상상)을 3~5문장으로 짧게 서술하시오.',
      standard: '[9영01-04] 친숙한 주제에 관한 담화나 글에서 일이나 사건의 논리적 관계를 파악한다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', 'next to, on the right 등 위치를 나타내는 표현을 최소 한 개 포함할 것'],
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
        "Last year, I got lost on the first day at my new school and had to ask a teacher for directions to the gym. She kindly told me that the gym was next to the cafeteria, right across from the main entrance. I was nervous about asking a stranger, but she was very friendly and made me feel comfortable. Since then, I always try to remember the names of a few big buildings so I can ask for directions more easily.",
      totalScore: 6,
      rubric: [
        {
          criterion: '경험 서술 및 위치 표현 사용',
          maxScore: 4,
          levels: [
            { score: 4, desc: '구체적인 경험을 서술하고 위치 표현을 정확히 포함함' },
            { score: 2, desc: '경험 서술이 막연하거나 위치 표현이 부정확함' },
            { score: 1, desc: '경험이나 위치 표현을 거의 포함하지 않음' },
          ],
        },
        {
          criterion: '문장 개수 및 형식 준수',
          maxScore: 2,
          levels: [
            { score: 2, desc: '3~5문장의 완전한 문장으로 서술함' },
            { score: 1, desc: '문장 개수 조건을 지키지 않았거나 문장이 불완전함' },
          ],
        },
      ],
    },
    {
      id: 'r12-essay-1',
      subtype: '서술형',
      q: '위 대화를 참고하여, 학교(또는 낯선 장소)에서 새로 온 사람에게 특정 장소로 가는 길을 안내하는 대화문을 아래 조건에 맞게 영어로 작성하시오.',
      standard: '[9영01-04] 친숙한 주제에 관한 담화나 글에서 일이나 사건의 논리적 관계를 파악한다.',
      difficulty: '중',
      score: 10,
      conditions: ['적어도 두 번의 질문과 답이 오갈 것', '건물의 상대적 위치(next to, on the right 등)를 표현하는 문장을 포함할 것'],
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
        "A: Excuse me, where's the gym?\nB: The gym? It's next to the cafeteria.\nA: Sorry, I'm new here. Where's the cafeteria?\nB: See that tall building? The cafeteria is on the left of it, and the gym is right next to it.\nA: I see. Thank you!",
      totalScore: 10,
      rubric: [
        {
          criterion: '대화의 논리적 흐름',
          maxScore: 4,
          levels: [
            { score: 4, desc: '질문과 답이 자연스럽게 이어지며 논리적으로 완결됨' },
            { score: 2, desc: '흐름이 다소 어색함' },
            { score: 1, desc: '대화가 논리적으로 이어지지 않음' },
          ],
        },
        {
          criterion: '위치 표현 사용',
          maxScore: 3,
          levels: [
            { score: 3, desc: 'next to, on the right 등 위치 표현을 정확히 사용함' },
            { score: 2, desc: '위치 표현을 사용했으나 정확성이 떨어짐' },
            { score: 1, desc: '위치 표현을 사용하지 않음' },
          ],
        },
        {
          criterion: '어휘 및 언어 형식',
          maxScore: 3,
          levels: [
            { score: 3, desc: '어휘와 언어 형식을 정확하게 사용함' },
            { score: 2, desc: '오류가 있으나 의미 전달에 지장 없음' },
            { score: 1, desc: '오류가 많아 의미 전달이 어려움' },
          ],
        },
      ],
    },
  ],
}
