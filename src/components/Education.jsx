import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { education } from '../data/content'


export default function Education() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto max-w-285 px-6">
        <SectionHeading title="Education" />
        <div ref={containerRef} className="relative">
          <div className="timeline__track" />
          <motion.div className="timeline__track-fill" style={{ height: fillHeight }} />
          {education.map((item) => (
            <TimelineItem key={item.role} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}


function TimelineItem({ item }) {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      className="grid grid-cols-[24px_1fr] gap-x-6 pb-11.5 last:pb-0"
      onViewportEnter={() => setActive(true)}
      viewport={{ once: true, amount: 0.6 }}
    >
      <div
        className={`timeline__node relative z-1 mt-1.25 justify-self-center ${
          active ? 'is-active' : ''
        }`}
      />
      <div>
        <div className="mb-1.5 font-mono text-[0.83rem] text-mist">{item.period}</div>
        <div className="mb-2 text-[1.14rem]">{item.role}</div>
        <div className='mb-2 '>{item.institution}</div>
        <div className="mb-2 text-[1.14rem]">CGPA : {item.cgpa}</div>
        <p className="max-w-[64ch] text-mist">{item.description}</p>
      </div>
    </motion.div>
  )
}
