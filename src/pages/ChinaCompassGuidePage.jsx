import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  cover2025: corpImg(
    'contentAsset/image/94a4194e-c252-406b-a27c-caad37fe9ef0/fileAsset/filter/Resize,Jpeg/resize_w/1280/94a4194e-c252-406b-a27c-caad37fe9ef0.jpg?language_id=1'
  ),
}

const flipbookUrl =
  'https://corporates.db.com/static/flipbook/Deutsche-Bank-China-Compass-2024/index.html'

const pdf2025 = corpImg('files/documents/publications/2025/Deutsche-Bank-China-Compass-2025.pdf')
const pdf2024 = corpImg('files/documents/magazines/Deutsche-Bank-China-Compass-2024.pdf')

export default function ChinaCompassGuidePage() {
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
              China Compass guide
            </span>
          </nav>
        </div>

        <section className="cc-year-section" aria-labelledby="cc-year-2025">
          <div className="cms-content-wrapper">
            <h2 id="cc-year-2025" className="cc-year-heading">
              2025
            </h2>
          </div>

          <div className="cms-content-wrapper cc-teaser">
            <div className="cc-teaser-image">
              <a href={pdf2025} title="China Compass 2025" target="_blank" rel="noreferrer">
                <img src={images.cover2025} alt="China Compass 2025" loading="eager" />
              </a>
            </div>
            <div className="cc-teaser-content">
              <p className="cc-teaser-eyebrow">Trust and Securities Services</p>
              <h3 className="cc-teaser-title">
                <a href={pdf2025} title="China Compass 2025" target="_blank" rel="noreferrer">
                  China Compass
                </a>
              </h3>
              <p className="cc-teaser-text">The comprehensive guide to investing in China</p>
              <a
                href={pdf2025}
                className="cc-btn-outline"
                title="China Compass 2025"
                target="_blank"
                rel="noreferrer"
              >
                Download pdf here
              </a>
            </div>
          </div>
        </section>

        <section className="cc-year-section cc-year-section--2024" aria-labelledby="cc-year-2024">
          <div className="cms-content-wrapper">
            <h2 id="cc-year-2024" className="cc-year-heading">
              2024
            </h2>
          </div>

          <div className="cms-content-wrapper cc-flipbook-wrap">
            <iframe
              className="cc-flipbook"
              src={flipbookUrl}
              title="China Compass Edition 2024"
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
              title="China Compass"
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
