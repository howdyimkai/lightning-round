interface HomeScreenProps {
  onStart: () => void
}

export function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
      <span className="text-5xl mb-6">⚡</span>
      <h1 className="text-3xl font-bold text-text mb-2">Lightning Round</h1>
      <p className="text-text-muted text-center max-w-xs mb-2">
        5 quotes. 5 guesses. How well do you know Lenny's guests?
      </p>
      <p className="text-text-muted text-sm mb-10">A daily product taste game</p>

      <button
        onClick={onStart}
        className="bg-sage hover:bg-sage-dark text-white font-semibold py-4 px-12 rounded-full transition-colors text-lg"
      >
        Play today's round
      </button>
    </div>
  )
}
