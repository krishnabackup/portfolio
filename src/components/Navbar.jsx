import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data/content'

export default function Navbar({onResumeClick}) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isModelOpen,setisModelOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-ink/70 py-3.5 backdrop-blur-md'
          : 'border-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-285 items-center justify-between px-4 sm:px-6">
        <a href="#hero" className="font-mono text-base tracking-tight">
          {nav.brand}
        </a>

        <div className="hidden items-center gap-9 md:flex">
          <ul className="flex items-center gap-8">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-mist transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={onResumeClick} className="btn btn--ghost px-6! py-2.5! text-sm">
            Resume
          </button>
        </div>

        <button
          className="z-70 rounded-full border border-white/10 bg-white/5 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-60 flex flex-col items-center justify-center gap-9 bg-ink/95 px-6 backdrop-blur-xl md:hidden"
          >
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                onResumeClick()
                setOpen(false)
              }}
              className="btn btn--primary mt-2 w-full max-w-52"
            >
              Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
