import type { Quote, Guest } from '../lib/types'

interface RevealPhaseProps {
  quote: Quote
  guessedCorrectly: boolean
  guessedGuest: Guest | undefined
  onContinue: () => void
}

export function RevealPhase({
  quote,
  guessedCorrectly,
  guessedGuest,
  onContinue,
}: RevealPhaseProps) {
  return (
    <div className="flex-1 flex flex-col px-6 py-8">
      <h2 className="text-xs text-text-muted uppercase tracking-wider text-center mb-6">
        The Reveal
      </h2>

      <div className="bg-cream-dark rounded-2xl p-6 mb-6 text-center">
        <div className="w-16 h-16 rounded-full bg-border mx-auto mb-3 flex items-center justify-center text-text-muted text-xl font-semibold">
          {quote.guest.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2)}
        </div>
        <h3 className="text-xl font-semibold text-text">{quote.guest.name}</h3>
        <p className="text-text-muted text-sm mb-3">{quote.guest.role}</p>

        <div
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium ${
            guessedCorrectly
              ? 'bg-sage-light text-sage-dark'
              : 'bg-rose-light text-text'
          }`}
        >
          {guessedCorrectly ? '✓ Correct' : '✗ Nice try'}
        </div>
        {!guessedCorrectly && guessedGuest && (
          <p className="text-text-muted text-sm mt-2">
            You guessed {guessedGuest.name}
          </p>
        )}
      </div>

      <h2 className="text-xs text-text-muted uppercase tracking-wider text-center mb-3">
        The Community
      </h2>
      <div className="bg-cream-dark rounded-2xl p-4 mb-6 text-center">
        <p className="text-sage font-medium text-sm">
          Be one of the first to play this card.
        </p>
        <p className="text-text-muted text-xs">
          Stats appear as more designers respond.
        </p>
      </div>

      <h2 className="text-xs text-text-muted uppercase tracking-wider text-center mb-3">
        In Context
      </h2>
      <div className="bg-cream-dark rounded-2xl p-6 mb-8">
        <div className="border-l-2 border-border pl-4">
          <p className="text-text text-sm leading-relaxed italic">
            {quote.episodeContext} — {quote.guest.name} said: "{quote.text}"
          </p>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="bg-sage hover:bg-sage-dark text-white font-semibold py-4 rounded-full transition-colors mt-auto"
      >
        See the episode →
      </button>
    </div>
  )
}
