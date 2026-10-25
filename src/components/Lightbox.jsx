import { useEffect, useRef } from 'react'
import { resolveImage } from './Picture.jsx'
import Icon from './Icon.jsx'

/**
 * Full-screen photo viewer built on <dialog>: focus stays inside while open,
 * Esc closes it, arrow keys move between photos, clicking outside closes it.
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const dialogRef = useRef(null)
  const isOpen = index !== null && items[index] !== undefined
  const item = isOpen ? items[index] : null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = 'hidden'
    } else if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [])

  function handleClose() {
    document.documentElement.style.overflow = ''
    onClose()
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowRight') onNavigate(1)
    if (event.key === 'ArrowLeft') onNavigate(-1)
  }

  function handleClick(event) {
    if (event.target === event.currentTarget || event.target.dataset.backdrop) {
      dialogRef.current?.close()
    }
  }

  const image = item ? resolveImage(item.image) : null

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={item ? item.title : 'Photo viewer'}
      onClose={handleClose}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {item ? (
        <div data-backdrop="true" className="relative flex h-full w-full items-center justify-center px-4 py-20 sm:px-20">
          <button
            type="button"
            autoFocus
            onClick={() => dialogRef.current?.close()}
            className="absolute right-3 top-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory/12 text-ivory transition hover:bg-ivory/25 sm:right-6 sm:top-6"
            aria-label="Close photo"
          >
            <Icon name="close" size={24} />
          </button>

          <figure key={index} data-backdrop="true" className="lightbox-figure flex max-h-full flex-col items-center">
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes="(min-width: 1024px) 70vw, 100vw"
              width={image.width}
              height={image.height}
              alt={item.alt}
              className="h-auto max-h-[72dvh] w-auto max-w-full rounded-2xl object-contain shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)]"
            />
            <figcaption className="mt-4 text-center text-[15px] text-ivory/90">
              <span className="font-display text-lg text-ivory">{item.title}</span>
              <span className="mt-0.5 block text-[13px] text-ivory/65">
                Photo {index + 1} of {items.length}
              </span>
            </figcaption>
          </figure>

          {items.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => onNavigate(-1)}
                className="absolute bottom-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory/12 text-ivory transition hover:bg-ivory/25 sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2"
                aria-label="Previous photo"
              >
                <Icon name="chevronLeft" size={26} />
              </button>
              <button
                type="button"
                onClick={() => onNavigate(1)}
                className="absolute bottom-4 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory/12 text-ivory transition hover:bg-ivory/25 sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2"
                aria-label="Next photo"
              >
                <Icon name="chevronRight" size={26} />
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </dialog>
  )
}
