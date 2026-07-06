import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/f188f0c3-4846-4170-b342-ed78bf0a59f6/fileAsset?language_id=1'
  ),
  namasteIndia: corpImg(
    'contentAsset/image/0f6e745d-db30-4e0d-a60c-c6883318a5bf/fileAsset/filter/Resize,Jpeg/resize_w/1280/66b10c42-3ba0-48d0-acc1-e2c51f45ac8e.jpg'
  ),
  chinaCompass: corpImg(
    'contentAsset/image/f0be1df8-9ac4-4f4e-9401-3231e3a1069b/fileAsset/filter/Resize,Jpeg/resize_w/1280/305d6db7-3553-458b-8ae6-5616680f3aed.jpg'
  ),
  marhabaSaudi: corpImg(
    'contentAsset/image/c6cbe1ff-b958-465a-b5a5-d68790a25246/fileAsset/filter/Resize,Jpeg/resize_w/1280/0a929778-fb50-4410-9262-2630e15cbbbe.jpg'
  ),
  asean6: corpImg(
    'contentAsset/image/fdc27dce-0f28-4a2d-a457-434b535d741a/fileAsset/filter/Resize,Jpeg/resize_w/1280/3ba2ce15-30b5-4284-a667-49881b6c6286.jpg'
  ),
  salamIndonesia: corpImg(
    'contentAsset/image/17bfe6bd-a155-4d1f-8003-105f426be19d/fileAsset/filter/Resize,Jpeg/resize_w/1280/306b54cc-54ce-465d-b680-4cdef05db8dd.jpg'
  ),
}

const portfolioLinks = [
  { id: 'namaste-india', label: 'Namaste India', href: '/publications/magazines/namaste-india' },
  {
    id: 'marhaba-saudi-arabia',
    label: 'Marhaba Saudi Arabia',
    href: '/publications/magazines/marhaba-saudi-arabia',
  },
  { id: 'china-compass', label: 'China Compass', href: '/publications/magazines/china-compass' },
  {
    id: 'asean-6',
    label: 'ASEAN-6',
    href: '/publications/magazines/navigating-asean-6-capital-markets',
  },
  { id: 'salam-indonesia', label: 'Salam Indonesia', href: '/publications/magazines/salam-indonesia' },
]

const guides = [
  {
    id: 'namaste-india',
    title: 'Namaste India',
    text: 'The comprehensive guide for professionals investing in India in English, Korean and Japanese languages',
    image: images.namasteIndia,
    href: '/publications/magazines/namaste-india',
    variant: 'featured',
  },
  {
    id: 'china-compass',
    title: 'China Compass',
    text: 'The comprehensive guide to investing in China',
    image: images.chinaCompass,
    href: '/publications/magazines/china-compass',
    variant: 'blue',
  },
  {
    id: 'marhaba-saudi-arabia',
    title: 'Marhaba Saudi Arabia',
    text: 'The comprehensive guide to investing in Saudi Arabia',
    image: images.marhabaSaudi,
    href: '/publications/magazines/marhaba-saudi-arabia',
    variant: 'blue',
  },
  {
    id: 'asean-6',
    title: 'Navigating ASEAN-6 Capital Markets',
    text: 'A comprehensive market access, market repatriation and market structure guide for investors',
    image: images.asean6,
    href: '/publications/magazines/navigating-asean-6-capital-markets',
    variant: 'blue',
  },
  {
    id: 'salam-indonesia',
    title: 'Salam Indonesia',
    text: 'A guide for foreign investors: Initial public offerings in Indonesian equities',
    image: images.salamIndonesia,
    href: '/publications/magazines/salam-indonesia',
    variant: 'blue',
  },
]

export default function CapitalMarketsGuidesPage() {
  return (
    <SiteLayout activeSubNav="Publications" headerVariant="corporates" footerVariant="corporates">
      <main className="cmg-page">
        <section className="cmg-hero" aria-label="Market-focused capital markets guides">
          <img className="cmg-hero-image" src={images.hero} alt="" />
          <div className="cmg-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper cmg-hero-content">
            <h1>Market-focused capital markets guides</h1>
          </div>
        </section>

        <div className="cms-content-wrapper cmg-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/publications/magazines">Publications</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Market-focused capital markets guides
            </span>
          </nav>

          <div className="cmg-intro">
            <p>
              Our capital markets guides, prepared each year by Deutsche Bank experts from our
              Trust and Securities Services team, provide investors with the essential information
              needed for each featured region, including a summary of investment routes, foreign
              direct investment, and trading procedures.
            </p>
            <p>
              They also outline the relevant tax and regulatory environments. All past editions remain
              available for download for readers who need to reference the historical legal or
              regulatory landscape of a particular jurisdiction.
            </p>
            <p>Our current portfolio includes:</p>
            <ul className="cmg-portfolio-list">
              {portfolioLinks.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
            <p>So pick up one of our comprehensive capital market guides</p>
          </div>
        </div>

        <section className="cmg-guides" aria-label="Capital markets guides">
          <div className="cms-content-wrapper cmg-guides-stack">
            {guides.map((guide) => (
              <article
                key={guide.id}
                id={guide.id}
                className={`cmg-guide cmg-guide--${guide.variant}`}
              >
                <img className="cmg-guide-image" src={guide.image} alt="" loading="lazy" />
                <div
                  className={`cmg-guide-shade cmg-guide-shade--${guide.variant}`}
                  aria-hidden="true"
                />
                <div className="cmg-guide-content">
                  <h2>
                    <a href={guide.href}>{guide.title}</a>
                  </h2>
                  <p>{guide.text}</p>
                  <a
                    href={guide.href}
                    className={`corp-btn ${
                      guide.variant === 'featured' ? 'corp-btn-solid' : 'corp-btn-outline-white'
                    }`}
                  >
                    View the guides
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
