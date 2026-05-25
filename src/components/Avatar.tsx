interface AvatarProps {
  name: string
  photo?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm:  'w-10 h-10 text-xs',
  md:  'w-12 h-12 text-sm',
  lg:  'w-14 h-14 text-base',
  xl:  'w-16 h-16 text-xl',
}

export function Avatar({ name, photo, size = 'md', className = '' }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-border flex items-center justify-center overflow-hidden shrink-0 ${className}`}
    >
      {photo ? (
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to initials if image fails to load
            const target = e.currentTarget
            target.style.display = 'none'
            target.parentElement!.dataset.fallback = initials
          }}
        />
      ) : (
        <span className="text-text-muted font-semibold">{initials}</span>
      )}
    </div>
  )
}
