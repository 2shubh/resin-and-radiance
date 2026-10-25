export default function AnnouncementBar() {
  return (
    <div className="bg-burgundy text-ivory">
      <p className="flex min-h-9 items-center justify-center gap-x-2 whitespace-nowrap px-3 py-1.5 text-center text-[12.5px] sm:gap-x-2.5 sm:text-[14px]">
        <span>Handmade with love ✨</span>
        <span aria-hidden="true" className="text-gold">
          |
        </span>
        <span>Custom gifts made just for you</span>
      </p>
    </div>
  )
}
