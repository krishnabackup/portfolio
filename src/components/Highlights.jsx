import { motion } from 'framer-motion'
import { Zap, Layers, MessagesSquare } from 'lucide-react'
import { highlights } from '../data/content'

const ICONS = { Zap, Layers, MessagesSquare }

export default function Highlights() {
  return (
    <section className="border-y border-white/10 py-14">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {highlights.map((h, i) => {
            const Icon = ICONS[h.icon]
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {Icon && <Icon className="mb-4 h-5 w-5 text-cyan" strokeWidth={1.75} />}
                <h3 className="mb-2 text-[1.02rem] font-medium">{h.title}</h3>
                <p className="text-[0.94rem] text-mist">{h.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
