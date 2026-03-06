export default function Steps() {
  return (
    <section id="steps">
      <div className="grid-row">
        <div className="grid-side"></div>
        <div className="grid-content">
          <div style={{ padding: '24px' }}>
            <div className="steps-header">
              <p className="steps-eyebrow"><strong style={{ color: 'var(--black)' }}>Being smart</strong><span> is no longer enough</span></p>
              <p className="steps-sub">Now your <strong style={{ color: 'var(--black)' }}>Leadership Skills</strong> determine your career, salary and impact.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', padding: '32px 0 24px', gap: '12px' }}>
              <h2 className="steps-heading" style={{ margin: 0 }}><span style={{ color: 'var(--black)' }}>33 steps </span><span style={{ color: 'var(--gray-700)' }}>towards</span></h2>
            </div>

            <div className="cards-grid">
              <div className="card card-wide">
                <div className="card-bg"></div>
                <p className="card-title" style={{ position: 'relative', zIndex: 1 }}>Making the hard decisions</p>
              </div>

              <div className="card card-teal">
                <p className="card-title">Handling conflict and underperformance</p>
              </div>

              <div className="card card-warm">
                <video className="bg-video" autoPlay loop muted playsInline>
                  <source src="/assets/videos/feedback-card-video.webm" type="video/webm" />
                  <source src="/assets/videos/feedback-card-video.mp4" type="video/mp4" />
                </video>
                <div className="video-hue-overlay"></div>
                <p className="card-title" style={{ position: 'relative', zIndex: 1 }}>Giving feedback without avoiding it</p>
              </div>

              <div className="card card-mid">
                <p className="card-title">Stopping self-doubt and building your own leadership style</p>
              </div>

              <div className="card card-gray-l">
                <p className="card-title">Mastering delegation</p>
              </div>

              <div className="card card-gray-r">
                <video className="bg-video" autoPlay loop muted playsInline>
                  <source src="/assets/videos/trust-structure-card-video.webm" type="video/webm" />
                  <source src="/assets/videos/trust-structure-card-video.mp4" type="video/mp4" />
                </video>
                <div className="video-hue-overlay"></div>
                <p className="card-title" style={{ position: 'relative', zIndex: 1 }}>Building trust and structure in your team</p>
              </div>

              <div className="card card-calendar">
                <p className="card-title">Regaining the ownership of your own calendar</p>
                <picture>
                  <source srcSet="/assets/images/cards/calendar-mockup.avif" type="image/avif" />
                  <img className="card-calendar-img" src="/assets/images/cards/calendar-mockup.png" alt="Calendar" />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-side"></div>
      </div>
    </section>
  )
}
