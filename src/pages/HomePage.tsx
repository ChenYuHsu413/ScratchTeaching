import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons'
import LessonCard from '../components/LessonCard'

const features = [
  { icon: '🎮', title: '從玩遊戲開始', text: '每一課都是一個可以玩的小遊戲，邊玩邊學最有感。' },
  { icon: '🗂️', title: '任務卡引導', text: '把遊戲拆成一個個小任務，學生一步一步完成，不會卡關。' },
  { icon: '🌈', title: '概念用顏色分類', text: '事件、迴圈、變數、條件…每種概念都有自己的顏色，好記好懂。' },
  { icon: '🚀', title: '可自由改造', text: '完成基礎版後，還有挑戰任務，讓學生做出自己的版本。' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700">
            國小程式啟蒙 · 互動教學
          </span>
          <h1 className="mt-5 text-4xl font-extrabold text-slate-800 sm:text-5xl">
            Scratch 小小遊戲設計師
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            用一個個好玩的小遊戲，學會 Scratch 程式的第一步。
            <br className="hidden sm:block" />
            從接水果、打地鼠到迷宮逃脫，做中學、玩中懂。
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
            <span>👩‍🏫 適合老師上課投影</span>
            <span>🧒 適合學生自己看</span>
            <span>👪 適合招生成果展示</span>
          </div>
        </div>
      </section>

      {/* 課程特色 */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-extrabold text-slate-800">課程特色</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
          <h2 className="text-2xl font-extrabold text-slate-800">目前提供的小遊戲課程</h2>
          <Link to="/lessons" className="text-sm font-semibold text-orange-600 hover:text-orange-700">
            看全部 →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>
    </div>
  )
}
