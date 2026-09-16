export default function SectionHeading({ title, lead, className = '' }) {
  return (
    <div className={`mb-12 max-w-[640px] ${className}`}>
      <h2 className="font-mono text-[clamp(1.7rem,3vw,2.3rem)] font-semibold tracking-tight">
        {title}
      </h2>
      {lead && <p className="mt-3 text-[1.02rem] text-mist">{lead}</p>}
    </div>
  )
}
