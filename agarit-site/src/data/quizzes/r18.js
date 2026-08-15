export const r18Quiz = {
  mcq: [
    {
      id: 'r18-mcq-1',
      q: 'Marie가 업사이클링에서 가장 중요하게 여기는 가치는?',
      options: ['수익성 있는 사업 기회', '예술적 잠재력과 새로운 아름다움', '값싼 재료 확보', '대량 생산의 효율성', '유행을 따르는 것'],
      answer: 1,
      explain: 'Marie는 낡은 물건을 예술 작품으로 바꾸는 것에서 새로운 아름다움을 발견한다고 말합니다.',
    },
  ],
  short: [
    {
      id: 'r18-short-1',
      subtype: '단답형',
      q: 'Tom과 Marie가 업사이클링을 바라보는 관점을 각각 우리말 25자 이내로 요약하시오. (띄어쓰기 포함하지 않음)',
      answers: ['Tom: 업사이클링은 이윤이 되는 사업이다 / Marie: 업사이클링은 예술적 잠재력을 가진다'],
      explain: 'Tom은 사업적 관점, Marie는 예술적 관점에서 업사이클링을 바라봅니다.',
    },
    {
      id: 'r18-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 형태를 쓰시오. (동사 catch의 눈을 끄는 뜻의 형용사형, 하이픈 포함)\n"We upcycle old sheets into rough, eye-________ wallets." (catching)',
      answers: ['catching'],
      explain: 'eye-catching은 "눈길을 끄는"이라는 뜻의 복합 형용사로, catch의 현재분사형 catching이 쓰입니다.',
    },
  ],
  essay: [
    {
      id: 'r18-essay-short',
      subtype: '단문 서술형',
      q: 'Tom과 Marie 중 자신의 생각과 더 가까운 사람을 고르고, 그 이유를 3~5문장으로 간단히 쓰시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '하',
      score: 6,
      conditions: ['3~5문장으로 쓸 것', 'Tom 또는 Marie 중 한 명을 명확히 선택할 것'],
      model:
        "I agree more with Marie's view of upcycling. I think turning old, unwanted items into art is a beautiful idea. It shows that even something people throw away can still have value. Marie's passion for giving old objects a new life inspires me to look at trash differently.",
      totalScore: 6,
      rubric: [
        {
          criterion: '입장 선택 및 내용 완성도',
          maxScore: 3,
          levels: [
            { score: 3, desc: '한 명을 명확히 선택하고 3~5문장 분량으로 이유를 자연스럽게 서술함' },
            { score: 2, desc: '선택은 했으나 문장 수나 이유 전개가 다소 부족함' },
            { score: 1, desc: '선택이 불분명하거나 문장 수를 지키지 않음' },
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
    {
      id: 'r18-essay-1',
      subtype: '논술형',
      q: 'Tom과 Marie 중 자신의 생각과 더 가까운 사람을 고르고, 업사이클링의 가치에 대한 자신의 의견을 조건에 맞게 서술하시오.',
      standard: '[10영03-01] 친숙한 일반적 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.',
      difficulty: '중',
      score: 12,
      conditions: ['Tom 또는 Marie 중 한 명을 선택할 것', '그 이유를 자신의 경험이나 생각을 들어 설명할 것', '80단어 이상으로 쓸 것'],
      model:
        "I agree more with Marie's view of upcycling. I think the most valuable part of upcycling is giving old, forgotten items a completely new purpose and beauty. Last year, I turned an old T-shirt into a tote bag for a school project, and I felt proud that something useless became useful again. While making money from upcycling is also important, I believe the creative and environmental value matters even more.",
      totalScore: 12,
      rubric: [
        {
          criterion: '입장 선택 및 근거',
          maxScore: 6,
          levels: [
            { score: 6, desc: '입장을 명확히 선택하고 자신의 경험·생각을 근거로 설득력 있게 설명함' },
            { score: 3, desc: '입장은 선택했으나 근거가 빈약함' },
            { score: 1, desc: '입장이나 근거가 불분명함' },
          ],
        },
        {
          criterion: '언어 사용의 정확성',
          maxScore: 6,
          levels: [
            { score: 6, desc: '문법과 어휘 사용이 정확함' },
            { score: 3, desc: '오류가 있으나 의미 전달에 지장 없음' },
            { score: 1, desc: '오류가 많아 의미 전달이 어려움' },
          ],
        },
      ],
    },
  ],
}
