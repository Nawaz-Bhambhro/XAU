import '../GlobalOfficeLogin.css'

const issoImg = (path) => `https://login.isso.db.com/${path}`

const servicesSubNav = [
  { label: 'Login', href: '/global-office/login', active: true },
  { label: 'System Requirements', href: '#' },
  { label: 'Change Password', href: '#' },
  { label: 'Forgot Password?', href: '#' },
]

const helpSubNav = [
  { label: 'About', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Support', href: '#' },
  { label: 'Security Awareness', href: '#' },
]

const leftNav = [
  { label: 'Login', href: '/global-office/login', active: true },
  { label: 'System Requirements', href: '#' },
  { label: 'Change Password', href: '#' },
  { label: 'Forgot Password?', href: '#' },
]

export default function GlobalOfficeLoginPage() {
  return (
    <div className="go-page">
      <div className="go-layout">
        <header className="go-header" id="headerArea">
          <div className="go-header-top">
            <a href="/global-office/login" className="go-brand-link">
              <img
                src={issoImg('images/ag_identifier.gif')}
                alt="Deutsche Bank Authentication Gateway"
                className="go-brand-image"
              />
            </a>
            <div className="go-header-meta">
              <a href="https://www.db.com" className="go-group-link">
                Deutsche Bank Group
              </a>
              <a href="/" className="go-db-logo" title="Deutsche Bank" aria-label="Deutsche Bank">
                <span className="go-db-logo-mark" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="go-main-nav" id="level1Navi" aria-label="Main navigation">
            <ul className="go-nav-list">
              <li className="go-nav-item go-nav-item--active">
                <span className="go-nav-tab">Services</span>
                <ul className="go-subnav">
                  {servicesSubNav.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className={item.active ? 'active' : undefined}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="go-nav-item">
                <span className="go-nav-tab">Help</span>
                <ul className="go-subnav">
                  {helpSubNav.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="go-nav-item">
                <a href="#" className="go-nav-tab go-nav-tab--link">
                  Language Settings
                </a>
              </li>
            </ul>
            <form className="go-search" onSubmit={(e) => e.preventDefault()}>
              <input type="text" defaultValue="Internet Search" aria-label="Internet Search" />
              <button type="submit" aria-label="Search">
                ›
              </button>
            </form>
          </nav>

          <nav className="go-breadcrumb" id="breadcrumbNavi" aria-label="Breadcrumb">
            You are here:
            <span className="go-breadcrumb-path">
              Services <span className="go-breadcrumb-sep">|</span>{' '}
              <strong>Login</strong>
            </span>
          </nav>
        </header>

        <main className="go-main" id="content">
          <div className="go-columns">
            <aside className="go-left-nav" id="leftNavi" aria-label="Secondary navigation">
              <ul>
                {leftNav.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={item.active ? 'active' : undefined}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            <section className="go-login" aria-label="Login">
              <h1>Login</h1>
              <p className="go-intro">
                Welcome to the Authentication Gateway (Web SSO). By logging in with your{' '}
                <strong>Email</strong> and <strong>Password</strong>, Web SSO provides access to all
                Deutsche Bank applications for which you are registered.
              </p>

              <form className="go-form" onSubmit={(e) => e.preventDefault()}>
                <div className="go-form-row">
                  <label htmlFor="go-email">Email:*</label>
                  <input id="go-email" name="email" type="email" autoComplete="email" />
                </div>
                <div className="go-form-row">
                  <label htmlFor="go-password">Password:*</label>
                  <input
                    id="go-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>

                <div className="go-form-actions">
                  <button type="submit" className="go-btn">
                    Submit
                  </button>
                  <button type="reset" className="go-btn">
                    Clear Form
                  </button>
                </div>

                <p className="go-note">Fields marked with an asterisk (*) must be completed.</p>
                <p className="go-warning">
                  <strong>Unauthorised Access Warning</strong>: Access to this service is prohibited
                  unless authorised. Accessing programs or data unrelated to your job is prohibited.
                </p>
              </form>
            </section>

            <aside className="go-right-panel" aria-label="Updates">
              <div className="go-updates-box">
                <h2>Updates</h2>
                <h3>Security Awareness</h3>
                <p>
                  Deutsche Bank is committed to the security of our Internet solutions and to
                  providing our valued customers with information on safe computing.
                </p>
                <p>
                  Click <a href="#">here</a> to see recommended best practices for safety while
                  using online services.
                </p>
              </div>
            </aside>
          </div>
        </main>

        <footer className="go-footer" id="layoutFooter">
          <div className="go-footer-links">
            <a href="#">Cookie Notice</a>
            <a href="#">Imprint</a>
            <a href="#">Legal Resources</a>
          </div>
          <p className="go-footer-date">5 Jul 2026</p>
          <p className="go-copyright">Copyright © 2011 Deutsche Bank AG, Frankfurt am Main</p>
        </footer>
      </div>
    </div>
  )
}
