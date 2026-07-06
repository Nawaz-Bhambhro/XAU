import '../InvestorReporting.css'

const utilityLinks = [
  { label: 'DB Home', href: 'https://www.db.com/company/index.htm' },
  { label: 'Corporate Bank Home', href: 'https://www.db.com/what-we-do/products-and-services/corporate-bank' },
  { label: 'TAS Home', href: 'https://corporates.db.com/solutions/corporate-bank-solutions/Trust-and-agency-services/' },
  { label: 'TAS Insights', href: 'https://flow.db.com/trust-and-agency-services' },
  { label: 'Contacts', href: '#' },
  { label: 'FAQs', href: '#' },
]

const footerLinks = [
  { label: 'Imprint', href: 'https://www.db.com/imprint' },
  { label: 'Legal Resources', href: 'https://www.db.com/legal-resources' },
  { label: 'Data Protection', href: 'https://www.db.com/dataprotection' },
  { label: 'Terms of Use', href: '#' },
  { label: 'File Layouts', href: '#' },
  { label: 'Accessibility', href: '#' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/DeutscheBank', className: 'ir-social--facebook' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/showcase/db-corporate-bank/', className: 'ir-social--linkedin' },
  { label: 'Twitter', href: '#', className: 'ir-social--twitter' },
  { label: 'Instagram', href: '#', className: 'ir-social--instagram' },
]

export default function InvestorReportingLayout({
  activeNav = 'home',
  showDealSearch = false,
  children,
}) {
  return (
    <div className="ir-page">
      <header className="ir-header">
        <div className="ir-header-shell">
          <div className="ir-header-top">
            <div className="ir-brand-block">
              <h1 className="ir-brand-name">Deutsche Bank</h1>
              <h1 className="ir-brand-subtitle">Corporate Trust Investor Reporting</h1>
            </div>

            <nav className="ir-utility-nav" aria-label="Utility navigation">
              {utilityLinks.map((link) => (
                <span key={link.label} className="ir-utility-item">
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {link.label}
                  </a>
                </span>
              ))}
            </nav>

            <a href="https://www.db.com" className="ir-db-logo" title="Deutsche Bank" aria-label="Deutsche Bank">
              <span className="ir-db-logo-mark" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <nav className="ir-main-nav" aria-label="Primary navigation">
        <div className="ir-main-nav-inner">
          <a
            href="/investor-reporting"
            className={`ir-main-nav-link${activeNav === 'home' ? ' ir-main-nav-link--active' : ''}`}
          >
            Home
          </a>
          <a
            href="/investor-reporting/browse-deals"
            className={`ir-main-nav-link${activeNav === 'browse' ? ' ir-main-nav-link--active' : ''}`}
          >
            Browse Deals
          </a>

          <div className="ir-main-nav-spacer" aria-hidden="true" />

          <a href="#" className="ir-sign-in-btn">
            Sign In
          </a>
          {showDealSearch && (
            <form className="ir-search" onSubmit={(e) => e.preventDefault()}>
              <input type="search" placeholder="Deal Search" aria-label="Deal Search" />
              <button type="submit" aria-label="Search deals">
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <circle cx="6.5" cy="6.5" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 10l4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </nav>

      <main className="ir-main" aria-label="Main content">
        {children}
      </main>

      <footer className="ir-footer">
        <div className="ir-footer-inner">
          <ul className="ir-social">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={`ir-social-link ${link.className}`} aria-label={link.label}>
                  <span aria-hidden="true">{link.label[0]}</span>
                </a>
              </li>
            ))}
          </ul>

          <nav className="ir-footer-nav" aria-label="Footer navigation">
            <ul>
              {footerLinks.map((link, index) => (
                <li key={link.label}>
                  {index > 0 && <span className="ir-footer-divider" aria-hidden="true" />}
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="ir-copyright">Copyright &copy; 2019 Deutsche Bank</p>
        </div>
      </footer>
    </div>
  )
}
