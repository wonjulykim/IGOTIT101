export const ch12Quiz = {
  mcq: [
    {
      id: 'ch12-mcq-1',
      q: '감탄문에서 What 감탄문의 기본 형태로 옳은 것은?',
      options: [
        'What+주어+동사+형용사+명사!',
        'What (+a/an)+형용사+명사(+주어+동사)!',
        'What+동사+주어+형용사!',
        'What+형용사+주어+동사+명사!',
        'What+명사+형용사(+주어+동사)!',
      ],
      answer: 1,
      explain: 'What 감탄문은 "What (+a/an)+형용사+명사(+주어+동사)!" 형태로, 명사(구)를 강조하는 감탄문입니다.',
    },
    {
      id: 'ch12-mcq-2',
      q: '다음 중 How 감탄문으로 올바른 것은?',
      options: [
        'How she is beautiful!',
        'How a beautiful she is!',
        'How beautiful she is!',
        'How is she beautiful!',
        'How beautiful is she!',
      ],
      answer: 2,
      explain: 'How 감탄문은 "How+형용사/부사+주어+동사!" 순서로 씁니다. She is beautiful에서 beautiful을 앞으로 보내고 How를 붙인 형태입니다.',
    },
    {
      id: 'ch12-mcq-3',
      q: '"What ___ nice car it is!"의 빈칸에 들어갈 말로 옳은 것은?',
      options: ['the', 'a', '(빈칸 없음)', 'some', 'an'],
      answer: 1,
      explain: 'What 뒤에 오는 명사가 단수 가산명사(car)이므로 a/an을 반드시 붙여야 합니다. car는 자음으로 시작하므로 a가 맞습니다.',
    },
    {
      id: 'ch12-mcq-4',
      q: '"What a nice car it is!"에서 it is를 생략할 수 있는 이유로 가장 적절한 것은?',
      options: [
        'it is는 문법적으로 항상 필요 없기 때문이다.',
        '감탄문은 원래 주어와 동사를 쓰지 않는 문장이기 때문이다.',
        '말하는 사람과 듣는 사람이 상황을 공유하고 있어 it is가 가리키는 대상을 알 수 있기 때문이다.',
        'it is를 쓰면 문법적으로 틀린 문장이 되기 때문이다.',
        'What 뒤에는 절대 주어와 동사가 올 수 없기 때문이다.',
      ],
      answer: 2,
      explain: '감탄문은 말하는 사람과 듣는 사람 사이에 공유된 상황 안에서 쓰이므로, 문맥에서 충분히 유추될 수 있는 주어-동사는 생략할 수 있습니다.',
    },
    {
      id: 'ch12-mcq-5',
      q: '다음 중 What 감탄문과 How 감탄문의 차이로 옳은 것은?',
      options: [
        'What 감탄문은 형용사를 강조하고, How 감탄문은 명사를 강조한다.',
        'What 감탄문은 명사(구)를 강조하고, How 감탄문은 형용사·부사를 강조한다.',
        'What 감탄문은 항상 부정문이고, How 감탄문은 항상 의문문이다.',
        '두 감탄문은 완전히 같은 구조를 가진다.',
        'How 감탄문에는 반드시 명사가 와야 한다.',
      ],
      answer: 1,
      explain: 'What 감탄문은 명사(구)를 강조하기 위해 쓰이고, How 감탄문은 형용사나 부사를 강조하기 위해 쓰입니다.',
    },
  ],
  short: [
    {
      id: 'ch12-short-1',
      q: '"She is beautiful."을 How를 사용한 감탄문으로 바꾸어 쓰시오. (주어-동사 포함)',
      answers: ['How beautiful she is!', 'how beautiful she is!'],
      explain: '강조하고 싶은 형용사 beautiful을 문장 앞으로 보내고 그 앞에 How를 붙입니다.',
    },
    {
      id: 'ch12-short-2',
      q: '"It is a nice car."를 What을 사용한 감탄문으로 바꾸어 쓰시오. (주어-동사 포함)',
      answers: ['What a nice car it is!', 'what a nice car it is!'],
      explain: '강조하고 싶은 명사구 a nice car를 문장 앞으로 보내고 그 앞에 What을 붙입니다.',
    },
    {
      id: 'ch12-short-3',
      q: '감탄문에서 문장 끝의 주어-동사를 생략할 수 있는 조건을 한 문장으로 쓰시오.',
      answers: [
        '말하는 사람과 듣는 사람이 상황을 공유하고 있어 주어-동사가 가리키는 대상을 알 수 있을 때',
        '말하는 사람과 듣는 사람이 상황(문맥)을 공유하고 있을 때',
      ],
      explain: '감탄문은 공유된 상황 속에서 쓰이므로, 문맥상 유추 가능한 주어-동사는 생략할 수 있습니다.',
    },
  ],
  essay: [
    {
      id: 'ch12-essay-1',
      q: '"It is a nice car!"라는 문장이 어떤 과정을 거쳐 "What a nice car!"라는 감탄문이 되는지 단계별로 설명하시오.',
      model:
        '먼저 "It is a nice car!"는 문장을 크게 말함으로써 감탄을 나타낸 것이다. 여기서 강조하고 싶은 요소인 "a nice car"를 문장 앞으로 옮기면 "A nice car, it is!"가 된다. 이는 원래 동사 뒤에 있던 요소를 앞으로 배치해 강조를 나타낸 것이다. 여기에 감탄사 What을 추가하면 "What a nice car it is!"가 되는데, What은 뒤에 나오는 명사구 전체, 즉 말하는 사람과 듣는 사람이 공유하는 감탄 상황을 받는 역할을 한다. 마지막으로 문맥상 it is가 가리키는 대상을 알 수 있으므로 이를 생략하면 "What a nice car!"가 완성된다.',
      keywords: ['강조', '앞으로', 'What', '생략', '공유'],
    },
    {
      id: 'ch12-essay-2',
      q: 'What 감탄문과 How 감탄문의 구조와 강조하는 대상의 차이를 예문을 들어 설명하시오.',
      model:
        'What 감탄문은 "What (+a/an)+형용사+명사(+주어+동사)!" 형태로, 명사(구)를 강조할 때 사용한다. 예를 들어 "What a nice car it is!"는 a nice car라는 명사구를 강조한다. 이때 명사가 단수 가산명사이면 a/an을 붙이고, 복수이거나 불가산명사이면 붙이지 않는다. 반면 How 감탄문은 "How+형용사/부사(+주어+동사)!" 형태로, 형용사나 부사를 강조할 때 사용한다. 예를 들어 "How beautiful she is!"는 beautiful이라는 형용사를 강조한다. 두 감탄문 모두 강조하려는 요소를 문장 맨 앞으로 옮기고 그 앞에 What 또는 How를 붙여서 만들며, 문맥상 유추 가능하면 문장 끝의 주어-동사를 생략할 수 있다.',
      keywords: ['What', 'How', '명사', '형용사', '강조'],
    },
  ],
}
