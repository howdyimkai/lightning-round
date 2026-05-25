import type { Guest } from '../lib/types'
import { Avatar } from './Avatar'

interface GuessPhaseProps {
  options: [Guest, Guest]
  onGuess: (guestId: string) => void
}

export function GuessPhase({ options, onGuess }: GuessPhaseProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
      <h1 className="text-2xl font-semibold text-text mb-2">Who said it?</h1>
      <p className="text-text-muted text-sm mb-10">Pick the person behind the quote.</p>

      <div className="flex flex-col gap-3 w-full">
        {options.map((guest) => (
          <button
            key={guest.id}
            onClick={() => onGuess(guest.id)}
            className="bg-cream-dark hover:bg-border rounded-2xl p-5 flex items-center gap-4 transition-colors text-left"
          >
            <Avatar name={guest.name} photo={guest.photo} size="lg" />
            <div>
              <span className="text-text font-semibold block">{guest.name}</span>
              <span className="text-text-muted text-sm">{guest.role}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
