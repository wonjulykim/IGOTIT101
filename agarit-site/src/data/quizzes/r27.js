export const r27Quiz = {
  mcq: [
    {
      id: 'r27-mcq-1',
      q: '아버지가 탄 빵을 좋아한다고 말한 진짜 이유로 가장 적절한 것은?',
      options: [
        '실제로 탄 빵의 맛을 가장 좋아해서',
        '어머니의 힘든 하루를 배려하고 마음을 다치게 하고 싶지 않아서',
        '건강을 위해 탄 음식을 즐겨 먹어서',
        '음식을 남기는 것을 싫어해서',
        '어머니가 만든 요리를 항상 비판해서',
      ],
      answer: 1,
      explain: "아버지는 어머니의 힘든 하루를 이해하고 배려하는 마음에서 탄 빵을 좋아한다고 말했습니다.",
    },
  ],
  short: [
    {
      id: 'r27-short-1',
      subtype: '단답형',
      q: '아버지가 탄 빵을 좋아한다고 말한 이유를 영어로 쓰시오.',
      answers: [
        "he understood his wife's harsh day and didn't want to hurt her feelings",
        "he understood his wife's hard day and didn't want to hurt her feelings by inconsiderate words",
      ],
      explain: '아버지는 어머니의 힘든 하루를 이해하고, 매정한 말로 마음을 다치게 하고 싶지 않았기 때문입니다.',
    },
    {
      id: 'r27-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 단어를 쓰시오. (앞의 동사구를 대신하는 대동사)\n"Burnt bread never hurts anyone, but harsh words ________."',
      answers: ['do'],
      explain: 'do는 앞에 나온 hurts anyone을 대신하는 대동사입니다.',
    },
  ],
  essay: [
    {
      id: 'r27-essay-short',
      subtype: '단문 서술형',
      q: '아버지가 탄 빵을 좋아한다고 말한 진짜 이유를 언급하고, 그에 대한 자신의 생각을 3~5문장으로 쓰시오.',
      standard: '[10영04-03] 일상생활이나 친숙한 일반적 주제에 관해 자신의 의견이나 감정을 쓸 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', '아버지가 탄 빵을 좋아한다고 말한 진짜 이유를 언급할 것'],
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
        "The father said he loved burnt bread because he understood how tired his wife was, and he did not want to hurt her feelings with harsh words. I think this shows a very kind and thoughtful way of loving someone. Small lies like this, told to protect someone's feelings, can sometimes be more important than being completely honest. This story reminds me to be more patient with the people I live with.",
      totalScore: 6,
      rubric: [
        {
          criterion: '이유 언급 및 생각 제시',
          maxScore: 4,
          levels: [
            { score: 4, desc: '아버지의 진짜 이유를 정확히 언급하고 자신의 생각을 명확히 제시함' },
            { score: 2, desc: '이유 언급이나 생각 제시 중 하나가 미흡함' },
            { score: 1, desc: '이유와 생각을 거의 제시하지 않음' },
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
      id: 'r27-essay-1',
      subtype: '서술형',
      q: '이 글의 아버지처럼, 상대방을 배려하기 위해 솔직한 말 대신 다른 말이나 행동을 했던 경험(또는 앞으로 그렇게 하고 싶은 상황)을 서술하시오.',
      standard: '[10영04-03] 일상생활이나 친숙한 일반적 주제에 관해 자신의 의견이나 감정을 쓸 수 있다.',
      difficulty: '중',
      score: 8,
      conditions: ['구체적인 상황을 포함할 것', '왜 그렇게 했는지(또는 하고 싶은지) 이유를 포함할 것'],
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
        "Once, my little sister gave me a drawing that was not very good, but I told her it was wonderful. I didn't want to hurt her feelings, since I knew she had worked hard on it and was proud of it. Just like the father in the story, I believe kind words matter more than blunt honesty in small moments like this.",
      totalScore: 8,
      rubric: [
        {
          criterion: '구체적 상황 및 이유',
          maxScore: 5,
          levels: [
            { score: 5, desc: '구체적인 상황과 그렇게 행동한(할) 이유를 명확하게 제시함' },
            { score: 3, desc: '상황이나 이유 중 하나가 다소 막연함' },
            { score: 1, desc: '상황과 이유를 거의 제시하지 않음' },
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
