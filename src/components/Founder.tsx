export default function Founder() {
  return (
    <section id="founder">
      <div className="grid-row" style={{ height: '817px', position: 'relative', zIndex: 2 }}>
        <div className="grid-side"></div>
        <div className="grid-content" style={{ display: 'flex', alignItems: 'center', padding: '0 24px' }}>
          <div className="founder-spacer"></div>
          <div className="founder-text">
            <h2 className="founder-heading">Built by practitioners for practitioners</h2>
            <div className="founder-bio">
              <p>Over the past 15+ years, I've been building teams and companies, and now I've used that experience to try to answer one big question: What kind of course could truly make a difference for a first-time manager?</p>
              <p>Along the way, I've made my mistakes, learned, and celebrated wins — but one person's experience can only go so far. That's why I keep learning from other leaders: their stories, their challenges, and their hard-earned wisdom.</p>
              <p>This course is the result of that shared exploration. It's not "A guidebook for being a great leader" — it's an invitation to think about leadership, challenge your assumptions, and shape your own management playbook.</p>
              <p>Enjoy the journey!</p>
            </div>
            <p className="founder-name">Svetoslav Dimov</p>
            <div className="founder-role">
              <span className="founder-role-text">Founder of 33steps.com</span>
              <a href="https://www.linkedin.com/in/dimovdimov/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/logos/logo-linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid-side"></div>
      </div>
    </section>
  )
}
