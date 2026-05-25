import { useRef } from 'react'
import { getPersona, PERSONAS } from '../lib/personas'
import type { RoundResult } from '../lib/types'

interface PersonaCardProps {
  results: RoundResult[]
  onPlayAgain: () => void
}

export function PersonaCard({ results, onPlayAgain }: PersonaCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const correctCount = results.filter((r) => r.guessedCorrectly).length
  const persona = getPersona(correctCount, results.length)
  const info = PERSONAS[persona]

  const handleShare = async () => {
    const text = `I got "${info.name}" on Lightning Round — ${correctCount}/${results.length} correct! ⚡`
    if (navigator.share) {
      await navigator.share({ text })
    } else {
      await navigator.clipboard.writeText(text)
    }
  }

  const handleSave = async () => {
    if (!cardRef.current) return
    const { default: html2canvas } = await import('html2canvas-pro')
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: null,
      scale: 2,
    })
    const link = document.createElement('a')
    link.download = `lightning-round-${persona}.png`
    link.href = canvas.toDataURL()
    link.click()
  }

  const badgeMap: Record<string, string> = {
    oracle:     '/imgs/badge/oraclebadge.png',
    contrarian: '/imgs/badge/contrarianbadge.png',
    curious:    '/imgs/badge/curiousbadge.png',
    beginner:   '/imgs/badge/beginnerbadge.png',
  }

  const colorMap: Record<string, string> = {
    oracle: 'bg-purple-50 border-purple-300',
    contrarian: 'bg-blue-50 border-blue-300',
    curious: 'bg-amber-50 border-amber-300',
    beginner: 'bg-emerald-50 border-emerald-300',
  }

  const labelColorMap: Record<string, string> = {
    oracle: 'bg-purple-100 text-purple-800',
    contrarian: 'bg-blue-100 text-blue-800',
    curious: 'bg-amber-100 text-amber-800',
    beginner: 'bg-emerald-100 text-emerald-800',
  }

  return (
    <div className="flex-1 flex flex-col items-center px-6 py-8">
      <p className="text-text-muted text-sm mb-6">Based on your session today</p>

      <div
        ref={cardRef}
        className={`w-full rounded-2xl border-2 overflow-hidden ${colorMap[info.color]}`}
      >
        <div className="p-4 flex justify-between items-center">
          <h3 className="font-semibold text-text">{info.name}</h3>
          <span
            className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${labelColorMap[info.color]}`}
          >
            {persona === 'oracle'
              ? 'Visionary'
              : persona === 'contrarian'
                ? 'Challenger'
                : persona === 'curious'
                  ? 'Explorer'
                  : 'Learner'}
          </span>
        </div>

        <div className="flex items-center justify-center py-4 px-6">
          <img
            src={badgeMap[persona]}
            alt={`${info.name} badge`}
            className="w-full aspect-square object-contain"
          />
        </div>

        <div className="px-4 py-3 border-t border-inherit">
          <p className="text-text-muted text-sm mt-1">{info.description}</p>
        </div>

        <div className="px-4 py-3 border-t border-inherit flex justify-between items-center">
          <span className="text-text-muted text-xs">Lenny's Lightning Round</span>
          <span className="text-sage font-medium text-sm">{correctCount}/{results.length} correct</span>
        </div>

        <div className="px-4 py-2 border-t border-inherit text-center">
          <span className="text-text-muted text-[11px]">by kai tran • howdyimkai.com</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full mt-6">
        <button
          onClick={handleShare}
          className="bg-sage hover:bg-sage-dark text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          Share my card
        </button>
        <button
          onClick={handleSave}
          className="bg-cream-dark hover:bg-border text-text font-semibold py-4 rounded-full flex items-center justify-center gap-2 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Save as image
        </button>
      </div>

      <button
        onClick={onPlayAgain}
        className="text-text-muted text-sm mt-6 hover:text-text transition-colors"
      >
        Play again
      </button>
    </div>
  )
}
