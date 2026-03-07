import { FEATURES } from '../features'

export default function Hero() {
  return (
    <section id="hero">
      <video className="bg-video" autoPlay loop muted playsInline aria-hidden="true">
        <source src="/assets/videos/hero-video.webm" type="video/webm" />
        <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="video-hue-overlay"></div>

      <div className="hero-body">
        <div className="hero-side"></div>
        <div className="hero-content hero-body-inner">
          <div className="hero-body-center">
            <div className="hero-text">
              <p className="hero-eyebrow">On a mission to build the world's go-to training for new managers</p>
              <h1 className="hero-title">The Leadership Workshop<br />For First-Time Managers</h1>
              <div className="hero-tags">
                <span className="hero-tag">Online</span>
                <span className="hero-tag">No videos — Only challenges</span>
                <span className="hero-tag">33 Missions</span>
              </div>
              <div className="hero-ctas">
                <div className="hero-cta-group">
                  <a href="#getreal" className="btn btn-dark btn-lg">I'm ready to lead</a>
                  <span className="hero-cta-label">Start the workshop and lead better</span>
                </div>
                <div className="hero-cta-group">
                  <a href="#newsletter" className="btn btn-teal btn-lg">I'll just read</a>
                  <span className="hero-cta-label">Get 33 of the best leadership articles for free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-side right"></div>
      </div>

      {FEATURES.heroLogoBar && (
        <div id="logo-bar">
          <div className="logo-bar-side"></div>
          <div className="logo-bar-inner">
            <span className="logo-bar-label">As seen on</span>
            <div className="logo-slot"><img src="/assets/images/logos/logo-vdcc.svg" alt="VDCC" /></div>
            <div className="logo-slot"><img src="/assets/images/logos/logo-revolut.svg" alt="Revolut" /></div>
            <div className="logo-slot"><span className="logo-slot-text">mass<span style={{ opacity: 0.6 }}>[Currency]</span></span></div>
            <div className="logo-slot"><img src="/assets/images/logos/logo-fiat-republic.svg" alt="Fiat Republic" /></div>
            <div className="logo-slot"><img src="/assets/images/logos/logo-avalanche.svg" alt="Avalanche" /></div>
          </div>
          <div className="logo-bar-side right"></div>
        </div>
      )}
    </section>
  )
}
