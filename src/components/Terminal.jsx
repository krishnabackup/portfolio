import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { heroTerminalLines } from '../data/content'

export default function Terminal() {
  const reduceMotion = useReducedMotion()
  const [text, setText] = useState(reduceMotion ? heroTerminalLines.join('\n') : '')
  const [done, setDone] = useState(!!reduceMotion)

  useEffect(() => {
    if (reduceMotion) return
    let cancelled = false
    let li = 0
    let ci = 0

    const step = () => {
      if (cancelled) return
      if (li >= heroTerminalLines.length) {
        setDone(true)
        return
      }
      const line = heroTerminalLines[li]
      if (ci <= line.length) {
        setText(
          heroTerminalLines.slice(0, li).join('\n') + (li > 0 ? '\n' : '') + line.slice(0, ci)
        )
        ci += 1
        setTimeout(step, 16 + Math.random() * 24)
      } else {
        li += 1
        ci = 0
        setTimeout(step, 90)
      }
    }

    // Wait for the headline reveal to finish before typing starts
    const startTimer = setTimeout(step, 1300)
    return () => {
      cancelled = true
      clearTimeout(startTimer)
    }
  }, [reduceMotion])

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      className="glass relative z-10 rounded-[20px] p-6 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.65)]"
    >
      <div className="mb-5 flex gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <pre className="min-h-[172px] whitespace-pre font-mono text-[0.86rem] leading-relaxed text-white">
        {text}
        {done && (
          <span className="animate-blink ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-cyan align-text-bottom" />
        )}
      </pre>
    </motion.div>
  )
}
