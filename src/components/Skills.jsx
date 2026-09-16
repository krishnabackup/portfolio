import SectionHeading from './ui/SectionHeading'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto max-w-285 px-6">
        <SectionHeading
          title="Skills & tools"
          lead="The stack I reach for most, grouped by where it fits in a project."
        />

        <div className="flex flex-col gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-3.5 font-mono text-[0.85rem] text-mist">{group.title}</div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
