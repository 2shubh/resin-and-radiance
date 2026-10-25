import Icon, { WhatsAppGlyph } from '../components/Icon.jsx'
import Logo from '../components/Logo.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import { messages, navItems, site } from '../config/site.js'
import { anchorHandler } from '../lib/scroll.js'
import { telUrl } from '../lib/whatsapp.js'

const socialLabels = { instagram: 'Instagram', facebook: 'Facebook', youtube: 'YouTube' }

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = Object.entries(site.social).filter(([, url]) => Boolean(url))

  return (
    <footer className="bg-wine pb-28 pt-14 text-blush/90 sm:pb-12 lg:pt-16">
      <div className="container-page grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href="#home" onClick={anchorHandler('home')} className="inline-block rounded-md" aria-label="Resin & Radiance, back to top">
            <Logo light />
          </a>
          <p className="mt-4 max-w-[22rem] text-[15.5px] leading-relaxed">{site.tagline}</p>
          {socials.length > 0 ? (
            <ul className="mt-6 flex gap-2">
              {socials.map(([key, url]) => (
                <li key={key}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition hover:border-gold hover:text-gold"
                    aria-label={`Resin & Radiance on ${socialLabels[key] ?? key}`}
                  >
                    <Icon name={key} size={20} />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="font-display text-[1.1rem] text-ivory">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 md:grid-cols-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={anchorHandler(item.id)}
                  className="inline-block py-1 text-[15.5px] transition-colors hover:text-ivory"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="font-display text-[1.1rem] text-ivory">Order &amp; enquiries</p>
          <p className="mt-3 text-[15.5px]">
            WhatsApp &amp; call:{' '}
            <a href={telUrl} className="font-semibold text-ivory underline decoration-gold/60 underline-offset-4 hover:decoration-gold">
              {site.phoneDisplay}
            </a>
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <WhatsAppLink message={messages.contact} className="btn btn-light min-h-11 px-5 text-[15px]">
              <WhatsAppGlyph size={18} className="text-[#1f9d55]" />
              WhatsApp
            </WhatsAppLink>
            <a href={telUrl} className="btn min-h-11 border border-ivory/30 px-5 text-[15px] text-ivory hover:border-gold hover:text-gold">
              <Icon name="phone" size={17} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="container-page mt-12">
        <div className="flex flex-col gap-1 border-t border-ivory/12 pt-6 text-[14px] text-blush/70 sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Handcrafted with love.</p>
        </div>
      </div>
    </footer>
  )
}
