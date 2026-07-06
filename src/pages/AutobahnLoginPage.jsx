import '../AutobahnLogin.css'

const issoImg = (path) => `https://login.isso.db.com/${path}`

const sidebarLinks = [
  'Reset DB Secure Authenticator',
  'Order DB Secure Authenticator',
  'Forgot Password?',
  'Register Security Device',
  'Self-Diagnostic Tool',
  'Download',
  'Security Awareness',
]

export default function AutobahnLoginPage() {
  return (
    <div className="abn-page">
      <div className="abn-layout">
        <header className="abn-header" id="headerArea">
          <div className="abn-header-top">
            <div className="abn-brand-block">
              <a href="/" className="abn-brand-link">
                <img
                  src={issoImg('images/ag_identifier.gif')}
                  alt="Deutsche Bank Authentication Gateway"
                  className="abn-brand-image"
                />
              </a>
              <p className="abn-fdic">
                FDIC FDIC-Insured – Backed by the full faith and credit of the U.S. Government.
                Deutsche Bank Trust Company Americas deposits are insured by the FDIC. Deutsche Bank
                AG, New York Branch deposits are not insured by the FDIC.
              </p>
            </div>
            <div className="abn-header-meta">
              <a href="https://www.db.com" className="abn-group-link">
                Deutsche Bank Group
              </a>
              <a href="/" className="abn-db-logo" title="Deutsche Bank" aria-label="Deutsche Bank">
                <span className="abn-db-logo-mark" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="abn-top-stage">
            <img
              src={issoImg('images/buehne_flach.gif')}
              alt="Autobahn"
              className="abn-stage-image"
            />
          </div>

          <div className="abn-action-bar">
            <a href="#" className="abn-request-access">
              Request Access <span aria-hidden="true">&gt;</span>
            </a>
          </div>
        </header>

        <main className="abn-main" id="content">
          <div className="abn-main-inner">
            <section className="abn-login-panel" aria-label="Login">
              <form className="abn-form" onSubmit={(e) => e.preventDefault()}>
                <div className="abn-form-row">
                  <label htmlFor="abn-username">
                    <span className="abn-required">*</span> Username:
                  </label>
                  <div className="abn-field-group">
                    <input id="abn-username" name="username" type="text" autoComplete="username" />
                  </div>
                </div>

                <div className="abn-form-row abn-form-row--checkbox">
                  <span className="abn-form-spacer" />
                  <label className="abn-checkbox-label">
                    <input type="checkbox" name="remember" />
                    Remember my Username
                    <button type="button" className="abn-help-btn" title="Help">
                      ?
                    </button>
                  </label>
                </div>

                <div className="abn-form-row">
                  <label htmlFor="abn-password">
                    <span className="abn-required">*</span> Password:
                  </label>
                  <div className="abn-field-group abn-password-group">
                    <input
                      id="abn-password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                    />
                    <button type="button" className="abn-key-btn" title="Virtual keyboard">
                      key
                    </button>
                  </div>
                </div>

                <div className="abn-form-row">
                  <label htmlFor="abn-login-mode">Login Mode:</label>
                  <select id="abn-login-mode" name="loginMode" defaultValue="password">
                    <option value="password">Password</option>
                    <option value="dbsa">DB Secure Authenticator</option>
                  </select>
                </div>

                <div className="abn-form-row">
                  <label htmlFor="abn-language">Language:</label>
                  <select id="abn-language" name="language" defaultValue="en">
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                  </select>
                </div>

                <div className="abn-form-actions">
                  <button type="submit" className="abn-btn abn-btn-submit">
                    Submit
                  </button>
                  <button type="reset" className="abn-btn abn-btn-clear">
                    Clear Form
                  </button>
                </div>
              </form>
            </section>

            <aside className="abn-sidebar" aria-label="Security information">
              <div className="abn-fraud-box">
                <div className="abn-fraud-icon" aria-hidden="true">
                  <span className="abn-shield">🛡</span>
                </div>
                <div className="abn-fraud-content">
                  <h2>Cyber Fraud Prevention</h2>
                  <p>
                    Deutsche Bank is committed to the security of our Internet solutions and to
                    providing our valued customers with information on safe computing.
                  </p>
                  <p>
                    We encourage you to be vigilant and to protect yourself against internet payment
                    fraud. Please be aware that fraudsters may attempt to impersonate Deutsche Bank
                    employees or systems.
                  </p>
                </div>
              </div>

              <ul className="abn-sidebar-links">
                {sidebarLinks.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>

              <p className="abn-warning">
                Unauthorised Access Warning: Access to this service is prohibited unless authorised.
                Accessing programs or data unrelated to your job is prohibited.
              </p>
            </aside>
          </div>
        </main>

        <footer className="abn-footer" id="layoutFooter">
          <div className="abn-footer-links">
            <a href="#">Disclaimer &amp; Privacy Policy</a>
            <a href="#">Cyber Fraud Prevention</a>
          </div>
          <p className="abn-copyright">Copyright © 2020 Deutsche Bank AG, Frankfurt am Main</p>
        </footer>
      </div>
    </div>
  )
}
