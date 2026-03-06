export default function Comparison() {
  return (
    <section id="comparison">
      <div className="grid-row">
        <div className="grid-side"></div>
        <div className="grid-content">
          <div style={{ padding: '64px' }}>
            <div className="comparison-grid">
              <div className="comparison-col">
                <h2 className="comparison-title muted">Typical leadership courses</h2>
                <div className="comparison-item">
                  <div className="comparison-icon">
                    <div className="icon-rings icon-rings--no">
                      <img src="/assets/images/icons/icon-check-no.svg" alt="no" />
                    </div>
                  </div>
                  <span className="comparison-item-text">Consuming information</span>
                </div>
                <div className="comparison-item">
                  <div className="comparison-icon">
                    <div className="icon-rings icon-rings--no">
                      <img src="/assets/images/icons/icon-check-no.svg" alt="no" />
                    </div>
                  </div>
                  <span className="comparison-item-text">90% content</span>
                </div>
                <div className="comparison-item">
                  <div className="comparison-icon">
                    <div className="icon-rings icon-rings--no">
                      <img src="/assets/images/icons/icon-check-no.svg" alt="no" />
                    </div>
                  </div>
                  <span className="comparison-item-text">Videos &amp; slides</span>
                </div>
                <div className="comparison-item">
                  <div className="comparison-icon">
                    <div className="icon-rings icon-rings--no">
                      <img src="/assets/images/icons/icon-check-no.svg" alt="no" />
                    </div>
                  </div>
                  <span className="comparison-item-text">Passive attendance</span>
                </div>
              </div>

              <div className="comparison-divider"></div>

              <div className="comparison-col">
                <h2 className="comparison-title">The Leadership Workshop</h2>
                <div className="comparison-item">
                  <div className="comparison-icon">
                    <div className="icon-rings icon-rings--yes">
                      <div className="icon-core"><img src="/assets/images/icons/icon-check-yes.svg" alt="yes" /></div>
                    </div>
                  </div>
                  <span className="comparison-item-text">Thinking, reflection and action</span>
                </div>
                <div className="comparison-item">
                  <div className="comparison-icon">
                    <div className="icon-rings icon-rings--yes">
                      <div className="icon-core"><img src="/assets/images/icons/icon-check-yes.svg" alt="yes" /></div>
                    </div>
                  </div>
                  <span className="comparison-item-text">10% content</span>
                </div>
                <div className="comparison-item">
                  <div className="comparison-icon">
                    <div className="icon-rings icon-rings--yes">
                      <div className="icon-core"><img src="/assets/images/icons/icon-check-yes.svg" alt="yes" /></div>
                    </div>
                  </div>
                  <div>
                    <p className="comparison-item-text">Missions &amp; challenges</p>
                    <p className="comparison-item-sub">No videos</p>
                  </div>
                </div>
                <div className="comparison-item">
                  <div className="comparison-icon">
                    <div className="icon-rings icon-rings--yes">
                      <div className="icon-core"><img src="/assets/images/icons/icon-check-yes.svg" alt="yes" /></div>
                    </div>
                  </div>
                  <span className="comparison-item-text">Active participation</span>
                </div>
              </div>
            </div>
            <div className="comparison-ctas">
              <a href="#getreal" className="btn btn-dark">I'm ready to lead</a>
              <a href="#newsletter" className="btn btn-gray">I'll just read</a>
            </div>
          </div>
        </div>
        <div className="grid-side"></div>
      </div>
    </section>
  )
}
