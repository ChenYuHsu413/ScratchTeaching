import { categoryLabels, categoryStyles } from '../data/concepts'
import type { ConceptCategory } from '../types'

// Scratch 介面四大區塊
const uiParts = [
  { icon: '🧱', name: '積木區', desc: '左邊一格格的彩色積木，照分類擺放，這裡是你的零件箱。' },
  { icon: '📝', name: '程式區', desc: '中間的大空間，把積木拖過來拼在一起，就是在寫程式。' },
  { icon: '🎭', name: '舞台', desc: '右上角的畫面，遊戲和動畫都在這裡演出給大家看。' },
  { icon: '🐱', name: '角色區', desc: '右下角放著所有角色，每個角色都可以有自己的程式。' },
]

// 核心概念卡片，附帶顏色分類
const coreConcepts: { category: ConceptCategory; title: string; text: string; example: string }[] = [
  {
    category: 'event',
    title: '事件',
    text: '事件就是「什麼時候開始做事」。例如按下綠旗、按下按鍵、角色被點到。',
    example: '當綠旗被點擊 → 開始遊戲',
  },
  {
    category: 'control',
    title: '順序執行',
    text: '程式會「由上往下」一塊一塊執行。上面的積木先做，下面的後做。',
    example: '先說話 → 再移動 → 再換造型',
  },
  {
    category: 'control',
    title: '迴圈',
    text: '迴圈就是「一直重複做」。不用一直複製積木，放進重複執行就會一遍又一遍。',
    example: '重複執行 → 水果一直往下掉',
  },
  {
    category: 'variable',
    title: '隨機',
    text: '隨機就是「每次都不一樣」。用它讓水果或地鼠每次出現在不同位置。',
    example: 'x 設成 隨機取 -200 到 200',
  },
  {
    category: 'condition',
    title: '條件判斷',
    text: '條件就是「如果……就……」。電腦會先看看條件成不成立，再決定要不要做。',
    example: '如果 碰到籃子 → 分數加 1',
  },
  {
    category: 'variable',
    title: '變數',
    text: '變數就是一個「會記住數字的小盒子」。可以拿來記分數、記時間、記生命值。',
    example: '把「分數」設為 0，接到水果就改變 1',
  },
  {
    category: 'motion',
    title: '座標 x / y',
    text: 'x 是左右位置（越大越右邊），y 是上下位置（越大越上面）。舞台正中央是 (0, 0)。',
    example: '把 x 改變 10 → 角色往右移動',
  },
  {
    category: 'sensing',
    title: '碰撞偵測',
    text: '判斷角色有沒有「碰到另一個角色」。接水果、打地鼠都用得到。',
    example: '如果 碰到 籃子 → 分數加 1',
  },
  {
    category: 'sensing',
    title: '顏色偵測',
    text: '判斷角色有沒有「碰到某個顏色」，例如迷宮的牆壁顏色。',
    example: '如果 碰到 牆壁顏色 → 回到起點',
  },
]

export default function ConceptsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-800">Scratch 基礎概念</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          認識 Scratch 的畫面，還有幾個最重要的程式概念。用顏色記住它們，上課就不會迷路！
        </p>
      </div>

      {/* 介面說明 */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-extrabold text-slate-800">🖥️ Scratch 的畫面長這樣</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {uiParts.map((part) => (
            <div key={part.name} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-4xl">{part.icon}</div>
              <h3 className="mt-2 font-bold text-slate-800">{part.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{part.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 顏色圖例 */}
      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
        <p className="mb-3 font-bold text-slate-700">🌈 概念顏色對照表</p>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(categoryLabels) as ConceptCategory[])
            .filter((c) => c !== 'misc')
            .map((c) => (
              <span
                key={c}
                className={`rounded-full border px-3 py-1 text-sm font-semibold ${categoryStyles[c]}`}
              >
                {categoryLabels[c]}
              </span>
            ))}
        </div>
      </section>

      {/* 核心概念 */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-extrabold text-slate-800">🧠 最重要的幾個概念</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {coreConcepts.map((c) => (
            <div
              key={c.title}
              className={`rounded-2xl border p-5 ${categoryStyles[c.category]}`}
            >
              <h3 className="text-lg font-extrabold">{c.title}</h3>
              <p className="mt-2 leading-relaxed">{c.text}</p>
              <div className="mt-3 rounded-lg bg-white/70 px-3 py-2 font-mono text-sm">
                {c.example}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 每個角色都有自己的程式 */}
      <section className="mt-10 rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 p-6">
        <h2 className="text-xl font-extrabold text-blue-800">🐾 每個角色都有自己的程式</h2>
        <p className="mt-2 leading-relaxed text-blue-900">
          在 Scratch 裡，每一個角色都像一個小演員，各自有自己的劇本（程式）。
          籃子有籃子的程式、水果有水果的程式。它們可以用「廣播」互相喊話，
          例如水果喊一聲「遊戲結束」，所有角色都聽得到，一起停下來。
        </p>
      </section>
    </div>
  )
}
