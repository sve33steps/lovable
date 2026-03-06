export default function Focus() {
  return (
    <section id="focus">
      <div className="grid-row">
        <div className="grid-side"></div>
        <div className="grid-content" style={{ padding: '24px' }}>
          <div className="focus-heading">
            <h2 className="focus-title"><strong>The 4 core focus areas</strong> <span>of The Leadership Workshop</span></h2>
            <p className="focus-sub">The essential pillars that make leadership work</p>
          </div>
          <div className="focus-cards">
            <div className="focus-card">
              <p className="focus-card-title">The self</p>
              <p className="focus-card-text">Self-awareness and managing yourself. Own your inner game.</p>
            </div>
            <div className="focus-card">
              <p className="focus-card-title">The team</p>
              <p className="focus-card-text">Culture, trust, communication, alignment, team dynamics and development.</p>
            </div>
            <div className="focus-card">
              <p className="focus-card-title">The structure</p>
              <p className="focus-card-text">Goals, roles, processes, decisions, accountability. Structure creates freedom.</p>
            </div>
            <div className="focus-card">
              <p className="focus-card-title">The hard part</p>
              <p className="focus-card-text">Managing underperformance, conflicts, complaints, clear delegation.</p>
            </div>
          </div>
        </div>
        <div className="grid-side"></div>
      </div>
    </section>
  )
}
