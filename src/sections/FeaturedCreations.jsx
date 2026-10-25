import FilterChips from '../components/FilterChips.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { categories } from '../data/categories.js'
import { products } from '../data/products.js'

const filters = [{ id: 'all', label: 'All' }, ...categories.map((c) => ({ id: c.id, label: c.filterLabel }))]

export default function FeaturedCreations({ filter, onFilterChange }) {
  const visible = filter === 'all' ? products : products.filter((p) => p.categories.includes(filter))
  const activeLabel = filters.find((f) => f.id === filter)?.label ?? 'All'

  return (
    <section id="featured" aria-labelledby="featured-title" className="bg-shell py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionHeader
          id="featured-title"
          title="Made with Love, Chosen by You"
          lede="Every piece tells a story. Find a little something that feels uniquely yours."
        />

        <FilterChips
          className="mt-8"
          label="Filter creations by collection"
          options={filters}
          value={filter}
          onChange={onFilterChange}
        />
        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'creation' : 'creations'} in {activeLabel}
        </p>

        <Reveal
          as="ul"
          stagger
          key={filter}
          className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {visible.map((product, i) => (
            <li key={product.id} style={{ '--i': i }}>
              <ProductCard product={product} />
            </li>
          ))}
        </Reveal>

        <p className="mt-10 text-[15px]">
          Prices vary with design and customization. Tap <span className="font-semibold text-burgundy">Place Order</span>{' '}
          and we&rsquo;ll share current prices and available designs on WhatsApp.
        </p>
      </div>
    </section>
  )
}
