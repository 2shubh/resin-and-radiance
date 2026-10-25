// "From Little Details to Lasting Treasures" videos.
//
// To add your videos, put the files in public/videos/ with these names
// (or change `src` to match your file names). Files in public/videos are
// picked up when you run `npm run dev` or `npm run build`, and the player
// appears for each one. Until then, a styled "film coming soon" card is shown
// instead of a broken player.
//
// Tips: MP4 (H.264) plays on every phone. Portrait phone recordings look best.
// Keep each file small (under ~15 MB) so the page stays fast on mobile data.
// `poster` is the photo shown before the video plays (a name from data/images.js).
// A full web address (https://...) also works for `src` if a video is hosted elsewhere.

export const videos = [
  {
    id: 'resin-making',
    src: 'videos/resin-making.mp4',
    poster: 'jewellery-gift-box',
    posterPosition: '58% 50%',
    title: 'Inside the studio',
    caption: 'A closer look at how a piece is poured, layered and finished by hand.',
  },
  {
    id: 'florals-and-foil',
    src: 'videos/florals-and-foil.mp4',
    poster: 'pooja-thali-pink-gold',
    title: 'Florals and foil',
    caption: 'Flowers, pearls and gold leaf, placed one detail at a time.',
  },
  {
    id: 'finishing-touch',
    src: 'videos/finishing-touch.mp4',
    poster: 'bangles-purple-silver-leaf-worn',
    title: 'The finishing touch',
    caption: 'Demoulding, polishing and the final shine.',
  },
]
