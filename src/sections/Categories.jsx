import Picture from '../components/Picture.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { categories } from '../data/categories.js'

export default function Categories({ onSelect }) {
  return (
    <section id="collections" aria-labelledby="collections-title" className="py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionHeader
          id="collections-title"
          title="Find Something Beautiful"
          lede="Handcrafted treasures for every mood, moment, and celebration."
        />

        <Reveal
          as="ul"
          stagger
          className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-8 lg:mt-12 lg:grid-cols-6 lg:gap-x-6"
        >
          {categories.map((category, i) => (
            <li key={category.id} style={{ '--i': i }}>
              <a
                href="#featured"
                onClick={(event) => {
                  event.preventDefault()
                  onSelect(category.id)
                }}
                className="group flex flex-col items-center rounded-[1.25rem] text-center"
              >
                <span className="block aspect-square w-full max-w-[11.5rem] overflow-hidden rounded-full p-1.5 ring-1 ring-gold/55 transition-[box-shadow] duration-300 group-hover:ring-2 group-hover:ring-gold">
                  <span className="block h-full w-full overflow-hidden rounded-full bg-blush">
                    <Picture
                      image={category.image}
                      alt={category.imageAlt}
                      position={category.imagePosition}
                      sizes="(min-width: 1024px) 184px, (min-width: 640px) 30vw, 45vw"
                      className="h-full w-full object-cover transition-[scale] duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </span>
                </span>
                <h3 className="mt-4 text-[1.16rem] sm:text-[1.22rem]">{category.name}</h3>
                <p className="mt-1 max-w-[15rem] text-[14.5px] leading-snug">{category.description}</p>
                <span className="mt-2.5 text-[14.5px] font-semibold text-burgundy underline decoration-gold decoration-1 underline-offset-[6px] transition-[text-decoration-color] group-hover:decoration-burgundy">
                  Explore Collection
                </span>
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
