import { imageManifest } from '../data/images.js'

const BASE = import.meta.env.BASE_URL

/**
 * Resolve an image reference to src/srcSet/size.
 * - A manifest name ('pooja-thali-pink-gold') uses the exported widths.
 * - A path with an extension ('images/my-photo.jpg') is used as-is.
 */
export function resolveImage(image, preferredWidth) {
  const entry = imageManifest[image]
  if (!entry) {
    const path = image.replace(/^\//, '')
    return { src: `${BASE}${path}`, srcSet: undefined, width: undefined, height: undefined }
  }
  const largest = entry.widths[entry.widths.length - 1]
  const pick =
    (preferredWidth && entry.widths.find((w) => w >= preferredWidth)) || largest
  return {
    src: `${BASE}images/${image}-${pick}.webp`,
    srcSet: entry.widths.map((w) => `${BASE}images/${image}-${w}.webp ${w}w`).join(', '),
    width: entry.w,
    height: entry.h,
  }
}

export default function Picture({
  image,
  alt,
  sizes = '100vw',
  className = '',
  position,
  priority = false,
  width,
  height,
}) {
  const resolved = resolveImage(image)
  return (
    <img
      src={resolved.src}
      srcSet={resolved.srcSet}
      sizes={resolved.srcSet ? sizes : undefined}
      width={width ?? resolved.width}
      height={height ?? resolved.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
      className={className}
      style={position ? { objectPosition: position } : undefined}
    />
  )
}
