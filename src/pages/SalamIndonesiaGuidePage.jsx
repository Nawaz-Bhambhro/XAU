import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path.replace(/^\//, '')}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/2052a80c-a5b7-4d2b-8ab6-8b6adceb6798/fileAsset?language_id=1'
  ),
  srbiEnglish: corpImg(
    'contentAsset/image/6a57aad6-f4cd-489c-a63d-3d6a6ea9b293/fileAsset/filter/Resize,Jpeg/resize_w/1280/6a57aad6-f4cd-489c-a63d-3d6a6ea9b293.jpg?language_id=1'
  ),
  srbiIndonesian: corpImg(
    'contentAsset/image/d97db994-06ff-4504-b08b-a0670cf2b892/fileAsset/filter/Resize,Jpeg/resize_w/1280/d97db994-06ff-4504-b08b-a0670cf2b892.jpg?language_id=1'
  ),
  edition2022: corpImg(
    'contentAsset/image/e72c831a-a4aa-4a17-a870-1998a9e39c39/fileAsset/filter/Resize,Jpeg/resize_w/1280/e72c831a-a4aa-4a17-a870-1998a9e39c39.jpg?language_id=1'
  ),
}

const srbiCards = [
  {
    id: 'srbi-english',
    eyebrow: 'Update 2024',
    title: 'Salam Indonesia Knowledge Series: SRBI',
    text: 'Insights to Sekuritas Rupiah Bank Indonesia',
    image: images.srbiEnglish,
    pdf: corpImg(
      'files/documents/magazines/Deutsche-Bank-White-Paper-Salam-Indonesia-Knowledge-Series-SRBI-Oct2024.pdf'
    ),
  },
  {
    id: 'srbi-indonesian',
    eyebrow: 'Update 2024',
    title: 'Salam Indonesia Knowledge Series: SRBI (Bahasa Indonesia)',
    text: 'Informasi Terkait Sekuritas Rupiah Bank Indonesia',
    image: images.srbiIndonesian,
    pdf: corpImg(
      'files/documents/magazines/Deutsche-Bank-White-Paper-Salam-Indonesia-Knowledge-Series-SRBI-Oct2024-vIndonesian-Latest.pdf'
    ),
  },
]

const edition2022 = {
  eyebrow: 'Edition 2022',
  title: 'Salam Indonesia',
  text: 'A guide for foreign investors: Initial Public Offering in Indonesian Equities',
  image: images.edition2022,
  pdf: corpImg('files/documents/publications/DB-Salam-Indonesia-2022.pdf?language_id=1'),
}

export default function SalamIndonesiaGuidePage() {
  return (
    <SiteLayout activeSubNav="Publications" headerVariant="corporates" footerVariant="corporates">
      <main className="si-page">
        <section className="si-hero" aria-label="Salam Indonesia">
          <img className="si-hero-image" src={images.hero} alt="" />
          <div className="si-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper si-hero-content">
            <h1>Salam Indonesia</h1>
          </div>
        </section>

        <div className="cms-content-wrapper si-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/publications/magazines">Publications</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/publications/magazines">Magazines</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Salam Indonesia guide
            </span>
          </nav>
        </div>

        <section className="si-cards" aria-label="Salam Indonesia publications">
          <div className="cms-content-wrapper si-cards-grid">
            {srbiCards.map((card) => (
              <article key={card.id} className="si-card si-card--image-left">
                <a
                  href={card.pdf}
                  className="si-card-image"
                  title={card.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={card.image} alt={card.title} loading="lazy" />
                </a>
                <div className="si-card-body">
                  <p className="si-card-eyebrow">{card.eyebrow}</p>
                  <h2 className="si-card-title">
                    <a href={card.pdf} title={card.title} target="_blank" rel="noreferrer">
                      {card.title}
                    </a>
                  </h2>
                  <p className="si-card-text">{card.text}</p>
                  <a
                    href={card.pdf}
                    className="si-btn-outline"
                    title={card.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="si-featured" aria-label="Salam Indonesia 2022 edition">
          <div className="cms-content-wrapper">
            <article className="si-card si-card--image-right">
              <div className="si-card-body">
                <p className="si-card-eyebrow">{edition2022.eyebrow}</p>
                <h2 className="si-card-title">
                  <a
                    href={edition2022.pdf}
                    title={edition2022.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {edition2022.title}
                  </a>
                </h2>
                <p className="si-card-text">{edition2022.text}</p>
                <a
                  href={edition2022.pdf}
                  className="si-btn-outline"
                  title={edition2022.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  View PDF
                </a>
              </div>
              <a
                href={edition2022.pdf}
                className="si-card-image si-card-image--featured"
                title={edition2022.title}
                target="_blank"
                rel="noreferrer"
              >
                <img src={edition2022.image} alt={edition2022.title} loading="lazy" />
              </a>
            </article>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
