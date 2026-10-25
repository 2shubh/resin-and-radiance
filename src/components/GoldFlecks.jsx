// Small irregular flakes of gold leaf, like the foil set inside the resin.
const shapes = [
  'M2 1 9 0l3 6-4 6-7-2-1-6Z',
  'M1 3 7 0l5 4-2 7-6 1-3-5Z',
  'M3 0h6l3 5-3 6H2L0 5Z',
]

export default function GoldFlecks({ flecks, drift = false }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {flecks.map((f, i) => (
        <svg
          key={i}
          viewBox="0 0 12 12"
          className={`absolute ${drift ? 'fleck' : ''}`}
          style={{
            top: f.top,
            left: f.left,
            right: f.right,
            bottom: f.bottom,
            width: f.size,
            height: f.size,
            rotate: `${f.rotate ?? 0}deg`,
            opacity: f.opacity ?? 0.85,
            animationDelay: `${i * -1.7}s`,
          }}
        >
          <path d={shapes[i % shapes.length]} fill={f.color ?? '#c6a36a'} />
        </svg>
      ))}
    </div>
  )
}
