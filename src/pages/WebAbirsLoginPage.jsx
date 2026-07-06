import '../WebAbirsLogin.css'

const issoImg = (path) => `https://login.isso.db.com/${path}`

const servicesSubNav = [
  { label: 'Login', href: '/web-abirs/login', active: true },
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
  { label: 'Login', href: '/web-abirs/login', active: true },
  { label: 'System Requirements', href: '#' },
  { label: 'Reset DB Secure Authenticator', href: '#' },
  { label: 'Order DB Secure Authenticator', href: '#' },
  { label: 'Change Password', href: '#' },
  { label: 'Forgot Password?', href: '#' },
  { label: 'Register Security Device', href: '#' },
  { label: 'Self-Diagnostic Tool', href: '#' },
  { label: 'Download', href: '#' },
]

export default function WebAbirsLoginPage() {
  return (
    <div className="wa-page">
      <div className="wa-layout">
        <header className="wa-header" id="headerArea">
          <div className="wa-header-top">
            <a href="/web-abirs/login" className="wa-brand-link">
              <img
                src={issoImg('images/ag_identifier.gif')}
                alt="Deutsche Bank Authentication Gateway"
                className="wa-brand-image"
              />
            </a>
            <div className="wa-header-meta">
              <a href="https://www.db.com" className="wa-group-link">
                Deutsche Bank Group
              </a>
              <a href="/" className="wa-db-logo" title="Deutsche Bank" aria-label="Deutsche Bank">
                <img src={issoImg('images/logo.gif')} alt="" className="wa-db-logo-img" />
              </a>
            </div>
          </div>

          <nav className="wa-main-nav" id="level1Navi" aria-label="Main navigation">
            <ul className="wa-nav-list">
              <li className="wa-nav-item wa-nav-item--active">
                <span className="wa-nav-tab">Services</span>
                <ul className="wa-subnav">
                  {servicesSubNav.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className={item.active ? 'active' : undefined}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="wa-nav-item">
                <span className="wa-nav-tab">Help</span>
                <ul className="wa-subnav">
                  {helpSubNav.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="wa-nav-item">
                <a href="#" className="wa-nav-tab wa-nav-tab--link">
                  Language Settings
                </a>
              </li>
            </ul>
            <form className="wa-search" onSubmit={(e) => e.preventDefault()}>
              <input type="text" defaultValue="Internet Search" aria-label="Internet Search" />
              <button type="submit" aria-label="Search">
                <img src={issoImg('images/tran_pxl.gif')} alt="" />
              </button>
            </form>
          </nav>

          <nav className="wa-breadcrumb" id="breadcrumbNavi" aria-label="Breadcrumb">
            You are here:
            <span className="wa-breadcrumb-path">
              Services <span className="wa-breadcrumb-sep">|</span>{' '}
              <strong>Login</strong>
            </span>
          </nav>
        </header>

        <main className="wa-main" id="content">
          <div className="wa-columns" id="contentColumns">
            <aside className="wa-left-nav" id="leftNavi" aria-label="Secondary navigation">
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

            <section className="wa-login columns-container" aria-label="Login">
              <div className="wa-login-header columns-header">
                <h1 id="formPageHeadline">
                  Welcome to the Authentication Gateway (Web SSO) Login: Issuer Services
                </h1>
              </div>

              <form className="wa-form" id="agForm" onSubmit={(e) => e.preventDefault()}>
                <div className="wa-form-table">
                  <div className="wa-form-col wa-form-col-mode">
                    <div className="wa-mode-box">
                      <p className="wa-mode-label">
                        Choose your <strong>Login Mode:</strong>
                      </p>
                      <div className="wa-select-wrap">
                        <select id="wa-login-mode" name="loginMode" defaultValue="password">
                          <option value="password">Password</option>
                          <option value="dbsa">DB Secure Authenticator</option>
                        </select>
                        <span className="wa-select-mark" aria-hidden="true">
                          ✓
                        </span>
                      </div>
                      <div className="wa-mode-help-wrap">
                        <p className="wa-mode-help">
                          Please login with your Email and Password to access all Deutsche Bank
                          applications that you are already registered.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="wa-form-col wa-form-col-fields">
                    <div className="wa-fields-box">
                      <div className="wa-field-placeholder">
                        <input
                          id="wa-email"
                          name="email"
                          type="email"
                          placeholder="* Please enter your Email"
                          autoComplete="email"
                        />
                      </div>

                      <div className="wa-remember-row">
                        <label className="wa-remember">
                          <input type="checkbox" name="remember" />
                          <span>Remember my Username</span>
                        </label>
                        <a href="#" className="wa-hint-link" aria-label="Help">
                          <img src={issoImg('images/hint_icon.png')} alt="" />
                        </a>
                      </div>

                      <div className="wa-field-placeholder wa-field-placeholder--password">
                        <input
                          id="wa-password"
                          name="password"
                          type="password"
                          placeholder="* Please enter your Password"
                          autoComplete="current-password"
                        />
                      </div>

                      <p className="wa-note">Fields marked with an asterisk (*) must be completed.</p>
                      <p className="wa-warning">
                        <strong>Unauthorized Access Warning</strong>: Access to this service is
                        prohibited unless authorised. Accessing programs or data unrelated to your
                        job is prohibited.
                      </p>

                      <div className="wa-form-actions">
                        <button type="reset" className="wa-btn wa-btn-clear">
                          Clear Form
                        </button>
                        <button type="submit" className="wa-btn wa-btn-submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>

            <aside className="wa-right-panel" aria-label="Updates">
              <div className="wa-updates-box">
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

        <footer className="wa-footer" id="layoutFooter">
          <div className="wa-footer-links">
            <a href="#">Cookie Notice</a>
            <a href="#">Imprint</a>
            <a href="#">Legal Resources</a>
          </div>
          <p className="wa-footer-date">5 Jul 2026</p>
          <p className="wa-copyright">Copyright © 2011 Deutsche Bank AG, Frankfurt am Main</p>
        </footer>
      </div>
    </div>
  )
}
