import { lessons } from '../data/lessons'
import LessonCard from '../components/LessonCard'

export default function LessonsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-800">課程總覽</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          每一課都是一個完整的小遊戲。建議從第 1 課「接水果遊戲」開始，
          再依序挑戰打地鼠與迷宮逃脫。
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  )
}
