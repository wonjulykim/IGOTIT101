export const ch16 = {
  'ch16-1': {
    title: '수여동사',
    blocks: [
      {
        type: 'p',
        text: '‘수여’는 ‘누군가에게 어떤 것을 준다’는 뜻입니다. 수여동사는 말 그대로 ‘누군가에게 어떤 것을 준다’는 의미를 가진 동사들(give, send, bring, make, buy, show, tell 등)을 가리킵니다. 이 장에서는 수여동사가 왜 목적어를 두 개나 필요로 하는지, 그리고 그 문장이 전치사를 이용해 다른 모습으로도 바뀔 수 있다는 것을 원리부터 살펴보겠습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He made the children dinner.', ko: '그는 그 아이들에게 저녁 식사를 만들어 주었다.' },
          { en: 'Tom is sending Peter an email.', ko: 'Tom은 Peter에게 이메일을 보내는 중이다.' },
          { en: 'David showed us his photos.', ko: 'David는 우리에게 그의 사진을 보여 주었다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '4형식',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'made' },
          { tag: 'O1', text: 'the children' },
          { tag: 'O2', text: 'dinner' },
        ],
        translation: '그는 그 아이들에게 저녁 식사를 만들어 주었다.',
      },
      { type: 'heading', text: '수여동사의 두 목적어: 간접목적어와 직접목적어' },
      {
        type: 'p',
        text: '수여동사는 목적어를 2개 가집니다. ‘누군가에게 무엇을 준다’는 뜻이니 당연히 ‘물건을 줄 사람’과 ‘줄 물건’ 두 가지 정보가 필요합니다. 이 두 목적어를 각각 간접목적어(사람)와 직접목적어(사물)라고 부르기도 하지만, 이름 자체보다는 **‘사람이 먼저, 사물이 나중’이라는 순서**가 더 중요합니다.',
      },
      {
        type: 'sentence-diagram',
        label: '4형식',
        parts: [
          { tag: 'S', text: 'David' },
          { tag: 'V', text: 'showed' },
          { tag: 'O1', text: 'us' },
          { tag: 'O2', text: 'his photos' },
        ],
        translation: 'David는 우리에게 그의 사진을 보여 주었다. (사람 O1 → 사물 O2 순서)',
      },
      {
        type: 'note',
        text: '왜 순서가 ‘사람 → 사물’일까요? 영어는 짧고 이미 알려진(구체적이지 않은) 정보를 앞에, 길고 새로운 정보를 뒤에 두는 경향이 있습니다. 대화에서 ‘받는 사람’은 대개 이미 대화에 등장한 인물(대명사 us, me, him 등)인 경우가 많고, ‘주는 물건’은 그 문장에서 새롭게 제시되는 정보인 경우가 많기 때문에 사람이 먼저 나옵니다.',
      },
      { type: 'heading', text: '왜 목적어가 두 개 필요한가 — 3형식과의 비교' },
      {
        type: 'p',
        text: '아래 두 문장을 비교해 봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She sent a birthday card.', ko: '그녀는 생일 카드를 보냈다.', note: '누구에게 보냈는지 정보가 없음' },
          { en: 'She sent me a birthday card.', ko: '그녀는 나에게 생일 카드를 보냈다.', note: '수여동사 구조로 받는 사람(me)까지 표현' },
        ],
      },
      {
        type: 'p',
        text: '첫 번째 문장에는 ‘생일 카드를 보냈다’는 정보만 있고 누구에게 보냈는지는 나타나 있지 않습니다. ‘누구’에 해당하는 정보를 제공하기 위해 수여동사를 사용하면, 생일 카드를 누구에게 보냈는지에 대한 정보까지 한 문장(S+V+O1+O2)에 함께 나타낼 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'context: 친구가 생일 선물을 준비 중이라며 자랑한다.', note: '문맥' },
          { en: 'A: What did you get her? B: I bought her a scarf.', ko: 'A: 그녀에게 뭐 사줬어? B: 나는 그녀에게 스카프를 사줬어.', note: '대화에서 받는 사람과 물건이 한 문장에 함께 필요한 상황' },
        ],
      },
      { type: 'heading', text: '전치사를 이용한 3형식 전환' },
      {
        type: 'p',
        text: '4형식 문장은 전치사를 사용해 3형식으로 바꿀 수도 있습니다. **이때 직접목적어(사물)를 동사 뒤에 두고, 간접목적어(사람) 앞에 전치사를 붙여 문장 끝으로 보냅니다.**',
      },
      {
        type: 'transform',
        from: [{ label: '4형식 (S+V+O1+O2)', text: 'He gave her a book.' }],
        to: { label: '3형식 (S+V+O+전치사구)', text: 'He gave a book to her.' },
        note: '간접목적어(her)가 동사 바로 뒤 자리를 떠나 전치사 to와 함께 문장 끝으로 이동한다',
      },
      {
        type: 'example',
        items: [
          { en: 'She sent a birthday card to me.', ko: '그녀는 생일 카드를 나에게 보냈다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '3형식 전환',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'sent' },
          { tag: 'O', text: 'a birthday card' },
          { tag: 'M', text: 'to me' },
        ],
        translation: '그녀는 생일 카드를 나에게 보냈다. (to me가 받는 사람을 강조)',
      },
      { type: 'heading', text: '4형식과 3형식, 같은 정보 다른 강조점' },
      {
        type: 'note',
        text: '"She sent me a birthday card."와 "She sent a birthday card to me."는 같은 사실을 전달하지만 강조점이 다릅니다. 3형식으로 바꾼 문장은 받는 사람(me)을 문장 끝에 두어 ‘누가 받는지’를 강조합니다. 영어는 새롭고 강조하고 싶은 정보를 문장 뒤쪽에 두는 경향이 있기 때문입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'context: 여러 명에게 선물을 나눠준 상황에서 ‘내가 무엇을 받았는지’가 중요한 대화', note: '문맥 1 — 물건이 초점' },
          { en: 'He gave me a scarf, and gave my sister a wallet.', ko: '그는 나에게는 스카프를, 내 여동생에게는 지갑을 주었다.', note: '4형식: 받는 사람은 이미 알려져 있고, 무엇을 받았는지(물건)가 새 정보' },
          { en: 'context: 선물을 준비했는데 ‘그것을 누구에게 줬는지’가 궁금한 대화', note: '문맥 2 — 받는 사람이 초점' },
          { en: 'A: Who did you give the concert tickets to? B: I gave the tickets to my little brother.', ko: 'A: 그 콘서트 표를 누구에게 줬어? B: 나는 그 표를 내 남동생에게 줬어.', note: '3형식: 물건(the tickets)은 이미 알려져 있고, 누구에게 줬는지(사람)가 새 정보라 문장 끝에 옴' },
        ],
      },
      { type: 'heading', text: '동사의 의미에 따라 달라지는 전치사 — to와 for' },
      {
        type: 'p',
        text: '4형식을 3형식으로 바꿀 때 모든 동사가 같은 전치사를 쓰는 것은 아닙니다. 동사의 의미에 따라 사용되는 전치사도 달라집니다. **전치사 to는 단순한 물건의 이동(전달)을 나타내는 동사에, 전치사 for는 정성·노력·시간·돈을 들여 마련해 주는 동사**에 쓰입니다.',
      },
      {
        type: 'table',
        caption: '수여동사와 3형식 전환 시 전치사',
        headers: ['전치사', '행위의 성격', '동사'],
        rows: [
          ['to', '이미 존재하는 물건이 사람에게 단순히 옮겨감(전달·이동)', 'give, bring, send, teach, lend, tell, show 등'],
          ['for', '받는 사람을 위해 정성·노력·시간·돈을 들여 마련함', 'make, cook, buy 등'],
        ],
      },
      {
        type: 'icon-row',
        caption: '전치사로 보는 동사의 어감',
        items: [
          { icon: '🚚', label: 'to', sub: '전달 · give / tell / show' },
          { icon: '🎁', label: 'for', sub: '마련해줌 · buy / make' },
        ],
      },
      {
        type: 'p',
        text: '왜 두 가지로 나뉠까요? give, tell, show류는 이미 존재하는 것(물건, 정보, 모습)을 상대방 쪽으로 ‘이동’시키는 동사입니다. 이동에는 방향이 있으므로 방향을 나타내는 전치사 to가 자연스럽습니다. 반면 make, cook, buy류는 물건이 원래부터 있던 것이 아니라 ‘그 사람을 위해서’ 새로 만들어내거나 마련하는 행위입니다. 여기서 핵심은 이동이 아니라 ‘누구를 위한 것인가’이므로, 목적·수혜를 나타내는 전치사 for가 쓰입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'context: 아이가 잠들기 전, 아빠가 인사를 하는 상황', note: '문맥 — give (전달)' },
          { en: 'He gave me a good-night kiss.', ko: '그는 나에게 잘 자라는 뽀뽀를 해 주었다.' },
          { en: 'He gave a good-night kiss to me.', ko: '그는 잘 자라는 뽀뽀를 나에게 해 주었다.', note: 'kiss라는 행위 자체가 그대로 나에게 전달됨 → to' },
          { en: 'context: 아들의 생일을 맞아 선물을 준비한 상황', note: '문맥 — buy (마련·수혜)' },
          { en: 'He bought his son a present.', ko: '그는 그의 아들에게 선물을 사 주었다.' },
          { en: 'He bought a present for his son.', ko: '그는 선물을 그의 아들을 위해 사 주었다.', note: '아들을 위해 없던 선물을 마련함 → for' },
          { en: 'context: 손님을 위해 저녁 식사를 요리한 상황', note: '문맥 — cook (마련·수혜)' },
          { en: 'She cooked her guests a wonderful meal.', ko: '그녀는 손님들에게 훌륭한 식사를 만들어 주었다.' },
          { en: 'She cooked a wonderful meal for her guests.', ko: '그녀는 훌륭한 식사를 손님들을 위해 만들었다.', note: '정성과 시간이 들어간 요리를 손님을 위해 준비 → for' },
        ],
      },
      {
        type: 'note',
        text: 'to는 물건이 단순히 사람에게 옮겨가는 것만을 나타내지만, for는 그 물건을 준비하는 데 들어간 정성·노력·시간·돈까지 함께 나타냅니다. 그래서 **make, cook, buy처럼 무언가를 만들거나 마련해서 주는 동사들은 for를 사용**합니다.',
      },
      { type: 'heading', text: '수여동사 정리 — to를 쓰는 동사 vs for를 쓰는 동사' },
      {
        type: 'p',
        text: '실제로 자주 쓰이는 수여동사들을 to그룹과 for그룹으로 나누어 정리하면 다음과 같습니다. **동사 하나하나를 따로 외우기보다, 앞서 배운 원리(이동이면 to, 마련이면 for)에 비추어 “이 동사가 이동을 말하는가, 마련을 말하는가”를 스스로 판단해보면 처음 보는 동사를 만나도 전치사를 추론할 수 있습니다.**',
      },
      {
        type: 'table',
        caption: '수여동사별 3형식 전환 전치사 정리',
        headers: ['전치사', '동사', '3형식 전환 예문'],
        rows: [
          ['to', 'give', 'She gave a ring to him.'],
          ['to', 'send', 'He sent an email to his manager.'],
          ['to', 'show', 'David showed his photos to us.'],
          ['to', 'tell', 'I told the truth to my parents.'],
          ['to', 'offer', 'The company offered a new position to her.'],
          ['to', 'teach', 'She teaches English to middle school students.'],
          ['to', 'lend', 'She lent some money to her son.'],
          ['to', 'bring', 'He brought some snacks to the party.'],
          ['to', 'pass', 'Please pass the salt to me.'],
          ['to', 'sell', 'Carolina sold her house to her younger brother.'],
          ['to', 'promise', 'He promised a surprise to his girlfriend.'],
          ['to', 'read', 'My mom read a bedtime story to me.'],
          ['for', 'make', 'He made dinner for the children.'],
          ['for', 'buy', 'Federico bought a car for his parents.'],
          ['for', 'cook', 'She cooked a wonderful meal for her guests.'],
          ['for', 'get', 'Could you get a coffee for me?'],
          ['for', 'find', 'He found a good seat for his grandmother.'],
          ['for', 'build', 'They built a house for the homeless family.'],
        ],
      },
      {
        type: 'note',
        text: '동사가 두 개의 목적어를 취하기는 하지만 to도 for도 아닌 of를 쓰는 예외적인 동사도 있습니다. **ask(묻다·요청하다)가 대표적인데, “~에게 ~을 요청하다”라는 뜻의 4형식 문장을 3형식으로 바꿀 때는 ask + 사물 + of + 사람의 형태를 씁니다.** ask는 물건이 이동하는 것도, 무언가를 마련해주는 것도 아니라 “상대방으로부터 무언가를 얻어내려는” 방향이므로 to·for와는 다른 of가 쓰인다고 이해하면 됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I asked him a question.', ko: '나는 그에게 질문을 하나 했다.', note: '4형식 (ask + 사람 + 사물)' },
          { en: 'I asked a question of him.', ko: '나는 그에게 질문을 하나 했다.', note: '3형식 전환 — ask는 to/for가 아니라 of를 사용' },
          { en: 'Can I ask a favor of you?', ko: '부탁 하나만 해도 될까요?', note: 'ask a favor of + 사람: 굳어진 표현으로 자주 쓰임' },
        ],
      },
      { type: 'heading', text: '흔히 하는 실수 — 직접목적어가 대명사일 때' },
      {
        type: 'p',
        text: '직접목적어(사물)가 it, them처럼 이미 알려진 대명사일 경우, **4형식(S+V+사람+대명사) 순서로 쓰면 매우 부자연스럽거나 틀린 문장**이 됩니다. 대명사는 이미 알고 있는 짧고 가벼운 정보이므로, 문장의 무게 중심을 맨 끝에 두는 영어의 습성상 오히려 동사 바로 뒤에 붙어야 하고, 사람은 전치사와 함께 뒤로 이동해야 자연스럽습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'context: 친구가 빌려달라고 한 책을 건네주면서', note: '문맥' },
          { en: '*He gave her it.', ko: '(어색한 표현)', note: '대명사 it이 직접목적어인 4형식 — 원어민이 거의 쓰지 않는 어색한 배열' },
          { en: 'He gave it to her.', ko: '그는 그것을 그녀에게 주었다.', note: '대명사 it은 동사 뒤에, 사람은 to와 함께 뒤로 — 올바른 표현' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '3형식 (직접목적어가 대명사일 때)',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'gave' },
          { tag: 'O', text: 'it' },
          { tag: 'M', text: 'to her' },
        ],
        translation: '그는 그것을 그녀에게 주었다. (대명사 it은 동사 바로 뒤, 사람은 전치사와 함께 뒤로)',
      },
      {
        type: 'note',
        text: '정리하면, 직접목적어가 명사(a book, a present 등)일 때는 "S+V+사람+사물" 4형식과 "S+V+사물+전치사+사람" 3형식이 모두 자연스럽지만, **직접목적어가 대명사(it, them)일 때는 3형식(S+V+it/them+전치사+사람)만 쓰는 것이 원칙**입니다. 대명사처럼 가볍고 이미 알려진 정보는 문장 뒤쪽 무거운 자리로 보내지 않는다는 영어의 일반적인 정보 배치 습성과 같은 원리입니다.',
      },
      { type: 'heading', text: '대명사가 간접목적어(사람)일 때는 어순이 비교적 자유롭다' },
      {
        type: 'p',
        text: '방금 살펴본 규칙은 **직접목적어(사물)가 대명사일 때**의 이야기였습니다. 그런데 반대로 **간접목적어(사람)가 대명사이고 직접목적어(사물)는 보통의 명사인 경우**는 사정이 다릅니다. 이때는 4형식(S+V+사람 대명사+사물)과 3형식(S+V+사물+전치사+사람 대명사) 두 가지 어순이 모두 자연스럽습니다. 즉 어순 제약이 걸리는 것은 오직 “사물 자리에 대명사가 올 때”뿐이며, “사람 자리에 대명사가 올 때”는 원래의 4형식 어순을 그대로 써도 전혀 문제가 없습니다.',
      },
      {
        type: 'table',
        caption: '대명사의 위치에 따른 어순 제약 정리',
        headers: ['대명사의 자리', '허용되는 어순', '예문'],
        rows: [
          ['직접목적어(사물)가 대명사', '3형식만 가능 (4형식 불가)', 'She lent it to her son. (○) / *She lent her son it. (✕)'],
          ['간접목적어(사람)가 대명사', '4형식·3형식 모두 가능', 'She lent him some money. (○) / She lent some money to him. (○)'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'Carolina sold it to her younger brother.', ko: 'Carolina는 그것을 남동생에게 팔았다.', note: '사물(it)이 대명사이므로 반드시 3형식' },
          { en: 'Carolina sold him her house.', ko: 'Carolina는 그에게 자신의 집을 팔았다.', note: '사람(him)이 대명사여도 4형식 어순 그대로 가능' },
          { en: 'Carolina sold her house to him.', ko: 'Carolina는 자신의 집을 그에게 팔았다.', note: '같은 뜻을 3형식으로 표현해도 자연스러움' },
          { en: 'Federico bought it for them.', ko: 'Federico는 그것을 그들을 위해 샀다.', note: '사물(it)이 대명사이므로 for와 함께 3형식만 가능' },
          { en: 'Federico bought them a car.', ko: 'Federico는 그들에게 차를 사 주었다.', note: '사람(them)이 대명사여도 4형식 어순 그대로 가능' },
        ],
      },
      {
        type: 'note',
        text: '결국 규칙은 하나로 요약됩니다. **대명사는 가벼운 정보이므로 문장에서 무거운 자리(맨 끝)로 보내지 않는다.** 사물이 대명사이면 그 가벼운 대명사가 동사 바로 뒤(가벼운 자리)에 남아야 하므로 사람이 대신 전치사와 함께 뒤로 밀려나 3형식이 되고, 사람이 대명사이면 애초에 사람이 이미 동사 바로 뒤(가벼운 자리)에 있으므로 굳이 어순을 바꿀 필요가 없어 4형식·3형식 모두 가능한 것입니다.',
      },
      { type: 'heading', text: '4형식을 쓸 수 없는 동사 — explain, suggest, describe 등' },
      {
        type: 'p',
        text: '겉보기에는 “~에게 ~을 설명하다/제안하다”처럼 수여동사와 비슷한 뜻으로 보이지만, **애초에 이중목적어(4형식) 구조 자체를 쓸 수 없는 동사들**이 있습니다. explain, suggest, describe, admit, announce, mention, introduce, propose 같은 동사가 대표적입니다. 이 동사들은 “사람에게 무엇을 그대로 건네준다”는 개념이 아니라 “정보를 말로 풀어내어 전달한다”는 개념에 가깝기 때문에, 반드시 to를 사람 앞에 붙여서 「동사 + 목적어(사물/that절) + to + 사람」의 3형식으로만 써야 합니다.',
      },
      {
        type: 'table',
        caption: '4형식(이중목적어)을 쓸 수 없는 동사',
        headers: ['잘못된 4형식', '올바른 3형식', '설명'],
        rows: [
          ['*He explained me the problem.', 'He explained the problem to me.', 'explain은 항상 explain + 사물 + to + 사람의 순서로만 쓴다.'],
          ['*She suggested me a good idea.', 'She suggested a good idea to me.', 'suggest도 사람 앞에 반드시 to가 필요하다.'],
          ['*He described us the accident.', 'He described the accident to us.', 'describe 역시 이중목적어를 취하지 않는다.'],
          ['*She admitted him her mistake.', 'She admitted her mistake to him.', 'admit도 to 없이 사람을 바로 뒤에 둘 수 없다.'],
          ['*The government announced the public the new policy.', 'The government announced the new policy to the public.', 'announce도 마찬가지로 3형식으로만 쓴다.'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'The teacher explained the grammar rule to the students.', ko: '선생님은 학생들에게 그 문법 규칙을 설명해 주었다.', note: 'explain + 목적어 + to + 사람' },
          { en: 'He explained to me that he would be late.', ko: '그는 나에게 늦을 것이라고 설명했다.', note: 'explain 뒤에 that절이 올 때도 to me가 먼저 옴' },
          { en: 'I suggested a new plan to my team.', ko: '나는 팀에게 새로운 계획을 제안했다.' },
          { en: 'Can you describe the thief to the police?', ko: '경찰에게 그 도둑의 인상착의를 설명해 주시겠어요?' },
        ],
      },
      {
        type: 'note',
        text: '이 동사들과 give, tell, teach 같은 진짜 수여동사를 구별하는 좋은 방법은, “물건이나 지식을 상대방에게 통째로 건네는 느낌인가”를 따져보는 것입니다. tell은 사람에게 정보 자체를 직접 건네는 동작(4형식 가능: tell me the truth)이지만, explain은 정보를 “풀어서” 전달하는 동작이라 대상(사람)이 동사 바로 뒤에 오지 못합니다. 뜻이 비슷해 보여도 tell과 explain을 서로 바꾸어 4형식/3형식 구조를 섞어 쓰면 흔한 오류가 되므로 주의해야 합니다.',
      },
      {
        type: 'callout',
        title: '16장 핵심 정리',
        items: [
          '수여동사(give, send, bring, make, buy, show, tell 등)는 ‘누군가에게 무엇을 준다’는 뜻으로, 목적어를 2개(간접목적어=사람, 직접목적어=사물) 갖는 4형식 문장을 만든다.',
          '4형식 구조: S + V + O1(사람) + O2(사물). 사람이 먼저 오는 것은 대개 이미 알려진 정보이기 때문이다.',
          '4형식은 전치사를 이용해 3형식(S + V + O + 전치사구)으로 바꿀 수 있고, 이때 사람이 문장 끝으로 이동해 ‘누구에게’가 강조된다. 반대로 4형식은 ‘무엇을’ 주었는지를 강조한다.',
          '전치사는 동사가 나타내는 행위의 성격을 반영한다: give·bring·send·teach·lend·tell·show(있는 것을 그대로 전달)는 to, make·cook·buy(없던 것을 마련해 줌)는 for를 쓴다.',
          '직접목적어가 it/them 같은 대명사일 때는 4형식(*He gave her it.)이 아니라 3형식(He gave it to her.)을 써야 한다.',
        ],
      },
    ],
  },
}
