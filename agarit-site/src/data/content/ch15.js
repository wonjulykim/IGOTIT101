export const ch15 = {
  'ch15-1': {
    title: '부가의문문',
    blocks: [
      {
        type: 'p',
        text: '부가의문문(tag question)은 평서문 뒤에 짧게 덧붙이는 의문문으로, 내가 모르는 정보를 확인하거나 내가 이미 알고 있는 정보를 다시 확인하려는 용도로 사용됩니다. 부가의문문의 특이한 점은 긍정문에는 부정문으로, 부정문에는 긍정문으로 다시 내용을 확인한다는 것인데, 이는 원래 문장에 대한 화자의 확신 정도나 의도를 강조하기 위한 것입니다.',
      },
      {
        type: 'example',
        items: [
          { en: "Amy has black eyes, doesn't she?", ko: 'Amy는 검은색 눈을 가지고 있어, 그렇지 않니?' },
          { en: "They aren't from Mexico, are they?", ko: '그들은 멕시코 출신이 아니야, 그렇지?' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '부가의문문 구조 (부정문 → 긍정 태그)',
        parts: [
          { tag: 'S', text: 'They' },
          { tag: 'V', text: "aren't" },
          { tag: 'M', text: 'from Mexico' },
          { tag: 'Tag', text: 'are they?' },
        ],
        translation: "They aren't from Mexico, are they? (부정문 + 긍정 부가의문문)",
      },
      {
        type: 'note',
        text: '부가의문문은 긍정문 뒤에는 부정 부가의문문을, 부정문 뒤에는 긍정 부가의문문을 붙여, 내가 모르는 정보를 확인하거나 알고 있는 정보를 강조해서 확인하고자 하는 의도를 나타냅니다.',
      },
      { type: 'heading', text: '왜 극성(긍정↔부정)이 뒤바뀔까' },
      {
        type: 'p',
        text: '한국어의 "그렇지?", "그렇지 않니?"는 원래 문장의 극성과 상관없이 늘 같은 형태로 붙지만, 영어는 반드시 반대 극성의 부가의문문을 붙입니다. 이렇게 앞 문장과 반대되는 극성을 사용하는 것은 원래 문장에 대한 화자의 확신 정도나 의도를 강조하기 위한 것입니다. 즉 "She is kind, isn\'t she?"처럼 긍정문 뒤에 부정 태그를 붙이면, 화자가 "그녀가 착하다"는 내용을 확신하면서도 그 확신을 다시 한번 짚어 상대에게 확인시키는 효과를 냅니다.',
      },
      {
        type: 'icon-row',
        caption: '극성 반전 한눈에 보기',
        items: [
          { icon: '➕', label: '긍정문', sub: '→ 부정 태그 ➖' },
          { icon: '➖', label: '부정문', sub: '→ 긍정 태그 ➕' },
        ],
      },
      {
        type: 'example',
        items: [
          {
            en: "The movie was great, wasn't it?",
            ko: '그 영화 정말 좋았어, 그렇지?',
            note: '화자는 영화가 좋았다고 확신하지만, 반대 극성 태그로 상대의 맞장구를 유도합니다.',
          },
          {
            en: "You didn't forget my birthday, did you?",
            ko: '너 내 생일 잊어버린 거 아니지, 그렇지?',
            note: '부정문(잊지 않았다) 뒤에 긍정 태그를 붙여, 정말 잊지 않았는지 확인을 요청합니다.',
          },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '부가의문문 구조 (긍정문 → 부정 태그)',
        parts: [
          { tag: 'S', text: 'The movie' },
          { tag: 'V', text: 'was' },
          { tag: 'C', text: 'great' },
          { tag: 'Tag', text: "wasn't it?" },
        ],
        translation: "The movie was great, wasn't it? (긍정문 + 부정 부가의문문)",
      },
      { type: 'heading', text: '부가의문문 만드는 방법' },
      {
        type: 'p',
        text: '부가의문문은 앞 문장(평서문)의 동사 종류에 따라 형태가 달라집니다. 앞 문장이 be동사문이면 be동사로, 조동사문이면 조동사로, 일반동사문이면 do/does/did로 부가의문문을 만듭니다. 이때 ① 앞 문장이 긍정이면 부가의문문은 부정으로, 앞 문장이 부정이면 부가의문문은 긍정으로 바꾸고, ② 앞 문장의 주어는 반드시 대명사로 바꾸어 부가의문문에 다시 씁니다.',
      },
      {
        type: 'table',
        caption: '부가의문문 만드는 규칙',
        headers: ['앞 문장의 동사', '규칙', '예문'],
        rows: [
          ['be동사', '같은 be동사를 긍정↔부정으로 바꾸어 주어(대명사)와 함께 붙인다.', "She is a student, isn't she?"],
          ['조동사 (can, will, must, should 등)', '같은 조동사를 긍정↔부정으로 바꾸어 주어(대명사)와 함께 붙인다.', "He can swim, can't he?"],
          ['일반동사 (현재)', 'do/does를 긍정↔부정으로 바꾸어 주어(대명사)와 함께 붙인다.', "You like coffee, don't you?"],
          ['일반동사 (과거)', 'did를 긍정↔부정으로 바꾸어 주어(대명사)와 함께 붙인다.', "They didn't go to the party, did they?"],
        ],
      },
      {
        type: 'p',
        text: '이 과정을 문장 하나로 단계별로 따라가 봅시다. 평서문 "She is kind."에서 부가의문문이 만들어지기까지 세 단계를 거칩니다.',
      },
      {
        type: 'transform',
        from: [
          { label: '① 원래 문장 (긍정문)', text: 'She is kind.' },
          { label: '② 주어를 대명사로', text: 'She → she' },
          { label: '③ 동사를 반대 극성으로 (be동사 그대로 사용)', text: 'is → isn\'t' },
        ],
        to: { label: '완성된 부가의문문', text: "She is kind, isn't she?" },
        note: '주어(she)는 이미 대명사였으므로 그대로 쓰고, be동사 is를 부정형 isn\'t로 바꾸어 쉼표 뒤에 붙입니다.',
      },
      {
        type: 'transform',
        from: [
          { label: '① 원래 문장 (긍정문, 주어=명사)', text: 'Tom and Jerry are friends.' },
          { label: '② 주어를 대명사로 (Tom and Jerry → they)', text: 'they' },
          { label: '③ 동사를 반대 극성으로', text: "are → aren't" },
        ],
        to: { label: '완성된 부가의문문', text: "Tom and Jerry are friends, aren't they?" },
        note: '명사 주어 Tom and Jerry는 복수 사람이므로 대명사 they로 바꿔야 합니다. 원래 명사를 그대로 반복하면 안 됩니다.',
      },
      {
        type: 'transform',
        from: [
          { label: '① 원래 문장 (일반동사, 긍정문)', text: 'He plays the piano.' },
          { label: '② 주어를 대명사로', text: 'he' },
          { label: '③ 일반동사는 자신이 극성을 못 바꾸므로 do 동사를 빌려와 반대 극성으로', text: 'plays → doesn\'t' },
        ],
        to: { label: '완성된 부가의문문', text: "He plays the piano, doesn't he?" },
        note: '일반동사(plays)는 그 자체로 부정형을 만들 수 없기 때문에, 조동사 do를 빌려와(does) 부정형(doesn\'t)으로 바꾸어 태그를 만듭니다.',
      },
      {
        type: 'note',
        text: '앞 문장의 주어가 명사(고유명사·일반명사)이면 부가의문문에서는 그 주어를 알맞은 대명사로 바꾸어 씁니다. 예를 들어 Amy는 she로, Tom and Jerry는 they로, this book은 it으로 바꿉니다.',
      },
      {
        type: 'sentence-diagram',
        label: '부가의문문 구조',
        parts: [
          { tag: 'S', text: 'Amy' },
          { tag: 'V', text: 'has' },
          { tag: 'O', text: 'black eyes' },
          { tag: 'Tag', text: "doesn't she?" },
        ],
        translation: "Amy has black eyes, doesn't she? (긍정문 + 부정 부가의문문, 주어는 대명사 she로)",
      },
      { type: 'heading', text: 'be동사 문장의 부가의문문 (문맥 속에서)' },
      {
        type: 'p',
        text: 'be동사가 쓰인 문장은 그 be동사를 그대로 가져와 극성만 반대로 바꿉니다. 아래는 실제 대화 상황을 가정한 예문들입니다.',
      },
      {
        type: 'example',
        items: [
          {
            en: "A: I heard the new café is really nice. B: It's quite popular, isn't it? Everyone posts pictures of it.",
            ko: 'A: 새로 생긴 카페 정말 좋다고 들었어. B: 인기가 많아, 그렇지? 다들 사진을 올리더라.',
          },
          {
            en: "A: Did you meet the new students? B: Yeah, they're from Canada, aren't they?",
            ko: 'A: 새로 온 학생들 만나봤어? B: 응, 캐나다에서 왔지, 그렇지?',
          },
          {
            en: "A: You look worried. B: I'm not late for the meeting, am I?",
            ko: 'A: 걱정스러운 표정인데. B: 나 회의 늦은 거 아니지, 그렇지?',
          },
        ],
      },
      { type: 'heading', text: '조동사 문장의 부가의문문 (문맥 속에서)' },
      {
        type: 'p',
        text: 'can, will, must, should 등 조동사가 쓰인 문장은 같은 조동사를 가져와 극성만 반대로 바꿉니다.',
      },
      {
        type: 'example',
        items: [
          {
            en: "A: We need someone to fix the sink. B: You can fix it, can't you? You fixed it last time.",
            ko: 'A: 싱크대 고칠 사람이 필요해. B: 너 고칠 수 있잖아, 그렇지? 지난번에도 고쳤잖아.',
          },
          {
            en: "A: The deadline is tomorrow. B: We won't finish in time, will we? We still have so much left.",
            ko: 'A: 마감이 내일이야. B: 우리 제시간에 못 끝내겠지, 그렇지? 아직 할 게 너무 많아.',
          },
          {
            en: "A: I'm nervous about the exam. B: You should review the notes again, shouldn't you?",
            ko: 'A: 시험이 걱정돼. B: 노트를 다시 봐야 하지 않을까, 그렇지?',
          },
        ],
      },
      { type: 'heading', text: '일반동사 문장의 부가의문문 (do/does/did, 문맥 속에서)' },
      {
        type: 'p',
        text: '일반동사는 스스로 부정형이나 의문형을 만들 수 없기 때문에, 부가의문문에서도 do/does(현재)나 did(과거)를 빌려와 극성을 반대로 바꿉니다.',
      },
      {
        type: 'example',
        items: [
          {
            en: "A: Let's order pizza tonight. B: You like pepperoni, don't you? I remember you ordering it before.",
            ko: 'A: 오늘 밤 피자 시켜 먹자. B: 너 페퍼로니 좋아하잖아, 그렇지? 예전에 시킨 거 기억나.',
          },
          {
            en: "A: Mina seems busy these days. B: She works late every night, doesn't she?",
            ko: 'A: 미나가 요즘 바쁜 것 같아. B: 매일 밤늦게까지 일하잖아, 그렇지?',
          },
          {
            en: "A: The kids are quiet today. B: They didn't break anything, did they?",
            ko: 'A: 애들이 오늘 조용하네. B: 뭔가 망가뜨린 건 아니지, 그렇지?',
          },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '부가의문문 구조 (일반동사 → do/does 사용)',
        parts: [
          { tag: 'S', text: 'She' },
          { tag: 'V', text: 'works' },
          { tag: 'M', text: 'late every night' },
          { tag: 'Tag', text: "doesn't she?" },
        ],
        translation: "She works late every night, doesn't she? (일반동사 문장이므로 does로 부가의문문)",
      },
      { type: 'heading', text: '흔히 틀리는 지점' },
      {
        type: 'p',
        text: '한국인 학습자가 부가의문문에서 자주 저지르는 실수는 크게 세 가지입니다. ① 일반동사 문장인데 do/does/did를 빠뜨리고 be동사처럼 취급하는 실수, ② 주어를 대명사로 바꾸지 않고 원래 명사를 그대로 반복하는 실수, ③ 앞 문장의 극성을 제대로 반대로 바꾸지 않는 실수입니다.',
      },
      {
        type: 'transform',
        from: [
          { label: '학생이 흔히 쓰는 잘못된 형태', text: "He plays soccer, isn't he? (X)" },
        ],
        to: { label: '올바른 형태', text: "He plays soccer, doesn't he? (O)" },
        note: '일반동사(plays) 문장인데 be동사(isn\'t)를 부가의문문에 써버린 실수입니다. 일반동사문에는 반드시 do/does/did를 사용해야 합니다.',
      },
      {
        type: 'transform',
        from: [
          { label: '학생이 흔히 쓰는 잘못된 형태', text: "Tom is smart, isn't Tom? (X)" },
        ],
        to: { label: '올바른 형태', text: "Tom is smart, isn't he? (O)" },
        note: '주어 Tom을 부가의문문에서도 그대로 반복한 실수입니다. 부가의문문의 주어는 반드시 대명사(he)로 바꾸어야 합니다.',
      },
      {
        type: 'transform',
        from: [
          { label: '학생이 흔히 쓰는 잘못된 형태', text: "She isn't home, isn't she? (X)" },
        ],
        to: { label: '올바른 형태', text: "She isn't home, is she? (O)" },
        note: '앞 문장이 이미 부정문(isn\'t)인데 부가의문문도 부정으로 만든 실수입니다. 부정문 뒤에는 반드시 긍정 부가의문문이 와야 합니다.',
      },
      {
        type: 'note',
        text: '점검 순서를 습관화하면 실수를 줄일 수 있습니다. (1) 앞 문장의 동사가 be동사인지, 조동사인지, 일반동사인지 확인 → (2) 일반동사라면 do/does/did를 사용 → (3) 앞 문장의 극성을 반대로 뒤집기 → (4) 주어를 대명사로 바꾸기. 이 네 단계를 순서대로 확인하면 대부분의 실수를 피할 수 있습니다.',
      },
      { type: 'heading', text: '특수하고 불규칙한 형태' },
      {
        type: 'p',
        text: '모든 부가의문문이 규칙대로만 만들어지는 것은 아닙니다. 몇 가지 예외적인 형태는 따로 기억해 두어야 합니다.',
      },
      {
        type: 'table',
        caption: '불규칙한 부가의문문',
        headers: ['앞 문장', '부가의문문', '설명'],
        rows: [
          ['I am right.', "aren't I?", '"amn\'t I?"는 쓰이지 않고 관용적으로 aren\'t I를 사용합니다.'],
          ["Let's go now.", 'shall we?', '제안문(Let\'s ~)의 부가의문문은 항상 shall we?를 사용합니다.'],
          ['Close the door.', 'will you?', '명령문의 부가의문문은 주어가 없어도 will you?(또는 won\'t you?)를 사용합니다.'],
          ['Nothing happened.', 'did it?', 'nothing, nobody처럼 부정의 의미를 가진 주어는 부정문으로 취급하여 긍정 부가의문문을 사용합니다.'],
        ],
      },
      {
        type: 'example',
        items: [
          { en: "I'm right about the schedule, aren't I?", ko: '내가 일정에 대해 맞았지, 그렇지?' },
          { en: "Let's take a break, shall we?", ko: '우리 잠깐 쉬자, 그럴까?' },
          { en: "Nothing went wrong, did it?", ko: '아무것도 잘못되지 않았지, 그렇지?' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '부가의문문 구조 (불규칙 — 부정 의미의 주어)',
        parts: [
          { tag: 'S', text: 'Nothing' },
          { tag: 'V', text: 'went' },
          { tag: 'C', text: 'wrong' },
          { tag: 'Tag', text: 'did it?' },
        ],
        translation: 'Nothing went wrong, did it? (nothing은 부정 의미이므로 긍정 부가의문문 did it을 사용)',
      },
      { type: 'heading', text: '부가의문문의 역할' },
      {
        type: 'p',
        text: '부가의문문의 의도를 정확하게 알기 위해서는 부가의문문이 사용되는 문맥(상황)이 필요합니다. 문맥을 통해 부가의문문이 모르는 정보를 확인하고자 하는 것인지, 아니면 알고 있는 정보를 다시 확인하여 강조하고자 하는 것인지 구별할 수 있습니다. 부가의문문의 역할을 크게 세 가지로 나누어 살펴봅시다.',
      },
      {
        type: 'p',
        text: '① 정보 확인: 대화 상대방으로부터 내가 모르는 정보를 확인하고자 할 때 사용되며, 이 경우 상대방에게 질문을 던지고 즉각적인 답변을 기대할 수 있습니다.',
      },
      {
        type: 'example',
        items: [
          { en: "You like coffee, don't you?", ko: '너 커피 좋아하는 거 맞지?' },
          { en: "He's coming today, isn't he?", ko: '그가 오늘 오는 거 맞지?' },
        ],
      },
      {
        type: 'p',
        text: '② 동의 또는 반대 확인: 이전 문장의 내용에 대해 상대방의 동의 또는 반대를 확인하고자 할 때 사용됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: "She is a student, isn't she?", ko: '그녀는 학생이야, 맞지?' },
          { en: "They didn't go to the party, did they?", ko: '그들은 파티에 가지 않았어, 그렇지?' },
        ],
      },
      {
        type: 'p',
        text: '③ 감정, 놀라움, 의심 표현: 부가의문문은 감정, 놀라움, 의심 등을 표현하는 데에도 사용됩니다.',
      },
      {
        type: 'example',
        items: [
          { en: "He's really good at singing, isn't he?", ko: '그는 노래를 정말 잘 불러, 그렇지 않아?' },
          { en: "They didn't win the competition, did they?", ko: '그들이 대회에서 우승하지 않은 거 맞지?' },
        ],
      },
      { type: 'heading', text: '억양에 따른 의도 구분' },
      {
        type: 'p',
        text: '부가의문문의 의도는 문장 끝의 억양(음의 높낮이)으로도 구분할 수 있습니다. 끝을 올리는 억양은 순수하게 사실을 확인하려는 의도이고, 끝을 내리는 억양은 이미 알고 있는 사실에 대해 상대방의 동의를 구하려는 의도입니다.',
      },
      {
        type: 'table',
        caption: '억양에 따른 부가의문문의 의도',
        headers: ['억양', '의도', '예문'],
        rows: [
          ['끝을 올리는 억양 (↗)', '사실을 잘 모르는 상태에서 순수하게 정보를 확인', "Amy is 14 years old, isn't she? ↗"],
          ['끝을 내리는 억양 (↘)', '이미 알고 있는 사실에 대해 동의를 구함', "Amy is 14 years old, isn't she? ↘"],
        ],
      },
      {
        type: 'note',
        text: '같은 문장, 같은 부가의문문이라도 억양에 따라 상대에게 전달되는 뉘앙스가 완전히 달라집니다. Amy의 나이를 모르는 사람이 올림조로 물으면 순수한 질문이 되지만, Amy의 나이를 이미 알고 있는 사람이 내림조로 말하면 "내가 알던 대로 맞지?"라는 확인·동의 요청이 됩니다.',
      },
      {
        type: 'callout',
        title: '15장 핵심 정리',
        items: [
          '부가의문문은 앞 문장이 긍정이면 부정으로, 부정이면 긍정으로 만든다. 이는 원래 문장에 대한 화자의 확신 정도나 의도를 강조하기 위한 것이다.',
          '앞 문장의 동사에 따라 be동사·조동사·do/does/did 중 알맞은 것을 사용하고, 주어는 반드시 대명사로 바꾸어 쓴다. (동사 확인 → 극성 반전 → do 사용 여부 → 주어를 대명사로, 순서로 점검한다.)',
          '흔한 실수: 일반동사문에 do/does/did 대신 be동사를 쓰는 것, 주어를 대명사로 바꾸지 않는 것, 앞 문장의 극성을 반전시키지 않는 것.',
          'I am ~, aren\'t I? / Let\'s ~, shall we? / 명령문 ~, will you? 처럼 규칙에서 벗어난 불규칙한 형태도 존재한다.',
          '부가의문문은 모르는 정보 확인, 동의·반대 확인, 감정·놀라움·의심 표현 등의 역할을 한다.',
          '끝을 올리는 억양은 순수한 정보 확인, 끝을 내리는 억양은 동의를 구하는 의도를 나타낸다.',
        ],
      },
    ],
  },
}
