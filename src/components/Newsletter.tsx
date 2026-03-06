import { useKitForm } from '../hooks/useKitForm'

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <path d="M2.5 8.5L6.5 12.5L13.5 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const IconCross = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
)

export default function Newsletter() {
  const { email, setEmail, placeholder, state, honeypot, setHoneypot, submit, handleKeyDown, reset } = useKitForm()

  const btnClass = `btn btn-dark${state === 'subscribed' ? ' btn-subscribed' : state === 'already' ? ' btn-already-subscribed' : state === 'error' ? ' btn-error' : ''}`

  const btnContent = () => {
    if (state === 'subscribed') return <><IconCheck /><span>Subscribed</span></>
    if (state === 'already') return <><IconCheck /><span>Already subscribed</span></>
    if (state === 'error') return <><IconCross /><span>Try again</span></>
    if (state === 'sending') return <>Sending…</>
    return <>Get it</>
  }

  return (
    <section id="newsletter" style={{ position: 'relative', overflow: 'hidden' }}>
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/assets/videos/Newsletter-video.webm" type="video/webm" />
        <source src="/assets/videos/Newsletter-video.mp4" type="video/mp4" />
      </video>
      <div className="video-hue-overlay"></div>
      <div className="grid-row" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-side" style={{ backdropFilter: 'blur(6px)', background: 'rgba(255,255,255,0.2)' }}></div>
        <div className="grid-content" style={{ position: 'relative', zIndex: 1 }}>
          <div className="newsletter-inner">
            <h2 className="newsletter-title">Get 33 of <strong>the best leadership pieces</strong> <span style={{ color: 'var(--gray-700)' }}>for free</span></h2>
            <p className="newsletter-sub">Articles and videos delivered daily to your inbox</p>
            <div className="newsletter-form">
              <input className="kit-hp" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
              <input
                className="newsletter-input"
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className={btnClass}
                onClick={state === 'error' ? () => { reset(); } : submit}
                disabled={state === 'sending' || state === 'subscribed' || state === 'already'}
              >
                {btnContent()}
              </button>
            </div>
          </div>
        </div>
        <div className="grid-side" style={{ backdropFilter: 'blur(6px)', background: 'rgba(255,255,255,0.2)' }}></div>
      </div>
    </section>
  )
}
