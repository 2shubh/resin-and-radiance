/** A row of toggle buttons; scrolls sideways on small screens. */
export default function FilterChips({ options, value, onChange, label, className = '' }) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className="chip shrink-0"
          aria-pressed={value === option.id}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
