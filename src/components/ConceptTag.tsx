import { categoryOf, categoryStyles } from '../data/concepts'

interface ConceptTagProps {
  concept: string
}

/**
 * 概念小標籤。
 * 會依照概念名稱自動套用對應顏色（事件=黃、座標=藍、迴圈=橘、條件=紫、變數=紅、偵測=綠）。
 */
export default function ConceptTag({ concept }: ConceptTagProps) {
  const style = categoryStyles[categoryOf(concept)]
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${style}`}
    >
      {concept}
    </span>
  )
}
