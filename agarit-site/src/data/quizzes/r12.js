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
