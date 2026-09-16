import { motion, useReducedMotion } from 'framer-motion'
import Terminal from './Terminal'
import { heroHeadlineLines, heroLead, heroKeyStack, profile } from '../data/content'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="hero" className="relative flex min-h-svh items-center pb-16 pt-32.5">
      <motion.div
        className="orb -top-10 right-[18%] h-80 w-80 bg-violet"
        animate={reduceMotion ? {} : { y: [0, 22, 0], x: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb -right-8 -bottom-5 h-65 w-65 bg-cyan"
        animate={reduceMotion ? {} : { y: [0, -18, 0], x: [0, 16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-285 grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 flex items-center gap-2.5 text-sm text-mist"
          >
            <span className="animate-pulse-dot h-2 w-2 shrink-0 rounded-full bg-green-400 shadow-[0_0_0_4px_rgba(74,222,128,0.15)]" />
            {profile.statusLine}
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-3 font-mono text-sm text-cyan"
          >
            {profile.role}
          </motion.div>

          <h1 className="font-mono text-[clamp(2.3rem,5.4vw,3.8rem)] font-semibold leading-[1.12] tracking-tight">
            {heroHeadlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.4 + 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-6 max-w-[54ch] text-[1.06rem] text-mist"
          >
            {heroLead}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <a href="#projects" className="btn btn--primary">
              View my work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </motion.div>

          {/* Quick-glance stack so a recruiter sees the core tools without scrolling.
              Full breakdown lives in the Skills section below. */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.25 }}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-6"
          >
            <span className="font-mono text-xs text-mist">Core stack</span>
            {heroKeyStack.map((tech) => (
              <span key={tech} className="font-mono text-xs text-mist/80">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        <Terminal />
      </div>

      <div className="absolute bottom-9 left-6 hidden flex-col items-center gap-2.5 font-mono text-xs text-mist sm:flex">
        <div className="animate-scrollcue relative h-9 w-[22px] rounded-full border border-white/10" />
        scroll
      </div>
    </section>
  )
}
