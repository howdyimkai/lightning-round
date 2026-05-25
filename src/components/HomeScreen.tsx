interface HomeScreenProps {
  onStart: () => void
}

export function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col">
      {/* Full-bleed logo banner */}
      <img
        src="/imgs/Lennyslogobadge.png"
        alt="Lenny's Lightning Round"
        className="w-full pt-6 px-4"
      />

      {/* Content */}
      <div className="flex flex-col items-center px-6 pt-10 pb-12">
        <h2 className="text-2xl font-semibold text-text text-center mb-2">
          5 real quotes. 5 guesses.
        </h2>
        <h3 className="text-xl text-text-muted text-center max-w-xs mb-10">
          Can you trust your gut?
        </h3>

        <button
          onClick={onStart}
          className="bg-sage hover:bg-sage-dark text-white font-semibold py-4 px-12 rounded-full transition-colors text-lg"
        >
          Test your product instinct →
        </button>
      </div>
    </div>
  )
}
