const SESSION_KEY = 'lightning-round-session'

export function getSessionId(): string {
  let id = localStorage.getItem(SESSION_KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(SESSION_KEY, id)
  }
  return id
}

export function getTodayString(): string {
  return new Date().toISOString().slice(0, 10)
}
