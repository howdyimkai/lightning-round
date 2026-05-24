import type { Persona, PersonaInfo } from './types'

export const PERSONAS: Record<Persona, PersonaInfo> = {
  oracle: {
    name: 'Oracle',
    threshold: 0.8,
    color: 'oracle',
    icon: '◎',
    description: 'You read between the lines. Product intuition runs deep.',
  },
  contrarian: {
    name: 'Contrarian',
    threshold: 0.6,
    color: 'contrarian',
    icon: '△',
    description: 'You challenge assumptions. That tension is a feature.',
  },
  curious: {
    name: 'Curious One',
    threshold: 0.4,
    color: 'curious',
    icon: '◇',
    description: 'You follow the thread. Every question opens a door.',
  },
  beginner: {
    name: "Beginner's Mind",
    threshold: 0,
    color: 'beginner',
    icon: '🌱',
    description: 'You see without bias. The best place to start is exactly where you are.',
  },
}

export function getPersona(correctCount: number, totalRounds: number): Persona {
  const ratio = correctCount / totalRounds
  if (ratio >= 0.8) return 'oracle'
  if (ratio >= 0.6) return 'contrarian'
  if (ratio >= 0.4) return 'curious'
  return 'beginner'
}
