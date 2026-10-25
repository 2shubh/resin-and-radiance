import Icon, { WhatsAppGlyph } from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import { messages, site } from '../config/site.js'
import { telUrl } from '../lib/whatsapp.js'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-20 pt-4 sm:pb-24 lg:pb-28">
      <div className="container-page">
        <Reveal className="rounded-[2rem] bg-blush px-6 py-14 text-center sm:px-10 lg:py-20">
          <h2 id="contact-title" className="section-title mx-auto max-w-[18ch]">
            Let&rsquo;s Make Something Beautiful Together
          </h2>
          <p className="section-lede mx-auto">
            Have a question, an idea, or a gift in mind? We&rsquo;d love to hear from you.
          </p>

          <div className="mx-auto mt-10 grid max-w-[44rem] gap-4 text-left sm:grid-cols-2 sm:gap-5">
            <div className="flex flex-col rounded-[1.5rem] bg-ivory p-6 sm:p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f7ee] text-[#1f9d55]">
                <WhatsAppGlyph size={24} />
              </span>
              <p className="mt-4 text-[14.5px] font-medium">WhatsApp</p>
              <p className="font-display text-[1.45rem] font-semibold text-burgundy">{site.phoneDisplay}</p>
              <WhatsAppLink message={messages.contact} className="btn btn-primary mt-5 w-full">
                <WhatsAppGlyph size={18} />
                Chat on WhatsApp
              </WhatsAppLink>
            </div>

            <div className="flex flex-col rounded-[1.5rem] bg-ivory p-6 sm:p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blush text-burgundy">
                <Icon name="phone" size={22} />
              </span>
              <p className="mt-4 text-[14.5px] font-medium">Call</p>
              <p className="font-display text-[1.45rem] font-semibold text-burgundy">{site.phoneDisplay}</p>
              <a href={telUrl} className="btn btn-outline mt-5 w-full">
                <Icon name="phone" size={18} />
                Call Now
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
