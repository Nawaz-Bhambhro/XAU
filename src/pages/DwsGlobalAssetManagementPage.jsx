import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../DwsGlobalAssetManagement.css'

function ChevronButton({ expanded, onClick, label }) {
  return (
    <button
      type="button"
      className="dwsps-toggle"
      aria-expanded={expanded}
      aria-label={expanded ? `Collapse ${label}` : `Expand ${label}`}
      onClick={onClick}
    >
      <span aria-hidden="true">{expanded ? '▲' : '▼'}</span>
    </button>
  )
}

export default function DwsGlobalAssetManagementPage() {
  const [activeOpen, setActiveOpen] = useState(false)
  const [passiveOpen, setPassiveOpen] = useState(false)
  const [alternativesOpen, setAlternativesOpen] = useState(false)
  const [sustainableOpen, setSustainableOpen] = useState(false)

  return (
    <SiteLayout activeSubNav="What we do">
      <main className="dwsps-page">
        <div className="cms-content-wrapper">
          <nav className="dwsps-breadcrumb" aria-label="Breadcrumb">
            You are here:
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/products-and-services">What we do</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/products-and-services">Products and services</a>
            <span aria-hidden="true">&gt;</span>
            <span className="dwsps-breadcrumb-current" aria-current="page">
              DWS
            </span>
          </nav>

          <div className="dwsps-layout">
            <article className="dwsps-main">
              <p className="dwsps-eyebrow">Products and services</p>
              <h1 className="dwsps-title">DWS — Global Asset Management</h1>

              <div className="dwsps-body">
                <p>
                  <a href="#" className="dwsps-inline-link">DWS</a> is the asset management arm of
                  XAU Global, delivering gold-backed investment solutions, structured return
                  programmes and Swiss vault custody to private and institutional clients worldwide.
                </p>
                <p>
                  Building on the X.A.U Global financial ecosystem, DWS offers access to active,
                  passive and alternative strategies across infrastructure, technology, energy and
                  real assets. Our tiered gold returns structure combines physical gold reserves with
                  project development yields, secured in Swiss vault facilities.
                </p>
                <p>
                  DWS operates as financial developers across seven service sectors, with teams in
                  Zurich, Dubai, London, New York, Hong Kong, Singapore and other global centres —
                  delivering integrated investment solutions through one consistent platform.
                </p>
              </div>
            </article>

            <aside className="dwsps-sidebar" aria-label="DWS sections">
              <div className="dwsps-item">
                <div className="dwsps-header">
                  <a
                    href="#dws-active"
                    className="dwsps-label"
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveOpen((o) => !o)
                    }}
                  >
                    Active
                  </a>
                  <ChevronButton label="Active" expanded={activeOpen} onClick={() => setActiveOpen((o) => !o)} />
                </div>
                {activeOpen && (
                  <div className="dwsps-panel" id="dws-active">
                    <p>
                      Gold-backed active strategies spanning structured development, project finance
                      and multi-asset portfolios, supported by research-driven portfolio construction
                      and Swiss vault custody.
                    </p>
                  </div>
                )}
              </div>

              <div className="dwsps-item">
                <div className="dwsps-header">
                  <a
                    href="#dws-passive"
                    className="dwsps-label"
                    onClick={(e) => {
                      e.preventDefault()
                      setPassiveOpen((o) => !o)
                    }}
                  >
                    Passive
                  </a>
                  <ChevronButton label="Passive" expanded={passiveOpen} onClick={() => setPassiveOpen((o) => !o)} />
                </div>
                {passiveOpen && (
                  <div className="dwsps-panel" id="dws-passive">
                    <p>
                      Index and rules-based gold-backed solutions designed to help clients implement
                      long-term investment views with transparent fee structures and vault-secured
                      holdings.
                    </p>
                  </div>
                )}
              </div>

              <div className="dwsps-item">
                <div className="dwsps-header">
                  <a
                    href="#dws-alternatives"
                    className="dwsps-label"
                    onClick={(e) => {
                      e.preventDefault()
                      setAlternativesOpen((o) => !o)
                    }}
                  >
                    Alternatives
                  </a>
                  <ChevronButton
                    label="Alternatives"
                    expanded={alternativesOpen}
                    onClick={() => setAlternativesOpen((o) => !o)}
                  />
                </div>
                {alternativesOpen && (
                  <div className="dwsps-panel" id="dws-alternatives">
                    <p>
                      Access to real assets and alternative strategies including land capital,
                      infrastructure, energy and technology projects — tailored to institutional and
                      high-net-worth investor needs.
                    </p>
                  </div>
                )}
              </div>

              <div className="dwsps-item">
                <div className="dwsps-header">
                  <a
                    href="#dws-sustainable"
                    className="dwsps-label"
                    onClick={(e) => {
                      e.preventDefault()
                      setSustainableOpen((o) => !o)
                    }}
                  >
                    Gold-backed investment strategies
                  </a>
                  <ChevronButton
                    label="Gold-backed investment strategies"
                    expanded={sustainableOpen}
                    onClick={() => setSustainableOpen((o) => !o)}
                  />
                </div>
                {sustainableOpen && (
                  <div className="dwsps-panel" id="dws-sustainable">
                    <p>
                      Tiered return structures backed by physical gold in Swiss vaults, combining
                      capital preservation with structured development yields for qualified investors.
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
