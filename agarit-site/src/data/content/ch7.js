export const ch7 = {
  'ch7-1': {
    title: 'be동사',
    blocks: [
      {
        type: 'p',
        text: 'be동사는 주어와, 주어를 설명해주는 단어를 서로 연결해주는 역할을 합니다. be동사 자체에 "~이다"라는 뜻이 있다고 외우기보다는, "주어와 주어를 설명해주는 단어를 이어주는 동사"라고 이해하는 것이 좋습니다. 왜 이런 구분이 필요한지는 아래에서 장소·신분·상태를 나타내는 다양한 문장을 통해 살펴보겠습니다.',
      },
      { type: 'heading', text: '장소를 나타내는 be동사' },
      {
        type: 'example',
        items: [
          { en: 'I am in the house.', ko: '나는 집 안에 있다.', note: '장소를 설명 - 주어가 어디에 있는지' },
          { en: 'She is at school now.', ko: '그녀는 지금 학교에 있다.', note: '장소를 설명' },
          { en: 'They are in Seoul this week.', ko: '그들은 이번 주에 서울에 있다.', note: '장소를 설명' },
        ],
      },
      {
        type: 'p',
        text: 'in the house, at school, in Seoul은 모두 주어가 "어디에 있는지"를 알려주는 말입니다. be동사(am/is/are)는 이 장소 표현과 주어를 이어주는 역할을 할 뿐, "있다"라는 뜻을 be동사 자체가 담고 있는 것은 아닙니다. be동사가 없다면 문장에 동사가 없어 문장이 성립하지 않습니다.',
      },
      { type: 'heading', text: '신분을 나타내는 be동사' },
      {
        type: 'example',
        items: [
          { en: 'I am a student.', ko: '나는 학생이다.', note: '신분을 설명 - 주어가 누구인지' },
          { en: 'He is a doctor.', ko: '그는 의사이다.', note: '신분을 설명' },
          { en: 'My sister is a nurse.', ko: '내 여동생은 간호사이다.', note: '신분을 설명' },
        ],
      },
      { type: 'heading', text: '상태를 나타내는 be동사' },
      {
        type: 'example',
        items: [
          { en: 'I am busy.', ko: '나는 바쁘다.', note: '상태를 설명 - 주어가 어떤 상태인지' },
          { en: 'The soup is hot.', ko: '그 수프는 뜨겁다.', note: '상태를 설명' },
          { en: 'They are happy about the news.', ko: '그들은 그 소식에 기뻐하고 있다.', note: '상태를 설명' },
        ],
      },
      {
        type: 'note',
        text: 'be동사 뒤에서 주어를 보충 설명하며 주어가 어디에 있는지, 누구인지, 어떤 상태인지를 알려주는 말을 보어(보충설명어)라고 합니다. be동사는 항상 주어와 보어를 이어주는 역할을 합니다.',
      },
      {
        type: 'icon-row',
        caption: 'be동사 보어의 세 종류',
        items: [
          { icon: '📍', label: '장소', sub: 'in the house' },
          { icon: '🎓', label: '신분', sub: 'a student' },
          { icon: '😊', label: '상태', sub: 'busy' },
        ],
      },
      { type: 'heading', text: '"I am busy"를 "나는 바쁨이다"로 직역하면 어색한 이유' },
      {
        type: 'p',
        text: '한국어에서는 "바쁘다"라는 형용사 하나가 이미 서술어(문장을 끝맺는 말) 역할을 합니다. 그래서 "나는 바쁘다"라는 문장에는 형용사 외에 따로 연결하는 동사가 필요 없습니다. 만약 be동사를 "~이다"라는 뜻으로 외워서 I am busy를 직역하면 "나는 바쁨이다"처럼 명사를 억지로 만들어 붙인 듯한 어색한 문장이 됩니다. 영어의 busy는 여전히 형용사이고, am은 그 형용사(busy)와 주어(I)를 이어주는 연결 장치일 뿐입니다. 즉 한국어 형용사문은 동사가 필요 없지만, 영어 형용사문은 반드시 be동사가 있어야 문장이 완성됩니다.',
      },
      {
        type: 'note',
        text: '이 차이 때문에 한국어를 모국어로 쓰는 학습자는 영어로 말할 때 be동사를 빠뜨리는 실수를 자주 합니다. "바쁘다" 자체가 이미 서술어처럼 느껴지기 때문에, 영어에서도 습관적으로 연결 동사를 빼고 형용사만 말하게 되는 것입니다.',
      },
      { type: 'heading', text: '흔히 하는 실수 - be동사 생략' },
      {
        type: 'example',
        items: [
          { en: '*I busy today.', ko: '(오답) 나는 오늘 바쁘다.', note: 'be동사 am이 빠져 문장이 성립하지 않음' },
          { en: 'I am busy today.', ko: '(정답) 나는 오늘 바쁘다.', note: '주어와 보어를 am이 연결' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: '*She a teacher.', ko: '(오답) 그녀는 선생님이다.', note: 'be동사 is가 빠져 문장이 성립하지 않음' },
          { en: 'She is a teacher.', ko: '(정답) 그녀는 선생님이다.', note: '주어와 보어를 is가 연결' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '장소 보어',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'am' },
          { tag: 'C', text: 'in the house' },
        ],
        translation: 'I am in the house. (나는 집 안에 있다.) — am이 I와 in the house를 연결',
      },
      {
        type: 'sentence-diagram',
        label: '신분 보어',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'am' },
          { tag: 'C', text: 'a student' },
        ],
        translation: 'I am a student. (나는 학생이다.) — am이 I와 a student를 연결',
      },
      {
        type: 'sentence-diagram',
        label: '상태 보어',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'am' },
          { tag: 'C', text: 'busy' },
        ],
        translation: 'I am busy. (나는 바쁘다.) — am이 I와 busy를 연결, "바쁨이다"가 아니라 "바쁜 상태로 이어줌"',
      },
      { type: 'heading', text: 'be동사의 의문문과 부정문' },
      {
        type: 'p',
        text: '영어 문장은 기본적으로 주어와 동사로 문장을 시작합니다. 말하는 사람이 듣는 사람에게 무언가를 물어보고 싶을 때는 이 의도를 전달하기 위해 "주어-동사"로 시작하는 문장을 "동사-주어"의 순서로 바꿉니다. be동사는 스스로 문장 맨 앞으로 이동할 수 있기 때문에, 주어와 be동사의 자리만 바꾸면 의문문이 됩니다. 부정문을 만들 때도 be동사 뒤에 not만 붙이면 됩니다.',
      },
      {
        type: 'transform',
        from: 'You are in the house.',
        to: 'Are you in the house?',
        note: '주어와 be동사의 자리를 바꾸어 의문문 완성',
      },
      {
        type: 'transform',
        from: 'He is in the house.',
        to: 'He is not in the house.',
        note: 'be동사 뒤에 not만 붙여 부정문 완성',
      },
      {
        type: 'example',
        items: [
          { en: 'Is he in the house?', ko: '그는 집 안에 있니?', note: 'he is → is he로 자리를 바꾸어 의문문' },
          { en: 'Are they in the house?', ko: '그들은 집 안에 있니?', note: 'they are → are they로 자리를 바꾸어 의문문' },
          { en: 'They are not in the house.', ko: '그들은 집 안에 있지 않다.', note: 'are 뒤에 not을 붙여 부정문' },
        ],
      },
      {
        type: 'note',
        text: '일반동사는 be동사처럼 스스로 자리를 바꾸어 의문문·부정문을 만들지 못하기 때문에 Do/Does의 도움이 필요합니다. 자세한 내용은 다음 레슨(일반동사)에서 다룹니다.',
      },
      {
        type: 'callout',
        title: '핵심 정리 - be동사',
        items: [
          'be동사는 "~이다"라는 뜻을 외우는 동사가 아니라, 주어와 보어를 연결해주는 동사이다.',
          '보어는 be동사 뒤에서 주어의 장소, 신분, 상태 등을 보충 설명해준다.',
          '문장 구조는 항상 S(주어) + V(be동사) + C(보어)의 형태를 이룬다.',
          '한국어 형용사문(바쁘다)은 동사 없이도 서술어가 되지만, 영어 형용사문은 반드시 be동사가 있어야 하므로 be동사를 빠뜨리지 않도록 주의한다.',
          'be동사는 스스로 문장 앞으로 이동해 의문문을 만들고, 뒤에 not을 붙여 부정문을 만든다.',
        ],
      },
    ],
  },

  'ch7-2': {
    title: '일반동사',
    blocks: [
      {
        type: 'p',
        text: '일반동사는 주어의 동작, 상태, 일의 발생을 나타내는 동사입니다. be동사가 주어와 보어를 연결해주는 것과 달리, 일반동사는 주어가 하는 행동이나 겪는 상태, 발생하는 사건 그 자체를 나타냅니다.',
      },
      { type: 'heading', text: '동작을 나타내는 일반동사' },
      {
        type: 'example',
        items: [
          { en: 'He played the piano.', ko: '그는 피아노를 연주했다.', note: '동작 - 손을 움직여 연주하는 구체적 행동' },
          { en: 'She ran to the station.', ko: '그녀는 역까지 달려갔다.', note: '동작 - 다리를 움직여 달리는 구체적 행동' },
          { en: 'They built a small house last summer.', ko: '그들은 지난여름 작은 집을 지었다.', note: '동작 - 몸을 써서 만들어내는 구체적 행동' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '일반동사 — 동작',
        parts: [
          { tag: 'S', text: 'He' },
          { tag: 'V', text: 'played' },
          { tag: 'O', text: 'the piano' },
        ],
        translation: '그는 피아노를 연주했다.',
      },
      { type: 'heading', text: '상태를 나타내는 일반동사' },
      {
        type: 'example',
        items: [
          { en: 'He liked her.', ko: '그는 그녀를 좋아했다.', note: '상태 - 지속되는 감정' },
          { en: 'I know the answer.', ko: '나는 답을 알고 있다.', note: '상태 - 지속되는 인지' },
          { en: 'This bike belongs to my brother.', ko: '이 자전거는 내 형의 것이다.', note: '상태 - 지속되는 소유 관계' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '일반동사 — 상태',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'know' },
          { tag: 'O', text: 'the answer' },
        ],
        translation: '나는 답을 알고 있다.',
      },
      { type: 'heading', text: '발생을 나타내는 일반동사' },
      {
        type: 'example',
        items: [
          { en: 'The accident happened suddenly.', ko: '그 사고는 갑자기 일어났다.', note: '발생 - 사건이 생김' },
          { en: 'A strange noise occurred in the basement.', ko: '지하실에서 이상한 소리가 발생했다.', note: '발생 - 사건이 생김' },
          { en: 'A big fire broke out near the market.', ko: '시장 근처에서 큰 불이 났다.', note: '발생 - 사건이 생김' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '일반동사 — 발생',
        parts: [
          { tag: 'S', text: 'The accident' },
          { tag: 'V', text: 'happened' },
          { tag: 'M', text: 'suddenly' },
        ],
        translation: '그 사고는 갑자기 일어났다.',
      },
      {
        type: 'p',
        text: '동작 문장은 주어가 몸을 움직여 수행하는 구체적인 행동을, 상태 문장은 주어가 지속적으로 가지고 있는 감정·인지·소유 관계 등을, 발생 문장은 주어의 의지와 무관하게 저절로 생기는 사건을 나타냅니다. 이렇게 일반동사는 동작, 상태, 발생 세 가지 중 하나를 나타내며 문장의 핵심 의미를 담습니다.',
      },
      {
        type: 'table',
        caption: '일반동사가 나타내는 세 가지',
        headers: ['구분', '설명', '예시'],
        rows: [
          ['동작', '주어가 하는 구체적인 행동', 'play, run, write, eat, build'],
          ['상태', '주어가 지속적으로 가지는 감정·인지·소유', 'like, know, believe, belong, want'],
          ['발생', '어떤 사건·일이 생기는 것', 'happen, occur, break out'],
        ],
      },
      {
        type: 'icon-row',
        caption: '일반동사가 나타내는 세 가지',
        items: [
          { icon: '🏃', label: '동작', sub: 'play, run, build' },
          { icon: '🧘', label: '상태', sub: 'like, know, belong' },
          { icon: '💥', label: '발생', sub: 'happen, occur' },
        ],
      },
      { type: 'heading', text: '상태를 나타내는 일반동사와 진행형' },
      {
        type: 'p',
        text: 'like, know, believe, belong, want처럼 상태를 나타내는 일반동사는 "지금 잠깐" 벌어지는 일이 아니라 원래부터 계속 그런 상태이므로, 특별한 강조 의도가 없다면 진행형(-ing)으로 잘 쓰지 않는 경향이 있습니다. 이 부분은 10장(시제)에서 더 자세히 다루므로, 여기서는 상태 동사에 -ing를 습관적으로 붙이지 않도록 주의한다는 정도만 기억해두면 충분합니다.',
      },
      {
        type: 'example',
        items: [
          { en: '*I am liking this song.', ko: '(오답) 나는 이 노래를 좋아하는 중이다.', note: '상태 동사 like에 진행형을 쓴 어색한 문장' },
          { en: 'I like this song.', ko: '(정답) 나는 이 노래를 좋아한다.', note: '상태 동사는 단순현재로 표현' },
        ],
      },
      { type: 'heading', text: '일반동사의 의문문과 부정문' },
      {
        type: 'note',
        text: '일반동사는 be동사와 달리 스스로 의문문이나 부정문을 만들지 못합니다. 의문문을 만들 때는 Do/Does를, 부정문을 만들 때는 do not/does not을 동사와 함께 사용해야 합니다. 예) Does he want something? / He does not want something.',
      },
      {
        type: 'example',
        items: [
          { en: '*Wants he something?', ko: '(오답) 그는 무엇을 원하니?', note: '일반동사가 스스로 앞으로 나가 의문문을 만들 수 없음' },
          { en: 'Does he want something?', ko: '(정답) 그는 무엇을 원하니?', note: 'Does가 앞으로 나가 의문문을 만듦' },
        ],
      },
      { type: 'heading', text: '왜 일반동사는 Do의 도움이 필요할까?' },
      {
        type: 'p',
        text: 'be동사는 He is in the house.를 Is he in the house?로 바꾸듯 스스로 주어 앞으로 이동해 의문문을 만들 수 있습니다. 하지만 일반동사 want는 스스로 앞으로 나가 의문문을 만들지 못하기 때문에, 대신 조동사 Do/Does가 문장 맨 앞에 위치하여 의문문을 만듭니다. 시제가 현재이고 주어가 3인칭 단수일 경우에는 조동사 Do와 주어의 수를 일치시켜 Does로 써주어야 합니다.',
      },
      {
        type: 'p',
        text: '부정문도 마찬가지입니다. be동사는 뒤에 not만 붙이면 되지만(He is not in the house.), 일반동사는 스스로 부정문을 만들지 못하기 때문에 do 또는 does가 부정 요소 not과 함께 쓰여야 합니다(He does not want something.).',
      },
      { type: 'heading', text: '역사 속의 do - 셰익스피어 《햄릿》' },
      {
        type: 'p',
        text: '언어학자 Anthony Warner는 그의 저서에서 do의 사용이 어떻게 발전했는지를 설명합니다. 처음에는 특정한 의미 없이 사용되던 do가 점차 강조, 부정, 질문 등에 사용되는 보조동사로 자리 잡게 되었다고 합니다. 윌리엄 셰익스피어의 《햄릿》(1600년경)에 나오는 "He doth protest too much."라는 문장에서 doth는 does의 고어 형태입니다. 이 문장의 주어와 동사 자리를 바꾸면 "Doth(Does) he protest too much?"가 되는데, 이는 오늘날 일반동사의 의문문을 만드는 방식과 다르지 않습니다. 즉 일반동사의 의문문도 be동사의 의문문처럼 원래는 주어와 동사의 자리를 바꾸는 방식이었고, 현대 영어로 오면서 특별한 의미 없이 쓰이던 do, does가 문장에서 사라진 것으로 볼 수 있습니다.',
      },
      {
        type: 'note',
        text: '부정문에도 비슷한 역사가 있습니다. 고대 영어에서는 일반동사 바로 뒤에 not을 붙여 "I want not something."처럼 쉽게 부정문을 만들었습니다. 그런데 중세 영어로 넘어오면서 "I do not want something."과 같이 do가 추가되었습니다.',
      },
      {
        type: 'callout',
        title: '핵심 정리 - 일반동사',
        items: [
          '일반동사는 주어의 동작, 상태, 발생을 나타내는 동사이다.',
          'be동사가 주어와 보어를 연결하는 것과 달리, 일반동사는 의미 그 자체가 문장의 핵심이 된다.',
          '상태를 나타내는 일반동사(like, know, belong 등)는 특별한 이유가 없다면 진행형으로 잘 쓰지 않는다.',
          '일반동사는 스스로 의문문·부정문을 만들지 못해 do/does의 도움이 필요하다.',
          '일반동사에 do/does가 필요한 것은, 원래 특정한 의미 없이 쓰이던 do가 강조·부정·질문에 쓰이는 보조동사로 자리 잡은 역사적 흐름과 관련이 있다.',
        ],
      },
    ],
  },

  'ch7-3': {
    title: '조동사 - 가능성의 정도',
    blocks: [
      {
        type: 'p',
        text: '조동사는 be동사나 일반동사가 나타내지 못하는 가능성, 능력, 허락, 의무 등을 표현해주는 동사입니다. be동사나 일반동사를 도와준다는 뜻에서 조동사(助動詞)라고 부릅니다.',
      },
      {
        type: 'note',
        text: '조동사는 각각 능력, 허락, 의무 등 서로 다른 뜻을 나타내는 것처럼 보이지만, 사실은 모두 "일이 발생할 가능성의 정도"를 나타낸다고 이해하면 편합니다. will은 실현 가능성이 높은 상황, can은 실현 가능성이 있는 정도, may는 불확실한 가능성을 나타냅니다. 이 가능성의 정도는 화자(말하는 사람)의 의견이나 판단에 따라 결정됩니다.',
      },
      { type: 'heading', text: '같은 상황, 다른 확신 - can vs may vs will' },
      {
        type: 'p',
        text: '똑같은 상황을 놓고도 화자가 얼마나 확신하는지에 따라 can, may, will 중 다른 조동사를 고르게 됩니다. "미나가 파티에 올까?"라는 질문에 대한 세 가지 대답을 비교해봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Mina may come to the party.', ko: '미나가 파티에 올지도 모른다.', note: '불확실한 가능성 - 반반 정도, 잘 모르겠다는 뉘앙스' },
          { en: 'Mina can come to the party.', ko: '미나는 파티에 올 수 있다.', note: '조건만 맞으면 실현 가능 - 시간이 되면 온다는 뉘앙스' },
          { en: 'Mina will come to the party.', ko: '미나는 파티에 올 것이다.', note: '높은 확신 - 거의 확실하다는 뉘앙스' },
        ],
      },
      {
        type: 'p',
        text: '세 문장 모두 "미나가 온다"는 같은 내용을 말하고 있지만, 화자가 느끼는 확신의 정도는 may(가장 낮음) < can(중간) < will(가장 높음) 순으로 달라집니다. 이렇게 조동사를 고르는 기준은 사실 여부가 아니라 화자의 판단이라는 점을 기억해야 합니다.',
      },
      {
        type: 'icon-row',
        caption: '확신의 정도 - can vs may vs will',
        items: [
          { icon: '🔵', label: 'can', sub: '가능성 있음' },
          { icon: '🌫️', label: 'may', sub: '불확실' },
          { icon: '🎯', label: 'will', sub: '높은 확신' },
        ],
      },
      { type: 'heading', text: 'can - 실현 가능성이 있는 정도' },
      {
        type: 'p',
        text: 'can은 흔히 "~할 수 있다"라는 뜻으로 알고 있지만, 정확히는 "실현 가능성이 있는 정도"를 나타내는 조동사입니다. 이 가능성이 구체적인 상황에 따라 능력, 허가, 부탁 등의 의미로 해석됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'A lot of accidents can happen here.', ko: '많은 사고가 여기에서 일어날 수 있다.', note: '가능성' },
          { en: 'You can play the trumpet very well.', ko: '너는 트럼펫을 매우 잘 연주할 수 있다.', note: '높은 실현 가능성 → 능력' },
          { en: "That can't be true.", ko: '그것은 사실일 리 없다.', note: 'not이 붙어 낮은 실현 가능성 → 강한 추측' },
          { en: 'Can I open the window?', ko: '창문을 열어도 될까요?', note: '허락을 구하는 상황' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '조동사 can — 능력',
        parts: [
          { tag: 'S', text: 'You' },
          { tag: 'V', text: 'can play' },
          { tag: 'O', text: 'the trumpet' },
          { tag: 'M', text: 'very well' },
        ],
        translation: '너는 트럼펫을 매우 잘 연주할 수 있다.',
      },
      { type: 'heading', text: 'may - 강제성 없이 선택할 수 있는 상황' },
      {
        type: 'p',
        text: 'may는 흔히 "~해도 된다", "~일지도 모른다"로 해석하지만, 모든 상황에 폭넓게 적용하려면 "(강제성 없이) 선택할 수 있는 상황"에서 쓰이는 조동사로 이해하는 것이 좋습니다. 이 선택 가능성이 상황에 따라 허락, 부탁, 불확실한 추측의 의미로 나타납니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'You may go if you want to.', ko: '원하면 너는 갈 수 있어.', note: '원하는 대로 선택 가능 → 허락' },
          { en: 'May I ask you a personal question?', ko: '내가 개인적인 질문 하나 해도 될까?', note: '상대가 선택할 수 있는 상황 → 부탁' },
          { en: 'May I use your smartphone?', ko: '휴대폰을 사용할 수 있을까요?', note: '상대가 선택할 수 있는 상황 → 부탁' },
          { en: 'It may rain tomorrow.', ko: '내일 비가 올지도 모른다.', note: '불확실한 가능성 → 추측' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '조동사 may — 불확실한 추측',
        parts: [
          { tag: 'S', text: 'It' },
          { tag: 'V', text: 'may rain' },
          { tag: 'M', text: 'tomorrow' },
        ],
        translation: '내일 비가 올지도 모른다.',
      },
      { type: 'heading', text: 'will - 실현 가능성이 높은 상황' },
      {
        type: 'p',
        text: 'will은 일어날 확률이나 가능성이 높은 상황에서 쓰이는 조동사입니다. 주어의 강한 의지를 나타낼 때도, 가능성이 높은 추측을 나타낼 때도 will을 사용합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I am tired, but I will finish this project tonight.', ko: '나는 피곤하지만, 오늘 밤까지 이 프로젝트를 끝낼 거야.', note: '주어의 의지 → 높은 가능성' },
          { en: 'Don’t worry, I will help you with your homework.', ko: '걱정마, 내가 숙제 도와줄게.', note: '주어의 의지' },
          { en: 'I think it will rain later in the day.', ko: '내가 생각하기에 나중에 비가 올 것 같다.', note: '가능성 높은 추측' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '조동사 will — 높은 확신',
        parts: [
          { tag: 'S', text: 'Mina' },
          { tag: 'V', text: 'will come' },
          { tag: 'M', text: 'to the party' },
        ],
        translation: '미나는 파티에 올 것이다.',
      },
      {
        type: 'table',
        caption: '대표적인 조동사가 나타내는 의미',
        headers: ['조동사', '가능성의 정도', '상황별 의미'],
        rows: [
          ['will', '실현 가능성이 높음', '미래, 의지, 확신에 가까운 추측'],
          ['can', '실현 가능성이 있는 정도', '능력, 허락, 부탁, (not과 함께) 강한 부정 추측'],
          ['may', '불확실한 가능성 (강제성 없는 선택)', '허락, 부탁, 불확실한 추측'],
        ],
      },
      { type: 'heading', text: '흔히 하는 실수 - 조동사의 형태' },
      {
        type: 'p',
        text: '조동사는 주어가 3인칭 단수여도 -s를 붙이지 않고, 바로 뒤에는 동사원형이 옵니다. 또한 두 개의 조동사를 나란히 겹쳐 쓸 수 없습니다.',
      },
      {
        type: 'example',
        items: [
          { en: '*He cans swim very well.', ko: '(오답) 그는 수영을 매우 잘한다.', note: '조동사에 -s를 붙이는 실수' },
          { en: 'He can swim very well.', ko: '(정답) 그는 수영을 매우 잘한다.', note: '조동사는 주어의 인칭·수와 상관없이 형태가 같음' },
        ],
      },
      {
        type: 'example',
        items: [
          { en: '*He will can come tomorrow.', ko: '(오답) 그는 내일 올 수 있을 것이다.', note: '조동사 두 개를 나란히 쓴 실수' },
          { en: 'He will be able to come tomorrow.', ko: '(정답) 그는 내일 올 수 있을 것이다.', note: 'can 대신 be able to를 써서 will과 함께 사용' },
        ],
      },
      {
        type: 'callout',
        title: '핵심 정리 - 조동사',
        items: [
          '조동사는 be동사·일반동사가 나타내지 못하는 가능성, 능력, 허락, 의무 등을 표현한다.',
          '조동사의 핵심은 "일이 발생할 가능성의 정도"이며, will > can > may 순으로 실현 가능성이 낮아진다고 이해하면 편하다.',
          '같은 상황이라도 화자의 확신 정도에 따라 can·may·will 중 다른 조동사가 선택된다.',
          '조동사는 인칭·수에 따라 형태가 변하지 않고, 두 조동사를 나란히 겹쳐 쓸 수 없다.',
        ],
      },
    ],
  },
}
