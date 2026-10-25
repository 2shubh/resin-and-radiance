export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Smoothly scroll to a section by id. Sections carry a scroll-margin-top
 * equal to the sticky header height, so headings are never hidden under it.
 */
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  try {
    window.history.replaceState(null, '', `#${id}`)
  } catch {
    // Some embedded previews block history changes; scrolling still works.
  }
}

/** onClick handler for in-page anchor links: no reload, no jump. */
export function anchorHandler(id, after) {
  return (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return
    event.preventDefault()
    after?.()
    scrollToId(id)
  }
}
