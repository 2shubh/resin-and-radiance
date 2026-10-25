import { useState } from 'react'
import FilterChips from '../components/FilterChips.jsx'
import Lightbox from '../components/Lightbox.jsx'
import Picture from '../components/Picture.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { galleryFilters, galleryItems } from '../data/gallery.js'

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [openIndex, setOpenIndex] = useState(null)
  const items = filter === 'all' ? galleryItems : galleryItems.filter((item) => item.tags.includes(filter))

  const navigate = (step) => setOpenIndex((i) => (i === null ? i : (i + step + items.length) % items.length))

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionHeader id="gallery-title" title="A Gallery of Little Wonders" />

        <FilterChips
          className="mt-7"
          label="Filter gallery photos"
          options={galleryFilters}
          value={filter}
          onChange={(id) => {
            setFilter(id)
            setOpenIndex(null)
          }}
        />

        <Reveal key={filter} className="mt-8">
          <ul className="fade-in columns-2 gap-3 sm:gap-5 md:columns-3 lg:gap-6">
            {items.map((item, i) => (
              <li key={item.image} className="mb-3 break-inside-avoid sm:mb-5 lg:mb-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-[1rem] bg-blush sm:rounded-[1.25rem]"
                  aria-label={`View larger photo: ${item.title}`}
                >
                  <Picture
                    image={item.image}
                    alt={item.alt}
                    sizes="(min-width: 768px) 32vw, 48vw"
                    className="h-auto w-full transition-[scale] duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 bg-linear-to-t from-wine/75 to-transparent px-3 pb-2.5 pt-8 text-left text-[13.5px] font-medium text-ivory opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    {item.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Lightbox items={items} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={navigate} />
    </section>
  )
}
