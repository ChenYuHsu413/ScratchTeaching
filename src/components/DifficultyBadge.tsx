import type { Difficulty } from '../types'

interface DifficultyBadgeProps {
  difficulty: Difficulty
}

const styles: Record<Difficulty, string> = {
  入門: 'bg-green-100 text-green-700 border-green-300',
  基礎: 'bg-amber-100 text-amber-700 border-amber-300',
  進階: 'bg-rose-100 text-rose-700 border-rose-300',
}

const dots: Record<Difficulty, string> = {
  入門: '●○○',
  基礎: '●●○',
  進階: '●●●',
}

/** 難度標籤，用顏色與圓點清楚表示入門 / 基礎 / 進階。 */
export default function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${styles[difficulty]}`}
    >
      <span className="tracking-tighter">{dots[difficulty]}</span>
      {difficulty}
    </span>
  )
}
