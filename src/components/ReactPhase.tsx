interface ReactPhaseProps {
  quoteText: string
  onReact: (agreed: boolean) => void
}

export function ReactPhase({ quoteText, onReact }: ReactPhaseProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
      <h1 className="text-2xl font-semibold text-text mb-2">What's your take?</h1>
      <p className="text-text-muted text-sm mb-8">
        Before we reveal who said it, plant your own flag.
      </p>

      <div className="bg-cream-dark rounded-2xl p-6 mb-10 w-full">
        <p className="text-text text-base leading-relaxed text-center italic">
          "{quoteText}"
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <button
          onClick={() => onReact(true)}
          className="bg-cream-dark hover:bg-border rounded-2xl py-5 transition-colors"
        >
          <span className="text-lg font-semibold text-text block">Agree</span>
          <span className="text-xs text-text-muted uppercase tracking-wider">
            I'm with them
          </span>
        </button>
        <button
          onClick={() => onReact(false)}
          className="bg-cream-dark hover:bg-border rounded-2xl py-5 transition-colors"
        >
          <span className="text-lg font-semibold text-text block">Disagree</span>
          <span className="text-xs text-text-muted uppercase tracking-wider">
            Not quite
          </span>
        </button>
      </div>
    </div>
  )
}
