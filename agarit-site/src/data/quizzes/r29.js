export const r29Quiz = {
  mcq: [
    {
      id: 'r29-mcq-1',
      q: '일본에서 고개를 끄덕이는 것(nodding)이 의미하는 바로 가장 적절한 것은?',
      options: [
        '동의하지 않는다는 뜻',
        '이야기를 듣고 있으니 계속 말하라는 뜻',
        '대화를 끝내고 싶다는 뜻',
        '화가 났다는 뜻',
        '아무 의미도 없다',
      ],
      answer: 1,
      explain: '일본에서 고개를 끄덕이는 것은 상대의 말에 동의하지 않아도 "듣고 있으니 계속 말하라"는 뜻일 수 있습니다.',
    },
  ],
  short: [
    {
      id: 'r29-short-1',
      subtype: '단답형',
      q: '고개를 끄덕이는 것(a head nod)이 "no"를 의미하는 나라 세 곳을 지문에서 찾아 쓰시오.',
      answers: ['Turkey, Greece, Bulgaria', 'Turkey, Greece, and Bulgaria'],
      explain: '터키, 그리스, 불가리아에서는 고개를 끄덕이는 것이 "아니오"를 의미합니다.',
    },
    {
      id: 'r29-short-2',
      subtype: '문법',
      q: '다음 문장의 빈칸에 들어갈 접속사를 쓰시오. (~인 반면)\n"________ a head nod means agreement in most cultures, it means \'no\' in Turkey."',
      answers: ['While', 'while'],
      explain: 'while은 "~인 반면"이라는 뜻으로 두 내용을 대조할 때 씁니다.',
    },
  ],
  essay: [
    {
      id: 'r29-essay-1',
      subtype: '서술형',
      q: '이 글의 내용을 접속사(While 또는 but 등)를 활용하여 한 문장으로 요약하고, 제스처를 사용할 때 주의해야 할 점을 서술하시오.',
      standard: '[10영04-01] 일상생활이나 친숙한 일반적 주제에 관하여 듣거나 읽고 세부 정보를 기록할 수 있다.',
      difficulty: '중',
      score: 10,
      conditions: ['접속사를 사용한 한 문장 요약을 포함할 것', '제스처 사용 시 주의할 점을 서술할 것'],
      model:
        "While a head nod means \"yes\" in most cultures, it means \"no\" in countries like Turkey, Greece, and Bulgaria. This shows that gestures are not always universal, so when traveling to a new country, it is important to learn about local gestures beforehand to avoid misunderstandings.",
      totalScore: 10,
      rubric: [
        {
          criterion: '접속사 활용 요약',
          maxScore: 5,
          levels: [
            { score: 5, desc: '접속사를 활용해 글의 핵심 내용을 정확히 한 문장으로 요약함' },
            { score: 3, desc: '요약은 했으나 접속사 활용이 부족하거나 내용이 다소 부정확함' },
            { score: 1, desc: '요약을 거의 하지 못함' },
          ],
        },
        {
          criterion: '주의할 점 서술',
          maxScore: 5,
          levels: [
            { score: 5, desc: '제스처 사용 시 주의할 점을 구체적이고 설득력 있게 서술함' },
            { score: 3, desc: '주의할 점을 서술했으나 다소 막연함' },
            { score: 1, desc: '주의할 점을 거의 서술하지 않음' },
          ],
        },
      ],
    },
  ],
}
