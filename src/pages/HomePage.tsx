import { Link } from 'react-router-dom'
import { lessons, stages } from '../data/lessons'

const quickFacts = [
  { icon: '🧒', label: '適合對象', value: '國小三、四年級' },
  { icon: '✏️', label: '先備能力', value: '零基礎可參加' },
  { icon: '📅', label: '上課頻率', value: '每週 1 堂・每堂 3 小時' },
  { icon: '⏳', label: '課程長度', value: '3 個月・共 12 堂' },
]

const features = [
  { icon: '👩‍🏫', title: '小班制教學', text: '人數不多，老師看得到每個孩子的進度，不怕跟不上。' },
  { icon: '🏆', title: '每堂完成階段作品', text: '每一堂課都有明確任務，做出看得見、玩得到的作品。' },
  { icon: '🔤', title: '不用背程式碼', text: '用拖拉積木創作，把心力放在「想法」和「邏輯」上。' },
  { icon: '🎮', title: '從遊戲中學邏輯', text: '事件、迴圈、條件、變數、座標都藏在好玩的小遊戲裡。' },
  { icon: '🗂️', title: '基礎任務 + 小挑戰', text: '基礎任務人人完成，小挑戰選做，學得快的也有得發揮。' },
  { icon: '🎚️', title: '依學生狀況彈性調整', text: '現場教學為主，依孩子實際反應調整難度與節奏。' },
  { icon: '💡', title: '培養問題解決力', text: '遇到 bug 自己找原因，從除錯中培養解決力與創造力。' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 via-yellow-50 to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700">
            國小三、四年級 · Scratch 程式先修班
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-slate-800 sm:text-5xl">
            小小遊戲設計師：Scratch 程式先修班
          </h1>
          <p className="mt-3 text-xl font-bold text-orange-600 sm:text-2xl">
            零基礎也能做出自己的小遊戲！
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            專為國小三、四年級設計，透過 Scratch 積木式程式設計，
            完成角色動畫、互動故事、接水果、打地鼠、迷宮挑戰等作品。
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/lessons"
              className="rounded-xl bg-orange-500 px-7 py-3.5 text-lg font-bold text-white shadow-sm transition hover:bg-orange-600"
            >
              看 12 堂課表 →
            </Link>
            <Link
              to="/concepts"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-lg font-bold text-slate-700 transition hover:bg-slate-50"
            >
              先看 Scratch 是什麼
            </Link>
          </div>

          {/* 快速資訊 */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {quickFacts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-2xl">{f.icon}</div>
                <p className="mt-1 text-xs font-semibold text-slate-400">{f.label}</p>
                <p className="mt-0.5 text-sm font-bold text-slate-700">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 課程特色 */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-extrabold text-slate-800">課程特色</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-500">
          這不是只玩遊戲，而是讓孩子從玩遊戲，進一步學會設計遊戲。
        </p>
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

      {/* 給家長的話 */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50 px-6 py-8 text-center">
          <span className="text-3xl">👪</span>
          <h2 className="mt-2 text-xl font-extrabold text-slate-800">給家長的話</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            本課程以<span className="font-bold">現場教學與實作</span>為主，
            不預設孩子需要回家完成作業。每堂課都有明確任務與作品成果，
            讓孩子一步一步建立程式邏輯與創作信心。
          </p>
        </div>
      </section>

      {/* Scratch 是什麼 */}
      <section className="bg-white pb-14">
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

      {/* 12 堂課表 */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-800">12 堂課表</h2>
            <p className="mt-1 text-sm text-slate-500">難度由淺到深，每堂都有看得見的作品成果。</p>
          </div>
          <Link to="/lessons" className="text-sm font-semibold text-orange-600 hover:text-orange-700">
            看詳細課程卡 →
          </Link>
        </div>

        <div className="mt-8 space-y-6">
          {stages.map((stage) => {
            const stageLessons = lessons.filter((l) => l.stage === stage)
            return (
              <div key={stage}>
                <h3 className="mb-2 text-sm font-bold text-orange-600">{stage}</h3>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {stageLessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      to={`/lessons/${lesson.id}`}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-orange-300 hover:shadow-sm"
                    >
                      <span className="text-2xl">{lesson.emoji}</span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold text-slate-400">
                          第 {lesson.order} 堂
                        </span>
                        <span className="block truncate font-bold text-slate-800">{lesson.title}</span>
                        <span className="block truncate text-xs text-slate-500">
                          🏆 {lesson.outcome}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/lessons"
            className="inline-block rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            看看孩子會做出什麼 →
          </Link>
        </div>
      </section>
    </div>
  )
}
