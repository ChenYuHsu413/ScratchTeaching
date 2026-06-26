import { useState, type ReactNode } from 'react'
import type { Task } from '../types'
import ConceptTag from './ConceptTag'

interface TaskCardProps {
  task: Task
  index: number
  done: boolean
  onToggleDone: () => void
}

/**
 * 任務卡：可展開 / 收合，可勾選完成。
 * 完成狀態由父層管理（方便顯示整體進度）。
 */
export default function TaskCard({ task, index, done, onToggleDone }: TaskCardProps) {
  // 第一張任務卡預設展開，其餘收合，避免頁面一開始太長。
  const [open, setOpen] = useState(index === 0)

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition ${
        done ? 'border-green-300' : 'border-slate-200'
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        {/* 完成勾選 */}
        <label className="flex cursor-pointer items-center" title="標記完成">
          <input
            type="checkbox"
            checked={done}
            onChange={onToggleDone}
            className="h-5 w-5 cursor-pointer rounded border-slate-300 text-green-500 focus:ring-green-400"
          />
        </label>

        {/* 標題（點擊展開 / 收合） */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-1 items-center justify-between gap-3 text-left"
          aria-expanded={open}
        >
          <span
            className={`font-bold ${done ? 'text-green-700 line-through decoration-green-400' : 'text-slate-800'}`}
          >
            {task.title}
          </span>
          <span className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}>
            ▾
          </span>
        </button>
      </div>

      {open && (
        <div className="space-y-4 border-t border-slate-100 px-4 py-4">
          <Field label="🎯 任務目標">{task.goal}</Field>

          <div>
            <p className="mb-1.5 text-sm font-semibold text-slate-500">🧩 用到的積木概念</p>
            <div className="flex flex-wrap gap-1.5">
              {task.concepts.map((c) => (
                <ConceptTag key={c} concept={c} />
              ))}
            </div>
          </div>

          <Field label="💡 給你的小提示" tone="blue">
            {task.studentHint}
          </Field>
          <Field label="✅ 完成後這樣測試" tone="green">
            {task.testMethod}
          </Field>
          <Field label="👩‍🏫 老師補充" tone="slate">
            {task.teacherNote}
          </Field>
        </div>
      )}
    </div>
  )
}

const toneStyles: Record<string, string> = {
  plain: 'bg-slate-50 text-slate-700',
  blue: 'bg-blue-50 text-blue-800',
  green: 'bg-green-50 text-green-800',
  slate: 'bg-slate-100 text-slate-600',
}

function Field({
  label,
  children,
  tone = 'plain',
}: {
  label: string
  children: ReactNode
  tone?: keyof typeof toneStyles | string
}) {
  return (
    <div className={`rounded-xl p-3 ${toneStyles[tone] ?? toneStyles.plain}`}>
      <p className="mb-1 text-sm font-semibold opacity-80">{label}</p>
      <p className="leading-relaxed">{children}</p>
    </div>
  )
}
