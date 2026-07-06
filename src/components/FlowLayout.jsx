import { LogoSprite } from './Layout'
import '../FlowCaseStudies.css'

const flowNav = [
  { label: 'About us', href: '#' },
  { label: 'Case studies', href: '/flow/case-studies' },
  { label: 'Topics', href: '/flow/topics/technology' },
  { label: 'Publications', href: '#' },
  { label: 'Media', href: '#' },
  { label: 'Newsletter', href: '#' },
  { label: 'Get the flow app', href: '#', em: true },
]

export function FlowLayout({ children, activeNav = 'Case studies' }) {
  return (
    <div className="flow-site">
      <LogoSprite />
      <header className="flow-header">
        <div className="cms-content-wrapper flow-header-inner">
          <a href="/flow/case-studies" className="flow-identifier" title="Home">
            <img
              src="https://flow.db.com/application/project/images/logos/flow-logo-neu.svg"
              alt="flow"
            />
          </a>
          <nav className="flow-meta-nav" aria-label="meta">
            <ul>
              <li>
                <a href="#">Mandarin version</a>
              </li>
              <li>
                <a href="/corporates">Visit Corporate Bank</a>
              </li>
            </ul>
          </nav>
          <a href="/" className="flow-db-logo" title="Deutsche Bank Logo">
            <span className="hidden-title">Home</span>
            <svg focusable="false" aria-hidden="true">
              <use href="#svgsymbol-logo" xlinkHref="#svgsymbol-logo" />
            </svg>
          </a>
        </div>
      </header>

      <nav className="flow-main-nav" aria-label="main">
        <div className="cms-content-wrapper flow-nav-wrapper">
          <ul className="flow-nav-root">
            <li>
              <a href="/flow/case-studies" className="flow-home-link" title="Home">
                <span className="hidden-title">Home</span>
                <svg className="icon" focusable="false" aria-hidden="true">
                  <use href="#svgsymbol-home" xlinkHref="#svgsymbol-home" />
                </svg>
              </a>
            </li>
            {flowNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={item.label === activeNav ? 'active' : undefined}
                >
                  {item.em ? (
                    <>
                      Get the <em>flow</em> app
                    </>
                  ) : (
                    item.label
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flow-main">{children}</main>

      <footer className="flow-footer">
        <div className="cms-content-wrapper">
          <div className="flow-footer-inner">
            <div className="flow-footer-links">
              <ul className="flow-social">
                <li>
                  <a
                    href="https://www.linkedin.com/shareArticle?mini=true"
                    target="_blank"
                    rel="noreferrer"
                    className="flow-social-btn"
                    title="Share on LinkedIn"
                  >
                    in
                  </a>
                </li>
              </ul>
              <nav aria-label="footer">
                <ul className="flow-footer-nav">
                  <li>
                    <a href="#">Imprint</a>
                  </li>
                  <li>
                    <a href="#">Legal resources</a>
                  </li>
                  <li>
                    <a href="#">Privacy notice</a>
                  </li>
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Complaint management</a>
                  </li>
                </ul>
              </nav>
            </div>
            <button
              type="button"
              className="flow-btn flow-btn-outline flow-back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              back to top
            </button>
            <p className="flow-copyright">
              Copyright © 2026 Deutsche Bank AG, Frankfurt am Main
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
