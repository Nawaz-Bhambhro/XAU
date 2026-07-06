import { SiteLayout } from '../components/Layout'
import '../InvestorRelations.css'

const heroImage =
  'https://investor-relations.db.com/contentAsset/raw-data/f4b09348-4ac1-4e9d-9e36-1895f9314997/fileAsset?language_id=1'

const newsItems = [
  {
    meta: 'Media Release | June 30, 2026',
    title:
      "Kotak Mahindra Bank to acquire Deutsche Bank's retail banking, private banking and wealth management business in India",
  },
  {
    meta: 'Media Release | May 7, 2026',
    title: 'Deutsche Bank successfully completes issuance of Additional Tier 1 capital instruments',
  },
  {
    meta: 'Media Release | May 7, 2026',
    title: 'Deutsche Bank to issue Additional Tier 1 capital instruments',
  },
]

const gridCards = [
  {
    title: 'Strategy',
    text: 'Deutsche Bank has transformed its business model since 2019. As a result, Deutsche Bank is entering a phase of sustainable growth benefiting from a leaner and more focused set-up. The core of the growth strategy is to further expand Deutsche Bank\'s position as the "Global Hausbank."',
    cta: "Deutsche Bank's strategy",
  },
  { title: 'ESG' },
  {
    title: 'Financial Calendar',
    events: [
      {
        date: 'April 29, 2026',
        text: 'Earnings Report as of March 31, 2026 with Analyst Conference Call',
      },
      {
        date: 'April 30, 2026',
        text: 'Fixed Income Investor Conference Call',
      },
    ],
    cta: 'Financial Calendar',
  },
  { title: 'Client & Creditor Overview' },
  { title: 'Consensus Report' },
  { title: 'Other Presentations and Events' },
  { title: 'Investor Deep Dive' },
  { title: 'Deutsche Bank Annual Reports' },
  { title: 'DWS Financial Publications' },
]

export default function InvestorRelationsPage() {
  return (
    <SiteLayout
      activeSubNav="Reports and Events"
      activeUtility="Investor Relations"
      headerVariant="ir"
      footerVariant="ir"
    >
      <main className="ir-page">
        <section className="ir-hero" aria-label="Investor Relations">
          <img className="ir-hero-bg" src={heroImage} alt="" />
          <div className="ir-hero-overlay" />
          <div className="cms-content-wrapper ir-hero-content">
            <h1 className="ir-hero-title">Investor Relations</h1>
          </div>
        </section>

        <section className="ir-news-stock" aria-label="News and share price">
          <div className="cms-content-wrapper ir-news-stock-grid">
            <div className="ir-news-col">
              <ul className="ir-news-list">
                {newsItems.map((item) => (
                  <li key={item.title}>
                    <a href="#" className="ir-news-item">
                      <span className="ir-news-meta">{item.meta}</span>
                      <span className="ir-news-title">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#" className="ir-btn ir-btn-primary">More news</a>
            </div>

            <div className="ir-stock-col">
              <div className="ir-stock-box">
                <h2>Deutsche Bank Share (Xetra)</h2>
                <div className="price-row">
                  <span className="price-value">31.83</span>
                  <span className="price-unit">EUR</span>
                  <span className="price-change positive">
                    <span className="price-arrow" aria-hidden="true">▲</span>
                    <span>+ 0.51</span>
                  </span>
                </div>
                <p className="price-meta">Intraday (Xetra, Jul 3, 18:36)</p>
                <p className="price-meta">Relative Change: 1.61%</p>
                <p className="price-meta">High: 32.02 EUR</p>
                <p className="price-meta">Low: 31.49 EUR</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ir-grid-section" aria-label="Investor resources">
          <div className="cms-content-wrapper">
            <div className="ir-grid">
              {gridCards.map((card) => (
                <a key={card.title} href="#" className="ir-grid-card">
                  <h3>{card.title}</h3>
                  {card.text && <p className="ir-card-text">{card.text}</p>}
                  {card.events && (
                    <div className="ir-card-events">
                      {card.events.map((event) => (
                        <div key={event.date} className="ir-card-event">
                          <h4>{event.date}</h4>
                          <p>{event.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {card.cta && (
                    <span className="ir-card-cta">{card.cta}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
