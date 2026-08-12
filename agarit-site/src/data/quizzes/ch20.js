export const ch20Quiz = {
  mcq: [
    {
      id: 'ch20-mcq-1',
      q: '"The hunter hunted a rabbit."를 수동태로 올바르게 바꾼 문장은?',
      options: [
        'A rabbit hunted the hunter.',
        'A rabbit was hunted by the hunter.',
        'The hunter was hunted by a rabbit.',
        'A rabbit is hunting the hunter.',
        'The hunter hunts by a rabbit.',
      ],
      answer: 1,
      explain: '능동태의 목적어(a rabbit)가 수동태의 주어가 되고, 동사는 be동사+과거분사(was hunted)로, 원래 주어(the hunter)는 by the hunter로 바뀝니다.',
    },
    {
      id: 'ch20-mcq-2',
      q: '수동태에서 과거분사 앞에 be동사가 반드시 필요한 이유로 옳은 것은?',
      options: [
        '과거분사는 명사이기 때문에',
        '과거분사는 형용사이므로 동사로 기능하게 해줄 요소가 필요하기 때문에',
        '수동태에는 항상 진행형이 쓰이기 때문에',
        'by 이하를 생략하기 위해서',
        '주어와 수 일치를 시키기 위해서만',
      ],
      answer: 1,
      explain: '과거분사(p.p.)는 형용사이지 동사가 아니므로, be동사가 이를 동사로 기능하게 하면서 시제도 함께 나타내 줍니다.',
    },
    {
      id: 'ch20-mcq-3',
      q: '"He gave her the ring."을 사람 목적어를 주어로 하여 수동태로 바꾼 문장은?',
      options: [
        'The ring was given her by him.',
        'She was given the ring by him.',
        'Her was given the ring by he.',
        'The ring gave her by him.',
        'She gave the ring by him.',
      ],
      answer: 1,
      explain: '4형식 문장에서 사람 목적어(her→she)를 주어로 세우고, 사물 목적어(the ring)는 동사 뒤에 그대로 남기며, 원래 주어는 by him으로 바꿉니다.',
    },
    {
      id: 'ch20-mcq-4',
      q: '"They made him clean the room."을 수동태로 바꿀 때 목적격 보어(clean)의 형태 변화로 옳은 것은?',
      options: [
        '변화 없이 clean 그대로 쓴다.',
        'cleaning으로 바뀐다.',
        'to clean으로 바뀐다.',
        'cleaned로 바뀐다.',
        '목적격 보어는 생략된다.',
      ],
      answer: 2,
      explain: '5형식 문장의 목적격 보어가 원형부정사(동사원형)일 때, 수동태로 바뀌면 원형부정사가 to부정사로 바뀌는 경우가 많습니다. (He was made to clean the room.)',
    },
    {
      id: 'ch20-mcq-5',
      q: '다음 중 수동태를 사용하는 이유로 적절하지 않은 것은?',
      options: [
        '행위의 주체보다 행위의 대상(객체)을 강조하고 싶을 때',
        '행위의 주체를 모르거나 밝히고 싶지 않을 때',
        '공식적이고 객관적인 어조를 유지하고 싶을 때',
        '행위자의 감정을 더 생생하고 극적으로 강조하고 싶을 때',
        '문맥상 행위자가 중요하지 않을 때',
      ],
      answer: 3,
      explain: '수동태는 행위자보다 행위의 대상·결과에 초점을 두거나 행위자를 감추거나 객관적 어조를 낼 때 쓰입니다. 행위자의 감정을 생생하게 강조하는 것은 오히려 능동태의 특징입니다.',
    },
  ],
  short: [
    {
      id: 'ch20-short-1',
      q: '수동태의 기본 구조를 「주어 + ( ) + ( ) + (by + 목적격)」 형태로 빈칸을 채워 쓰시오.',
      answers: ['be동사 + 과거분사', 'be동사, 과거분사', 'be동사 과거분사'],
      explain: '수동태의 기본 구조는 「주어 + be동사 + 과거분사 + (by + 목적격)」입니다.',
    },
    {
      id: 'ch20-short-2',
      q: '"The chef cooks the meal."을 수동태 문장으로 바꾸어 쓰시오. (by the chef 포함)',
      answers: ['The meal is cooked by the chef.', 'the meal is cooked by the chef'],
      explain: '목적어(the meal)를 주어로, 동사를 is cooked로, 주어(the chef)를 by the chef로 바꿉니다.',
    },
    {
      id: 'ch20-short-3',
      q: '"We call him Tom."을 수동태 문장으로 바꾸어 쓰시오. (by us 포함)',
      answers: ['He is called Tom by us.', 'he is called tom by us'],
      explain: '5형식 문장에서는 목적어(him)만 주어(He)로 옮기고 목적격 보어(Tom)는 동사 뒤에 그대로 남깁니다.',
    },
  ],
  essay: [
    {
      id: 'ch20-essay-1',
      q: '"The hunter hunted a rabbit."와 "A rabbit was hunted by the hunter."의 의미상 차이를 화자의 초점(강조점) 관점에서 설명하시오.',
      model:
        '두 문장은 같은 사건을 서술하지만 화자가 강조하고자 하는 대상이 다르다. 능동태 문장인 "The hunter hunted a rabbit."은 주어인 The hunter의 행위에 초점이 있어, 사냥꾼이 스스로 의지를 가지고 토끼를 사냥했다는 사실을 강조한다. 반면 수동태 문장인 "A rabbit was hunted by the hunter."는 주어인 A rabbit에 초점이 있어, 토끼가 사냥이라는 행위에 영향을 받았다는 사실을 강조한다. 즉 같은 사건이라도 어순과 태(능동/수동)를 바꾸면 화자가 전달하고자 하는 의미와 의도가 달라진다.',
      keywords: ['초점', '행위자', '대상', '어순', '의도'],
    },
    {
      id: 'ch20-essay-2',
      q: '4형식 문장을 수동태로 바꿀 때 사람 목적어를 주어로 세우는 경우와 사물 목적어를 주어로 세우는 경우를 예문을 들어 각각 설명하시오.',
      model:
        '4형식 문장은 목적어가 두 개(사람 목적어, 사물 목적어)이므로 수동태로 바꿀 때 둘 중 하나를 주어로 선택할 수 있다. 예를 들어 "He gave her the ring."에서 사람 목적어(her)를 주어로 세우면 "She was given the ring by him."이 되며, 남은 사물 목적어(the ring)는 동사 뒤에 그대로 남는다. 반대로 사물 목적어(the ring)를 주어로 세우면 "The ring was given to her by him."이 되며, 이때는 남은 사람 목적어(her) 앞에 전치사 to를 붙여야 한다. 일반적으로 사람 목적어를 주어로 세우는 문장이 더 자연스럽게 쓰인다.',
      keywords: ['4형식', '사람 목적어', '사물 목적어', 'to', '주어'],
    },
  ],
}
