export const ch6 = {
  'ch6-1': {
    title: '주어와 동사의 일치',
    blocks: [
      {
        type: 'p',
        text: '주어는 인칭과 수에 따라 다양하게 구분됩니다. 인칭이란 "누구의 관점(시점)에서 말하느냐"를 의미하며, 영어로는 perspective(관점, 시점)라고 합니다. 동사의 행위를 나의 시각에서 표현하면 1인칭, 너의 시각에서 표현하면 2인칭, 나와 너를 제외한 나머지의 시각에서 표현하면 3인칭이라고 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I laughed.', ko: '나는 웃었다.', note: '1인칭' },
          { en: 'You laughed.', ko: '너는 웃었다.', note: '2인칭' },
          { en: 'He laughed.', ko: '그는 웃었다.', note: '3인칭' },
          { en: 'They laughed.', ko: '그들은 웃었다.', note: '3인칭' },
        ],
      },
      {
        type: 'p',
        text: '위 문장에서 I는 1인칭, You는 2인칭, He와 They는 각각 3인칭입니다. 인칭이라는 개념은 주어와 동사의 관계를 정의하는 매우 중요한 개념이므로 꼭 기억해 두어야 합니다.',
      },
      {
        type: 'icon-row',
        caption: '인칭 한눈에 보기',
        items: [
          { icon: '🙋', label: '1인칭', sub: 'I, We' },
          { icon: '👉', label: '2인칭', sub: 'You' },
          { icon: '🧍', label: '3인칭', sub: 'He, She, It, They …' },
        ],
      },
      { type: 'heading', text: '주어의 수' },
      {
        type: 'p',
        text: '이제 주어의 수에 대해 알아봅시다. 수는 영어로 number라고 하며, 말 그대로 "주어가 몇 명(몇 개)인지"를 나타냅니다. 주어가 한 명(한 개)이면 단수, 두 명(두 개) 이상이면 복수라고 부릅니다. 인칭과 수의 개념에 따라 주어를 정리하면 아래 표와 같습니다.',
      },
      {
        type: 'table',
        caption: '주어의 인칭과 수',
        headers: ['수', '1인칭', '2인칭', '3인칭'],
        rows: [
          ['단수', 'I', 'You', 'He, She, It'],
          ['복수', 'We', 'You', 'They'],
        ],
      },
      {
        type: 'note',
        text: '3인칭 단수 주어에는 He, She, It 외에 Tom, 손흥민, 카리나처럼 다양한 주어가 올 수 있습니다. 마찬가지로 3인칭 복수 주어에도 Tom and Jackson처럼 두 명 이상의 다양한 주어가 올 수 있습니다. 즉 3인칭 단수 주어와 복수 주어는 이론상 셀 수 없을 만큼 많습니다. 그에 반해 1인칭 단수 주어와 복수 주어는 I와 We밖에 없고, 2인칭 단수 주어와 복수 주어는 You밖에 없습니다.',
      },
      { type: 'heading', text: '한국어에는 없는 개념: 인칭·수 일치' },
      {
        type: 'p',
        text: '그런데 한국어에는 이런 "인칭·수 일치"라는 개념 자체가 없습니다. "나는 간다", "너는 간다", "그는 간다", "그들은 간다"를 비교해 보면, 주어가 1인칭이든 2인칭이든 3인칭이든, 단수든 복수든 동사 "간다"의 형태는 전혀 바뀌지 않습니다. 즉 **한국어 동사는 주어의 인칭과 수에 아무런 영향을 받지 않습니다.**',
      },
      {
        type: 'p',
        text: '반면 영어는 주어의 인칭과 수에 따라 동사의 형태가 실제로 달라지는 언어입니다. 이 차이 때문에 한국인 학습자는 무의식적으로 "동사는 주어가 누구든 똑같이 쓴다"는 한국어의 습관을 영어에 그대로 적용하게 되고, 그 결과 3인칭 단수 주어 뒤에 나오는 동사의 -s를 빠뜨리는 실수를 아주 자주 저지릅니다. 이는 단순한 암기 실수가 아니라, 두 언어의 문법 구조 자체가 다르기 때문에 생기는 매우 자연스러운 오류입니다.',
      },
      { type: 'heading', text: '왜 3인칭 단수에만 -s가 붙을까' },
      {
        type: 'p',
        text: '주어의 인칭과 수가 중요한 이유는 주어의 형태가 동사에 영향을 미치기 때문입니다. 아래 문장을 살펴봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I eat ramen.', ko: '나는 라면을 먹는다.', note: '1인칭 단수' },
          { en: 'You eat ramen.', ko: '너는 라면을 먹는다.', note: '2인칭 단수' },
          { en: 'He eats ramen.', ko: '그는 라면을 먹는다.', note: '3인칭 단수 → 동사에 -s' },
          { en: 'They eat ramen.', ko: '그들은 라면을 먹는다.', note: '3인칭 복수' },
        ],
      },
      {
        type: 'p',
        text: '위 문장들을 보면 주어가 3인칭 단수일 때만 동사에 -s가 붙었다는 것을 알 수 있습니다. 다시 말해, **현재 시제 문장에서는 주어가 3인칭 단수일 때만 동사에 -s를 붙여 이를 구분해 줍니다.** 이렇게 동사가 현재 시제일 때 주어의 인칭과 수에 따라 동사의 형태를 맞추어 주는 것을 주어와 동사의 "수의 일치"라고 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Mina plays the piano every day.', ko: '미나는 매일 피아노를 친다.', note: '3인칭 단수(사람 이름) → play에 -s' },
          { en: 'My brother watches horror movies.', ko: '내 형(오빠)은 공포 영화를 본다.', note: '3인칭 단수 명사 → watch에 -es' },
          { en: 'The cat sleeps on the sofa.', ko: '그 고양이는 소파에서 잔다.', note: '3인칭 단수(동물) → sleep에 -s' },
          { en: 'She sings well.', ko: '그녀는 노래를 잘 부른다.', note: '3인칭 단수 → sing에 -s' },
          { en: 'Tom and Jackson sing well.', ko: 'Tom과 Jackson은 노래를 잘 부른다.', note: '3인칭 복수 → -s 없음' },
          { en: 'The dogs bark at strangers.', ko: '그 개들은 낯선 사람에게 짖는다.', note: '3인칭 복수 명사 → -s 없음' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '3인칭 단수 현재 - 수의 일치',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'eats' },
          { tag: 'O', text: 'ramen' },
        ],
        translation: 'He eats ramen. (3인칭 단수 주어 He → 동사 eat에 -s)',
      },
      {
        type: 'sentence-diagram',
        label: '3인칭 복수 현재 - 동사에 -s 없음',
        parts: [
          { tag: 'S', text: 'Tom and Jackson' },
          { tag: 'V', text: 'sing' },
          { tag: 'M', text: 'well' },
        ],
        translation: 'Tom과 Jackson은 노래를 잘 부른다. (3인칭 복수 주어 → -s 없음)',
      },
      { type: 'heading', text: '언어사적 배경: -s는 어디서 왔을까' },
      {
        type: 'note',
        text: '옛 영어에서는 1인칭 주어와 2인칭 주어도 동사의 형태 변화를 통해 구분했습니다. 그러나 시간이 흐르면서, 현재 시제일 때는 3인칭 주어에만 -s를 붙여 구분하는 방식으로 정리되었습니다. 그래서 오늘날 영어에서는 3인칭 단수 현재형에만 유일하게 동사 변화가 남아 있는 것처럼 보이는 것입니다.',
      },
      {
        type: 'p',
        text: '즉, "3인칭 단수에만 -s가 붙는다"는 규칙은 영어가 원래부터 그렇게 설계된 것이 아니라, 한때 모든 인칭에 있던 동사 변화가 역사적으로 마모되고 남은 마지막 흔적입니다. 이 배경을 알면 왜 이 규칙이 예외처럼 느껴지는지, 그리고 왜 암기할 수밖에 없는 부분인지 이해할 수 있습니다.',
      },
      { type: 'heading', text: '흔히 하는 실수' },
      {
        type: 'p',
        text: '한국인 학습자가 가장 많이 저지르는 실수는 3인칭 단수 주어 뒤에서 -s를 빠뜨리는 것입니다. 다양한 주어 유형에서 이 실수가 어떻게 나타나는지 살펴봅시다.',
      },
      {
        type: 'transform',
        from: 'He eat pizza.',
        to: 'He eats pizza.',
        note: '3인칭 단수 대명사 He → 동사에 -s 필요',
      },
      {
        type: 'transform',
        from: 'Mina like cats.',
        to: 'Mina likes cats.',
        note: '3인칭 단수 사람 이름 Mina → 동사에 -s 필요',
      },
      {
        type: 'transform',
        from: 'Each student have a locker.',
        to: 'Each student has a locker.',
        note: 'each + 명사는 단수로 취급 → 동사에 -s 필요',
      },
      {
        type: 'transform',
        from: 'Everyone know the answer.',
        to: 'Everyone knows the answer.',
        note: 'everyone은 형태와 관계없이 단수 취급',
      },
      {
        type: 'transform',
        from: 'The dogs barks at strangers.',
        to: 'The dogs bark at strangers.',
        note: '반대의 실수: 3인칭 복수 주어에는 -s를 붙이지 않음',
      },
      {
        type: 'note',
        text: '이처럼 실수는 두 방향으로 나타납니다. 하나는 3인칭 단수 주어인데 -s를 빠뜨리는 경우(He eat →He eats)이고, 다른 하나는 반대로 복수 주어나 everyone처럼 헷갈리는 주어에 -s 규칙을 잘못 적용하는 경우입니다. 주어가 "의미상 몇 명(몇 개)인가"를 정확히 따져보는 습관이 중요합니다.',
      },
      { type: 'heading', text: '단수로 취급되는 특별한 주어들' },
      {
        type: 'p',
        text: '**주어가 복수처럼 보이거나 여러 명을 가리키는 것처럼 느껴져도, 문법적으로는 단수로 취급되어 동사에 -s가 붙는 경우가 있습니다.** 대표적으로 everyone, everybody, someone, anyone, no one과 같이 "-one/-body"로 끝나는 대명사, each처럼 "하나하나"를 의미하는 표현, 그리고 family, team, class, group처럼 여러 사람을 하나의 단위로 묶어 부르는 집합명사가 있습니다.',
      },
      {
        type: 'table',
        caption: '단수로 취급되는 주어의 예',
        headers: ['주어', '이유', '예문'],
        rows: [
          ['everyone / everybody / someone / anyone / no one', '형태와 관계없이 항상 단수', 'Everyone loves pizza.'],
          ['each (+ 명사)', '전체가 아니라 하나하나를 강조', 'Each student has a book.'],
          ['family / team / class / group', '여러 명을 하나의 단위로 볼 때는 단수', 'My family goes on a trip every summer.'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'Everyone in the class likes the new teacher.', ko: '반의 모든 사람이 새 선생님을 좋아한다.', note: 'everyone → 단수 동사 likes' },
          { en: 'Each of the players wears a number.', ko: '선수들 각각은 번호를 달고 있다.', note: 'each → 단수 동사 wears' },
          { en: 'The team practices every morning.', ko: '그 팀은 매일 아침 연습한다.', note: '팀을 하나의 단위로 볼 때 → 단수 동사' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '단수로 취급되는 주어 - everyone',
        parts: [
          { tag: 'S', text: 'Everyone in the class' },
          { tag: 'V', text: 'likes' },
          { tag: 'O', text: 'the new teacher' },
        ],
        translation: '반의 모든 사람이 새 선생님을 좋아한다. (everyone은 형태와 관계없이 단수)',
      },
      {
        type: 'note',
        text: 'family, team처럼 사람들로 이루어진 집합명사는 구성원 개개인의 다른 행동을 강조할 때 복수로 쓰이는 경우도 있지만, 중학교 수준에서는 "하나의 팀/가족으로서" 단수로 취급하는 것이 기본 원칙이라고 알아두면 충분합니다.',
      },
      { type: 'heading', text: '형태는 복수인데 단수로 취급하는 명사' },
      {
        type: 'p',
        text: '반대로 **형태(철자)는 복수처럼 -s로 끝나거나 복수처럼 보이지만, 의미상 하나의 대상을 가리키기 때문에 단수로 취급되는 명사들도 있습니다.** 대표적으로 책·영화 등 작품의 제목이 복수형 단어를 포함하더라도 그 작품 자체는 "하나"이므로 단수 동사를 쓰고, Mathematics, Politics, Physics, Economics, Athletics, Gymnastics 같은 학문·스포츠 분야 이름도 -s로 끝나지만 하나의 과목·분야를 가리키므로 단수 동사를 씁니다. The Netherlands, The Philippines처럼 -s로 끝나는 나라 이름도 마찬가지로 단수 취급합니다.',
      },
      {
        type: 'table',
        caption: '형태는 복수, 의미는 단수인 명사',
        headers: ['유형', '예', '예문'],
        rows: [
          ['작품 제목(복수형 단어 포함)', 'The Canterbury Tales, Little Women', 'The Canterbury Tales was first published in the 1400s.'],
          ['학문·분야 이름 (-ics)', 'Mathematics, Politics, Physics, Athletics, Gymnastics', 'Mathematics is becoming a more popular subject. / Gymnastics was the most enjoyable sport at school.'],
          ['국가 이름 (-s로 끝남)', 'The Netherlands, The Philippines', 'The Netherlands is famous for its tulip industry.'],
        ],
      },
      {
        type: 'icon-row',
        caption: '형태는 복수, 의미는 단수 — 겉모습에 속지 말 것',
        items: [
          { icon: '📖', label: '작품 제목', sub: 'Little Women · 책 한 권' },
          { icon: '🔬', label: '학문 분야', sub: 'Mathematics, Physics · 과목 하나' },
          { icon: '🌍', label: '국가 이름', sub: 'The Netherlands · 나라 하나' },
        ],
      },
      {
        type: 'note',
        text: '이 명사들은 "복수 형태 = 복수 의미"라는 일반적인 규칙의 예외입니다. 판단 기준은 형태(철자)가 아니라 의미입니다 — 그 단어가 결국 가리키는 것이 "하나의 작품·하나의 학문 분야·하나의 나라"라면, 겉모습이 -s로 끝나더라도 단수로 취급합니다.',
      },
      { type: 'heading', text: '집합명사 — 하나의 단위인가, 구성원 개개인인가' },
      {
        type: 'p',
        text: 'family, team, class, group처럼 여러 사람을 하나로 묶어 부르는 집합명사는, 그 무리를 "하나의 단위"로 볼 때는 단수 동사를, 무리 "안의 개별 구성원들"을 강조할 때는 복수 동사를 쓸 수 있습니다. 다만 이 차이는 미국식 영어와 영국식 영어에서 다르게 나타납니다 — **미국식 영어는 집합명사를 거의 항상 단수로 취급하지만, 영국식 영어는 문맥에 따라 단수·복수를 모두 자연스럽게 씁니다.**',
      },
      {
        type: 'example',
        items: [
          { en: 'The team is getting a new manager next year.', ko: '그 팀은 내년에 새 감독을 맞이한다.', note: '팀을 하나의 단위로 볼 때 → 단수 (미국식 기본)' },
          { en: 'The team are feeling excited about the news.', ko: '그 팀 (선수들 각자)은 그 소식에 들떠 있다.', note: '팀 구성원 개개인을 가리킬 때 → 복수 (영국식 표현)' },
          { en: 'The band has just released its new album.', ko: '그 밴드는 새 앨범을 막 발매했다.', note: '단수 취급 — its로 받음' },
          { en: 'The band have been on tour to promote their new album.', ko: '그 밴드는 새 앨범 홍보를 위해 투어 중이다.', note: '복수 취급 — their로 받음' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '집합명사 — 미국식(단수) vs 영국식(복수)',
        parts: [
          { tag: 'S', text: 'The team' },
          { tag: 'V', text: 'is / are' },
          { tag: 'C', text: 'getting a new manager / feeling excited' },
        ],
        translation: '미국식: is (팀을 하나의 단위로) · 영국식: are (팀 구성원 개개인으로)',
      },
      {
        type: 'note',
        text: '중학교 영어에서는 미국식 기준(집합명사는 단수 취급)을 원칙으로 익히는 것이 안전합니다. family, team 뒤에 is/has, its를 쓰는 것이 가장 무난한 선택이며, are/have/their를 쓴 문장을 보더라도 "영국식 표현이며 구성원 개개인을 강조하는 것"이라고 이해하면 충분합니다.',
      },
      {
        type: 'callout',
        title: '6장 핵심 정리',
        items: [
          '인칭은 "누구의 관점에서 말하느냐"를 나타내며, 나는 1인칭, 너는 2인칭, 그 외 제3자는 3인칭이다.',
          '수는 주어가 몇 명(몇 개)인지를 나타내며, 한 명(한 개)이면 단수, 둘 이상이면 복수이다.',
          '1인칭·2인칭 주어는 I/We, You로 한정되지만, 3인칭 주어는 He, She, It, They를 포함해 셀 수 없이 다양하다.',
          '한국어 동사는 주어의 인칭·수에 따라 형태가 바뀌지 않지만, 영어 동사는 바뀐다. 이 차이 때문에 3인칭 단수 -s를 빠뜨리는 실수가 자주 발생한다.',
          '현재 시제에서 주어가 3인칭 단수일 때만 동사에 -s를 붙이며, 이를 주어와 동사의 수의 일치라고 한다.',
          '이 -s는 과거 모든 인칭에 있던 동사 어미 변화 중 유일하게 살아남은 흔적이다.',
          'everyone, each, family/team처럼 형태가 복수처럼 느껴져도 의미상 하나의 단위로 취급되어 단수 동사를 쓰는 예외가 있다.',
        ],
      },
    ],
  },
}
