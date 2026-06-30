import FAQItem from '../components/FAQItem'
import type { FAQ } from '../types'

// 每堂 3 小時的建議流程
const schedule = [
  { time: '0:00～0:15', content: '報到、開機、複習上週內容' },
  { time: '0:15～0:30', content: '展示本週作品成果' },
  { time: '0:30～1:10', content: '老師帶做第一段核心功能' },
  { time: '1:10～1:20', content: '休息' },
  { time: '1:20～2:00', content: '老師帶做第二段功能，學生完成任務卡' },
  { time: '2:00～2:10', content: '休息' },
  { time: '2:10～2:40', content: '小挑戰 / 自由改造 / 個別協助' },
  { time: '2:40～2:55', content: '學生測試與互相試玩' },
  { time: '2:55～3:00', content: '收尾、存檔、回顧今日重點' },
]

// 上課前檢查清單
const checklist = [
  '已經在自己的電腦上先把今天的範例遊戲玩過一次',
  '投影機 / 電視可以清楚顯示 Scratch 畫面',
  '每台學生電腦都能打開瀏覽器並連到 scratch.mit.edu',
  '確認音量正常（部分遊戲有音效）',
  '準備好今天的任務卡進度（要上到第幾個任務）',
]

// 教室環境檢查
const envChecklist = [
  '是否能連上 scratch.mit.edu',
  '學生是否需要 Scratch 帳號（只玩、跟做不需要；要存檔 / Remix 才需要）',
  '如果不能登入，是否會下載 / 上傳 .sb3 檔',
  '是否有投影設備',
  '是否有耳機或音量控制',
  '是否準備好半成品範例（讓進度慢的學生接著做）',
  '是否準備備用圖片素材（角色、背景）',
  '是否準備任務卡或教學網站連結',
]

const environment = [
  { q: '網路可以開 scratch.mit.edu 嗎？', a: '上課前先用一台學生電腦實際打開測試。學校若擋網站，請提早請資訊組開放，或改用離線版。' },
  { q: '學生需要 Scratch 帳號嗎？', a: '只是「玩」和「跟著做」不需要帳號。但若要「儲存作品」或「Remix 別人的作品」，就需要登入帳號。' },
  { q: '學生不能登入怎麼辦？', a: '可改用離線方式：老師先把範例專案下載成 .sb3 檔，發給學生用 Scratch 離線編輯器（Scratch Desktop）開啟，編輯後再上傳 / 存到自己電腦。' },
  { q: '網路不穩怎麼辦？', a: '預先把當天的範例 .sb3 檔下載好放到隨身碟或共用資料夾，改用離線版 Scratch Desktop 上課，就不怕臨時連不上網。' },
]

// 國小三、四年級教學提醒
const gradeReminders = [
  '不要連續講太久，每 10～15 分鐘要有一個小成果。',
  '不預設學生會回家完成作業，課堂內就要做出階段作品。',
  '小挑戰是彈性選做，不是每位學生都必須完成。',
  '慢的學生完成基礎任務即可，不必勉強做完全部。',
  '快的學生可以做小挑戰或自由改造。',
  '學生常會把程式放錯角色，要提醒「每個角色有自己的程式」。',
  '學生可能會花太多時間換角色、背景與音效，要安排固定的自由改造時間。',
  '第 12 堂是作品升級與整理，不是正式大型專題。',
  '如果班級進度較慢，第 12 堂可改為補進度與作品修正。',
]

const teachingFAQ: FAQ[] = [
  {
    question: '學生程度落差很大怎麼辦？',
    answer:
      '採用「基礎任務 + 小挑戰」雙軌：所有人先完成基礎任務，動作快的學生做小挑戰或自由改造，老師就有時間照顧需要協助的學生。慢的學生完成基礎任務即可，不必勉強。',
  },
  {
    question: '一堂課（3 小時）的內容上不完怎麼辦？',
    answer:
      '優先確保每位學生完成「基礎任務」、做出當天的階段作品；小挑戰是彈性選做。真的來不及，下一堂開頭花幾分鐘補齊再往下。',
  },
  {
    question: '學生一直卡在某個任務？',
    answer:
      '先看該課的「常見錯誤」對照症狀（水果不會動、分數沒加…）。多半是積木沒放進「重複執行」，或變數沒建立。鼓勵學生「寫一點、按綠旗測一點」。',
  },
  {
    question: '學生把程式放錯角色？',
    answer:
      '這是最常見的狀況。提醒「每個角色都有自己的程式」：籃子的程式要點到籃子才看得到，水果的程式要點到水果。卡關時先確認現在選的是哪個角色。',
  },
]

export default function TeacherPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-800">教師備課</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          每週 1 堂、每堂 3 小時，共 12 堂。上課前花幾分鐘看一下這頁，課堂就會順很多。
        </p>
      </div>

      {/* 課程節奏 */}
      <section className="mt-10">
        <h2 className="mb-3 text-xl font-extrabold text-slate-800">🕒 每堂 3 小時建議流程</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="w-32 px-4 py-2.5 font-semibold">時間</th>
                <th className="px-4 py-2.5 font-semibold">內容</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.time} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-mono text-slate-500">{row.time}</td>
                  <td className="px-4 py-2.5 text-slate-700">{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

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

      {/* 教室環境檢查 */}
      <section className="mt-10">
        <h2 className="mb-3 text-xl font-extrabold text-slate-800">🖥️ 教室環境檢查</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {envChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 text-blue-500">☑</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 教室環境與帳號 */}
      <section className="mt-10">
        <h2 className="mb-3 text-xl font-extrabold text-slate-800">🌐 帳號與離線備案</h2>
        <div className="space-y-3">
          {environment.map((e) => (
            <div key={e.q} className="rounded-xl border border-blue-200 bg-blue-50 p-4">
              <p className="font-bold text-blue-800">{e.q}</p>
              <p className="mt-1 text-blue-900">{e.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 國小三、四年級教學提醒 */}
      <section className="mt-10">
        <h2 className="mb-3 text-xl font-extrabold text-slate-800">🧒 國小三、四年級教學提醒</h2>
        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
          <ul className="space-y-2.5">
            {gradeReminders.map((item) => (
              <li key={item} className="flex items-start gap-3 text-orange-900">
                <span className="mt-0.5">📌</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
    </div>
  )
}
