import { WhatsAppGlyph } from '../components/Icon.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import { messages } from '../config/site.js'

export default function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      message={messages.floating}
      label="Chat with Resin & Radiance on WhatsApp"
      className="hero-rise group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_14px_30px_-10px_rgb(18_140_70/0.7)] transition-[scale,box-shadow] duration-200 hover:scale-105 hover:shadow-[0_18px_34px_-10px_rgb(18_140_70/0.85)] sm:right-6 sm:bottom-6"
      style={{ animationDelay: '1s' }}
    >
      <WhatsAppGlyph size={30} />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-wine px-3.5 py-1.5 text-[14px] font-medium text-ivory opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block"
      >
        Chat with us
      </span>
    </WhatsAppLink>
  )
}
