import { messages, site } from '../config/site.js'

export const WHATSAPP_NUMBER = site.whatsappNumber

/** Build a wa.me link with a correctly encoded prefilled message. */
export function whatsappUrl(message = messages.contact) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Open WhatsApp in a new tab (for places where a link element can't be used). */
export function openWhatsApp(message) {
  window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
}

/** The order message for one product. */
export function productMessage(productName) {
  return messages.product.replace('{product}', productName)
}

export const telUrl = `tel:${site.phone}`
