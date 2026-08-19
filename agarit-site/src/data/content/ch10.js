export const ch10 = {
  'ch10-1': {
    title: '현재시제와 현재진행형',
    blocks: [
      {
        type: 'p',
        text: '**현재시제는 반복적으로 일어나는 일, 습관, 변하지 않는 사실을 나타낼 때 사용합니다.** 즉, 지금 이 순간에 일어나고 있는 일이 아니라, 시간이 흘러도 계속 유지되는 사실이나 반복되는 행동을 말할 때 현재시제를 씁니다. 오늘 아침에 실제로 일찍 일어났는지와 상관없이, "나는 보통 일찍 일어난다"라는 습관 자체를 말하는 것이 핵심입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I get up early.', ko: '나는 (보통) 일찍 일어난다.', note: '평소의 습관을 나타내는 현재시제' },
          { en: 'The earth goes around the sun.', ko: '지구는 태양 주위를 돈다.', note: '변하지 않는 과학적 사실' },
          { en: 'She works at a bank.', ko: '그녀는 은행에서 근무한다.', note: '직업처럼 반복적으로 지속되는 사실' },
          { en: 'My father drives to work every day.', ko: '아버지는 매일 차로 출근하신다.', note: '반복되는 습관' },
          { en: 'Water boils at 100°C.', ko: '물은 섭씨 100도에서 끓는다.', note: '조건이 바뀌지 않는 한 항상 성립하는 사실' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '현재시제 — 변하지 않는 사실',
        parts: [
          { tag: 'S', text: 'The earth' },
          { tag: 'V', text: 'goes' },
          { tag: 'M', text: 'around the sun.' },
        ],
        translation: 'The earth goes around the sun. (특정 시점이 아니라 언제나 성립하는 과학적 사실을 나타내는 현재시제)',
      },
      {
        type: 'timeline',
        label: '현재시제 — 반복되는 습관·변하지 않는 사실',
        now: 50,
        points: [
          { at: 8, text: '일어난다' },
          { at: 26, text: '일어난다' },
          { at: 44, text: '일어난다' },
          { at: 62, text: '일어난다' },
          { at: 80, text: '일어난다' },
        ],
        translation: 'I get up early. — 특정 순간이 아니라 시간축 전체에 걸쳐 반복되는 점들로 표현됩니다. "지금" 이 순간에 일어나고 있는 동작이 아닙니다.',
      },
      {
        type: 'note',
        text: '**현재시제는 "지금 일어나고 있는 일"을 나타내지 않습니다.** 위 타임라인처럼 현재시제가 그리는 것은 과거부터 미래까지 죽 이어지는 반복의 점선이지, "지금" 표시 위의 한 사건이 아닙니다. 지금 이 순간에 진행 중인 일을 말하고 싶다면 현재진행형을 사용해야 합니다.',
      },
      { type: 'heading', text: '주어가 he/she/it일 때 — 동사 끝에 -(e)s 붙이기' },
      {
        type: 'p',
        text: '현재시제 문장에서 주어가 3인칭 단수(he, she, it, 또는 한 사람·한 사물의 이름)일 때는 동사 끝에 -(e)s를 붙입니다. **이 규칙은 나머지 주어(I, you, we, they)와 he/she/it을 형태로 구분해 주는 유일한 표시이므로, 3인칭 단수 주어 문장에서 절대 빠뜨려서는 안 됩니다.** 예를 들어 I eat lunch와 She eats lunch는 동사 끝의 -s 하나로만 주어의 인칭이 구분되는 셈입니다.',
      },
      {
        type: 'table',
        caption: '3인칭 단수 동사에 -(e)s 붙이는 규칙',
        headers: ['형태', '규칙', '예시'],
        rows: [
          ['대부분의 동사', '끝에 -s만 붙인다', 'eat → eats, drink → drinks, start → starts, leave → leaves'],
          ['-sh, -ch, -s, -ss, -x, -z, -o로 끝나는 동사', '발음을 위해 -es를 붙인다', 'watch → watches, wash → washes, cross → crosses, fix → fixes, buzz → buzzes, go → goes, do → does'],
          ['자음 + y로 끝나는 동사', 'y를 i로 바꾸고 -es를 붙인다', 'study → studies, worry → worries, cry → cries, carry → carries'],
          ['모음 + y로 끝나는 동사', 'y를 바꾸지 않고 그대로 -s만 붙인다', 'play → plays, enjoy → enjoys, buy → buys'],
        ],
      },
      {
        type: 'note',
        text: '두 번째 규칙에서 -es를 붙이는 이유는 발음의 편의 때문입니다. watch처럼 이미 마찰음·파찰음으로 끝나는 동사에 -s만 붙이면(watchs) 발음이 뭉개져 소리 내기 어렵기 때문에, 모음 e를 하나 끼워 넣어(watches) 하나의 음절로 또렷하게 발음할 수 있게 만드는 것입니다. 세 번째와 네 번째 규칙은 y 앞의 글자가 자음이냐 모음이냐로 갈립니다 — study의 y 앞은 자음 d이므로 studies가 되지만, play의 y 앞은 모음 a이므로 그대로 plays가 됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He goes to bed at ten.', ko: '그는 10시에 잠자리에 든다.', note: '-o로 끝나는 동사 go → goes' },
          { en: 'She teaches English to six students.', ko: '그녀는 여섯 명의 학생에게 영어를 가르친다.', note: '-ch로 끝나는 동사 teach → teaches' },
          { en: 'Tom does the dishes every evening.', ko: 'Tom은 매일 저녁 설거지를 한다.', note: '-o로 끝나는 동사 do → does' },
          { en: 'My sister worries about everything.', ko: '내 여동생은 모든 것을 걱정한다.', note: '자음+y로 끝나는 worry → worries' },
          { en: 'He always plays computer games after school.', ko: '그는 방과 후에 항상 컴퓨터 게임을 한다.', note: '모음+y로 끝나는 play는 y를 바꾸지 않고 plays' },
        ],
      },
      { type: 'heading', text: 'be동사와 have — 불규칙하게 변하는 동사' },
      {
        type: 'p',
        text: '일반동사는 -(e)s만 붙이면 되지만, be동사와 have는 규칙을 따르지 않고 형태 자체가 완전히 바뀌는 불규칙 동사입니다. **be동사는 주어에 따라 am/are/is 세 가지 형태로 갈라지고, have는 3인칭 단수일 때 haves가 아니라 has로 바뀝니다.** 두 동사 모두 매우 자주 쓰이는 만큼, 규칙 동사와 헷갈리지 않도록 따로 외워두어야 합니다.',
      },
      {
        type: 'table',
        caption: 'be동사와 have의 현재시제 변화',
        headers: ['주어', 'be동사', 'have'],
        rows: [
          ['I', 'am', 'have'],
          ['You / We / They', 'are', 'have'],
          ['He / She / It', 'is', 'has'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'I am 25 years old.', ko: '나는 25살이다.' },
          { en: 'You are a chef.', ko: '너는 요리사이다.' },
          { en: 'He is happy.', ko: '그는 행복하다.' },
          { en: 'I have a car.', ko: '나는 차가 있다.' },
          { en: 'She has a yard.', ko: '그녀는 마당이 있다.', note: 'have의 3인칭 단수형은 haves가 아니라 has' },
          { en: 'Sarah has coffee with Tom every Tuesday.', ko: 'Sarah는 매주 화요일에 Tom과 커피를 마신다.', note: 'have가 "가지다"가 아니라 "먹다/마시다"의 뜻으로 쓰인 경우도 3인칭 단수는 has' },
        ],
      },
      { type: 'heading', text: '자주 하는 실수 — do를 불필요하게 넣는 것' },
      {
        type: 'p',
        text: '현재시제 긍정문을 만들 때 흔히 저지르는 실수는 조동사 do를 불필요하게 집어넣는 것입니다. **do/does는 오직 부정문과 의문문을 만들 때만 필요한 조동사이며, 긍정문에서는 절대 쓰지 않습니다.** 반대로 3인칭 단수 주어 문장에서 동사에 -(e)s 붙이는 것을 빠뜨리는 실수도 이만큼 흔하므로 함께 짚어둡니다.',
      },
      {
        type: 'table',
        caption: '3인칭 단수·do 사용에서 흔한 실수',
        headers: ['잘못된 표현', '바른 표현', '설명'],
        rows: [
          ['*I do eat lunch at noon every day.', 'I eat lunch at noon every day.', '긍정문에는 do가 필요 없다. do는 부정문(don\'t)·의문문(Do you ~?)에만 쓴다.'],
          ['*He start work at 11am.', 'He starts work at 11am.', '주어가 3인칭 단수(he)이므로 동사에 -s를 반드시 붙여야 한다.'],
          ['*She go to bed early.', 'She goes to bed early.', '-o로 끝나는 동사는 -es를 붙여야 한다(goes).'],
          ['*He haves a cold.', 'He has a cold.', 'have의 3인칭 단수형은 규칙(-s)이 아니라 불규칙 형태 has이다.'],
        ],
      },
      { type: 'heading', text: '현재진행형: 지금 이 순간에만 일어나는 일' },
      {
        type: 'p',
        text: '현재진행형은 지금 이 순간에 진행되고 있는 일을 나타낼 때 사용합니다. **「be동사 + 일반동사의 ing형」의 형태로 만들며, "~하고 있다", "~하는 중이다"로 해석합니다.** 습관이 아니라 말하는 바로 그 시점에만 걸려 있는, 시작과 끝이 있는 짧은 사건이라는 점이 현재시제와 근본적으로 다릅니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I am doing my homework.', ko: '나는 (지금) 숙제를 하는 중이다.', note: '전화를 걸었을 때 "지금 뭐 해?"에 대한 대답' },
          { en: 'She is reading a book.', ko: '그녀는 (지금) 책을 읽고 있다.', note: '지금 이 순간의 장면 묘사' },
          { en: 'They are playing soccer.', ko: '그들은 (지금) 축구를 하고 있다.', note: '창밖을 보며 실시간으로 말하는 상황' },
          { en: 'Look! It is raining.', ko: '봐! 비가 오고 있어.', note: '지금 목격하고 있는 순간적 사건' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '현재진행형 — 지금 진행 중인 동작',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'am doing' },
          { tag: 'O', text: 'my homework.' },
        ],
        translation: 'I am doing my homework. (be동사 + 일반동사ing = 말하는 바로 그 순간에 진행되고 있는 동작)',
      },
      {
        type: 'timeline',
        label: '현재진행형 — 지금 이 순간만의 사건',
        now: 50,
        range: { from: 42, to: 58, text: '숙제를 하고 있다' },
        points: [],
        translation: 'I am doing my homework. — "지금" 마커를 감싸는 짧은 구간 하나로만 표현됩니다. 이 구간은 곧 끝나며, 시간축 전체에 반복되지 않습니다.',
      },
      { type: 'heading', text: '두 타임라인 비교하기' },
      {
        type: 'p',
        text: '두 타임라인을 나란히 놓고 보면 차이가 분명해집니다. **현재시제는 점들이 시간축 전체에 흩어져 있는 "반복 패턴"이고, 현재진행형은 "지금" 표시 바로 위에만 걸려 있는 "짧은 구간"입니다.** 같은 동사라도 이 둘 중 어느 그림에 해당하느냐에 따라 문장의 의미가 완전히 달라집니다.',
      },
      {
        type: 'icon-row',
        caption: '한눈에 보는 현재시제 vs 현재진행형',
        items: [
          { icon: '🔁', label: '현재시제', sub: '반복·습관' },
          { icon: '⏱️', label: '현재진행형', sub: '지금 이 순간' },
          { icon: '🧠', label: 'know', sub: '진행형 불가(상태)' },
          { icon: '❤️', label: 'like', sub: '진행형 불가(상태)' },
          { icon: '🏠', label: 'belong', sub: '진행형 불가(상태)' },
        ],
      },
      { type: 'heading', text: '같은 동사, 다른 의미: 현재시제 vs 현재진행형' },
      {
        type: 'p',
        text: '아래 예문들은 똑같은 동사를 쓰고 있지만, 시제만 바뀌었을 뿐인데 의미의 결이 미묘하게 달라집니다. 특히 **live, work, study처럼 원래 상태에 가까운 동사를 진행형으로 쓰면 "지금은 그렇지만 영원하지는 않은, 일시적인 상황"이라는 뉘앙스가 더해집니다.**',
      },
      {
        type: 'example',
        items: [
          { en: 'I live in Seoul.', ko: '나는 서울에 산다.', note: '현재시제 — 변하지 않는 거주지, 지속적인 사실' },
          { en: 'I am living in Seoul this month.', ko: '나는 이번 달에 (임시로) 서울에 살고 있다.', note: '현재진행형 — 곧 끝날 수도 있는 일시적 상황' },
          { en: 'He plays soccer.', ko: '그는 (보통) 축구를 한다.', note: '현재시제 — 반복적인 취미·습관' },
          { en: 'He is playing soccer.', ko: '그는 (지금) 축구를 하고 있다.', note: '현재진행형 — 바로 지금 진행 중인 동작' },
          { en: 'She works at a café.', ko: '그녀는 카페에서 일한다.', note: '현재시제 — 원래 하는 일, 안정적인 직업' },
          { en: 'She is working at a café this summer.', ko: '그녀는 이번 여름에만 카페에서 일하고 있다.', note: '현재진행형 — 여름 한 철만의 임시직' },
          { en: 'I study English.', ko: '나는 영어를 공부한다.', note: '현재시제 — 꾸준히 이어지는 학습 습관' },
          { en: 'I am studying English for the exam this week.', ko: '나는 이번 주에 시험 때문에 영어를 공부하고 있다.', note: '현재진행형 — 이번 주에 한정된 특정 사건' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '현재시제 — 지속적 사실',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'live' },
          { tag: 'M', text: 'in Seoul.' },
        ],
        translation: 'I live in Seoul. (변하지 않는 거주지를 나타내는 현재시제)',
      },
      {
        type: 'sentence-diagram',
        label: '현재진행형 — 일시적 상황',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'am living' },
          { tag: 'M', text: 'in Seoul' },
          { tag: 'M', text: 'this month.' },
        ],
        translation: 'I am living in Seoul this month. (같은 동사라도 진행형을 쓰면 곧 끝날 수 있는 임시적 상황이라는 뉘앙스가 더해짐)',
      },
      {
        type: 'note',
        text: '**핵심은 "지금도 그런가?"가 아니라 "이것이 앞으로도 계속될 성격의 일인가, 곧 끝날 성격의 일인가"입니다.** I live in Seoul이라고 말하는 사람도 지금 이 순간 서울에 물리적으로 있지 않을 수 있습니다(예: 잠깐 여행 중). 반대로 I am living in Seoul this month는 지금 실제로 서울에 있으면서도 "임시"라는 정보를 함께 전달합니다.',
      },
      { type: 'heading', text: '일반동사의 ing형 만드는 방법' },
      {
        type: 'p',
        text: '현재진행형을 만들려면 일반동사를 ing형으로 바꾸어야 합니다. ing형을 만드는 규칙은 동사의 끝 형태에 따라 다음과 같이 나뉩니다.',
      },
      {
        type: 'table',
        caption: 'ing형 만드는 규칙',
        headers: ['규칙', '설명', '예시'],
        rows: [
          ['① 기본 규칙', '동사에 그대로 -ing를 붙인다.', 'play → playing, read → reading'],
          ['② -e로 끝나는 동사', '-e를 제거하고 -ing를 붙인다.', 'make → making, take → taking'],
          ['③ -ie로 끝나는 동사', '-ie를 -y로 바꾸고 -ing를 붙인다.', 'lie → lying, die → dying'],
          ['④ 단모음+단자음으로 끝나는 동사', '마지막 자음을 한 번 더 쓰고 -ing를 붙인다.', 'run → running, sit → sitting'],
        ],
      },
      {
        type: 'note',
        text: '동사의 끝이 -ie로 끝날 때 그대로 -ing를 붙이면 lie가 lieing처럼 되어 철자가 복잡해지고 발음도 불명확해집니다. 발음하기 어려울 뿐만 아니라 철자도 비정상적으로 보이기 때문에, 이를 피하려고 **-ie를 -y로 바꾼 뒤 -ing를 붙여 lying처럼 만듭니다.** 이렇게 하면 발음이 명확해지고 자연스러워집니다.',
      },
      {
        type: 'note',
        text: '단모음이란 짧고 간단하게 발음되는 모음(sit의 i, run의 u, get의 e 등)을 말하고, 단자음이란 단어 끝에 오는 하나의 자음 발음(sit의 t, run의 r, hop의 p 등)을 말합니다. 이 규칙은 ing형으로 바뀔 때 발음이 원래 단어와 다르게 변하는 것을 막기 위한 것입니다. 예를 들어 sit에 그대로 -ing를 붙이면 siting이 되어 발음이 /saɪtɪŋ/으로 바뀌므로, **t를 한 번 더 써서 sitting(/sɪtɪŋ/)으로 만들어 원래 발음을 지킵니다.**',
      },
      {
        type: 'note',
        text: '④번 규칙은 2음절 이상의 단어에도 똑같이 적용되지만, 한 가지 조건이 더 붙습니다. **마지막 음절에 강세(stress)가 있을 때만 자음을 겹쳐 쓰고, 강세가 없으면 그대로 -ing만 붙입니다.** 예를 들어 shop은 1음절이라 강세가 당연히 마지막 음절에 있으므로 shopping이 되지만, open처럼 2음절이면서 강세가 앞쪽(ó·pen)에 있는 단어는 자음을 겹치지 않고 opening으로 씁니다. 같은 이유로 visit(ví·sit)도 visiting이지 visitting이 아닙니다. 즉 “단모음+단자음” 규칙의 진짜 조건은 자음의 개수가 아니라 그 음절에 강세가 실리는가입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'They are opening a store next week.', ko: '그들은 다음 주에 가게를 연다.', note: 'open은 강세가 앞 음절에 있어 자음을 겹치지 않음 → opening' },
          { en: 'I am visiting my grandmother this weekend.', ko: '나는 이번 주말에 할머니 댁을 방문하는 중이다.', note: 'visit도 강세가 앞 음절이라 visitting이 아닌 visiting' },
          { en: 'Terry is mopping the floor.', ko: 'Terry는 바닥을 닦고 있다.', note: '1음절 mop은 강세가 그 음절에 있으므로 mopping' },
        ],
      },
      { type: 'heading', text: '왜 어떤 동사는 진행형으로 쓰지 않을까: 상태동사의 원리' },
      {
        type: 'p',
        text: '모든 동사가 진행형으로 쓸 수 있는 것은 아닙니다. 진행형(-ing)이라는 형태 자체가 "지금 이 순간에 시작되어 곧 끝날, 진행되고 있는 동작"을 그립니다. 그런데 know, like, belong, want처럼 동작이 아니라 상태·감정·소유·인식을 나타내는 동사는 애초에 "시작하고 끝나는 동작"이 아니라 "계속 그런 상태로 있는 것"을 나타냅니다. 즉 "지금 알고 있는 중이다"라는 말 자체가 어색한 것처럼, **상태동사(state verb)에 -ing를 붙이는 것은 "진행"이라는 개념과 "지속적인 상태"라는 개념이 서로 충돌하기 때문에 원칙적으로 성립하지 않습니다.**',
      },
      {
        type: 'table',
        caption: '진행형으로 쓰지 않는 대표적인 상태동사',
        headers: ['분류', '동사', '왜 진행형이 어색한가', '예문'],
        rows: [
          ['인식·생각', 'know, believe, understand, think(~라고 생각하다), remember', '아는 것은 순간적으로 시작·종료되는 동작이 아니라 머릿속에 계속 유지되는 상태', 'I know his name. (그의 이름을 안다.)'],
          ['감정·선호', 'like, love, hate, want, prefer, wish', '감정은 "잠깐 하다가 마는" 동작이 아니라 마음속에 지속되는 상태', 'She loves music. (그녀는 음악을 좋아한다.)'],
          ['소유', 'have(가지다), own, belong, possess', '무언가를 소유한 상태는 특정 순간에만 벌어지는 사건이 아니라 계속 유지되는 관계', 'This bike belongs to me. (이 자전거는 내 것이다.)'],
          ['감각·상태', 'seem, look(~처럼 보이다), resemble, need, exist', '겉모습이나 필요는 시시각각 "행해지는" 것이 아니라 그 자체로 존재하는 상태', 'He seems tired. (그는 피곤해 보인다.)'],
          ['기타 지각', 'hear, see(보다, 지각동사로서), smell, taste(~한 맛이 나다)', '감각기관이 저절로 인지하는 상태이지, 의식적으로 반복·진행하는 동작이 아님', 'This soup tastes salty. (이 수프는 짠맛이 난다.)'],
        ],
      },
      { type: 'heading', text: '흔히 하는 실수: 상태동사를 진행형으로 쓰기' },
      {
        type: 'p',
        text: '학습자들이 가장 자주 저지르는 실수 중 하나가 바로 이 상태동사를 습관적으로 진행형에 넣는 것입니다. "지금"이라는 말에 이끌려 무의식적으로 be동사 + ing를 붙이지만, **상태동사는 "지금"이라는 시점과 상관없이 이미 계속되고 있는 상태이므로 진행형이 필요 없습니다.** 아래에서 잘못된 문장과 올바른 문장을 비교해봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I am knowing him.', ko: '(오류) 나는 그를 알고 있는 중이다.', note: '✗ know는 상태동사 — 진행형 불가' },
          { en: 'I know him.', ko: '나는 그를 안다.', note: '✓ 올바른 표현' },
          { en: 'This bag is belonging to her.', ko: '(오류) 이 가방은 그녀에게 속하고 있는 중이다.', note: '✗ belong은 상태동사 — 진행형 불가' },
          { en: 'This bag belongs to her.', ko: '이 가방은 그녀의 것이다.', note: '✓ 올바른 표현' },
          { en: 'I am wanting a new phone.', ko: '(오류) 나는 새 폰을 원하고 있는 중이다.', note: '✗ want는 상태동사 — 진행형 불가' },
          { en: 'I want a new phone.', ko: '나는 새 폰을 원한다.', note: '✓ 올바른 표현' },
        ],
      },
      {
        type: 'note',
        text: '일부 동사는 상태동사로 쓰일 때와 동작동사로 쓰일 때 의미가 달라집니다. 예를 들어 have가 "가지다(상태)"의 뜻일 때는 진행형을 쓰지 않지만, "먹다(동작)"의 뜻일 때는 진행형이 가능합니다(I am having lunch. 나는 점심을 먹고 있다). 마찬가지로 think도 "~라고 생각하다(의견, 상태)"일 때는 I think so처럼 진행형을 피하지만, "숙고하다, 머리를 굴리다(동작)"일 때는 I am thinking about it처럼 진행형을 쓸 수 있습니다. 즉 **상태동사 여부는 동사 자체가 아니라 그 순간 그 동사가 나타내는 의미가 "상태"인지 "동작"인지에 달려 있습니다.**',
      },
      {
        type: 'sentence-diagram',
        label: '현재진행형의 구조',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'is reading' },
          { tag: 'O', text: 'a book' },
        ],
        translation: 'She is reading a book. (be동사 + 일반동사ing = 지금 진행 중인 동작)',
      },
      {
        type: 'callout',
        title: '10장 핵심 정리',
        items: [
          '현재시제는 반복적인 습관이나 변하지 않는 사실을 나타내며, 타임라인 위에서 여러 점이 시간축 전체에 흩어져 반복되는 모습으로 그려진다.',
          '현재진행형은 지금 이 순간에만 걸려 있는 짧은 구간으로, 「be동사 + 일반동사의 ing형」으로 만든다.',
          '같은 동사라도 현재시제는 지속적·영구적 사실을, 현재진행형은 일시적·임시적 상황을 나타낸다는 뉘앙스 차이가 생긴다(I live in Seoul vs I am living in Seoul).',
          'ing형은 기본적으로 -ing를 붙이되, -e로 끝나면 e를 지우고, -ie로 끝나면 y로 바꾸고, 단모음+단자음으로 끝나면 마지막 자음을 한 번 더 쓴다.',
          'know, like, love, belong, want처럼 상태·감정·소유·인식을 나타내는 상태동사는 "진행"이라는 개념과 어울리지 않으므로 원칙적으로 진행형으로 쓰지 않는다.',
          '흔한 실수: I am knowing him(✗) → I know him(✓)처럼 상태동사를 진행형에 넣지 않도록 주의한다. 같은 동사라도 의미가 동작으로 바뀌면 진행형이 가능해지는 예외(have lunch, think about)도 있다.',
        ],
      },
    ],
  },
}
