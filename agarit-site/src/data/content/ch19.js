export const ch19 = {
  'ch19-1': {
    title: '원급비교 (as ~ as)',
    blocks: [
      {
        type: 'p',
        text: '비교 구문은 형용사나 부사를 사용하여 비교 대상을 묘사하는 문장을 말합니다. 영어의 비교 구문이 원급·비교급·최상급으로 나뉘는 근본적인 이유는 딱 하나입니다 — 지금 비교하고 있는 대상이 몇 개이고, 그 대상들 사이의 관계가 어떤가 하는 것입니다. 이 원리 하나만 붙잡고 있으면 19장 전체를 관통하는 논리를 놓치지 않을 수 있습니다.',
      },
      {
        type: 'icon-row',
        caption: '비교 구문 한눈에 보기 — 대상의 개수가 형태를 결정한다',
        items: [
          { icon: '⚖️', label: '원급비교', sub: '대상 2개 · 동등' },
          { icon: '📈', label: '비교급', sub: '대상 2개 · 우열' },
          { icon: '🏆', label: '최상급', sub: '대상 3개 이상 · 최고' },
        ],
      },
      { type: 'heading', text: '비교 대상의 개수가 형태를 결정한다' },
      {
        type: 'p',
        text: '예를 들어 반에서 키가 가장 큰 학생을 말할 때와, 나와 친구 둘 중에 누가 더 큰지를 말할 때, 그리고 나와 친구의 키가 똑같다고 말할 때는 각각 다른 문법 장치가 필요합니다. 상황이 다르기 때문에 형태도 달라지는 것입니다. 즉 “몇 명을 놓고 비교하는가”와 “그 안에서 어떤 관계를 말하려는가”를 먼저 따져보면, 세 가지 비교 구문 중 무엇을 써야 할지가 자동으로 결정됩니다.',
      },
      {
        type: 'table',
        caption: '비교 대상의 개수와 비교 구문의 종류',
        headers: ['상황', '종류', '설명', '형태'],
        rows: [
          ['대상이 둘이고, 정도가 같다', '원급비교', '동등한 상태의 두 대상을 대등하게 비교', 'as + 원급 + as'],
          ['대상이 둘이고, 정도가 다르다', '비교급', '둘 중 하나가 다른 하나보다 우월하거나 열등함을 표현', '원급-er / more 원급 + than'],
          ['대상이 셋 이상이다', '최상급', '여러 대상 중 하나가 나머지를 압도적으로 앞서거나 뒤처짐을 표현', 'the + 원급-est / the most 원급'],
        ],
      },
      {
        type: 'note',
        text: '이 표를 기준으로 삼으면 어떤 문장에 어떤 비교 구문을 써야 하는지 헷갈리지 않습니다. 예컨대 “우리 반에서 가장 키가 큰 학생”은 반 전체(셋 이상)를 놓고 한 명을 뽑는 것이므로 최상급이고, “철수가 영희보다 크다”는 둘만 놓고 우열을 가리는 것이므로 비교급, “철수는 영희만큼 크다”는 둘을 대등하게 놓는 것이므로 원급비교입니다. 문장을 만들기 전에 먼저 “지금 몇 명/몇 개를 놓고 말하는가”를 스스로 물어보는 습관을 들이면 실수가 크게 줄어듭니다.',
      },
      { type: 'heading', text: '원급비교란 — 형태를 바꾸지 않는 이유' },
      {
        type: 'p',
        text: '원급비교는 ‘as ~ as 비교’라고도 부릅니다. 말 그대로 ‘as ~ as’를 사용하여 비교 문장을 나타내기 때문입니다. 원급비교라는 이름이 붙은 이유는 형용사나 부사의 기본 형태(원급)를 그대로 사용하여 비교구문을 만들기 때문입니다. 비교급이나 최상급은 형용사·부사에 -er, -est를 붙여 형태를 바꾸어 비교를 나타내지만, 원급비교는 형태를 바꾸지 않습니다. 형태를 바꾸지 않는 이유는 간단합니다 — 원급비교는 “누가 더 낫다”는 우열을 말하는 것이 아니라 “둘이 같다”는 동등함을 말하는 것이기 때문에, 애초에 우열을 나타내는 -er/-est 같은 형태가 필요하지 않은 것입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The weather in this summer is as bad as last year.', ko: '이번 여름 날씨는 지난여름 날씨만큼 나쁘다.' },
          { en: 'The weather in this summer is as bad as last year was bad.', ko: '이번 연도의 여름 날씨는 작년 여름 날씨가 안 좋았던 것만큼 별로다.', note: '위 문장에서 중복되는 was bad를 생략한 것' },
          { en: 'This coffee is as hot as the one I burned my tongue on yesterday.', ko: '이 커피는 어제 내가 혓바닥을 데었던 그 커피만큼 뜨겁다.', note: '두 대상(오늘 커피/어제 커피)이 같은 정도로 뜨겁다는 대등 비교' },
          { en: 'Seoul in August is as hot as Busan in August.', ko: '8월의 서울은 8월의 부산만큼 덥다.', note: '두 도시를 같은 조건(8월)에서 대등하게 비교' },
          { en: 'My phone battery lasts as long as yours does.', ko: '내 폰 배터리는 네 것만큼 오래 간다.', note: '두 기기의 배터리 지속 시간을 대등하게 비교' },
          { en: 'This year’s festival was as crowded as last year’s.', ko: '올해 축제는 작년 축제만큼 혼잡했다.', note: '올해와 작년, 두 시점을 대등하게 비교' },
          { en: 'Her explanation was as clear as the textbook’s.', ko: '그녀의 설명은 교과서의 설명만큼 명확했다.', note: '두 설명의 명확함을 대등하게 비교' },
        ],
      },
      {
        type: 'note',
        text: '두 번째 문장을 보면 as가 서로 다른 역할로 두 번 쓰였습니다. 첫 번째 as는 뒤에 나오는 형용사 bad를 꾸며주며 정도를 나타내고, 두 번째 as는 last year was bad라는 문장을 이끄는 접속사입니다. 의미가 중복되기 때문에 뒤의 was bad를 생략해도 문장을 이해하는 데 문제가 없습니다. 이처럼 as ~ as 뒤에는 단어(last year)만 오는 경우도 있고, 문장 전체(last year was bad)가 왔다가 중복되는 부분이 생략된 경우도 있다는 점을 함께 기억해두면 좋습니다.',
      },
      {
        type: 'sentence-diagram',
        label: '원급비교',
        parts: [
          { tag: 'S', text: 'The weather' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'as bad as' },
          { tag: 'M', text: 'last year (was bad)' },
        ],
        translation: 'The weather is as bad as last year (was bad). (첫 as: 정도 부사, 두 번째 as: 접속사)',
      },
      { type: 'heading', text: '부사·명사를 사용한 원급비교' },
      {
        type: 'p',
        text: '원급비교는 형용사뿐 아니라 부사로도 나타낼 수 있습니다. 또한 as와 as 사이에 「형용사 + 명사」를 넣어 명사의 양이나 수를 비교할 수도 있습니다. 이때 비교 대상은 여전히 둘이지만, 비교하는 기준이 상태(형용사)가 아니라 동작의 방식(부사)이거나 양·수(명사)라는 점이 다를 뿐입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He can run as fast as me.', ko: '그는 나만큼 빨리 달릴 수 있다.', note: '= He can run as fast as I can run. (부사 비교)' },
          { en: 'I will give you as much money as you want.', ko: '돈은 네가 원하는 만큼 얼마든지 주겠다.', note: 'as ~ as 사이에 much money(형용사+명사)가 들어감' },
          { en: 'She has as many friends as her sister.', ko: '그녀는 언니만큼 많은 친구가 있다.', note: '셀 수 있는 명사는 many, 셀 수 없는 명사는 much를 사용' },
          { en: 'This laptop weighs as much as that tablet.', ko: '이 노트북은 저 태블릿만큼 무게가 나간다.', note: 'much가 형용사 없이 단독으로 쓰여 무게(정도)를 비교' },
          { en: 'He solved the puzzle as quickly as a professional would.', ko: '그는 전문가가 그럴 법한 것만큼 빠르게 퍼즐을 풀었다.', note: '부사 quickly로 동작의 방식을 비교' },
          { en: 'This town has as many cafés as that one.', ko: '이 마을은 저 마을만큼 많은 카페가 있다.', note: '셀 수 있는 명사 cafés의 수를 비교' },
        ],
      },
      { type: 'heading', text: '원급비교의 부정 — 의미가 뒤집힌다는 것' },
      {
        type: 'p',
        text: '원급비교 문장을 부정할 때는 「not as(so) ~ as」의 형태로 사용합니다. 이때 의미가 크게 달라지는 점에 주의해야 합니다. 원급비교를 부정하면 두 대상의 동등한 정도를 표현하는 것이 아니라, 한쪽이 다른 한쪽보다 못하다는(즉 다른 한쪽이 더 뛰어나다는) 의미가 됩니다. 다시 말해 「A is not as ~ as B」는 곧 「B is more ~ than A」와 같은 뜻을 나타내게 됩니다. 즉 부정 원급비교는 형태상으로는 여전히 as ~ as를 쓰지만, 의미상으로는 이미 비교급의 영역으로 넘어가 있다고 볼 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He is not as diligent as his brother.', ko: '그는 동생만큼 부지런하지 못하다.', note: '= 동생이 그보다 부지런하다' },
          { en: 'He does not sing as beautifully as a bird.', ko: '그는 새만큼 아름답게 노래를 부르지 못한다.', note: '= 새가 그보다 아름답게 노래를 부른다' },
          { en: 'This café is not as crowded as the one near the station.', ko: '이 카페는 역 근처의 카페만큼 붐비지 않는다.', note: '= 역 근처 카페가 이 카페보다 더 붐빈다' },
          { en: 'My old phone was not as fast as this new one.', ko: '내 예전 폰은 이 새 폰만큼 빠르지 않았다.', note: '= 새 폰이 예전 폰보다 더 빠르다' },
        ],
      },
      { type: 'heading', text: '자주 하는 실수' },
      {
        type: 'p',
        text: '원급비교에서 학습자가 흔히 저지르는 실수 세 가지를 짚어보겠습니다. 세 실수 모두 원급비교와 비교급의 형태를 혼동하는 데서 생긴다는 공통점이 있습니다.',
      },
      {
        type: 'table',
        caption: '원급비교에서 흔한 실수',
        headers: ['잘못된 표현', '바른 표현', '설명'],
        rows: [
          ['*as bigger as', 'as big as', 'as ~ as 사이에는 반드시 원급(기본형)이 들어가야 합니다. -er이 붙은 비교급 형태를 넣으면 안 됩니다.'],
          ['*as good as than', 'as good as / better than', 'as ~ as와 비교급의 than을 섞어 쓰는 것은 틀린 표현입니다. 원급비교는 끝까지 as로, 비교급은 끝까지 than으로 짝을 맞춰야 합니다.'],
          ['*He is as tall than his brother.', 'He is as tall as his brother.', 'as ~ as 구문에서 두 번째 as를 than으로 잘못 바꾸는 실수도 자주 나타납니다.'],
          ['*She is not so beautiful than her sister.', 'She is not as/so beautiful as her sister.', '부정 원급비교에서도 than이 아니라 as로 끝나야 합니다. than은 오직 비교급 문장에서만 사용합니다.'],
        ],
      },
      {
        type: 'callout',
        title: '19장 핵심 정리 (1) — 원급비교',
        items: [
          '비교 대상이 둘이고 정도가 같을 때는 원급비교, 정도가 다를 때는 비교급, 대상이 셋 이상일 때는 최상급을 쓴다.',
          '원급비교는 「as + 형용사/부사(원급) + as」의 형태로, 형태를 바꾸지 않고 두 대상의 동등한 정도를 비교한다 — 우열이 아니라 동등함을 말하기 때문에 -er/-est 같은 변형이 필요 없다.',
          'as ~ as 사이에는 형용사, 부사뿐 아니라 「형용사+명사」(as much money as, as many friends as)도 올 수 있다.',
          '부정형 not as(so) ~ as는 동등함이 아니라, 한쪽이 다른 한쪽보다 못하다는 뜻(즉 상대가 더 뛰어나다는 뜻)으로 의미가 뒤집힌다.',
          'as ~ as 사이에 비교급(-er)을 넣거나, 두 번째 as를 than으로 바꾸는 것은 대표적인 오류이므로 주의한다.',
        ],
      },
    ],
  },

  'ch19-2': {
    title: '비교급 만드는 규칙과 불규칙 변화',
    blocks: [
      {
        type: 'p',
        text: '비교급은 비교 대상이 둘일 때, 그중 하나가 다른 하나보다 우월하거나 열등함을 나타낼 때 사용하는 표현입니다. 형용사나 부사의 비교급을 사용해 두 대상을 비교하기 때문에 비교급 문장이라고 부릅니다. 원급비교가 “둘이 같다”를 말한다면, 비교급은 “둘 중 하나가 더 낫다/못하다”를 말한다는 점에서 비교 대상의 개수(둘)는 같지만 그 관계가 다릅니다.',
      },
      {
        type: 'icon-row',
        caption: '비교급 — 둘 중 하나가 우위',
        items: [
          { icon: '👥', label: '대상 2개' },
          { icon: '📈', label: '우열 비교', sub: '더 크다 / 더 작다' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'My house is larger than hers.', ko: '내 집은 그녀의 집보다 더 크다.' },
          { en: 'This box is smaller than the one I lost.', ko: '이 박스는 내가 잃어버린 상자보다 더 작다.' },
          { en: 'Your dog runs faster than Jim’s dog.', ko: '너의 개가 Jim의 개보다 더 빠르게 달린다.' },
          { en: 'This car is more expensive than your car.', ko: '이 차가 너의 차보다 더 비싸다.', note: '3음절 이상이라 more를 사용' },
          { en: 'Her presentation was more persuasive than his.', ko: '그녀의 발표가 그의 발표보다 더 설득력이 있었다.', note: '두 발표를 놓고 우열을 가리는 상황' },
          { en: 'The second exam felt easier than the first one.', ko: '두 번째 시험이 첫 번째 시험보다 더 쉽게 느껴졌다.', note: 'y로 끝나는 형용사 easy의 비교급' },
          { en: 'This neighborhood is quieter than the one we used to live in.', ko: '이 동네는 우리가 예전에 살던 동네보다 더 조용하다.', note: '두 동네(현재/과거)를 놓고 우열을 비교' },
        ],
      },
      {
        type: 'p',
        text: '1~3번 문장처럼 형용사·부사의 비교급을 만들 때는 보통 단어 끝에 -er을 붙입니다. 그런데 4번 문장의 expensive는 음절이 길어서 끝에 -er을 붙이면 발음하기 어렵기 때문에, 대신 more의 수식을 받아 비교급을 만듭니다. 일반적으로 3음절 이상의 형용사·부사는 -er을 붙이지 않고 more를 사용합니다.',
      },
      { type: 'heading', text: '왜 긴 단어는 more를 쓸까 — 발음의 편의' },
      {
        type: 'p',
        text: '이 규칙의 핵심 원리는 “발음의 편의”입니다. 짧은 단어(1음절)는 끝에 -er 하나를 덧붙여도 발음이 매끄럽지만, 음절이 많아질수록 어미를 덧붙여 한 단어로 늘어뜨리는 것보다 more라는 별도의 단어를 앞에 얹는 편이 말하기에 훨씬 편합니다. 예컨대 beautiful에 -er을 붙여 beautifuler라고 말하려 하면 음절이 다닥다닥 붙어 발음이 뭉개지지만, more beautiful이라고 하면 두 단어로 나뉘어 각각 편하게 발음할 수 있습니다. 즉 more/most는 “단어를 더 길게 만들지 않고도 비교의 의미를 더하는” 우회로라고 이해하면 됩니다.',
      },
      { type: 'heading', text: '비교급 만드는 규칙' },
      {
        type: 'table',
        caption: '형용사·부사의 비교급 만들기',
        headers: ['형태', '규칙', '예시'],
        rows: [
          ['1음절 대부분', '단어 끝에 -er을 붙인다', 'tall → taller, fast → faster, small → smaller'],
          ['-e로 끝나는 단어', '-e가 반복되므로 -r만 붙인다', 'large → larger, cute → cuter, nice → nicer'],
          ['자음+y로 끝나는 단어', 'y를 i로 바꾸고 -er을 붙인다', 'angry → angrier, easy → easier, heavy → heavier'],
          ['단모음+단자음으로 끝나는 단어', '자음을 한 번 더 쓰고 -er을 붙인다', 'big → bigger, thin → thinner, hot → hotter'],
          ['2음절 중 일부·3음절 이상', '단어 앞에 more를 붙인다', 'beautiful → more beautiful, carefully → more carefully, interesting → more interesting'],
        ],
      },
      {
        type: 'note',
        text: '음절은 보통 모음의 개수로 판단하는데, 이때 모음은 철자가 아닌 발음상의 모음을 뜻합니다. 예를 들어 beautiful의 음절 수를 따질 때는 발음기호 [bjúːtɪfəl]을 보고 판단해야 합니다. 다만 모든 단어의 발음기호를 알기는 어려우므로, 편의상 철자상의 모음 개수로 판단해도 대체로 잘 들어맞습니다.',
      },
      { type: 'heading', text: '불규칙 비교급·최상급' },
      {
        type: 'p',
        text: '일부 형용사·부사는 규칙을 따르지 않고 형태 자체가 완전히 바뀌는 불규칙 변화를 합니다. 이러한 단어들은 규칙과 별도로 반드시 외워두어야 합니다. 특히 이 단어들은 아주 자주 쓰이기 때문에 -er/more를 붙이는 규칙을 그대로 적용하면 눈에 띄는 오류가 됩니다.',
      },
      {
        type: 'table',
        caption: '대표적인 불규칙 비교급·최상급',
        headers: ['원급', '비교급', '최상급'],
        rows: [
          ['good / well', 'better', 'best'],
          ['bad / ill', 'worse', 'worst'],
          ['many / much', 'more', 'most'],
          ['little', 'less', 'least'],
          ['old', 'older / elder', 'oldest / eldest'],
          ['far', 'farther / further', 'farthest / furthest'],
          ['late', 'later / latter', 'latest / last'],
        ],
      },
      {
        type: 'note',
        text: 'old는 물리적인 나이·오래됨을 비교할 때는 older/oldest, 가족 관계에서 손위·연장자를 나타낼 때는 elder/eldest를 씁니다. far는 물리적 거리는 farther/farthest, 논리적·비유적 정도(더 나아가서)는 further/furthest를 주로 씁니다. late도 시간상 더 늦음은 later/latest, 순서상 후자·마지막은 latter/last로 갈라진다는 점에서 old, far와 비슷한 패턴을 보입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'This book is better than that one.', ko: '이 책이 저 책보다 더 좋다.' },
          { en: 'The situation got worse than before.', ko: '상황이 이전보다 더 나빠졌다.' },
          { en: 'She has more experience than I do.', ko: '그녀는 나보다 더 많은 경험이 있다.' },
          { en: 'I have less money than you.', ko: '나는 너보다 돈이 적다.' },
          { en: 'My grandfather is older than my grandmother, but my elder sister looks younger than both of them.', ko: '할아버지가 할머니보다 나이가 많지만, 언니는 둘보다 더 어려 보인다.', note: '물리적 나이는 older, 가족 내 손위는 elder' },
          { en: 'We need to think further before making a decision.', ko: '결정을 내리기 전에 더 깊이 생각해봐야 한다.', note: '물리적 거리가 아닌 비유적 정도이므로 further' },
        ],
      },
      { type: 'heading', text: '비교급 강조부사' },
      {
        type: 'p',
        text: '비교급 강조부사는 비교급의 정도를 강조하거나 그 강도를 높이기 위해 사용하는 부사입니다. 비교급 형용사나 부사 앞에 위치하여 비교의 정도를 더욱 명확하고 강하게 만들어줍니다. very는 비교급을 강조할 수 없다는 점에 주의해야 합니다. very는 원급(bad, tall처럼 형태가 바뀌지 않은 형용사)만 강조할 수 있고, -er/more가 붙은 비교급은 오직 much, far, a lot, even, still 같은 별도의 부사로만 강조할 수 있습니다.',
      },
      {
        type: 'table',
        caption: '자주 쓰이는 비교급 강조부사',
        headers: ['강조부사', '의미·용법'],
        rows: [
          ['much', '비교급을 크게 강조'],
          ['far', '비교급을 크게 강조. much와 비슷한 의미'],
          ['a lot', '일상적인 대화에서 비교급을 강조'],
          ['even', '예상외의 상황에서 비교급을 강조. 놀라움·의외성을 표현'],
          ['still', '현재 상태에서도 여전히 비교 대상보다 더 나음을 강조'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'This book is much better than the one I read last week.', ko: '이 책은 내가 지난주에 읽은 책보다 훨씬 더 좋다.' },
          { en: 'He is far more experienced than his colleagues.', ko: '그는 그의 동료들보다 훨씬 더 경험이 많다.' },
          { en: 'This movie is a lot more interesting than the one we watched yesterday.', ko: '이 영화는 우리가 어제 본 영화보다 훨씬 더 흥미롭다.' },
          { en: 'She is even more talented than we thought.', ko: '그녀는 우리가 생각했던 것보다 훨씬 더 재능이 있다.' },
          { en: 'This model is still better than the newer version.', ko: '이 모델은 여전히 최신 버전보다 더 좋다.' },
        ],
      },
      { type: 'heading', text: '자주 하는 실수 — 이중 비교급' },
      {
        type: 'p',
        text: '비교급을 만들 때 가장 흔히 나오는 실수는 -er과 more를 동시에 붙이는 “이중 비교급(double comparative)”입니다. 하나의 형태만으로도 이미 비교의 의미가 완성되므로, -er과 more를 겹쳐 쓰면 의미가 중복되어 비문이 됩니다. 불규칙 비교급 better, worse에 more를 덧붙이는 실수도 매우 흔한데, better와 worse는 그 자체가 이미 “더 좋은/더 나쁜”이라는 비교의 의미를 담고 있는 완성된 단어이기 때문입니다.',
      },
      {
        type: 'table',
        caption: '이중 비교급 오류의 예',
        headers: ['잘못된 표현', '바른 표현', '설명'],
        rows: [
          ['*more better', 'better', 'good의 비교급 better는 이미 비교의 의미를 담고 있으므로 more를 붙이면 중복이다.'],
          ['*more taller', 'taller', '1음절어에는 -er만 붙이며, more와 함께 쓰지 않는다.'],
          ['*more worse', 'worse', 'bad의 비교급 worse에도 more를 겹쳐 쓰지 않는다.'],
          ['*This is more easier than that.', 'This is easier than that.', '2음절이지만 -er을 쓰는 easy 같은 단어에도 more를 겹쳐 쓰는 실수가 나타난다.'],
        ],
      },
      {
        type: 'callout',
        title: '19장 핵심 정리 (2) — 비교급',
        items: [
          '1음절어는 대부분 -er을 붙이고, -e로 끝나면 -r만, 자음+y는 y→i+er, 단모음+단자음은 자음을 겹쳐 -er을 붙인다.',
          '2음절 일부와 3음절 이상의 형용사·부사는 more를 앞에 붙여 비교급을 만든다 — 음절이 길어질수록 어미를 붙이기보다 별도 단어(more)로 표현하는 것이 발음상 더 편하기 때문이다.',
          'good-better-best, bad-worse-worst, many/much-more-most처럼 불규칙 변화를 하는 단어는 따로 외워야 하며, old·far·late처럼 두 갈래로 갈라지는 단어는 의미(물리적/비유적)에 따라 골라 써야 한다.',
          'much, far, a lot, even, still 같은 강조부사는 비교급 앞에서 그 정도를 강조한다. very는 원급만 강조할 수 있고 비교급은 강조할 수 없다.',
          '*more better, *more taller처럼 -er과 more를 동시에 쓰는 이중 비교급은 대표적인 오류이므로 반드시 하나만 선택해야 한다.',
        ],
      },
    ],
  },

  'ch19-3': {
    title: '최상급',
    blocks: [
      {
        type: 'p',
        text: '최상급은 비교 대상이 셋 이상일 때, 그 그룹 안에서 하나가 가장 뛰어나거나 가장 부족한 정도를 나타낼 때 사용합니다. 최상급은 비교의 끝을 의미하며, 더 이상 비교할 대상이 없는 상태를 표현합니다. 형용사나 부사에 ‘-est’를 붙이거나 앞에 ‘most’를 붙여서 최상급을 만듭니다.',
      },
      {
        type: 'icon-row',
        caption: '최상급 — 그룹 안에서 하나가 최고',
        items: [
          { icon: '👪', label: '대상 3개 이상' },
          { icon: '🏆', label: '최고/최저 하나' },
        ],
      },
      { type: 'heading', text: '왜 셋 이상일 때만 최상급을 쓸까' },
      {
        type: 'p',
        text: '둘만 놓고 비교할 때는 비교급(-er, more)으로 충분합니다. 하지만 대상이 셋 이상이 되면 “다른 것들보다 낫다”는 말로는 그 그룹 전체와의 관계를 정확히 표현할 수 없습니다. 예컨대 반 학생이 30명일 때 “저 학생이 다른 학생보다 크다”라고만 하면 몇 명과 비교했는지 불분명합니다. 그래서 “그룹 전체 중에서 가장”이라는 의미를 담은 최상급이 필요해지는 것입니다. 다시 말해 비교급은 항상 “A와 B” 둘의 일대일 관계를 말하지만, 최상급은 “그룹 전체 대 그 안의 하나”라는 다대일 관계를 말한다는 점에서 근본적으로 다릅니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'My house is the largest one in our neighborhood.', ko: '내 집은 우리 동네에서 가장 크다.', note: '동네의 여러 집들(셋 이상) 중 하나' },
          { en: 'This is the smallest box I’ve ever seen.', ko: '이것은 내가 지금까지 본 것 중 가장 작은 상자이다.', note: '지금까지 본 모든 상자들과 비교' },
          { en: 'Your dog ran the fastest of any dog in the race.', ko: '너의 개는 경주에서 다른 어떤 개보다 가장 빨리 달렸다.' },
          { en: 'Of the three routes, the mountain trail is the most dangerous.', ko: '세 경로 중에서 산길이 가장 위험하다.', note: '셋(the three routes) 중 하나를 특출나게 지목' },
          { en: 'She is the youngest of the four sisters.', ko: '그녀는 네 자매 중 막내이다.', note: '네 명(of the four sisters) 중 최상급' },
          { en: 'This café serves the strongest coffee among all the shops on this street.', ko: '이 카페는 이 거리의 모든 가게들 중에서 가장 진한 커피를 판다.', note: '거리에 있는 여러 가게(셋 이상)를 그룹으로 지정' },
        ],
      },
      {
        type: 'note',
        text: '최상급 앞에는 일반적으로 정관사 the를 붙여 사용합니다. the는 최상급의 대상이 되는 그룹을 명확히 지정해주는 역할을 합니다. 또한 최상급 문장에는 보통 in our neighborhood, I’ve ever seen, in the race처럼 비교 대상이나 범위가 함께 나타나는데, 문맥으로 충분히 유추할 수 있다면 생략되기도 합니다. 단, 부사의 최상급에는 the를 생략하는 경우가 많습니다.',
      },
      { type: 'heading', text: '비교 범위를 나타내는 표현' },
      {
        type: 'p',
        text: '최상급 문장은 “무엇과 비교했을 때 가장 그렇다는 것인지”를 밝혀 주는 범위 표현과 함께 자주 쓰입니다. 이 범위 표현이 곧 “대상이 셋 이상인 그룹”을 구체적으로 지정해주는 장치라고 볼 수 있습니다. 아래 표현들이 대표적입니다.',
      },
      {
        type: 'table',
        caption: '최상급과 함께 쓰이는 비교 범위 표현',
        headers: ['표현', '의미', '예문'],
        rows: [
          ['in + 장소/집단', '그 장소·집단 안에서', 'the tallest student in his class'],
          ['of + 복수명사', '그 대상들 중에서', 'the youngest of the four sisters'],
          ['(that) 주어 + have ever + p.p.', '지금까지 ~한 것 중', 'the most beautiful place I have ever visited'],
          ['among + 복수명사', '~들 사이에서', 'the most popular song among teenagers'],
        ],
      },
      { type: 'heading', text: '최상급 만드는 규칙' },
      {
        type: 'table',
        caption: '형용사·부사의 최상급 만들기',
        headers: ['형태', '규칙', '예시'],
        rows: [
          ['1음절 형용사·부사', '단어 끝에 -est를 붙인다', 'tall → tallest, fast → fastest'],
          ['2음절 형용사·부사', '대부분 -est를 붙이나, most를 쓰는 예외도 있다', 'happy → happiest, clever → cleverest, polite → most polite'],
          ['3음절 이상 형용사·부사', '단어 앞에 most를 붙인다', 'interesting → most interesting, beautiful → most beautiful'],
        ],
      },
      {
        type: 'p',
        text: '3음절 이상의 형용사·부사는 이미 길기 때문에 -est를 붙이면 발음이 복잡하고 부자연스러워질 수 있습니다. 예를 들어 beautiful에 -est를 붙여 beautifulest라고 하면 발음이 어색해집니다. 대신 most beautiful로 표현하면 발음이 훨씬 자연스럽고 간결합니다. 이는 비교급에서 more를 사용하는 이유와 완전히 같은 원리, 즉 발음의 편의입니다 — 음절이 길어질수록 어미를 붙여 단어를 더 늘리기보다 most라는 별도의 단어로 처리하는 편이 말하기에 편합니다. 결국 비교급의 more와 최상급의 most는 같은 원리(발음의 편의)가 두 가지 상황(둘 비교/셋 이상 비교)에 각각 적용된 결과라고 정리할 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He is the tallest student in his class.', ko: '그는 그의 반에서 가장 키가 큰 학생이다.' },
          { en: 'This is the most beautiful place I have ever visited.', ko: '이곳은 내가 지금까지 방문한 곳 중 가장 아름다운 곳이다.' },
          { en: 'She solved the problem the most easily of all.', ko: '그녀는 모두 중에서 가장 쉽게 그 문제를 풀었다.' },
          { en: 'This is the best restaurant in town.', ko: '이곳은 시내에서 가장 좋은 식당이다.', note: 'good의 최상급 best (불규칙)' },
          { en: 'Among the three candidates, he is the most reliable.', ko: '세 후보 중에서 그가 가장 신뢰할 만하다.', note: 'among + 셋(the three candidates)' },
          { en: 'Of all the seasons, I like autumn the most.', ko: '모든 계절 중에서 나는 가을을 가장 좋아한다.', note: '동사를 수식하는 부사적 최상급으로, the를 붙이는 경우' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '최상급',
        parts: [
          { tag: 'S', text: 'My house' },
          { tag: 'V', text: 'is' },
          { tag: 'C', text: 'the largest one' },
          { tag: 'M', text: 'in our neighborhood' },
        ],
        translation: 'My house is the largest one in our neighborhood. (the + 최상급 + 비교 범위)',
      },
      { type: 'heading', text: '자주 하는 실수 — the를 빠뜨리는 것' },
      {
        type: 'p',
        text: '최상급에서 가장 자주 나오는 실수는 형용사 최상급 앞에 the를 빠뜨리는 것입니다. the가 없으면 “그 그룹 안에서 유일하게 지정된 하나”라는 의미가 사라져 문장이 어색해집니다. 다만 부사의 최상급이나 「소유격 + 최상급」(예: my best friend)에서는 the를 쓰지 않는다는 점도 함께 기억해 두어야 합니다.',
      },
      {
        type: 'table',
        caption: '최상급에서 흔한 실수',
        headers: ['잘못된 표현', '바른 표현', '설명'],
        rows: [
          ['*He is tallest student in his class.', 'He is the tallest student in his class.', '형용사 최상급 앞에는 the를 반드시 붙인다.'],
          ['*This is most expensive item here.', 'This is the most expensive item here.', 'most를 쓰는 최상급도 마찬가지로 the가 필요하다.'],
          ['She is the my best friend.', 'She is my best friend.', '소유격이 있을 때는 the를 겹쳐 쓰지 않는다.'],
          ['*He ran the most fast of all.', 'He ran the fastest of all.', 'fast처럼 1음절 부사는 -est를 붙이며, most를 겹쳐 쓰지 않는다.'],
        ],
      },
      {
        type: 'callout',
        title: '19장 핵심 정리 (3) — 최상급',
        items: [
          '최상급은 비교 대상이 셋 이상일 때, 그 그룹 중 하나가 가장 뛰어나거나 부족한 정도를 나타낸다 — 비교급이 둘의 일대일 관계라면, 최상급은 그룹 대 하나의 관계이다.',
          '형용사·부사에 -est를 붙이거나 앞에 most를 붙여 만들며, 1음절어는 -est, 3음절 이상은 most, 2음절어는 대부분 -est이지만 예외적으로 most를 쓰는 경우도 있다.',
          '음절이 길어질수록 -est보다 most를 쓰는 것은 발음의 편의를 위한 선택이며, 비교급의 more 규칙과 같은 원리이다.',
          '최상급 앞에는 보통 the를 붙이며, in ~, of ~, among ~, that절 등으로 비교의 범위(셋 이상의 그룹)를 함께 밝혀준다.',
          '형용사 최상급 앞에 the를 빠뜨리는 것은 가장 흔한 오류이므로 주의한다. 단, 부사의 최상급이나 소유격이 있을 때는 the를 쓰지 않는다.',
        ],
      },
    ],
  },

  'ch19-4': {
    title: 'the 비교급 구문과 관용표현',
    blocks: [
      {
        type: 'p',
        text: 'the 비교급 구조는 두 가지 사물이나 상황을 비교할 때, 하나의 변화가 다른 하나에 영향을 미친다는 것을 나타내기 위해 사용됩니다. 이 구조는 두 개의 비교급 형용사·부사를 사용하여, 한쪽의 증가 또는 감소가 다른 쪽에도 영향을 미친다는 인과 관계를 표현합니다. 지금까지 배운 비교급이 “A가 B보다 더 크다”처럼 정적인 상태를 비교했다면, the 비교급 구문은 “A가 커질수록 B도 커진다”처럼 두 변화가 함께 움직이는 동적인 관계를 비교한다는 점이 다릅니다.',
      },
      {
        type: 'icon-row',
        caption: 'the 비교급 — 두 변화가 함께 움직인다',
        items: [
          { icon: '📈', label: 'A 증가' },
          { icon: '🔁', label: '동반 변화' },
          { icon: '📈', label: 'B 증가' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'If you study more, you will learn more.', ko: '더 많이 공부하면, 더 많이 배울 것이다.' },
          { en: 'The more you study, the more you learn.', ko: '공부를 하면 할수록 더 많이 배운다.', note: '위 If절 문장을 the 비교급 구문으로 바꾸어 인과 관계를 강조' },
          { en: 'If you work harder, you will be more successful.', ko: '더 열심히 일하면, 더 성공할 것이다.' },
          { en: 'The harder you work, the more successful you will be.', ko: '열심히 일할수록 더 성공할 것이다.' },
          { en: 'If we leave earlier, we will arrive sooner.', ko: '더 일찍 출발하면, 더 빨리 도착할 것이다.' },
          { en: 'The earlier we leave, the sooner we will arrive.', ko: '우리가 더 일찍 출발할수록 더 빨리 도착할 것이다.' },
          { en: 'The more crowded the subway gets, the more irritated people become.', ko: '지하철이 붐빌수록 사람들은 더 짜증이 난다.', note: '지하철의 혼잡도 증가와 사람들의 짜증 증가가 함께 움직이는 인과 관계' },
        ],
      },
      {
        type: 'note',
        text: 'If 조건문과 the 비교급 문장은 의미가 비슷해 보이지만 미묘하게 다릅니다. If절은 하나의 조건이 충족되었을 때 결과가 발생함을 설명하며, 주로 미래의 가능성이나 가정적 상황을 나타냅니다. 반면 the 비교급 문장은 두 개의 비교급을 나란히 두어 하나의 증가·감소가 다른 하나에 직접적인 영향을 미친다는 인과 관계를 더 함축적이고 강하게 표현합니다. 또한 같은 문장구조를 반복하여 리듬감을 주기 때문에 연설, 글쓰기, 광고 등에서 효과적으로 쓰입니다.',
      },
      { type: 'heading', text: 'the 비교급 문장 만드는 순서' },
      {
        type: 'p',
        text: '「The + 비교급 + 주어 + 동사, the + 비교급 + 주어 + 동사」의 구조로 문장을 만듭니다. If you practice more, you will improve faster.라는 문장을 예로 만드는 과정을 살펴보겠습니다.',
      },
      {
        type: 'note',
        text: '1단계: 비교할 두 요소의 비교급 형태를 확인한다 (practice more, improve faster). 2단계: 각 비교급을 절의 맨 앞으로 이동시키고 the를 붙인다 (the more you practice, the faster you improve). 3단계: 두 비교급 절을 접속사 없이 병렬로 배치하여 하나의 문장으로 완성한다.',
      },
      {
        type: 'example',
        items: [
          { en: 'The more you practice, the faster you improve.', ko: '연습을 많이 할수록 더 빨리 향상된다.', note: '두 비교급 절을 병렬로 배치해 하나의 문장으로 완성' },
          { en: 'The more you eat, the taller you will be.', ko: '네가 많이 먹을수록 너는 키가 더 클 것이다.' },
          { en: 'The earlier you start something, the sooner you will finish it.', ko: '네가 무언가를 빨리 시작할수록 너는 그것을 더 빨리 끝낼 것이다.' },
          { en: 'The more expensive computer you buy, the more programs you can use.', ko: '더 비싼 컴퓨터를 살수록 더 많은 프로그램을 사용할 수 있다.', note: '비교급이 명사(computer)를 함께 수식하는 경우' },
          { en: 'The better we are at something, the more careful we should be when doing it.', ko: '어떤 것에 능숙해질수록 그것을 할 때 더 조심해야 한다.', note: 'We are good at something. + We should be careful.을 인과 관계로 재구성한 문장' },
          { en: 'The longer the meeting lasted, the more bored the audience looked.', ko: '회의가 길어질수록 청중은 더 지루해 보였다.', note: 'the longer(부사적 비교급)와 the more bored(형용사 비교급)가 짝을 이룸' },
        ],
      },
      {
        type: 'note',
        text: 'the 비교급 문장은 「~할수록 더 ~해진다」라는 병렬적 의미를 가지기 때문에 접속사 없이도 두 절이 이어집니다. 이처럼 관용적인 문장에서는 접속사나 반복되는 동사가 생략되는 경우가 많으므로 문장 형식과 운율에 익숙해지는 것이 중요합니다.',
      },
      { type: 'heading', text: '자주 하는 실수 — the 비교급의 어순' },
      {
        type: 'p',
        text: 'the 비교급 구문에서 가장 자주 나오는 실수는 the + 비교급을 절의 맨 앞으로 옮기지 않고 원래 자리에 그대로 두는 것입니다. the 비교급은 반드시 각 절의 첫머리에 나와야 하며, the를 한쪽 절에서만 빠뜨리는 것도 흔한 오류입니다. 또한 이 구문 안에서도 -er/more 이중 비교급 실수(19-2에서 배운 것과 동일한 실수)가 그대로 나타날 수 있으니 함께 주의해야 합니다.',
      },
      {
        type: 'table',
        caption: 'the 비교급 구문에서 흔한 실수',
        headers: ['잘못된 표현', '바른 표현', '설명'],
        rows: [
          ['*You study the more, you learn the more.', 'The more you study, the more you learn.', 'the + 비교급은 절의 맨 앞으로 이동해야 한다.'],
          ['*The more you study, more you learn.', 'The more you study, the more you learn.', '두 절 모두에 the를 빠뜨리지 않고 붙여야 한다.'],
          ['*The more hard you work, the more you succeed.', 'The harder you work, the more you succeed.', 'hard(1음절)는 more가 아니라 -er을 붙여 harder로 써야 한다.'],
          ['*The more better you play, the more happy the crowd gets.', 'The better you play, the happier the crowd gets.', 'better에 more를 겹치는 이중 비교급, happy를 more happy로 쓰는 실수가 함께 나타난 예이다.'],
        ],
      },
      { type: 'heading', text: '기타 비교 관용표현' },
      {
        type: 'table',
        caption: '자주 쓰이는 비교 관용표현',
        headers: ['표현', '의미', '예문'],
        rows: [
          ['as ~ as possible', '가능한 한 ~하게', 'Please answer as soon as possible. (가능한 한 빨리 답해주세요.)'],
          ['배수사 + as ~ as', '~보다 몇 배 더 ~한', 'This building is twice as tall as that one. (이 건물은 저 건물보다 두 배 더 높다.)'],
          ['not so much A as B', 'A라기보다는 B이다', 'He is not so much a teacher as a friend. (그는 선생님이라기보다는 친구이다.)'],
          ['the + 비교급 of the two', '둘 중 더 ~한 쪽', 'She is the taller of the two. (그녀가 둘 중 더 키가 크다.)'],
          ['비교급 and 비교급', '점점 더 ~해지는', 'The days are getting longer and longer. (날이 점점 더 길어지고 있다.)'],
          ['no more than / not more than', '겨우 ~밖에 / ~이하로', 'She has no more than 5 dollars. (그녀는 5달러밖에 없다.)'],
        ],
      },
      {
        type: 'note',
        text: '「the + 비교급 of the two」는 대상이 정확히 둘일 때만 쓰는 표현입니다. 대상이 셋 이상이면 최상급(the tallest of the three 등)을 써야 한다는 점에서, 이 표현 역시 “비교 대상의 개수”라는 이 장의 핵심 원리를 그대로 보여줍니다. 마찬가지로 「배수사 + as ~ as」도 원급비교의 형태(as ~ as)를 그대로 빌려 쓰는 것이므로, 두 대상을 대등한 틀 안에 놓고 그 위에 배수라는 정보만 얹는 구조라고 이해하면 기억하기 쉽습니다.',
      },
      {
        type: 'callout',
        title: '19장 핵심 정리 (4) — the 비교급과 관용표현',
        items: [
          'The + 비교급 + 주어 + 동사, the + 비교급 + 주어 + 동사 구조는 하나의 변화가 다른 변화를 유발하는 인과 관계(~할수록 더 ~하다)를 나타낸다.',
          '이 구문은 If 조건문보다 인과 관계를 더 강하고 함축적으로 표현하며, 반복되는 구조로 리듬감을 준다.',
          'the + 비교급은 각 절의 맨 앞에 위치해야 하며, 두 절 모두에서 the를 빠뜨리지 않아야 한다. 이중 비교급(*more better 등) 실수도 이 구문 안에서 그대로 반복될 수 있으니 주의한다.',
          'as ~ as possible, 배수사+as~as, not so much A as B, 비교급 and 비교급 등 다양한 비교 관용표현도 함께 알아두어야 한다.',
          'the + 비교급 of the two는 대상이 둘일 때만 쓰고, 셋 이상이면 최상급을 써야 한다 — 이 장 전체를 관통하는 “대상의 개수” 원리가 여기에도 적용된다.',
        ],
      },
    ],
  },
}
