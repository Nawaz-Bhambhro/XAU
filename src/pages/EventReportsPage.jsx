import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/518fb501-dfd3-4114-b95d-baf2e43202ca/fileAsset?language_id=1'
  ),
  sibos: corpImg(
    'contentAsset/image/06a10ef1-c561-4042-8a02-f05147570be5/fileAsset/filter/Resize,Jpeg/resize_w/1280/affa1028-87b0-4ac4-b1a8-47f91fb8644b.jpg'
  ),
  eurofinance: corpImg(
    'contentAsset/image/e3fe6bfe-95ac-4aa4-a0af-23a0e27a4185/fileAsset/filter/Resize,Jpeg/resize_w/1280/5713c6ea-aad2-42fc-8ce7-0c70360dfd5a.jpg'
  ),
  newsletter: corpImg(
    'contentAsset/image/c087a081-389e-4541-a3cb-7b14e6a86c04/fileAsset/filter/Resize,Jpeg/resize_w/1280/7650d730-5cca-4c70-bb8c-939b1638deab.jpg'
  ),
}

const eventList = [
  { id: 'sibos', label: 'Sibos' },
  { id: 'eurofinance', label: 'EuroFinance' },
  { id: 'network-forum', label: 'Network Forum' },
  { id: 'icc-banking', label: 'ICC Banking Commission Annual Meeting' },
]

const eventBanners = [
  {
    id: 'sibos',
    title: 'Sibos',
    image: images.sibos,
    href: '/in-focus/event-reports/sibos',
    variant: 'sibos',
    cta: 'More',
  },
  {
    id: 'eurofinance',
    title: 'EuroFinance',
    image: images.eurofinance,
    href: '/in-focus/event-reports/eurofinance',
    variant: 'eurofinance',
    cta: 'More',
  },
]

export default function EventReportsPage() {
  return (
    <SiteLayout activeSubNav="In focus" headerVariant="corporates" footerVariant="corporates">
      <main className="er-page">
        <section className="er-hero" aria-label="Event reports">
          <img className="er-hero-image" src={images.hero} alt="" />
          <div className="er-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper er-hero-content">
            <h1>Event reports</h1>
          </div>
        </section>

        <div className="cms-content-wrapper er-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/in-focus/focus-topics">In focus</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Event reports
            </span>
          </nav>

          <p className="er-lead">
            Each year, Deutsche Bank supports its Corporate Bank community at selected core global
            events. As the issues raised in conference proceedings have ongoing impact on
            international business, we have captured them in handy event reports here.
          </p>

          <div className="er-intro">
            <p>These include:</p>
            <ul className="er-event-list">
              {eventList.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="er-banners" aria-label="Event report highlights">
          <div className="cms-content-wrapper er-banners-stack">
            {eventBanners.map((banner) => (
              <article
                key={banner.id}
                id={banner.id}
                className={`er-banner er-banner--${banner.variant}`}
              >
                <img className="er-banner-image" src={banner.image} alt="" loading="lazy" />
                {banner.variant === 'eurofinance' ? (
                  <div className="er-banner-shade er-banner-shade--grey" aria-hidden="true" />
                ) : null}
                {banner.variant === 'sibos' ? (
                  <div className="er-banner-shade er-banner-shade--red" aria-hidden="true" />
                ) : null}
                <div className="er-banner-content">
                  <h2>
                    <a href={banner.href}>{banner.title}</a>
                  </h2>
                  <a
                    href={banner.href}
                    className={`corp-btn ${
                      banner.variant === 'eurofinance' ? 'corp-btn-outline-white' : 'corp-btn-solid'
                    }`}
                  >
                    {banner.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="er-newsletter" aria-label="Newsletter sign-up">
          <div className="cms-content-wrapper">
            <article className="er-banner er-banner--newsletter">
              <img className="er-banner-image" src={images.newsletter} alt="" loading="lazy" />
              <div className="er-banner-shade er-banner-shade--blue" aria-hidden="true" />
              <div className="er-banner-content">
                <h2>
                  <a
                    href="https://flow.db.com/newsbites/newsbites-subscription"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sign-up for
                    <br />
                    newsletters and
                    <br />
                    exclusive insights
                  </a>
                </h2>
                <a
                  href="https://flow.db.com/newsbites/newsbites-subscription"
                  target="_blank"
                  rel="noreferrer"
                  className="corp-btn corp-btn-solid"
                >
                  Sign me up
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
