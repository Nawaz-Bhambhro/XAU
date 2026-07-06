import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/73a8a4b0-5dc8-4441-9f5d-8cfb1da82a67/fileAsset?language_id=1'
  ),
  insight1: corpImg(
    'contentAsset/image/3456a3aa-85a1-4f77-a5ba-d7d5fa8f9151/fileAsset/filter/Resize,Jpeg/resize_w/1280/9fe5ded9-640b-4cca-b4cc-d004353c5d12.jpg'
  ),
  insight2: corpImg(
    'contentAsset/image/2b447d0e-d3bb-439d-ad42-c3a3754ebacf/fileAsset/filter/Resize,Jpeg/resize_w/1280/354fbc40-45d9-4690-9bea-59d396f97672l.jpg'
  ),
  insight3: corpImg(
    'contentAsset/image/ebe1ae70-8f8a-47af-beaf-151c09505f75/fileAsset/filter/Resize,Jpeg/resize_w/1280/c2496764-4a6f-4681-bae2-4197d10affe3l.jpg'
  ),
  insight4: corpImg(
    'contentAsset/image/05822bb7-ead4-46e2-aa39-d8a4365fbe42/fileAsset/filter/Resize,Jpeg/resize_w/1280/3bb428e7-655f-45aa-9730-f6979b699f2dl.jpg'
  ),
  research1: corpImg(
    'contentAsset/image/2b447d0e-d3bb-439d-ad42-c3a3754ebacf/fileAsset/filter/Resize,Jpeg/resize_w/1280/354fbc40-45d9-4690-9bea-59d396f97672l.jpg'
  ),
  research2: corpImg(
    'contentAsset/image/ebe1ae70-8f8a-47af-beaf-151c09505f75/fileAsset/filter/Resize,Jpeg/resize_w/1280/c2496764-4a6f-4681-bae2-4197d10affe3l.jpg'
  ),
  research3: corpImg(
    'contentAsset/image/05822bb7-ead4-46e2-aa39-d8a4365fbe42/fileAsset/filter/Resize,Jpeg/resize_w/1280/3bb428e7-655f-45aa-9730-f6979b699f2dl.jpg'
  ),
  exportFinance: corpImg(
    'contentAsset/image/b064980b-1a81-46f9-b078-f56f2a8ede7d/fileAsset/filter/Resize,Jpeg/resize_w/1280/60500d96-d9b6-4b00-92fe-7c84bfc0c0ec.jpg'
  ),
  supplyChain: corpImg(
    'contentAsset/image/442d83e5-bcab-4c58-8da3-f30e3b505316/fileAsset/filter/Resize,Jpeg/resize_w/1280/7c0e4321-e306-422b-99d9-c99055a45996.jpg'
  ),
  financing: corpImg(
    'contentAsset/image/b6f59885-72f6-4e54-9f4c-c1e3f28196d7/fileAsset/filter/Resize,Jpeg/resize_w/1280/0b0cc0dc-2e15-4731-b93f-c56835a7db39.jpg'
  ),
  payments: corpImg(
    'contentAsset/image/2a1beae0-2937-4ccb-96f6-2996ceee6c86/fileAsset/filter/Resize,Jpeg/resize_w/1280/af833b85-ce6e-4c1f-8d16-048031e2ea7a.jpg'
  ),
  riskManagement: corpImg(
    'contentAsset/image/36aa7e34-1f75-44f2-ba3f-a6b56f376656/fileAsset/filter/Resize,Jpeg/resize_w/1280/3c75fc4a-b213-46d7-9b90-f0f3d8011c52.jpg'
  ),
  issuerServices: corpImg(
    'contentAsset/image/e18bf508-e310-4511-987e-65db4adebdbd/fileAsset/filter/Resize,Jpeg/resize_w/1280/16e98346-c096-4de9-a799-4ff531bb88e8.jpg'
  ),
  transitionStory: corpImg(
    'contentAsset/image/1841643e-4be3-42c1-9b7f-a2900a635ae9/fileAsset/filter/Resize,Jpeg/resize_w/1280/c88d677d-3f98-4ddf-80bd-0ef2ad6236ba.jpg'
  ),
  climateBg: corpImg(
    'contentAsset/raw-data/41032a59-18b9-4437-a66b-873eb3b4878e/fileAsset?language_id=1'
  ),
  transitionPlan: corpImg(
    'contentAsset/image/951ff31d-e823-41c2-8b14-f0502f0a84e1/fileAsset/filter/Resize,Jpeg/resize_w/1280/dab8c876-8ecc-4172-ab9b-ccb88f3758ea.jpg'
  ),
  sustainabilityDeepDive: corpImg(
    'contentAsset/image/37b63027-249d-4e50-a99a-4853fecf90d6/fileAsset/filter/Resize,Jpeg/resize_w/1280/ced50ea3-db92-48c4-ae44-a467afea276c.jpg'
  ),
  cop: corpImg(
    'contentAsset/image/d7f8bf79-b99a-4f21-879d-074ea5c7a17d/fileAsset/filter/Resize,Jpeg/resize_w/1280/2b4071ab-d56a-41fb-9c52-f88abb27b058.jpg'
  ),
}

const insightCards = [
  {
    title: 'How AI can assist in the green transition',
    image: images.insight1,
    href: 'https://corporates.db.com/more/latest-news/',
  },
  {
    title: 'ESG: A transition that requires strong business cases',
    image: images.insight2,
    href: 'https://corporates.db.com/more/latest-news/',
  },
  {
    title: 'ESG: Supporting the transition across all sectors',
    image: images.insight3,
    href: 'https://corporates.db.com/more/latest-news/',
  },
  {
    title: 'Climate Sustainability: Trends and outcomes to expect in 2026',
    image: images.insight4,
    href: 'https://corporates.db.com/more/latest-news/',
  },
]

const researchCards = [
  {
    title: 'Climate Sustainability: Trends and outcomes to expect in 2026',
    image: images.research1,
    href: 'https://www.dbresearch.com/PROD/RPS_EN-PROD/PDFVIEWER.calias?pdfViewerPdfUrl=PROD0000000000615056&rwnode=REPORT',
  },
  {
    title: 'Navigating climate and geopolitical realities; COP30 takeaways',
    image: images.research2,
    href: 'https://www.dbresearch.com/PROD/RPS_EN-PROD/PDFVIEWER.calias?pdfViewerPdfUrl=PROD0000000000611234&rwnode=REPORT',
  },
  {
    title: 'The global renaissance of nuclear energy',
    image: images.research3,
    href: 'https://www.dbresearch.com/PROD/RPS_EN-PROD/PROD0000000000590844/The_global_renaissance_of_nuclear_energy.pdf',
  },
]

const solutionTiles = [
  {
    title: 'Export and import finance',
    image: images.exportFinance,
    href: '/solutions/corporate-bank-solutions/sustainable-finance/export-and-import-finance',
  },
  {
    title: 'Supply chain finance',
    image: images.supplyChain,
    href: '/solutions/corporate-bank-solutions/sustainable-finance/supply-chain-finance',
  },
  {
    title: 'Financing',
    image: images.financing,
    href: '/solutions/corporate-bank-solutions/sustainable-finance/financing',
  },
  {
    title: 'Payments and liquidity',
    image: images.payments,
    href: '/solutions/corporate-bank-solutions/sustainable-finance/payments-and-liquidity',
    wide: true,
  },
  {
    title: 'Risk management',
    image: images.riskManagement,
    href: '/solutions/corporate-bank-solutions/sustainable-finance/risk-management',
  },
  {
    title: 'Issuer and investor services',
    image: images.issuerServices,
    href: '/solutions/corporate-bank-solutions/sustainable-finance/issuer-and-investor-services',
  },
]

const climateCards = [
  {
    title: 'Transition Plan',
    image: images.transitionPlan,
    href: 'https://www.db.com/what-we-do/responsibility/sustainability/transition-plan/?language_id=1',
  },
  {
    title: 'Sustainability Deep Dive',
    image: images.sustainabilityDeepDive,
    href: 'https://www.db.com/what-we-do/responsibility/sustainability/sustainability-deep-dive',
  },
  {
    title: 'UN Climate Change Conference (COP)',
    image: images.cop,
    href: 'https://www.db.com/what-we-do/focus-topics/deutsche-bank-at-cop?language_id=1',
  },
]

const dossiers = [
  {
    dossier: 'Dossier #20: Building smart and green',
    title: 'How climate action begins with construction, conviction and capital',
    image: corpImg(
      'contentAsset/image/2a3a26b5-de01-4ebe-b037-a13b8cbba02c/fileAsset/filter/Resize,Jpeg/resize_w/1280/c1bae9be-b8c3-4686-aa3b-ac3f621ee815l.jpg'
    ),
    href: 'https://www.db.com/what-next/responsible-growth/construction-bauen/index?language_id=1',
  },
  {
    dossier: 'Dossier #17: Turning the tide',
    title: 'Why protecting biodiversity is crucial for our future',
    image: corpImg(
      'contentAsset/image/2b9a39af-f3f2-49d2-ae4b-690854a1ea95/fileAsset/filter/Resize,Jpeg/resize_w/1280/24abe440-9553-4c12-91dd-27f2cc382beal.jpg'
    ),
    href: 'https://www.db.com/what-next/responsible-growth/Biodiversity--Biodiversitaet/index?language_id=1',
  },
  {
    dossier: 'Dossier #15: Labour migration, skills shortage and AI',
    title: 'Rethinking the way we work',
    image: corpImg(
      'contentAsset/image/364130af-563d-46fb-9dfa-f54c7d922ae3/fileAsset/filter/Resize,Jpeg/resize_w/1280/3da323dc-ae17-4343-90ee-2adf8c8731eal.jpg'
    ),
    href: 'https://www.db.com/what-next/entrepreneurial-success/Future-of-Work--Neue-Arbeitswelt/index?language_id=1',
  },
  {
    dossier: 'Dossier #14: Stop waste!',
    title: 'Circular economy – a way out of the dead end?',
    image: corpImg(
      'contentAsset/image/e1671fd0-5f7e-4605-8678-fbcf31452be6/fileAsset/filter/Resize,Jpeg/resize_w/1280/11a62d24-2aa5-4f9b-b868-d6d88e55b30bl.jpg'
    ),
    href: 'https://www.db.com/what-next/responsible-growth/Circular-Economy--Kreislaufwirtschaft/Index?language_id=1',
  },
  {
    dossier: 'Dossier #11: Time is running out!',
    title: 'Climate emergency: can green tech save us?',
    image: corpImg(
      'contentAsset/image/4ac9c6fa-a222-4262-8a8d-07f10310cbde/fileAsset/filter/Resize,Jpeg/resize_w/1280/195e75a8-c7f1-417f-ba85-fba734ba957el.jpg'
    ),
    href: 'https://www.db.com/what-next/responsible-growth/climate-technologies--Klimatechnologien/',
  },
  {
    dossier: 'Dossier #8: Beat the heat',
    title: 'How sustainable cities can be a solution to climate change',
    image: corpImg(
      'contentAsset/image/28c99016-809a-414c-8429-6197c69f2345/fileAsset/filter/Resize,Jpeg/resize_w/1280/c09d1d76-df63-4c41-9268-4a8e7aa61a47l.jpg'
    ),
    href: 'https://www.db.com/what-next/responsible-growth/cities/',
  },
]

const contactMailto =
  'mailto:sustainable-finance.corporate-bank@db.com?body=Please%20contact%20me%20regarding%0A%0A%0A%0AContact%20details:%0A*Company%20name%20is:%0A*Company%20address:%0A*Annual%20Revenue:%0A*Sector:%0A*Contact%20person:%0A*Phone:%0A*Email:'

const VISIBLE_INSIGHTS = 4

export default function SustainableFinancePage() {
  const [insightOffset, setInsightOffset] = useState(0)

  const canInsightPrev = insightOffset > 0
  const canInsightNext = insightOffset + VISIBLE_INSIGHTS < insightCards.length

  return (
    <SiteLayout activeSubNav="In focus" headerVariant="corporates" footerVariant="corporates">
      <main className="stf-page">
        <section className="stf-hero" aria-label="Sustainability is key to success">
          <img className="stf-hero-image" src={images.hero} alt="" />
          <div className="stf-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper stf-hero-content">
            <h1>Sustainability is key to success</h1>
          </div>
        </section>

        <div className="cms-content-wrapper stf-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions">Solutions</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/corporate-bank-solutions">Corporate Bank solutions</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Sustainable and Transformation Finance
            </span>
          </nav>

          <h2 className="stf-page-title">Sustainable &amp; Transformation Finance</h2>
          <p className="stf-body">
            We believe that success can be achieved when we recognise the opportunities that are
            brought by change. In the future, being commercially successful will be inextricably
            linked with being socially and environmentally responsible.
          </p>
          <p className="stf-body">
            As your Global Hausbank, we can help you turn your transformation into a competitive
            advantage. We will support you every step of the way with our expertise and sustainable
            financial solutions.
          </p>
          <p className="stf-body">Talk to us today.</p>
        </div>

        <section className="stf-insights" aria-label="Latest insights">
          <div className="cms-content-wrapper">
            <div className="stf-insights-header">
              <div className="stf-carousel-nav">
                <button
                  type="button"
                  className="stf-carousel-btn"
                  aria-label="Previous"
                  disabled={!canInsightPrev}
                  onClick={() => setInsightOffset((offset) => Math.max(0, offset - 1))}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="stf-carousel-btn"
                  aria-label="Next"
                  disabled={!canInsightNext}
                  onClick={() =>
                    setInsightOffset((offset) =>
                      Math.min(insightCards.length - VISIBLE_INSIGHTS, offset + 1)
                    )
                  }
                >
                  ›
                </button>
              </div>
            </div>
            <div className="stf-insights-viewport">
              <div
                className="stf-insights-track"
                style={{ transform: `translateX(-${insightOffset * (100 / VISIBLE_INSIGHTS)}%)` }}
              >
                {insightCards.map((card) => (
                  <article key={card.title} className="stf-insight-card">
                    <a href={card.href} className="stf-insight-image" target="_blank" rel="noreferrer">
                      <img src={card.image} alt="" loading="lazy" />
                    </a>
                    <div className="stf-insight-body">
                      <h3>
                        <a href={card.href} target="_blank" rel="noreferrer">
                          {card.title}
                        </a>
                      </h3>
                      <a
                        href={card.href}
                        target="_blank"
                        rel="noreferrer"
                        className="corp-btn corp-btn-solid"
                      >
                        Read more
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <a
              href="https://corporates.db.com/more/latest-news/"
              target="_blank"
              rel="noreferrer"
              className="stf-btn-gray"
            >
              Latest News Corporate Bank
            </a>
          </div>
        </section>

        <section className="stf-research" aria-label="We keep you in the know">
          <div className="stf-research-intro">
            <div className="cms-content-wrapper">
              <h2>We keep you in the know</h2>
              <p>
                dbSustainability research covers a wide range of topics addressing the green
                transformation, social responsibility and governance considerations.
              </p>
            </div>
          </div>
          <div className="cms-content-wrapper stf-research-grid">
            {researchCards.map((card) => (
              <article key={card.title} className="stf-research-card">
                <a
                  href={card.href}
                  className="stf-research-image"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={card.image} alt="" loading="lazy" />
                </a>
                <div className="stf-research-body">
                  <h3>
                    <a href={card.href} target="_blank" rel="noreferrer">
                      {card.title}
                    </a>
                  </h3>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="corp-btn corp-btn-solid"
                  >
                    More
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="cms-content-wrapper stf-research-footer">
            <a
              href="https://www.dbresearch.com/PROD/RPS_EN-PROD/RPS_EN-PROD_NAVIGATION.alias"
              target="_blank"
              rel="noreferrer"
              className="stf-btn-gray"
            >
              More sustainable research
            </a>
          </div>
        </section>

        <section className="stf-solutions" aria-label="Solutions at a glance">
          <div className="cms-content-wrapper">
            <h2 className="stf-section-heading">
              Sustainable &amp; Transformation Finance solutions at a glance
            </h2>
            <div className="stf-solutions-grid">
              {solutionTiles.map((tile) => (
                <a
                  key={tile.title}
                  href={tile.href}
                  className={`stf-solution-tile${tile.wide ? ' stf-solution-tile-wide' : ''}`}
                >
                  <img src={tile.image} alt="" loading="lazy" />
                  <div className="stf-solution-tile-overlay" aria-hidden="true" />
                  <h3>{tile.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="stf-cta-banner" aria-label="Get in touch">
          <div className="cms-content-wrapper stf-cta-banner-inner">
            <h2>Do you plan to integrate Sustainable &amp; Transformation Finance solutions?</h2>
            <a href={contactMailto} className="corp-btn corp-btn-outline-white">
              Get in touch
            </a>
          </div>
        </section>

        <section className="stf-transition" aria-label="Transition stories">
          <div className="cms-content-wrapper">
            <h2 className="stf-section-heading">Transition stories</h2>
          </div>
          <div className="stf-featured-story">
            <div className="stf-featured-text">
              <p className="stf-featured-eyebrow">Featured stories</p>
              <h3>Green steel – Salzgitter&apos;s ambitious vision for the industry</h3>
              <p>
                Salzgitter AG is transforming steel production with its SALCOS project, aiming to
                produce climate-neutral steel using hydrogen instead of coal. Deutsche Bank is
                supporting this ambitious transition.
              </p>
              <a
                href="https://corporates.db.com/more/latest-news/"
                target="_blank"
                rel="noreferrer"
                className="corp-btn corp-btn-solid"
              >
                Read more
              </a>
            </div>
            <div className="stf-featured-image">
              <img src={images.transitionStory} alt="" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="stf-climate" aria-label="Deutsche Bank's approach to Climate Change">
          <img className="stf-climate-bg" src={images.climateBg} alt="" />
          <div className="stf-climate-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper stf-climate-content">
            <h2 className="stf-section-heading stf-section-heading-dark">
              Deutsche Bank&apos;s approach to Climate Change
            </h2>
            <div className="stf-climate-grid">
              {climateCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="stf-climate-card"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={card.image} alt="" loading="lazy" />
                  <div className="stf-climate-card-overlay" aria-hidden="true" />
                  <h3>{card.title}</h3>
                </a>
              ))}
            </div>
            <a
              href="https://investor-relations.db.com/esg/index?language_id=1"
              target="_blank"
              rel="noreferrer"
              className="corp-btn corp-btn-solid stf-climate-btn"
            >
              Read more
            </a>
          </div>
        </section>

        <section className="stf-media-btn-wrap">
          <div className="cms-content-wrapper">
            <a
              href="https://www.db.com/media/news"
              target="_blank"
              rel="noreferrer"
              className="stf-btn-gray"
            >
              Media News Deutsche Bank
            </a>
          </div>
        </section>

        <section className="stf-dossiers" aria-label="What Next Dossiers">
          <div className="cms-content-wrapper">
            <h2 className="stf-section-heading">What Next Dossiers</h2>
            <div className="stf-dossiers-grid">
              {dossiers.map((item) => (
                <article key={item.dossier} className="stf-dossier-card">
                  <a href={item.href} className="stf-dossier-image" target="_blank" rel="noreferrer">
                    <img src={item.image} alt="" loading="lazy" />
                  </a>
                  <div className="stf-dossier-body">
                    <p className="stf-dossier-label">{item.dossier}</p>
                    <h3>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    </h3>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="corp-btn corp-btn-solid"
                    >
                      Explore the dossier
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <a
              href="https://www.db.com/what-next/"
              target="_blank"
              rel="noreferrer"
              className="stf-btn-gray stf-dossiers-all"
            >
              View all What Next articles
            </a>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
