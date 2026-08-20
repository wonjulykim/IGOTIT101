export const r3Quiz = {
  mcq: [
    {
      id: 'r3-mcq-1',
      q: '글쓴이가 이 경험을 통해 깨달은 것으로 가장 적절한 것은?',
      options: [
        '무대 위에서는 절대 실수하면 안 된다.',
        '자신감은 완벽함이 아니라 어려움에 어떻게 대응하는가에 달려 있다.',
        '연극반 활동은 시간 낭비이다.',
        '친구의 도움 없이는 아무것도 해낼 수 없다.',
        '무대 공포증은 절대 극복할 수 없다.',
      ],
      answer: 1,
      explain: "글쓴이는 \"confidence isn't about being flawless — it's about how you respond when things go wrong\"라고 말하며 깨달음을 서술합니다.",
    },
  ],
  short: [
    {
      id: 'r3-short-1',
      subtype: '단답형',
      q: '글쓴이가 무대 위에서 얼어붙었을 때 느낀 감정을 나타내는 단어를 지문에서 찾아 쓰시오. (예: p로 시작하는 단어)',
      answers: ['panic'],
      explain: '"panic rising in my chest"라는 표현에서 확인할 수 있습니다.',
    },
    {
      id: 'r3-short-2',
      subtype: '문법',
      q: '다음 문장에서 밑줄 친 것과 같은 역할(부대상황을 나타내는 분사)을 하도록 괄호 안의 동사를 알맞은 형태로 바꿔 쓰시오.\n"I repeated it, voice (shake) ________."',
      answers: ['shaking'],
      explain: '"목소리가 떨리면서"라는 부대상황을 나타내려면 현재분사 shaking을 씁니다.',
    },
  ],
  essay: [
    {
      id: 'r3-essay-short',
      subtype: '단문 서술형',
      q: '자신도 긴장해서 얼어붙었던 경험이 있는지, 있다면 어떻게 극복했는지(또는 없다면 어떻게 극복할 것 같은지)를 3~5문장으로 쓰시오.',
      standard: '[10공영1-02-03] 경험이나 계획 등을 말하거나 기술한다. / [10공영1-02-06] 어휘나 표현을 점검하여 내용을 명확하게 전달한다.',
      difficulty: '하',
      score: 7,
      conditions: [
        '3~5문장으로 쓸 것',
        '긴장했던 순간과 그것을 극복하는 방법(또는 극복하고 싶은 방법)을 포함할 것',
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
        'I once forgot my lines during a class presentation and felt my face turn red in front of everyone. My heart was beating fast, and I could not remember what to say next. Like the writer in the passage, I took a deep breath and looked at my notes instead of giving up completely. Slowly, I found my place again and finished the presentation, even though it was not perfect. That experience taught me that staying calm is more helpful than trying to be perfect.',
      totalScore: 7,
      rubric: [
        {
          criterion: '경험과 극복 방법 제시',
          maxScore: 4,
          levels: [
            { score: 4, desc: '긴장했던 경험과 극복 방법(또는 극복하고 싶은 방법)을 구체적으로 제시함' },
            { score: 2, desc: '경험이나 극복 방법 중 하나만 제시함' },
            { score: 1, desc: '경험과 극복 방법을 거의 제시하지 않음' },
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
      id: 'r3-essay-1',
      subtype: '서술형',
      q: '위 글을 참고하여, 자신이 겪은 어려운 순간을 극복하며 성장한 경험에 대한 글을 아래 조건에 맞게 영어로 작성하시오.',
      standard: '[10공영1-02-03] 경험이나 계획 등을 말하거나 기술한다. / [10공영1-02-06] 어휘나 표현을 점검하여 내용을 명확하게 전달한다.',
      difficulty: '상',
      score: 16,
      conditions: [
        '개인 경험 서사문(narrative essay) 형식으로 작성할 것',
        '도입, 전개, 절정, 결말의 4단 구조로 작성할 것',
        '어려운 상황과 극복 과정, 그 과정에서 깨달은 점, 개인의 성장을 명확하게 제시할 것',
        '자신의 경험에서 느낀 감정을 구체적으로 묘사할 것',
        '180~220 단어로 쓸 것',
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
        "I always believed I was confident, but during my first year of high school, that belief was tested when I had to perform on stage. As the spotlight hit me, my mind went blank and panic rose in my chest. I stood frozen, unable to speak. Then my partner quietly whispered the first line, and slowly my memory returned. I wasn't perfect, but I didn't give up. That moment changed how I saw confidence. I realized it isn't about being flawless — it's about how you respond when things go wrong. Since then, whenever I feel afraid, I remind myself that failure can be the start of growth, not the end.",
      totalScore: 16,
      rubric: [
        {
          criterion: '경험의 구체성(상황·극복·깨달음·성장)',
          maxScore: 5,
          levels: [
            { score: 5, desc: '어려운 상황, 극복 과정, 깨달음, 성장을 모두 명확하게 표현함' },
            { score: 3, desc: '위 요소 중 일부만 명확하게 표현함' },
            { score: 1, desc: '위 요소를 거의 표현하지 않음' },
          ],
        },
        {
          criterion: '감정 묘사의 구체성',
          maxScore: 2,
          levels: [
            { score: 2, desc: '경험에서 느낀 감정을 구체적으로 묘사함' },
            { score: 1, desc: '감정을 거의 묘사하지 않음' },
          ],
        },
        {
          criterion: '서사문 형식(도입-전개-절정-결말)',
          maxScore: 5,
          levels: [
            { score: 5, desc: '도입-전개-절정-결말 구조를 모두 논리적으로 작성함' },
            { score: 3, desc: '구조 중 일부만 갖춤' },
            { score: 1, desc: '구조를 거의 갖추지 않음' },
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
