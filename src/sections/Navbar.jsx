import { useEffect, useRef, useState } from 'react'
import Logo from '../components/Logo.jsx'
import Icon, { WhatsAppGlyph } from '../components/Icon.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import { messages, navItems, sectionOrder, sectionToNav } from '../config/site.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { anchorHandler } from '../lib/scroll.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeNav = sectionToNav[useActiveSection(sectionOrder)]
  const headerRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Esc, outside tap, or when the screen gets wide.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointer = (e) => {
      if (!headerRef.current?.contains(e.target)) setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 64rem)')
    const onWide = (e) => e.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    desktop.addEventListener('change', onWide)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      desktop.removeEventListener('change', onWide)
    }
  }, [open])

  const close = () => setOpen(false)
  const solid = scrolled || open

  return (
    <header
      ref={headerRef}
      className={`sticky top-[env(safe-area-inset-top,0px)] z-40 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        solid
          ? 'border-line bg-ivory/95 shadow-[0_10px_30px_-24px_rgb(75_29_46/0.6)] backdrop-blur-md'
          : 'border-transparent bg-ivory'
      }`}
    >
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <a
          href="#home"
          onClick={anchorHandler('home', close)}
          className="rounded-md"
          aria-label="Pratibha Resin World, back to top"
        >
          <Logo />
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const active = activeNav === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={anchorHandler(item.id)}
                  aria-current={active ? 'true' : undefined}
                  className={`relative block rounded-full px-3.5 py-2 text-[15.5px] font-medium transition-colors ${
                    active ? 'text-burgundy' : 'text-cocoa hover:text-burgundy'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3.5 bottom-1 h-px origin-left bg-gold transition-transform duration-300 ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <WhatsAppLink
            message={messages.order}
            className="btn btn-primary hidden min-h-11 px-5 text-[15px] sm:inline-flex"
          >
            <WhatsAppGlyph size={18} />
            Order on WhatsApp
          </WhatsAppLink>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-burgundy transition-colors hover:bg-blush lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full border-b border-line bg-ivory shadow-[0_24px_40px_-30px_rgb(75_29_46/0.6)] transition-[opacity,translate,visibility] duration-300 lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-2 opacity-0'
        }`}
      >
        <ul className="container-page pt-2">
          {navItems.map((item) => {
            const active = activeNav === item.id
            return (
              <li key={item.id} className="border-b border-line/80 last:border-0">
                <a
                  href={`#${item.id}`}
                  onClick={anchorHandler(item.id, close)}
                  aria-current={active ? 'true' : undefined}
                  className="flex min-h-13 items-center justify-between font-display text-[1.3rem] font-medium text-burgundy"
                >
                  {item.label}
                  {active ? <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" /> : null}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="container-page pb-5 pt-3">
          <WhatsAppLink message={messages.order} className="btn btn-primary w-full">
            <WhatsAppGlyph size={18} />
            Order on WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </header>
  )
}
