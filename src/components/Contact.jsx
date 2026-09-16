import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useFinePointer } from '../hooks/useFinePointer'
import { contact, profile } from '../data/content'

function MagneticEmail() {
  const reduceMotion = useReducedMotion()
  const hasFinePointer = useFinePointer()
  const enabled = hasFinePointer && !reduceMotion

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 })

  const handleMove = (e) => {
    if (!enabled) return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.5)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={`mailto:${profile.email}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="mt-8 inline-block border-b-2 border-white/10 pb-1 font-mono text-[clamp(1.2rem,3vw,1.7rem)] transition-colors hover:border-cyan hover:text-cyan"
    >
      {profile.email}
    </motion.a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto max-w-[1140px] px-6">
        <h2 className="max-w-[16ch] font-mono text-[clamp(1.9rem,4.4vw,3rem)] font-semibold tracking-tight">
          {contact.title}
        </h2>
        <p className="mt-4 max-w-[56ch] text-[1.05rem] text-mist">{contact.lead}</p>

        <div>
          <MagneticEmail />
        </div>

        <div className="mt-9 flex gap-3.5">
          {profile.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              aria-label={s.name}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-[0.72rem] transition-all hover:-translate-y-0.5 hover:border-cyan hover:text-cyan"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
