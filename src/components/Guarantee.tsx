export default function Guarantee() {
  return (
    <section id="guarantee">
      <div className="grid-row">
        <div className="grid-side"></div>
        <div className="grid-content" style={{ padding: '128px 24px', textAlign: 'center' }}>
          <div className="guarantee-inner">
            <h2 className="guarantee-title">15-day money-back guarantee</h2>
            <p className="guarantee-sub">If it doesn't challenge your thinking, you get your money back. You can get a full refund in the first 15 days after purchasing the workshop. No questions asked</p>
            <div className="guarantee-card">
              <div>
                <div className="guarantee-price-row">
                  <span className="guarantee-price-big">€119</span>
                  <span className="guarantee-price-orig">€333</span>
                </div>
                <p className="guarantee-card-name">The Leadership Workshop</p>
              </div>
              <div className="guarantee-ctas">
                <div className="guarantee-cta-group">
                  <a href="#getreal" className="btn btn-dark btn-lg">I'm ready to lead</a>
                  <span className="guarantee-cta-label">Start the workshop and lead better</span>
                </div>
                <div className="guarantee-cta-group">
                  <a href="#newsletter" className="btn btn-teal btn-lg">I'll just read</a>
                  <span className="guarantee-cta-label">Get 33 of the best leadership articles for free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-side"></div>
      </div>
    </section>
  )
}
