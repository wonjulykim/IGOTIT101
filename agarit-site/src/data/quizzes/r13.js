export const r13Quiz = {
  mcq: [
    {
      id: 'r13-mcq-1',
      q: '나무의 잎이 더 초록색으로 변하는 이유로 지문이 설명하는 것은?',
      options: [
        '화산에서 나오는 이산화탄소를 나무가 흡수하기 때문에',
        '나무가 겨울잠에서 깨어났기 때문에',
        '과학자들이 나뭇잎에 염료를 뿌렸기 때문에',
        '화산 활동이 완전히 멈췄기 때문에',
        '위성이 나무에 신호를 보내기 때문에',
      ],
      answer: 0,
      explain: '마그마가 지각을 뚫고 올라오며 방출하는 이산화탄소를 나무가 흡수해 잎이 더 초록빛을 띠게 됩니다.',
    },
  ],
  short: [
    {
      id: 'r13-short-1',
      subtype: '완성형',
      q: '다음 빈칸에 들어갈 단어를 지문에서 찾아 쓰시오.\n"As magma moves upward through the Earth\'s crust, it releases carbon dioxide. Trees ________ this gas, and their leaves become greener."',
      answers: ['absorb'],
      explain: '나무가 이산화탄소를 "absorb(흡수)"한다고 설명합니다.',
    },
    {
      id: 'r13-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 접속사를 쓰시오. (~함에 따라)\n"________ magma moves upward through the Earth\'s crust, it releases carbon dioxide."',
      answers: ['As', 'as'],
      explain: 'as는 "~함에 따라"라는 뜻으로 두 동작이 함께 일어남을 나타냅니다.',
    },
  ],
  essay: [
    {
      id: 'r13-essay-1',
      subtype: '서술형',
      q: '아래 글을 읽고 요약하시오.',
      standard: '[9영01-03] 친숙한 주제에 관한 담화나 글의 중심 내용을 파악한다. / [9영01-06] 화자나 필자의 의도나 목적을 추론한다.',
      difficulty: '상',
      score: 5,
      conditions: ['change / before / because / absorb 단어를 반드시 활용할 것', "Scientists found that the colour of tree leaves 로 문장을 시작할 것"],
      model:
        'Scientists found that the colour of tree leaves changes before a volcanic eruption because they absorb carbon dioxide emitted by volcanoes.',
      totalScore: 5,
      rubric: [
        {
          criterion: '과제 완성도(내용 반영)',
          maxScore: 3,
          levels: [
            { score: 3, desc: '본문 내용을 반영하고 주어진 조건(단어·문장 시작)을 모두 만족함' },
            { score: 2, desc: '본문 내용을 대부분 반영하고 조건을 대체로 만족함' },
            { score: 1, desc: '본문 내용을 일부만 반영하거나 조건을 만족하지 못함' },
          ],
        },
        {
          criterion: '언어 사용의 정확성',
          maxScore: 2,
          levels: [
            { score: 2, desc: '문법과 어휘 사용이 정확하며 의사소통에 지장이 없음' },
            { score: 1, desc: '약간의 오류가 있으나 의미 전달에 큰 문제는 없음' },
          ],
        },
      ],
    },
  ],
}
