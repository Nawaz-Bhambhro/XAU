import { SiteLayout } from '../components/Layout'
import '../Corporates.css'
import '../AssetManagers.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/8ab03c71-8772-4150-8b58-dadf589e74b1/fileAsset?language_id=1'
  ),
  corporateTrust: corpImg(
    'contentAsset/image/947bbe39-6235-4735-a5dc-d18a233d6bc4/fileAsset/filter/Resize,Jpeg/resize_w/1280/baa06e8c-0a79-412d-b8db-172f6eaa9782.jpg'
  ),
  whyChoose: corpImg(
    'contentAsset/image/33d24351-95c0-42e4-9900-8c778721a637/fileAsset/filter/Resize,Jpeg/resize_w/1280/9119afd7-a325-4f78-8cb3-9a3a39c8d657.jpg'
  ),
  newsletter: corpImg(
    'contentAsset/image/c087a081-389e-4541-a3cb-7b14e6a86c04/fileAsset/filter/Resize,Jpeg/resize_w/1280/7650d730-5cca-4c70-bb8c-939b1638deab.jpg'
  ),
}

const serviceLinks = [
  'Derivative Products',
  'Equity Products',
  'Industry Expertise',
  'Leveraged Finance',
  'M&A Advisory',
]

const solutionCards = [
  {
    title: 'Corporate trust',
    text: 'We offer a very broad range of services for diverse products, from complex securitisation and project finance to syndicated loans, debt exchanges and restructuring',
    cta: 'Find out more',
    image: images.corporateTrust,
    imagePosition: 'right center',
    textWidth: 'wide',
    theme: 'fund',
  },
  {
    title: 'Why choose Corporate Bank?',
    text: 'Review our work with clients and read our client stories',
    cta: 'More',
    image: images.whyChoose,
    imagePosition: 'right center',
    textWidth: 'wide',
    theme: 'why',
  },
]

export default function FinancialSponsorsPage() {
  return (
    <SiteLayout activeSubNav="Clients" headerVariant="corporates" footerVariant="corporates">
      <main className="am-page">
        <section className="am-hero am-hero-fs" aria-label="Financial sponsors">
          <img className="am-hero-image" src={images.hero} alt="" />
          <div className="am-hero-fs-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper am-hero-content">
            <h1>Financial sponsors</h1>
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
              Financial sponsors
            </span>
          </nav>

          <p className="am-intro">
            Deutsche Bank is one of the leading global providers of investment banking services and
            products to financial sponsor clients. The Financial Sponsors Group offers dedicated
            coverage to the world&apos;s most successful private equity firms, providing its clients
            with a &quot;one-stop-shop&quot; for all of Deutsche Bank&apos;s resources across products,
            industries and geographies
          </p>

          <p className="am-body am-body-tight">The Financial Sponsors Group delivers:</p>
          <ul className="fs-service-list">
            {serviceLinks.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>

          <p className="am-body">
            It is our mission to provide our clients with the highest quality services and products
            throughout all stages of a leveraged buy-out:
          </p>
          <p className="am-body">
            Idea generation - we aim to generate a continuous flow of creative, proprietary ideas in
            order to deliver investment opportunities to our clients through close co-operation with
            bankers across products, industries and geographies; Deutsche Bank&apos;s global corporate
            relationships as well as extensive local coverage network; and Deutsche Bank&apos;s global
            capabilities.
          </p>

          <h2 className="am-section-title am-explore-heading">Explore our solutions</h2>
        </div>

        <section className="am-solutions" aria-label="Explore our solutions">
          <div className="cms-content-wrapper am-solutions-stack">
            {solutionCards.map((card) => (
              <a
                key={card.title}
                href="#"
                className={`am-solution-block am-solution-block-${card.theme}`}
              >
                <img
                  src={card.image}
                  alt=""
                  style={{ objectPosition: card.imagePosition }}
                />
                <div
                  className={`am-solution-overlay am-solution-overlay-${card.theme}`}
                  aria-hidden="true"
                />
                <div
                  className={`am-solution-inner am-solution-inner-${card.textWidth} am-solution-inner-${card.theme}`}
                >
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className="corp-btn corp-btn-solid">{card.cta}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="am-promos">
          <div className="cms-content-wrapper am-promos-stack">
            <a href="#" className="am-promo am-promo-newsletter am-promo-block">
              <img src={images.newsletter} alt="" />
              <div className="am-promo-overlay am-promo-overlay-blue" aria-hidden="true" />
              <div className="am-promo-inner am-promo-inner-newsletter">
                <h2>
                  Sign-up for
                  <br />
                  newsletters and
                  <br />
                  exclusive insights
                </h2>
                <span className="corp-btn corp-btn-solid">Sign me up</span>
              </div>
            </a>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
