import type { Lesson, Stage } from '../types'

// 所有課程資料集中在這裡。
// 新增 / 修改課程：直接編輯下面的 Lesson 物件即可。
// 替換 Scratch 範例：修改該課程的 scratchProjectId 與 scratchProjectUrl。
//
// 課程定位：Scratch 程式先修班，對象國小三、四年級。
// 每週 1 堂、每堂 3 小時、3 個月共 12 堂。以現場教學與實作為主。
// 第 12 堂為「綜合複習與作品升級」，不是個人小專題或期末專題發表。

const grades = '國小三、四年級'
const threeHours = '約 3 小時'

// ───────────────────────────────────────────────
// 階段一：Scratch 基礎（第 1～4 堂）
// ───────────────────────────────────────────────
const l1: Lesson = {
  id: 'meet-scratch',
  order: 1,
  stage: 'Scratch 基礎',
  title: '認識 Scratch，讓角色動起來',
  subtitle: '第一堂課！認識 Scratch 的畫面，做出一個會說話、會移動的小角色。',
  description:
    '今天你會認識 Scratch 的角色、舞台、背景和積木，並且做出第一個作品：一個按下綠旗就會說話、會移動、會換背景的小角色。',
  outcome: '會說話、會移動的小角色',
  targetGrades: grades,
  difficulty: '入門',
  estimatedTime: threeHours,
  concepts: ['介面', '事件', '順序執行', '動作積木', '外觀積木'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  accent: 'from-sky-400 to-blue-500',
  emoji: '🐱',
  goals: [
    '我認得角色區、舞台、背景和積木區',
    '我會用「當綠旗被點擊」開始程式',
    '我會讓角色說話和移動',
    '我會更換背景',
    '我知道程式會由上往下執行',
  ],
  tasks: [
    {
      id: 'l1-t1',
      title: '任務 1：選一個角色',
      goal: '新增或選擇一個你喜歡的角色。',
      concepts: ['介面'],
      studentHint: '點右下角的「選擇角色」按鈕，挑一個喜歡的角色。',
      testMethod: '舞台上出現你選的角色。',
      teacherNote: '先帶學生認識角色區、舞台與積木區的位置。',
    },
    {
      id: 'l1-t2',
      title: '任務 2：更換背景',
      goal: '幫舞台換一張背景。',
      concepts: ['外觀積木'],
      studentHint: '點右下角的「選擇背景」，挑一張你喜歡的場景。',
      testMethod: '舞台變成新的背景。',
      teacherNote: '提醒背景在舞台、角色在角色區，兩者是分開的。',
    },
    {
      id: 'l1-t3',
      title: '任務 3：按綠旗讓角色說話',
      goal: '按下綠旗後，角色說一句話。',
      concepts: ['事件', '外觀積木'],
      studentHint: '放「當綠旗被點擊」，下面接「說 你好！持續 2 秒」。',
      testMethod: '按綠旗後角色說出你打的那句話。',
      teacherNote: '建立「綠旗 = 開始」的概念，積木要由上往下接。',
    },
    {
      id: 'l1-t4',
      title: '任務 4：讓角色移動',
      goal: '說完話後讓角色往前走幾步。',
      concepts: ['順序執行', '動作積木'],
      studentHint: '在說話積木下面接「移動 10 點」，可以多放幾個。',
      testMethod: '角色先說話、再往前移動。',
      teacherNote: '強調順序：先說話才移動，這就是「順序執行」。',
    },
    {
      id: 'l1-t5',
      title: '任務 5：轉向或回到原點',
      goal: '讓角色轉個方向，或回到一開始的位置。',
      concepts: ['動作積木'],
      studentHint: '試試「右轉 15 度」或「定位到 x:0 y:0」。',
      testMethod: '角色會轉向，或回到舞台中間。',
      teacherNote: '舞台正中央是 (0, 0)，可順帶介紹座標。',
    },
  ],
  challenges: [
    { id: 'l1-c1', title: '說兩句話', difficulty: '入門', description: '讓角色連續說兩句話，組成一句自我介紹。', concepts: ['順序執行', '外觀積木'] },
    { id: 'l1-c2', title: '移動到指定位置', difficulty: '入門', description: '用「滑行到 x、y」讓角色平順地移動到某個地方。', concepts: ['動作積木'] },
    { id: 'l1-c3', title: '加入第二個角色', difficulty: '基礎', description: '再加一個角色，也讓它說話或移動。', concepts: ['介面', '事件'] },
  ],
  faqs: [
    { question: '按綠旗角色沒反應？', answer: '程式最上面要先放「當綠旗被點擊」，要自動開始的積木都接在它下面。' },
    { question: '說的話一下就不見？', answer: '用「說 ○○ 持續 2 秒」這種會停留的積木，話就會停一段時間。' },
  ],
  teacherNotes: [
    '第一堂重點是熟悉介面與「第一次就有成果」，不要加入分數、計時或複雜條件。',
    '每完成一個任務就按一次綠旗測試，養成「做一點、測一點」的習慣。',
  ],
}

const l2: Lesson = {
  id: 'arrow-keys',
  order: 2,
  stage: 'Scratch 基礎',
  title: '方向鍵控制，小角色探險',
  subtitle: '學會用方向鍵控制角色上下左右移動，理解 x / y 座標。',
  description:
    '今天你會讓角色聽方向鍵的話：按右往右、按左往左、按上往上、按下往下。順便認識 x 控制左右、y 控制上下。',
  outcome: '可用方向鍵控制的探險小角色',
  targetGrades: grades,
  difficulty: '入門',
  estimatedTime: threeHours,
  concepts: ['鍵盤控制', 'x 座標', 'y 座標', '重複偵測按鍵'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  accent: 'from-sky-400 to-indigo-500',
  emoji: '🕹️',
  goals: [
    '我會用方向鍵控制角色四個方向',
    '我知道 x 控制左右、y 控制上下',
    '我會用「重複執行」一直偵測按鍵',
    '我會讓角色回到起點',
  ],
  tasks: [
    { id: 'l2-t1', title: '任務 1：按右鍵往右', goal: '按右方向鍵時，角色往右移動。', concepts: ['鍵盤控制', 'x 座標'], studentHint: '如果按下右鍵，就把 x 改變 10。', testMethod: '按右鍵，角色往右走。', teacherNote: 'x 變大代表往右。' },
    { id: 'l2-t2', title: '任務 2：按左鍵往左', goal: '按左方向鍵時，角色往左移動。', concepts: ['鍵盤控制', 'x 座標'], studentHint: '如果按下左鍵，就把 x 改變 -10。', testMethod: '按左鍵，角色往左走。', teacherNote: 'x 變小代表往左。' },
    { id: 'l2-t3', title: '任務 3：按上鍵往上', goal: '按上方向鍵時，角色往上移動。', concepts: ['鍵盤控制', 'y 座標'], studentHint: '如果按下上鍵，就把 y 改變 10。', testMethod: '按上鍵，角色往上走。', teacherNote: 'y 變大代表往上。' },
    { id: 'l2-t4', title: '任務 4：按下鍵往下', goal: '按下方向鍵時，角色往下移動。', concepts: ['鍵盤控制', 'y 座標'], studentHint: '如果按下下鍵，就把 y 改變 -10。', testMethod: '按下鍵，角色往下走。', teacherNote: '四個方向都要放進「重複執行」才會一直偵測。' },
    { id: 'l2-t5', title: '任務 5：回到起點', goal: '按綠旗時角色回到固定起點。', concepts: ['x 座標', 'y 座標'], studentHint: '在綠旗下面放「定位到 x、y」設定起點。', testMethod: '按綠旗，角色回到起點位置。', teacherNote: '讓學生理解每次開始都從同一個位置。' },
  ],
  challenges: [
    { id: 'l2-c1', title: '加入寶物', difficulty: '基礎', description: '放一個寶物角色，碰到它時說一句話。', concepts: ['碰撞偵測', '外觀積木'] },
    { id: 'l2-c2', title: '加入音效', difficulty: '入門', description: '移動時播放一個腳步聲或音效。', concepts: ['音效'] },
    { id: 'l2-c3', title: '設計探險地圖', difficulty: '基礎', description: '換一張地圖背景，當作你的探險場景。', concepts: ['外觀積木', '創意改造'] },
  ],
  faqs: [
    { question: '角色只走一下就停？', answer: '偵測按鍵的積木要放進「重複執行」裡，才會一直聽鍵盤。' },
    { question: '角色完全不動？', answer: '確認改變 x / y 的數值不是 0，並確認方向鍵選對了。' },
  ],
  teacherNotes: [
    '本堂複習座標：x 左右、y 上下，是後面遊戲的基礎。',
    '可先示範一個方向，剩下三個讓學生照樣造句完成。',
  ],
}

const l3: Lesson = {
  id: 'animation-sound',
  order: 3,
  stage: 'Scratch 基礎',
  title: '動畫與音效，讓角色更生動',
  subtitle: '用造型切換、等待和重複，做出會走路、會發出聲音的角色。',
  description:
    '今天你會用「換造型」加「重複執行」做出走路動畫，再加上等待時間控制節奏，並播放音效，讓角色活起來。',
  outcome: '會走路、會換造型、有音效的角色',
  targetGrades: grades,
  difficulty: '入門',
  estimatedTime: threeHours,
  concepts: ['造型切換', '音效', '等待', '迴圈', '動畫節奏'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  accent: 'from-cyan-400 to-sky-500',
  emoji: '💃',
  goals: [
    '我會切換角色造型',
    '我會用「等待」控制動畫快慢',
    '我會用「重複執行」做出走路動畫',
    '我會播放音效',
  ],
  tasks: [
    { id: 'l3-t1', title: '任務 1：選有多個造型的角色', goal: '挑一個有兩個以上造型的角色。', concepts: ['造型切換'], studentHint: '到「造型」分頁看看角色有幾個造型。', testMethod: '角色有兩個以上造型可以換。', teacherNote: '帶學生認識「造型」分頁。' },
    { id: 'l3-t2', title: '任務 2：切換造型', goal: '讓角色換成下一個造型。', concepts: ['造型切換'], studentHint: '用「下一個造型」積木。', testMethod: '角色外觀換了一下。', teacherNote: '先單獨試一次，再放進迴圈。' },
    { id: 'l3-t3', title: '任務 3：加入等待時間', goal: '在換造型之間加入短暫等待。', concepts: ['等待', '動畫節奏'], studentHint: '在「下一個造型」後面接「等待 0.2 秒」。', testMethod: '造型切換有了節奏感。', teacherNote: '等待越短動作越快，可讓學生實驗。' },
    { id: 'l3-t4', title: '任務 4：用重複做走路動畫', goal: '讓角色一直換造型，看起來在走路。', concepts: ['迴圈'], studentHint: '把「下一個造型 + 等待」放進「重複執行」。', testMethod: '角色看起來一直在走路。', teacherNote: '這是迴圈的好例子：重複做同一件事。' },
    { id: 'l3-t5', title: '任務 5：加入音效', goal: '讓角色播放一個聲音。', concepts: ['音效'], studentHint: '到「音效」分類接「播放音效 ○○」。', testMethod: '可以聽到角色的聲音（記得開喇叭）。', teacherNote: '提醒先確認音量。' },
  ],
  challenges: [
    { id: 'l3-c1', title: '跳舞動畫', difficulty: '基礎', description: '配合音樂讓角色換造型，做出跳舞效果。', concepts: ['造型切換', '迴圈'] },
    { id: 'l3-c2', title: '表情變化', difficulty: '入門', description: '讓角色換不同表情造型。', concepts: ['造型切換'] },
    { id: 'l3-c3', title: '加入背景音樂', difficulty: '入門', description: '用「播放音效直到結束」當背景音樂。', concepts: ['音效'] },
  ],
  faqs: [
    { question: '造型換太快看不清楚？', answer: '把「等待」的秒數調大一點，例如 0.3 或 0.5 秒。' },
    { question: '角色只換一次造型？', answer: '要把換造型放進「重複執行」裡才會一直循環。' },
  ],
  teacherNotes: [
    '本堂把「迴圈 + 等待」具體化成走路動畫，很有成就感。',
    '鼓勵學生調整等待秒數，觀察動畫快慢的差別。',
  ],
}

const l4: Lesson = {
  id: 'interactive-story',
  order: 4,
  stage: 'Scratch 基礎',
  title: '互動故事，讓角色會對話',
  subtitle: '用角色對話、背景切換和簡單廣播，做出一段小故事。',
  description:
    '今天你會讓兩個角色輪流說話、切換場景，做出一個有開頭、有結尾的互動小故事。',
  outcome: '有角色對話與場景切換的互動故事',
  targetGrades: grades,
  difficulty: '入門',
  estimatedTime: threeHours,
  concepts: ['順序執行', '角色對話', '背景切換', '顯示與隱藏', '簡單廣播'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  accent: 'from-blue-400 to-violet-500',
  emoji: '📖',
  goals: [
    '我會讓角色依序說話',
    '我會切換背景做出場景變化',
    '我會用顯示 / 隱藏控制角色出場',
    '我會用簡單廣播當作「換場」的信號',
  ],
  tasks: [
    { id: 'l4-t1', title: '任務 1：設定故事主題', goal: '想好一個簡單的小故事主題。', concepts: ['順序執行'], studentHint: '例如「小貓找朋友」，想好開頭和結尾。', testMethod: '你能說出故事大概在講什麼。', teacherNote: '故事越簡單越好，重點在練習對話與換場。' },
    { id: 'l4-t2', title: '任務 2：加入兩個角色', goal: '放入兩個會對話的角色。', concepts: ['顯示與隱藏'], studentHint: '選兩個角色，安排好它們的位置。', testMethod: '舞台上有兩個角色。', teacherNote: '提醒每個角色有自己的程式。' },
    { id: 'l4-t3', title: '任務 3：讓角色依序說話', goal: '讓兩個角色輪流說話。', concepts: ['角色對話', '順序執行'], studentHint: '用「說 ○○ 持續 2 秒」加「等待」讓他們輪流。', testMethod: '兩個角色一句一句對話。', teacherNote: '可介紹「廣播」當作換人說話的信號。' },
    { id: 'l4-t4', title: '任務 4：切換背景', goal: '在故事中換一次場景。', concepts: ['背景切換', '簡單廣播'], studentHint: '用「背景換成 ○○」，或廣播一個訊息來換場。', testMethod: '故事進行到一半，背景換了。', teacherNote: '簡單廣播只當「換場 / 開始 / 結束」用，不要太複雜。' },
    { id: 'l4-t5', title: '任務 5：做出故事結尾', goal: '幫故事加一個結尾。', concepts: ['順序執行'], studentHint: '最後讓角色說一句結束的話，或顯示「The End」。', testMethod: '故事有明確的結尾。', teacherNote: '完成後可請幾位學生分享自己的故事。' },
  ],
  challenges: [
    { id: 'l4-c1', title: '加入開始按鈕', difficulty: '基礎', description: '做一個按鈕，點下去才開始故事。', concepts: ['事件', '簡單廣播'] },
    { id: 'l4-c2', title: '加入音效', difficulty: '入門', description: '在換場或對話時加上音效。', concepts: ['音效'] },
    { id: 'l4-c3', title: '加入第三個角色', difficulty: '基礎', description: '再加一個角色讓故事更熱鬧。', concepts: ['角色對話', '顯示與隱藏'] },
  ],
  faqs: [
    { question: '兩個角色同時說話、亂掉了？', answer: '用「等待」或「廣播」安排順序，讓一個說完另一個才說。' },
    { question: '背景沒有換？', answer: '確認用的是「背景換成 ○○」，而且選到正確的背景名稱。' },
  ],
  teacherNotes: [
    '本堂第一次帶到「簡單廣播」，只當作開始 / 換場 / 結束的信號即可。',
    '不用追求複雜劇情，重點是練習對話順序與場景切換。',
  ],
}

// ───────────────────────────────────────────────
// 階段二：接水果遊戲（第 5～7 堂，主力作品）
// ───────────────────────────────────────────────
const l5: Lesson = {
  id: 'catch-fruit-1',
  order: 5,
  stage: '接水果遊戲',
  title: '接水果遊戲 1，讓水果掉下來',
  subtitle: '開始做第一個正式小遊戲！籃子可以移動，水果會從上方掉落。',
  description:
    '今天我們開始做接水果遊戲。你會先做出可以左右移動的籃子，再讓水果從舞台上方往下掉，掉到底部就回到上面。',
  outcome: '籃子會移動、水果會掉落的遊戲雛形',
  targetGrades: grades,
  difficulty: '基礎',
  estimatedTime: threeHours,
  concepts: ['角色控制', '迴圈', 'y 座標', '條件判斷', '物件重複出現'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  accent: 'from-rose-400 to-orange-400',
  emoji: '🧺',
  goals: [
    '我會做出可以左右移動的籃子',
    '我會讓水果從上方往下掉',
    '我會用「重複執行」讓水果一直掉',
    '我會讓水果掉到底部後回到上方',
  ],
  tasks: [
    { id: 'l5-t1', title: '任務 1：建立籃子角色', goal: '放一個籃子角色在舞台下方。', concepts: ['角色控制'], studentHint: '選一個籃子（或盤子）角色，放到下方中間。', testMethod: '舞台下方出現籃子。', teacherNote: '籃子位置固定在下方即可。' },
    { id: 'l5-t2', title: '任務 2：讓籃子左右移動', goal: '用左右鍵控制籃子。', concepts: ['角色控制', '迴圈'], studentHint: '在「重複執行」裡：按右鍵 x 加、按左鍵 x 減。', testMethod: '左右鍵可以控制籃子。', teacherNote: '複習第 2 堂的鍵盤控制。' },
    { id: 'l5-t3', title: '任務 3：建立水果角色', goal: '放一個水果角色在上方。', concepts: ['物件重複出現'], studentHint: '選一個水果角色，放到舞台上方。', testMethod: '舞台上方出現水果。', teacherNote: '可先固定一顆水果，之後再隨機。' },
    { id: 'l5-t4', title: '任務 4：讓水果往下掉', goal: '讓水果從上方一直往下掉。', concepts: ['迴圈', 'y 座標'], studentHint: '在「重複執行」裡把 y 改變 -5。', testMethod: '按綠旗後水果一直往下掉。', teacherNote: 'y 變小代表往下，數值可調整速度。' },
    { id: 'l5-t5', title: '任務 5：水果回到上方', goal: '水果掉到底部後回到上面。', concepts: ['條件判斷', 'y 座標'], studentHint: '如果 y 小於 -150，就把 y 設回 150。', testMethod: '水果掉到底部後重新從上面掉。', teacherNote: '帶出「如果……就……」的條件邏輯。' },
  ],
  challenges: [
    { id: 'l5-c1', title: '調整掉落速度', difficulty: '入門', description: '改變 y 的數值，讓水果掉得更快或更慢。', concepts: ['y 座標'] },
    { id: 'l5-c2', title: '更換水果造型', difficulty: '入門', description: '把水果換成你喜歡的造型。', concepts: ['造型切換'] },
    { id: 'l5-c3', title: '加入背景', difficulty: '入門', description: '幫遊戲加一張漂亮的背景。', concepts: ['外觀積木'] },
  ],
  faqs: [
    { question: '籃子不能移動？', answer: '按鍵判斷要放進「重複執行」裡，而且 x 改變的數值不能是 0。' },
    { question: '水果不會往下掉？', answer: 'y 要「改變負數」（例如 -5），而且要放進「重複執行」。' },
    { question: '水果掉下去後不回來？', answer: '要加一個條件：如果 y 小於底部位置，就把 y 設回上方。' },
  ],
  teacherNotes: [
    '本堂是接水果三部曲的第一段，先把「會動、會掉、會回」做穩。',
    '尚未加分數，先讓學生熟悉籃子與水果的基本動作。',
  ],
}

const l6: Lesson = {
  id: 'catch-fruit-2',
  order: 6,
  stage: '接水果遊戲',
  title: '接水果遊戲 2，接到水果會加分',
  subtitle: '建立分數變數，用碰撞偵測判斷有沒有接到水果。',
  description:
    '今天你會幫遊戲加上分數：建立「分數」變數，當水果碰到籃子就加 1 分，水果再從隨機位置重新掉下來。',
  outcome: '可以計分的接水果遊戲',
  targetGrades: grades,
  difficulty: '基礎',
  estimatedTime: threeHours,
  concepts: ['變數', '分數', '碰撞偵測', '條件判斷', '隨機 x 座標'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  accent: 'from-orange-400 to-amber-400',
  emoji: '🍎',
  goals: [
    '我會建立「分數」變數',
    '我會在遊戲開始時把分數設為 0',
    '我會用碰撞偵測判斷接到水果',
    '我會讓水果從隨機位置掉落',
  ],
  tasks: [
    { id: 'l6-t1', title: '任務 1：建立分數變數', goal: '建立一個叫「分數」的變數。', concepts: ['變數', '分數'], studentHint: '在「變數」分類點「建立一個變數」，命名為分數。', testMethod: '舞台上出現「分數」的顯示。', teacherNote: '變數就是會記住數字的小盒子。' },
    { id: 'l6-t2', title: '任務 2：分數設為 0', goal: '遊戲一開始把分數歸零。', concepts: ['變數'], studentHint: '在綠旗下面放「把 分數 設為 0」。', testMethod: '每次按綠旗，分數從 0 開始。', teacherNote: '提醒每次開始都要先歸零。' },
    { id: 'l6-t3', title: '任務 3：判斷碰到籃子', goal: '讓水果偵測有沒有碰到籃子。', concepts: ['碰撞偵測', '條件判斷'], studentHint: '在水果的重複執行裡：如果 碰到 籃子。', testMethod: '水果碰到籃子時條件成立。', teacherNote: '偵測積木要放在水果角色上。' },
    { id: 'l6-t4', title: '任務 4：接到水果加分', goal: '碰到籃子時分數加 1。', concepts: ['變數', '條件判斷'], studentHint: '在「如果碰到籃子」裡放「把 分數 改變 1」。', testMethod: '接到水果後分數增加。', teacherNote: '這是遊戲規則核心：如果碰到，就加分。' },
    { id: 'l6-t5', title: '任務 5：水果重新出現', goal: '接到後水果回到上方。', concepts: ['物件重複出現'], studentHint: '加分後把 y 設回上方。', testMethod: '接到水果後，水果重新從上面掉。', teacherNote: '避免同一顆水果一直加分。' },
    { id: 'l6-t6', title: '任務 6：隨機位置掉落', goal: '水果每次從不同 x 位置掉下來。', concepts: ['隨機 x 座標'], studentHint: '水果回到上方時，把 x 設成「隨機取 -200 到 200」。', testMethod: '水果每次出現的位置都不一樣。', teacherNote: '隨機數讓遊戲更有變化。' },
  ],
  challenges: [
    { id: 'l6-c1', title: '接到水果播音效', difficulty: '入門', description: '接到水果時播放一個音效。', concepts: ['音效'] },
    { id: 'l6-c2', title: '不同水果不同分', difficulty: '基礎', description: '做不同水果，接到時加不同分數。', concepts: ['條件判斷', '變數'] },
    { id: 'l6-c3', title: '10 分說太棒了', difficulty: '基礎', description: '分數達到 10 分時讓角色說「太棒了！」。', concepts: ['條件判斷', '變數'] },
  ],
  faqs: [
    { question: '分數沒有增加？', answer: '碰撞判斷可能放錯角色，或還沒建立分數變數。偵測「碰到籃子」要放在水果上。' },
    { question: '水果每次都從同一個地方掉？', answer: '沒有用隨機 x。水果回到上方時要把 x 設成隨機數。' },
    { question: '接到水果後水果沒重新出現？', answer: '接到後要記得把 y 設回上方，水果才會重新掉。' },
  ],
  teacherNotes: [
    '本堂是遊戲邏輯核心，可在白板畫「如果碰到籃子 → 分數加 1」再對照積木。',
    '提醒偵測積木放在水果角色上，這是最常見的放錯地方。',
  ],
}

const l7: Lesson = {
  id: 'catch-fruit-3',
  order: 7,
  stage: '接水果遊戲',
  title: '接水果遊戲 3，倒數計時與自由改造',
  subtitle: '加入倒數計時和結束提示，再把遊戲改造成自己的風格。',
  description:
    '今天你會完成接水果遊戲的完整版：加入「時間」變數做倒數計時，時間到顯示提示，最後加上音效、背景與個人改造。',
  outcome: '有分數、倒數、音效的完整接水果遊戲',
  targetGrades: grades,
  difficulty: '基礎',
  estimatedTime: threeHours,
  concepts: ['時間變數', '倒數計時', '遊戲開始與結束', '簡單廣播', '創意改造'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  accent: 'from-amber-400 to-rose-400',
  emoji: '⏱️',
  goals: [
    '我會建立「時間」變數做倒數',
    '我會讓時間每秒減少 1',
    '我會在時間到時顯示提示',
    '我會把遊戲改造成自己的風格',
  ],
  tasks: [
    { id: 'l7-t1', title: '任務 1：建立時間變數', goal: '建立一個叫「時間」的變數。', concepts: ['時間變數', '變數'], studentHint: '在「變數」分類建立一個變數叫時間。', testMethod: '舞台上出現「時間」顯示。', teacherNote: '變數也能拿來記時間，不只記分數。' },
    { id: 'l7-t2', title: '任務 2：時間設為 30', goal: '遊戲開始時把時間設為 30。', concepts: ['時間變數'], studentHint: '在綠旗下面放「把 時間 設為 30」。', testMethod: '按綠旗，時間從 30 開始。', teacherNote: '建議用一個角色或舞台統一管理時間。' },
    { id: 'l7-t3', title: '任務 3：每秒減 1', goal: '讓時間每 1 秒減少 1。', concepts: ['倒數計時', '迴圈'], studentHint: '重複執行裡：等待 1 秒、把 時間 改變 -1。', testMethod: '時間從 30 慢慢倒數。', teacherNote: '一定要先「等待 1 秒」再減，倒數才準。' },
    { id: 'l7-t4', title: '任務 4：時間到顯示提示', goal: '時間到 0 時顯示提示並停止。', concepts: ['遊戲開始與結束', '簡單廣播'], studentHint: '如果 時間 = 0，廣播「遊戲結束」並顯示提示。', testMethod: '時間到 0 後出現結束提示。', teacherNote: '簡單廣播當「遊戲結束」信號即可。' },
    { id: 'l7-t5', title: '任務 5：音效與改造', goal: '加入音效、背景，做出自己的版本。', concepts: ['創意改造', '音效'], studentHint: '換水果、換背景、加音效都可以。', testMethod: '遊戲看起來、聽起來更像自己的作品。', teacherNote: '提醒一次只改一個地方，改完先測試。' },
  ],
  challenges: [
    { id: 'l7-c1', title: '加入炸彈', difficulty: '基礎', description: '做一個炸彈，接到會扣分。', concepts: ['碰撞偵測', '變數', '條件判斷'] },
    { id: 'l7-c2', title: '加入生命值', difficulty: '基礎', description: '水果掉到地上沒接到就扣一點生命。', concepts: ['變數', '條件判斷'] },
    { id: 'l7-c3', title: '設計自己的主題', difficulty: '基礎', description: '把接水果改成接星星、接愛心等自己的主題。', concepts: ['創意改造'] },
  ],
  faqs: [
    { question: '時間倒數太快？', answer: '忘了加「等待 1 秒」。每次把時間減 1 之前要先等待 1 秒。' },
    { question: '時間到後遊戲還在繼續？', answer: '要設定時間到 0 時的停止或結束流程，例如廣播「遊戲結束」。' },
    { question: '改一改原本功能壞了？', answer: '一次只改一個地方，改完立刻按綠旗測試，比較好找問題。' },
  ],
  teacherNotes: [
    '本堂完成接水果完整版，是前三堂的總成果，成就感最強。',
    '留足夠時間給「自由改造」，並提醒一次只改一處、改完即測。',
  ],
}

// ───────────────────────────────────────────────
// 階段三：打地鼠遊戲（第 8～9 堂）
// ───────────────────────────────────────────────
const l8: Lesson = {
  id: 'whack-mole-1',
  order: 8,
  stage: '打地鼠遊戲',
  title: '打地鼠遊戲 1，點擊就得分',
  subtitle: '用點擊事件和隨機位置，做出地鼠冒出來、點下去加分的遊戲。',
  description:
    '今天你會做打地鼠遊戲：地鼠隨機出現在不同位置，用滑鼠點到地鼠就加分，被點到後換到別的地方。',
  outcome: '地鼠隨機出現、點擊加分的遊戲',
  targetGrades: grades,
  difficulty: '基礎',
  estimatedTime: threeHours,
  concepts: ['點擊角色事件', '隨機位置', '分數', '角色顯示與隱藏'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  accent: 'from-amber-400 to-yellow-500',
  emoji: '🔨',
  goals: [
    '我會用「當角色被點擊」做互動',
    '我會讓地鼠隨機出現在不同位置',
    '我會用分數變數記分',
    '我會用顯示 / 隱藏控制地鼠',
  ],
  tasks: [
    { id: 'l8-t1', title: '任務 1：建立地鼠角色', goal: '放一個地鼠角色到舞台上。', concepts: ['角色顯示與隱藏'], studentHint: '選一個地鼠（或任何角色）當主角。', testMethod: '舞台上出現地鼠。', teacherNote: '可先用內建角色，造型之後再換。' },
    { id: 'l8-t2', title: '任務 2：點擊加分', goal: '點到地鼠時分數加 1。', concepts: ['點擊角色事件', '分數'], studentHint: '建立分數變數，放「當這個角色被點擊 → 分數改變 1」。', testMethod: '點地鼠，分數增加。', teacherNote: '和接水果的「碰撞」對比：這次用「被點擊」。' },
    { id: 'l8-t3', title: '任務 3：被點後換位置', goal: '地鼠被點到後跳到別的地方。', concepts: ['隨機位置'], studentHint: '被點擊後把 x、y 設成隨機數。', testMethod: '點到地鼠後，它換到別的位置。', teacherNote: 'x 與 y 都隨機，地鼠就會到處跑。' },
    { id: 'l8-t4', title: '任務 4：隨機出現', goal: '讓地鼠自己一直換位置出現。', concepts: ['隨機位置', '迴圈'], studentHint: '重複執行：顯示、等待、換隨機位置。', testMethod: '地鼠自己一隻一隻冒出來。', teacherNote: '等待時間越短越難打。' },
    { id: 'l8-t5', title: '任務 5：加入音效', goal: '打到地鼠時播放音效。', concepts: ['音效'], studentHint: '被點擊時接「播放音效 ○○」。', testMethod: '打到地鼠會發出聲音。', teacherNote: '音效讓回饋更明顯。' },
  ],
  challenges: [
    { id: 'l8-c1', title: '換成別的角色', difficulty: '入門', description: '把地鼠換成你喜歡的角色。', concepts: ['造型切換'] },
    { id: 'l8-c2', title: '點到切換造型', difficulty: '基礎', description: '被點到時換成「被打到」的造型。', concepts: ['造型切換'] },
    { id: 'l8-c3', title: '加入背景', difficulty: '入門', description: '幫遊戲加一張草地或場景背景。', concepts: ['外觀積木'] },
  ],
  faqs: [
    { question: '點地鼠沒反應？', answer: '要用「當這個角色被點擊」事件，而且地鼠當下要是「顯示」狀態。' },
    { question: '地鼠不會自己出現？', answer: '把「顯示 → 等待 → 換位置」放進「重複執行」裡。' },
  ],
  teacherNotes: [
    '本堂重點在「點擊事件」與「隨機位置」，與接水果的碰撞偵測互相對照。',
    '地鼠出現太快學生會挫折，先把等待時間調長，熟練後再縮短。',
  ],
}

const l9: Lesson = {
  id: 'whack-mole-2',
  order: 9,
  stage: '打地鼠遊戲',
  title: '打地鼠遊戲 2，倒數與扣分挑戰',
  subtitle: '加入倒數時間和扣分角色，讓打地鼠變得更有挑戰。',
  description:
    '今天你會延伸打地鼠遊戲：加入倒數計時、時間到顯示總分，再加一個「不能打」的角色，點到會扣分。',
  outcome: '有時間限制與扣分規則的打地鼠遊戲',
  targetGrades: grades,
  difficulty: '基礎',
  estimatedTime: threeHours,
  concepts: ['時間變數', '條件判斷', '加分與扣分', '遊戲回饋'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  accent: 'from-yellow-500 to-orange-500',
  emoji: '🎯',
  goals: [
    '我會加入倒數時間',
    '我會在時間到時顯示總分',
    '我會用條件判斷做加分與扣分',
    '我會給玩家清楚的遊戲回饋',
  ],
  tasks: [
    { id: 'l9-t1', title: '任務 1：加入倒數時間', goal: '建立時間變數並倒數。', concepts: ['時間變數', '倒數計時'], studentHint: '時間設為 30，重複「等待 1 秒、時間改變 -1」。', testMethod: '時間會慢慢倒數。', teacherNote: '複習接水果的倒數，概念是共通的。' },
    { id: 'l9-t2', title: '任務 2：時間到顯示總分', goal: '時間到 0 時顯示分數並停止。', concepts: ['條件判斷', '遊戲回饋'], studentHint: '如果 時間 = 0，就停止並讓角色說出分數。', testMethod: '時間到後出現總分。', teacherNote: '可用廣播「遊戲結束」通知所有角色停下。' },
    { id: 'l9-t3', title: '任務 3：加入第二個角色', goal: '再加一個會冒出來的角色。', concepts: ['角色顯示與隱藏'], studentHint: '複製地鼠的程式給新角色。', testMethod: '兩個角色都會隨機出現。', teacherNote: '提醒每個角色有自己的程式。' },
    { id: 'l9-t4', title: '任務 4：點對的加分', goal: '點到正確角色時加分。', concepts: ['加分與扣分', '條件判斷'], studentHint: '正確角色被點擊 → 分數改變 1。', testMethod: '點對角色分數增加。', teacherNote: '明確區分哪個該打、哪個不該打。' },
    { id: 'l9-t5', title: '任務 5：點錯的扣分', goal: '點到錯誤角色時扣分或提醒。', concepts: ['加分與扣分', '遊戲回饋'], studentHint: '錯誤角色被點擊 → 分數改變 -1 或顯示提醒。', testMethod: '點錯角色會扣分或跳提醒。', teacherNote: '扣分讓遊戲更有挑戰，也練習條件判斷。' },
  ],
  challenges: [
    { id: 'l9-c1', title: '不同分數的角色', difficulty: '基礎', description: '做大小不同的角色，打到小的加更多分。', concepts: ['變數', '條件判斷'] },
    { id: 'l9-c2', title: '出現更快', difficulty: '基礎', description: '縮短等待時間，挑戰更快的反應。', concepts: ['迴圈', '時間變數'] },
    { id: 'l9-c3', title: '自己的打地鼠主題', difficulty: '基礎', description: '換角色與背景，設計專屬主題。', concepts: ['創意改造'] },
  ],
  faqs: [
    { question: '時間到了角色還在動？', answer: '用廣播「遊戲結束」，讓所有角色收到後停止或隱藏。' },
    { question: '扣分扣不停？', answer: '確認扣分放在「被點擊」事件裡，而不是放進重複執行。' },
  ],
  teacherNotes: [
    '本堂把加分 / 扣分和時間結合，遊戲回饋更完整。',
    '可讓快的學生挑戰不同分數角色，慢的學生完成加分 / 扣分即可。',
  ],
}

// ───────────────────────────────────────────────
// 階段四：迷宮挑戰（第 10～11 堂）
// ───────────────────────────────────────────────
const l10: Lesson = {
  id: 'maze-1',
  order: 10,
  stage: '迷宮挑戰',
  title: '迷宮挑戰 1，碰到牆壁回起點',
  subtitle: '用方向鍵走迷宮，碰到牆壁回起點，走到終點就過關。',
  description:
    '今天你會做迷宮遊戲：用方向鍵控制角色走迷宮，用「碰到顏色」偵測牆壁，碰到牆壁就回起點，走到終點顯示過關。',
  outcome: '碰牆回起點、到終點過關的迷宮',
  targetGrades: grades,
  difficulty: '進階',
  estimatedTime: threeHours,
  concepts: ['方向鍵控制', '顏色偵測', '條件判斷', '起點與終點', '遊戲規則'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  accent: 'from-emerald-400 to-teal-500',
  emoji: '🧩',
  goals: [
    '我會用方向鍵控制角色走迷宮',
    '我會用「碰到顏色」偵測牆壁與終點',
    '我會在碰到牆壁時回到起點',
    '我會在碰到終點時顯示過關',
  ],
  tasks: [
    { id: 'l10-t1', title: '任務 1：建立角色與迷宮背景', goal: '放一個角色，並準備一張迷宮背景。', concepts: ['起點與終點'], studentHint: '選一個小角色，背景用一張有牆壁的迷宮圖。', testMethod: '舞台上有角色和迷宮。', teacherNote: '牆壁用單一純色，學生才好用顏色偵測。' },
    { id: 'l10-t2', title: '任務 2：設定起點', goal: '按綠旗時角色回到起點。', concepts: ['起點與終點'], studentHint: '綠旗下面放「定位到 起點 x、y」。', testMethod: '按綠旗，角色在起點。', teacherNote: '起點留一塊空白，不要壓在牆色上。' },
    { id: 'l10-t3', title: '任務 3：方向鍵移動', goal: '用四個方向鍵控制角色。', concepts: ['方向鍵控制'], studentHint: '重複執行裡用四個方向鍵改變 x、y。', testMethod: '四個方向鍵都能移動角色。', teacherNote: '複習第 2 堂與第 5 堂的鍵盤控制。' },
    { id: 'l10-t4', title: '任務 4：偵測牆壁', goal: '判斷角色有沒有碰到牆壁顏色。', concepts: ['顏色偵測', '條件判斷'], studentHint: '如果 碰到 牆壁顏色（用滴管吸取）。', testMethod: '碰到牆壁時條件成立。', teacherNote: '用顏色滴管吸取牆壁的確切顏色。' },
    { id: 'l10-t5', title: '任務 5：碰牆回起點', goal: '碰到牆壁時回到起點。', concepts: ['條件判斷', '起點與終點'], studentHint: '如果碰到牆壁顏色，就定位回起點。', testMethod: '撞牆時角色被送回起點。', teacherNote: '偵測要放在重複執行裡才會一直檢查。' },
    { id: 'l10-t6', title: '任務 6：到終點過關', goal: '碰到終點顏色時顯示過關。', concepts: ['顏色偵測', '遊戲規則'], studentHint: '如果碰到終點顏色，就說「過關！」。', testMethod: '走到終點出現過關提示。', teacherNote: '終點用和牆壁不同的顏色，避免搞混。' },
  ],
  challenges: [
    { id: 'l10-c1', title: '加入音效', difficulty: '入門', description: '撞牆與過關時各播一個音效。', concepts: ['音效'] },
    { id: 'l10-c2', title: '加入計時器', difficulty: '基礎', description: '加倒數或計時，看多快走到終點。', concepts: ['時間變數', '條件判斷'] },
    { id: 'l10-c3', title: '改變迷宮主題', difficulty: '入門', description: '換背景顏色或主題，做出自己的迷宮風格。', concepts: ['創意改造'] },
  ],
  faqs: [
    { question: '角色穿過牆壁？', answer: '「碰到顏色」可能選錯色。用滴管重新吸牆壁顏色，並把偵測放進重複執行。' },
    { question: '一直被送回起點？', answer: '角色可能一開始就壓在牆色上。起點留空白，或把角色縮小一點。' },
    { question: '走到終點沒反應？', answer: '終點要用和牆壁不同的顏色，偵測終點的積木也要放進重複執行。' },
  ],
  teacherNotes: [
    '本堂難度較高，建議排在前面幾堂之後。重點在顏色偵測與條件判斷。',
    '牆壁用單一純色、可先給好背景圖，讓學生專注在程式邏輯。',
  ],
}

const l11: Lesson = {
  id: 'maze-2',
  order: 11,
  stage: '迷宮挑戰',
  title: '迷宮挑戰 2，設計自己的迷宮',
  subtitle: '自己畫一張迷宮，設定起點終點，測試難度剛不剛好。',
  description:
    '今天你會自己畫迷宮：設計路線、設定起點與終點，確認碰牆會回起點、終點能過關，再測試迷宮會不會太難或太簡單。',
  outcome: '一個自己設計的迷宮挑戰',
  targetGrades: grades,
  difficulty: '進階',
  estimatedTime: threeHours,
  concepts: ['關卡設計', '遊戲難度', '顏色偵測', '創意改造', '測試與修正'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  accent: 'from-teal-400 to-emerald-600',
  emoji: '🗺️',
  goals: [
    '我會自己畫一張迷宮背景',
    '我會設定起點與終點',
    '我會確認碰牆回起點、終點過關',
    '我會測試並調整迷宮難度',
  ],
  tasks: [
    { id: 'l11-t1', title: '任務 1：自己畫迷宮', goal: '在背景用畫筆畫一張迷宮。', concepts: ['關卡設計', '創意改造'], studentHint: '用同一個顏色畫牆壁，通道要夠寬。', testMethod: '舞台上有你畫的迷宮。', teacherNote: '提醒整張牆要用同一顏色，通道別太窄。' },
    { id: 'l11-t2', title: '任務 2：設定起點與終點', goal: '安排好起點和終點的位置。', concepts: ['關卡設計'], studentHint: '起點留空白，終點用明顯的顏色標出來。', testMethod: '起點與終點清楚可見。', teacherNote: '終點顏色要和牆壁不同。' },
    { id: 'l11-t3', title: '任務 3：確認碰牆回起點', goal: '測試撞牆會不會回起點。', concepts: ['顏色偵測', '測試與修正'], studentHint: '故意去撞牆，看角色有沒有回起點。', testMethod: '撞牆會被送回起點。', teacherNote: '若沒反應，重新吸取牆壁顏色。' },
    { id: 'l11-t4', title: '任務 4：確認終點過關', goal: '測試走到終點會不會過關。', concepts: ['顏色偵測', '測試與修正'], studentHint: '走到終點看有沒有顯示過關。', testMethod: '到終點會出現過關提示。', teacherNote: '確認偵測的是終點顏色。' },
    { id: 'l11-t5', title: '任務 5：測試難度', goal: '判斷迷宮會不會太難或太簡單。', concepts: ['遊戲難度', '測試與修正'], studentHint: '請旁邊同學玩玩看，再調整路線。', testMethod: '同學能在合理時間內走完。', teacherNote: '互相試玩是很好的修正方式。' },
  ],
  challenges: [
    { id: 'l11-c1', title: '加入計時', difficulty: '基礎', description: '加計時器，挑戰最快通關時間。', concepts: ['時間變數', '條件判斷'] },
    { id: 'l11-c2', title: '加入寶物', difficulty: '基礎', description: '在路上放寶物，碰到加分或說話。', concepts: ['碰撞偵測', '變數'] },
    { id: 'l11-c3', title: '更難的路線', difficulty: '進階', description: '把通道變窄、路線變複雜，提高難度。', concepts: ['關卡設計', '遊戲難度'] },
  ],
  faqs: [
    { question: '自己畫的牆偵測不到？', answer: '可能牆壁不是同一個顏色。用同一色重畫，再用滴管重新吸取。' },
    { question: '通道太窄走不過去？', answer: '把通道畫寬一點，或把角色縮小。' },
  ],
  teacherNotes: [
    '本堂重點在關卡設計與「測試→修正」的循環，讓學生互相試玩。',
    '多關卡只當挑戰，不要做成複雜的多關卡系統。',
  ],
}

// ───────────────────────────────────────────────
// 階段五：綜合整理（第 12 堂）
// ───────────────────────────────────────────────
const l12: Lesson = {
  id: 'review-upgrade',
  order: 12,
  stage: '綜合整理',
  title: '綜合複習與作品升級',
  subtitle: '從已完成的作品中選一個來升級、整理，並和同學分享。',
  description:
    '最後一堂課，不做新的大專題。你會從之前完成的接水果、打地鼠或迷宮挑戰中，挑一個作品來修正、升級，加入新功能，最後找同學試玩、簡單分享。',
  outcome: '選一個作品升級、整理並分享',
  targetGrades: grades,
  difficulty: '基礎',
  estimatedTime: threeHours,
  concepts: ['綜合複習', '作品整理', '測試與修正', '創意改造', '簡單發表'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  accent: 'from-fuchsia-400 to-purple-500',
  emoji: '🌟',
  goals: [
    '我會選一個自己想升級的作品',
    '我會修正作品目前的小問題',
    '我會加入至少一個新功能或新設計',
    '我會找同學試玩並簡單分享',
  ],
  tasks: [
    { id: 'l12-t1', title: '任務 1：選一個作品升級', goal: '從接水果、打地鼠或迷宮中選一個。', concepts: ['綜合複習'], studentHint: '挑一個你最喜歡、最想變更好的作品。', testMethod: '你決定好要升級哪一個作品。', teacherNote: '尊重學生選擇，不規定一定要選哪個。' },
    { id: 'l12-t2', title: '任務 2：修正目前的問題', goal: '把作品現在的小毛病修好。', concepts: ['測試與修正'], studentHint: '先玩一遍，把卡住或怪怪的地方記下來再修。', testMethod: '作品玩起來比之前順。', teacherNote: '可對照各課的「常見錯誤」幫忙找問題。' },
    { id: 'l12-t3', title: '任務 3：加入新功能或新設計', goal: '至少加入一個新東西。', concepts: ['創意改造'], studentHint: '參考下面的升級方向，挑一個來加。', testMethod: '作品多了一個新功能或新樣子。', teacherNote: '一次加一個，加完先測試。' },
    { id: 'l12-t4', title: '任務 4：找同學試玩', goal: '請同學玩玩你的作品。', concepts: ['測試與修正'], studentHint: '看同學玩的時候哪裡卡住，再小修一下。', testMethod: '同學能順利玩你的作品。', teacherNote: '互相試玩是很好的回饋與複習。' },
    { id: 'l12-t5', title: '任務 5：簡單分享', goal: '用幾句話介紹你的作品。', concepts: ['簡單發表'], studentHint: '說說：我升級了哪個作品、怎麼玩、加了什麼、最喜歡哪裡。', testMethod: '你能向別人介紹自己的作品。', teacherNote: '分享是彈性活動，鼓勵但不勉強每位學生上台。' },
  ],
  challenges: [
    { id: 'l12-c1', title: '接水果升級包', difficulty: '基礎', description: '換主題、加音效、加炸彈、加倒數或調速度。', concepts: ['創意改造', '變數'] },
    { id: 'l12-c2', title: '打地鼠升級包', difficulty: '基礎', description: '換角色、加倒數、加扣分角色或不同分數。', concepts: ['創意改造', '條件判斷'] },
    { id: 'l12-c3', title: '迷宮升級包', difficulty: '基礎', description: '重新設計迷宮、加計時、加寶物或加音效。', concepts: ['關卡設計', '創意改造'] },
  ],
  faqs: [
    { question: '不知道要升級什麼？', answer: '看看上面的「升級包」挑一個，或把你覺得最好玩的地方加強。' },
    { question: '改完反而壞掉了？', answer: '一次只改一個地方，改完立刻測試；真的卡住可以先還原再試別的。' },
  ],
  teacherNotes: [
    '第 12 堂是「綜合複習與作品升級」，不是個人小專題或期末專題發表，保持彈性。',
    '若班級整體進度較慢，本堂可改為補進度與作品修正。',
    '分享 / 成果展示是彈性活動，依學生狀況進行，不強迫每人上台。',
  ],
}

/** 全站課程清單，依 order（堂數）排序顯示。 */
export const lessons: Lesson[] = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12]

/** 課程階段顯示順序，用於課程總覽分組。 */
export const stages: Stage[] = ['Scratch 基礎', '接水果遊戲', '打地鼠遊戲', '迷宮挑戰', '綜合整理']

/** 依 id 取得單一課程。 */
export function getLesson(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id)
}
