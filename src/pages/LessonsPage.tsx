import { lessons } from '../data/lessons'
import LessonCard from '../components/LessonCard'

// 未來進階班的方向（本先修課不實作，僅作為展望）。
const advancedTopics = [
  '分身 clone',
  '自訂積木',
  '複雜廣播流程',
  '多關卡系統',
  '敵人 AI',
  '物理效果',
]

export default function LessonsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-800">課程總覽</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          這是一門 Scratch 程式先修課，難度由淺到深。
          建議從第 1 課「會動的小角色」開始，再依序完成接水果、打地鼠與迷宮挑戰。
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>

      {/* 未來進階班 */}
      <section className="mt-14 rounded-2xl border-2 border-dashed border-purple-300 bg-purple-50 p-6 text-center">
        <span className="text-3xl">🚀</span>
        <h2 className="mt-2 text-xl font-extrabold text-purple-800">未來進階班（先修課暫不包含）</h2>
        <p className="mx-auto mt-2 max-w-2xl text-purple-900">
          等孩子在學校正式深入學 Scratch、把這四個小遊戲玩熟之後，
          就可以挑戰更進階的內容：
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {advancedTopics.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-purple-700"
            >
              {t}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
