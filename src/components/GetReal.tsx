export default function GetReal() {
  return (
    <section id="getreal" style={{ position: 'relative', overflow: 'hidden' }}>
      <img className="bg-video" src="/assets/images/getreal-bg.jpg" alt="" />
      <div className="grid-row" style={{ minHeight: '959px', position: 'relative' }}>
        <div className="grid-side" style={{ backdropFilter: 'blur(6px)', background: 'rgba(251,251,251,0.5)' }}></div>
        <div className="grid-content" style={{ position: 'relative', zIndex: 1, padding: '128px 64px' }}>
          <div className="getreal-inner">
            <div className="getreal-tag">Get real</div>
            <h2 className="getreal-heading">For those who are serious about upgrading their leadership level</h2>
            <div className="getreal-card">
              <div className="getreal-price">
                <span className="getreal-price-main">€119</span>
                <span className="getreal-price-orig">€333</span>
              </div>
              <div className="getreal-cta-stack">
                <a href="https://buy.stripe.com/8x2bJ30he6BTbZSbcAg7e00" className="btn btn-dark" data-track="begin_checkout">Start the Workshop</a>
                <p className="getreal-guarantee">15-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-side" style={{ backdropFilter: 'blur(6px)', background: 'rgba(251,251,251,0.5)' }}></div>
      </div>
    </section>
  )
}
