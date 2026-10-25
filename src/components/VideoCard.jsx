import { useState } from 'react'
import Picture, { resolveImage } from './Picture.jsx'
import Icon from './Icon.jsx'

const BASE = import.meta.env.BASE_URL

/* global __VIDEO_FILES__ */
// File names found in public/videos when the site was built (see vite.config.js).
const builtVideos = typeof __VIDEO_FILES__ !== 'undefined' ? __VIDEO_FILES__ : []

function isAvailable(src) {
  if (/^https?:\/\//.test(src)) return true // hosted elsewhere
  return builtVideos.includes(src.split('/').pop())
}

function saveDataOn() {
  return typeof navigator !== 'undefined' && Boolean(navigator.connection?.saveData)
}

export default function VideoCard({ video, sizes = '(min-width: 1024px) 40vw, 100vw', className = '' }) {
  const url = /^https?:\/\//.test(video.src) ? video.src : `${BASE}${video.src.replace(/^\//, '')}`
  const [status, setStatus] = useState(isAvailable(video.src) ? 'ready' : 'missing')
  const poster = resolveImage(video.poster, 800).src

  return (
    <figure className={className}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-wine shadow-photo">
        {status === 'ready' ? (
          <video
            className="absolute inset-0 h-full w-full bg-wine object-cover"
            controls
            playsInline
            preload={saveDataOn() ? 'none' : 'metadata'}
            poster={poster}
            aria-label={video.title}
            onError={() => setStatus('missing')}
          >
            <source src={url} type="video/mp4" onError={() => setStatus('missing')} />
          </video>
        ) : (
          <>
            <Picture
              image={video.poster}
              alt=""
              position={video.posterPosition}
              sizes={sizes}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-wine/80 via-wine/10 to-transparent" />
            {status === 'missing' ? (
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-ivory/92 px-3 py-1 text-[12.5px] font-medium text-burgundy sm:text-[13px]">
                  <Icon name="film" size={15} className="hidden sm:block" />
                  Film coming soon
                </span>
                {import.meta.env.DEV ? (
                  <p className="mt-3 rounded-lg border border-dashed border-ivory/70 bg-wine/70 px-3 py-2 text-[12px] leading-snug text-ivory">
                    Dev note (not shown on the live site): add <code>public/{video.src}</code> and it
                    plays here automatically.
                  </p>
                ) : null}
              </div>
            ) : null}
          </>
        )}
      </div>
      <figcaption className="mt-4">
        <span className="block font-display text-[1.2rem] font-semibold leading-tight text-burgundy">
          {video.title}
        </span>
        <span className="mt-1 block text-[15px] leading-relaxed">{video.caption}</span>
      </figcaption>
    </figure>
  )
}
