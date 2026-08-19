export const ch15 = {
  'ch15-1': {
    title: '부가의문문',
    blocks: [
      {
        type: 'p',
        text: '**부가의문문(tag question)은 평서문 뒤에 짧게 덧붙이는 의문문**으로, 내가 모르는 정보를 확인하거나 내가 이미 알고 있는 정보를 다시 확인하려는 용도로 사용됩니다. 부가의문문의 특이한 점은 **긍정문에는 부정문으로, 부정문에는 긍정문으로 다시 내용을 확인한다**는 것인데, 이는 원래 문장에 대한 화자의 확신 정도나 의도를 강조하기 위한 것입니다.',
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
        text: '부가의문문은 **긍정문 뒤에는 부정 부가의문문을, 부정문 뒤에는 긍정 부가의문문을 붙여**, 내가 모르는 정보를 확인하거나 알고 있는 정보를 강조해서 확인하고자 하는 의도를 나타냅니다.',
      },
      { type: 'heading', text: '왜 극성(긍정↔부정)이 뒤바뀔까' },
      {
        type: 'p',
        text: '한국어의 "그렇지?", "그렇지 않니?"는 원래 문장의 극성과 상관없이 늘 같은 형태로 붙지만, 영어는 반드시 반대 극성의 부가의문문을 붙입니다. 이렇게 **앞 문장과 반대되는 극성을 사용하는 것은 원래 문장에 대한 화자의 확신 정도나 의도를 강조하기 위한 것**입니다. 즉 "She is kind, isn\'t she?"처럼 긍정문 뒤에 부정 태그를 붙이면, 화자가 "그녀가 착하다"는 내용을 확신하면서도 그 확신을 다시 한번 짚어 상대에게 확인시키는 효과를 냅니다.',
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
        text: '부가의문문은 앞 문장(평서문)의 동사 종류에 따라 형태가 달라집니다. **앞 문장이 be동사문이면 be동사로, 조동사문이면 조동사로, 일반동사문이면 do/does/did로 부가의문문을 만듭니다.** 이때 ① 앞 문장이 긍정이면 부가의문문은 부정으로, 앞 문장이 부정이면 부가의문문은 긍정으로 바꾸고, ② **앞 문장의 주어는 반드시 대명사로 바꾸어** 부가의문문에 다시 씁니다.',
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
        text: '앞 문장의 주어가 명사(고유명사·일반명사)이면 **부가의문문에서는 그 주어를 알맞은 대명사로 바꾸어 씁니다.** 예를 들어 Amy는 she로, Tom and Jerry는 they로, this book은 it으로 바꿉니다.',
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
        text: 'be동사가 쓰인 문장은 **그 be동사를 그대로 가져와 극성만 반대로 바꿉니다.** 아래는 실제 대화 상황을 가정한 예문들입니다.',
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
        text: 'can, will, must, should 등 조동사가 쓰인 문장은 **같은 조동사를 가져와 극성만 반대로 바꿉니다**.',
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
        text: '일반동사는 스스로 부정형이나 의문형을 만들 수 없기 때문에, **부가의문문에서도 do/does(현재)나 did(과거)를 빌려와 극성을 반대로 바꿉니다**.',
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
        text: '한국인 학습자가 부가의문문에서 자주 저지르는 실수는 크게 세 가지입니다. **① 일반동사 문장인데 do/does/did를 빠뜨리고 be동사처럼 취급하는 실수, ② 주어를 대명사로 바꾸지 않고 원래 명사를 그대로 반복하는 실수, ③ 앞 문장의 극성을 제대로 반대로 바꾸지 않는 실수**입니다.',
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
        text: '점검 순서를 습관화하면 실수를 줄일 수 있습니다. **(1) 앞 문장의 동사가 be동사인지, 조동사인지, 일반동사인지 확인 → (2) 일반동사라면 do/does/did를 사용 → (3) 앞 문장의 극성을 반대로 뒤집기 → (4) 주어를 대명사로 바꾸기.** 이 네 단계를 순서대로 확인하면 대부분의 실수를 피할 수 있습니다.',
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
        text: '부가의문문의 의도를 정확하게 알기 위해서는 **부가의문문이 사용되는 문맥(상황)이 필요합니다**. 문맥을 통해 부가의문문이 모르는 정보를 확인하고자 하는 것인지, 아니면 알고 있는 정보를 다시 확인하여 강조하고자 하는 것인지 구별할 수 있습니다. 부가의문문의 역할을 크게 세 가지로 나누어 살펴봅시다.',
      },
      {
        type: 'p',
        text: '① 정보 확인: **대화 상대방으로부터 내가 모르는 정보를 확인하고자 할 때 사용**되며, 이 경우 상대방에게 질문을 던지고 즉각적인 답변을 기대할 수 있습니다.',
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
        text: '② 동의 또는 반대 확인: **이전 문장의 내용에 대해 상대방의 동의 또는 반대를 확인**하고자 할 때 사용됩니다.',
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
        text: '부가의문문의 의도는 문장 끝의 억양(음의 높낮이)으로도 구분할 수 있습니다. **끝을 올리는 억양은 순수하게 사실을 확인하려는 의도이고, 끝을 내리는 억양은 이미 알고 있는 사실에 대해 상대방의 동의를 구하려는 의도**입니다.',
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
      { type: 'heading', text: '완료형 문장의 부가의문문 — have가 스스로 조동사가 되는 경우' },
      {
        type: 'p',
        text: '지금까지는 일반동사 문장의 부가의문문에 do/does/did를 "빌려온다"고 배웠습니다. 그런데 have동사가 **완료형(have/has/had + p.p.)의 조동사로 쓰인 경우에는 이미 그 문장 안에 조동사 역할을 하는 단어가 있으므로, do를 새로 빌려올 필요 없이 have/has/had를 그대로 가져와 극성만 반대로 바꾸면 됩니다.** 즉 be동사·조동사문과 똑같은 원리(문장 안에 이미 있는 조동사를 재사용)가 완료형에도 그대로 적용되는 것입니다.',
      },
      {
        type: 'table',
        caption: '완료형 have와 일반동사 have의 구분',
        headers: ['have의 역할', '판별법', '부가의문문 만드는 법', '예문'],
        rows: [
          ['완료형 조동사 (have/has/had + p.p.)', '뒤에 과거분사가 온다', 'have/has/had를 그대로 가져와 극성만 반전', "You haven't seen my keys, have you?"],
          ['일반동사 (가지다, 먹다 등의 의미)', '뒤에 명사(목적어)가 온다', '일반동사이므로 do/does/did를 빌려와야 함', "She has a car, doesn't she?"],
        ],
      },
      {
        type: 'example',
        items: [
          { en: "You haven't seen my keys, have you?", ko: '내 열쇠 못 봤지, 그렇지?', note: '완료형 조동사 haven\'t를 그대로 가져와 긍정 태그 have you?를 만듦' },
          { en: "Mel has finished her homework, hasn't she?", ko: 'Mel은 숙제를 끝냈어, 그렇지?', note: '완료형 has → 부정 태그 hasn\'t she?' },
          { en: "They had already left before we arrived, hadn't they?", ko: '우리가 도착하기 전에 그들은 이미 떠났었지, 그렇지?', note: '과거완료 had → hadn\'t they?' },
          { en: "She has a lot of homework tonight, doesn't she?", ko: '그녀는 오늘 밤 숙제가 많지, 그렇지?', note: '이때 has는 완료형이 아니라 "가지다"라는 뜻의 일반동사이므로 do를 빌려와야 함' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '부가의문문 구조 (완료형 조동사 have)',
        parts: [
          { tag: 'S', text: 'You' },
          { tag: 'V', text: "haven't seen" },
          { tag: 'O', text: 'my keys' },
          { tag: 'Tag', text: 'have you?' },
        ],
        translation: "You haven't seen my keys, have you? (완료형 조동사 haven't를 그대로 재사용)",
      },
      {
        type: 'note',
        text: '결국 부가의문문을 만들 때 가장 먼저 확인해야 할 것은 "이 문장에 이미 조동사(be, 조동사, have/has/had완료형)가 있는가"입니다. 있다면 그것을 그대로 재사용하고, 없다면(즉 일반동사 혼자 쓰였다면) 그때만 do/does/did를 새로 빌려옵니다.',
      },
      { type: 'heading', text: 'There is/are 구문과 부정대명사 주어의 부가의문문' },
      {
        type: 'p',
        text: '유도부사 there로 시작하는 존재문(There is/are ~)은 의미상 주어가 없어 보이지만, **부가의문문에서는 there 자체를 대명사처럼 취급하여 그대로 반복합니다.** 한편 everyone, someone, somebody, nobody처럼 사람을 가리키는 부정대명사가 주어일 때는, 이 단어들이 문법적으로는 단수 취급을 받아 동사는 단수형(is)을 쓰지만, **의미상으로는 "여러 사람"을 막연히 가리키므로 부가의문문의 주어는 단수 대명사(he/she)가 아니라 복수 대명사 they로 받습니다.**',
      },
      {
        type: 'table',
        caption: 'There is/are와 부정대명사 주어의 부가의문문',
        headers: ['앞 문장의 주어', '부가의문문의 주어', '극성 규칙', '예문'],
        rows: [
          ['There (There is/are 구문)', 'there', '일반 규칙과 동일 (긍정↔부정)', "There is a problem, isn't there?"],
          ['everyone / everybody / someone / somebody (긍정적 의미)', 'they', '일반 규칙과 동일', "Everyone is ready, aren't they?"],
          ['no one / nobody / none (부정적 의미)', 'they', '이미 부정이므로 부가의문문은 긍정', "No one called, did they?"],
        ],
      },
      {
        type: 'example',
        items: [
          { en: "There are enough chairs for everyone, aren't there?", ko: '모두를 위한 의자가 충분히 있어, 그렇지?', note: 'there를 그대로 대명사처럼 다시 사용' },
          { en: "There wasn't anyone in the room, was there?", ko: '방 안에 아무도 없었지, 그렇지?', note: '부정문(wasn\'t)이므로 긍정 태그' },
          { en: "Everyone enjoyed the trip, didn't they?", ko: '모두가 여행을 즐겼어, 그렇지?', note: 'everyone(단수 취급, 사람 여럿을 의미)의 부가의문문 주어는 they' },
          { en: "Somebody left the window open, didn't they?", ko: '누군가 창문을 열어뒀지, 그렇지?', note: 'somebody도 they로 받음' },
          { en: "Nobody answered the phone, did they?", ko: '아무도 전화를 받지 않았지, 그렇지?', note: 'nobody는 이미 부정 의미이므로 긍정 부가의문문' },
        ],
      },
      { type: 'heading', text: 'I think/believe/suppose로 시작하는 문장의 부가의문문' },
      {
        type: 'p',
        text: 'I think, I believe, I suppose, I guess처럼 화자의 생각을 나타내는 동사가 이끄는 문장 뒤에 that절이 이어질 때는, **주절(I think)이 아니라 종속절(that절)의 동사를 기준으로 부가의문문을 만듭니다.** 이는 화자가 진짜로 궁금해하는 것이 "내가 생각하는지 아닌지"가 아니라 that절의 내용(그녀가 오는지)이기 때문입니다. 단, **주절이 부정문(I don\'t think ~)이면 그 부정의 의미가 실제로는 종속절에 걸리는 것으로 해석되어(부정 전이, negative transfer), 종속절이 의미상 부정이 되므로 부가의문문은 긍정이 됩니다.**',
      },
      {
        type: 'table',
        caption: 'I think류 문장의 부가의문문 규칙',
        headers: ['문장 형태', '부가의문문 기준', '예문'],
        rows: [
          ['I think + 긍정 that절', 'that절의 동사, 극성은 that절 기준으로 반전', "I think she is honest, isn't she?"],
          ['I don\'t think + 긍정 that절', '주절의 부정이 that절 의미에 전이되므로 긍정 태그', "I don't think she is honest, is she?"],
          ['I am sure / I hope + that절', '주절 자체의 확신·소망이 핵심이므로 주절 동사 기준 (예외)', "I hope you can come, can't you? / I'm sure he'll win, won't he?"],
        ],
      },
      {
        type: 'example',
        items: [
          { en: "I think it will rain tomorrow, won't it?", ko: '내일 비가 올 것 같아, 그렇지 않을까?', note: '주절(I think)이 아니라 종속절(it will rain)의 조동사 will 기준' },
          { en: "I believe he passed the exam, didn't he?", ko: '그가 시험에 합격했다고 생각해, 그렇지?', note: '종속절 he passed의 동사(일반동사, 과거) 기준으로 didn\'t he' },
          { en: "I don't think he is coming, is he?", ko: '그가 올 것 같지 않아, 그렇지?', note: '주절의 부정(don\'t think)이 종속절 의미에 전이되어 긍정 태그 is he?를 사용' },
          { en: "I don't believe she told the truth, did she?", ko: '그녀가 사실을 말했다고 생각하지 않아, 그렇지?', note: '역시 부정 전이로 긍정 태그' },
        ],
      },
      {
        type: 'sentence-diagram',
        label: '부가의문문 구조 (I think + that절, 종속절 기준)',
        parts: [
          { tag: 'S', text: 'I' },
          { tag: 'V', text: 'think' },
          { tag: 'M', text: 'it will rain tomorrow' },
          { tag: 'Tag', text: "won't it?" },
        ],
        translation: "I think it will rain tomorrow, won't it? (주절 think가 아니라 종속절 it will rain 기준)",
      },
      { type: 'heading', text: '부정 의미를 가진 다양한 단어와 부가의문문' },
      {
        type: 'p',
        text: '문장에 not이나 조동사의 부정형이 없어도, **never, hardly, seldom, rarely, little, few, no, no one, none처럼 그 자체로 부정의 의미를 담고 있는 단어가 포함되면 문장 전체가 의미상 부정문으로 취급되어, 부가의문문은 긍정형을 사용합니다.**',
      },
      {
        type: 'table',
        caption: '부정 의미를 가진 단어와 부가의문문',
        headers: ['부정 의미 단어', '예문 (긍정 형태의 동사 + 부정 의미 단어)', '부가의문문'],
        rows: [
          ['never', 'She has never been abroad', "has she?"],
          ['hardly / hardly ever', 'He hardly speaks in class', "does he?"],
          ['seldom / rarely', 'They rarely eat out', "do they?"],
          ['little / few', 'There is little hope left', "is there?"],
          ['no / no one / none', 'No students were late', "were they?"],
        ],
      },
      {
        type: 'example',
        items: [
          { en: "She has never been abroad, has she?", ko: '그녀는 한 번도 해외에 나가본 적이 없지, 그렇지?', note: '동사 has는 긍정형이지만 never 때문에 의미상 부정문 → 긍정 태그' },
          { en: "He hardly ever exercises, does he?", ko: '그는 운동을 거의 안 하지, 그렇지?', note: 'hardly ever도 부정 의미이므로 긍정 태그' },
          { en: "They seldom visit their grandparents, do they?", ko: '그들은 조부모님을 거의 찾아뵙지 않지, 그렇지?' },
          { en: "There is little time left, is there?", ko: '남은 시간이 거의 없지, 그렇지?', note: 'little(거의 없는)이 부정 의미이므로 긍정 태그' },
        ],
      },
      {
        type: 'callout',
        title: '15장 심화 정리 — DK 문법서에서 보강한 예외 규칙',
        items: [
          '완료형(have/has/had + p.p.)에서 have는 그 자체로 조동사이므로, do를 빌려오지 않고 have/has/had를 그대로 재사용해 부가의문문을 만든다. (다만 "가지다"라는 뜻의 일반동사 have는 do/does/did를 사용한다.)',
          'There is/are 구문은 there를 대명사처럼 그대로 재사용하고, everyone/somebody 등 사람을 가리키는 부정대명사 주어는 (동사는 단수형이라도) 부가의문문에서 they로 받는다.',
          'I think/believe/suppose + that절 구문은 종속절의 동사를 기준으로 부가의문문을 만들며, 주절이 부정(I don\'t think ~)이면 그 부정이 종속절에 전이되어 부가의문문은 긍정이 된다. (단, I hope/I\'m sure처럼 주절의 의미 자체가 핵심인 경우는 예외적으로 주절 기준.)',
          'never, hardly, seldom, rarely, little, few, no(one) 등은 not 없이도 문장을 의미상 부정문으로 만들므로, 이런 단어가 있으면 동사가 긍정형이어도 부가의문문은 긍정형을 사용한다.',
        ],
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
