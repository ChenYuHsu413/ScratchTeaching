import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { Lesson } from '../types'
import ConceptTag from './ConceptTag'
import DifficultyBadge from './DifficultyBadge'

interface LessonCardProps {
  lesson: Lesson
}

/** 課程卡：顯示課程基本資訊，點「進入課程」前往詳細頁。 */
export default function LessonCard({ lesson }: LessonCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* 封面 */}
      <div className={`relative bg-gradient-to-br ${lesson.accent} p-6`}>
        <span className="absolute right-4 top-3 rounded-full bg-white/80 px-2 py-0.5 text-xs font-bold text-slate-600">
          第 {lesson.order} 堂
        </span>
        <div className="text-5xl">{lesson.emoji}</div>
        <h3 className="mt-2 text-xl font-extrabold text-white drop-shadow">{lesson.title}</h3>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">{lesson.subtitle}</p>

        <div className="mb-4 rounded-xl bg-orange-50 px-3 py-2">
          <p className="text-xs font-semibold text-orange-500">🏆 作品成果</p>
          <p className="mt-0.5 text-sm font-bold text-orange-800">{lesson.outcome}</p>
        </div>

        <dl className="mb-4 space-y-2 text-sm">
          <Row label="難度">
            <DifficultyBadge difficulty={lesson.difficulty} />
          </Row>
          <Row label="時間">{lesson.estimatedTime}</Row>
        </dl>

        <div className="mb-5">
          <p className="mb-1.5 text-xs font-semibold text-slate-400">核心概念</p>
          <div className="flex flex-wrap gap-1.5">
            {lesson.concepts.slice(0, 6).map((c) => (
              <ConceptTag key={c} concept={c} />
            ))}
          </div>
        </div>

        <Link
          to={`/lessons/${lesson.id}`}
          className="mt-auto block rounded-xl bg-slate-800 py-3 text-center font-bold text-white transition hover:bg-slate-700"
        >
          進入課程 →
        </Link>
      </div>
    </div>
  )
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <dt className="w-16 shrink-0 font-semibold text-slate-400">{label}</dt>
      <dd className="text-slate-700">{children}</dd>
    </div>
  )
}
