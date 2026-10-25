import GoldFlecks from '../components/GoldFlecks.jsx'
import Picture from '../components/Picture.jsx'
import Reveal from '../components/Reveal.jsx'
import { anchorHandler } from '../lib/scroll.js'

const aboutFlecks = [
  { top: '4%', right: '8%', size: 12, rotate: 25 },
  { top: '46%', left: '-2%', size: 9, rotate: -40, opacity: 0.7 },
  { bottom: '20%', right: '2%', size: 7, rotate: 70, opacity: 0.6, color: '#c98291' },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:mx-0">
          <div aria-hidden="true" className="arch absolute -left-3 top-3 aspect-[4/5] w-[86%] border border-gold/70" />
          <div className="arch relative aspect-[4/5] w-[86%] overflow-hidden bg-blush shadow-photo">
            <Picture
              image="keepsakes-frame-coaster-rings"
              alt="Handmade resin photo frame, coaster and rings with pink flowers and gold flakes"
              sizes="(min-width: 1024px) 360px, 80vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 right-0 aspect-square w-[42%] overflow-hidden rounded-full bg-blush shadow-photo ring-[6px] ring-ivory">
            <Picture
              image="floral-resin-tealight-holder"
              alt="Floral resin tealight holder with a lit candle"
              sizes="180px"
              className="h-full w-full object-cover"
            />
          </div>
          <GoldFlecks flecks={aboutFlecks} />
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7">
          <h2 id="about-title" className="section-title max-w-[16ch]">
            More Than Resin. A Little Piece of Heart.
          </h2>
          <div className="mt-6 max-w-[36rem] space-y-4 text-[1.08rem] leading-[1.75]">
            <p>
              At Resin &amp; Radiance, we believe that the most meaningful gifts are the ones that feel
              personal. Every creation is inspired by colour, creativity, and the little details that make a
              moment special.
            </p>
            <p>
              From delicate resin jewellery to festive keepsakes and customized gifts, our goal is to turn
              beautiful ideas into treasures you can cherish or share with someone you love.
            </p>
            <p>Every design begins with an idea and is shaped with care, creativity, and attention to detail.</p>
          </div>
          <a href="#custom" onClick={anchorHandler('custom')} className="btn btn-primary mt-8 px-7">
            Let&rsquo;s Create Something Special
          </a>
        </Reveal>
      </div>
    </section>
  )
}
