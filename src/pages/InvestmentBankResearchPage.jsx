import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/374a2dea-040a-44e1-9e17-bee75925748c/fileAsset?language_id=1'
  ),
  podzept: corpImg(
    'contentAsset/image/d0bb895a-1137-420b-82aa-cf18fee5a11c/fileAsset/filter/Resize,Jpeg/resize_w/1280/cb6c7bf1-a5b9-45e4-926e-4b1258507b2f.jpg'
  ),
  linkedin: corpImg(
    'contentAsset/image/8b686038-4026-4560-b7d3-f2f14ca41be5/fileAsset/filter/Resize,Jpeg/resize_w/1280/90ac1ee9-e3f1-4844-a25e-317c2fd3a890.jpg'
  ),
}

export default function InvestmentBankResearchPage() {
  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="fic-page ib-research-page">
        <section className="cbs-hero ib-research-hero" aria-label="Research">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="cbs-hero-overlay ib-research-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper cbs-hero-content cbs-hero-content--light">
            <h1>Research</h1>
            <a href="https://www.dbresearch.com/" target="_blank" rel="noreferrer" className="corp-btn corp-btn-white ib-research-hero-btn">
              Find out more
            </a>
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
              Research
            </span>
          </nav>

          <p className="fic-intro ib-research-intro">
            Deutsche Bank Research is responsible for macro and microanalysis within Deutsche Bank
            Group and acts as consultant for the bank, its clients and stakeholders. We analyse
            relevant trends for the bank in financial markets, the economy and society and
            highlight risks and opportunities. Deutsche Bank Research delivers high-quality,
            independent analysis and actively promotes public debate on economic, fiscal, labour
            market and social policy issues.
          </p>
          <p className="cbs-body ib-research-links">
            <a href="https://research.db.com/" target="_blank" rel="noreferrer">
              Click here
            </a>{' '}
            to log into the DB Research client portal and{' '}
            <a href="https://www.dbresearch.com/" target="_blank" rel="noreferrer">
              click here
            </a>{' '}
            for more Research Insights.
          </p>
        </div>

        <section className="ib-research-banners" aria-label="Research highlights">
          <div className="cms-content-wrapper ib-research-banners-stack">
            <article className="fic-promo-banner">
              <div className="fic-promo-inner">
                <div className="fic-promo-media">
                  <img src={images.podzept} alt="" loading="lazy" decoding="async" />
                  <div className="fic-promo-gradient fic-promo-gradient--blue" aria-hidden="true" />
                </div>
                <div className="fic-promo-content">
                  <p className="fic-promo-eyebrow">#dbResearch</p>
                  <h2>
                    <a
                      href="https://www.dbresearch.de/PROD/RPS_DE-PROD/Podzept_Podcast_Reihe/PODCASTS.alias"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Podzept
                    </a>
                  </h2>
                  <p>
                    Podzept is a podcast which addresses the current issues driving the world of
                    economics and finance.
                  </p>
                  <a
                    href="https://www.dbresearch.de/PROD/RPS_DE-PROD/Podzept_Podcast_Reihe/PODCASTS.alias"
                    target="_blank"
                    rel="noreferrer"
                    className="corp-btn corp-btn-white"
                  >
                    More
                  </a>
                </div>
              </div>
            </article>

            <h2 className="ib-research-section-title">Follow Research on LinkedIn</h2>

            <article className="fic-promo-banner">
              <div className="fic-promo-inner">
                <div className="fic-promo-media">
                  <img src={images.linkedin} alt="" loading="lazy" decoding="async" />
                  <div className="fic-promo-gradient fic-promo-gradient--blue" aria-hidden="true" />
                </div>
                <div className="fic-promo-content">
                  <h2>
                    <a
                      href="https://www.linkedin.com/showcase/dbresearch/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read the latest news about Research on LinkedIn
                    </a>
                  </h2>
                  <a
                    href="https://www.linkedin.com/showcase/dbresearch/"
                    target="_blank"
                    rel="noreferrer"
                    className="corp-btn corp-btn-white"
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
