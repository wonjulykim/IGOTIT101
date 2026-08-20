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
