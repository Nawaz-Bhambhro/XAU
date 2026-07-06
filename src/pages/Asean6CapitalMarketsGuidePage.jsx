import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path.replace(/^\//, '')}`

const images = {
  cover2025: corpImg(
    'contentAsset/image/d582dd8e-1001-4992-991f-dc8d865851ac/fileAsset/filter/Resize,Jpeg/resize_w/1280/d582dd8e-1001-4992-991f-dc8d865851ac.jpg?language_id=1'
  ),
}

const flipbook2025 =
  'https://deutsche-bank.epaper-publishing-one.de/html5/ausgaben/deutsche_bank_corporate_bank_navigating_asean_6_capital_markets_2025/index.html'

const flipbook2024 =
  'https://corporates.db.com/static/flipbook/Deutsche-Bank-Navigating-ASEAN-6-Capital-Markets-2024/index.html'

const pdf2025 = corpImg(
  'files/documents/publications/2025/Deutsche-Bank-Corporate-Bank-Navigating-ASEAN-6-Capital-Markets-2025.pdf'
)
const pdf2024 = corpImg(
  'files/documents/magazines/Deutsche-Bank-Navigating-ASEAN-6-Capital-Markets-2024.pdf'
)

export default function Asean6CapitalMarketsGuidePage() {
  return (
    <SiteLayout activeSubNav="Publications" headerVariant="corporates" footerVariant="corporates">
      <main className="cc-page">
        <div className="cms-content-wrapper cc-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/publications/magazines">Publications</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/publications/magazines">Magazines</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Navigating ASEAN-6 Capital Markets guide
            </span>
          </nav>
        </div>

        <section className="cc-year-section" aria-labelledby="asean-year-2025">
          <div className="cms-content-wrapper">
            <h2 id="asean-year-2025" className="cc-year-heading">
              2025
            </h2>
          </div>

          <div className="cms-content-wrapper cc-teaser">
            <div className="cc-teaser-image">
              <a
                href={pdf2025}
                title="Navigating ASEAN-6 Capital Markets 2025"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={images.cover2025}
                  alt="Navigating ASEAN-6 Capital Markets 2025"
                  loading="eager"
                />
              </a>
            </div>
            <div className="cc-teaser-content">
              <p className="cc-teaser-eyebrow">Trust and Securities Services</p>
              <h3 className="cc-teaser-title">
                <a
                  href={pdf2025}
                  title="Navigating ASEAN-6 Capital Markets 2025"
                  target="_blank"
                  rel="noreferrer"
                >
                  Navigating ASEAN-6 Capital Markets
                </a>
              </h3>
              <p className="cc-teaser-text">
                A comprehensive market access, market repatriation and market structure guide for
                investors
              </p>
              <a
                href={pdf2025}
                className="cc-btn-outline"
                title="Navigating ASEAN-6 Capital Markets 2025"
                target="_blank"
                rel="noreferrer"
              >
                Download pdf here
              </a>
            </div>
          </div>

          <div className="cms-content-wrapper cc-flipbook-wrap cc-flipbook-wrap--spaced">
            <iframe
              className="cc-flipbook"
              src={flipbook2025}
              title="Navigating ASEAN-6 Capital Markets 2025"
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </section>

        <section className="cc-year-section cc-year-section--2024" aria-labelledby="asean-year-2024">
          <div className="cms-content-wrapper">
            <h2 id="asean-year-2024" className="cc-year-heading">
              2024
            </h2>
          </div>

          <div className="cms-content-wrapper cc-flipbook-wrap">
            <iframe
              className="cc-flipbook"
              src={flipbook2024}
              title="Navigating ASEAN-6 Capital Markets 2024"
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="no"
            />
          </div>

          <div className="cms-content-wrapper cc-download-wrap">
            <a
              href={pdf2024}
              className="corp-btn corp-btn-solid cc-download-btn"
              title="Navigating ASEAN-6 Capital Markets 2024"
              target="_blank"
              rel="noreferrer"
            >
              Download PDF
            </a>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
