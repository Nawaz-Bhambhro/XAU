import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/9859b4d5-f307-43fe-ab22-89fc0c04c0d7/fileAsset?language_id=1'
  ),
  linkedin: corpImg(
    'contentAsset/image/8b686038-4026-4560-b7d3-f2f14ca41be5/fileAsset/filter/Resize,Jpeg/resize_w/1280/90ac1ee9-e3f1-4844-a25e-317c2fd3a890.jpg'
  ),
}

const accordions = [
  {
    id: 'mergers-acquisitions',
    title: 'Mergers and Acquisitions',
    content: (
      <p>
        The Mergers &amp; Acquisitions (M&amp;A) franchise is at the heart of the strategic dialogue
        with our long-standing global clients. We deliver advisory solutions across public takeovers,
        defence advisory, mergers and divestitures, dual track IPOs, business portfolio reviews and
        acquisition searches, competitor strategies and analyses, balance sheet optimisation, dividend
        policies and corporate governance.
      </p>
    ),
  },
  {
    id: 'capital-markets',
    title: 'Capital Markets',
    content: (
      <p>
        Capital Markets includes the Debt Capital Markets (DCM) team that consistently deliver high
        profile transactions for clients in investment grade debt, loan capital markets and private
        placements across developed and emerging markets. It also includes our global Equity Capital
        Markets (ECM) franchise that supports our clients in primary equity capital markets
        activities, providing primary equity products including IPOs, follow-on offerings, rights
        issues, SPACs, accelerated book builds and convertible / exchangeable bonds as well as
        structured equity transactions. The targeted ECM offering is supported by an equities sales
        force and full research offering across all major industry sectors.
      </p>
    ),
  },
]

export default function InvestmentBankingAndCapitalMarketsPage() {
  const [openAccordion, setOpenAccordion] = useState(null)

  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="fic-page ibcm-page">
        <section className="cbs-hero" aria-label="Investment Banking and Capital Markets">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper cbs-hero-content">
            <h1>Investment Banking and Capital Markets</h1>
          </div>
        </section>

        <div className="cms-content-wrapper cbs-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/corporate-bank-solutions">Solutions</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/investment-bank-solutions">Investment Bank solutions</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Investment Banking and Capital Markets
            </span>
          </nav>

          <p className="fic-intro">
            Our debt origination, mergers and acquisitions, and focused equity advisory and
            origination teams work with our clients across a full range of corporate finance services.
            We operate a global business across regions and client groups that enables our clients to
            optimise their business operations or valuation, invest or divest, and fund their
            activities with both well-established and innovative financing solutions.
          </p>

          <div className="fic-accordion">
            {accordions.map((item) => {
              const isOpen = openAccordion === item.id
              return (
                <div
                  key={item.id}
                  className={`fic-accordion-item${isOpen ? ' fic-accordion-open' : ''}`}
                >
                  <button
                    type="button"
                    className="fic-accordion-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                  >
                    {item.title}
                    <span className="fic-accordion-icon" aria-hidden="true">
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>
                  {isOpen && <div className="fic-accordion-panel">{item.content}</div>}
                </div>
              )
            })}
          </div>
        </div>

        <section className="fic-linkedin" aria-label="Investment Bank on LinkedIn">
          <div className="cms-content-wrapper fic-linkedin-stack">
            <article className="fic-linkedin-banner">
              <div className="fic-linkedin-inner">
                <div className="fic-linkedin-media">
                  <img src={images.linkedin} alt="" loading="lazy" decoding="async" />
                  <div className="fic-linkedin-gradient" aria-hidden="true" />
                </div>
                <div className="fic-linkedin-content">
                  <h2>
                    <a
                      href="https://www.linkedin.com/showcase/deutsche-bank-investment-bank/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read the latest news about the Investment Bank on LinkedIn
                    </a>
                  </h2>
                  <a
                    href="https://www.linkedin.com/showcase/deutsche-bank-investment-bank/"
                    target="_blank"
                    rel="noreferrer"
                    className="corp-btn corp-btn-solid"
                  >
                    More
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
