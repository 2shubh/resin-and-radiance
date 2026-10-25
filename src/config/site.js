// Everything about the business that appears on the site lives here.
// Change a value once and it updates everywhere.

export const site = {
  name: 'Pratibha',
  tagline: 'Handmade resin art, jewellery and custom gifts.',

  // WhatsApp number in international format: country code + number, no "+" or spaces.
  whatsappNumber: '918299616658',
  // Number used for the "Call" buttons (tel: link).
  phone: '+918299616658',
  // How the number is written on the page.
  phoneDisplay: '+91 82996 16658',

  // Social profiles: paste the full URL to show the icon in the footer.
  // Leave a value empty ('') and that icon is not shown.
  social: {
    instagram: '',
    facebook: '',
    youtube: '',
  },
}

// Prefilled WhatsApp messages. {product} is replaced with the product name.
export const messages = {
  product:
    'Hi Pratibha! I am interested in ordering {product}. Please share the price, available designs, customization options, and delivery details.',
  custom:
    'Hi Pratibha! I would like to discuss a customized resin art order. I have an idea in mind and would love to know the available options and pricing.',
  contact: 'Hi Pratibha! I would like to know more about your creations.',
  order:
    'Hi Pratibha! I would like to place an order. Could you share the designs that are available right now?',
  floating:
    'Hi Pratibha! I found your website and would love to know more about your handmade creations.',
  faq: 'Hi Pratibha! I have a question about your creations.',
}

// Items in the top navigation, in order. Each id matches a section on the page.
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'collections', label: 'Collections' },
  { id: 'about', label: 'About' },
  { id: 'process', label: 'Our Process' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

// Every section id on the page, top to bottom, and which nav item it belongs to.
export const sectionOrder = [
  'home',
  'collections',
  'featured',
  'about',
  'process',
  'custom',
  'gallery',
  'why-us',
  'reviews',
  'faq',
  'contact',
]

export const sectionToNav = {
  home: 'home',
  collections: 'collections',
  featured: 'collections',
  about: 'about',
  process: 'process',
  gallery: 'gallery',
  contact: 'contact',
}
