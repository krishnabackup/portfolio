import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { projects } from '../data/content'
import ProjectImage from './ProjectImage'

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto max-w-285 px-6">
        <SectionHeading
          title="Selected work"
          lead="A few projects I've enjoyed building, start to finish."
        />

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass mb-8 grid grid-cols-1 items-center gap-12 rounded-3xl p-10 md:grid-cols-2"
          >
            <div>
              <div className="mb-3.5 font-mono text-[0.78rem] text-cyan">Featured</div>
              <h3 className="mb-3.5 text-2xl">{featured.name}</h3>
              <p className="mb-5 text-mist">{featured.description}</p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <ProjectLinks demoUrl={featured.demoUrl} codeUrl={featured.codeUrl} />
              </div>
            </div>
            <ProjectImage imageSource={featured.image}/>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {rest.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="glass flex flex-col gap-4 rounded-2xl p-7"
            >
              <ProjectImage/>
              <h3 className="text-[1.15rem]">{project.name}</h3>
              <p className="text-[0.95rem] text-mist">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <ProjectLinks demoUrl={project.demoUrl} codeUrl={project.codeUrl} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectLinks({ demoUrl, codeUrl }) {
  return (
    <div className="mt-auto flex gap-5 pt-1.5">
      <a
        href={demoUrl}
        className="border-b border-transparent text-sm transition-colors hover:border-cyan hover:text-cyan"
      >
        Live demo ↗
      </a>
      <a
        href={codeUrl}
        className="border-b border-transparent text-sm transition-colors hover:border-cyan hover:text-cyan"
      >
        Source ↗
      </a>
    </div>
  )
}

