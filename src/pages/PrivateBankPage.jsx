import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../PrivateBank.css'

const worldwideLinks = [
  { label: 'Zurich', href: '/locations' },
  { label: 'Dubai', href: '/locations' },
  { label: 'London', href: '/locations' },
  { label: 'New York', href: '/locations' },
  { label: 'Hong Kong', href: '/locations' },
  { label: 'Singapore', href: '/locations' },
]

function ChevronButton({ expanded, onClick, label }) {
  return (
    <button
      type="button"
      className="pb-sidebar-toggle"
      aria-expanded={expanded}
      aria-label={expanded ? `Collapse ${label}` : `Expand ${label}`}
      onClick={onClick}
    >
      <span aria-hidden="true">{expanded ? '▲' : '▼'}</span>
    </button>
  )
}

export default function PrivateBankPage() {
  const [worldwideOpen, setWorldwideOpen] = useState(false)
  const [sustainableOpen, setSustainableOpen] = useState(false)

  return (
    <SiteLayout activeSubNav="What we do" headerVariant="private-bank">
      <main className="private-bank-page">
        <div className="cms-content-wrapper">
          <nav className="pb-breadcrumb" aria-label="Breadcrumb">
            You are here:
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/products-and-services">What we do</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/products-and-services">Products and services</a>
            <span aria-hidden="true">&gt;</span>
            <span className="pb-breadcrumb-current" aria-current="page">Private Bank</span>
          </nav>

          <div className="pb-layout">
            <article className="pb-main">
              <p className="pb-eyebrow">Products and Services</p>
              <h1 className="pb-title">XAU Global Land Capital</h1>

              <div className="pb-body">
                <p>
                  XAU Global Land Capital is the private banking division of the{' '}
                  <a href="#">X.A.U Global</a> financial ecosystem, specialising in land-backed
                  financing, structured development and wealth solutions for high-net-worth individuals,
                  family offices and private investors.
                </p>
                <p>
                  Our Land Capital platform unlocks value from land assets through structured
                  financing programmes starting from USD $50M. We combine deep expertise in real
                  asset development with gold-backed investment structures and Swiss vault custody to
                  deliver secure, long-term returns for our clients.
                </p>
                <p>
                  Land Capital is one of the four pillars of XAU Global, alongside the{' '}
                  <a href="/corporates">Corporate Bank</a>,{' '}
                  <a href="/investment-bank">Investment Bank</a> and{' '}
                  <a href="/dws">Asset Management</a>. With offices in Zurich, Dubai, London, New
                  York, Hong Kong and beyond, we serve clients across every major financial centre.
                </p>
              </div>

              <ul className="pb-links">
                <li><a href="#">Land Capital Financing</a></li>
                <li><a href="#">Gold-Backed Wealth Solutions</a></li>
                <li><a href="#">K.ULLAS Digital Platform</a></li>
              </ul>
            </article>

            <aside className="pb-sidebar" aria-label="Related links">
              <div className="pb-sidebar-item">
                <div className="pb-sidebar-header">
                  <a
                    href="#private-bank-worldwide"
                    className="pb-sidebar-label"
                    onClick={(e) => {
                      e.preventDefault()
                      setWorldwideOpen((open) => !open)
                    }}
                  >
                    Global offices
                  </a>
                  <ChevronButton
                    label="Global offices"
                    expanded={worldwideOpen}
                    onClick={() => setWorldwideOpen((open) => !open)}
                  />
                </div>
                {worldwideOpen && (
                  <div className="pb-sidebar-panel" id="private-bank-worldwide">
                    {worldwideLinks.map((link) => (
                      <p key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="pb-sidebar-item">
                <div className="pb-sidebar-header">
                  <a
                    href="#sustainable-finance"
                    className="pb-sidebar-label"
                    onClick={(e) => {
                      e.preventDefault()
                      setSustainableOpen((open) => !open)
                    }}
                  >
                    Gold-backed investment
                  </a>
                  <ChevronButton
                    label="Gold-backed investment"
                    expanded={sustainableOpen}
                    onClick={() => setSustainableOpen((open) => !open)}
                  />
                </div>
                {sustainableOpen && (
                  <div className="pb-sidebar-panel" id="sustainable-finance">
                    <p>
                      Our gold-backed investment programme combines physical gold reserves held in
                      Swiss vaults with structured development returns. Clients benefit from tiered
                      return structures, transparent reporting and secure custody through the K.ULLAS
                      platform.
                    </p>
                    <p>
                      <a href="#">Investment memorandum and programme details</a>
                    </p>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </SiteLayout>
  )
}
