import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/lessons', label: '課程總覽' },
  { to: '/concepts', label: 'Scratch 基礎' },
  { to: '/teacher', label: '教師備課' },
]

/** 全站頂部導覽列。 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-lg font-extrabold text-slate-800">
          <span className="text-2xl">🐱</span>
          Scratch 小小遊戲設計師
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-orange-100 text-orange-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
