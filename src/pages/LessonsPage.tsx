import { lessons, stages } from '../data/lessons'
import LessonCard from '../components/LessonCard'

// 各階段的一句話說明，顯示在分組標題下方。
const stageHint: Record<string, string> = {
  'Scratch 基礎': '第 1～4 堂：認識介面、控制、動畫與互動故事，打好基礎。',
  接水果遊戲: '第 5～7 堂：本課程的主力作品，從會掉落一路做到完整可玩。',
  打地鼠遊戲: '第 8～9 堂：用點擊互動，加入倒數與扣分挑戰。',
  迷宮挑戰: '第 10～11 堂：用顏色偵測走迷宮，再設計自己的關卡。',
  綜合整理: '第 12 堂：挑一個作品升級、整理與分享，為課程收尾。',
}

export default function LessonsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-800">12 堂課程總覽</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          每週 1 堂、每堂約 3 小時，3 個月共 12 堂。難度由淺到深，
          完成多個 Scratch 互動作品，最後依學生狀況進行作品升級與分享。
        </p>
      </div>

      {stages.map((stage) => {
        const stageLessons = lessons.filter((l) => l.stage === stage)
        if (stageLessons.length === 0) return null
        return (
          <section key={stage} className="mt-12">
            <div className="mb-5 border-l-4 border-orange-400 pl-3">
              <h2 className="text-xl font-extrabold text-slate-800">{stage}</h2>
              <p className="mt-0.5 text-sm text-slate-500">{stageHint[stage]}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {stageLessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          </section>
        )
      })}

      {/* 課程型態說明 */}
      <section className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
        <p className="leading-relaxed text-slate-600">
          本課程以<span className="font-bold text-slate-800">現場教學與實作</span>為主，
          不預設孩子需要回家完成作業。每堂課都有明確任務與作品成果，
          最後一堂進行作品升級、試玩與分享。
        </p>
      </section>
    </div>
  )
}
