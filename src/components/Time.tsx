export default function Time() {
  return (
    <section id="time">
      <div className="grid-row">
        <div className="grid-side"></div>
        <div className="grid-content" style={{ padding: '128px 24px', textAlign: 'center' }}>
          <h2 className="time-title">Time &amp; commitment</h2>
          <div className="time-stats">
            <div className="time-big">
              <p className="time-number">≤30</p>
              <p className="time-label">Minutes per mission for most missions</p>
            </div>
            <div className="time-row">
              <div className="time-stat">
                <p className="time-stat-number" style={{ color: 'var(--gray-700)' }}>3</p>
                <p className="time-stat-label">Deeper missions (2–3 hours)</p>
              </div>
              <div className="time-stat">
                <p className="time-stat-number" style={{ color: 'var(--gray-700)' }}>2</p>
                <p className="time-stat-label">Missions per week (recommended)</p>
              </div>
            </div>
            <div className="time-cta">
              <a href="#getreal" className="btn btn-dark">I'm ready to lead</a>
            </div>
          </div>
        </div>
        <div className="grid-side"></div>
      </div>
    </section>
  )
}
