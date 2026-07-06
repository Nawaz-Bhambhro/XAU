import { useEffect, useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const corpRaw = (id) =>
  `https://corporates.db.com/contentAsset/raw-data/${id}/fileAsset?language_id=1`

const heroSlides = [
  {
    image: corpRaw('4db33227-ec97-413a-9a58-f5565a42c3b7'),
    variant: 'graphic',
    title: 'FXC Intelligence’s Top 100 Cross-Border Payment Companies 2026',
    text: 'Deutsche Bank named for eighth consecutive years',
    ctaType: 'news',
    objectPosition: '42% center',
  },
  {
    image: corpRaw('3e4fee37-b8b9-466d-915b-daef431d5df3'),
    variant: 'photo',
    eyebrow: 'Cash management',
    title: 'Real-time treasury: start small, go big',
    ctaType: 'flow',
    objectPosition: '72% center',
  },
  {
    image: corpRaw('95ca5888-6c5a-46e4-93dd-ec646ef3bd80'),
    variant: 'photo',
    eyebrow: 'Cash Management, Opinion',
    title: 'New ways to manage liquidity in APAC',
    ctaType: 'flow',
    objectPosition: '78% center',
  },
  {
    image: corpRaw('fa2133e9-9b67-48c3-bf07-aacbd16ca1a1'),
    variant: 'photo',
    eyebrow: 'Latest news',
    title: 'Deutsche Bank wins multiple accolades',
    text: 'at The Asian Banker’s Global Business Achievement Awards 2026',
    ctaType: 'news',
    objectPosition: '62% center',
  },
  {
    image: corpRaw('39625b53-a020-4c8b-b8e7-0f27f2982a31'),
    variant: 'photo',
    eyebrow: 'Cash management, Technology',
    title: 'Tech in corporate treasury: AI is not the whole story',
    ctaType: 'flow',
    objectPosition: '68% center',
  },
  {
    image: corpRaw('716d88bf-dda2-4545-be84-ff69b13e7c4a'),
    variant: 'photo',
    eyebrow: 'Cash management',
    title: 'How Swift is adapting to the changing payment ecosystem',
    ctaType: 'flow',
    objectPosition: '74% center',
  },
]

const images = {
  sustainable: corpImg(
    'contentAsset/image/6bd2488c-50c7-45a0-8c5d-399719200cb1/fileAsset/filter/Resize,Jpeg/resize_w/1280/2187ba60-295a-40a3-856a-39b777954c25.jpg'
  ),
  flowApp: corpImg(
    'contentAsset/image/12a7f93e-7e15-436e-ace4-4d512f59faa1/fileAsset/filter/Resize,Jpeg/resize_w/1280/06e3b35a-6c13-45bf-b47b-0a0d6b4a4520.jpg'
  ),
  corporateBank: corpImg(
    'contentAsset/image/1c62407a-a256-4293-8ec3-9ffe39fc72fc/fileAsset/filter/Resize,Jpeg/resize_w/1280/352b4620-1782-401c-b418-c863fe81cb07.jpg'
  ),
  investmentBank: corpImg(
    'contentAsset/image/d3bcdb01-0824-4cf2-b641-d740c43d05ea/fileAsset/filter/Resize,Jpeg/resize_w/1280/7fc7d4e6-6116-4821-98ff-e6f8e2de579b.jpg'
  ),
  assetManagement: corpImg(
    'contentAsset/image/a5b98233-5283-4d52-bd22-cd29a9d90f98/fileAsset/filter/Resize,Jpeg/resize_w/1280/5700545c-57dd-4b1d-955a-8770450ba896.jpg'
  ),
  clientAccess: corpImg(
    'contentAsset/image/0a8d6979-3180-47b3-972d-a2738895bc9d/fileAsset/filter/Resize,Jpeg/resize_w/1280/a859df78-1e82-482d-bbc2-c1adf7924d32.jpg'
  ),
  clientStories: corpImg(
    'contentAsset/image/2b26abd1-69c8-45df-96bf-8b9bbc2e0b47/fileAsset/filter/Resize,Jpeg/resize_w/1280/ae0a7b7b-950f-48d8-b5e5-222c512e68b7l.jpg'
  ),
  focusTopics: corpImg(
    'contentAsset/image/2fd01b3c-6b02-4802-a301-494f773dc549/fileAsset/filter/Resize,Jpeg/resize_w/1280/db53d47f-e3e7-4ea3-beea-cee1798aa990l.jpg'
  ),
  flowMagazine: corpImg(
    'contentAsset/image/25591fb5-fd5c-439e-a727-6ccd0e5e51ac/fileAsset/filter/Resize,Jpeg/resize_w/1280/8a1678fb-5f27-4499-8f0b-7077f165f07dl.jpg'
  ),
  multimedia: corpImg(
    'contentAsset/image/498ce31c-9d65-47e1-9dfd-9031a63ead4d/fileAsset/filter/Resize,Jpeg/resize_w/1280/a6dd7ff4-971d-409a-9e3d-93c259bf4947.jpg'
  ),
  publications: corpImg(
    'contentAsset/image/324d808c-0302-46be-aec2-16af04b0e463/fileAsset/filter/Resize,Jpeg/resize_w/1280/6e3f28df-08ed-4435-b4fc-772cc5b3828e.jpg'
  ),
  flowBanner: corpImg(
    'contentAsset/image/bc9c58b9-e7ad-417a-b2ce-5340fca6af32/fileAsset/filter/Resize,Jpeg/resize_w/1280/3b2003ab-4e8e-44a1-87ff-676e39618202.jpg'
  ),
  awardTrade: corpImg(
    'contentAsset/image/e1a52ab2-80dc-4bfe-a407-0c2fa8880721/fileAsset/filter/Resize,Jpeg/resize_w/1280/93332d01-c698-43a8-bafe-db6b695cca4c.jpg'
  ),
  awardCash: corpImg(
    'contentAsset/image/1515624f-f82a-447e-9589-6b7ec18bf24b/fileAsset/filter/Resize,Jpeg/resize_w/1280/42580e7b-5e1a-43eb-9224-d8aadf708268.jpg'
  ),
  awardAsia: corpImg(
    'contentAsset/image/c6b74beb-6166-483b-b66c-95e42bfa65ec/fileAsset/filter/Resize,Jpeg/resize_w/1280/905fc4fd-89fd-4737-a615-2c3ead04c422.jpg'
  ),
}

const solutionCards = [
  { title: 'Corporate Bank solutions', image: images.corporateBank },
  { title: 'Investment Bank solutions', image: images.investmentBank },
  { title: 'Asset management solutions', image: images.assetManagement },
  { title: 'Client access solutions', image: images.clientAccess },
]

const featureCards = [
  {
    eyebrow: 'Review our client’s best practice examples',
    title: 'Why choose Corporate Bank?',
    text: 'Review our work with clients and read our client stories',
    image: images.clientStories,
  },
  {
    eyebrow: 'Read more on today\'s issues',
    title: 'Focus topics',
    text: 'From the classic issues that regularly face corporates to new and emerging risks and challenges',
    image: images.focusTopics,
  },
  {
    eyebrow: 'Corporate and transaction banking',
    title: 'Explore news and insights',
    text: 'Through our content hub and thought leadership magazine flow we deliver timely and exclusive insights',
    image: images.flowMagazine,
  },
]

const searchTags = [
  { label: 'marketplace payments', size: 'xl' },
  { label: 'UETR', size: 'xl' },
  { label: 'currency guide', size: 'md' },
  { label: 'ISO 20022', size: 'lg' },
  { label: 'merchant solutions', size: 'md' },
  { label: 'flow briefing', size: 'xl' },
  { label: 'india', size: 'sm' },
  { label: 'trade finance', size: 'lg' },
  { label: 'AI', size: 'md' },
]

const awardCards = [
  {
    label: 'Corporate Bank solutions',
    title: 'A leading Trade Finance Provider globally',
    image: images.awardTrade,
  },
  {
    title: 'Leading Provider in Cash Management',
    text: 'No1 in North America\nNo1 in Germany, France, Spain\nNo1 in China, Malaysia, Pakistan',
    sub: 'Euromoney Cash Management Survey 2025',
    image: images.awardCash,
  },
  {
    title: 'Best Global Transaction Bank in Asia-Pacific',
    sub: 'The Asian Banker Transaction Finance Awards 2025',
    image: images.awardAsia,
  },
]

export default function CorporatesPage() {
  const [slide, setSlide] = useState(0)
  const [playing, setPlaying] = useState(true)
  const current = heroSlides[slide]

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

  return (
    <SiteLayout
      activeSubNav="Clients"
      headerVariant="corporates"
      footerVariant="corporates"
    >
      <main className="corp-page">
        <section className="corp-hero" aria-label="Featured stories">
          <div className="cms-content-wrapper corp-hero-grid">
            <div
              className={`corp-hero-main ${
                current.variant === 'photo' ? 'corp-hero-main-photo' : 'corp-hero-main-graphic'
              }`}
            >
              <img
                className="corp-hero-main-bg"
                src={current.image}
                alt=""
                key={current.image}
                style={{ objectPosition: current.objectPosition }}
              />
              {current.variant === 'photo' && (
                <div className="corp-hero-photo-overlay" aria-hidden="true" />
              )}
              <div className="corp-hero-main-content">
                <div className="corp-hero-main-text">
                  {current.eyebrow && (
                    <p className="corp-hero-main-eyebrow">{current.eyebrow}</p>
                  )}
                  <h2>{current.title}</h2>
                  {current.text && <p>{current.text}</p>}
                </div>
                <a
                  href="#"
                  className={`corp-hero-main-cta ${
                    current.variant === 'graphic'
                      ? 'corp-hero-main-cta-white'
                      : 'corp-hero-main-cta-primary'
                  }`}
                >
                  {current.ctaType === 'flow' ? (
                    <>
                      Read <em>flow</em> article
                    </>
                  ) : (
                    'Read news story'
                  )}
                </a>
              </div>
              <div className="corp-hero-main-footer">
                <div className="corp-hero-controls">
                  <button
                    type="button"
                    className="corp-carousel-btn"
                    aria-label="previous slide item"
                    onClick={prevSlide}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="corp-carousel-btn"
                    aria-label="next slide item"
                    onClick={nextSlide}
                  >
                    ›
                  </button>
                </div>
                <button
                  type="button"
                  className={`corp-hero-play ${playing ? 'is-playing' : ''}`}
                  aria-label={playing ? 'Pause autoplay' : 'Start autoplay for content'}
                  onClick={() => setPlaying((p) => !p)}
                >
                  {playing ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="corp-hero-side">
              <a href="#" className="corp-hero-side-card corp-hero-sustainable">
                <img src={images.sustainable} alt="" />
                <div className="corp-hero-side-overlay" />
                <div className="corp-hero-side-content">
                  <h3>More on Sustainable and Transformation Finance</h3>
                  <span className="corp-btn corp-btn-solid">More</span>
                </div>
              </a>
              <a href="#" className="corp-hero-side-card corp-hero-flowapp">
                <img className="corp-hero-flowapp-bg" src={images.flowApp} alt="" />
                <div className="corp-hero-side-content">
                  <h3>
                    Download the <em>flow</em> app today
                  </h3>
                  <span className="corp-btn corp-btn-outline-light">More</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="corp-intro">
          <div className="cms-content-wrapper">
            <h1>Corporates and Institutions</h1>
            <p>
              Across Deutsche Bank, we have a variety of complementary solutions for corporate and
              institutional clients. These range from corporate and transactional banking solutions
              to investment products and services for large corporations, small and medium-sized
              companies, governments, institutional investors, and asset managers
            </p>
          </div>
        </section>

        <section className="corp-solutions">
          <div className="cms-content-wrapper">
            <h2>Explore Deutsche Bank solutions for corporate and institutional clients</h2>
            <div className="corp-solutions-grid">
              {solutionCards.map((card) => (
                <a key={card.title} href="#" className="corp-solution-card">
                  <img src={card.image} alt="" />
                  <div className="corp-solution-overlay" />
                  <div className="corp-solution-content">
                    <h3>{card.title}</h3>
                    <span className="corp-btn corp-btn-solid">More</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="corp-features">
          <div className="cms-content-wrapper corp-features-grid">
            {featureCards.map((card) => (
              <article key={card.title} className="corp-feature-card">
                <a
                  href={card.title === 'Focus topics' ? '/in-focus/focus-topics' : '#'}
                  className="corp-feature-image"
                >
                  <img src={card.image} alt="" />
                </a>
                <p className="corp-feature-eyebrow">{card.eyebrow}</p>
                <h3>
                  <a href={card.title === 'Focus topics' ? '/in-focus/focus-topics' : '#'}>
                    {card.title}
                  </a>
                </h3>
                <p className="corp-feature-text">{card.text}</p>
                <a
                  href={card.title === 'Focus topics' ? '/in-focus/focus-topics' : '#'}
                  className="corp-btn corp-btn-solid"
                >
                  More
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="corp-updates">
          <div className="cms-content-wrapper corp-updates-grid">
            <div className="corp-updates-left">
              <h2>Stay updated…</h2>
              <div className="corp-updates-cards">
                <a href="#" className="corp-update-card">
                  <img src={images.multimedia} alt="" />
                  <div className="corp-update-overlay" />
                  <div className="corp-update-content">
                    <h3>Multimedia</h3>
                    <span className="corp-btn corp-btn-solid">More</span>
                  </div>
                </a>
                <a href="#" className="corp-update-card">
                  <img src={images.publications} alt="" />
                  <div className="corp-update-overlay" />
                  <div className="corp-update-content">
                    <h3>Latest publications</h3>
                    <span className="corp-btn corp-btn-white">More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="corp-search-cloud">
              <h2>Top search queries</h2>
              <div className="corp-tags">
                {searchTags.map((tag) => (
                  <a key={tag.label} href="#" className={`corp-tag corp-tag-${tag.size}`}>
                    {tag.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="corp-flow-banner">
          <img className="corp-flow-banner-bg" src={images.flowBanner} alt="" />
          <div className="corp-flow-banner-overlay" />
          <div className="cms-content-wrapper corp-flow-banner-content">
            <p className="corp-flow-eyebrow">Unique insights for corporate and institutional clients</p>
            <h2>10 years of flow magazine</h2>
            <p>What are the trends that have shaped corporate banking during the past decade?</p>
            <a href="#" className="corp-btn corp-btn-solid">Explore our flow microsite</a>
          </div>
        </section>

        <section className="corp-awards">
          <div className="cms-content-wrapper">
            <h2>Find out more about our recent awards</h2>
            <div className="corp-awards-grid">
              {awardCards.map((card) => (
                <article key={card.title} className="corp-award-card">
                  {card.label && <p className="corp-award-label">{card.label}</p>}
                  <h3>{card.title}</h3>
                  {card.text && <p className="corp-award-text">{card.text}</p>}
                  {card.sub && <p className="corp-award-sub">{card.sub}</p>}
                  <img src={card.image} alt="" />
                </article>
              ))}
            </div>
            <a href="#" className="corp-btn corp-btn-solid corp-show-all">Show all</a>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
