import type { Lesson } from '../types'

// 所有課程資料集中在這裡。
// 新增課程：複製一個 Lesson 物件、改 id 與內容、加進 lessons 陣列即可。
// 替換 Scratch 範例：修改該課程的 scratchProjectId 與 scratchProjectUrl。

const catchFruit: Lesson = {
  id: 'catch-fruit',
  order: 1,
  title: '接水果遊戲',
  subtitle: '用方向鍵控制籃子，接住從天上掉下來的水果，看看 30 秒內可以得到幾分！',
  description:
    '玩家控制籃子左右移動，水果從上方隨機掉下來，接到水果就加分，時間到遊戲結束。這是最適合入門的第一個小遊戲，涵蓋了 Scratch 最核心的程式概念。',
  targetGrades: '國小三年級以上（中、高年級皆可）',
  difficulty: '入門',
  estimatedTime: '約 80～120 分鐘（可分兩節課）',
  concepts: ['事件', '迴圈', '隨機數', '變數', '碰撞偵測', '條件判斷', 'x 座標', 'y 座標'],
  // 尚未設定範例專案。日後把下面兩個值換成真正的 Scratch 專案即可。
  scratchProjectId: '',
  scratchProjectUrl: '',
  status: 'full',
  accent: 'from-rose-400 to-orange-400',
  emoji: '🍎',
  goals: [
    '我會讓角色用方向鍵移動',
    '我會讓水果從上方掉下來',
    '我會使用隨機位置',
    '我會建立分數變數',
    '我會用「如果碰到」來判斷是否得分',
    '我會加入倒數計時與遊戲結束',
  ],
  tasks: [
    {
      id: 'task-1',
      title: '任務 1：讓籃子左右移動',
      goal: '讓玩家可以用左右鍵控制籃子。',
      concepts: ['事件', '鍵盤偵測', 'x 座標'],
      studentHint: '如果按下右鍵，就讓 x 增加；如果按下左鍵，就讓 x 減少。',
      testMethod: '按下綠旗後，左右鍵可以控制籃子移動。',
      teacherNote: '這裡可以讓學生理解 x 座標代表左右位置。',
    },
    {
      id: 'task-2',
      title: '任務 2：讓水果從上面掉下來',
      goal: '讓水果從舞台上方往下掉。',
      concepts: ['迴圈', 'y 座標'],
      studentHint: '把水果放到上方，然後重複讓 y 座標減少。',
      testMethod: '按下綠旗後，水果會一直往下掉。',
      teacherNote: '這裡可以說明 y 座標越小，角色越往下。',
    },
    {
      id: 'task-3',
      title: '任務 3：讓水果隨機出現',
      goal: '讓水果每次從不同的 x 位置掉下來。',
      concepts: ['隨機數', '座標'],
      studentHint: '當水果掉到底部時，讓它回到上方，並把 x 設成隨機數。',
      testMethod: '水果每次重新出現的位置都不一樣。',
      teacherNote: '這裡可以讓學生理解隨機數讓遊戲更有變化。',
    },
    {
      id: 'task-4',
      title: '任務 4：接到水果加分',
      goal: '讓玩家接到水果時，分數加 1。',
      concepts: ['變數', '碰撞偵測', '條件判斷'],
      studentHint: '建立一個叫做「分數」的變數，如果水果碰到籃子，就讓分數改變 1。',
      testMethod: '籃子碰到水果後，分數會增加。',
      teacherNote: '這裡是遊戲規則的核心，可以強調「如果……就……」的邏輯。',
    },
    {
      id: 'task-5',
      title: '任務 5：加入倒數計時',
      goal: '讓遊戲有 30 秒時間限制。',
      concepts: ['變數', '迴圈', '等待'],
      studentHint: '建立一個叫做「時間」的變數，從 30 開始，每 1 秒減少 1。',
      testMethod: '按下綠旗後，時間會從 30 慢慢倒數到 0。',
      teacherNote: '這裡可以說明變數不只可以記錄分數，也可以記錄時間。',
    },
    {
      id: 'task-6',
      title: '任務 6：加入遊戲結束畫面',
      goal: '時間到時停止遊戲，顯示遊戲結束。',
      concepts: ['條件判斷', '廣播', '遊戲狀態'],
      studentHint: '當時間等於 0 時，可以廣播「遊戲結束」，讓角色停止動作或顯示結束文字。',
      testMethod: '時間到 0 後，畫面會出現遊戲結束提示。',
      teacherNote: '這裡可以讓學生理解不同角色可以透過廣播互相通知。',
    },
    {
      id: 'task-7',
      title: '任務 7：自由改造',
      goal: '把遊戲變成自己的風格。',
      concepts: ['創意設計', '遊戲規則調整'],
      studentHint: '你可以換角色、換背景、換水果、加音效，或調整掉落速度。',
      testMethod: '完成後請請同學試玩你的遊戲。',
      teacherNote: '這一段是成果感最強的地方，可以鼓勵學生說明自己的設計。',
    },
  ],
  challenges: [
    {
      id: 'ch-1',
      title: '加入炸彈',
      difficulty: '基礎',
      description: '多做一個炸彈角色，接到炸彈時分數扣分。',
      concepts: ['碰撞偵測', '變數', '條件判斷'],
    },
    {
      id: 'ch-2',
      title: '加入生命值',
      difficulty: '基礎',
      description: '水果掉到地上沒接到就扣一點生命，生命歸零也算結束。',
      concepts: ['變數', '條件判斷'],
    },
    {
      id: 'ch-3',
      title: '越來越難',
      difficulty: '進階',
      description: '分數越高，水果掉落的速度就越快，挑戰玩家的反應。',
      concepts: ['變數', '迴圈', 'y 座標'],
    },
    {
      id: 'ch-4',
      title: '加入音效',
      difficulty: '入門',
      description: '接到水果時播放音效，讓遊戲更有回饋感。',
      concepts: ['事件', '碰撞偵測'],
    },
    {
      id: 'ch-5',
      title: '加入結束畫面',
      difficulty: '基礎',
      description: '時間到後切換背景或顯示「總分」，做出完整的結束畫面。',
      concepts: ['廣播', '變數', '遊戲狀態'],
    },
  ],
  faqs: [
    {
      question: '水果不會動？',
      answer: '可能是沒有放進「重複執行」，或是 y 改變的數值太小看不出來。把改變 y 的積木放進重複執行，並把數值調大一點。',
    },
    {
      question: '分數沒有增加？',
      answer: '可能是碰撞判斷放錯角色，或還沒有建立「分數」變數。確認偵測「碰到籃子」的積木放在水果角色上，而且分數變數已經建立。',
    },
    {
      question: '籃子不能移動？',
      answer: '可能是沒有用「重複執行」一直偵測按鍵，或是 x 改變的數值設成 0。把偵測按鍵放進重複執行，並確認改變 x 的數值不是 0。',
    },
    {
      question: '水果掉下去後不回來？',
      answer: '可能是沒有設定「當 y 座標小於某個數值時，回到上方」。加入一個條件：當水果掉到底部，就把 y 設回上面、x 設成隨機數。',
    },
    {
      question: '時間倒數太快？',
      answer: '可能是忘記加入「等待 1 秒」。每次把時間減 1 之前，要先等待 1 秒，倒數才會剛好是一秒一格。',
    },
  ],
  teacherNotes: [
    '建議分兩節課：第一節完成任務 1～4（會動、會掉、會加分），第二節完成任務 5～7（計時、結束、改造）。',
    '每完成一個任務就請學生按綠旗測試一次，養成「寫一點、測一點」的習慣。',
    '任務 4 是遊戲邏輯核心，可以在白板上畫出「如果碰到籃子 → 分數加 1」的流程，再讓學生對照積木。',
    '低年級可以由老師先示範任務 1～3，學生專注在任務 4 之後；高年級可以直接挑戰完整流程與挑戰任務。',
  ],
}

const whackMole: Lesson = {
  id: 'whack-mole',
  order: 2,
  title: '打地鼠遊戲',
  subtitle: '地鼠隨機冒出來，眼明手快點下去就得分！',
  description:
    '地鼠會隨機出現在不同位置，玩家用滑鼠點擊地鼠就加分，時間到遊戲結束。透過點擊事件與造型切換，讓學生學會「角色被點到」的互動方式。',
  targetGrades: '國小三年級以上',
  difficulty: '基礎',
  estimatedTime: '約 60～90 分鐘',
  concepts: ['角色點擊事件', '隨機數', '變數', '造型切換', '迴圈'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  status: 'intro',
  accent: 'from-amber-400 to-yellow-500',
  emoji: '🔨',
  goals: [
    '我會用「當角色被點擊」做出互動',
    '我會讓地鼠隨機出現在不同位置',
    '我會用造型切換做出冒出來、躲回去',
    '我會用分數變數記分並加上倒數計時',
  ],
  tasks: [],
  challenges: [
    {
      id: 'wm-ch-1',
      title: '地鼠越來越快',
      difficulty: '進階',
      description: '隨著分數提高，地鼠出現的間隔變短，挑戰反應速度。',
      concepts: ['變數', '迴圈'],
    },
    {
      id: 'wm-ch-2',
      title: '加入壞地鼠',
      difficulty: '基礎',
      description: '做一隻不能打的地鼠，打到會扣分。',
      concepts: ['條件判斷', '變數'],
    },
  ],
  faqs: [
    {
      question: '點地鼠沒有反應？',
      answer: '確認用的是「當這個角色被點擊」事件，而且地鼠在被點到時是顯示狀態。',
    },
  ],
  teacherNotes: [
    '本課重點在「點擊事件」與「造型切換」，可以和接水果的「碰撞偵測」做對比。',
    '可先用接水果遊戲的分數與計時概念當作複習，再帶入新的點擊互動。',
  ],
}

const mazeEscape: Lesson = {
  id: 'maze-escape',
  order: 3,
  title: '迷宮逃脫遊戲',
  subtitle: '用方向鍵走出迷宮，碰到牆壁就回到起點，抵達終點就過關！',
  description:
    '玩家用方向鍵控制角色走迷宮，碰到牆壁的顏色就回到起點，碰到終點顏色就過關。透過「碰到顏色」偵測與廣播，讓學生學會關卡設計與切換。',
  targetGrades: '國小四年級以上',
  difficulty: '進階',
  estimatedTime: '約 90～120 分鐘',
  concepts: ['鍵盤事件', '座標移動', '碰到顏色偵測', '條件判斷', '關卡設計', '廣播'],
  scratchProjectId: '',
  scratchProjectUrl: '',
  status: 'intro',
  accent: 'from-emerald-400 to-teal-500',
  emoji: '🧩',
  goals: [
    '我會用方向鍵控制角色移動',
    '我會用「碰到顏色」偵測牆壁與終點',
    '我會在碰到牆壁時回到起點',
    '我會用廣播切換到下一關',
  ],
  tasks: [],
  challenges: [
    {
      id: 'mz-ch-1',
      title: '多關卡迷宮',
      difficulty: '進階',
      description: '用廣播切換背景，做出第二關、第三關，難度逐漸提高。',
      concepts: ['廣播', '關卡設計'],
    },
    {
      id: 'mz-ch-2',
      title: '限時逃脫',
      difficulty: '進階',
      description: '加入倒數計時，時間內沒走到終點就失敗。',
      concepts: ['變數', '條件判斷'],
    },
  ],
  faqs: [
    {
      question: '角色穿過牆壁？',
      answer: '可能是「碰到顏色」選到的顏色不對。用顏色滴管重新吸取牆壁的顏色，並確認偵測放在重複執行裡。',
    },
  ],
  teacherNotes: [
    '本課重點在「碰到顏色」偵測與「廣播切換關卡」，難度較高，建議安排在第 1、2 課之後。',
    '迷宮的牆壁要用單一純色，學生才容易用顏色偵測；可以先給好背景圖，讓學生專注在程式邏輯。',
  ],
}

/** 全站課程清單，依 order 排序顯示。 */
export const lessons: Lesson[] = [catchFruit, whackMole, mazeEscape]

/** 依 id 取得單一課程。 */
export function getLesson(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id)
}
