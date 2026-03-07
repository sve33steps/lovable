export default function Nav() {
  return (
    <header id="site-header">
      <div className="nav-side"></div>
      <div className="nav-inner">
        <div className="nav-pill">
          <a href="/" className="nav-logo" aria-label="33steps – back to homepage">
            <img src="/assets/images/logos/logo.svg" alt="" aria-hidden="true" />
          </a>
          <a href="#getreal" className="btn btn-dark" aria-label="Join the Leadership Workshop">
            <span className="nav-cta-desktop" aria-hidden="true">I'm ready to lead</span>
            <span className="nav-cta-mobile" aria-hidden="true">Join now</span>
          </a>
        </div>
      </div>
      <div className="nav-side right"></div>
    </header>
  )
}
