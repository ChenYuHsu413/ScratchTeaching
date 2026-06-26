import FAQItem from '../components/FAQItem'
import type { FAQ } from '../types'

const checklist = [
  '已經在自己的電腦上先把今天的範例遊戲玩過一次',
  '投影機 / 電視可以清楚顯示 Scratch 畫面',
  '每台學生電腦都能打開瀏覽器並連到 scratch.mit.edu',
  '確認音量正常（部分遊戲有音效）',
  '準備好今天的任務卡進度（要上到第幾個任務）',
]

const environment = [
  { q: '網路可以開 scratch.mit.edu 嗎？', a: '上課前先用一台學生電腦實際打開測試。學校若擋網站，請提早請資訊組開放，或改用離線版。' },
  { q: '學生需要 Scratch 帳號嗎？', a: '只是「玩」和「跟著做」不需要帳號。但若要「儲存作品」或「Remix 別人的作品」，就需要登入帳號。' },
  { q: '不能登入怎麼辦？', a: '可改用離線方式：老師先把範例專案下載成 .sb3 檔，發給學生用 Scratch 離線編輯器（Scratch Desktop）開啟，一樣可以編輯與儲存到自己電腦。' },
]

const teachingFAQ: FAQ[] = [
  {
    question: '學生程度落差很大怎麼辦？',
    answer:
      '採用「基礎任務 + 挑戰任務」雙軌：所有人完成任務 1～6，動作快的學生直接做挑戰任務（炸彈、生命值、加速），老師就有時間照顧需要協助的學生。',
  },
  {
    question: '一節課上不完怎麼辦？',
    answer:
      '接水果遊戲建議分兩節：第一節任務 1～4（會動、會掉、會加分），第二節任務 5～7（計時、結束、改造）。每節課結束前留 5 分鐘讓學生存檔或截圖。',
  },
  {
    question: '學生一直卡在某個任務？',
    answer:
      '先看「常見錯誤 Q&A」對照症狀（水果不會動、分數沒加…）。多半是積木沒放進「重複執行」，或變數沒建立。鼓勵學生「寫一點、按綠旗測一點」。',
  },
  {
    question: '怎麼讓學生不要只是照抄？',
    answer:
      '每個任務完成後問一句「為什麼這樣寫？」例如「為什麼要放進重複執行？」最後的自由改造階段，請學生上台說明自己改了什麼，成就感最強。',
  },
]

const gradeTips = [
  {
    grade: '中年級（3～4 年級）',
    tips: '老師先示範任務 1～3（會動、會掉、會隨機），學生專注在任務 4 之後的加分與計時。多用比喻：變數是「記分小盒子」、迴圈是「一直重複」。',
  },
  {
    grade: '高年級（5～6 年級）',
    tips: '可讓學生直接挑戰完整七個任務，並至少完成一個挑戰任務。鼓勵他們自己讀任務卡、互相討論除錯，老師退到引導角色。',
  },
]

export default function TeacherPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-800">教師備課</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          上課前花 5 分鐘看一下這頁，確認環境沒問題，課堂就會順很多。
        </p>
      </div>

      {/* 上課前檢查清單 */}
      <section className="mt-10">
        <h2 className="mb-3 text-xl font-extrabold text-slate-800">✅ 上課前檢查清單</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <ul className="space-y-2.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 text-green-500">☑</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 教室環境確認 */}
      <section className="mt-10">
        <h2 className="mb-3 text-xl font-extrabold text-slate-800">🌐 教室環境與帳號</h2>
        <div className="space-y-3">
          {environment.map((e) => (
            <div key={e.q} className="rounded-xl border border-blue-200 bg-blue-50 p-4">
              <p className="font-bold text-blue-800">{e.q}</p>
              <p className="mt-1 text-blue-900">{e.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 常見教學問題 */}
      <section className="mt-10">
        <h2 className="mb-3 text-xl font-extrabold text-slate-800">💬 常見教學問題</h2>
        <div className="space-y-2">
          {teachingFAQ.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </div>
      </section>

      {/* 不同年級調整建議 */}
      <section className="mt-10">
        <h2 className="mb-3 text-xl font-extrabold text-slate-800">🎚️ 不同年級的調整建議</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {gradeTips.map((g) => (
            <div key={g.grade} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-orange-600">{g.grade}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{g.tips}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
