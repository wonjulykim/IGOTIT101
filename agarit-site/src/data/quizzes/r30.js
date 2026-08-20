export const r30Quiz = {
  mcq: [
    {
      id: 'r30-mcq-1',
      q: 'Kumari가 한국어를 배우는 이유로 언급된 것은?',
      options: [
        '한국 회사에 취직하기 위해',
        '아들에게 책을 읽어주고 싶어서',
        '한국으로 이민을 가고 싶어서',
        '한국 드라마를 좋아해서',
        '학교 숙제 때문에',
      ],
      answer: 1,
      explain: 'Kumari는 아들에게 책을 읽어주고 싶어서 한국어를 배운다고 말합니다.',
    },
  ],
  short: [
    {
      id: 'r30-short-1',
      subtype: '문장완성',
      q: '다음 감사 편지의 빈칸을 본문 내용에 맞게 완성하시오. (본문의 표현을 활용할 것)\n"I have tried to learn Korean to ________________________, whose name is Jinsu."',
      answers: ['read books to my son', 'read books to my son to my son'],
      explain: 'Kumari는 아들(Jinsu)에게 책을 읽어주기 위해 한국어를 배웠습니다.',
    },
    {
      id: 'r30-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 것을 쓰시오. (너무 ~해서 …하다)\n"She was ________ enthusiastic about learning Korean ________ I felt great joy in teaching her."',
      answers: ['so, that', 'so...that'],
      explain: '「so + 형용사 + that」 구문으로 "너무 ~해서 …하다"라는 뜻을 나타냅니다.',
    },
  ],
  essay: [
    {
      id: 'r30-essay-short',
      subtype: '단문 서술형',
      q: 'Kumari가 한국어를 배운 이유를 언급하고, 그 이야기를 읽고 느낀 점을 3~5문장으로 쓰시오.',
      standard: '[10영04-03] 일상생활이나 친숙한 일반적 주제에 관해 자신의 의견이나 감정을 쓸 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', 'Kumari가 한국어를 배운 이유를 언급할 것'],
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
        'Kumari learned Korean so that she could read books to her son one day. I think this shows how much a parent can want to give something meaningful to their child, even if it takes a lot of effort. Her thank-you note also shows that small acts of help, like teaching someone to read, can mean a great deal to another person. This story made me want to volunteer and help others whenever I have the chance.',
      totalScore: 6,
      rubric: [
        {
          criterion: '이유 언급 및 느낀 점',
          maxScore: 4,
          levels: [
            { score: 4, desc: 'Kumari가 한국어를 배운 이유를 정확히 언급하고 느낀 점을 명확히 서술함' },
            { score: 2, desc: '이유 언급이나 느낀 점 중 하나가 미흡함' },
            { score: 1, desc: '이유와 느낀 점을 거의 제시하지 않음' },
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
      id: 'r30-essay-1',
      subtype: '서술형',
      q: '이 글의 민지처럼, 누군가를 돕거나 봉사한 경험(또는 앞으로 하고 싶은 봉사활동)에 대해 서술하시오.',
      standard: '[10영04-03] 일상생활이나 친숙한 일반적 주제에 관해 자신의 의견이나 감정을 쓸 수 있다.',
      difficulty: '중',
      score: 10,
      conditions: ['구체적인 봉사 경험이나 계획을 포함할 것', '그 경험에서 느낀 점을 포함할 것'],
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
        "Last winter, I volunteered at a local library, helping younger students with their reading. At first, I wasn't sure I could make a difference, but seeing one student improve week after week made me so happy that I looked forward to volunteering every Saturday. This experience taught me that even small efforts can have a big impact on someone else's life.",
      totalScore: 10,
      rubric: [
        {
          criterion: '구체적 경험 및 느낀 점',
          maxScore: 6,
          levels: [
            { score: 6, desc: '구체적인 봉사 경험(또는 계획)과 느낀 점을 명확하게 서술함' },
            { score: 3, desc: '경험이나 느낀 점 중 하나가 다소 막연함' },
            { score: 1, desc: '경험과 느낀 점을 거의 서술하지 않음' },
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
