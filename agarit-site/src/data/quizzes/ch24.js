export const ch24Quiz = {
  mcq: [
    {
      id: 'ch24-mcq-1',
      q: '관계부사는 결국 어떤 표현을 한 단어로 줄인 것인가?',
      options: ['대명사 + 동사', '전치사 + 관계대명사', '접속사 + 부사', '조동사 + 동사원형', '관사 + 명사'],
      answer: 1,
      explain: '관계부사(when, where, why, how)는 "전치사 + 관계대명사"를 한 단어로 줄인 표현입니다.',
    },
    {
      id: 'ch24-mcq-2',
      q: '다음 중 선행사와 관계부사의 연결이 옳지 않은 것은?',
      options: [
        'the place - where',
        'the time - when',
        'the reason - why',
        'the way - how',
        'the way - where',
      ],
      answer: 4,
      explain: '방법을 나타내는 선행사 the way는 관계부사 how와 짝을 이룹니다. where는 장소를 나타내는 선행사와 함께 쓰입니다.',
    },
    {
      id: 'ch24-mcq-3',
      q: '다음 중 문법적으로 옳은 문장은?',
      options: [
        'That is the way how he writes.',
        'That is how he writes.',
        'This is the house which he lives.',
        'I know the date which she will go to the zoo.',
        'Do you know the reason which he was upset for?',
      ],
      answer: 1,
      explain: 'the way와 how는 의미가 중복되므로 함께 쓰지 않습니다. "That is how he writes."처럼 how만 쓰거나 "That is the way he writes."처럼 the way만 써야 합니다.',
    },
    {
      id: 'ch24-mcq-4',
      q: '관계대명사와 관계부사 뒤에 오는 문장의 형태에 대한 설명으로 옳은 것은?',
      options: [
        '관계대명사 뒤에는 완전한 문장이, 관계부사 뒤에는 불완전한 문장이 온다.',
        '관계대명사 뒤에는 불완전한 문장이, 관계부사 뒤에는 완전한 문장이 온다.',
        '관계대명사와 관계부사 뒤에는 항상 완전한 문장이 온다.',
        '관계대명사와 관계부사 뒤에는 항상 불완전한 문장이 온다.',
        '관계부사 뒤에는 항상 to부정사가 온다.',
      ],
      answer: 1,
      explain: '관계대명사는 절 안에서 명사(주어·목적어) 역할을 하므로 뒤에 불완전한 문장이 오고, 관계부사는 부사 역할을 하므로 뒤에 완전한 문장이 옵니다.',
    },
    {
      id: 'ch24-mcq-5',
      q: '"She returned to (the village) where she was born."에서 the village를 생략할 수 없는 이유로 가장 적절한 것은?',
      options: [
        'where는 항상 선행사와 함께 써야 하는 규칙이 있기 때문이다.',
        'the village가 생략되면 where she was born이 설명하는 대상이 불명확해지기 때문이다.',
        'the village는 관계대명사의 선행사이기 때문이다.',
        'was born이 불완전한 문장이기 때문이다.',
        'she가 주어 역할을 할 수 없기 때문이다.',
      ],
      answer: 1,
      explain: '생략된 선행사의 의미를 관계부사절만으로 유추할 수 없는 경우에는 선행사를 생략하면 문장의 의미가 불명확해지므로 생략하지 않습니다.',
    },
  ],
  short: [
    {
      id: 'ch24-short-1',
      q: '"I knew the house in which he lived."를 관계부사를 사용한 문장으로 바꾸어 쓰시오.',
      answers: ['I knew the house where he lived.', 'i knew the house where he lived'],
      explain: 'in which(전치사+관계대명사)는 장소를 나타내는 선행사 the house와 함께 관계부사 where로 바꿀 수 있습니다.',
    },
    {
      id: 'ch24-short-2',
      q: '관계부사 how와 함께 쓰지 않는, 방법을 나타내는 선행사를 쓰시오.',
      answers: ['the way', 'the way (방법)'],
      explain: 'the way와 how는 둘 다 방법이라는 같은 의미를 나타내므로 함께 쓰면 의미가 중복되어 비문법적입니다.',
    },
    {
      id: 'ch24-short-3',
      q: '관계부사 뒤에 오는 문장은 완전한 문장인지 불완전한 문장인지 쓰시오.',
      answers: ['완전한 문장', '완전한문장', '완전'],
      explain: '관계부사는 절 안에서 부사 역할을 하기 때문에 뒤에는 주어와 목적어가 모두 갖추어진 완전한 문장이 옵니다.',
    },
  ],
  essay: [
    {
      id: 'ch24-essay-1',
      q: '"I knew the house. He lived in the house."라는 두 문장이 관계대명사 문장과 관계부사 문장으로 각각 어떻게 합쳐지는지, 그 과정과 두 문장의 역할 차이를 설명하시오.',
      model:
        '두 문장을 합칠 때 두 번째 문장의 the house를 관계사로 바꾸면 두 가지 방식이 가능하다. 먼저 the house를 관계대명사 which로 바꾸면 "I knew the house which he lived in."이 되는데, 이때 which는 전치사 in의 목적어 역할을 하는 명사이므로 문장이 전치사로 끝나 불완전해 보인다. 전치사 in을 which 앞으로 옮기면 "I knew the house in which he lived."가 되어 문법적으로 완전해지지만 문장이 길고 딱딱해진다. 이 in which를 관계부사 where 한 단어로 바꾸면 "I knew the house where he lived."가 되어 간결해진다. 이때 where는 절 안에서 부사(in the house) 역할을 하므로 뒤에 오는 he lived는 주어·동사가 모두 갖춰진 완전한 문장이다. 즉 관계대명사는 명사 역할, 관계부사는 부사 역할을 한다는 점이 근본적인 차이이다.',
      keywords: ['전치사', '관계대명사', '관계부사', '완전한 문장', 'where'],
    },
    {
      id: 'ch24-essay-2',
      q: '관계부사의 선행사를 생략할 수 있는 경우와 생략할 수 없는 경우를 예문을 들어 설명하시오.',
      model:
        '관계부사의 선행사(the place, the time, the reason, the way)는 생략된 선행사의 의미가 문맥상 명확히 유추될 수 있을 때 생략할 수 있다. 예를 들어 "This is (the place) where the river narrows."에서는 where만으로도 장소를 뜻한다는 것이 충분히 유추되므로 the place를 생략해도 의미가 분명하다. 특히 관계부사 how는 the way와 의미가 중복되어 함께 쓸 수 없으므로 항상 선행사가 생략된 형태로 쓰인다. 반면 선행사가 없으면 관계부사절이 무엇을 설명하는지 알 수 없는 경우에는 선행사를 생략할 수 없다. 예를 들어 "She returned to the village where she was born."에서 the village를 생략하면 where she was born이 어떤 장소를 가리키는지 불명확해진다. 이처럼 선행사 생략 여부는 문장의 의미가 명확하게 전달되는지를 기준으로 판단한다.',
      keywords: ['선행사 생략', '유추', 'the way', 'how', '불명확'],
    },
  ],
}
