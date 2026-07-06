import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'
import '../AssetManagers.css'
import '../GlobalRecognition.css'

const corpImg = (path) => `https://corporates.db.com/${path}`
const awardImg = (path) => `https://corporates.db.com${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/01ef62d2-93e1-4a00-9d5d-24a19f98d00f/fileAsset?language_id=1'
  ),
}

const tabs = [
  {
    id: 'corporate-bank',
    label: 'Corporate Bank',
    awards: [
      {
        image: awardImg(
          '/files/images-new/2025/awards/best-global-transaction-bank-in-asia-pacific.png?language_id=1'
        ),
        title: 'Best Global Transaction Bank in Asia Pacific',
        source: 'The Asian Banker Transaction Finance Awards 2025',
      },
    ],
  },
  {
    id: 'cash-management',
    label: 'Cash Management',
    awards: [
      {
        image: awardImg('/files/images-new/2025/awards/cashman-logo25-281x379.png?language_id=1'),
        title: 'Leading Provider in Cash Management',
        text: 'No1 in North America\nNo1 in Germany, France, Spain\nNo1 in China, Malaysia, Pakistan',
        source: 'Euromoney Cash Management Survey 2025',
      },
      {
        image: awardImg('/files/images-new/2025/awards/tmi-awards-2025.jpg?language_id=1'),
        title: 'Best Cash – Fintech Collaboration in Payments',
        source: 'TMI Awards for Innovation and Excellence 2025',
      },
    ],
  },
  {
    id: 'institutional-cash',
    label: 'Institutional Cash Management',
    awards: [
      {
        image: awardImg(
          '/files/images-new/2025/awards/2025-tab-transaction-finance-awards-best-eur-clearing-bank-in-asia-pacific.png?language_id=1'
        ),
        title: 'Best Euro Clearing Bank in Asia Pacific (Winners since 2018)',
        source: 'The Asian Banker Transaction Finance Awards 2025',
      },
      {
        image: awardImg(
          '/files/images-new/2025/awards/2025-tab-transaction-finance-awards-best-global-clearing-bank-in-asia-pacific.png?language_id=1'
        ),
        title: 'Best Global Clearing Bank in Asia Pacific (Winners since 2015)',
        source: 'The Asian Banker Transaction Finance Awards 2025',
      },
    ],
  },
  {
    id: 'trade-finance',
    label: 'Trade Finance and Lending',
    awards: [
      {
        image: awardImg('/files/images-new/2026/clients/TFS26-Leading-Global-311x379.png?language_id=1'),
        title: 'A leading Trade Finance Provider globally',
        source: 'Euromoney Trade Finance Survey 2026',
      },
      {
        image: awardImg('/files/images-new/2025/awards/no-1-best-trade-finance-bank-200x379.png?language_id=1'),
        title: 'No 1 Best Trade Finance Bank',
        source: 'FINANCE Banken-Survey 2025',
      },
    ],
  },
  {
    id: 'trust-securities',
    label: 'Trust and Securities Services',
    awards: [
      {
        image: awardImg(
          '/files/images-new/2025/awards/ijglobal-winner-logo-2024-global-corporate-trust-provider-270x379.png?language_id=1'
        ),
        title: 'Best Depositary Receipt Bank (two consecutive years)',
        source: 'IJGlobal Awards 2024',
      },
      {
        image: awardImg('/files/images-new/2025/awards/2024-achievement-awards-logo-459x379.jpg?language_id=1'),
        title: 'Innovation in Smart Contract Technology',
        text: 'Best Custodian, China\nAgent Bank of the Year, Overall',
        source: 'Global Custodian, Leaders in Custody Asia 2025',
      },
    ],
  },
]

export default function GlobalRecognitionPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [tabOffset, setTabOffset] = useState(0)

  const current = tabs[activeTab]

  const scrollTabs = (direction) => {
    setTabOffset((offset) => {
      const next = offset + direction
      return Math.max(0, Math.min(next, tabs.length - 3))
    })
  }

  return (
    <SiteLayout activeSubNav="Clients" headerVariant="corporates" footerVariant="corporates">
      <main className="am-page gr-page">
        <section className="am-hero gr-hero" aria-label="Global recognition">
          <img className="am-hero-image" src={images.hero} alt="" />
          <div className="gr-hero-fade" aria-hidden="true" />
          <div className="cms-content-wrapper am-hero-content gr-hero-content">
            <h1>Global recognition for client solutions</h1>
          </div>
        </section>

        <div className="cms-content-wrapper am-content">
          <nav className="am-breadcrumb" aria-label="Breadcrumb">
            <span className="am-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/corporates">Clients</a>
            <span aria-hidden="true">&gt;</span>
            <span className="am-breadcrumb-current" aria-current="page">
              Global recognition
            </span>
          </nav>

          <p className="am-intro gr-intro">
            Our thought leadership, insights, and commitment to client service is regularly
            acknowledged in the marketplace.
            <br />
            <br />
            Here are just some of our recent awards
          </p>

          <section className="gr-tabs" aria-label="Award categories">
            <div className="gr-tab-bar">
              <div
                className="gr-tab-list"
                role="tablist"
                style={{ transform: `translateX(-${tabOffset * 140}px)` }}
              >
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    className={`gr-tab-btn${activeTab === index ? ' is-active' : ''}`}
                    aria-selected={activeTab === index}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="gr-tab-next"
                aria-label="Next tabs"
                onClick={() => scrollTabs(1)}
              >
                ›
              </button>
            </div>

            <div className="gr-tab-panel" role="tabpanel">
              {current.awards.map((award) => (
                <article key={award.title} className="gr-award-row">
                  <div className="gr-award-logo">
                    <img src={award.image} alt="" />
                  </div>
                  <div className="gr-award-copy">
                    <h3>{award.title}</h3>
                    {award.text && (
                      <p className="gr-award-text">
                        {award.text.split('\n').map((line) => (
                          <span key={line}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    )}
                    <p className="gr-award-source">
                      <em>{award.source}</em>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </SiteLayout>
  )
}
