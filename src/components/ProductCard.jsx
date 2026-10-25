import Picture from './Picture.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'
import { WhatsAppGlyph } from './Icon.jsx'
import { productMessage } from '../lib/whatsapp.js'

export default function ProductCard({ product }) {
  const { name, description, price, badge, image, imageAlt, imagePosition } = product
  return (
    <article className="group flex h-full gap-4 rounded-[1.25rem] border border-line bg-white/65 p-3 shadow-card transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_22px_44px_-26px_rgb(100_40_61/0.5)] sm:flex-col sm:gap-0 sm:overflow-hidden sm:p-0">
      <div className="relative aspect-[4/5] w-[38%] shrink-0 self-start overflow-hidden rounded-xl bg-blush sm:w-full sm:self-auto sm:rounded-none">
        <Picture
          image={image}
          alt={imageAlt}
          position={imagePosition}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 38vw"
          className="h-full w-full object-cover transition-[scale] duration-700 ease-out group-hover:scale-[1.04]"
        />
        {badge ? (
          <span className="absolute left-2 top-2 rounded-full bg-ivory/90 px-2.5 py-0.5 text-[12.5px] font-medium text-burgundy shadow-sm sm:left-3 sm:top-3 sm:text-[13px]">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="flex min-w-0 flex-1 flex-col py-0.5 sm:px-5 sm:pb-5 sm:pt-4">
        <h3 className="text-[1.12rem] sm:text-[1.3rem]">{name}</h3>
        <p className="mt-1.5 text-[15px] leading-snug sm:leading-relaxed">{description}</p>
        <p className="mt-2 text-[15px] font-semibold text-gold-ink">{price ?? 'Price on request'}</p>
        <div className="mt-auto pt-3 sm:pt-4">
          <WhatsAppLink
            message={productMessage(name)}
            label={`Place order for ${name} on WhatsApp`}
            className="btn btn-primary min-h-11 w-full px-4 text-[15px]"
          >
            <WhatsAppGlyph size={18} />
            Place Order
          </WhatsAppLink>
        </div>
      </div>
    </article>
  )
}
