import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <div className="text-6xl">🐱❓</div>
      <h1 className="mt-4 text-2xl font-extrabold text-slate-800">找不到這個頁面</h1>
      <p className="mt-2 text-slate-600">這堂課可能還沒上架，或網址打錯了。</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
      >
        回到首頁
      </Link>
    </div>
  )
}
