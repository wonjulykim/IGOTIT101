export const ch21 = {
  'ch21-1': {
    title: '현재완료의 개념과 네 가지 의미',
    blocks: [
      {
        type: 'p',
        text: '영어 동사에는 시제(tense) 외에 상(aspect)이라는 개념도 있습니다. 시제는 "언제" 일어난 일인지를 나타내고, 상은 그 동작이 "진행 중인지, 끝났는지"를 나타냅니다. 동사의 현재시제는 일반적 사실이나 반복되는 행동, 습관을 나타내지만, 현재진행형은 지금 이 순간 진행 중인 행동을 나타냅니다. 이렇게 동작이 진행 중이면 진행상, 동작이 끝났으면 완료상이라고 부릅니다. 이번 장에서는 일의 끝남 또는 지속을 나타내는 완료 표현을 배웁니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She writes a letter every day.', ko: '그녀는 매일 편지를 쓴다.', note: '현재시제 - 반복되는 습관' },
          { en: 'She is writing a letter.', ko: '그녀는 편지를 쓰고 있다.', note: '현재진행형(진행상) - 지금 진행 중인 행동' },
        ],
      },
      { type: 'heading', text: '왜 과거시제만으로는 부족한가' },
      {
        type: 'p',
        text: '과거시제는 과거에 일어난 구체적인 행동이나 사건을 나타낼 뿐, 그 일이 현재까지 어떤 영향을 미치는지에 대해서는 아무 정보도 주지 않습니다. 아래 문장을 봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I lost my wallet yesterday.', ko: '나는 어제 지갑을 잃어버렸다.', note: '지금 지갑을 찾았는지 못 찾았는지는 알 수 없다' },
        ],
      },
      {
        type: 'p',
        text: '만약 지갑을 잃어버린 상태가 오늘까지 계속되고 있다는 것을 표현하려면 과거시제만으로는 부족합니다. 그래서 아래처럼 과거시제와 현재시제를 함께 써주어야 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I lost my wallet yesterday, and I still don’t find it today.', ko: '나는 어제 지갑을 잃어버렸다. 그리고 오늘까지도 여전히 그것을 찾지 못했다.' },
        ],
      },
      {
        type: 'p',
        text: '하지만 이렇게 두 문장(두 시제)을 이어 쓰는 것은 번거롭습니다. 그래서 영어는 "완료"라는 개념을 사용해 과거의 일이 현재까지 계속 이어지고 있음을 한 문장으로 나타냅니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I have lost my wallet since yesterday.', ko: '나는 어제부터 지갑을 잃어버린 상태이다.' },
        ],
      },
      {
        type: 'note',
        text: '현재완료 구조 : 주어 + have(has) + p.p.(과거분사). 3인칭 단수 주어에는 has를 씁니다.',
      },
      {
        type: 'timeline',
        label: '현재완료의 기본 그림 — 과거의 화살표가 지금까지 이어짐',
        now: 90,
        range: { from: 20, to: 90, text: 'have lost my wallet' },
        translation: 'I have lost my wallet since yesterday. — 어제(과거) 잃어버린 사건이 화살표처럼 뻗어 나와 "지금"까지 이어져 있습니다. 화살표가 "지금" 지점에 닿아 있다는 것 자체가 "아직도 그 영향이 남아 있다"는 뜻입니다.',
      },
      {
        type: 'p',
        text: '현재완료 문장은 대부분 "과거에 일어난 일 + 그로 인한 현재 상태"라는 두 가지 의미를 한 문장에 압축한 것으로 풀어 쓸 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I have come to my friend’s house.', ko: '나는 친구 집에 왔다.', note: '= I came to my friend’s house, and now I am here.' },
          { en: 'The train has arrived.', ko: '기차가 도착했다.', note: '= The train arrived, and now it is here.' },
          { en: 'They have moved to Seoul.', ko: '그들은 서울로 이사했다.', note: '= They moved to Seoul, and now they live there.' },
          { en: 'He has gone out.', ko: '그는 외출했다.', note: '= He went out, and now he is not here.' },
          { en: 'I have gotten up.', ko: '나는 일어났다.', note: '= I got up, and now I am awake.' },
        ],
      },
      { type: 'heading', text: '현재완료가 필요한 이유: 과거시제와의 근본적인 차이' },
      {
        type: 'p',
        text: '과거는 과거의 상황만을 나타내며 현재와는 어떤 연관성도 표현하지 않습니다. 즉 과거시제가 그리는 사건은 현재와 완전히 단절된, 이미 끝나버린 하나의 점입니다. 반면 현재완료는 과거에 일어난 일이 현재까지 연결되어 영향을 미치고 있음을 나타냅니다. 같은 사건이라도 화자가 "그 일이 지금과 무슨 상관이 있는가"를 말하고 싶으면 현재완료를, "그 일이 언제 일어났는가"라는 사실 자체만 말하고 싶으면 과거시제를 씁니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I lost my key.', ko: '나는 열쥴 잃어버렸다.', note: '과거의 사실만 진술. 지금 열쥴 찾았는지 아닌지는 이 문장만으로는 알 수 없다 — 문맥에 따라 이미 찾았을 수도 있다' },
          { en: 'I have lost my key.', ko: '나는 열쥴 잃어버린 상태이다.', note: '지금도 열쥴 없다는 뜻을 강하게 함축한다. 그래서 이 문장 다음에 "그런데 지금은 찾았어"라고 이어 붙이면 어색하다' },
          { en: 'He liked the girl three years ago.', ko: '그는 3년 전에 그녀를 좋아했다.', note: '현재도 좋아하는지는 알 수 없다' },
          { en: 'He has liked the girl for three years.', ko: '그는 3년 동안 그녀를 좋아했다.', note: '= He started to like the girl three years ago, and he still likes her. (지금도 좋아함)' },
          { en: 'I turned off the computer.', ko: '나는 컴퓨터를 껐다.', note: '지금 컴퓨터가 꺼져 있는지는 알 수 없다 — 누군가 다시 켰을 수도 있다' },
          { en: 'I have turned off the computer.', ko: '나는 컴퓨터를 껐다.', note: '= I turned off the computer, so it is off now. (지금도 꺼져 있음)' },
        ],
      },
      {
        type: 'note',
        text: '이처럼 현재완료는 과거시제가 제공하지 못하는 "현재 상태에 대한 정보"까지 함께 전달할 수 있습니다. "그 사건이 지금 이 순간에도 유효한가"를 물어보면 과거시제와 현재완료를 구별하는 데 도움이 됩니다.',
      },
      { type: 'heading', text: '자주 틀리는 지점: 현재완료 + 구체적 과거 시점 표현' },
      {
        type: 'p',
        text: '현재완료는 "지금과 이어진 과거"를 나타내므로, yesterday, last year, in 2020, three years ago, when I was young처럼 정확한 시점을 못 박는 부사(구)와는 함께 쓸 수 없습니다. 이런 표현은 그 사건을 현재와 단절된 "완전히 끝난 하나의 점"으로 고정시켜 버리기 때문에, 현재까지 이어짐을 뜻하는 현재완료와 논리적으로 충돌합니다. 이때는 반드시 과거시제를 써야 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I have visited Paris yesterday.', ko: '(오류) 나는 어제 파리를 방문했다.', note: '틀린 문장 — yesterday는 구체적 과거 시점을 못박으므로 have visited(현재완료)와 함께 쓸 수 없다' },
          { en: 'I visited Paris yesterday.', ko: '나는 어제 파리를 방문했다.', note: '올바른 문장 — 구체적 과거 시점에는 과거시제' },
          { en: 'She has finished the report last year.', ko: '(오류) 그녀는 작년에 보고서를 끝냈다.', note: '틀린 문장 — last year와 현재완료는 함께 쓰지 않는다' },
          { en: 'She finished the report last year.', ko: '그녀는 작년에 보고서를 끝냈다.', note: '올바른 문장' },
          { en: 'I have lived in this city since 2010.', ko: '나는 2010년부터 이 도시에 살고 있다.', note: '올바른 문장 — since는 "그 시점부터 지금까지"를 뜻하므로 현재완료와 잘 어울린다' },
        ],
      },
      {
        type: 'note',
        text: 'since + 과거 시점("그때부터 지금까지")과 for + 기간("~동안")은 현재완료와 자연스럽게 어울리지만, yesterday·last week·in 2020·ago처럼 사건을 과거의 한 점에 고정하는 표현은 현재완료와 함께 쓸 수 없다는 점을 반드시 기억해야 합니다.',
      },
      { type: 'heading', text: '현재완료의 네 가지 의미' },
      {
        type: 'p',
        text: '현재완료는 문맥에 따라 계속, 경험, 완료, 결과라는 네 가지 의미로 쓰입니다. 형태는 모두 "have/has + p.p."로 같지만, 함께 쓰이는 부사(since, for, ever, just, already, yet 등)와 문맥에 따라 의미가 달라집니다. 아래에서 네 가지 의미를 하나씩, 각각의 시간축 그림과 함께 살펴봅시다.',
      },
      {
        type: 'table',
        caption: '현재완료의 네 가지 용법',
        headers: ['용법', '의미', '자주 쓰는 부사', '예문'],
        rows: [
          ['계속', '과거에 시작된 상태·동작이 현재까지 이어짐', 'for, since', 'He has liked the girl for three years. (3년째 계속 좋아함)'],
          ['경험', '현재까지의 경험을 나타냄', 'ever, never, before, once', 'Has he ever been to London? (런던에 가본 경험)'],
          ['완료', '방금 막 끝난 일을 나타냄', 'just, already, yet', 'I have just finished my homework. (막 끝냄)'],
          ['결과', '과거의 동작이 남긴 현재의 결과 상태', '(주로 부사 없이)', 'The train has arrived. (도착해서 지금 여기 있음)'],
        ],
      },
      {
        type: 'icon-row',
        caption: '현재완료의 네 가지 의미, 한눈에 보기',
        items: [
          { icon: '🔁', label: '계속', sub: 'for, since' },
          { icon: '✅', label: '경험', sub: 'ever, never, before' },
          { icon: '✔️', label: '완료', sub: 'just, already, yet' },
          { icon: '➡️', label: '결과', sub: '(부사 없이)' },
        ],
      },
      { type: 'heading', text: '(1) 계속 — 과거에서 지금까지 끊이지 않고 이어짐' },
      {
        type: 'p',
        text: '"계속"의 현재완료는 과거의 한 시점에서 시작된 상태나 동작이 끊어지지 않고 지금까지 이어지고 있음을 나타냅니다. for(~동안)나 since(~부터) 같은 부사(구)와 자주 쓰입니다.',
      },
      {
        type: 'timeline',
        label: '계속 — I have lived in this city since 2010.',
        now: 92,
        range: { from: 15, to: 92, text: 'have lived (2010 ~ 지금)' },
        translation: '2010년(과거의 한 시점)에 시작된 "살고 있음"이라는 상태가 끊기지 않고 화살표처럼 이어져 지금까지 계속되고 있습니다. 화살표가 끊기지 않고 "지금"에 도달한다는 것이 핵심입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I have lived in this city since 2010.', ko: '나는 2010년부터 이 도시에 살고 있다.', note: '계속 — since + 시작 시점' },
          { en: 'He has liked the girl for three years.', ko: '그는 3년 동안 그녀를 좋아하고 있다.', note: '계속 — for + 기간' },
          { en: 'We have known each other since we were kids.', ko: '우리는 어릴 때부터 서로 알아 왔다.', note: '계속 — since + 절' },
          { en: 'She has worked at this hospital for over a decade.', ko: '그녀는 10년 넘게 이 병원에서 일하고 있다.', note: '계속 — 지금도 근무 중' },
        ],
      },
      { type: 'heading', text: '(2) 경험 — 지금까지 살아오며 겪은 일' },
      {
        type: 'p',
        text: '"경험"의 현재완료는 특정 시점을 못 박지 않고, 태어난 순간부터 지금까지의 인생 전체를 배경으로 "그런 일을 겪은 적이 있는가"를 나타냅니다. ever, never, before, once, twice 같은 부사와 자주 쓰이며, 사건이 정확히 언제 일어났는지는 중요하지 않습니다.',
      },
      {
        type: 'timeline',
        label: '경험 — I have been to Paris twice.',
        now: 90,
        points: [
          { at: 30, text: '방문(1회)', sub: '과거의 어느 시점 — 정확한 시점은 중요하지 않음' },
          { at: 60, text: '방문(2회)', sub: '과거의 또 다른 시점' },
        ],
        translation: '두 번의 방문은 과거의 여러 시점에 흩어져 있지만, 정확히 언제였는지는 중요하지 않습니다. 지금 이 순간까지의 인생 전체를 놓고 "그런 경험이 있다"는 사실만을 이야기합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Has he ever been to London?', ko: '그는 런던에 가본 적이 있니?', note: '경험을 묻는 질문' },
          { en: 'I have never been to Paris.', ko: '나는 파리에 가본 적이 없다.', note: '경험 — 부정' },
          { en: 'I have been to Paris twice.', ko: '나는 파리에 두 번 가본 적이 있다.', note: '경험 — 횟수' },
          { en: 'Have you ever tried Ethiopian food?', ko: '너는 에티오피아 음식을 먹어본 적이 있니?', note: '경험을 묻는 질문' },
          { en: 'She has read that novel before.', ko: '그녀는 그 소설을 전에 읽어본 적이 있다.', note: '경험' },
        ],
      },
      { type: 'heading', text: '(3) 완료 — 방금 막 끝난 일' },
      {
        type: 'p',
        text: '"완료"의 현재완료는 과거의 한 시점에서 시작된 일이 지금 막 끝났다는 것을 강조합니다. just(방금), already(이미), yet(아직, 부정문·의문문)과 함께 자주 쓰이며, 사건과 "지금" 사이의 시간적 거리가 매우 짧다는 느낌을 줍니다.',
      },
      {
        type: 'timeline',
        label: '완료 — I have just finished my homework.',
        now: 88,
        range: { from: 70, to: 88, text: 'have finished (막 끝남)' },
        translation: '숙제를 하던 구간이 "지금" 바로 앞에서 끝나 있습니다. 화살표의 끝이 "지금"에 거의 맞닿아 있다는 점에서 완료 용법은 계속 용법보다 지속 구간이 훨씬 짧게 그려집니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I have just finished my homework.', ko: '나는 방금 숙제를 끝냈다.', note: '완료 — just' },
          { en: 'She has already left the office.', ko: '그녀는 이미 퇴근했다.', note: '완료 — already' },
          { en: 'Have you finished your homework yet?', ko: '너는 숙제를 다 끝냈니?', note: '완료를 묻는 의문문 — yet' },
          { en: 'I haven’t finished my dinner yet.', ko: '나는 아직 저녁을 끝내지 않았다.', note: '완료의 부정 — yet' },
          { en: 'The bus has just left.', ko: '버스가 막 떠났다.', note: '완료 — just' },
        ],
      },
      { type: 'heading', text: '(4) 결과 — 과거의 동작이 남긴 지금의 상태' },
      {
        type: 'p',
        text: '"결과"의 현재완료는 특별한 부사 없이도 쓰이며, 과거의 동작 자체보다 그 동작이 남긴 "지금의 상태"에 초점을 둡니다. 문장을 "그래서 지금 ~한 상태이다"로 바꿔 이해하면 결과 용법을 쉽게 알아챌 수 있습니다.',
      },
      {
        type: 'timeline',
        label: '결과 — He has gone out.',
        now: 85,
        points: [{ at: 55, text: 'went out', sub: '외출한 사건' }],
        range: { from: 55, to: 85, text: '지금 여기 없음 (결과 상태)' },
        translation: '외출이라는 과거의 동작(점) 이후, "지금 여기 없다"는 결과 상태가 화살표처럼 이어져 지금까지 남아 있습니다. 동작 자체보다 그 결과 상태가 강조점입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'He has gone out.', ko: '그는 외출해서 지금 여기 없다.', note: '결과' },
          { en: 'The train has arrived.', ko: '기차가 도착해서 지금 여기 있다.', note: '결과' },
          { en: 'I have lost my glasses.', ko: '나는 안경을 잃어버려서 지금도 없다.', note: '결과' },
          { en: 'Someone has broken the window.', ko: '누군가 창문을 깨서 지금도 깨진 상태이다.', note: '결과' },
        ],
      },
      { type: 'heading', text: '한 대화 속에서 네 가지 의미 구별하기' },
      {
        type: 'p',
        text: '실제로는 네 가지 의미가 뒤섞인 짧은 대화 속에서 문맥으로 구별해야 하는 경우가 많습니다. 아래 대화에서 각 현재완료가 계속·경험·완료·결과 중 무엇에 해당하는지 확인해봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: 'A: Have you ever been to Japan? B: Yes, I have been there twice. I have lived in Korea my whole life, though.', ko: 'A: 일본에 가본 적 있어? B: 응, 두 번 가봤어. 그래도 나는 평생 한국에 살아왔어.', note: 'A·B의 앞부분은 경험(ever, twice), B의 뒷부분(have lived)은 계속(내 인생 전체 동안)' },
          { en: 'A: Is Jimin here? B: No, she has just left. She has gone to the airport — her flight has already been delayed twice.', ko: 'A: 지민이 여기 있어? B: 아니, 방금 나갔어. 공항에 갔어 — 비행기가 벌써 두 번이나 연착됐대.', note: 'has just left는 완료(just), has gone은 결과(지금 여기 없음), has been delayed는 경험적 반복(twice)' },
        ],
      },
      { type: 'heading', text: '현재완료의 의문문과 부정문' },
      {
        type: 'note',
        text: '의문문 : Have/Has + 주어 + p.p. ~ ?   부정문 : 주어 + have/has + not(haven’t/hasn’t) + p.p.',
      },
      {
        type: 'example',
        items: [
          { en: 'Have you finished your homework?', ko: '너는 숙제를 끝냈니?' },
          { en: 'Has she visited the new museum?', ko: '그녀는 새 박물관을 방문했니?' },
          { en: 'Have they completed the project?', ko: '그들은 프로젝트를 완료했니?' },
          { en: 'Has he ever been to London?', ko: '그는 런던에 가본 적이 있니?', note: '경험을 묻는 현재완료 의문문' },
          { en: 'I have not (haven’t) finished my homework.', ko: '나는 숙제를 끝내지 않았다.' },
          { en: 'She has not (hasn’t) visited the new museum.', ko: '그녀는 새 박물관을 방문하지 않았다.' },
          { en: 'I haven’t finished my dinner yet.', ko: '나는 아직 저녁을 끝내지 않았다.' },
          { en: 'He hasn’t called me back.', ko: '그는 나에게 다시 전화하지 않았다.' },
          { en: 'They haven’t visited the new park.', ko: '그들은 새 공원을 방문하지 않았다.' },
          { en: 'We haven’t met him before.', ko: '우리는 그를 전에 만난 적이 없다.', note: '경험의 부정' },
        ],
      },
      {
        type: 'callout',
        title: '21장 핵심 정리 (1) — 현재완료',
        items: [
          '현재완료(have/has + p.p.)는 과거의 일이 현재까지 영향을 미치고 있음을 나타낸다. 과거시제는 사건을 현재와 단절된 하나의 점으로 그리지만, 현재완료는 그 점에서 지금까지 뻗어 나온 화살표로 그린다.',
          '"I lost my key."는 지금 상태를 알려주지 않지만, "I have lost my key."는 지금도 열쥴 없는 상태임을 함축한다.',
          '현재완료는 계속(for/since), 경험(ever/never/before), 완료(just/already/yet), 결과(부사 없이, "그래서 지금 ~하다") 네 가지 의미로 쓰인다.',
          'yesterday, last year, ~ago, in+과거연도처럼 구체적인 과거 시점을 못 박는 부사(구)는 현재완료와 함께 쓸 수 없다 — 이때는 반드시 과거시제를 쓴다.',
          '의문문은 Have/Has를 주어 앞으로, 부정문은 have/has 뒤에 not을 붙인다.',
        ],
      },
    ],
  },

  'ch21-2': {
    title: '현재완료진행',
    blocks: [
      {
        type: 'p',
        text: '현재완료진행은 과거에 시작된 동작이 현재까지 계속되고 있음을 나타내는 시제입니다. 현재완료(계속적 용법)와 비교하면 거의 차이가 없어 보이지만, 강조하는 초점이 다릅니다.',
      },
      {
        type: 'note',
        text: '현재완료진행 구조 : 주어 + have/has + been + 동사-ing',
      },
      {
        type: 'table',
        caption: '현재완료 vs 현재완료진행',
        headers: ['구분', '구조', '예문', '의미'],
        rows: [
          ['현재완료', '주어 + have/has + p.p.', 'I have read the book.', '나는 그 책을 읽었다 (현재 다 읽은 상태)'],
          ['현재완료', '주어 + have/has + p.p.', 'She has worked here for five years.', '그녀는 여기서 5년 동안 일했다 (근무 이력, 현재도 근무 중)'],
          ['현재완료진행', '주어 + have/has + been + Ving', 'I have been reading the book.', '나는 그 책을 계속 읽고 있다 (아직 읽는 중)'],
          ['현재완료진행', '주어 + have/has + been + Ving', 'She has been working here for five years.', '그녀는 여기서 5년 동안 계속 일하고 있다 (일하는 과정·지속성 강조)'],
        ],
      },
      {
        type: 'p',
        text: '"I have been studying English for 20 years."는 일의 시작-진행-끝(현재) 전체에서 특히 "진행 중임"에 초점을 둡니다. 반면 "I have studied English for 20 years."는 같은 기간을 나타내지만 진행 과정보다는 지금까지의 결과·경험 자체에 초점을 둡니다.',
      },
      {
        type: 'timeline',
        label: '현재완료진행 — I have been studying English for 20 years.',
        now: 90,
        range: { from: 10, to: 90, text: 'have been studying (계속 진행 중)' },
        translation: '20년 전 시작된 공부가 하나의 연속된 "진행 구간"으로 지금까지 이어지고 있습니다. 화살표 전체가 굵게 이어져 있다는 것이 "지금도 계속 진행 중"이라는 느낌을 강조합니다.',
      },
      {
        type: 'timeline',
        label: '현재완료(계속) — I have studied English for 20 years.',
        now: 90,
        range: { from: 10, to: 90, text: 'have studied (20년의 결과·경험)' },
        translation: '같은 기간이지만, 여기서는 진행 과정 자체보다 "20년이라는 시간이 만들어낸 결과·경험"에 초점이 있습니다. 두 그림의 구간은 똑같아 보여도, 화자가 강조하려는 지점이 다릅니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I have been studying English for 20 years.', ko: '나는 20년째 영어를 계속 공부하고 있다.', note: '진행 과정 강조' },
          { en: 'I have studied English for 20 years.', ko: '나는 20년 동안 영어를 공부해왔다.', note: '지속된 사실·경험 자체 강조' },
        ],
      },
      {
        type: 'icon-row',
        caption: '현재완료 vs 현재완료진행, 초점의 차이',
        items: [
          { icon: '✔️', label: '현재완료', sub: '결과·경험에 초점' },
          { icon: '⏳', label: '현재완료진행', sub: '진행 과정에 초점' },
        ],
      },
      { type: 'heading', text: '현재완료와 현재완료진행의 세 가지 차이' },
      {
        type: 'table',
        caption: '차이 비교',
        headers: ['비교 기준', '현재완료', '현재완료진행'],
        rows: [
          ['동작의 지속성', '동작·상태의 완료 또는 경험을 강조', '동작이 과거에 시작되어 현재까지 계속됨을 강조'],
          ['강조하는 내용', '결과나 상태에 초점 (예: She has cleaned the house. — 청소 완료, 깨끗해진 상태)', '동작의 지속성·진행 과정에 초점 (예: She has been cleaning the house. — 청소하는 과정)'],
          ['지속 시간', '결과·상태가 중요하며 정확한 지속 시간은 부차적 (예: They have built a new school. — 완공된 결과)', '얼마나 오래 지속되었는지를 강조 (예: They have been building a new school for six months. — 6개월째 짓는 중)'],
        ],
      },
      { type: 'heading', text: '문맥으로 비교하기' },
      {
        type: 'p',
        text: '같은 상황도 화자가 무엇에 주목하느냐에 따라 현재완료와 현재완료진행 중 하나를 고르게 됩니다. 아래 짝지어진 예문들을 통해 그 차이를 좀 더 자세히 느껴봅시다.',
      },
      {
        type: 'example',
        items: [
          { en: 'She has cleaned the house.', ko: '그녀는 집을 청소했다.', note: '결과·완료 강조 — 지금 집이 깨끗한 상태' },
          { en: 'She has been cleaning the house.', ko: '그녀는 집을 계속 청소하고 있다(했다).', note: '과정 강조 — 아직 안 끝났을 수도 있고, 방금 끝났어도 "청소하느라 애썼다"는 과정에 초점' },
          { en: 'They have built a new school.', ko: '그들은 새 학교를 지었다.', note: '결과 강조 — 학교가 완공되어 존재함' },
          { en: 'They have been building a new school for six months.', ko: '그들은 6개월째 새 학교를 짓고 있다.', note: '지속 시간·진행 과정 강조 — 아직 짓는 중' },
          { en: 'I have written three emails this morning.', ko: '나는 오늘 아침에 이메일을 세 통 썼다.', note: '완료된 결과의 개수를 강조 — 진행형은 개수를 세기에 부자연스럽다' },
          { en: 'I have been writing emails all morning.', ko: '나는 오전 내내 이메일을 계속 써왔다.', note: '지속된 과정·피로감을 강조' },
        ],
      },
      { type: 'heading', text: '자주 틀리는 지점: 상태 동사를 진행형으로 쓰는 실수' },
      {
        type: 'p',
        text: 'know, believe, own, belong, love(대체로), like(대체로)처럼 순간이 아니라 지속적인 "상태"를 나타내는 동사는 원래 진행형(-ing)으로 잘 쓰이지 않습니다. 그래서 이런 동사는 "계속"의 의미를 나타낼 때도 현재완료진행이 아니라 현재완료를 씁니다. have, own, belong처럼 소유·소속을 나타내는 동사도 마찬가지입니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I have been knowing her for ten years.', ko: '(오류) 나는 그녀를 10년 동안 알아왔다.', note: '틀린 문장 — know는 상태 동사이므로 진행형으로 쓰지 않는다' },
          { en: 'I have known her for ten years.', ko: '나는 그녀를 10년 동안 알아왔다.', note: '올바른 문장 — 현재완료(계속)' },
          { en: 'She has been owning this house for 20 years.', ko: '(오류) 그녀는 20년 동안 이 집을 소유해왔다.', note: '틀린 문장 — own은 상태 동사' },
          { en: 'She has owned this house for 20 years.', ko: '그녀는 20년 동안 이 집을 소유해왔다.', note: '올바른 문장' },
          { en: 'I have been believing that he is right.', ko: '(오류) 나는 그가 맞다고 계속 믿어왔다.', note: '틀린 문장 — believe는 상태 동사' },
          { en: 'I have believed that he is right since the beginning.', ko: '나는 처음부터 그가 맞다고 믿어왔다.', note: '올바른 문장' },
        ],
      },
      {
        type: 'note',
        text: '반대로 work, study, live, wait, rain, build처럼 동작성이 강한 동사는 계속의 의미를 나타낼 때 현재완료와 현재완료진행 둘 다 자연스럽게 쓸 수 있으며, 이때는 위에서 배운 대로 "결과·경험"이냐 "진행 과정"이냐로 의미가 갈립니다.',
      },
      { type: 'heading', text: '문맥 속에서 비교하기 — 짧은 대화' },
      {
        type: 'p',
        text: '실제 대화에서는 상대가 묻는 질문의 초점(결과인지 진행 과정인지)에 따라 대답에서 현재완료와 현재완료진행 중 하나가 자연스럽게 선택됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'A: Have you finished the report?  B: Not yet — I have been working on it all day.', ko: 'A: 보고서 끝냈어? B: 아직. 하루 종일 계속 작업하고 있어.', note: 'A는 완료 여부(결과)를 묻고, B는 진행 과정을 강조해 대답한다' },
          { en: 'A: Why are your hands wet?  B: I have been washing the dishes.', ko: 'A: 손이 왜 젖어 있어? B: 계속 그릇을 씻고 있었거든.', note: '지금 눈에 보이는 상태의 원인을 진행 과정으로 설명 — 현재완료진행의 대표적 쓰임' },
          { en: 'A: Where is the car? B: I have washed it — it’s in the garage now, all clean.', ko: 'A: 차 어디 있어? B: 세차했어. 지금 차고에 깨끗하게 있어.', note: '결과(깨끗해진 상태)에 초점을 둔 현재완료' },
        ],
      },
      {
        type: 'callout',
        title: '21장 핵심 정리 (2) — 현재완료진행',
        items: [
          '현재완료진행(have/has been + Ving)은 과거에 시작된 동작이 현재까지 계속 진행 중임을 강조한다.',
          '현재완료는 결과·완료·경험에 초점을 두고, 현재완료진행은 동작의 지속 과정 자체에 초점을 둔다.',
          '지속 시간·진행 중인 느낌을 강조하고 싶을 때는 현재완료진행이, 결과·완성된 사실을 강조하고 싶을 때는 현재완료가 더 자연스럽다.',
          'know, believe, own, belong처럼 상태를 나타내는 동사는 진행형으로 잘 쓰이지 않으므로, 계속의 의미라도 현재완료진행이 아니라 현재완료를 쓴다.',
          '대화에서는 상대의 질문이 결과를 묻는지 진행 과정을 묻는지에 따라 자연스럽게 현재완료와 현재완료진행이 갈린다.',
        ],
      },
    ],
  },

  'ch21-3': {
    title: '과거완료와 미래완료',
    blocks: [
      { type: 'heading', text: '과거완료가 필요한 이유' },
      {
        type: 'p',
        text: '과거완료 시제는 과거의 특정 시점보다 이전에 완료된 동작이나 상태를 나타낼 때 사용합니다. 과거에 일어난 두 사건을 모두 과거시제로만 표현하면, 두 사건이 순차적으로 일어났을 때 무엇이 먼저 일어났는지 정확히 파악하기 어렵기 때문에 과거완료가 필요합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'When I got to the station, the train left.', ko: '내가 역에 도착했을 때, 기차는 떠났다.', note: '두 사건이 매우 가깝게 일어났음을 암시할 뿐, 어느 쪽이 먼저인지 명확하지 않음 — 도착과 거의 동시에 떠났을 수도 있음' },
          { en: 'When I got to the station, the train had left.', ko: '내가 역에 도착했을 때, 기차는 이미 떠나 있었다.', note: '과거완료(had left)로 기차가 떠난 사건이 먼저 일어났음을 명확히 함' },
        ],
      },
      {
        type: 'note',
        text: '과거완료 구조 : 주어 + had + p.p. — 두 과거 사건 중 시간적으로 더 앞선 사건에 씁니다. 다시 말해 "과거의 어느 시점보다 더 과거"에 일어난 일을 나타냅니다.',
      },
      {
        type: 'timeline',
        label: '단순 과거만 쓴 경우 — 순서가 불분명함',
        now: 95,
        points: [{ at: 55, text: 'got to the station / the train left', sub: '두 사건이 거의 동시로 보임 — 어느 쪽이 먼저인지 불명확' }],
        translation: 'When I got to the station, the train left. — 두 사건이 시간축 위 거의 같은 지점에 뭉쳐 있어서, 도착과 출발 중 어느 쪽이 먼저인지 그림만으로는 구별되지 않습니다.',
      },
      {
        type: 'timeline',
        label: '과거완료로 두 과거 시점을 구분함 — the train had left',
        now: 95,
        points: [
          { at: 30, text: 'the train had left', sub: '더 이전의 과거(과거완료) — 기차가 먼저 떠남' },
          { at: 55, text: 'I got to the station', sub: '기준이 되는 과거(단순 과거) — 그 다음에 내가 도착함' },
        ],
        translation: '기차가 떠난 사건이 "내가 도착한 과거 시점"보다도 더 이전에 일어났음을 두 개의 과거 지점으로 나누어 보여줍니다. had left는 got보다 왼쪽(더 먼 과거)에 위치합니다 — 이것이 과거완료의 핵심 그림입니다.',
      },
      {
        type: 'p',
        text: '이렇게 과거완료는 "과거의 어느 시점(예: 내가 도착한 시점)"을 기준으로 삼고, 그 기준 시점보다 한 걸음 더 앞선 과거에 일어난 일을 표현합니다. 현재완료가 "현재"를 기준으로 화살표를 그린다면, 과거완료는 그 기준점 자체가 과거로 옮겨간 것뿐, 원리는 똑같습니다.',
      },
      {
        type: 'p',
        text: '과거완료 문장에는 before, after 같은 시간 부사절이 함께 쓰이는 경우가 많습니다. 과거완료만으로도 사건의 선후 관계를 나타낼 수 있지만, before나 after를 더하면 두 사건 사이의 시간적 관계가 훨씬 더 분명해지고, 독자가 순서를 혼동할 가능성이 줄어듭니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I had finished my homework before I went out.', ko: '나는 외출하기 전에 숙제를 끝냈다.', note: '숙제를 끝낸 일(had finished)이 외출(went out)보다 먼저' },
          { en: 'She had left the office before the meeting started.', ko: '그녀는 회의가 시작되기 전에 사무실을 떠났다.', note: '사무실을 떠난 일이 회의 시작보다 먼저' },
          { en: 'I went out after I had finished my homework.', ko: '나는 숙제를 끝낸 후에 외출했다.', note: 'after 뒤에 과거완료(had finished)가 와서 더 앞선 사건임을 나타냄' },
          { en: 'The meeting started after she had left the office.', ko: '그녀가 사무실을 떠난 후에 회의가 시작되었다.', note: 'after 뒤의 과거완료가 더 앞선 사건' },
          { en: 'By the time the police arrived, the thief had already escaped.', ko: '경찰이 도착했을 때쯔음, 도둑은 이미 도망친 뒤였다.', note: '경찰 도착(기준 과거)보다 도둑의 도주(과거완료)가 더 앞섬' },
          { en: 'I didn’t recognize him because he had changed so much.', ko: '나는 그가 너무 많이 변해서 그를 알아보지 못했다.', note: '변화(had changed)가 알아보지 못한 사건(didn’t recognize)보다 먼저 일어남' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '과거완료로 사건 순서 나타내기',
        parts: [
          { tag: 'M', text: 'When I got to the station,' },
          { tag: 'S', text: 'the train' },
          { tag: 'V', text: 'had left' },
        ],
        translation: '내가 역에 도착했을 때(과거), 기차는 이미 떠나 있었다(그보다 앞선 과거 = 과거완료).',
      },
      { type: 'heading', text: '자주 틀리는 지점: 두 사건에 모두 과거완료를 쓰는 오류' },
      {
        type: 'p',
        text: '과거완료는 두 사건 중 "더 앞선" 사건에만 씁니다. 기준이 되는(나중에 일어난) 사건에는 단순 과거를 그대로 씁니다. 두 사건 모두에 had + p.p.를 쓰면 어느 쪽이 기준 시점인지 알 수 없게 되어 오히려 혼란을 줍니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'When I had arrived, the train had left.', ko: '(오류) 내가 도착했을 때, 기차는 떠나 있었다.', note: '틀린 문장 — 기준이 되는 사건(도착)에도 과거완료를 쓰면 어느 쪽이 더 앞선 사건인지 구분되지 않는다' },
          { en: 'When I arrived, the train had left.', ko: '내가 도착했을 때, 기차는 떠나 있었다.', note: '올바른 문장 — 기준 사건(arrived)은 단순 과거, 더 앞선 사건(had left)만 과거완료' },
        ],
      },
      { type: 'heading', text: '미래완료' },
      {
        type: 'p',
        text: '미래완료는 미래의 특정 시점을 기준으로, 그 시점까지 어떤 동작이나 상태가 완료되어 있을 것임을 나타냅니다. 현재완료가 "현재"를 기준점으로, 과거완료가 "과거의 어느 시점"을 기준점으로 삼는다면, 미래완료는 "미래의 어느 시점"을 기준점으로 삼는다는 점만 다릅니다.',
      },
      {
        type: 'note',
        text: '미래완료 구조 : 주어 + will have + p.p. — 흔히 "by + 미래 시점"과 함께 쓰입니다.',
      },
      {
        type: 'timeline',
        label: '미래완료 — I will have finished this report by tomorrow.',
        now: 40,
        range: { from: 40, to: 80, text: 'will have finished (완료될 예정)' },
        points: [{ at: 80, text: 'tomorrow (기준이 되는 미래 시점)' }],
        translation: '"지금(40)"에서 시작해 미래의 기준 시점인 "내일(80)"에 도달할 때까지, 보고서 작성이 완료되어 있을 것임을 나타냅니다. 미래완료는 기준점이 미래로 옮겨갔다는 점만 다를 뿐, "그 시점까지 일이 끝나 있음"을 그리는 원리는 현재완료·과거완료와 같습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'I will have finished this report by tomorrow.', ko: '나는 내일까지는 이 보고서를 끝내 놓을 것이다.', note: '내일(미래 시점)을 기준으로 그 전에 완료' },
          { en: 'By the time you arrive, we will have already eaten dinner.', ko: '네가 도착할 때쯔면, 우리는 이미 저녁을 다 먹었을 것이다.', note: '네가 도착하는 미래 시점을 기준으로 완료' },
          { en: 'She will have lived in Seoul for ten years next month.', ko: '그녀는 다음 달이면 서울에 산 지 10년이 될 것이다.', note: '미래 시점까지 이어지는 계속의 의미' },
          { en: 'By 2030, he will have graduated from college.', ko: '2030년쯔면 그는 대학을 졸업해 있을 것이다.', note: '2030년(미래 시점)을 기준으로 완료' },
        ],
      },
      {
        type: 'icon-row',
        caption: '완료시제의 기준 시점',
        items: [
          { icon: '⏱️', label: '현재완료', sub: '기준: 현재' },
          { icon: '⏪', label: '과거완료', sub: '기준: 과거의 한 시점' },
          { icon: '⏩', label: '미래완료', sub: '기준: 미래의 한 시점' },
        ],
      },
      { type: 'heading', text: '완료시제 정리 — 기준점만 다를 뿐, 원리는 하나' },
      {
        type: 'p',
        text: '현재완료·과거완료·미래완료는 모두 "어느 한 기준 시점까지 어떤 일이 끝나 있거나 이어져 있음"을 화살표로 그린다는 점에서 원리가 같습니다. 다른 것은 오직 그 기준 시점이 현재냐, 과거의 한 지점이냐, 미래의 한 지점이냐 뿐입니다.',
      },
      {
        type: 'table',
        caption: '현재완료·과거완료·미래완료 비교',
        headers: ['시제', '구조', '기준 시점', '의미', '예문'],
        rows: [
          ['현재완료', 'have/has + p.p.', '현재', '과거의 일이 현재까지 이어짐(계속·경험·완료·결과)', 'I have lived here for 10 years.'],
          ['과거완료', 'had + p.p.', '과거의 한 시점', '그 과거 시점보다 더 이전에 일어난 일', 'The train had left before I arrived.'],
          ['미래완료', 'will have + p.p.', '미래의 한 시점', '그 미래 시점까지 완료될(예정인) 일', 'I will have finished it by tomorrow.'],
        ],
      },
      {
        type: 'callout',
        title: '21장 핵심 정리 (3) — 과거완료·미래완료',
        items: [
          '과거완료(had + p.p.)는 과거의 두 사건 중 더 먼저 일어난 사건을 나타낸다 — 기준이 되는(나중) 사건은 단순 과거로 그대로 둔다.',
          '두 사건 모두에 과거완료를 쓰면 어느 쪽이 기준 시점인지 알 수 없어지므로, 더 앞선 사건에만 had + p.p.를 쓴다.',
          'before/after 같은 시간 부사절은 과거완료가 나타내는 사건의 순서를 더욱 명확하게 해준다.',
          '미래완료(will have + p.p.)는 미래의 특정 시점까지 완료되어 있을 일을 나타내며, 흔히 by + 미래 시점과 함께 쓰인다.',
          '현재완료·과거완료·미래완료는 기준 시점이 각각 현재·과거·미래라는 점만 다르고, "그 시점까지 일이 끝나 있음(또는 이어져 있음)"을 나타내는 원리는 같다.',
        ],
      },
    ],
  },
}
