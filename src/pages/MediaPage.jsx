import { SiteLayout } from '../components/Layout'
import '../Media.css'

const latestNews = [
  {
    meta: 'Media Release | July 3, 2026',
    title:
      "Deutsche Bank advances Mekong Capital's impact fund backed by the Green Climate Fund",
  },
  {
    meta: 'This is Deutsche Bank | Podcast | July 2, 2026',
    title: 'How do you modernise the tech stack of a 150-year-old bank?',
  },
  {
    meta: 'Media Release | July 2, 2026',
    title:
      'Signature of a collective bargaining agreement at Postbank for 2026 and 2027',
  },
  {
    meta: 'Media Release | June 30, 2026',
    title:
      "Kotak Mahindra Bank to acquire Deutsche Bank's retail banking, private banking and wealth management business in India",
  },
]

const conferences = [
  { date: 'August 4, 2026', title: 'Data Center Summit' },
  { date: 'August 6, 2026', title: 'Chicago Industrials Summit' },
  { date: 'September 2, 2026', title: 'Technology Conference' },
  { date: 'September 3, 2026', title: 'dbAccess Back to School Utilities Conference' },
]

const mediaTiles = [
  {
    title: 'Social media',
    cta: 'All recent posts',
    variant: 'navy',
    ctaStyle: 'outline',
  },
  {
    title: 'Pictures',
    cta: 'Choose from 8 categories',
    variant: 'image',
    image:
      'https://www.db.com/contentAsset/image/7fc5890e-d8f2-4e0b-8602-95579136bca7/fileAsset/filter/Resize,Jpeg/resize_w/640/7fc5890e-d8f2-4e0b-8602-95579136bca7.jpg',
    ctaStyle: 'solid',
  },
  {
    title: 'Videos',
    cta: 'Watch videos',
    variant: 'image',
    image:
      'https://www.db.com/contentAsset/image/f1710de8-ea0a-4f16-8aef-be8389ead254/fileAsset/filter/Resize,Jpeg/resize_w/640/f1710de8-ea0a-4f16-8aef-be8389ead254.jpg',
    ctaStyle: 'solid',
  },
  {
    title: 'Research',
    cta: 'Latest from Deutsche Bank Research',
    variant: 'navy',
    ctaStyle: 'white',
  },
]

const companyLinks = [
  { label: 'Fact sheet', icon: 'pdf' },
  { label: 'News and RSS feed', icon: 'rss' },
  { label: 'Boards and committees', icon: 'list' },
  { label: 'Reports', icon: 'doc' },
  { label: 'Financial calendar', icon: 'calendar' },
  { label: 'Share price information', icon: 'chart' },
  { label: 'Locations worldwide', icon: 'pin' },
  { label: 'History', icon: 'clock' },
]

function LinkIcon({ type }) {
  const common = { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }
  switch (type) {
    case 'pdf':
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2 5 5h-5V4zM8 13h8v2H8v-2zm0 4h5v2H8v-2z" />
        </svg>
      )
    case 'rss':
      return (
        <svg {...common}>
          <path d="M6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-6a8 8 0 0 1 8 8h-3a5 5 0 0 0-5-5v-3zm0-6a14 14 0 0 1 14 14h-3a11 11 0 0 0-11-11v-3z" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...common}>
          <path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-3v2H10V2H7zm12 8H5v10h14V10z" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common}>
          <path d="M3 3v18h18v-2H5V3H3zm16 4-5 5-4-4-6 6v2.83l6-6 4 4 5-5V7z" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11H7v-2h4V7h2v6z" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2 5 5h-5V4z" />
        </svg>
      )
  }
}

function HomeIcon() {
  return (
    <svg className="breadcrumb-home" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </svg>
  )
}

export default function MediaPage() {
  return (
    <SiteLayout activeSubNav="Media">
      <main className="media-page">
        <div className="cms-content-wrapper">
          <nav className="media-breadcrumbs" aria-label="Breadcrumb">
            <a href="/" className="breadcrumb-home-link" aria-label="Home">
              <HomeIcon />
            </a>
            <span className="breadcrumb-sep" aria-hidden="true">&gt;</span>
            <a href="/">What we do</a>
            <span className="breadcrumb-sep" aria-hidden="true">&gt;</span>
            <a href="/">Who we are</a>
            <span className="breadcrumb-sep" aria-hidden="true">&gt;</span>
            <span className="breadcrumb-current" aria-current="page">Media</span>
            <span className="breadcrumb-sep" aria-hidden="true">&gt;</span>
            <a href="/">What Next</a>
          </nav>

          <h1 className="media-page-title">Media</h1>

          <section className="media-featured" aria-labelledby="featured-heading">
            <h2 id="featured-heading" className="media-section-label">Featured story</h2>
            <article className="media-featured-banner">
              <div className="media-featured-pattern" aria-hidden="true" />
              <div className="media-featured-content">
                <p className="media-featured-meta">Media Release | April 29, 2026</p>
                <h3 className="media-featured-title">
                  Deutsche Bank reports record first-quarter post-tax profit of € 2.2 billion
                </h3>
                <a href="#" className="media-featured-cta">More</a>
              </div>
            </article>
          </section>

          <section className="media-news-events" aria-label="News and events">
            <div className="media-news-col">
              <h2 className="media-col-heading">Latest news</h2>
              <ul className="media-news-list">
                {latestNews.map((item) => (
                  <li key={item.title}>
                    <a href="#" className="media-news-item">
                      <span className="media-news-meta">{item.meta}</span>
                      <span className="media-news-title">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#" className="media-btn media-btn-primary">All news and news search</a>
            </div>

            <div className="media-conferences-col">
              <h2 className="media-col-heading">Upcoming conferences</h2>
              <ul className="media-conference-list">
                {conferences.map((item) => (
                  <li key={item.title}>
                    <a href="#" className="media-conference-item">
                      <span className="media-conference-date">{item.date}</span>
                      <span className="media-conference-title">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#" className="media-btn media-btn-primary">All conferences</a>
            </div>
          </section>

          <section className="media-tiles" aria-label="Media resources">
            <div className="media-tiles-grid">
              {mediaTiles.map((tile) => (
                <a
                  key={tile.title}
                  href="#"
                  className={`media-tile media-tile--${tile.variant}`}
                  style={tile.image ? { backgroundImage: `url(${tile.image})` } : undefined}
                >
                  <h3 className="media-tile-title">{tile.title}</h3>
                  <span className={`media-tile-cta media-tile-cta--${tile.ctaStyle}`}>
                    {tile.cta}
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="media-footer-info" aria-label="Company information">
            <div className="media-footer-col media-company-col">
              <h2 className="media-col-heading">Company at a glance</h2>
              <ul className="media-company-links">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href="#">
                      <span className="media-link-icon"><LinkIcon type={link.icon} /></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="media-footer-col media-contact-col">
              <h2 className="media-col-heading">Contact for media</h2>
              <p>
                <a href="#" className="media-contact-link">Find your media contact</a>
              </p>
              <p className="media-gdpr">
                <a href="#">
                  <span className="media-link-icon"><LinkIcon type="doc" /></span>
                  Privacy notice according to EU&apos;s GDPR
                </a>
              </p>
            </div>

            <div className="media-footer-col media-share-col">
              <div className="media-share-box">
                <h2>Share price (EUR)</h2>
                <div className="price-row">
                  <span className="price-value">31.83</span>
                  <span className="price-change positive">
                    <span className="price-arrow" aria-hidden="true">▲</span>
                    <span className="price-change-stack">
                      <span>0.51</span>
                      <span>EUR</span>
                    </span>
                  </span>
                </div>
                <p className="price-meta">Intraday (Xetra, Jul 3, 18:36)</p>
                <p className="price-meta">Relative Change: 1.61%</p>
                <p className="price-meta">High: 32.02 EUR</p>
                <p className="price-meta">Low: 31.49 EUR</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </SiteLayout>
  )
}
