interface ScratchEmbedProps {
  /** Scratch 專案 ID，留空會顯示提示佔位區。 */
  projectId?: string
  title?: string
  width?: number
  height?: number
  autostart?: boolean
}

/**
 * Scratch 範例作品嵌入元件。
 *
 * 用法：<ScratchEmbed projectId="123456789" title="接水果範例" />
 * 沒有 projectId 時會顯示佔位提示，方便日後替換。
 */
export default function ScratchEmbed({
  projectId,
  title = 'Scratch 範例作品',
  width = 485,
  height = 402,
  autostart = false,
}: ScratchEmbedProps) {
  if (!projectId) {
    return (
      <div
        className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100 p-8 text-center"
        style={{ minHeight: height }}
      >
        <span className="mb-3 text-4xl">🐱</span>
        <p className="font-semibold text-slate-600">
          尚未設定 Scratch 範例專案，請稍後替換 projectId。
        </p>
        <p className="mt-2 max-w-sm text-sm text-slate-500">
          在 <code className="rounded bg-slate-200 px-1">src/data/lessons.ts</code> 找到這堂課的
          <code className="rounded bg-slate-200 px-1">scratchProjectId</code>，填入專案 ID 即可顯示。
        </p>
      </div>
    )
  }

  const src = `https://scratch.mit.edu/projects/${projectId}/embed?autostart=${autostart}`

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <iframe
        src={src}
        title={title}
        width={width}
        height={height}
        allowFullScreen
        className="block w-full"
        style={{ aspectRatio: `${width} / ${height}` }}
      />
    </div>
  )
}
