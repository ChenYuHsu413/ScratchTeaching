import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons'
import LessonCard from '../components/LessonCard'

const features = [
  { icon: '👩‍🏫', title: '小班制教學', text: '人數不多，老師看得到每個孩子的進度，不怕跟不上。' },
  { icon: '🏆', title: '每堂完成一個作品', text: '不是只聽講，每一堂課都會做出一個可以玩、可以帶回家秀的小遊戲。' },
  { icon: '🔤', title: '不用背程式碼', text: '用拖拉積木的方式創作，把心力放在「想法」和「邏輯」上。' },
  { icon: '🎮', title: '從遊戲中學邏輯', text: '事件、迴圈、條件、變數、座標，都藏在好玩的小遊戲裡自然學會。' },
  { icon: '🗂️', title: '基礎任務 + 小挑戰', text: '一步步完成基礎任務，學得快的還有挑戰任務可以發揮。' },
  { icon: '💡', title: '培養解決問題的能力', text: '遇到 bug 自己找原因，從除錯中培養問題解決力與創造力。' },
]

const courseConcepts = [
  '事件', '順序執行', '迴圈', '條件判斷', '變數', '座標 x / y', '隨機數', '碰撞偵測',
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 via-yellow-50 to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700">
            國小三、四年級 · Scratch 程式先修課
          </span>
          <h1 className="mt-5 text-4xl font-extrabold text-slate-800 sm:text-5xl">
            小小遊戲設計師
          </h1>
          <p className="mt-3 text-xl font-bold text-orange-600 sm:text-2xl">
            零基礎也能做出自己的小遊戲！
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            專為國小三、四年級設計，透過接水果、打地鼠、迷宮挑戰等小遊戲，
            讓孩子用拖拉積木的方式，學會基礎程式邏輯。
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/lessons"
              className="rounded-xl bg-orange-500 px-7 py-3.5 text-lg font-bold text-white shadow-sm transition hover:bg-orange-600"
            >
              開始學習 →
            </Link>
            <Link
              to="/concepts"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-lg font-bold text-slate-700 transition hover:bg-slate-50"
            >
              先看 Scratch 是什麼
            </Link>
          </div>

          <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <span>🧒 適合對象：國小三、四年級</span>
            <span>✏️ 無程式基礎也可以參加</span>
          </div>
        </div>
      </section>

      {/* 課程特色 */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-extrabold text-slate-800">課程特色</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-500">
          這不是只玩遊戲，而是讓孩子從玩遊戲，進一步學會設計遊戲。
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <div className="text-4xl">{f.icon}</div>
              <h3 className="mt-3 font-bold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scratch 是什麼 */}
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-800">Scratch 是什麼？</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Scratch 是一個由 MIT 設計的免費程式工具。它不用打字寫程式，而是把一塊塊「積木」拼在一起，
              就能讓角色動起來、做出遊戲、動畫和故事。
            </p>
            <p className="mt-3 leading-relaxed text-slate-600">
              因為用拖拉積木的方式，小朋友可以把心力放在「想法」和「邏輯」上，
              很適合當作學習程式的第一步。
            </p>
            <Link
              to="/concepts"
              className="mt-5 inline-block font-semibold text-orange-600 hover:text-orange-700"
            >
              認識 Scratch 基礎概念 →
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <div className="grid grid-cols-2 gap-3 text-center text-sm font-semibold">
              <div className="rounded-xl bg-yellow-100 py-4 text-yellow-800">🟡 事件</div>
              <div className="rounded-xl bg-blue-100 py-4 text-blue-800">🔵 動作 / 座標</div>
              <div className="rounded-xl bg-orange-100 py-4 text-orange-800">🟠 控制 / 迴圈</div>
              <div className="rounded-xl bg-purple-100 py-4 text-purple-800">🟣 條件判斷</div>
              <div className="rounded-xl bg-red-100 py-4 text-red-700">🔴 變數</div>
              <div className="rounded-xl bg-green-100 py-4 text-green-800">🟢 偵測</div>
            </div>
          </div>
        </div>
      </section>

      {/* 課程列表 */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-800">目前提供的小遊戲課程</h2>
            <p className="mt-1 text-sm text-slate-500">難度由淺到深，建議從第 1 課開始。</p>
          </div>
          <Link to="/lessons" className="text-sm font-semibold text-orange-600 hover:text-orange-700">
            看全部 →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {courseConcepts.map((c) => (
            <span
              key={c}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* 給家長的話 */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="text-3xl">👪</span>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-800">給家長的話</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            孩子不是只玩遊戲，而是開始學會「設計遊戲」。
            在完成接水果、打地鼠、迷宮挑戰的過程中，孩子會自然學會事件、迴圈、條件判斷、變數、座標與互動控制，
            同時培養問題解決力與創造力。每一堂課都有看得見的作品，孩子帶得走、您也看得到。
          </p>
          <Link
            to="/lessons"
            className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            看看孩子會做出什麼 →
          </Link>
        </div>
      </section>
    </div>
  )
}
