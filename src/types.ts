// 課程資料的型別定義。
// 未來新增課程或欄位時，先在這裡擴充型別，再到 data/lessons.ts 補資料。

/** 難度等級，用於課程卡與挑戰任務的標籤。 */
export type Difficulty = '入門' | '基礎' | '進階'

/**
 * 程式概念分類。
 * 每一個分類對應一種顏色（見 data/concepts.ts），方便用顏色區分概念。
 */
export type ConceptCategory =
  | 'event' // 事件：黃色
  | 'motion' // 動作 / 座標：藍色
  | 'control' // 控制 / 迴圈：橘色
  | 'condition' // 條件判斷：紫色
  | 'variable' // 變數：紅色
  | 'sensing' // 偵測：綠色
  | 'misc' // 其他：灰色

/** 單一任務卡。 */
export interface Task {
  id: string
  title: string
  goal: string
  concepts: string[]
  studentHint: string
  testMethod: string
  teacherNote: string
}

/** 挑戰任務（進階延伸）。 */
export interface Challenge {
  id: string
  title: string
  difficulty: Difficulty
  description: string
  concepts: string[]
}

/** 常見問題 / 常見錯誤。 */
export interface FAQ {
  question: string
  answer: string
}

/**
 * 課程資料。
 * status 用來區分「完整課程」與「只有介紹頁」的課程：
 * - 'full'：有完整任務卡（例如第 1 課）
 * - 'intro'：只有課程介紹（例如第 2、3 課）
 */
export interface Lesson {
  id: string
  order: number
  title: string
  subtitle: string
  description: string
  targetGrades: string
  difficulty: Difficulty
  estimatedTime: string
  concepts: string[]
  /** Scratch 範例專案 ID，留空字串代表尚未設定。 */
  scratchProjectId: string
  /** Scratch 專案完整連結，留空字串代表尚未設定。 */
  scratchProjectUrl: string
  status: 'full' | 'intro'
  /** 課程卡封面用的代表顏色（Tailwind 漸層 class）。 */
  accent: string
  emoji: string
  goals: string[]
  tasks: Task[]
  challenges: Challenge[]
  faqs: FAQ[]
  teacherNotes: string[]
}
