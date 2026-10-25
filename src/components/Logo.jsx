/** Resin-drop mark + wordmark. Swap this for an image logo if you have one. */
export function LogoMark({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <path
        d="M16 3.5c4.9 5.9 8.6 10.9 8.6 15.4a8.6 8.6 0 0 1-17.2 0C7.4 14.4 11.1 9.4 16 3.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M13.2 17.4l3.1-1.6 2.2 1.9-.9 3.1-3.3.4-1.6-2.1Z" fill="#c6a36a" />
      <path d="M18.9 12.6l1.5-.4.6 1.4-1.1 1-1.3-.6Z" fill="#c6a36a" opacity="0.8" />
    </svg>
  )
}

export default function Logo({ light = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`h-8 w-8 shrink-0 ${light ? 'text-gold' : 'text-burgundy'}`} />
      <spanResin
        className={`font-display text-[1.32rem] font-semibold leading-none tracking-[-0.01em] ${
          light ? 'text-ivory' : 'text-burgundy'
        }`}
      >
         <span className={light ? 'text-gold' : 'text-gold-ink'}>Pratibha</span> Resin World
      </spanResin>
    </span>
  )
}
