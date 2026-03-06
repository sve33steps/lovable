export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="grid-row">
        <div className="grid-side"></div>
        <div className="grid-content" style={{ padding: '24px' }}>
          <div className="how-header">
            <h2 className="how-title">How it works</h2>
            <p className="how-sub">The Leadership Workshop consists of 33 missions, delivered directly to your email — no platforms, no videos, no distractions.</p>
          </div>
          <div className="how-cards">
            <video className="how-cards-video" autoPlay loop muted playsInline>
              <source src="/assets/videos/how-it-works-background-video.webm" type="video/webm" />
              <source src="/assets/videos/how-it-works-background-video.mp4" type="video/mp4" />
            </video>
            <div className="video-hue-overlay"></div>
            <div className="how-step">
              <div className="how-icon"><img src="/assets/images/icons/icon-calendar.svg" alt="calendar" /></div>
              <p className="how-step-text"><strong>Day 1:</strong> <span>You receive Mission #1 in your inbox. Just open it and complete it.</span></p>
            </div>
            <div className="how-step">
              <div className="how-icon"><img src="/assets/images/icons/icon-data.svg" alt="data" /></div>
              <p className="how-step-text"><strong>Step-by-step:</strong> <span>Once you complete Mission #1, you receive Mission #2, and so on.</span></p>
            </div>
            <div className="how-step">
              <div className="how-icon"><img src="/assets/images/icons/icon-pie.svg" alt="pie chart" /></div>
              <p className="how-step-text"><strong>Bite-sized:</strong> <span>Most missions take between 20 and 30 minutes. Only three are longer.</span></p>
            </div>
            <div className="how-step">
              <div className="how-icon"><img src="/assets/images/icons/icon-zap.svg" alt="zap" /></div>
              <p className="how-step-text"><strong>Your pace:</strong> <span>Two missions per week is optimal, but you can move slower or faster.</span></p>
            </div>
          </div>
        </div>
        <div className="grid-side"></div>
      </div>
    </section>
  )
}
