import { useRef, useState } from 'react'
import Icon, { WhatsAppGlyph } from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import { messages } from '../config/site.js'
import { faqs } from '../data/faqs.js'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const buttons = useRef([])

  // Arrow keys move between questions (WAI-ARIA accordion pattern).
  function onKeyDown(event, index) {
    const last = faqs.length - 1
    const target = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[event.key]
    if (target !== undefined) {
      event.preventDefault()
      buttons.current[target]?.focus()
    }
  }

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 sm:py-20 lg:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-4">
          <h2 id="faq-title" className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-lede">
            Current prices, availability and delivery details are always confirmed with you on WhatsApp.
          </p>
          <WhatsAppLink message={messages.faq} className="btn btn-outline mt-7 px-6">
            <WhatsAppGlyph size={18} />
            Ask a Question on WhatsApp
          </WhatsAppLink>
        </Reveal>

        <Reveal className="lg:col-span-8">
          <div className="border-t border-line">
            {faqs.map((faq, i) => {
              const open = openIndex === i
              const buttonId = `faq-q-${i}`
              const panelId = `faq-a-${i}`
              return (
                <div key={faq.question} className="border-b border-line">
                  <h3 className="font-sans text-[1.06rem] font-semibold text-burgundy sm:text-[1.12rem]">
                    <button
                      ref={(el) => (buttons.current[i] = el)}
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : i)}
                      onKeyDown={(e) => onKeyDown(e, i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-wine"
                    >
                      {faq.question}
                      <span
                        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[rotate,background-color,border-color] duration-300 ${
                          open ? 'rotate-180 border-burgundy bg-burgundy text-ivory' : 'border-line text-burgundy'
                        }`}
                      >
                        <Icon name="chevronDown" size={18} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="accordion-panel"
                    data-open={open}
                    inert={!open}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[40rem] pb-6 pr-12 text-[15.5px] leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
