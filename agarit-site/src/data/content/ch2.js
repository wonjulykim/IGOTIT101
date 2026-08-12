export const ch2 = {
  'ch2-1': {
    title: '명사 (Noun)',
    blocks: [
      {
        type: 'p',
        text: '명사는 영어로 Noun이라 하며, 라틴어 nomen(이름)에서 유래했습니다. 사람이나 동물, 사물, 심지어 눈에 보이지 않는 개념(사랑, 정의)까지 무언가의 이름을 나타내는 단어가 명사입니다. apple(사과), desk(책상), jewel(보석), bread(빵), love(사랑), justice(정의) 등이 모두 명사입니다.',
      },
      {
        type: 'p',
        text: '문장에서 명사가 하는 일은 생각보다 크습니다. 명사는 주어(누가/무엇이) 자리, 목적어(누구를/무엇을) 자리, 보어(무엇이다) 자리를 채웁니다. 즉 명사가 없으면 문장이 무엇에 관한 이야기인지조차 알 수 없습니다.',
      },
      { type: 'heading', text: '문장 속에서 명사가 서는 세 자리' },
      {
        type: 'p',
        text: '똑같은 명사 dog라도 문장 안에서 어느 자리에 놓이느냐에 따라 역할이 완전히 달라집니다. 아래 두 문장을 비교해 보세요.',
      },
      {
        type: 'sentence-diagram',
        label: 'The dog bit the mailman. 의 자리 구조',
        parts: [
          { tag: 'S', text: 'The dog' },
          { tag: 'V', text: 'bit' },
          { tag: 'O', text: 'the mailman' },
        ],
        translation: '그 개가 우편배달원을 물었다. — dog는 주어(S), mailman은 목적어(O)',
      },
      {
        type: 'sentence-diagram',
        label: 'My sister became a doctor. 의 자리 구조',
        parts: [
          { tag: 'S', text: 'My sister' },
          { tag: 'V', text: 'became' },
          { tag: 'C', text: 'a doctor' },
        ],
        translation: '내 여동생은 의사가 되었다. — doctor는 sister가 무엇인지 설명하는 보어(C)',
      },
      {
        type: 'p',
        text: '이렇게 명사는 자리마다 역할 이름이 바뀝니다. 문장을 읽을 때 "이 명사가 지금 주어인가, 목적어인가, 보어인가"를 따져보는 습관이 뒤에 나올 문장의 5형식과 곧바로 연결됩니다.',
      },
      { type: 'heading', text: '명사는 왜 셀 수 있는지를 따질까' },
      {
        type: 'icon-row',
        caption: '셀 수 있는 명사 vs 셀 수 없는 명사',
        items: [
          { icon: '🍎', label: '셀 수 있는 명사', sub: 'a/an, -s 사용' },
          { icon: '💧', label: '셀 수 없는 명사', sub: '단위 없이는 표시 불가' },
        ],
      },
      {
        type: 'p',
        text: '영어 사용자는 명사가 셀 수 있는 대상인지 아닌지를 매우 중요하게 생각합니다. 이는 영어 문법 전체(관사, 복수형, 동사 일치)를 좌우하는 기준이 되기 때문입니다. 셀 수 있는 명사에는 하나임을 표시하려고 앞에 a(an)을 붙이고, 둘 이상이면 뒤에 -(e)s를 붙입니다. 셀 수 없는 명사는 낱개로 딱 나눌 수 있는 형태가 없기 때문에 이런 표식을 쓰지 않습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Would you like a coffee?', ko: '커피 한 잔 하실래요?', note: 'a coffee — 잔에 담긴 한 잔의 커피(셀 수 있는 단위)' },
          { en: "Sure, I'd love some coffee.", ko: '네, 커피 좋아요.', note: 'some coffee — 음료 자체(형태 없는 물질)' },
          { en: 'Can I get a paper to write my notes on?', ko: '메모할 종이 한 장 줄 수 있어?', note: 'a paper — 한 장의 종이(셀 수 있는 단위)' },
          { en: 'Sure, there is some paper on the shelf.', ko: '그럼, 선반에 종이 있어.', note: 'some paper — 재료로서의 종이(형태 없는 물질)' },
        ],
      },
      { type: 'heading', text: '명사의 복수형 만드는 법' },
      { type: 'p', text: '(1) 대부분의 명사: 명사 뒤에 -s를 붙인다. 예) cars, trees, flowers' },
      {
        type: 'p',
        text: '(2) -s, -sh, -ch, -x, -o로 끝나는 명사: -es를 붙인다. 이 발음들은 -s와 연달아 발음하기 어려워 중간에 모음을 넣어 발음을 편하게 합니다. 예) buses, tomatoes, heroes',
      },
      { type: 'p', text: '(3) 예외: pianos, photos — o로 끝나지만 외래어(pianoforte의 줄임)이거나 줄임말(photography의 줄임)이라 -s만 붙입니다.' },
      {
        type: 'p',
        text: '(4) 자음+y로 끝나는 명사: y를 i로 바꾸고 -es를 붙인다. 자음 뒤에 y+s가 연속되면 발음하기 어려워 y를 i로 바꿔줍니다. 예) baby → babies, city → cities, story → stories, lady → ladies. 반면 모음+y로 끝나는 명사는 이미 발음이 쉬우므로 그대로 -s만 붙입니다. 예) boy → boys, key → keys, day → days',
      },
      {
        type: 'p',
        text: '(5) f, fe로 끝나는 명사: f/fe를 -ves로 바꾼다. f와 s는 둘 다 무성음(성대 떨림이 적은 소리)이라 연달아 쓰면 발음이 어려워 이렇게 바뀝니다. 예) wolf → wolves, knife → knives, calf → calves, leaf → leaves',
      },
      { type: 'p', text: '(6) 예외: belief → beliefs, roof → roofs (과거엔 beliefs/believes, roofs/rooves 두 형태가 경쟁했는데 -s형이 살아남았습니다)' },
      {
        type: 'transform',
        from: { label: '단수', text: 'baby' },
        to: { label: '복수', text: 'babies' },
        note: '자음(b)+y로 끝나는 명사는 y를 i로 바꾸고 -es를 붙여 발음을 편리하게 만듭니다.',
      },
      {
        type: 'table',
        caption: '(7) 불규칙 복수형',
        headers: ['단수', '복수', '단수', '복수'],
        rows: [
          ['man', 'men', 'woman', 'women'],
          ['mouse', 'mice', 'goose', 'geese'],
          ['tooth', 'teeth', 'foot', 'feet'],
          ['child', 'children', 'person', 'people'],
        ],
      },
      {
        type: 'note',
        text: '영어는 로마, 게르만족, 노르만족, 프랑스 등 여러 언어의 영향을 받으며 발전했습니다. 불규칙 복수형은 그 흔적으로, 자세히 보면 대부분 모음을 바꾸어 복수형을 만듭니다. 지금은 외워야 하지만 고대에는 나름의 규칙이었습니다.',
      },
      {
        type: 'p',
        text: '(8) 단수·복수가 같은 명사: sheep, deer, salmon, moose, trout, swine 등. deer처럼 고대 독일어 계열의 복수 규칙을 따라 -s가 붙지 않게 된 경우도 있고, sheep처럼 고대 영어에서 복수형 어미 -u가 시간이 지나며 사라져 버린 경우도 있습니다. 다만 단수·복수 형태가 같아도 동사는 여전히 문맥의 수에 맞춰야 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'One sheep is standing in the field.', ko: '양 한 마리가 들판에 서 있다.', note: '단수 sheep + 단수 동사 is' },
          { en: 'Ten sheep are grazing in the field.', ko: '양 열 마리가 들판에서 풀을 뜯고 있다.', note: '복수 sheep(형태 그대로) + 복수 동사 are' },
          { en: 'A deer ran across the road.', ko: '사슴 한 마리가 도로를 가로질러 뛰어갔다.', note: '단수 deer + 단수 동사 ran' },
          { en: 'Several deer crossed the road together.', ko: '사슴 여러 마리가 함께 도로를 건넜다.', note: '복수 deer(형태 그대로) + 복수 의미' },
        ],
      },
      { type: 'heading', text: '명사의 종류' },
      {
        type: 'icon-row',
        caption: '명사의 5가지 종류, 한눈에 보기',
        items: [
          { icon: '🏛️', label: '고유명사', sub: 'John, Paris' },
          { icon: '💭', label: '추상명사', sub: 'love, happiness' },
          { icon: '💧', label: '물질명사', sub: 'water, gold' },
          { icon: '👥', label: '집합명사', sub: 'furniture, cattle' },
          { icon: '📦', label: '보통명사', sub: 'dog, book' },
        ],
      },
      {
        type: 'table',
        caption: '명사의 5가지 종류',
        headers: ['종류', '설명', '예시'],
        rows: [
          ['고유명사', '특정한 사물·장소·인물을 가리키는 명사', 'John, Paris, Coca-Cola'],
          ['추상명사', '눈에 보이지 않고 만질 수 없는 명사', 'love(사랑), happiness(행복)'],
          ['물질명사', '형태가 정확히 정해져 있지 않은 명사', 'water(물), gold(금)'],
          ['집합명사', '사물의 집합을 나타내는 명사', 'furniture(가구), cattle(가축)'],
          ['보통명사', '일반적인 사물·개념·인물을 가리키는 명사', 'dog(개), city(도시), book(책)'],
        ],
      },
      {
        type: 'note',
        text: '같은 단어도 문맥에 따라 종류가 달라질 수 있습니다. 그러니 명사를 종류로 딱 나누어 외우기보다, 문장 속에서 어떻게 쓰였는지를 살펴보는 게 중요합니다.',
      },
      { type: 'heading', text: '같은 단어인데 셀 수 있음과 없음이 갈리는 경우' },
      {
        type: 'p',
        text: '몇몇 명사는 물질·추상적인 의미로 쓰일 때는 셀 수 없지만, 구체적인 하나의 사례나 결과물을 가리킬 때는 셀 수 있는 명사로 바뀝니다. 뜻이 조금씩 달라진다는 점에 주의하세요.',
      },
      {
        type: 'table',
        caption: '셀 수 없는 의미 vs 셀 수 있는 의미',
        headers: ['단어', '셀 수 없는 명사(재료·전체)', '셀 수 있는 명사(구체적 사례)'],
        rows: [
          ['paper', '종이(재료)', 'a paper — 문서, 논문'],
          ['glass', '유리(재료)', 'a glass — 유리잔'],
          ['light', '빛', 'a light — 조명, 전등'],
          ['hair', '머리카락 전체(숱)', 'a hair — 머리카락 한 가닥'],
          ['work', '일, 업무', 'a work — (예술) 작품'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'She wrote a paper on climate change.', ko: '그녀는 기후 변화에 관한 논문을 썼다.', note: 'a paper — 논문 한 편(셀 수 있음)' },
          { en: 'I need some paper to wrap this gift.', ko: '이 선물을 포장할 종이가 필요해.', note: 'paper — 포장용 재료(셀 수 없음)' },
          { en: 'Could you turn on a light? It’s dark in here.', ko: '조명 좀 켜줄래? 여기 어둡다.', note: 'a light — 전등 하나(셀 수 있음)' },
          { en: 'The room was filled with soft light.', ko: '방은 부드러운 빛으로 가득했다.', note: 'light — 빛 자체(셀 수 없음)' },
        ],
      },
      { type: 'heading', text: '문맥에 따라 경계를 넘나드는 명사' },
      {
        type: 'example',
        items: [
          { en: "She's become a real Einstein in physics.", ko: '그녀는 물리학의 진짜 아인슈타인이 되었다.', note: '고유명사 Einstein이 "~같은 재능을 가진 사람"이라는 보통명사처럼 쓰임' },
          { en: 'Please pass me a water.', ko: '물 한 잔(병) 좀 건네줘.', note: '물질명사 water가 "한 병/잔"이라는 셀 수 있는 명사처럼 쓰임' },
          { en: 'That was a beauty I had never seen before.', ko: '그것은 내가 본 적 없는 아름다움(미인)이었다.', note: '추상명사 beauty가 구체적인 대상을 가리키는 보통명사처럼 쓰임' },
          { en: "I'll have two coffees, please.", ko: '커피 두 잔 주세요.', note: '물질명사 coffee가 "잔" 단위의 보통명사처럼 쓰임' },
          { en: 'We need more chairs and tables for the party.', ko: '파티를 위해 의자와 테이블이 더 필요해.', note: 'furniture(가구, 집합명사)와 달리 chair·table은 개별로 셀 수 있는 보통명사' },
          { en: 'There are three Napoleons in this history book.', ko: '이 역사책에는 세 명의 나폴레옹(같은 이름을 가진 인물)이 나온다.', note: '고유명사 Napoleon이 "그 이름을 가진 사람들"이라는 보통명사처럼 쓰임' },
        ],
      },
      { type: 'heading', text: '흔한 실수: 셀 수 없는 명사를 복수형으로 쓰기' },
      {
        type: 'note',
        text: '추상명사·물질명사·집합명사는 낱개로 딱 나눌 수 있는 형태가 없으므로 원칙적으로 -s를 붙이거나 a/an을 쓰지 않습니다. 그런데 한국어로는 "정보들", "가구들"처럼 복수처럼 느껴지는 표현이 많아 학습자들이 자주 실수합니다.',
      },
      {
        type: 'example',
        items: [
          { en: '*I have many furnitures in my room.', ko: '내 방에는 가구가 많다. (오류)', note: 'furniture는 집합명사, 복수형 없음' },
          { en: 'I have a lot of furniture in my room.', ko: '내 방에는 가구가 많다. (올바른 표현)' },
          { en: '*She gave me many advices.', ko: '그녀는 나에게 많은 조언을 해주었다. (오류)' },
          { en: 'She gave me a lot of advice. / She gave me a piece of advice.', ko: '그녀는 나에게 많은 조언을(조언 하나를) 해주었다. (올바른 표현)' },
          { en: '*I need an information about the trip.', ko: '나는 그 여행에 대한 정보가 필요하다. (오류)' },
          { en: 'I need some information about the trip.', ko: '나는 그 여행에 대한 정보가 필요하다. (올바른 표현)' },
          { en: '*I don’t have many moneys to spend.', ko: '나는 쓸 돈이 많지 않다. (오류)', note: 'money는 물질명사, 복수형 없음' },
          { en: 'I don’t have much money to spend.', ko: '나는 쓸 돈이 많지 않다. (올바른 표현)' },
        ],
      },
      {
        type: 'callout',
        title: '명사 핵심 정리',
        items: [
          '명사는 문장 속 주어·목적어·보어 자리를 채우는 기본 재료이며, 같은 단어도 자리에 따라 역할이 바뀐다.',
          '영어 문법은 셀 수 있는지 없는지를 기준으로 관사·복수형·조수사를 결정한다.',
          '복수형 변화(-es, y→ies, f→ves)는 대부분 발음을 편하게 하려는 이유에서 생겼고, 불규칙 복수형은 고대 언어의 흔적이다.',
          'paper, glass, light, hair, work처럼 같은 단어라도 재료·전체를 가리킬 땐 셀 수 없고, 구체적인 사례·결과물을 가리킬 땐 셀 수 있게 바뀐다.',
          'furniture, advice, information, money처럼 한국어로는 복수처럼 느껴져도 영어에서는 셀 수 없는 명사이니 -s를 붙이지 않는다.',
        ],
      },
    ],
  },

  'ch2-2': {
    title: '관사',
    blocks: [
      {
        type: 'p',
        text: '관사는 한자로 「冠詞」, 즉 ‘머리에 쓰는 갓’이라는 뜻입니다. 명사 앞에 위치해 명사가 단수인지 복수인지, 특정한 것인지 일반적인 것인지를 표시해주는 역할을 합니다. 관사에는 정관사(the)와 부정관사(a, an) 두 종류가 있습니다.',
      },
      { type: 'heading', text: '관사는 왜 필요한가' },
      {
        type: 'p',
        text: '한국어는 관사 없이도 "고양이가 왔다"처럼 문맥으로 특정한 고양이인지 아무 고양이인지 짐작합니다. 하지만 영어는 명사 앞에 반드시 어떤 표지를 두어 "이게 특정한 것인지 아닌지"를 매번 선언해야 하는 언어입니다. 그래서 셀 수 있는 명사 앞에는 거의 항상 관사(또는 그에 준하는 한정사)가 붙습니다. 관사를 잘못 고르거나 빠뜨리면 문장의 의미가 통째로 바뀔 수 있습니다.',
      },
      {
        type: 'p',
        text: '관사가 명사에 얹어주는 정보는 두 가지입니다. 하나는 "몇 개인가"(단수·복수), 다른 하나는 "특정한 것인가, 아무거나인가"(특정성)입니다. 이 두 정보를 늘 함께 표시해야 하기 때문에 영어에서는 관사가 거의 빠질 수 없습니다.',
      },
      {
        type: 'icon-row',
        caption: '정관사 the vs 부정관사 a/an',
        items: [
          { icon: '👉', label: 'the', sub: '이미 알고 있는 대상' },
          { icon: '📢', label: 'a / an', sub: '처음 소개되는 대상' },
        ],
      },
      { type: 'heading', text: '정관사 the — 이미 알고 있는 대상' },
      {
        type: 'p',
        text: 'the는 ① 특정한 대상을 지칭할 때, ② 이미 문맥에서 공유된 대상일 때, ③ 유일하게 존재해 고유하게 식별 가능한 대상일 때 사용합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The cat that lives next door is very noisy.', ko: '이웃집 고양이는 매우 시끄럽다.', note: '특정 대상' },
          { en: 'I saw the movie you recommended.', ko: '네가 추천한 영화를 봤어.', note: '이미 공유된 대상' },
          { en: 'The sun rises in the east.', ko: '태양은 동쪽에서 뜬다.', note: '고유하게 식별 가능한 대상' },
          { en: 'Could you close the door, please?', ko: '문 좀 닫아줄래?', note: '이 방에 문은 하나뿐이라 서로 무엇을 말하는지 아는 상태' },
          { en: 'Please turn off the lights before you leave.', ko: '나가기 전에 조명 좀 꺼줘.', note: '이 방의 조명들이라는 것을 서로 알고 있음' },
          { en: 'She is the tallest student in our class.', ko: '그녀는 우리 반에서 가장 키가 큰 학생이다.', note: '최상급 앞에서는 유일하게 식별 가능한 대상이 되므로 the' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'I bought a bike yesterday.', ko: '나 어제 자전거 하나 샀어.', note: 'a bike — 처음 소개되는 대상' },
          { en: 'Really? Can I see the bike?', ko: '진짜? 그 자전거 봐도 돼?', note: 'the bike — 앞 문장에서 이미 언급된 그 자전거' },
          { en: 'I found a wallet on the street.', ko: '길에서 지갑 하나를 발견했어.', note: 'a wallet — 처음 소개되는 대상' },
          { en: 'Did you open the wallet to see whose it is?', ko: '그 지갑을 열어서 누구 건지 확인했어?', note: 'the wallet — 이미 언급된 특정한 지갑' },
        ],
      },
      { type: 'heading', text: '부정관사 a / an — 처음 등장하는 대상' },
      {
        type: 'p',
        text: 'a/an은 ① 여러 대상 중 하나를 언급할 때, ② 처음 소개되는 대상일 때, ③ 수량이 하나임을 나타낼 때 씁니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I saw a cat in the garden.', ko: '정원에서 고양이를 봤어.' },
          { en: 'He ate an apple.', ko: '그는 사과 하나를 먹었다.' },
          { en: 'She has an interesting idea.', ko: '그녀는 흥미로운 아이디어를 가지고 있다.' },
          { en: 'I need an hour to finish this.', ko: '이걸 끝내려면 한 시간이 필요해.' },
          { en: 'She works at a university in Seoul.', ko: '그녀는 서울에 있는 한 대학교에서 일한다.' },
          { en: 'She is looking for a job near her house.', ko: '그녀는 집 근처에서 일자리를 찾고 있어.', note: '여러 일자리 중 아무 하나' },
        ],
      },
      {
        type: 'note',
        text: 'a와 an의 선택은 ‘철자’가 아니라 ‘소리’를 기준으로 합니다. hour는 h가 묵음이라 모음 소리로 시작하므로 an hour, university는 u가 자음처럼 들리는 /juː/ 소리로 시작하므로 a university가 됩니다.',
      },
      {
        type: 'p',
        text: '같은 명사라도 a를 쓰면 "처음 언급되는/특정하지 않은 것", the를 쓰면 "이미 언급되었거나 특정한 것"이라는 뜻이 됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I need a pen to write a letter.', ko: '편지를 쓰려면 펜이 필요해.', note: '아무 펜이나 상관없음' },
          { en: 'I need the pen that I left on your desk.', ko: '네 책상 위에 둔 그 펜이 필요해.', note: '이미 언급된 특정한 펜' },
          { en: 'Yesterday, I saw a dog in the park. It was very cute.', ko: '어제 공원에서 강아지를 봤어. 아주 귀여웠어.', note: 'a dog — 처음 등장하는, 특정하지 않은 강아지' },
          { en: 'When I was in the park, I saw the dog you told me about.', ko: '공원에 있을 때, 네가 말해준 그 강아지를 봤어.', note: 'the dog — 상대방도 이미 알고 있는 특정한 강아지' },
        ],
      },
      {
        type: 'transform',
        from: { label: '처음 언급', text: 'a dog' },
        to: { label: '재언급 (특정해짐)', text: 'the dog' },
        note: '같은 단어라도 처음 언급될 때는 a, 이미 언급되어 서로 알고 있는 대상이 되면 the로 바뀝니다.',
      },
      { type: 'heading', text: '관사가 아예 없는 경우 (무관사)' },
      {
        type: 'p',
        text: '복수형으로 일반적인 진술을 하거나, 교통·식사·기관처럼 관용적으로 굳어진 표현에서는 관사를 쓰지 않습니다. 이를 무관사(zero article)라고 합니다.',
      },
      {
        type: 'table',
        caption: '무관사가 쓰이는 대표적인 경우',
        headers: ['상황', '예시'],
        rows: [
          ['복수형으로 일반적 진술', 'Dogs are loyal animals.'],
          ['교통수단', 'go to school by bus, come by train'],
          ['식사', 'have breakfast / lunch / dinner'],
          ['운동·게임', 'play soccer, play chess'],
          ['이동수단으로서의 도보', 'go to work on foot'],
        ],
      },
      { type: 'heading', text: '흔한 실수: 관사의 생략과 오용' },
      {
        type: 'example',
        items: [
          { en: '*I go to school by the bus.', ko: '나는 버스로 학교에 간다. (오류)', note: '교통수단 관용 표현엔 관사를 쓰지 않음' },
          { en: 'I go to school by bus.', ko: '나는 버스로 학교에 간다. (올바른 표현)' },
          { en: '*He is student.', ko: '그는 학생이다. (오류)', note: '보통명사 단수 앞엔 반드시 관사 필요' },
          { en: 'He is a student.', ko: '그는 학생이다. (올바른 표현)' },
          { en: '*The love is important in a family.', ko: '가정에서 사랑은 중요하다. (오류)', note: '추상명사를 일반적으로 말할 땐 the를 붙이지 않음' },
          { en: 'Love is important in a family.', ko: '가정에서 사랑은 중요하다. (올바른 표현)' },
          { en: '*I like the music, especially jazz.', ko: '나는 음악을, 특히 재즈를 좋아한다. (오류)', note: '음악 일반을 말할 땐 the 없이 music' },
          { en: 'I like music, especially jazz.', ko: '나는 음악을, 특히 재즈를 좋아한다. (올바른 표현)' },
        ],
      },
      {
        type: 'p',
        text: '고유명사(John, Paris)나 추상명사·물질명사(love, water), 집합명사(furniture)는 원칙적으로 셀 수 없으므로 a/an을 쓰지 않습니다. 반면 보통명사(dog, book)는 a/an을 써서 하나임을 표시할 수 있습니다. 다만 문맥에 따라 이 원칙은 얼마든지 깨질 수 있다는 것, 즉 셀 수 없는 명사도 문맥상 보통명사처럼 쓰이면 a/an이 붙을 수 있다는 점을 꼭 기억하세요.',
      },
      {
        type: 'callout',
        title: '관사 핵심 정리',
        items: [
          '영어는 명사 앞에 매번 관사(또는 그 자리)를 채워 "몇 개인지"와 "특정한지 아닌지"를 함께 표시해야 하는 언어다.',
          'the는 특정·공유·유일한 대상, a/an은 처음 등장하거나 하나임을 나타내는 대상에 쓴다.',
          'a/an의 선택은 소리 기준이다 (an hour, a university).',
          '복수형 일반 진술, 교통·식사·게임 관용구에는 관사를 붙이지 않는다.',
          '고유·추상·물질·집합명사는 원칙상 a/an을 쓰지 않지만 문맥상 보통명사처럼 쓰이면 예외가 생긴다.',
          'love, music처럼 무언가를 "일반적으로" 말할 땐 the를 붙이지 않는다 — the를 붙이면 오히려 "이미 정해진 특정한 것"이라는 뜻이 되어 버린다.',
        ],
      },
    ],
  },

  'ch2-3': {
    title: '조수사',
    blocks: [
      {
        type: 'p',
        text: '셀 수 없는 명사를 구체적인 양이나 단위로 표현하고 싶을 때 조수사를 사용합니다. 예를 들어 water는 셀 수 없는 명사지만, a glass of water(물 한 잔)처럼 조수사를 붙이면 구체적인 수량을 나타낼 수 있습니다.',
      },
      { type: 'heading', text: '조수사가 필요한 이유' },
      {
        type: 'p',
        text: '물질명사나 추상명사는 애초에 낱개로 딱 나눌 수 있는 정해진 형태가 없습니다. 물 한 방울과 한 바다는 같은 water이지만 크기가 전혀 다르죠. 그래서 영어는 그릇이나 모양, 단위를 빌려와 "얼마만큼"을 구체적으로 표현합니다. ‘조’는 전체 중 일부를 나누어 표현한다는 뜻이고, ‘수사’는 수량을 나타내는 말입니다. 즉 조수사는 셀 수 없는 명사를 셀 수 있는 형태로 바꿔주는 표현입니다.',
      },
      {
        type: 'transform',
        from: { label: '셀 수 없는 명사', text: 'water' },
        to: { label: '조수사로 수량화', text: 'a glass of water' },
        note: '형태가 없는 물질명사도 조수사를 붙이면 "몇 개"로 셀 수 있게 됩니다.',
      },
      {
        type: 'icon-row',
        caption: '대표적인 조수사',
        items: [
          { icon: '📄', label: 'a piece of paper', sub: '종이 한 장' },
          { icon: '☕', label: 'a cup of coffee', sub: '커피 한 잔' },
          { icon: '🍞', label: 'a loaf of bread', sub: '빵 한 덩어리' },
          { icon: '🧂', label: 'a pinch of salt', sub: '소금 한 꼬집' },
        ],
      },
      { type: 'heading', text: '조수사의 기본 형태' },
      {
        type: 'p',
        text: '조수사는 대부분 "a + 단위 + of + 셀 수 없는 명사"의 형태를 취합니다. 이때 단위 부분(piece, cup, bottle...)은 사실 그 자체로는 얼마든지 셀 수 있는 보통명사이기 때문에, two cups of coffee처럼 단위 부분에만 복수형 -s를 붙입니다.',
      },
      {
        type: 'table',
        caption: '자주 쓰이는 조수사',
        headers: ['조수사', '의미', '예시'],
        rows: [
          ['a piece of', '한 조각의, 약간의', 'a piece of cake, a piece of advice'],
          ['a slice of', '한 조각의', 'a slice of bread, a slice of pizza'],
          ['a cup of', '한 컵의', 'a cup of coffee, a cup of tea'],
          ['a bottle of', '한 병의', 'a bottle of water, a bottle of wine'],
          ['a loaf of', '한 덩어리의', 'a loaf of bread'],
          ['a grain of', '한 알의', 'a grain of rice, a grain of sand'],
          ['a pinch of', '한 꼬집의', 'a pinch of salt'],
          ['a liter of', '한 리터의', 'a liter of milk, a liter of oil'],
          ['a bag of', '한 봉지의', 'a bag of flour, a bag of sugar'],
          ['a bar of', '한 개(막대 모양)의', 'a bar of soap, a bar of chocolate'],
          ['a sheet of', '한 장의', 'a sheet of paper'],
          ['a spoonful of', '한 숟가락의', 'a spoonful of sugar'],
          ['a drop of', '한 방울의', 'a drop of oil, a drop of water'],
        ],
      },
      {
        type: 'note',
        text: '조수사는 명사 그 자체를 바꾸는 것이 아니라, 그 명사를 세는 "그릇"을 앞에 붙이는 방식입니다. 그릇이 바뀌면 수량 단위도 달라집니다: a piece of cake(케이크 한 조각) vs a slice of cake(케이크 한 슬라이스).',
      },
      { type: 'heading', text: '대화 속 조수사' },
      {
        type: 'example',
        items: [
          { en: 'Could I get a cup of coffee and a slice of cake?', ko: '커피 한 잔과 케이크 한 조각 주시겠어요?' },
          { en: 'Sure! Anything else?', ko: '네! 더 필요하신 거 있으세요?' },
          { en: 'Just a bottle of water, please.', ko: '물 한 병만 주세요.' },
          { en: 'Could you pass me a piece of advice before the interview?', ko: '면접 전에 조언 한마디만 해줄래?' },
          { en: 'Sure. Bring two copies of your resume and a bottle of confidence.', ko: '그럼. 이력서 두 장이랑 자신감 한 병 챙겨가.', note: '농담처럼 추상명사 confidence에도 조수사를 붙여 표현' },
          { en: 'Do we need a loaf of bread for breakfast?', ko: '아침 먹을 빵 한 덩어리 필요할까?' },
          { en: 'Yes, and grab a liter of milk too.', ko: '응, 그리고 우유 1리터도 챙겨.' },
        ],
      },
      { type: 'heading', text: '흔한 실수: 조수사 없이 물질명사를 셀 수 있는 것처럼 쓰기' },
      {
        type: 'example',
        items: [
          { en: '*Can I have two waters?', ko: '물 두 개 주실 수 있나요? (오류)', note: 'water 자체에는 복수형을 붙이지 않음' },
          { en: 'Can I have two bottles of water?', ko: '물 두 병 주실 수 있나요? (올바른 표현)' },
          { en: '*She gave me an advice.', ko: '그녀는 나에게 조언 하나를 해주었다. (오류)', note: 'advice는 추상명사, a/an을 직접 붙일 수 없음' },
          { en: 'She gave me a piece of advice.', ko: '그녀는 나에게 조언 하나를 해주었다. (올바른 표현)' },
          { en: "*I'd like a bread, please.", ko: '빵 하나 주세요. (오류)', note: 'bread는 물질명사, 단위를 먼저 정해야 함' },
          { en: "I'd like a loaf of bread, please. / I'd like some bread, please.", ko: '빵 한 덩어리 주세요. (올바른 표현)' },
        ],
      },
      {
        type: 'callout',
        title: '조수사 핵심 정리',
        items: [
          '조수사는 정해진 형태가 없는 물질명사·추상명사를 수량화하는 표현이다.',
          '"a + 단위 + of + 셀 수 없는 명사" 형태로 쓰고, 여러 개일 때는 단위 부분에 -s를 붙인다(two cups of coffee).',
          '같은 명사라도 조수사(그릇)가 바뀌면 나타내는 수량과 뉘앙스가 달라진다.',
          'water, advice, information, bread 같은 명사에는 직접 -s나 a/an을 붙이지 말고 조수사를 먼저 붙여야 한다.',
        ],
      },
    ],
  },

  'ch2-4': {
    title: '대명사 (Pronoun)',
    blocks: [
      {
        type: 'p',
        text: 'Pronoun의 Pro-는 ‘대신하여’라는 뜻입니다. 즉 대명사는 이미 언급된 명사를 대신 가리키는 말로, 문장의 중복을 피하고 흐름을 부드럽게 해줍니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Michael is very happy today because he received some good news from his friend.', ko: '마이클은 오늘 매우 행복하다. 왜냐하면 그는 친구로부터 좋은 소식을 받았기 때문이다.', note: 'he가 Michael을 대신함' },
          { en: 'Sarah loves her new apartment because it has a great view.', ko: '사라는 그녀의 새 아파트를 좋아한다. 왜냐하면 그것은 멋진 전망을 가지고 있기 때문이다.', note: 'it이 apartment를, her가 Sarah를 대신함' },
        ],
      },
      {
        type: 'transform',
        from: { label: '반복되는 명사', text: 'Michael ... Michael' },
        to: { label: '대명사로 대체', text: 'Michael ... he' },
        note: '같은 명사를 계속 반복하면 문장이 어색해지므로, 두 번째부터는 대명사로 바꿔줍니다.',
      },
      {
        type: 'p',
        text: '대명사에는 인칭·지시·관계·부정·소유·재귀·의문대명사 등 여러 종류가 있지만, 이 책에서는 가장 기본이 되는 인칭대명사만 다룹니다.',
      },
      {
        type: 'icon-row',
        caption: '인칭대명사의 세 인칭',
        items: [
          { icon: '🙋', label: '1인칭', sub: '나(I) / 우리(we)' },
          { icon: '👉', label: '2인칭', sub: '너(you)' },
          { icon: '🧍', label: '3인칭', sub: '그·그녀·그것(he/she/it)' },
        ],
      },
      { type: 'heading', text: '인칭대명사의 격 — 왜 자리마다 모양이 달라질까' },
      {
        type: 'p',
        text: '같은 대명사인데도 I / my / me처럼 모양이 계속 바뀌는 이유는, 대명사가 문장에서 하는 역할(자리)에 따라 형태가 달라지기 때문입니다. 이는 고대 영어의 격 변화(주격·소유격·목적격을 각각 다른 형태로 표시하던 습관)가 남긴 흔적입니다. 지금은 명사에서는 이 흔적이 거의 사라졌지만, 대명사에는 여전히 남아 있습니다.',
      },
      {
        type: 'table',
        caption: '인칭대명사표',
        headers: ['인칭', '수', '주격', '소유격', '목적격'],
        rows: [
          ['1인칭', '단수', 'I', 'my', 'me'],
          ['1인칭', '복수', 'we', 'our', 'us'],
          ['2인칭', '단수/복수', 'you', 'your', 'you'],
          ['3인칭', '단수', 'he / she / it', 'his / her / its', 'him / her / it'],
          ['3인칭', '복수', 'they', 'their', 'them'],
        ],
      },
      {
        type: 'note',
        text: '2인칭 you는 단수(너)와 복수(너희들)의 형태가 완전히 같습니다. 그래서 실제 대화에서는 "너 하나를 말하는 건지, 너희 모두를 말하는 건지"가 문맥으로만 구분됩니다. 예를 들어 Are you coming?이라고만 하면 상대가 혼자 오는지 여럿이 오는지는 상황을 봐야 알 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I am learning English.', ko: '나는 영어를 배우고 있다.', note: '주격 — 문장의 주어' },
          { en: 'My favorite book is on the table.', ko: '내가 가장 좋아하는 책이 테이블 위에 있다.', note: '소유격 — 명사 앞에서 소유를 표시' },
          { en: 'She called me yesterday.', ko: '그녀는 어제 나에게 전화했다.', note: '목적격 — 동사의 목적어' },
          { en: 'We are going to the movies tonight.', ko: '우리는 오늘 밤 영화 보러 갈 거야.', note: '주격' },
          { en: 'Our project was a success.', ko: '우리 프로젝트는 성공적이었다.', note: '소유격' },
          { en: 'The teacher gave us homework.', ko: '선생님은 우리에게 숙제를 내주셨다.', note: '목적격' },
          { en: 'You are my best friend.', ko: '너는 내 가장 친한 친구야.', note: '주격 — 상대가 한 명(단수)' },
          { en: 'Is this your coat?', ko: '이거 너희 코트니?', note: '소유격 — 상대가 여러 명(복수)이어도 형태는 같음' },
          { en: 'His car is very fast.', ko: '그의 차는 매우 빠르다.', note: '소유격' },
          { en: 'I gave her the keys.', ko: '나는 그녀에게 열쇠를 주었다.', note: '목적격' },
          { en: 'It is raining outside.', ko: '밖에 비가 오고 있다.', note: '주격' },
          { en: 'The cat licked its paws.', ko: '고양이가 자기 발을 핥았다.', note: '소유격' },
          { en: 'They are studying for exams.', ko: '그들은 시험 공부를 하고 있다.', note: '주격' },
          { en: 'I have known them for years.', ko: '나는 그들을 몇 년째 알고 있다.', note: '목적격' },
        ],
      },
      {
        type: 'p',
        text: '인칭은 ‘누구의 관점에서 말하는가’를 뜻합니다. 1인칭은 화자 자신, 2인칭은 화자가 말을 거는 상대, 3인칭은 대화에 참여하지 않는 사람이나 사물입니다. 수는 하나면 단수, 둘 이상이면 복수입니다. 인칭과 수는 뒤에서 배울 주어-동사의 일치에서 매우 중요한 개념이니 꼭 기억해두세요.',
      },
      { type: 'heading', text: '흔한 실수: 주격과 목적격을 혼동하기' },
      {
        type: 'note',
        text: '두 사람 이상이 함께 등장할 때 목적격을 주어 자리에 잘못 쓰는 실수가 흔합니다. 자리(역할)를 먼저 정하고, 그 역할에 맞는 격을 골라야 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: '*Me and him went to the store.', ko: '나와 그는 가게에 갔다. (오류)', note: '문장의 주어 자리이므로 목적격 me/him이 아니라 주격이 필요' },
          { en: 'He and I went to the store.', ko: '그와 나는 가게에 갔다. (올바른 표현)' },
          { en: '*Give the book to I.', ko: '나에게 그 책을 줘. (오류)', note: '전치사 to의 목적어 자리이므로 목적격이 필요' },
          { en: 'Give the book to me.', ko: '나에게 그 책을 줘. (올바른 표현)' },
          { en: '*Between you and I, this plan will fail.', ko: '너와 나만 아는 건데, 이 계획은 실패할 거야. (오류)', note: '전치사 between의 목적어이므로 I가 아니라 목적격 me' },
          { en: 'Between you and me, this plan will fail.', ko: '너와 나만 아는 건데, 이 계획은 실패할 거야. (올바른 표현)' },
        ],
      },
      {
        type: 'callout',
        title: '대명사 핵심 정리',
        items: [
          '대명사는 이미 언급된 명사를 대신해 중복을 피하고 문장의 흐름을 부드럽게 한다.',
          '인칭대명사는 문장 속 자리(주어/소유/목적어)에 따라 형태가 달라진다.',
          'you는 단수·복수 형태가 같아서 문맥으로만 구분된다는 점을 기억해두자.',
          '인칭(1·2·3)과 수(단수·복수)는 이후 주어-동사 일치에서 핵심 역할을 한다.',
          '두 대상이 함께 나올 때도, 심지어 전치사 뒤에서도, 각 대명사의 격은 그 대명사가 맡은 역할에 따라 개별적으로 정해진다.',
        ],
      },
    ],
  },

  'ch2-5': {
    title: '형용사',
    blocks: [
      {
        type: 'p',
        text: '형용사는 명사의 성질이나 상태를 설명해주는 단어입니다. 명사만으로는 "무엇"인지만 알 수 있지만, 형용사가 붙으면 크기, 모양, 색상, 느낌, 품질, 상태, 수량 같은 구체적인 정보가 더해져 그 명사를 더 좁고 정확하게 그릴 수 있습니다.',
      },
      {
        type: 'icon-row',
        caption: '형용사의 두 가지 용법',
        items: [
          { icon: '🧍', label: '서술적 용법', sub: 'be동사 뒤에서 상태 서술' },
          { icon: '🎨', label: '한정적 용법', sub: '명사 앞에서 성질을 한정' },
        ],
      },
      { type: 'heading', text: '서술적 용법 vs 한정적 용법' },
      {
        type: 'example',
        items: [
          { en: 'She is kind to behave like that.', ko: '그렇게 행동하는 걸 보니 그녀는 참 친절해.', note: '서술적 용법 - be동사 뒤' },
          { en: 'He is busy right now.', ko: '그는 지금 바쁘다.', note: '서술적 용법' },
          { en: 'The cake is delicious.', ko: '이 케이크는 맛있어.', note: '서술적 용법' },
          { en: 'He became angry.', ko: '그는 화가 나 있다.', note: '서술적 용법 — 상태의 변화를 서술' },
          { en: "I'm hungry. Let's order something.", ko: '나 배고파. 뭐 좀 시키자.', note: '서술적 용법 — 지금의 상태' },
          { en: 'She is a kind person.', ko: '그녀는 친절한 사람이야.', note: '한정적 용법 - 명사 앞' },
          { en: 'He is a busy man.', ko: '그는 바쁜 사람이다.', note: '한정적 용법' },
          { en: 'a tall building', ko: '큰 빌딩', note: '한정적 용법 — building의 높이를 직접 한정' },
          { en: 'She has a happy disposition.', ko: '그녀는 긍정적 성향을 지니고 있다.', note: '한정적 용법 — 기본 성향을 한정' },
          { en: 'He is a hungry-looking stray cat.', ko: '그는 배고파 보이는 길고양이다.', note: '한정적 용법 — 고양이의 일반적 인상을 한정' },
        ],
      },
      {
        type: 'p',
        text: '형용사가 be동사 뒤에서 주어에 대해 추가 정보를 서술하면 서술적 용법, 명사 앞에 놓여 명사의 고정적이고 일반적인 성질을 나타내면 한정적 용법입니다. 서술적 용법은 상태를 설명하는 데 중점을 두고, 한정적 용법은 특정한 특성을 강조합니다.',
      },
      {
        type: 'note',
        text: '“지금은 바쁘다”를 말하려면 I am busy right now.(서술적)라고 해야 합니다. I am a busy person.(한정적)이라고 하면 평소에도 바쁜 사람이라는, 그 사람의 일반적 특징을 나타내게 됩니다.',
      },
      { type: 'heading', text: '용법에 따라 뜻이 완전히 달라지는 형용사' },
      {
        type: 'table',
        caption: '용법에 따라 뜻이 달라지는 형용사',
        headers: ['단어', '한정적 의미', '서술적 의미'],
        rows: [
          ['present', '현재의', '참석한'],
          ['right', '오른쪽의', '옳은'],
          ['late', '고인의', '늦은'],
          ['certain', '어떤', '확실한'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'Please hand in your present homework by the end of the day.', ko: '오늘 하루가 끝나기 전에 현재의 숙제를 제출해주세요.', note: 'present(한정적) — 현재의' },
          { en: 'Our teacher is present in the classroom.', ko: '우리 선생님은 교실에 계십니다.', note: 'present(서술적) — 참석한' },
          { en: 'The book was written by the late Professor Smith.', ko: '이 책은 고(故) 스미스 교수님이 쓰신 것입니다.', note: 'late(한정적) — 고인의' },
          { en: 'He is always late for soccer practice.', ko: '그는 항상 축구 연습에 늦습니다.', note: 'late(서술적) — 늦은' },
        ],
      },
      { type: 'heading', text: '형용사가 여러 개 겹칠 때의 순서' },
      {
        type: 'p',
        text: '형용사를 두 개 이상 나열할 때는 순서가 있습니다. 화자의 의견(예쁜, 좋은)이 가장 앞에 오고, 그다음 크기, 연령, 모양, 색깔, 출신, 재료, 용도 순으로 명사에 가까워집니다. 이는 명사와 의미적으로 더 밀접하고 객관적인 성질일수록 명사 바로 앞에 놓이는 영어의 습관 때문입니다.',
      },
      {
        type: 'table',
        caption: '형용사 나열 순서',
        headers: ['순서', '종류', '예시 단어'],
        rows: [
          ['1', '의견(opinion)', 'beautiful, nice'],
          ['2', '크기(size)', 'big, small'],
          ['3', '연령(age)', 'old, young'],
          ['4', '모양(shape)', 'round, square'],
          ['5', '색깔(color)', 'red, blue'],
          ['6', '출신(origin)', 'Italian, Korean'],
          ['7', '재료(material)', 'wooden, cotton'],
          ['8', '용도(purpose)', 'dining, sleeping'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'a beautiful old Italian car', ko: '아름다운 오래된 이탈리아 차', note: '의견 → 연령 → 출신 순서' },
          { en: 'a small round wooden table', ko: '작고 둥근 나무 탁자', note: '크기 → 모양 → 재료 순서' },
          { en: 'a lovely young Korean singer', ko: '사랑스러운 젊은 한국인 가수', note: '의견 → 연령 → 출신 순서' },
          { en: 'a large square cotton blanket', ko: '크고 정사각형인 면 담요', note: '크기 → 모양 → 재료 순서' },
        ],
      },
      { type: 'heading', text: '흔한 실수: 형용사 순서 뒤섞기' },
      {
        type: 'example',
        items: [
          { en: '*a car red fast', ko: '빠른 빨간 차 (오류)', note: '순서 없이 뒤섞임' },
          { en: 'a fast red car', ko: '빠른 빨간 차 (올바른 표현)' },
          { en: '*I bought a wooden beautiful table.', ko: '나는 아름다운 나무 탁자를 샀다. (오류)', note: '재료(wooden)가 의견(beautiful)보다 앞에 옴' },
          { en: 'I bought a beautiful wooden table.', ko: '나는 아름다운 나무 탁자를 샀다. (올바른 표현)' },
          { en: '*a Korean old temple', ko: '오래된 한국 사원 (오류)', note: '출신(Korean)이 연령(old)보다 앞에 옴' },
          { en: 'an old Korean temple', ko: '오래된 한국 사원 (올바른 표현)' },
        ],
      },
      { type: 'heading', text: '-ly로 끝나는 형용사' },
      {
        type: 'p',
        text: '몇몇 형용사는 명사에 -ly를 붙여 만들어집니다. 고대 영어에서 명사에 접미사 -lic을 붙여 특성을 나타냈는데, 이것이 지금의 -ly 형태로 발전한 것입니다. 예) lovely(사랑스러운), friendly(친근한), timely(시기적절한), elderly(연장자의), manly(남자다운), womanly(여자다운), costly(값비싼), daily(매일의), weekly(매주의), monthly(매달의)',
      },
      {
        type: 'example',
        items: [
          { en: 'She wore a lovely dress to the party.', ko: '그녀는 파티에 사랑스러운 드레스를 입었다.' },
          { en: 'Our new teacher is very friendly.', ko: '우리 새 선생님은 매우 친근하다.' },
          { en: 'His arrival was quite timely since we needed extra help.', ko: '우리가 추가 도움이 필요할 때 그가 도착한 것은 매우 시기적절했다.' },
          { en: 'We have a weekly meeting on Mondays.', ko: '우리는 월요일에 매주 회의를 한다.' },
        ],
      },
      {
        type: 'transform',
        from: { label: '명사', text: 'love' },
        to: { label: '형용사(+lic → -ly)', text: 'lovely' },
        note: '고대 영어의 명사+lic(lovelic)이 시간이 지나며 지금의 -ly 형태로 정착했습니다.',
      },
      {
        type: 'callout',
        title: '형용사 핵심 정리',
        items: [
          '형용사는 명사가 주는 정보에 크기·색·상태 같은 구체적인 정보를 더한다.',
          'be동사 뒤에서 서술하면 서술적 용법, 명사 앞에서 꾸미면 한정적 용법이며 일부 단어는 용법에 따라 뜻이 달라진다.',
          '형용사를 여러 개 나열할 때는 의견 → 크기 → 연령 → 모양 → 색깔 → 출신 → 재료 → 용도 순서를 따른다.',
          '-ly로 끝나는 형용사는 고대 영어의 -lic 접미사에서 유래했다(부사의 -ly와는 기원이 다름).',
        ],
      },
    ],
  },

  'ch2-6': {
    title: '부사',
    blocks: [
      {
        type: 'p',
        text: '부사는 동사, 형용사, 다른 부사, 문장 전체를 꾸며주며 어떻게(방법), 언제(시간), 어디서(장소), 왜(이유), 얼마나(정도)에 대한 정보를 더해줍니다.',
      },
      {
        type: 'icon-row',
        caption: '형용사 vs 부사 — 무엇을 꾸미는가',
        items: [
          { icon: '🎨', label: '형용사', sub: '명사의 모습을 묘사' },
          { icon: '🏃💨', label: '부사', sub: '동작·상태를 꾸밈' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'He runs fast.', ko: '그는 빠르게 달린다.', note: '동사 수식' },
          { en: 'He runs very fast.', ko: '그는 매우 빠르게 달린다.', note: '부사 수식' },
          { en: 'She is very pretty.', ko: '그녀는 매우 예쁘다.', note: '형용사 수식' },
          { en: 'Happily, he died.', ko: '다행히도, 그는 죽었다.', note: '문장 전체 수식' },
          { en: 'She speaks English fluently.', ko: '그녀는 영어를 유창하게 말한다.', note: '동사 수식' },
          { en: 'He was extremely tired after the marathon.', ko: '그는 마라톤 후에 극도로 피곤했다.', note: '형용사 수식(정도)' },
          { en: 'Fortunately, no one was hurt in the accident.', ko: '다행히, 그 사고에서 아무도 다치지 않았다.', note: '문장 전체 수식' },
        ],
      },
      { type: 'heading', text: '부사의 위치는 뜻을 바꾼다' },
      {
        type: 'note',
        text: '부사는 자리 이동이 비교적 자유롭지만, 위치에 따라 뜻이 완전히 달라질 수 있습니다. Happily, he died.(그가 죽은 게 다행이다) vs He died happily.(그는 행복하게 죽었다) — happily가 문장 전체를 꾸미는지 동사만 꾸미는지에 따라 뜻이 달라집니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Happily, he died.', ko: '다행히도, 그는 죽었다.', note: '문장 전체를 수식 — "그가 죽은 것이 다행이다"' },
          { en: 'He died happily.', ko: '그는 행복하게 죽었다.', note: '동사만 수식 — "그가 행복한 상태로 죽었다"' },
          { en: 'Clearly, she made a mistake.', ko: '분명히, 그녀는 실수를 했다.', note: '문장 전체를 수식 — 화자의 확신을 나타냄' },
          { en: 'She explained the plan clearly.', ko: '그녀는 계획을 명확하게 설명했다.', note: '동사만 수식 — 설명하는 방식이 명확했다는 뜻' },
        ],
      },
      { type: 'heading', text: '빈도부사' },
      {
        type: 'p',
        text: '빈도부사는 동작이 얼마나 자주 일어나는지를 나타냅니다: always(항상) > usually(보통) > generally(일반적으로) > often(자주) > sometimes(가끔) > occasionally(간혹) > seldom(드물게) > rarely(거의 안 함) > never(절대 안 함).',
      },
      {
        type: 'example',
        items: [
          { en: 'She always finishes her homework before dinner.', ko: '그녀는 저녁 식사 전에 항상 숙제를 마칩니다.' },
          { en: 'He usually takes the bus to school.', ko: '그는 보통 학교에 버스를 타고 갑니다.' },
          { en: 'They often play basketball after school.', ko: '그들은 학교 후에 자주 농구를 합니다.' },
          { en: 'She sometimes helps her mom in the kitchen.', ko: '그녀는 가끔 부엌에서 엄마를 돕습니다.' },
          { en: 'I seldom go to bed after midnight.', ko: '저는 자정 후에 잠자리에 드는 일이 드뭅니다.' },
          { en: 'We rarely watch TV on weekdays.', ko: '우리는 평일에 거의 TV를 보지 않습니다.' },
          { en: 'He never forgets to brush his teeth.', ko: '그는 이를 닦는 것을 절대 잊지 않습니다.' },
        ],
      },
      {
        type: 'p',
        text: '빈도부사의 위치는 동사 종류에 따라 다릅니다: be동사·조동사 뒤(She is always happy.), 일반동사 앞(They often visit their grandparents.). 이는 부사가 꾸며주는 단어 가까이 위치해 의미를 분명히 하려는 영어의 특징 때문입니다.',
      },
      { type: 'heading', text: '형용사를 부사로 만드는 규칙' },
      {
        type: 'p',
        text: '많은 부사는 형용사에 -ly를 붙여 만들지만, 형용사의 끝 철자에 따라 살짝씩 변형이 필요합니다. 이 역시 형용사의 -ly 형성과 마찬가지로 발음의 편의를 위한 변화입니다.',
      },
      {
        type: 'table',
        caption: '형용사 → 부사 변화 규칙',
        headers: ['규칙', '예시'],
        rows: [
          ['그대로 -ly 추가', 'quick → quickly, slow → slowly'],
          ['자음+y → i + ly', 'happy → happily, easy → easily'],
          ['-le로 끝나면 e를 빼고 +y', 'simple → simply, gentle → gently'],
          ['-ic로 끝나면 +ally (예외: public → publicly)', 'basic → basically, tragic → tragically'],
        ],
      },
      {
        type: 'transform',
        from: { label: '형용사', text: 'quick' },
        to: { label: '부사(+ly)', text: 'quickly' },
        note: '형용사 뒤에 -ly를 붙이면 "~하게"라는 방법의 부사가 됩니다.',
      },
      { type: 'heading', text: '형용사와 모양이 같은 부사' },
      {
        type: 'table',
        caption: '형용사/부사 동형 단어',
        headers: ['단어', '부사 의미', '형용사 의미'],
        rows: [
          ['fast', '빠르게', '빠른'],
          ['hard', '열심히, 어렵게', '열심히 하는, 어려운'],
          ['early', '이른 시각에', '이른'],
          ['late', '늦게', '늦은'],
          ['high', '높게', '높은'],
          ['right', '곧바로, 오른쪽으로', '옳은'],
          ['long', '오래, 길게', '오랜, 긴'],
          ['most', '가장 많이', '가장 많은'],
          ['last', '마지막으로', '마지막의'],
          ['enough', '충분히', '충분한'],
          ['well', '잘', '건강한, 좋은'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'She runs fast to catch the bus.', ko: '그녀는 버스를 잡기 위해 빠르게 달린다.', note: 'fast(부사) — 빠르게' },
          { en: 'He drives a fast car.', ko: '그는 빠른 차를 운전한다.', note: 'fast(형용사) — 빠른' },
          { en: 'She reads the most in our class.', ko: '그녀는 우리 반에서 가장 많이 읽는다.', note: 'most(부사) — 가장 많이' },
          { en: 'He is the most talented player on the team.', ko: '그는 팀에서 가장 재능 있는 선수다.', note: 'most(형용사) — 가장 많은' },
          { en: 'I saw him last.', ko: '나는 그를 마지막으로 봤다.', note: 'last(부사) — 마지막으로' },
          { en: 'She was the last person to leave.', ko: '그녀는 떠난 사람 중 마지막이었다.', note: 'last(형용사) — 마지막의' },
        ],
      },
      { type: 'heading', text: '흔한 실수: 형용사를 부사 자리에 쓰기' },
      {
        type: 'example',
        items: [
          { en: '*He drives careful.', ko: '그는 조심스럽게 운전한다. (오류)', note: '동사 drives를 꾸미려면 부사가 필요' },
          { en: 'He drives carefully.', ko: '그는 조심스럽게 운전한다. (올바른 표현)' },
          { en: '*She sings beautiful.', ko: '그녀는 아름답게 노래한다. (오류)' },
          { en: 'She sings beautifully.', ko: '그녀는 아름답게 노래한다. (올바른 표현)' },
          { en: '*He did really good on the test.', ko: '그는 시험을 정말 잘 봤다. (오류)', note: '동사 did를 꾸미려면 부사 well이 필요, good은 형용사' },
          { en: 'He did really well on the test.', ko: '그는 시험을 정말 잘 봤다. (올바른 표현)' },
        ],
      },
      {
        type: 'callout',
        title: '부사 핵심 정리',
        items: [
          '부사는 동사·형용사·다른 부사·문장 전체를 꾸며 방법·시간·장소·이유·정도를 더한다.',
          '같은 부사라도 위치에 따라 무엇을 꾸미는지, 뜻이 달라질 수 있다(Happily, he died. vs He died happily.).',
          '빈도부사는 be동사·조동사 뒤, 일반동사 앞에 위치한다.',
          '형용사 → 부사 변환은 대부분 -ly를 붙이지만 끝 철자에 따라 -ily, -ly(e 삭제), -ally로 달라진다.',
          'fast, hard, early, long, most, last, well처럼 형용사와 부사의 모양이 똑같은 단어도 있으니 문장에서의 역할로 구분해야 한다.',
        ],
      },
    ],
  },

  'ch2-7': {
    title: '동사·감탄사',
    blocks: [
      { type: 'heading', text: '동사' },
      {
        type: 'p',
        text: '동사는 주어와 더불어 문장의 가장 기본적인 요소로, 주어의 동작·상태·발생을 나타냅니다. 문장에서 동사로 쓰이려면 반드시 주어와 시제라는 두 요소를 가지고 있어야 합니다.',
      },
      {
        type: 'icon-row',
        caption: '동사가 나타내는 세 가지',
        items: [
          { icon: '🏃', label: '동작', sub: 'run, jump, write' },
          { icon: '🧘', label: '상태', sub: 'be, seem, belong' },
          { icon: '💥', label: '발생', sub: 'happen, occur' },
        ],
      },
      {
        type: 'table',
        caption: '동사가 나타내는 세 가지',
        headers: ['구분', '설명', '예시'],
        rows: [
          ['동작', '주어의 행동·활동', 'run, jump, write, eat'],
          ['상태', '주어의 상태·성질', 'be, seem, appear, belong'],
          ['발생', '사건·일의 발생', 'happen, occur'],
        ],
      },
      { type: 'heading', text: '자동사와 타동사' },
      {
        type: 'p',
        text: '동사는 목적어가 필요한지에 따라 타동사(목적어 필수)와 자동사(목적어 불필요)로 나뉩니다. 타동사는 그 동작의 대상을 반드시 밝혀야 의미가 완성되는 동사이고, 자동사는 동작 자체로 의미가 끝나는 동사입니다.',
      },
      {
        type: 'sentence-diagram',
        label: 'She likes apples. 의 자리 구조 (타동사)',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'likes' },
          { tag: 'O', text: 'apples' },
        ],
        translation: '그녀는 사과를 좋아한다. — likes는 목적어 apples가 없으면 의미가 완성되지 않는다.',
      },
      {
        type: 'sentence-diagram',
        label: 'The baby sleeps. 의 자리 구조 (자동사)',
        parts: [
          { tag: 'S', text: 'The baby' },
          { tag: 'V', text: 'sleeps' },
        ],
        translation: '아기가 잔다. — sleeps는 목적어 없이도 의미가 완성된다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She likes apples.', ko: '그녀는 사과를 좋아한다.', note: 'apples가 목적어(타동사)' },
          { en: 'He reads a book.', ko: '그는 책을 읽는다.', note: 'a book이 목적어(타동사)' },
          { en: 'I met her yesterday.', ko: '나는 어제 그녀를 만났다.', note: 'her가 목적어(타동사)' },
          { en: 'The baby sleeps.', ko: '아기가 잔다.', note: '목적어 없음(자동사)' },
          { en: 'Birds fly south in the winter.', ko: '겨울에 새들은 남쪽으로 난다.', note: 'south는 목적어가 아니라 방향 부사(자동사)' },
          { en: 'He arrived at the station.', ko: '그는 역에 도착했다.', note: 'arrive는 자동사라 목적어 대신 전치사가 필요' },
        ],
      },
      { type: 'heading', text: '흔한 실수: 자동사·타동사 혼동' },
      {
        type: 'p',
        text: '한국어로는 "~에 대해 논의하다", "~에게 설명하다"처럼 조사가 붙지만, 영어의 타동사는 이미 그 관계를 동사 자체에 담고 있어서 전치사가 필요 없는 경우가 많습니다. 반대로 한국어에는 조사가 없어도 영어에서는 전치사가 필요한 자동사도 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: '*I discussed about the problem.', ko: '나는 그 문제에 대해 논의했다. (오류)', note: 'discuss는 이미 타동사라서 about이 필요 없음' },
          { en: 'I discussed the problem.', ko: '나는 그 문제에 대해 논의했다. (올바른 표현)' },
          { en: '*She married with him.', ko: '그녀는 그와 결혼했다. (오류)', note: 'marry도 타동사, with 없이 목적어를 바로 받음' },
          { en: 'She married him.', ko: '그녀는 그와 결혼했다. (올바른 표현)' },
          { en: '*I explained her the situation.', ko: '나는 그녀에게 상황을 설명했다. (오류)', note: 'explain은 사람을 목적어로 바로 받지 않는 동사' },
          { en: 'I explained the situation to her.', ko: '나는 그녀에게 상황을 설명했다. (올바른 표현)' },
        ],
      },
      { type: 'heading', text: '동사와 시제 맛보기' },
      {
        type: 'p',
        text: '동사는 시제를 통해 사건이 과거·현재·미래 중 언제 일어나는지도 나타냅니다. walk(현재)-walked(과거)-will walk(미래)처럼 형태가 바뀌는 것이 그 예입니다. 시제의 자세한 용법은 뒤에서 다루지만, 동사가 가진 "시간 표시" 기능을 미리 살펴봅니다.',
      },
      {
        type: 'timeline',
        label: '동사의 시제 변화 (walk)',
        now: 50,
        points: [
          { at: 15, text: 'walked', sub: '과거' },
          { at: 50, text: 'walk / walks', sub: '현재' },
          { at: 85, text: 'will walk', sub: '미래' },
        ],
        translation: '같은 동작(walk)도 시점에 따라 동사의 형태가 달라집니다.',
      },
      { type: 'heading', text: '감탄사' },
      {
        type: 'icon-row',
        caption: '감탄사가 드러내는 감정',
        items: [
          { icon: '😲', label: '놀람', sub: 'Wow, Oh' },
          { icon: '🎉', label: '기쁨', sub: 'Yay, Hooray' },
          { icon: '😖', label: '아픔·실수', sub: 'Ouch, Oops' },
        ],
      },
      {
        type: 'p',
        text: '감탄사는 감정이나 태도를 표현하는 단어입니다. 놀라거나 기뻐하거나 슬퍼할 때 씁니다. 감탄사는 문장의 문법적 구조(주어·동사·목적어)와 상관없이 독립적으로 감정을 즉시 드러내기 때문에, 마침표 대신 느낌표와 함께 쓰이는 경우가 많습니다. 예) Wow, Oh, Yay, Oops, Ouch, Hooray',
      },
      {
        type: 'example',
        items: [
          { en: 'Wow, that’s amazing!', ko: '와, 정말 놀라워요!' },
          { en: 'Oops, I made a mistake!', ko: '어머나, 실수했네요!' },
          { en: 'Ouch, that hurts!', ko: '아야, 아파요!' },
          { en: 'Hooray, we won!', ko: '만세, 우리가 이겼어!' },
          { en: 'Oh, I forgot my umbrella.', ko: '아, 우산을 깜빡했어.' },
          { en: 'Yay, it’s finally the weekend!', ko: '야호, 드디어 주말이다!' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'I got the job!', ko: '나 취직했어!' },
          { en: 'Wow, congratulations!', ko: '와, 축하해!' },
          { en: 'I dropped my phone in the sink.', ko: '휴대폰을 세면대에 빠뜨렸어.' },
          { en: 'Oops! Is it still working?', ko: '어머! 아직 작동해?' },
        ],
      },
      {
        type: 'callout',
        title: '동사·감탄사 핵심 정리',
        items: [
          '동사는 주어와 함께 문장의 뼈대를 이루며, 반드시 주어와 시제를 갖는다.',
          '동사는 동작·상태·발생 중 하나를 나타내고, 목적어가 필요한지에 따라 타동사·자동사로 나뉜다.',
          'discuss, marry, explain처럼 한국어 조사(~에 대해, ~와, ~에게)와 영어 동사의 목적어 구조가 항상 일치하지는 않는다.',
          '동사의 형태는 시제(과거·현재·미래)에 따라 달라지며, 이는 다음 장에서 더 자세히 배운다.',
          '감탄사는 문장의 문법적 구조와 무관하게 감정을 즉각적으로 드러내는 독립적인 표현이다.',
        ],
      },
    ],
  },

  'ch2-8': {
    title: '전치사',
    blocks: [
      {
        type: 'p',
        text: 'Preposition의 Pre-는 ‘앞에’, position은 ‘위치’를 뜻합니다. 즉 전치사는 명사 앞에 놓여 명사와 함께 위치·시간·방식·원인 등의 관계를 나타내는 단어입니다.',
      },
      { type: 'heading', text: '전치사가 왜 필요한가' },
      {
        type: 'p',
        text: '명사는 "탁자", "공원" 같은 대상 자체는 알려주지만, 그 대상과 다른 것 사이의 관계(위, 아래, 안, 앞, 시간)는 스스로 말해주지 못합니다. 전치사는 명사와 명사, 또는 명사와 동사 사이에 놓여 이 빈 관계를 채워주는 다리 역할을 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: "I'm going to the park.", ko: '나는 공원에 가고 있는 중이야.', note: 'to가 이동의 방향을 나타냄' },
          { en: 'She is sitting on the chair.', ko: '그녀는 의자에 앉아 있습니다.', note: 'on이 위치를 나타냄' },
          { en: 'He arrived in London.', ko: '그는 런던에 도착했습니다.', note: 'in이 도착한 장소를 나타냄' },
          { en: 'We often have lunch with our friends.', ko: '우리는 종종 친구들과 점심을 합니다.', note: 'with가 동반의 대상을 나타냄' },
          { en: 'He depends on his parents.', ko: '그는 부모님에게 의존한다.', note: 'on이 의존의 대상을 나타냄' },
          { en: 'She is worried about the exam.', ko: '그녀는 시험에 대해 걱정하고 있다.', note: 'about이 걱정의 대상을 나타냄' },
          { en: 'The woman in the red dress', ko: '빨간색 드레스를 입은 여자', note: '명사 the woman을 형용사처럼 꾸며줌' },
          { en: 'He met the woman in the park at noon.', ko: '그는 그 여자를 공원에서 12시에 만났다.', note: 'in the park, at noon 모두 부사 역할' },
        ],
      },
      {
        type: 'note',
        text: '전치사는 문장에서 명사를 꾸며주는 형용사 역할을 하기도 하고, 부가 정보를 더하는 부사 역할을 하기도 합니다.',
      },
      {
        type: 'icon-row',
        caption: '전치사가 나타내는 관계',
        items: [
          { icon: '📍', label: '위치', sub: 'on, under, in' },
          { icon: '⏰', label: '시간', sub: 'at, on, in' },
          { icon: '🌉', label: '방식·원인', sub: 'with, about, by' },
        ],
      },
      { type: 'heading', text: '위치를 나타내는 전치사의 이미지' },
      {
        type: 'table',
        caption: '대표적인 전치사의 이미지',
        headers: ['전치사', '핵심 이미지', '예문'],
        rows: [
          ['near', '어떤 물체에 가까이 있음', 'Our house is near the river.'],
          ['between', '어떤 물체 사이에 있음', 'The playground is between the school and the library.'],
          ['on', '어떤 물체와 접해 있음', 'The book is on the table.'],
          ['under', '어떤 물체 아래에 있음', 'The keys are under the newspaper.'],
          ['into', '물체 안쪽으로 이동 중', 'She walked into the room with a smile.'],
          ['in', '물체 안쪽에 있음', 'There is a surprise gift in the box.'],
          ['in front of', '물체 앞쪽에 있음', 'The car is parked in front of the house.'],
          ['behind', '물체 뒤에 있음', 'The store is behind the post office.'],
        ],
      },
      { type: 'heading', text: '전치사 이미지 다시보기 — 실내 장면' },
      {
        type: 'preposition-diagram-row',
        items: [
          { prep: 'near', caption: '가까이 있음' },
          { prep: 'between', caption: '둘 사이에 있음' },
          { prep: 'on', caption: '표면에 접해 있음' },
          { prep: 'under', caption: '아래에 있음' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'The cafe is near the office.', ko: '카페는 사무실 근처에 있다.' },
          { en: 'The hotel is near the airport.', ko: '그 호텔은 공항 근처에 있다.' },
          { en: 'He sat between his friends during the movie.', ko: '그는 영화를 보는 동안 친구들 사이에 앉았다.' },
          { en: 'The park is between two tall buildings.', ko: '공원은 두 개의 높은 건물 사이에 있다.' },
          { en: 'The cat is on the roof.', ko: '고양이가 지붕 위에 있다.' },
          { en: 'The remote is on the sofa somewhere.', ko: '리모컨은 소파 위 어딘가에 있어.' },
          { en: 'The dog is under the bed.', ko: '개가 침대 아래에 있다.' },
          { en: 'The umbrella is under the chair.', ko: '우산이 의자 아래에 있다.' },
        ],
      },
      { type: 'heading', text: '전치사 이미지 다시보기 — 이동과 공간' },
      {
        type: 'preposition-diagram-row',
        items: [
          { prep: 'into', caption: '안쪽으로 이동' },
          { prep: 'in', caption: '안쪽에 있음' },
          { prep: 'in front of', caption: '앞쪽에 있음' },
          { prep: 'behind', caption: '뒤쪽에 있음' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'The children ran into the garden to play.', ko: '아이들은 놀기 위해 정원 안으로 뛰어들어갔다.' },
          { en: 'He dove into the pool.', ko: '그는 수영장 안으로 다이빙했다.' },
          { en: 'We are sitting in the car.', ko: '우리는 차 안에 앉아 있다.' },
          { en: 'The cat is hiding in the closet.', ko: '고양이가 옷장 안에 숨어 있다.' },
          { en: 'She stood in front of the mirror.', ko: '그녀는 거울 앞에 섰다.' },
          { en: 'The children are playing in front of the school.', ko: '아이들이 학교 앞에서 놀고 있다.' },
          { en: 'Look behind you.', ko: '네 뒤를 봐.' },
          { en: 'The sun sets behind the mountains.', ko: '해가 산 뒤로 진다.' },
        ],
      },
      { type: 'heading', text: '시간을 나타내는 전치사' },
      {
        type: 'p',
        text: '시간을 나타내는 전치사는 위치의 전치사처럼 크기 감각으로 이해하면 쉽습니다. at은 시계의 한 지점(점), on은 특정한 하루(면), in은 그보다 긴 기간(공간)을 가리킵니다.',
      },
      {
        type: 'table',
        caption: 'at / on / in — 시간 전치사',
        headers: ['전치사', '쓰임', '예시'],
        rows: [
          ['at', '특정 시각·지점', 'at 7 o’clock, at noon, at the bus stop'],
          ['on', '요일·특정 날짜', 'on Monday, on July 4th, on my birthday'],
          ['in', '월·계절·연도·긴 기간', 'in July, in 2024, in the morning'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: "Let's meet at noon.", ko: '정오에 만나자.' },
          { en: 'The train leaves at 7 o’clock sharp.', ko: '기차는 정확히 7시에 출발한다.' },
          { en: 'I was born in 2010.', ko: '나는 2010년에 태어났다.' },
          { en: 'We usually go hiking in the fall.', ko: '우리는 보통 가을에 등산을 간다.' },
          { en: 'The meeting is on Monday.', ko: '그 회의는 월요일에 있다.' },
          { en: 'Her birthday party is on July 4th.', ko: '그녀의 생일 파티는 7월 4일에 있다.' },
        ],
      },
      { type: 'heading', text: '흔한 실수: 전치사 오용' },
      {
        type: 'example',
        items: [
          { en: '*I arrived to the station.', ko: '나는 역에 도착했다. (오류)', note: 'arrive는 at/in과 함께 쓰이지, to와 쓰지 않음' },
          { en: 'I arrived at the station.', ko: '나는 역에 도착했다. (올바른 표현)' },
          { en: '*She is good in math.', ko: '그녀는 수학을 잘한다. (오류)', note: '"~을 잘하다"는 good at' },
          { en: 'She is good at math.', ko: '그녀는 수학을 잘한다. (올바른 표현)' },
          { en: "*I'll see you in Monday.", ko: '월요일에 보자. (오류)', note: '특정 요일에는 on을 씀' },
          { en: "I'll see you on Monday.", ko: '월요일에 보자. (올바른 표현)' },
          { en: '*He is interested about music.', ko: '그는 음악에 관심이 있다. (오류)', note: '"~에 관심 있다"는 interested in' },
          { en: 'He is interested in music.', ko: '그는 음악에 관심이 있다. (올바른 표현)' },
        ],
      },
      {
        type: 'callout',
        title: '전치사 핵심 정리',
        items: [
          '전치사는 명사 혼자서는 나타낼 수 없는 위치·시간·방식·원인의 관계를 드러낸다.',
          '전치사구는 문장에서 형용사 역할(명사 수식)이나 부사 역할(동사·문장 수식)을 한다.',
          '위치 전치사는 near, between, on, under, into, in, in front of, behind처럼 각자 고유한 공간 이미지를 갖는다.',
          '시간 전치사는 at(점) < on(하루) < in(더 긴 기간) 순으로 범위가 커진다.',
          'arrive at/in, good at, interested in처럼 동사·형용사와 짝을 이루는 전치사는 통째로 외워야 한다.',
        ],
      },
    ],
  },

  'ch2-9': {
    title: '접속사',
    blocks: [
      {
        type: 'p',
        text: '접속사는 단어, 구(단어의 조합), 절(문장)을 연결하는 역할을 합니다. 접속사를 사용해 문장의 요소를 연결하고 관계를 나타내며, 문장 구조를 완성할 수 있습니다.',
      },
      { type: 'heading', text: '접속사가 왜 필요한가' },
      {
        type: 'p',
        text: '전치사가 명사와 다른 말 사이의 관계를 나타낸다면, 접속사는 단어와 단어, 절과 절 사이의 논리적 관계(추가, 대조, 선택, 원인, 조건 등)를 나타냅니다. 접속사가 없으면 여러 생각을 하나의 문장으로 자연스럽게 엮을 방법이 없습니다.',
      },
      {
        type: 'transform',
        from: [
          { label: '문장 1', text: 'I like coffee.' },
          { label: '문장 2', text: 'I like tea.' },
        ],
        to: { label: '접속사로 연결', text: 'I like coffee and tea.' },
        note: '접속사 and는 두 개의 생각(또는 단어)을 하나의 문장으로 이어줍니다.',
      },
      {
        type: 'icon-row',
        caption: '접속사의 두 가지 역할',
        items: [
          { icon: '🔗', label: '등위접속사', sub: '대등한 것을 연결 (and, but, or)' },
          { icon: '⛓️', label: '종속접속사', sub: '한 절을 다른 절에 종속 (because, if)' },
        ],
      },
      { type: 'heading', text: '등위접속사 — 대등한 것을 연결한다' },
      {
        type: 'table',
        caption: '대표적인 등위접속사',
        headers: ['접속사', '의미/역할', '예문'],
        rows: [
          ['and', '두 개념을 추가 연결', 'I like coffee and tea.'],
          ['but', '대조·상반되는 개념', 'She is intelligent, but sometimes she makes mistakes.'],
          ['or', '둘 중 하나의 선택', 'Do you want coffee or tea?'],
          ['so', '앞 내용의 결과', 'I was tired, so I went to bed early.'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'Are you free this weekend?', ko: '이번 주말에 시간 있어?' },
          { en: 'I have a meeting on Saturday, but I’m free on Sunday.', ko: '토요일에 회의가 있지만, 일요일엔 시간이 있어.', note: 'but — 대조되는 두 사실을 연결' },
          { en: 'Should we watch a movie or go hiking?', ko: '영화를 볼까, 아니면 등산을 갈까?', note: 'or — 둘 중 선택' },
          { en: 'It looked like rain, so we brought umbrellas.', ko: '비가 올 것 같아서 우산을 챙겼어.', note: 'so — 앞 내용의 결과' },
        ],
      },
      { type: 'heading', text: '종속접속사 — 한 절을 다른 절에 종속시킨다' },
      {
        type: 'p',
        text: '종속접속사는 한 절을 독립적으로 존재할 수 없는, 다른 절에 딸린 절(종속절)로 만들어줍니다. 원인, 조건, 시간, 양보(비록 ~이지만) 등의 관계를 나타냅니다. 종속절은 문장 앞에도, 뒤에도 자유롭게 놓일 수 있습니다.',
      },
      {
        type: 'table',
        caption: '대표적인 종속접속사',
        headers: ['접속사', '의미/역할', '예문'],
        rows: [
          ['because', '원인·이유', 'I stayed home because it was raining.'],
          ['although / though', '양보(비록 ~이지만)', 'Although it was raining, we went out.'],
          ['if', '조건', 'If it rains tomorrow, we will cancel the picnic.'],
          ['when', '시간', 'When she arrived, everyone was already asleep.'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'Because it was raining, I stayed home.', ko: '비가 왔기 때문에, 나는 집에 있었다.', note: '종속절이 문장 앞에 위치' },
          { en: 'I stayed home because it was raining.', ko: '나는 집에 있었다, 비가 왔기 때문에.', note: '같은 뜻이지만 종속절이 문장 뒤에 위치' },
          { en: 'If you finish your homework, you can watch TV.', ko: '숙제를 끝내면, TV를 볼 수 있어.', note: '조건을 나타내는 if절' },
          { en: 'When the bell rang, all the students stood up.', ko: '벨이 울렸을 때, 모든 학생들이 일어섰다.', note: '시간을 나타내는 when절' },
        ],
      },
      { type: 'heading', text: '명사절 접속사 that' },
      {
        type: 'example',
        items: [
          { en: 'I believe that she will succeed.', ko: '나는 그녀가 성공할 것이라고 믿는다.', note: 'that절이 believe의 목적어(명사절) 역할' },
          { en: 'It is true that he made a mistake.', ko: '그가 실수했다는 것은 사실이다.', note: 'that절이 진짜 주어 역할을 하는 명사절' },
          { en: 'The fact that she apologized surprised everyone.', ko: '그녀가 사과했다는 사실이 모두를 놀라게 했다.', note: 'that절이 fact를 보충 설명하는 명사절' },
        ],
      },
      {
        type: 'note',
        text: '어떤 접속사를 쓰는지에 따라 문장의 의미와 관계가 달라지므로, 접속사는 영어 문법에서 매우 중요한 역할을 합니다.',
      },
      { type: 'heading', text: '흔한 실수: 접속사를 중복해서 쓰기' },
      {
        type: 'p',
        text: '한국어는 "비록 ~이지만"처럼 앞뒤에 짝을 이루는 접속어를 함께 쓰지만, 영어에서는 although(비록 ~이지만)와 but(하지만) 중 하나만 써야 합니다. 두 개를 동시에 쓰면 의미가 중복되어 어색한 문장이 됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: '*Although it was raining, but we went out.', ko: '비록 비가 왔지만, 우리는 나갔다. (오류)', note: 'although와 but을 동시에 쓸 수 없음' },
          { en: 'Although it was raining, we went out.', ko: '비록 비가 왔지만, 우리는 나갔다. (올바른 표현)' },
          { en: '*Because I was tired, so I went to bed early.', ko: '피곤해서 일찍 잠자리에 들었다. (오류)', note: 'because와 so를 동시에 쓸 수 없음' },
          { en: 'Because I was tired, I went to bed early.', ko: '피곤해서 일찍 잠자리에 들었다. (올바른 표현)' },
          { en: '*Even though he apologized, but she was still angry.', ko: '그가 사과했지만, 그녀는 여전히 화가 나 있었다. (오류)', note: 'even though와 but을 동시에 쓸 수 없음' },
          { en: 'Even though he apologized, she was still angry.', ko: '그가 사과했지만, 그녀는 여전히 화가 나 있었다. (올바른 표현)' },
        ],
      },
      {
        type: 'callout',
        title: '접속사 핵심 정리',
        items: [
          '접속사는 단어·구·절 사이의 논리적 관계(추가, 대조, 선택, 원인, 조건 등)를 나타낸다.',
          '등위접속사(and, but, or, so)는 문법적으로 대등한 요소를 연결한다.',
          '종속접속사(because, although, if, when)는 한 절을 다른 절에 딸린 종속절로 만들며, 문장 앞뒤 어디에나 놓일 수 있다.',
          'that은 절 전체를 하나의 명사처럼 만들어 문장의 주어·목적어·보충 설명 자리에 넣을 수 있게 한다.',
          'although...but, because...so, even though...but처럼 뜻이 겹치는 접속사를 한 문장에 동시에 쓰지 않는다.',
        ],
      },
    ],
  },
}
