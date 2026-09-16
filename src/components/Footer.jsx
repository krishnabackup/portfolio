import { nav } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-285 flex-wrap items-center justify-between gap-3 px-6 text-sm text-mist">
        <span>{nav.brand} — designed &amp; built from scratch, {new Date().getFullYear()}</span>
        <a href="#hero" className="transition-colors hover:text-white">
          Back to top
        </a>
      </div>
    </footer>
  )
}
