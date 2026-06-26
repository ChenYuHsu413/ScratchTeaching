import { useState } from 'react'
import type { FAQ } from '../types'

interface FAQItemProps {
  faq: FAQ
}

/** 展開 / 收合式的常見問題區塊。 */
export default function FAQItem({ faq }: FAQItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left font-semibold text-slate-700 hover:bg-slate-50"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span className="text-amber-500">❓</span>
          {faq.question}
        </span>
        <span className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>
      {open && (
        <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-slate-600">
          {faq.answer}
        </div>
      )}
    </div>
  )
}
