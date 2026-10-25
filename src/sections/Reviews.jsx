import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { reviews } from '../data/reviews.js'

export default function Reviews() {
  // No real reviews yet: hide the section on the live site.
  if (reviews.length === 0) {
    if (!import.meta.env.DEV) return null
    return (
      <section id="reviews" aria-label="Customer reviews placeholder" className="py-12">
        <div className="container-page">
          <div className="rounded-[1.5rem] border-2 border-dashed border-rose/60 bg-blush/40 p-6 text-[15px]">
            <p className="font-semibold text-burgundy">Dev note: Customer Reviews (hidden on the live site)</p>
            <p className="mt-1">
              Add real customer reviews to <code>src/data/reviews.js</code> and this section appears here
              automatically. Nothing is shown to visitors until then.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionHeader id="reviews-title" title="Kind Words from Our Customers" />
        <Reveal as="ul" stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <li key={`${review.name}-${i}`} style={{ '--i': i }}>
              <figure className="h-full rounded-[1.5rem] border border-line bg-white/65 p-7 shadow-card">
                <blockquote className="font-display text-[1.2rem] leading-snug text-burgundy">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[15px]">
                  <span className="font-semibold text-cocoa">{review.name}</span>
                  {review.detail ? <span className="block text-[14px] text-cocoa/80">{review.detail}</span> : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
