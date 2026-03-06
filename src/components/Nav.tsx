export default function Nav() {
  return (
    <header id="site-header">
      <div className="nav-side"></div>
      <div className="nav-inner">
        <div className="nav-pill">
          <a href="#" className="nav-logo">
            <img src="/assets/images/logos/logo.svg" alt="33steps logo" />
          </a>
          <a href="#getreal" className="btn btn-dark">
            <span className="nav-cta-desktop">I'm ready to lead</span>
            <span className="nav-cta-mobile">Join now</span>
          </a>
        </div>
      </div>
      <div className="nav-side right"></div>
    </header>
  )
}
