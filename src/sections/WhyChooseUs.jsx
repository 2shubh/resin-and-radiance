import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const reasons = [
  {
    icon: 'handHeart',
    title: 'Made with Care',
    text: 'Thoughtfully crafted designs with attention to the little details.',
  },
  {
    icon: 'palette',
    title: 'Personalized for You',
    text: 'Discuss your preferences and explore customization options.',
  },
  {
    icon: 'gift',
    title: 'Perfect for Gifting',
    text: 'Creative keepsakes for celebrations and meaningful moments.',
  },
  {
    icon: 'message',
    title: 'Easy WhatsApp Ordering',
    text: 'Ask questions, discuss designs, and place your order directly with us.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="bg-shell py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionHeader id="why-title" title="Why Choose Us" />
        <Reveal
          as="ul"
          stagger
          className="mt-10 grid gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-0"
        >
          {reasons.map((reason, i) => (
            <li
              key={reason.title}
              style={{ '--i': i }}
              className="lg:border-l lg:border-gold/45 lg:px-7 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blush text-burgundy">
                <Icon name={reason.icon} size={22} />
              </span>
              <h3 className="mt-4 text-[1.3rem]">{reason.title}</h3>
              <p className="mt-1.5 max-w-[19rem] text-[15.5px] leading-relaxed">{reason.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
