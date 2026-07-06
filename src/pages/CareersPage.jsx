import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Careers.css'

const careersImg = (assetId, file, width = 1280) =>
  `https://careers.db.com/contentAsset/image/${assetId}/fileAsset/filter/Resize,Jpeg/resize_w/${width}/${file}`

const dbImage = (id) =>
  `https://www.db.com/contentAsset/image/${id}/fileAsset/filter/Resize,Jpeg/resize_w/640/${id}.jpg`

const featuredSlides = [
  {
    eyebrow: 'This is Deutsche Bank',
    title:
      'Explore how we create an environment that allows everyone to unleash their full potential.',
    image: careersImg(
      '36ba6c42-451f-43ab-a51a-ace0f49053ca',
      '55ac49f4-dc97-46ef-ba56-2f49ce4ddb6bl.jpg',
    ),
  },
  {
    eyebrow: 'Inclusion',
    title: 'Discover how we are placing inclusion at the heart of our culture',
    image: careersImg(
      'c0acdd0a-0676-49df-bda8-5df1e4d8a7c7',
      '4954290c-1ebe-49ea-9560-89c991dd79e5l.jpg',
    ),
  },
  {
    eyebrow: 'Engineer the future',
    title: 'Discover careers in technology',
    image: careersImg(
      '396f28a2-1b8e-4f4a-a720-6fe5f7217b88',
      'a3af832a-ab2d-4fb3-92d9-4f509bc8da4cl.jpg',
    ),
  },
  {
    eyebrow: 'Women in Technology',
    title: "Discover how we're challenging the gender imbalance in technology",
    image: careersImg(
      '396f28a2-1b8e-4f4a-a720-6fe5f7217b88',
      'a3af832a-ab2d-4fb3-92d9-4f509bc8da4cl.jpg',
    ),
  },
]

const categoryCards = [
  {
    title: 'Professionals',
    text: 'Discover the opportunity for you',
  },
  {
    title: 'Students and Graduates',
    text: "Whether you're a university student or recent graduate, explore a broad range of entry routes tailored to you",
  },
  {
    title: 'School leavers',
    text: 'Our school leaver opportunities offer an attractive alternative to university and a great platform to start a successful career.',
  },
]

const lifeAtDbItems = [
  {
    image: careersImg(
      '36ba6c42-451f-43ab-a51a-ace0f49053ca',
      '55ac49f4-dc97-46ef-ba56-2f49ce4ddb6bs.jpg',
      640,
    ),
    title: 'Rekha bridges the gap between management and technology',
    meta: 'News | March 8, 2024',
    excerpt:
      'Rekha shares how she combines business insight with technical expertise to drive change across Deutsche Bank.',
    tags: ['Early Careers', 'Technology', 'Professional', 'Diversity & Inclusion'],
  },
  {
    image: dbImage('592f5dbd-ff55-4d3d-8fde-5a40bf7c9444'),
    title: 'Building a career in sustainable finance',
    meta: 'News | February 22, 2024',
    excerpt:
      'Our sustainability teams are helping clients transition to a low-carbon economy — and growing their own careers along the way.',
    tags: ['Professional', 'Sustainability'],
  },
  {
    image: dbImage('166c9e88-b71f-4479-8778-170c888ef9ff'),
    title: 'From graduate programme to team lead in five years',
    meta: 'News | January 15, 2024',
    excerpt:
      'Marcus reflects on his journey through the graduate programme and what helped him progress quickly.',
    tags: ['Early Careers', 'Graduate Programme'],
  },
  {
    image: dbImage('dd698fa4-0905-4133-8889-6d1655fd3ed1'),
    title: 'Women in technology: breaking barriers together',
    meta: 'News | December 6, 2023',
    excerpt:
      'Colleagues from our technology division discuss mentorship, community and driving inclusion in tech.',
    tags: ['Technology', 'Diversity & Inclusion'],
  },
  {
    image: dbImage('72df8384-1126-44fd-8809-2cdcdff64a9f'),
    title: 'A day in the life of a corporate banker',
    meta: 'News | November 18, 2023',
    excerpt:
      'Follow Sarah through a typical day advising multinational clients on financing and strategy.',
    tags: ['Professional', 'Corporate Bank'],
  },
  {
    image: dbImage('57541f35-e137-48c8-bdf4-c7e2a3dc799d'),
    title: 'Apprenticeships that open doors',
    meta: 'News | October 30, 2023',
    excerpt:
      'School leavers in Germany and the UK share how apprenticeship programmes launched their banking careers.',
    tags: ['School Leavers', 'Early Careers'],
  },
  {
    image: dbImage('bb94c990-72ce-4316-8275-db4abb58e257'),
    title: 'Innovation lab: where ideas become products',
    meta: 'News | September 12, 2023',
    excerpt:
      'Inside our innovation teams working on digital products that transform how clients bank.',
    tags: ['Technology', 'Innovation'],
  },
  {
    image: dbImage('e28e3967-39fe-4204-9adb-cf120cbdf214'),
    title: 'Returning to work: supporting career comebacks',
    meta: 'News | August 4, 2023',
    excerpt:
      'Our return-to-work programmes help experienced professionals re-enter the workforce with confidence.',
    tags: ['Professional', 'Diversity & Inclusion'],
  },
]

export default function CareersPage() {
  const [featuredSlide, setFeaturedSlide] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const currentFeatured = featuredSlides[featuredSlide]
  const visibleItems = showMore ? lifeAtDbItems : lifeAtDbItems.slice(0, 4)

  const filteredItems = searchQuery.trim()
    ? visibleItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : visibleItems

  const prevFeatured = () =>
    setFeaturedSlide((s) => (s - 1 + featuredSlides.length) % featuredSlides.length)
  const nextFeatured = () =>
    setFeaturedSlide((s) => (s + 1) % featuredSlides.length)

  return (
    <SiteLayout
      activeSubNav="This is DB"
      activeUtility="Careers"
      headerVariant="careers"
      footerVariant="careers"
    >
      <main className="careers-page">
        <section className="careers-hero" aria-label="Careers introduction">
          <img
            className="careers-hero-bg"
            src={careersImg(
              '2c2dbc55-5e13-4bc6-bb0d-67ed1f5afebf',
              '85b880cb-e3de-4b5c-b73e-8cdb52a91ba5.jpg',
            )}
            alt=""
          />
          <div className="careers-hero-overlay" />
          <div className="cms-content-wrapper careers-hero-content">
            <h1 className="careers-hero-title">
              We are dedicated to our clients&apos; lasting success and financial security at
              home and abroad.
            </h1>
            <button type="button" className="careers-play-btn" aria-label="Play video">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </button>
          </div>
        </section>

        <section className="careers-featured" aria-label="Career categories">
          <div className="cms-content-wrapper careers-featured-grid">
            <article className="careers-featured-main">
              <img src={currentFeatured.image} alt="" className="careers-featured-image" />
              <div className="careers-featured-overlay">
                <p className="careers-featured-eyebrow">{currentFeatured.eyebrow}</p>
                <h2 className="careers-featured-title">{currentFeatured.title}</h2>
                <a href="#" className="careers-more-btn">more</a>
              </div>
              <div className="careers-featured-nav">
                <button type="button" aria-label="Previous" onClick={prevFeatured}>‹</button>
                <span>{featuredSlide + 1}/{featuredSlides.length}</span>
                <button type="button" aria-label="Next" onClick={nextFeatured}>›</button>
              </div>
            </article>

            <div className="careers-category-stack">
              {categoryCards.map((card) => (
                <article key={card.title} className="careers-category-card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <a href="#" className="careers-more-btn">more</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="careers-life" aria-labelledby="life-at-db-heading">
          <div className="cms-content-wrapper">
            <h2 id="life-at-db-heading" className="careers-life-heading">Life at DB</h2>

            <div className="careers-search-wrap">
              <input
                type="search"
                className="careers-search"
                placeholder=""
                aria-label="Search Life at DB"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="careers-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" strokeLinecap="round" />
              </svg>
            </div>

            <div className="careers-life-grid">
              {filteredItems.map((item) => (
                <article key={item.title} className="careers-life-card">
                  <a href="#" className="careers-life-link">
                    <div className="careers-life-image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="careers-life-body">
                      <h3>{item.title}</h3>
                      <span className="careers-life-meta">{item.meta}</span>
                      <p>{item.excerpt}</p>
                      <div className="careers-life-tags">
                        {item.tags.map((tag) => (
                          <span key={tag} className="careers-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>

            <div className="load-more-wrap">
              <button
                type="button"
                className="load-more-btn"
                onClick={() => setShowMore(true)}
                disabled={showMore}
              >
                Load More
              </button>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
