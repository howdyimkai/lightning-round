interface ProgressDotsProps {
  current: number
  total: number
  results: Array<{ guessedCorrectly: boolean } | undefined>
}

export function ProgressDots({ current, total, results }: ProgressDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <span className="text-sm text-text-muted font-medium">
        Round {current + 1} of {total}
      </span>
      <div className="flex gap-1.5 ml-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i < current
                ? results[i]?.guessedCorrectly
                  ? 'bg-sage'
                  : 'bg-rose-dark'
                : i === current
                  ? 'bg-text'
                  : 'bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
