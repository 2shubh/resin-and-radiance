import { useEffect, useRef, useState } from 'react'

/** True once the element has scrolled into view (then stays true). */
export function useInView(options = { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
  }, [inView]) // options are read once, on first observe

  return [ref, inView]
}

/**
 * Fades its content up once, when it first enters the viewport.
 * stagger: each direct child animates in turn (children set style={{'--i': n}}).
 */
export default function Reveal({ as: Tag = 'div', stagger = false, className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  const base = stagger ? 'reveal-stagger' : 'reveal'
  return (
    <Tag ref={ref} className={`${base} ${inView ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
