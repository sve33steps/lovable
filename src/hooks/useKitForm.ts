import { useState, useCallback } from 'react'

const KIT_FORM_ID = import.meta.env.VITE_KIT_FORM_ID || ''
// Public form submission endpoint — no API key required
const KIT_URL = `https://app.convertkit.com/forms/${KIT_FORM_ID}/subscriptions`

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const RATE_KEY = 'kit_submits'
const RATE_WINDOW = 10 * 60 * 1000
const RATE_MAX = 3

export type KitState = 'idle' | 'sending' | 'subscribed' | 'already' | 'error'

function isRateLimited(): boolean {
  try {
    const data: number[] = JSON.parse(localStorage.getItem(RATE_KEY) || '[]')
    const now = Date.now()
    const recent = data.filter(t => now - t < RATE_WINDOW)
    if (recent.length >= RATE_MAX) return true
    recent.push(now)
    localStorage.setItem(RATE_KEY, JSON.stringify(recent))
    return false
  } catch {
    return false
  }
}

export function useKitForm() {
  const [email, setEmail] = useState('')
  const [placeholder, setPlaceholder] = useState('Enter your email')
  const [state, setState] = useState<KitState>('idle')
  const [honeypot, setHoneypot] = useState('')

  const submit = useCallback(async () => {
    if (honeypot) return

    const trimmed = email.trim()

    if (!EMAIL_RE.test(trimmed)) {
      setPlaceholder('Please enter a valid email')
      setEmail('')
      return
    }

    if (isRateLimited()) {
      setPlaceholder('Too many attempts, please wait.')
      setEmail('')
      return
    }

    setState('sending')

    try {
      const form = new FormData()
      form.append('email_address', trimmed)

      const res = await fetch(KIT_URL, { method: 'POST', body: form })

      // Kit returns 200 for new + existing subscribers on this endpoint
      if (res.ok) {
        setState('subscribed')
        setPlaceholder("You're in! Check your inbox.")
        setEmail('')
      } else {
        throw new Error(String(res.status))
      }
    } catch {
      setState('error')
      setPlaceholder('Something went wrong.')
    }
  }, [email, honeypot])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') submit()
  }, [submit])

  const reset = useCallback(() => {
    setState('idle')
  }, [])

  return { email, setEmail, placeholder, state, honeypot, setHoneypot, submit, handleKeyDown, reset }
}
