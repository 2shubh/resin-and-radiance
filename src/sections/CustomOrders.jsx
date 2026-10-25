import Icon, { WhatsAppGlyph } from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import { messages } from '../config/site.js'

const possibilities = [
  { icon: 'palette', label: 'Colour combinations' },
  { icon: 'flower', label: 'Floral inclusions and decorative details' },
  { icon: 'pen', label: 'Personalized gifts' },
  { icon: 'sparkles', label: 'Festive and wedding collections' },
  { icon: 'gem', label: 'Custom resin jewellery' },
  { icon: 'gift', label: 'Special-occasion gifting' },
]

const steps = [
  { title: 'Share your idea', text: 'Send us a colour, a name, a photo for reference, or the occasion.' },
  { title: 'Talk it through', text: 'We suggest what will work, and share the options and pricing.' },
  { title: 'Made by hand', text: 'Once you confirm on WhatsApp, your piece is made for you.' },
]

export default function CustomOrders() {
  return (
    <section id="custom" aria-labelledby="custom-title" className="py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-burgundy px-6 py-12 text-blush sm:px-10 sm:py-14 lg:px-14 lg:py-16">

          <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <h2 id="custom-title" className="section-title text-ivory">
                Dream It. We&rsquo;ll Make It.
              </h2>
              <p className="mt-4 max-w-[34rem] text-[1.12rem] leading-relaxed text-blush">
                Have a colour, design, name, memory, or special occasion in mind? Let&rsquo;s turn your idea
                into a handmade keepsake.
              </p>

              <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {possibilities.map((p) => (
                  <li key={p.label} className="flex items-center gap-3 text-[15.5px] text-ivory">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/45 text-gold">
                      <Icon name={p.icon} size={19} />
                    </span>
                    {p.label}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <WhatsAppLink message={messages.custom} className="btn btn-light w-full px-7 text-[1.02rem] sm:w-auto">
                  <WhatsAppGlyph size={20} className="text-[#1f9d55]" />
                  Discuss Your Custom Order on WhatsApp
                </WhatsAppLink>
                <p className="mt-4 max-w-[30rem] text-[15px] text-blush/90">
                  Share your idea with us on WhatsApp, and we&rsquo;ll help you explore the possibilities.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <h3 className="font-display text-[1.25rem] text-ivory">How a custom order works</h3>
              <ol className="mt-5 space-y-3">
                {steps.map((step, i) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-[1.25rem] border border-ivory/12 bg-wine/55 p-5"
                  >
                    <span className="font-display text-[1.6rem] leading-none text-gold">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-ivory">{step.title}</p>
                      <p className="mt-0.5 text-[15px] leading-relaxed text-blush/90">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-[14px] text-blush/75">
                Not every idea suits resin, so we&rsquo;ll always tell you honestly what&rsquo;s possible before
                anything is made.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
