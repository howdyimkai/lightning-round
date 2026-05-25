export interface Guest {
  id: string
  name: string
  role: string
  photo?: string
}

export interface Quote {
  id: string
  text: string
  guest: Guest
  episodeTitle: string
  episodeContext: string
  episodeDescription: string
  listenLinks: {
    spotify?: string
    apple?: string
    youtube?: string
    lenny?: string
  }
}

export interface RoundPrompt {
  quote: Quote
  decoy: Guest
}

export type Persona = 'oracle' | 'contrarian' | 'curious' | 'beginner'

export interface PersonaInfo {
  name: string
  threshold: number
  color: string
  icon: string
  description: string
}

export type GamePhase =
  | 'home'
  | 'react'
  | 'guess'
  | 'reveal'
  | 'episode'
  | 'persona'

export interface RoundResult {
  quoteId: string
  agreed: boolean
  guessedCorrectly: boolean
  guessedGuestId: string
}

export interface GameState {
  sessionId: string
  currentRound: number
  phase: GamePhase
  rounds: RoundPrompt[]
  results: RoundResult[]
  todayDate: string
}
