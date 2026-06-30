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
  { q: '學生不能登入怎麼辦？', a: '可改用離線方式：老師先把範例專案下載成 .sb3 檔，發給學生用 Scratch 離線編輯器（Scratch Desktop）開啟，一樣可以編輯與儲存到自己電腦。' },
  { q: '網路不穩怎麼辦？', a: '預先把當天的範例 .sb3 檔下載好放到隨身碟或共用資料夾，改用離線版 Scratch Desktop 上課，就不怕臨時連不上網。' },
]

const teachingFAQ: FAQ[] = [
  {
    question: '學生程度落差很大怎麼辦？',
    answer:
      '採用「基礎任務 + 挑戰任務」雙軌：所有人先完成基礎任務，動作快的學生直接做挑戰任務（炸彈、計時、加速），老師就有時間照顧需要協助的學生。慢的學生只要完成基礎任務即可，不必勉強。',
  },
  {
    question: '一節課上不完怎麼辦？',
    answer:
      '接水果遊戲建議分兩節：第一節任務 1～4（會動、會掉、會回、會隨機），第二節任務 5～6（加分、音效與改造）。每節課結束前留 5 分鐘讓學生存檔或截圖。',
  },
  {
    question: '學生一直卡在某個任務？',
    answer:
      '先看「常見錯誤 Q&A」對照症狀（水果不會動、分數沒加…）。多半是積木沒放進「重複執行」，或變數沒建立。鼓勵學生「寫一點、按綠旗測一點」。',
  },
  {
    question: '學生把程式放錯角色？',
    answer:
      '這是最常見的狀況。提醒學生「每個角色都有自己的程式」：籃子的程式要點到籃子才看得到，水果的程式要點到水果。卡關時先確認現在選的是哪個角色。',
  },
]

// 國小三、四年級的教學提醒
const gradeReminders = [
  '少講抽象概念，多做看得見的結果。',
  '每 10～15 分鐘要有一個小成果，孩子才有成就感。',
  '任務步驟要清楚，一次只做一件事。',
  '學得快的學生給小挑戰，不要讓他們乾等。',
  '學得慢的學生只要完成基礎任務即可，不必全部做完。',
  '常提醒「每個角色有自己的程式」，避免學生把積木放錯角色。',
  '學生容易花太多時間換角色和背景，記得安排固定的「自由改造時間」。',
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

      {/* 控場小提醒 */}
      <section className="mt-10 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6">
        <h2 className="text-xl font-extrabold text-slate-800">🎚️ 控場小提醒</h2>
        <p className="mt-2 leading-relaxed text-slate-600">
          先帶全班一起完成基礎任務，確保每個孩子都有作品；學得快的孩子給挑戰任務發揮，
          學得慢的孩子完成基礎版就值得鼓勵。最後留一段「自由改造 + 上台分享」時間，
          讓孩子說說自己改了什麼，成就感最強。
        </p>
      </section>
    </div>
  )
}
