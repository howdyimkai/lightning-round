import { useState } from 'react'
import type { Quote } from '../lib/types'
import { Avatar } from './Avatar'

interface EpisodeCardProps {
  quote: Quote
  isLastRound: boolean
  onContinue: () => void
}

export function EpisodeCard({ quote, isLastRound, onContinue }: EpisodeCardProps) {
  const [favorited, setFavorited] = useState(false)
  const links = quote.listenLinks
  const hasAnyLink = Object.values(links).some(Boolean)

  return (
    <div className="flex-1 flex flex-col px-6 py-8">
      <h2 className="text-xs text-text-muted uppercase tracking-wider text-center mb-6">
        The Episode
      </h2>

      {/* Episode card */}
      <div className="bg-cream-dark rounded-2xl p-6 mb-5">
        {/* Guest header */}
        <div className="flex items-start gap-3 mb-4">
          <Avatar name={quote.guest.name} photo={quote.guest.photo} size="md" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-text leading-tight">{quote.guest.name}</p>
            <p className="text-text-muted text-sm leading-tight mt-0.5">{quote.guest.role}</p>
          </div>
          <button
            onClick={() => setFavorited((f) => !f)}
            aria-label={favorited ? 'Saved to favorites' : 'Save this episode'}
            className={`p-1.5 rounded-full transition-colors shrink-0 ${
              favorited ? 'text-sage' : 'text-text-muted hover:text-text'
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={favorited ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
          </button>
        </div>

        {/* Episode info */}
        <h3 className="text-text font-semibold leading-snug mb-2">{quote.episodeTitle}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{quote.episodeDescription}</p>

        {/* In this episode — the quote in context */}
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-text-muted uppercase tracking-wider mb-2">In this episode</p>
          <p className="text-text-muted text-sm leading-relaxed italic">
            {quote.episodeContext} — {quote.guest.name} said: "{quote.text}"
          </p>
        </div>
      </div>

      {/* Listen links */}
      {hasAnyLink && (
        <div className="mb-6">
          <p className="text-xs text-text-muted uppercase tracking-wider text-center mb-3">
            Listen to this episode
          </p>
          <div className="flex flex-col gap-2">
            {links.lenny && (
              <ListenLink href={links.lenny} label="Open on Lenny's Podcast" icon="🔗" />
            )}
            {links.youtube && (
              <ListenLink href={links.youtube} label="Watch on YouTube" icon="▶️" />
            )}
            {links.spotify && (
              <ListenLink href={links.spotify} label="Listen on Spotify" icon="🎵" />
            )}
            {links.apple && (
              <ListenLink href={links.apple} label="Listen on Apple Podcasts" icon="🎧" />
            )}
          </div>
        </div>
      )}

      <button
        onClick={onContinue}
        className="bg-sage hover:bg-sage-dark text-white font-semibold py-4 rounded-full transition-colors"
      >
        {isLastRound ? 'See your persona card →' : 'Next round →'}
      </button>
    </div>
  )
}

function ListenLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-cream-dark hover:bg-border rounded-xl py-3.5 px-5 flex items-center gap-3 transition-colors group"
    >
      <span className="text-xl leading-none">{icon}</span>
      <span className="text-text text-sm font-medium flex-1">{label}</span>
      <svg
        className="text-text-muted group-hover:text-text transition-colors"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  )
}
