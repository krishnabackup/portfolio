import { motion } from 'framer-motion'
import { about, profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-16 px-6 md:grid-cols-[0.75fr_1.25fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="avatar mx-auto w-full max-w-[220px] md:mx-0 md:max-w-[280px]"
        >
          <span className="relative z-10 font-mono text-[3.6rem] font-semibold text-[rgba(11,14,26,0.82)]">
            {profile.initials}
          </span>
        </motion.div>

        <div>
          <h2 className="mb-6 font-mono text-[clamp(1.7rem,3vw,2.3rem)] font-semibold tracking-tight">
            About
          </h2>
          {/* TODO: replace with your real bio */}
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mb-[18px] max-w-[64ch] text-mist last:mb-0">
              {p}
            </p>
          ))}

          <div className="mt-8 flex flex-wrap gap-10">
            {about.stats.map((s) => (
              <div key={s.label}>
                <div className="font-mono text-2xl font-semibold">{s.value}</div>
                <div className="mt-1 text-sm text-mist">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
