import Picture from '../components/Picture.jsx'
import GoldFlecks from '../components/GoldFlecks.jsx'
import { anchorHandler } from '../lib/scroll.js'

const heroFlecks = [
  { top: '6%', left: '44%', size: 14, rotate: 20 },
  { top: '15%', right: '3%', size: 10, rotate: -30, opacity: 0.7 },
  { top: '36%', left: '30%', size: 8, rotate: 60, opacity: 0.6 },
  { top: '58%', right: '1%', size: 16, rotate: 10 },
  { bottom: '30%', left: '45%', size: 7, rotate: -15, opacity: 0.7 },
  { bottom: '6%', right: '24%', size: 12, rotate: 45, opacity: 0.8 },
  { top: '2%', left: '14%', size: 9, rotate: -50, opacity: 0.55, color: '#c98291' },
]

function Sprig({ className = '' }) {
  return (
    <svg viewBox="0 0 80 160" className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <path d="M40 158C38 120 42 80 52 6" />
        <path d="M41 128c-10-6-18-16-20-28 10 4 18 14 20 28Z" />
        <path d="M42 104c10-6 16-16 17-27-9 5-15 15-17 27Z" />
        <path d="M44 80c-9-6-14-15-15-25 8 4 13 13 15 25Z" />
        <path d="M47 58c8-6 12-14 13-23-7 4-11 12-13 23Z" />
        <path d="M50 34c-6-5-9-11-9-18 6 3 9 10 9 18Z" />
      </g>
    </svg>
  )
}

function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-[1/0.98] w-full max-w-[34rem]">
      {/* soft translucent glow, like light through resin */}
      <div aria-hidden="true" className="absolute left-[18%] top-[10%] h-[78%] w-[72%] rounded-full bg-blush/70 blur-3xl" />

      <Sprig className="absolute bottom-[10%] right-[-2%] w-[17%] text-gold/80" />

      {/* gold outline arch, offset behind the photo */}
      <div
        aria-hidden="true"
        className="arch absolute right-[5%] top-0 aspect-[4/5] w-[58%] border border-gold/80"
      />

      {/* main arch photo: fills from the bottom like a resin pour */}
      <div className="arch hero-pour absolute right-[10%] top-[4.5%] aspect-[4/5] w-[58%] overflow-hidden bg-blush shadow-photo">
        <Picture
          image="bangles-purple-gold-leaf"
          alt="Purple resin bangles with gold leaf flakes on a marble tray"
          priority
          sizes="(min-width: 1024px) 320px, 58vw"
          className="h-full w-full object-cover"
        />
      </div>

      {/* round frame for the round thali */}
      <div
        className="hero-rise absolute bottom-[1%] left-[1%] aspect-square w-[43%] overflow-hidden rounded-full bg-blush shadow-photo ring-[6px] ring-ivory"
        style={{ animationDelay: '0.55s' }}
      >
        <Picture
          image="pooja-thali-pink-gold"
          alt="Blush-pink resin pooja thali with gold flakes and pearls"
          priority
          sizes="(min-width: 1024px) 240px, 43vw"
          className="h-full w-full object-cover"
        />
      </div>

      {/* small tilted card */}
      <div
        className="hero-rise absolute left-[6%] top-[7%] aspect-[3/4] w-[25%] -rotate-[5deg] overflow-hidden rounded-[1.1rem] bg-blush shadow-photo ring-4 ring-ivory"
        style={{ animationDelay: '0.75s' }}
      >
        <Picture
          image="keychain-floral-heart"
          alt="Heart-shaped floral resin keychain"
          sizes="(min-width: 1024px) 140px, 25vw"
          position="50% 60%"
          className="h-full w-full object-cover"
        />
      </div>

      <GoldFlecks flecks={heroFlecks} drift />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-page grid items-center gap-10 pb-16 pt-8 sm:pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-14">
        <div className="lg:col-span-6 xl:col-span-6">
          <h1
            id="hero-title"
            className="hero-rise max-w-[13ch] text-[2.55rem] leading-[1.04] tracking-[-0.02em] sm:text-[3.4rem] lg:text-[3.6rem] xl:text-[4.1rem]"
          >
            Little Pieces of Art, Made to Treasure Forever.
          </h1>
          <p
            className="hero-rise mt-5 max-w-[34rem] text-[1.1rem] leading-relaxed sm:text-[1.2rem]"
            style={{ animationDelay: '0.12s' }}
          >
            Discover handcrafted resin jewellery, elegant festive creations, and personalized gifts made
            with love, creativity, and a touch of radiance.
          </p>
          <div
            className="hero-rise mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: '0.24s' }}
          >
            <a href="#featured" onClick={anchorHandler('featured')} className="btn btn-primary px-7">
              Explore Our Creations
            </a>
            <a href="#custom" onClick={anchorHandler('custom')} className="btn btn-outline px-7">
              Create a Custom Gift
            </a>
          </div>
          <ul
            className="hero-rise mt-7 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[14.5px] text-cocoa/90"
            style={{ animationDelay: '0.36s' }}
            aria-label="What we stand for"
          >
            {['Handmade with love', 'Thoughtfully crafted', 'Made for your special moments'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-[5px] w-[5px] rotate-45 bg-gold" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 xl:col-span-6">
          <HeroCollage />
        </div>
      </div>
    </section>
  )
}
