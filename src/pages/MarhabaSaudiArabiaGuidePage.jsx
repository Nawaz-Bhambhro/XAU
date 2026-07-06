import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  cover2025: corpImg(
    'contentAsset/image/e6dc5444-89a1-4268-8c6f-b5a3dfd1ecc4/fileAsset/filter/Resize,Jpeg/resize_w/1280/e6dc5444-89a1-4268-8c6f-b5a3dfd1ecc4.jpg?language_id=1'
  ),
}

const flipbookUrl =
  'https://corporates.db.com/static/flipbook/Deutsche-Bank-Marhaba-Saudi-Arabia-2024/index.html'

const pdf2025 = corpImg('files/documents/publications/2025/Deutsche-Bank-Marhaba-Saudi-Arabia-2025.pdf')
const pdf2024 = corpImg('files/documents/magazines/Deutsche-Bank-Marhaba-Saudi-Arabia-2024.pdf')

export default function MarhabaSaudiArabiaGuidePage() {
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
              Marhaba Saudi Arabia guide
            </span>
          </nav>
        </div>

        <section className="cc-year-section" aria-labelledby="msa-year-2025">
          <div className="cms-content-wrapper">
            <h2 id="msa-year-2025" className="cc-year-heading">
              2025
            </h2>
          </div>

          <div className="cms-content-wrapper cc-teaser">
            <div className="cc-teaser-image">
              <a
                href={pdf2025}
                title="Marhaba Saudi Arabia 2025"
                target="_blank"
                rel="noreferrer"
              >
                <img src={images.cover2025} alt="Marhaba Saudi Arabia 2025" loading="eager" />
              </a>
            </div>
            <div className="cc-teaser-content">
              <p className="cc-teaser-eyebrow">Trust and Securities Services</p>
              <h3 className="cc-teaser-title">
                <a
                  href={pdf2025}
                  title="Marhaba Saudi Arabia 2025"
                  target="_blank"
                  rel="noreferrer"
                >
                  Marhaba Saudi Arabia
                </a>
              </h3>
              <p className="cc-teaser-text">
                The comprehensive guide to investing in Saudi Arabia
              </p>
              <a
                href={pdf2025}
                className="cc-btn-outline"
                title="Marhaba Saudi Arabia 2025"
                target="_blank"
                rel="noreferrer"
              >
                Download pdf here
              </a>
            </div>
          </div>
        </section>

        <section className="cc-year-section cc-year-section--flipbook" aria-label="Marhaba Saudi Arabia 2024 edition">
          <div className="cms-content-wrapper cc-flipbook-wrap">
            <iframe
              className="cc-flipbook"
              src={flipbookUrl}
              title="Deutsche Bank Marhaba Saudi Arabia Edition 2024"
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
              title="Marhaba Saudi Arabia"
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
