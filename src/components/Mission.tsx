export default function Mission() {
  return (
    <section id="mission">
      <div className="grid-row">
        <div className="grid-side"></div>
        <div className="grid-content" style={{ padding: '24px' }}>
          <h2 className="mission-title">What's inside a mission?</h2>
          <p className="mission-sub">Each mission includes one or more of 4 elements</p>
          <div className="mission-grid">
            <div className="mission-row">
              <div className="mission-card">
                <p className="mission-card-title">Self-reflection exercises</p>
                <p className="mission-card-text">We ask questions to get you thinking about principles, trust, structure, etc.</p>
              </div>
              <div className="mission-card">
                <p className="mission-card-title">Real-world experiments</p>
                <p className="mission-card-text">You are given small tasks to try out in the real world</p>
              </div>
            </div>
            <div className="mission-row">
              <div className="mission-card">
                <p className="mission-card-title">Practical tools</p>
                <p className="mission-card-text">Actionable models, questionnaires and checklists that you can implement</p>
              </div>
              <div className="mission-card">
                <p className="mission-card-title">Light theory</p>
                <p className="mission-card-text">Yep, a few key concepts and management frameworks that can come in handy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-side"></div>
      </div>
    </section>
  )
}
