// Featured Creations.
//
// To add a product, copy one block and change it.
// - name:        shown on the card and inserted into the WhatsApp order message
// - description: one or two short sentences
// - price:       a confirmed price as text, e.g. '₹499' or '₹249 for a set of 4'.
//                Leave it as null and the card shows "Price on request".
// - badge:       optional small label on the photo, e.g. 'Handmade' (or null)
// - categories:  ids from categories.js, used by the filters
// - image:       a name from data/images.js, or a file in public/images,
//                e.g. 'images/my-new-photo.jpg'
// - imagePosition: optional, which part of the photo to keep when it is cropped

export const products = [
  {
    id: 'purple-floral-bangles',
    name: 'Purple Floral Resin Bangles',
    description: 'Deep violet resin with floral inclusions, finished with gold or silver leaf.',
    price: null,
    badge: 'Handmade',
    categories: ['bangles', 'jewellery'],
    image: 'bangles-purple-gold-leaf',
    imageAlt: 'Four purple resin bangles with gold leaf flakes on a marble tray',
  },
  {
    id: 'jewellery-gift-box',
    name: 'Handmade Resin Jewellery Gift Box',
    description: 'Floral earrings, a keychain, a pendant, a charm bracelet and a tealight holder, boxed together.',
    price: null,
    badge: 'Gift box',
    categories: ['jewellery', 'gifts', 'festive'],
    image: 'jewellery-gift-box',
    imagePosition: '36% 50%',
    imageAlt: 'Gift box of floral resin earrings, keychain, pendant, charm bracelet and tealight holder',
  },
  {
    id: 'elegant-pooja-thali',
    name: 'Elegant Pooja Thali',
    description: 'Blush-pink resin with gold flakes, pearls, a Ganesha motif and three gold-tone bowls.',
    price: null,
    badge: 'Festive',
    categories: ['pooja', 'festive'],
    image: 'pooja-thali-pink-gold',
    imageAlt: 'Blush-pink resin pooja thali with gold flakes, pearls, a Ganesha motif and gold bowls',
  },
  {
    id: 'festive-resin-bangles',
    name: 'Festive Resin Bangles',
    description: 'Red, saffron and white bangles inspired by haldi, kumkum and akshat, with golden flakes.',
    price: null,
    badge: 'Festive',
    categories: ['bangles', 'festive'],
    image: 'bangles-festive-red-gold',
    imageAlt: 'Set of red, saffron and white resin bangles with golden flakes on a brass plate',
  },
  {
    id: 'personalized-resin-gifts',
    name: 'Personalized Resin Gifts',
    description: 'Floral keychains and little gifts. Ask about adding a name, an initial or your colours.',
    price: null,
    badge: 'Customizable',
    categories: ['gifts'],
    image: 'keychain-floral-heart',
    imagePosition: '50% 68%',
    imageAlt: 'Heart-shaped resin keychain with pink flowers and gold flakes',
  },
  {
    id: 'custom-handmade-keepsakes',
    name: 'Custom Handmade Keepsakes',
    description: 'Frames, coasters and rings with florals and gold flakes. Tell us the moment you want to keep.',
    price: null,
    badge: 'Customizable',
    categories: ['keepsakes', 'gifts'],
    image: 'keepsakes-frame-coaster-rings',
    imageAlt: 'Floral resin photo frame with a coaster, rings and a heart keychain',
  },
]
