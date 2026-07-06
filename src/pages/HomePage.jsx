import { useState, useEffect } from 'react'
import { SiteLayout } from '../components/Layout'

const heroSlides = [
  {
    eyebrow: 'XAU Global Land Capital',
    title: 'Own Land. Unlock Capital. Build Legacies.',
    cta: 'Explore Land Capital',
    href: '/private-bank',
    image:
      'https://www.db.com/contentAsset/image/95546ae6-2a44-46b0-9f43-8d33fdc3be5a/fileAsset/filter/Jpeg',
    alt: 'XAU Global Land Capital',
  },
  {
    eyebrow: 'X.A.U Global Financial Ecosystem',
    title: 'Treasury, digital wallets and project finance for the new economy',
    cta: 'Discover the ecosystem',
    href: '/products-and-services',
    image:
      'https://www.db.com/contentAsset/image/1f5fd0fa-42a8-4f16-9a31-e75dec4a526c/fileAsset/filter/Jpeg',
    alt: 'X.A.U Global Financial Ecosystem',
  },
  {
    eyebrow: 'X.A.U Project Structured Development',
    title: 'Mega projects powered by gold-backed structured funding',
    cta: 'View project finance',
    href: '/investment-bank',
    image:
      'https://www.db.com/contentAsset/image/cd048f88-9665-41b5-bee3-e8e8bf089474/fileAsset/filter/Jpeg',
    alt: 'X.A.U Project Structured Development',
  },
  {
    eyebrow: 'Investment & Gold Returns',
    title: 'Gold-backed investment structure with Swiss vault storage',
    cta: 'Learn about returns',
    href: '/dws',
    image:
      'https://www.db.com/contentAsset/image/e20e79d5-eca7-4271-b7b2-e29290443a55/fileAsset/filter/Jpeg',
    alt: 'XAU Global Investment and Gold Returns',
  },
  {
    eyebrow: 'Government Strategic Partnership',
    title: 'Capital development systems for sovereign and institutional partners',
    cta: 'Partner with us',
    href: '/corporates',
    image:
      'https://www.db.com/contentAsset/image/960dd5f7-538c-4dbe-a34b-7ff03aa0cb2a/fileAsset/filter/Jpeg',
    alt: 'Government Strategic Partnership Initiative',
  },
]

const newsItems = [
  {
    image:
      'https://www.db.com/contentAsset/image/ed4d3a98-121c-4a61-9a1b-01b54c697bfc/fileAsset/filter/Resize,Jpeg/resize_w/640/ed4d3a98-121c-4a61-9a1b-01b54c697bfc.jpg',
    meta: 'Platform Update | 2025',
    title: 'XAU Global targets $1T+ in value creation across structured development programmes',
  },
  {
    image:
      'https://www.db.com/contentAsset/image/7fc5890e-d8f2-4e0b-8602-95579136bca7/fileAsset/filter/Resize,Jpeg/resize_w/640/7fc5890e-d8f2-4e0b-8602-95579136bca7.jpg',
    meta: 'Project Pipeline | 2025',
    title: '500+ mega projects in active development across infrastructure, energy and technology',
    podcast: true,
  },
  {
    image:
      'https://www.db.com/contentAsset/image/f1710de8-ea0a-4f16-8aef-be8389ead254/fileAsset/filter/Resize,Jpeg/resize_w/640/f1710de8-ea0a-4f16-8aef-be8389ead254.jpg',
    meta: 'Investment Programme | 2025',
    title: 'Gold-backed investment memorandum now open to qualified institutional investors',
  },
  {
    image:
      'https://www.db.com/contentAsset/image/7fc5890e-d8f2-4e0b-8602-95579136bca7/fileAsset/filter/Resize,Jpeg/resize_w/640/7fc5890e-d8f2-4e0b-8602-95579136bca7.jpg',
    meta: 'Vault Services | 2025',
    title: 'Swiss vault storage programme expands for gold-backed asset custody',
    podcast: true,
  },
]

const dbThoughtImage = (id) =>
  `https://www.db.com/contentAsset/image/${id}/fileAsset/filter/Resize,Jpeg/resize_w/640/${id}.jpg`

const thoughtItems = [
  {
    image: dbThoughtImage('39bf16e5-6be3-4af3-9120-ad545aa23b36'),
    meta: 'Ecosystem | 2025',
    title: 'Inside the X.A.U Global Financial Ecosystem',
    excerpt:
      'A unified platform connecting treasury management, digital wallets, project finance and gold-backed asset custody for institutional and private clients worldwide…',
    accent: 'teal',
  },
  {
    image: dbThoughtImage('592f5dbd-ff55-4d3d-8fde-5a40bf7c9444'),
    meta: 'Services | 2025',
    title: 'Seven sectors driving global financial development',
    excerpt:
      'From infrastructure and technology to energy and real assets, X.A.U Global operates as financial developers across seven core service sectors…',
  },
  {
    image: dbThoughtImage('166c9e88-b71f-4479-8778-170c888ef9ff'),
    meta: 'Investment | 2025',
    title: 'Gold-backed returns and Swiss vault custody',
    excerpt:
      'Our tiered investment structure combines physical gold reserves with structured development returns, secured in Swiss vault facilities…',
    accent: 'magenta',
  },
  {
    image: dbThoughtImage('dd698fa4-0905-4133-8889-6d1655fd3ed1'),
    meta: 'Technology | 2025',
    title: 'K.ULLAS: the X.A.U digital wallet and vault system',
    excerpt:
      'Manage gold holdings, execute transactions and access project dashboards through the integrated K.ULLAS platform — wallet, vault, cards and analytics in one place…',
    accent: 'blue',
  },
  {
    image: dbThoughtImage('72df8384-1126-44fd-8809-2cdcdff64a9f'),
    meta: 'Land Capital | 2025',
    title: 'Financing land-backed projects from USD $50M and above',
    excerpt:
      'XAU Global Land Capital unlocks value from land assets through structured financing, development partnerships and long-term capital deployment.',
    accent: 'teal',
  },
  {
    image: dbThoughtImage('57541f35-e137-48c8-bdf4-c7e2a3dc799d'),
    meta: 'Development | 2025',
    title: 'Capital development systems for mega projects',
    excerpt:
      'Our structured development framework supports governments and institutions in delivering large-scale infrastructure, energy and technology programmes…',
    accent: 'magenta',
  },
  {
    image: dbThoughtImage('bb94c990-72ce-4316-8275-db4abb58e257'),
    meta: 'Partnership | 2025',
    title: 'Government strategic partnership initiatives',
    excerpt:
      'XAU Global partners with sovereign entities to deploy capital development systems that drive national growth and long-term economic resilience…',
    accent: 'teal',
  },
  {
    image: dbThoughtImage('e28e3967-39fe-4204-9adb-cf120cbdf214'),
    meta: 'Onboarding | 2025',
    title: 'Due diligence and investor onboarding process',
    excerpt:
      'A streamlined onboarding portal guides qualified investors through KYC verification, document submission and account activation…',
    accent: 'blue',
  },
  {
    image: dbThoughtImage('a0de6ef9-d337-48d7-98fb-e1b3c10b6e3f'),
    meta: 'Platform | 2025',
    title: 'Real-time visibility through the X.A.U dashboard',
    excerpt:
      'Track portfolio performance, project milestones and gold-backed holdings with live analytics across the X.A.U Global platform.',
    accent: 'magenta',
  },
]

const dbCorpImage = (id) =>
  `https://www.db.com/contentAsset/image/${id}/fileAsset/filter/Resize,Jpeg/resize_w/640/${id}.jpg`

const corporateItems = [
  {
    title: 'X.A.U System (K.ULLAS)',
    descBefore: 'Digital ',
    descLink: 'wallet, vault and card platform',
    descAfter: ' for gold-backed assets.',
    image: dbCorpImage('c246adec-30f4-4315-8dc4-bdafd89a49e4'),
  },
  {
    title: 'Onboarding Portal',
    descBefore: 'Streamlined ',
    descLink: 'investor due diligence',
    descAfter: ' and document verification.',
    image: dbCorpImage('8c4fdb4b-04d9-4665-922a-b3ba8b895cc0'),
  },
  {
    title: 'Land Capital',
    descBefore: '',
    descLink: 'Land-backed financing',
    descAfter: ' for projects from USD $50M+.',
    image: dbCorpImage('ea460ce1-353d-4c94-8a94-02aaa4e16fa7'),
  },
  {
    title: 'Gold-Backed Investment',
    descBefore: 'Structured returns secured by ',
    descLink: 'Swiss vault custody',
    descAfter: '.',
    image: dbCorpImage('f26a64c5-d3d1-4436-943c-2efde2b14b8d'),
  },
  {
    title: 'Project Finance',
    descBefore: 'Mega project ',
    descLink: 'structured development',
    descAfter: ' and capital deployment.',
    image: dbCorpImage('0ad1dc81-2a99-441b-8dd2-c7ede3a57e60'),
  },
  {
    title: 'Government Partnerships',
    descBefore: 'Strategic ',
    descLink: 'sovereign capital programmes',
    descAfter: ' for national development.',
    image: dbCorpImage('e5bb29a9-ed07-4c55-adb2-2bb912232487'),
  },
]

const socialLinks = [
  { name: 'LinkedIn', channel: 'LinkedIn channel' },
  { name: 'Instagram', channel: 'Instagram channel' },
  { name: 'TikTok', channel: 'TikTok channel' },
  { name: 'Facebook', channel: 'Facebook channel' },
]

function PlayIcon() {
  return (
    <span className="news-play-badge" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  )
}

export default function HomePage() {
  const [slide, setSlide] = useState(0)
  const [corpSlide, setCorpSlide] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [showMoreThought, setShowMoreThought] = useState(false)

  const current = heroSlides[slide]
  const visibleCorp = corporateItems.slice(corpSlide, corpSlide + 3)

  useEffect(() => {
    if (!playing) return undefined
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [playing])

  const prevSlide = () =>
    setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)
  const nextSlide = () => setSlide((s) => (s + 1) % heroSlides.length)

  const nextCorp = () =>
    setCorpSlide((s) => (s + 1) % Math.max(corporateItems.length - 2, 1))

  return (
    <SiteLayout>
      <main>
        <section className="hero mod-stage" aria-label="Featured story">
          <article className="itm-stage text-color-light">
            <div className="gradient type-blue" aria-hidden="true" />
            <figure className="media type-image">
              <img
                className="hero-bg"
                src={current.image}
                alt={current.alt}
                key={current.image}
                draggable={false}
              />
            </figure>
            <div className="content">
              <div className="content-block custom-text-width-75">
                <h3>{current.eyebrow}</h3>
                <h2>{current.title}</h2>
                <div className="button-wrapper">
                  <a
                    className="button type-primary hero-cta"
                    href={current.href}
                    title={current.title}
                  >
                    {current.cta}
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-controls">
              <button type="button" className="carousel-btn" aria-label="previous slide item" onClick={prevSlide}>‹</button>
              <button type="button" className="carousel-btn" aria-label="next slide item" onClick={nextSlide}>›</button>
            </div>
            <button
              type="button"
              className={`hero-play ${playing ? 'is-playing' : ''}`}
              aria-label={playing ? 'Pause autoplay' : 'Start autoplay for content'}
              onClick={() => setPlaying((p) => !p)}
            >
              {playing ? (
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              )}
            </button>
          </article>
        </section>

        <section className="welcome">
          <div className="cms-content-wrapper">
            <h1 className="welcome-title">Welcome to XAU Global</h1>
            <p className="welcome-text">
              <a href="#">Building Value. Driving Growth. Creating Futures.</a>
            </p>
          </div>
        </section>

        <section className="news">
          <div className="cms-content-wrapper">
            <h2 className="section-heading">News</h2>
            <div className="news-grid">
              {newsItems.map((item) => (
                <article key={item.title} className="news-card">
                  <a href="#" className="news-card-link">
                    <div className="news-card-image">
                      <img src={item.image} alt="" />
                      {item.podcast && <PlayIcon />}
                    </div>
                    <div className="news-card-body">
                      <span className="news-meta">{item.meta}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="thought-leadership">
          <div className="cms-content-wrapper">
            <h2 className="section-heading">Thought leadership</h2>
            <div className="thought-grid">
              {thoughtItems.map((item) => (
                <article
                  key={item.title}
                  className={`thought-card${item.accent ? ` thought-card--accent-${item.accent}` : ''}`}
                >
                  <a href="#">
                    <div className="thought-image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="thought-body">
                      <span className="thought-meta">{item.meta}</span>
                      <h3>{item.title}</h3>
                      <p className="thought-excerpt">{item.excerpt}</p>
                    </div>
                  </a>
                </article>
              ))}
            </div>
            <div className="load-more-wrap">
              <button
                type="button"
                className="load-more-btn"
                onClick={() => setShowMoreThought(true)}
                disabled={showMoreThought}
              >
                Load More
              </button>
            </div>
          </div>
        </section>

        <section className="corporate-essentials">
          <div className="cms-content-wrapper">
            <h2 className="section-heading">Corporate essentials</h2>
            <div className="corporate-carousel">
              <div className="corporate-grid">
                {visibleCorp.map((item) => (
                  <article key={item.title} className="corporate-card">
                    <a href="#">
                      <div className="corporate-image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="corporate-body">
                        <h3>{item.title}</h3>
                        <p>
                          {item.descBefore}
                          <span className="corporate-link">{item.descLink}</span>
                          {item.descAfter}
                        </p>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
              <button
                type="button"
                className="corp-nav-btn corp-nav-next"
                aria-label="next slide item"
                onClick={nextCorp}
              >
                ›
              </button>
            </div>
          </div>
        </section>

        <section className="info-bar">
          <div className="cms-content-wrapper info-bar-grid">
            <a href="#" className="info-card share-price">
              <h2>Platform metrics</h2>
              <div className="price-row">
                <span className="price-value">$1T+</span>
                <span className="price-change positive">
                  <span className="price-arrow" aria-hidden="true">▲</span>
                  <span className="price-change-text">Value target</span>
                </span>
              </div>
              <p className="price-meta">500+ mega projects in pipeline</p>
              <p className="price-meta">Gold-backed investment programme</p>
              <p className="price-meta">Swiss vault custody</p>
              <p className="price-meta">11 global offices</p>
            </a>
            <a href="#" className="info-card careers-card">
              <h2>Join XAU Global</h2>
              <p>Shape the future of gold-backed finance, project development and digital asset management.</p>
              <span className="info-link">Explore opportunities across our global network</span>
            </a>
            <a href="#" className="info-card reports-card">
              <h2>Investor memorandum and reports</h2>
              <p>
                Consult our <span className="info-link">confidential investment memorandum</span> or read
                our <span className="info-link">platform documentation</span>
              </p>
            </a>
          </div>
        </section>

        <section className="social-section">
          <div className="cms-content-wrapper">
            <h2 className="section-heading">Social Media</h2>
            <div className="social-grid">
              {socialLinks.map((item) => (
                <a key={item.name} href="#" className="social-card">
                  <h3>{item.name}</h3>
                  <span>{item.channel}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
