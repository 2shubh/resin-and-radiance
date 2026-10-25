import Reveal from './Reveal.jsx'

export default function SectionHeader({ id, title, lede, align = 'left', light = false, children, className = '' }) {
  const centered = align === 'center'
  return (
    <Reveal className={`${centered ? 'mx-auto text-center' : ''} ${className}`}>
      <h2 id={id} className={`section-title ${light ? 'text-ivory' : ''}`}>
        {title}
      </h2>
      {lede ? (
        <p className={`section-lede ${centered ? 'mx-auto' : ''} ${light ? 'text-blush' : ''}`}>{lede}</p>
      ) : null}
      {children}
    </Reveal>
  )
}
