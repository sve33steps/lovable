import { useEffect } from 'react'
import { FEATURES } from './features'

// CSS
import './styles/global.css'
import './styles/nav.css'
import './styles/hero.css'
import './styles/steps.css'
import './styles/belief.css'
import './styles/in-media.css'
import './styles/comparison.css'
import './styles/how-it-works.css'
import './styles/mission.css'
import './styles/for-you.css'
import './styles/focus.css'
import './styles/founder.css'
import './styles/topics.css'
import './styles/time.css'
import './styles/getreal.css'
import './styles/guarantee.css'
import './styles/newsletter.css'
import './styles/testimonials.css'
import './styles/footer.css'

// Components
import Nav from './components/Nav'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Belief from './components/Belief'
import InMedia from './components/InMedia'
import Comparison from './components/Comparison'
import HowItWorks from './components/HowItWorks'
import Mission from './components/Mission'
import ForYou from './components/ForYou'
import Focus from './components/Focus'
import Founder from './components/Founder'
import Topics from './components/Topics'
import Time from './components/Time'
import Guarantee from './components/Guarantee'
import Newsletter from './components/Newsletter'
import Testimonials from './components/Testimonials'
import GetReal from './components/GetReal'
import Footer from './components/Footer'

const TRACKING = {
  ga4: '',     // e.g. 'G-XXXXXXXXXX'
  clarity: '', // e.g. 'abcde12345'
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

function ga4Event(name: string, params: Record<string, unknown>) {
  if (!TRACKING.ga4 || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

function claritySet(key: string, value: string) {
  if (!TRACKING.clarity || typeof window.clarity !== 'function') return
  window.clarity('set', key, value)
}

export default function App() {
  useEffect(() => {
    // GA4 setup
    if (TRACKING.ga4) {
      const s = document.createElement('script')
      s.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING.ga4}`
      s.async = true
      document.head.appendChild(s)
      window.dataLayer = window.dataLayer || []
      window.gtag = function () { window.dataLayer!.push(arguments) }
      window.gtag('js', new Date())
      window.gtag('config', TRACKING.ga4)
    }

    // Clarity setup
    if (TRACKING.clarity) {
      const s = document.createElement('script')
      s.innerHTML = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${TRACKING.clarity}");`
      document.head.appendChild(s)
    }

    // begin_checkout tracking
    const handleClick = (e: MouseEvent) => {
      const btn = (e.target as Element).closest('[data-track="begin_checkout"]')
      if (!btn) return
      ga4Event('begin_checkout', {
        currency: 'EUR', value: 119,
        items: [{ item_name: 'The Leadership Workshop', price: 119, quantity: 1 }],
      })
      claritySet('checkout_started', 'true')
    }
    document.addEventListener('click', handleClick)

    // view_item tracking (fires once when #getreal enters viewport)
    const getreal = document.getElementById('getreal')
    if (getreal) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          ga4Event('view_item', {
            currency: 'EUR', value: 119,
            items: [{ item_name: 'The Leadership Workshop', price: 119, quantity: 1 }],
          })
          claritySet('viewed_pricing', 'true')
          observer.disconnect()
        })
      }, { threshold: 0.3 })
      observer.observe(getreal)
    }

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <Nav />
      </div>
      <main id="main-content">
        <Hero />
        <Steps />
        <Belief />
        {FEATURES.inMediaBar && <InMedia />}
        <Comparison />
        <HowItWorks />
        <Mission />
        <ForYou />
        <Focus />
        <Founder />
        <Topics />
        <Time />
        <Guarantee />
        <Newsletter />
        {FEATURES.testimonials && <Testimonials />}
        <GetReal />
      </main>
      <Footer />
    </>
  )
}
