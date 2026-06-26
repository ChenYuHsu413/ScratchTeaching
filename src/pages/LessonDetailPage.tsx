import { useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLesson } from '../data/lessons'
import ScratchEmbed from '../components/ScratchEmbed'
import TaskCard from '../components/TaskCard'
import FAQItem from '../components/FAQItem'
import ConceptTag from '../components/ConceptTag'
import DifficultyBadge from '../components/DifficultyBadge'
import NotFoundPage from './NotFoundPage'

export default function LessonDetailPage() {
  const { lessonId } = useParams()
  const lesson = lessonId ? getLesson(lessonId) : undefined

  // 任務完成狀態：記住已完成的任務 id。
  const [doneTasks, setDoneTasks] = useState<Set<string>>(new Set())

  if (!lesson) return <NotFoundPage />

  const toggleTask = (id: string) => {
    setDoneTasks((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const hasTasks = lesson.tasks.length > 0
  const doneCount = lesson.tasks.filter((t) => doneTasks.has(t.id)).length
  const progress = hasTasks ? Math.round((doneCount / lesson.tasks.length) * 100) : 0

  // Scratch 連結：沒有 projectId 就用 scratchProjectUrl，兩者都沒有就停用按鈕。
  const projectUrl =
    lesson.scratchProjectUrl ||
    (lesson.scratchProjectId ? `https://scratch.mit.edu/projects/${lesson.scratchProjectId}` : '')
  const remixUrl = projectUrl ? `${projectUrl.replace(/\/$/, '')}/remix` : ''

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {/* 麵包屑 */}
      <nav className="mb-4 text-sm text-slate-500">
        <Link to="/lessons" className="hover:text-orange-600">
          課程總覽
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{lesson.title}</span>
      </nav>

      {/* 標題區 */}
      <header className={`rounded-2xl bg-gradient-to-br ${lesson.accent} p-6 text-white`}>
        <div className="flex items-center gap-3">
          <span className="text-5xl">{lesson.emoji}</span>
          <div>
            <p className="text-sm font-bold text-white/90">第 {lesson.order} 課</p>
            <h1 className="text-3xl font-extrabold drop-shadow">{lesson.title}</h1>
          </div>
        </div>
        <p className="mt-3 text-white/95">{lesson.subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-white/80 px-3 py-1 font-semibold text-slate-700">
            🎓 {lesson.targetGrades}
          </span>
          <span className="rounded-full bg-white/80 px-3 py-1 font-semibold text-slate-700">
            ⏱️ {lesson.estimatedTime}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1">
            <DifficultyBadge difficulty={lesson.difficulty} />
          </span>
        </div>
      </header>

      {/* 成品說明 */}
      <Section title="🎬 成品說明">
        <p className="leading-relaxed text-slate-700">{lesson.description}</p>
      </Section>

      {/* Scratch 範例 */}
      <Section title="▶️ 範例作品試玩">
        <ScratchEmbed projectId={lesson.scratchProjectId} title={`${lesson.title} 範例`} />
        <div className="mt-4 flex flex-wrap gap-3">
          <LinkButton href={projectUrl} disabled={!projectUrl} variant="primary">
            🔗 打開 Scratch 專案
          </LinkButton>
          <LinkButton href={remixUrl} disabled={!remixUrl} variant="outline">
            ✏️ Remix / 開始改編
          </LinkButton>
        </div>
        {!projectUrl && (
          <p className="mt-2 text-sm text-slate-500">
            （尚未設定 Scratch 專案連結，填入 projectId 後按鈕就會啟用。）
          </p>
        )}
      </Section>

      {/* 學習目標 */}
      <Section title="🎯 今日學習目標">
        <ul className="space-y-2">
          {lesson.goals.map((goal) => (
            <li key={goal} className="flex items-start gap-2 text-slate-700">
              <span className="mt-0.5 text-green-500">✔</span>
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 程式概念 */}
      <Section title="🧩 這一課的程式概念">
        <div className="flex flex-wrap gap-2">
          {lesson.concepts.map((c) => (
            <ConceptTag key={c} concept={c} />
          ))}
        </div>
        <p className="mt-3 text-sm text-slate-500">
          每種顏色代表一類概念。想更了解這些概念，可以看{' '}
          <Link to="/concepts" className="font-semibold text-orange-600 hover:underline">
            Scratch 基礎概念頁
          </Link>
          。
        </p>
      </Section>

      {/* 任務卡（完整課程才有） */}
      {hasTasks ? (
        <Section title="🗂️ 任務卡流程">
          {/* 進度條 */}
          <div className="mb-5 rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-600">
              <span>完成進度</span>
              <span>
                {doneCount} / {lesson.tasks.length} 個任務
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-green-400 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            {lesson.tasks.map((task, i) => (
              <TaskCard
                key={task.id}
                task={task}
                index={i}
                done={doneTasks.has(task.id)}
                onToggleDone={() => toggleTask(task.id)}
              />
            ))}
          </div>
        </Section>
      ) : (
        <Section title="🛠️ 基礎功能">
          <p className="mb-3 text-slate-600">
            完成這個遊戲，你需要做出這些功能（完整任務卡製作中，可先依下列目標自由挑戰）：
          </p>
          <ul className="space-y-2">
            {lesson.goals.map((goal) => (
              <li key={goal} className="flex items-start gap-2 text-slate-700">
                <span className="mt-0.5 text-orange-400">▸</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* 挑戰任務 */}
      {lesson.challenges.length > 0 && (
        <Section title="🚀 挑戰任務（進階）">
          <div className="grid gap-3 sm:grid-cols-2">
            {lesson.challenges.map((ch) => (
              <div key={ch.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-800">{ch.title}</h4>
                  <DifficultyBadge difficulty={ch.difficulty} />
                </div>
                <p className="text-sm text-slate-600">{ch.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {ch.concepts.map((c) => (
                    <ConceptTag key={c} concept={c} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* 常見錯誤 */}
      {lesson.faqs.length > 0 && (
        <Section title="🐞 常見錯誤 Q&A">
          <div className="space-y-2">
            {lesson.faqs.map((faq) => (
              <FAQItem key={faq.question} faq={faq} />
            ))}
          </div>
        </Section>
      )}

      {/* 教師提示 */}
      {lesson.teacherNotes.length > 0 && (
        <Section title="👩‍🏫 教師提示">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <ul className="space-y-2">
              {lesson.teacherNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-2 text-amber-900">
                  <span className="mt-0.5">📌</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-xl font-extrabold text-slate-800">{title}</h2>
      {children}
    </section>
  )
}

function LinkButton({
  href,
  disabled,
  variant,
  children,
}: {
  href: string
  disabled?: boolean
  variant: 'primary' | 'outline'
  children: ReactNode
}) {
  const base = 'rounded-xl px-5 py-2.5 font-bold transition'
  const styles =
    variant === 'primary'
      ? 'bg-orange-500 text-white hover:bg-orange-600'
      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'

  if (disabled) {
    return (
      <span className={`${base} cursor-not-allowed bg-slate-100 text-slate-400`} aria-disabled>
        {children}
      </span>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  )
}
