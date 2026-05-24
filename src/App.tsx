import { useState, useMemo } from 'react'
import type { GamePhase, RoundResult, Guest } from './lib/types'
import { getTodayRounds } from './data/quotes'
import { HomeScreen } from './components/HomeScreen'
import { ReactPhase } from './components/ReactPhase'
import { GuessPhase } from './components/GuessPhase'
import { RevealPhase } from './components/RevealPhase'
import { EpisodeCard } from './components/EpisodeCard'
import { PersonaCard } from './components/PersonaCard'
import { ProgressDots } from './components/ProgressDots'

const TOTAL_ROUNDS = 5

export default function App() {
  const [phase, setPhase] = useState<GamePhase>('home')
  const [currentRound, setCurrentRound] = useState(0)
  const [results, setResults] = useState<RoundResult[]>([])
  const [currentAgreed, setCurrentAgreed] = useState(false)
  const [rounds] = useState(() => getTodayRounds())

  const round = rounds[currentRound]

  const guessOptions = useMemo<[Guest, Guest]>(() => {
    if (!round) return [{ id: '', name: '', role: '' }, { id: '', name: '', role: '' }]
    const pair: [Guest, Guest] = [round.quote.guest, round.decoy]
    return Math.random() > 0.5 ? pair : [pair[1], pair[0]]
  }, [round])

  function handleStart() {
    setPhase('react')
    setCurrentRound(0)
    setResults([])
  }

  function handleReact(agreed: boolean) {
    setCurrentAgreed(agreed)
    setPhase('guess')
  }

  function handleGuess(guestId: string) {
    const correct = guestId === round.quote.guest.id
    setResults((prev) => [
      ...prev,
      {
        quoteId: round.quote.id,
        agreed: currentAgreed,
        guessedCorrectly: correct,
        guessedGuestId: guestId,
      },
    ])
    setPhase('reveal')
  }

  function handleRevealContinue() {
    setPhase('episode')
  }

  function handleNextRound() {
    if (currentRound + 1 >= TOTAL_ROUNDS) {
      setPhase('persona')
    } else {
      setCurrentRound((r) => r + 1)
      setPhase('react')
    }
  }

  function handlePlayAgain() {
    setPhase('home')
    setCurrentRound(0)
    setResults([])
  }

  const lastResult = results[results.length - 1]
  const guessedGuest =
    lastResult &&
    [round?.quote.guest, round?.decoy].find(
      (g) => g?.id === lastResult.guessedGuestId,
    )

  return (
    <>
      {phase !== 'home' && phase !== 'persona' && (
        <ProgressDots current={currentRound} total={TOTAL_ROUNDS} results={results} />
      )}

      {phase === 'home' && <HomeScreen onStart={handleStart} />}

      {phase === 'react' && round && (
        <ReactPhase quoteText={round.quote.text} onReact={handleReact} />
      )}

      {phase === 'guess' && round && (
        <GuessPhase options={guessOptions} onGuess={handleGuess} />
      )}

      {phase === 'reveal' && round && lastResult && (
        <RevealPhase
          quote={round.quote}
          guessedCorrectly={lastResult.guessedCorrectly}
          guessedGuest={guessedGuest}
          onContinue={handleRevealContinue}
        />
      )}

      {phase === 'episode' && round && (
        <EpisodeCard
          quote={round.quote}
          isLastRound={currentRound + 1 >= TOTAL_ROUNDS}
          onContinue={handleNextRound}
        />
      )}

      {phase === 'persona' && (
        <PersonaCard results={results} onPlayAgain={handlePlayAgain} />
      )}
    </>
  )
}
