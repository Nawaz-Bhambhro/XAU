import '../DwsSolutions.css'

const dwsNav = [
  { label: 'Insights', href: '#' },
  { label: 'Capabilities', href: '#' },
  { label: 'Solutions', href: '/solutions/asset-management-solutions', active: true },
  { label: 'Service', href: '#' },
  { label: 'About us', href: '#' },
]

const quickAccessLinks = [
  'Insights',
  'Capabilities',
  'Solutions',
  'Service',
  'About us',
  'Careers',
  'Contact',
]

const topicLinks = [
  'Active',
  'Alternatives',
  'Passive',
  'Sustainable Investing',
  'Multi-Asset',
  'Real Assets',
]

const moreDwsLinks = [
  'DWS Group',
  'Deutsche Bank',
  'Careers',
  'Media',
  'Investor Relations',
]

export function DwsLayout({ children, activeNav = 'Solutions' }) {
  return (
    <div className="dws-site">
      <header className="dws-header">
        <div className="dws-header-inner">
          <a href="/solutions/asset-management-solutions" className="dws-logo" title="DWS home">
            <img
              src="https://dws.com/globalassets/_-shared/logos/dws_logo_global_screen_white_pageframe.svg"
              alt="DWS"
            />
          </a>
          <nav className="dws-main-nav" aria-label="main">
            <ul>
              {dwsNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={item.label === activeNav ? 'active' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="dws-header-utils" aria-label="utilities">
            <button type="button" className="dws-icon-btn" title="Search">
              ⌕
            </button>
            <button type="button" className="dws-icon-btn" title="Language">
              🌐
            </button>
            <button type="button" className="dws-icon-btn" title="Account">
              👤
            </button>
            <button type="button" className="dws-icon-btn" title="Menu">
              ⋮
            </button>
          </div>
        </div>
      </header>

      <div className="dws-security-banner">
        <div className="dws-security-inner">
          <span className="dws-security-icon" aria-hidden="true">
            i
          </span>
          <div className="dws-security-text">
            <strong>Important security note: Warning of attempted fraud in the name of DWS</strong>
            <p>
              Fraudsters are increasingly impersonating DWS employees via email, phone, or social
              media. DWS will never ask you to transfer money to a personal account or share
              passwords via unsolicited messages.
            </p>
          </div>
          <button type="button" className="dws-security-toggle" aria-label="Collapse">
            −
          </button>
        </div>
      </div>

      <main className="dws-main">{children}</main>

      <footer className="dws-footer">
        <div className="dws-footer-top">
          <div className="dws-footer-top-inner">
            <button type="button" className="dws-footer-locale">
              🌐 Global – English / Financial Professional ▾
            </button>
            <div className="dws-footer-top-links">
              <a href="#">📍 Address</a>
              <a href="#">✉ Newsletter</a>
            </div>
            <div className="dws-footer-social">
              <a href="#" className="dws-social-btn" title="LinkedIn">
                in
              </a>
              <a href="#" className="dws-social-btn" title="YouTube">
                ▶
              </a>
              <a href="#" className="dws-social-btn" title="Facebook">
                f
              </a>
            </div>
          </div>
        </div>

        <div className="dws-footer-main">
          <div className="dws-footer-main-inner">
            <a href="/solutions/asset-management-solutions" className="dws-footer-logo">
              <img
                src="https://dws.com/globalassets/_-shared/logos/dws_logo_global_screen_white_pageframe.svg"
                alt="DWS"
                className="dws-footer-logo-img"
              />
            </a>
            <div className="dws-footer-columns">
              <div className="dws-footer-col">
                <h3>Quick Access</h3>
                <ul>
                  {quickAccessLinks.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dws-footer-col">
                <h3>Topic</h3>
                <ul>
                  {topicLinks.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dws-footer-col">
                <h3>More DWS</h3>
                <ul>
                  {moreDwsLinks.map((link) => (
                    <li key={link}>
                      <a href="#">{link} ↗</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="dws-footer-legal">
          <div className="dws-footer-legal-inner">
            <a href="#">Legal Resources</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy notice</a>
            <a href="#">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
