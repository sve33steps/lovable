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

export default function Footer() {
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
    <footer>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-left">
              <p className="footer-copyright">33steps ltd. © 2026, All rights Reserved</p>
              <div className="footer-contact">
                <a href="tel:+359988357444">+359 988 357 444</a>
                <a href="mailto:sve@33steps.com">sve@33steps.com</a>
              </div>
            </div>
            <div className="footer-right">
              <p className="footer-signup-label">Get 33 of the best leadership pieces for free</p>
              <div className="footer-email-form">
                <input className="kit-hp" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
                <input
                  className="footer-email-input"
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

          <div className="footer-wordmark">
            <p className="footer-workshop-name">The Leadership Workshop</p>
            <img src="/assets/images/logos/logo-outline.svg" alt="33STEPS.COM" className="footer-logo-img" />
          </div>

          <div className="footer-bottom">
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <span className="footer-sep"></span>
              <a href="#">Terms &amp; Conditions</a>
              <span className="footer-sep"></span>
              <a href="#">Cookie Policy</a>
              <span className="footer-sep"></span>
              <a href="#">Refund Policy</a>
            </div>
            <p className="footer-built">Built by HYPE</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
