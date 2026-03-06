export default function ForYou() {
  return (
    <section id="for-you">
      <div className="grid-row">
        <div className="grid-side"></div>
        <div className="grid-content">
          <div className="for-you-container">
            <div className="not-for-you">
              <h2 className="not-title">This is <strong>NOT</strong> for you</h2>
              <div className="not-items">
                <div className="not-item">
                  <div className="not-icon"><img src="/assets/images/icons/icon-x.svg" alt="x" /></div>
                  <span className="not-text">You're not managing people yet</span>
                </div>
                <div className="not-item">
                  <div className="not-icon"><img src="/assets/images/icons/icon-x.svg" alt="x" /></div>
                  <span className="not-text">You want quick hacks and "secrets"</span>
                </div>
                <div className="not-item">
                  <div className="not-icon"><img src="/assets/images/icons/icon-x.svg" alt="x" /></div>
                  <span className="not-text">You are looking for the easy way</span>
                </div>
              </div>
            </div>

            <div className="is-for-you" style={{ position: 'relative', overflow: 'hidden' }}>
              <video className="bg-video" autoPlay loop muted playsInline>
                <source src="/assets/videos/this-is-for-you-video.webm" type="video/webm" />
                <source src="/assets/videos/this-is-for-you-video.mp4" type="video/mp4" />
              </video>
              <div className="video-hue-overlay"></div>
              <div className="is-for-you-content" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="is-title">This is for you</h2>
                <div className="is-items">
                  <div className="is-item">
                    <div className="is-icon"><img src="/assets/images/icons/icon-arrow.svg" alt="arrow" /></div>
                    <div className="is-item-text">
                      <p className="is-item-title">You lead people</p>
                      <p className="is-item-sub">Up to 5 years of experience</p>
                    </div>
                  </div>
                  <div className="is-item">
                    <div className="is-icon"><img src="/assets/images/icons/icon-arrow.svg" alt="arrow" /></div>
                    <div className="is-item-text">
                      <p className="is-item-title">You know that leadership is a long-term game</p>
                    </div>
                  </div>
                  <div className="is-item">
                    <div className="is-icon"><img src="/assets/images/icons/icon-arrow.svg" alt="arrow" /></div>
                    <div className="is-item-text">
                      <p className="is-item-title">You are ready to put the effort</p>
                    </div>
                  </div>
                </div>
                <div className="is-ctas">
                  <a href="#getreal" className="btn btn-teal">I'm ready to lead</a>
                  <a href="#newsletter" className="btn btn-white">I'll just read</a>
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
