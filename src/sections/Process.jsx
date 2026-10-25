import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import VideoCard from '../components/VideoCard.jsx'
import { videos } from '../data/videos.js'
import { anchorHandler } from '../lib/scroll.js'

export default function Process() {
  const [featured, ...supporting] = videos

  return (
    <section id="process" aria-labelledby="process-title" className="bg-shell py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionHeader
          id="process-title"
          title="From Little Details to Lasting Treasures"
          lede="See the creativity, patience, and love behind every piece."
        />

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <VideoCard video={featured} sizes="(min-width: 1024px) 560px, 100vw" />
          </Reveal>

          <div className="flex flex-col gap-8 lg:col-span-6">
            <Reveal stagger className="grid grid-cols-2 gap-4 sm:gap-6">
              {supporting.map((video, i) => (
                <div key={video.id} style={{ '--i': i }}>
                  <VideoCard video={video} sizes="(min-width: 1024px) 270px, 46vw" />
                </div>
              ))}
            </Reveal>

            <Reveal className="rounded-[1.5rem] border border-line bg-ivory p-6 sm:p-8">
              <h3 className="text-[1.45rem] sm:text-[1.65rem]">Want Something Made Just for You?</h3>
              <p className="mt-2 max-w-[30rem] text-[15.5px] leading-relaxed">
                Choose the colours, florals and finish, and we&rsquo;ll talk through what&rsquo;s possible.
              </p>
              <a href="#custom" onClick={anchorHandler('custom')} className="btn btn-primary mt-5 px-6">
                Start a Custom Order
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
