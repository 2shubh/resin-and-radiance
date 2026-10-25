import { whatsappUrl } from '../lib/whatsapp.js'

/** A link that opens WhatsApp in a new tab with a prefilled message. */
export default function WhatsAppLink({ message, className = '', children, label, ...rest }) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
      {...rest}
    >
      {children}
    </a>
  )
}
