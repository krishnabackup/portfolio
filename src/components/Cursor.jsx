import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useFinePointer } from '../hooks/useFinePointer'

export default function Cursor() {
  const reduceMotion = useReducedMotion()
  const hasFinePointer = useFinePointer()
  const [active, setActive] = useState(false)
  const enabled = hasFinePointer && !reduceMotion

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { damping: 28, stiffness: 380, mass: 0.4 })
  const ringY = useSpring(y, { damping: 28, stiffness: 380, mass: 0.4 })

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('cursor-none')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onOver = (e) => {
      if (e.target.closest && e.target.closest('a, button, .chip')) setActive(true)
    }
    const onOut = (e) => {
      if (e.target.closest && e.target.closest('a, button, .chip')) setActive(false)
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      document.documentElement.classList.remove('cursor-none')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[3.5px] -mt-[3.5px] h-[7px] w-[7px] rounded-full bg-cyan"
        style={{ x, y }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] -ml-[27px] -mt-[27px] flex h-[54px] w-[54px] items-center justify-center"
        style={{ x: ringX, y: ringY }}
      >
        <motion.span
          className="block rounded-full border"
          animate={{
            width: active ? 54 : 34,
            height: active ? 54 : 34,
            borderColor: active ? 'rgba(123,92,250,0.7)' : 'rgba(34,216,240,0.6)',
            backgroundColor: active ? 'rgba(123,92,250,0.08)' : 'rgba(0,0,0,0)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  )
}
