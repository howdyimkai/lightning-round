interface HomeScreenProps {
  onStart: () => void
}

export function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col">
      {/* Full-bleed logo banner */}
      <img
        src="/imgs/lennyslogo.png"
        alt="Lenny's Lightning Round"
        className="w-full pt-6 px-4"
      />

      {/* Content */}
      <div className="flex flex-col items-center px-6 pt-10 pb-12">
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
    </div>
  )
}
