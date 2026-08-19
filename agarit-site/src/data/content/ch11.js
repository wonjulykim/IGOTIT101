export const ch11 = {
  'ch11-1': {
    title: '명령문',
    blocks: [
      {
        type: 'p',
        text: '명령문은 상대방에게 어떤 행동을 지시하는 문장입니다. **명령문은 우리가 지금까지 배운 문장과 다른 점이 있는데, 바로 주어로 시작하는 것이 아니라 동사원형으로 문장을 시작한다는 것입니다.** 동사원형이란 동사에 시제가 없는 형태를 말합니다. 따라서 우리는 "명령문은 왜 주어로 시작하지 않는가?"와 "명령문의 동사에는 왜 시제가 없는가?"라는 두 가지 질문에 대한 답을 찾아야 합니다. 이 문장들을 단독으로 보면 그 이유를 이해하기 힘들기 때문에, 반드시 문맥(상황)을 함께 살펴봐야 합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Open the door.', ko: '문 열어.' },
          { en: 'Raise your hand.', ko: '손 들어.' },
          { en: 'Turn on the TV.', ko: 'TV 틀어.' },
        ],
      },
      { type: 'heading', text: '명령문에 주어가 없는 이유' },
      {
        type: 'p',
        text: '명령문 문장만 따로 떼어놓고 보면 "왜 주어 없이 동사원형으로 시작하는가?"를 이해하기 어렵습니다. 명령문을 이해하려면 반드시 문맥(상황)이 필요합니다. 예를 들어 원준이는 방 안 공기가 탁해 문을 열어놓고 독서를 하고 있었는데, 그러던 와중에 동생이 원준이의 방 안으로 들어오면서 문을 닫았다고 해봅시다. 이때 원준이는 동생에게 "Open the door!"라고 말합니다. 이 상황에서는 문맥을 통해 "문을 열어라"라고 말하는 대상이 동생이라는 것을 알 수 있습니다. 여기서 명령문에 주어가 없는 첫 번째 이유를 알 수 있습니다. 바로 **명령문의 대상(동생, 즉 듣는 사람 You)이 문맥을 통해 얼마든지 유추될 수 있기 때문입니다.**',
      },
      {
        type: 'p',
        text: '명령문은 항상 말하는 사람의 눈앞에 있는 상대방, 즉 듣는 사람(You)에게 하는 말입니다. 대화 상황에서 "누구에게" 말하는지는 굳이 밝히지 않아도 서로 뻔히 알 수 있는 정보입니다. 만약 원준이가 "You open the door!"라고 매번 주어까지 붙여 말한다면 오히려 부자연스럽고 어색하게 들릴 것입니다. 이처럼 문맥상 이미 다 아는 정보이기 때문에, **명령문은 주어 You를 생략하고 바로 동사원형으로 문장을 시작합니다.**',
      },
      {
        type: 'transform',
        from: [
          { label: '평서문의 주어', text: 'You' },
          { label: '동사', text: 'clean your room' },
        ],
        to: { label: '명령문 (주어 생략 + 동사원형 시작)', text: 'Clean your room.' },
        note: '문맥상 "듣는 사람(You)"에게 하는 말이라는 것이 뻔하므로 주어 You는 생략되고, 동사는 시제 없는 동사원형(clean)으로 바뀌어 문장 맨 앞에 온다.',
      },
      {
        type: 'note',
        text: '**명령문의 생략된 주어는 항상 You입니다.** 실제로는 (You) Open the door.처럼 You가 숨어 있는 문장입니다.',
      },
      {
        type: 'sentence-diagram',
        label: '명령문의 숨은 주어',
        parts: [
          { tag: '(S)', text: '(You)' },
          { tag: 'V', text: 'Open' },
          { tag: 'O', text: 'the door' },
        ],
        translation: '(You) Open the door. → 문맥상 주어 You가 생략되고 동사원형 Open으로 문장이 시작된다.',
      },
      { type: 'heading', text: '명령문에 주어가 드러나는 경우' },
      {
        type: 'p',
        text: '지금까지는 명령문의 주어 You가 문맥상 뻔하기 때문에 생략된다고 배웠습니다. 그런데 **듣는 사람이 여러 명이라 "누구에게" 하는 말인지 콕 집어 밝혀야 할 때는, 명령문에도 주어를 그대로 남겨둡니다.** 예를 들어 교실에 학생이 여러 명 있을 때 "모두 앉아라"라고 하려면 Sit down.만으로는 부족하고, 주어 Everybody를 붙여 누구를 향한 말인지 분명히 해야 합니다. 이때도 동사는 여전히 시제가 없는 동사원형을 그대로 쓴다는 점은 변하지 않습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Everybody sit down.', ko: '모두 앉으세요.', note: '여러 사람 중 "전부"를 지시하기 위해 주어 Everybody를 명시' },
          { en: 'Someone open the window.', ko: '누가 창문 좀 열어줘.', note: '특정하지 않은 "누군가"를 지시할 때도 주어를 남김' },
          { en: 'Phillip, come here.', ko: 'Phillip, 이리 와.', note: '이름을 불러 여러 사람 중 한 명을 콕 집어 지시' },
          { en: 'Have fun, Anne.', ko: 'Anne, 재미있게 놀아.', note: '주어(부르는 이름)가 문장 끝에 올 수도 있음' },
          { en: 'You stay there.', ko: '너는 거기 있어.', note: '다른 사람 말고 "바로 너"라는 것을 강조하기 위해 You를 남김' },
        ],
      },
      {
        type: 'note',
        text: '이 You stay there.는 앞에서 살펴본 *You clean your room.(x)과 헷갈릴 수 있습니다. 하지만 둘은 쓰임이 다릅니다. *You clean your room.은 아무 이유 없이 습관적으로 You를 붙인 것이라 "너는 방을 치운다"는 사실 설명(평서문)처럼 들려 명령의 느낌이 사라져버립니다. 반면 You stay there.는 여러 사람 중에서 "다른 사람 말고 바로 너"를 짚어 강조해야 하는 상황이 있고, 말할 때 You에 강세를 주어 명령임을 분명히 드러냅니다. **즉 주어를 밝히는 것 자체가 잘못이 아니라, 그럴 만한 이유(대상이 여럿이라 특정해야 함, 특별히 강조해야 함) 없이 습관적으로 붙이는 것이 문제입니다.**',
      },
      {
        type: 'sentence-diagram',
        label: '명령문 — 주어가 드러난 경우',
        parts: [
          { tag: 'S', text: 'Everybody' },
          { tag: 'V', text: 'sit' },
          { tag: 'M', text: 'down.' },
        ],
        translation: 'Everybody sit down. (여러 사람 중 "전부"를 지시하기 위해 주어를 생략하지 않음)',
      },
      { type: 'heading', text: '흔히 하는 실수: 주어 You를 그대로 쓰는 것' },
      {
        type: 'note',
        text: '*You clean your room.(x)처럼 주어 You를 그대로 두고 명령문을 만들면 안 됩니다. **You clean your room.은 "너는 방을 치운다"라는 평서문(사실을 설명하는 문장)이 되어버려, 지금 당장 방을 치우라고 지시하는 명령의 느낌이 사라집니다.** 명령문에서는 반드시 주어를 생략하고 Clean your room.처럼 동사원형으로 문장을 시작해야 합니다.',
      },
      { type: 'heading', text: '명령문에 시제가 없는 이유' },
      {
        type: 'p',
        text: '동사의 시제는 동사가 나타내는 행동이 언제 일어나는지를 표시해주는 장치입니다. 즉 그 행동이 지금 일어나는지, 과거에 일어났는지, 앞으로 일어날 것인지를 나타냅니다. 그런데 **명령문의 동사에는 시제가 없습니다.** 앞의 상황을 다시 생각해보면, 원준이가 "Open the door!"라고 말한 것은 동생이 그 행동을 지금 즉시 해주기를 바라며 한 말입니다.',
      },
      {
        type: 'p',
        text: '즉 명령문은 말하는 즉시 그 행동이 일어나기를 원하는 문장이기 때문에, 굳이 시제를 붙이지 않아도 문맥을 통해 "지금 당장 해야 하는 행동"이라는 것을 알 수 있습니다. 이러한 이유로 **명령문의 동사는 시제가 없는 동사원형으로 씁니다.** 만약 명령문에 시제가 붙는다면(예: Opened the door.), 그것은 이미 일어난 과거의 일을 나타내게 되어 "지금 해달라"는 지시의 의미를 전달할 수 없게 됩니다.',
      },
      { type: 'heading', text: '상황 속의 명령문 ①: 교실에서' },
      {
        type: 'p',
        text: '명령문은 교실처럼 지시가 자주 오가는 공간에서 특히 많이 쓰입니다. 선생님이 학생에게, 또는 학생끼리 서로 말하는 상황을 떠올려 보면 명령문이 왜 주어 없이 동사원형으로 시작하는지 더 자연스럽게 이해할 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Sit down, please.', ko: '앉아 주세요.', note: '선생님이 떠드는 학생에게 하는 말' },
          { en: 'Open your books to page 10.', ko: '10쪽을 펴세요.' },
          { en: 'Be quiet during the test.', ko: '시험 시간에는 조용히 해.', note: 'be동사도 동사원형 be로 시작' },
          { en: 'Raise your hand before you speak.', ko: '말하기 전에 손을 들어.' },
        ],
      },
      { type: 'heading', text: '상황 속의 명령문 ②: 집에서' },
      {
        type: 'p',
        text: '가족 사이의 대화에서도 명령문은 자주 등장합니다. 부모가 자녀에게, 혹은 형제자매 사이에 하는 말을 살펴보면, 굳이 "You"를 붙이지 않아도 누구에게 하는 말인지 상황만으로 명확하다는 것을 알 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Clean your room before dinner.', ko: '저녁 먹기 전에 방 청소해.' },
          { en: 'Turn off the light before you sleep.', ko: '자기 전에 불 꺼.' },
          { en: 'Wash your hands first.', ko: '먼저 손 씻어.' },
          { en: 'Take out the trash.', ko: '쓰레기 좀 내놔.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '명령문 — 생략된 주어 (You)',
        parts: [
          { tag: '(S)', text: '(You)' },
          { tag: 'V', text: 'Clean' },
          { tag: 'O', text: 'your room' },
          { tag: 'M', text: 'before dinner.' },
        ],
        translation: '(You) Clean your room before dinner. (문맥상 뻔한 주어 You가 생략되고 동사원형 Clean으로 시작)',
      },
      { type: 'heading', text: '상황 속의 명령문 ③: 공공장소에서' },
      {
        type: 'p',
        text: '표지판이나 안내 방송처럼 정해진 대상이 없는 경우에도 명령문이 쓰입니다. 이때 명령문은 "이 문장을 읽거나 듣는 사람 누구나"를 향한 말이 되며, 여전히 그 대상은 "듣는/보는 사람(You)"이므로 원리는 동일합니다.',
      },
      {
        type: 'example',
        items: [
          { en: 'Keep off the grass.', ko: '잔디에 들어가지 마시오.', note: '공원 표지판' },
          { en: 'Fasten your seatbelt.', ko: '안전벨트를 매세요.', note: '비행기 안내' },
          { en: 'Watch your step.', ko: '발밑을 조심하세요.' },
          { en: 'Please wait here.', ko: '여기서 기다려 주세요.' },
        ],
      },
      { type: 'heading', text: '부정 명령문: Don\'t + 동사원형' },
      {
        type: 'p',
        text: '"~하지 마라"처럼 어떤 행동을 하지 말라고 지시할 때는 **동사원형 앞에 Don\'t를 붙입니다.** 이를 부정 명령문이라고 합니다. 긍정 명령문이 동사원형으로 시작하는 문장이었으므로, 그것을 부정할 때도 동사 자체를 바꾸지 않고 그 앞에 Don\'t만 덧붙이면 됩니다.',
      },
      {
        type: 'transform',
        from: { label: '긍정 명령문 (동사원형)', text: 'Clean your room.' },
        to: { label: '부정 명령문 (Don\'t + 동사원형)', text: "Don't clean your room." },
        note: '동사원형 clean은 그대로 두고, 그 앞에 Don\'t만 붙여 "~하지 마라"의 의미를 만든다.',
      },
      {
        type: 'example',
        items: [
          { en: "Don't open the door.", ko: '문 열지 마.' },
          { en: "Don't be late.", ko: '늦지 마.' },
          { en: "Don't touch this.", ko: '이거 만지지 마.' },
          { en: "Don't run in the hallway.", ko: '복도에서 뛰지 마.', note: '학교 안내' },
          { en: "Don't feed the animals.", ko: '동물에게 먹이를 주지 마세요.', note: '동물원 표지판' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '부정 명령문 — Don\'t + 동사원형',
        parts: [
          { tag: '(S)', text: '(You)' },
          { tag: 'V', text: "Don't touch" },
          { tag: 'O', text: 'this.' },
        ],
        translation: "(You) Don't touch this. (동사원형 touch 앞에 Don't를 붙여 '~하지 마라'를 나타냄)",
      },
      {
        type: 'note',
        text: '**be동사도 명령문에서는 동사원형인 be를 그대로 씁니다.** 그래서 부정 명령문은 Don\'t be ~ 형태로 씁니다. (예: Don\'t be late. / Don\'t be shy.)',
      },
      { type: 'heading', text: '흔히 하는 실수: Don\'t 뒤에 동사원형이 아닌 형태를 쓰는 것' },
      {
        type: 'note',
        text: '*Don\'t opens the door.(x)나 *Don\'t opened the door.(x)처럼 Don\'t 뒤에 3인칭 단수형(-s)이나 과거형을 쓰면 안 됩니다. **Don\'t는 조동사 do의 부정형이므로, 그 뒤에는 반드시 동사원형이 와야 합니다.** 마찬가지로 be동사도 *Don\'t are late.(x)가 아니라 Don\'t be late.(o)처럼 동사원형 be를 써야 합니다.',
      },
      { type: 'heading', text: 'Let\'s 명령문 (청유문): "우리 ~하자"' },
      {
        type: 'p',
        text: '명령문 앞에 Let\'s를 붙이면 "우리 ~하자"라는 뜻의 청유문이 됩니다. Let\'s는 Let us를 줄인 표현으로, 말하는 사람이 상대방에게 어떤 행동을 함께 하자고 제안할 때 씁니다. 일반 명령문은 듣는 사람(You)에게만 행동을 요구하지만, **Let\'s 명령문은 말하는 사람 자신까지 포함해서 "우리(we)"가 함께 그 행동을 하자고 제안한다는 점이 다릅니다.** Let\'s 뒤에도 반드시 동사원형이 옵니다.',
      },
      {
        type: 'transform',
        from: { label: '제안하고 싶은 내용', text: 'We clean the room.' },
        to: { label: '청유문 (Let\'s + 동사원형)', text: "Let's clean the room." },
        note: 'Let\'s는 Let us의 줄임말로, "우리가 함께 하자"는 제안의 의미가 주어 We 대신 Let\'s 안에 담긴다. 뒤에는 그대로 동사원형이 온다.',
      },
      {
        type: 'example',
        items: [
          { en: "Let's open the door.", ko: '우리 문 열자.' },
          { en: "Let's go to the park.", ko: '우리 공원에 가자.' },
          { en: "Let's clean the classroom together.", ko: '우리 교실을 같이 청소하자.', note: '학급 활동 상황' },
          { en: "Let's not go there.", ko: '우리 거기 가지 말자.', note: 'Let\'s 부정문은 Let\'s 뒤에 not을 붙인다.' },
          { en: "Let's not waste time.", ko: '우리 시간 낭비하지 말자.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: "청유문 — Let's + 동사원형",
        parts: [
          { tag: '(S)', text: '(We)' },
          { tag: 'V', text: "Let's clean" },
          { tag: 'O', text: 'the classroom' },
          { tag: 'M', text: 'together.' },
        ],
        translation: "Let's clean the classroom together. (Let's = Let us, 말하는 사람 자신까지 포함해 함께 하자고 제안)",
      },
      {
        type: 'note',
        text: '**Let\'s 명령문을 부정할 때는 Don\'t가 아니라 Let\'s 뒤에 not을 붙여 Let\'s not + 동사원형으로 씁니다.** (예: *Don\'t let\'s go there.(x) / Let\'s not go there.(o))',
      },
      {
        type: 'table',
        caption: '명령문의 세 가지 형태 정리',
        headers: ['형태', '숨은/포함된 주어', '의미', '예문'],
        rows: [
          ['동사원형 ~.', '(You) 생략', '~해라 (긍정 명령문)', 'Clean your room.'],
          ["Don't + 동사원형 ~.", '(You) 생략', '~하지 마라 (부정 명령문)', "Don't clean your room."],
          ["Let's (not) + 동사원형 ~.", 'Let us (= We)', '우리 ~하자 (하지 말자) (청유문)', "Let's clean the room. / Let's not clean the room."],
        ],
      },
      {
        type: 'icon-row',
        caption: '명령문의 세 가지 종류',
        items: [
          { icon: '🙌', label: '긍정 명령', sub: '동사원형 ~.' },
          { icon: '🚫', label: '부정 명령', sub: "Don't + 동사원형 ~." },
          { icon: '🤝', label: '청유 (Let\'s)', sub: "Let's (not) + 동사원형 ~." },
        ],
      },
      { type: 'heading', text: '명령문을 정중하게 만들기: please, just, 강조의 do' },
      {
        type: 'p',
        text: '명령문은 상대방에게 곧바로 행동을 요구하는 문장이기 때문에, 아무런 장치 없이 쓰면 무례하게 들릴 수 있습니다. 그래서 실제 대화에서는 명령문을 부드럽게 다듬는 여러 표현을 함께 사용합니다. **please는 부탁의 뜻을 더해 명령문을 정중하게 만들고, just는 그 부탁이 별것 아니라는 뉘앙스로 가볍게 만듭니다.** 반대로 동사원형 앞에 do를 붙이면 오히려 요청을 강조하여, 격식 있는 자리에서 정중하면서도 힘주어 부탁하는 느낌을 줍니다.',
      },
      {
        type: 'icon-row',
        caption: '명령문을 정중하게 만드는 세 가지 방법',
        items: [
          { icon: '🙏', label: 'please', sub: '정중한 부탁' },
          { icon: '🤏', label: 'just', sub: '가볍고 사소하게' },
          { icon: '💪', label: '강조의 do', sub: '격식 있게 강하게' },
        ],
      },
      {
        type: 'table',
        caption: '명령문을 정중하게 만드는 표현',
        headers: ['표현', '위치', '의미·효과', '예문'],
        rows: [
          ['please', '문장 맨 앞', '가장 기본적인 정중 표현', 'Please close the door.'],
          ['please', '문장 맨 뒤', '문두보다 한층 더 부드럽고 예의 바른 느낌', 'Close the door, please.'],
          ['just', '동사원형 앞', '부탁을 사소하고 가벼운 것으로 만듦', 'Just give me a minute, please.'],
          ['강조의 do', '동사원형 앞', '요청을 격식 있고 강하게 강조함', 'Do come in.'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'Please close the door.', ko: '문 좀 닫아 주세요.' },
          { en: 'Wait here, please.', ko: '여기서 기다려 주세요.', note: 'please가 문장 끝에 위치' },
          { en: 'Just give me a minute, please.', ko: '잠깐만 시간 좀 주세요.', note: 'just로 부탁을 가볍게, please로 정중하게' },
          { en: 'Do come in.', ko: '어서 들어오세요.', note: '강조의 do — 동사원형 come 앞에 붙여 요청을 강하고 정중하게 만듦' },
          { en: 'Do sit down.', ko: '자, 앉으세요.', note: '강조의 do — 손님을 맞이할 때처럼 격식 있는 자리에서 자주 쓰임' },
        ],
      },
      {
        type: 'note',
        text: '**강조의 do는 부정 명령문의 Don\'t와는 전혀 다른 것입니다.** Don\'t는 do의 부정형으로 "~하지 마라"는 금지를 나타내지만, 강조의 do는 do 자체를 그대로 동사원형 앞에 붙여 오히려 요청을 강하게 밀어붙이는 역할을 합니다. 이때도 do 뒤에는 반드시 동사원형이 옵니다. 또한 명령문 뒤에 will you?나 shall we? 같은 부가의문문을 덧붙이면 "~해 줄래?", "~할까?"처럼 한결 부드러운 어조로 바뀝니다. (예: Close the door, will you? / Let\'s go, shall we?)',
      },
      {
        type: 'sentence-diagram',
        label: '강조의 do가 붙은 명령문',
        parts: [
          { tag: '(S)', text: '(You)' },
          { tag: 'V', text: 'Do come' },
          { tag: 'M', text: 'in.' },
        ],
        translation: 'Do come in. (강조의 do가 동사원형 come 앞에 붙어 요청을 격식 있고 강하게 만듦)',
      },
      { type: 'heading', text: '명령문 + and / or: 조건과 결과를 나타내는 구문' },
      {
        type: 'p',
        text: '명령문 뒤에 접속사 and나 or를 붙이고 그 뒤에 결과를 나타내는 절을 이어 쓰면, 명령문 전체가 마치 if 조건문처럼 쓰이게 됩니다. **「명령문, and 결과」는 "~해라, 그러면 ~할 것이다"라는 뜻으로 그 명령을 따랐을 때의 긍정적 결과를 나타내고, 「명령문, or 결과」는 "~해라, 그렇지 않으면 ~할 것이다"라는 뜻으로 그 명령을 따르지 않았을 때의 부정적 결과를 나타냅니다.** 즉 and와 or 중 어느 접속사를 쓰느냐에 따라 "그 행동을 했을 때"와 "그 행동을 하지 않았을 때"라는 정반대의 조건이 만들어지는 것입니다.',
      },
      {
        type: 'icon-row',
        caption: '명령문 + and / or — 조건과 결과',
        items: [
          { icon: '✅', label: 'and', sub: '~해라, 그러면 좋은 결과' },
          { icon: '⚠️', label: 'or', sub: '~해라, 안 하면 나쁜 결과' },
        ],
      },
      {
        type: 'table',
        caption: '명령문 + and / or의 의미',
        headers: ['구조', '의미', '바꿔 쓴 if 조건문'],
        rows: [
          ['명령문, and 결과.', '~해라, 그러면 ~할 것이다 (= 하면)', 'If you 동사원형~, 결과.'],
          ['명령문, or 결과.', '~해라, 그렇지 않으면 ~할 것이다 (= 안 하면)', 'If you don\'t 동사원형~, 결과.'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: 'Study hard, and you will pass the exam.', ko: '열심히 공부해라, 그러면 시험에 합격할 것이다.', note: '= If you study hard, you will pass the exam.' },
          { en: 'Hurry up, or you will be late.', ko: '서둘러라, 그렇지 않으면 늦을 것이다.', note: '= If you don\'t hurry up, you will be late.' },
          { en: 'Turn left, and you will see the store.', ko: '왼쪽으로 돌아라, 그러면 그 가게가 보일 것이다.' },
          { en: 'Eat more vegetables, or you will get sick.', ko: '채소를 더 먹어라, 그렇지 않으면 아플 것이다.' },
          { en: 'Save your money now, and you can travel next year.', ko: '지금 돈을 모아라, 그러면 내년에 여행을 갈 수 있다.' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '명령문 + or (부정 조건)',
        parts: [
          { tag: 'V', text: 'Hurry up,' },
          { tag: 'M', text: 'or' },
          { tag: 'S', text: 'you' },
          { tag: 'V', text: 'will be' },
          { tag: 'C', text: 'late.' },
        ],
        translation: 'Hurry up, or you will be late. (= If you don\'t hurry up, you will be late.)',
      },
      {
        type: 'callout',
        title: '11장 보충 정리 — 명령문의 확장 표현',
        items: [
          '대상이 여럿이라 특정 인물·전체를 콕 집어야 할 때는 Everybody, Someone, 이름, You처럼 주어를 생략하지 않고 밝히기도 하며, 이때도 동사는 여전히 동사원형이다. 주어(부르는 이름)는 문장 끝에 올 수도 있다.',
          '명령문은 무례하게 들릴 수 있으므로 please(문두/문미)나 just로 부드럽게 만들거나, 반대로 강조의 do(Do come in.)를 붙여 격식 있고 강한 요청으로 만들 수 있다. 부가의문문 will you?/shall we?를 덧붙이면 더 부드러운 어조가 된다.',
          '명령문 뒤에 and를 붙이면 "~해라, 그러면 ~하다(하면)", or를 붙이면 "~해라, 그렇지 않으면 ~하다(안 하면)"라는 조건-결과의 의미가 되며, 각각 if 조건문으로 바꿔 쓸 수 있다.',
        ],
      },
      {
        type: 'callout',
        title: '11장 핵심 정리',
        items: [
          '명령문은 말하는 사람 눈앞의 듣는 사람(You)에게 하는 말이므로, 문맥상 뻔히 아는 주어 You를 생략하고 동사원형으로 문장을 시작한다.',
          '명령문에 시제가 없는 이유는 그 행동이 말하는 즉시, 지금 당장 일어나기를 바라기 때문이다.',
          '*You clean your room.(x)처럼 주어를 그대로 두면 명령이 아니라 사실을 설명하는 평서문이 되어버리므로, 반드시 주어를 생략해야 한다.',
          '부정 명령문은 동사원형 앞에 Don\'t를 붙여 "~하지 마라"를 나타내며, Don\'t 뒤에는 3인칭 단수형(-s)이나 과거형이 아닌 항상 동사원형(be 포함)이 온다.',
          "Let's 명령문(청유문)은 Let us의 줄임말로 \"우리 ~하자\"라는 뜻이며, Let's 뒤에는 동사원형이 오고 부정은 Don't가 아니라 Let's not으로 쓴다.",
          '명령문은 교실, 집, 공공장소의 표지판이나 안내 방송처럼 지시나 요청이 필요한 다양한 실제 상황에서 폭넓게 쓰인다.',
        ],
      },
    ],
  },
}
