import { useState } from 'react'
import { FlowLayout } from '../components/FlowLayout'
import '../FlowCaseStudies.css'

const flowImg = (path) => `https://flow.db.com/${path}`

const images = {
  hero: flowImg(
    'contentAsset/image/1b6fe100-e094-44e7-bb3c-efe06763072f/fileAsset/filter/Resize,Jpeg/resize_w/1280/c4878c86-2230-4965-a9bf-e2c6f8dceaf6.jpg'
  ),
  aiTreasury: flowImg(
    'contentAsset/image/6829f1d3-a2ad-4894-965e-75ff2832efe8/fileAsset/filter/Resize,Jpeg/resize_w/1280/cb10af76-9434-4384-b4a8-ef4e1a632d7dl.jpg'
  ),
  fintechs: flowImg(
    'contentAsset/image/93df3651-49f6-4306-bc38-4196bfb347da/fileAsset/filter/Resize,Jpeg/resize_w/1280/70231c64-a849-4673-a2c4-62e63bcc4482l.jpg'
  ),
  paymentsInnovation: flowImg(
    'contentAsset/image/4a86d736-a1f7-4fe6-afbe-bcd0627620fd/fileAsset/filter/Resize,Jpeg/resize_w/1280/f231636b-0cc8-442d-bdc9-e6da51cc58c3l.jpg'
  ),
  fragmentation: flowImg(
    'contentAsset/image/9f16b908-116b-40e9-ae16-66361e4327c4/fileAsset/filter/Resize,Jpeg/resize_w/1280/783428cc-cc52-47c3-9f55-b0a9c3417b30l.jpg'
  ),
  digest: flowImg(
    'contentAsset/image/4f802bd7-ab16-4c03-8f7e-682e4ed9a57e/fileAsset/filter/Resize,Jpeg/resize_w/1280/71f9874d-e66e-4ee4-9c84-41f480cb6b5f.jpg'
  ),
  requestToPay: flowImg(
    'contentAsset/image/2215bffd-328b-4a42-bd71-e0116b904312/fileAsset/filter/Resize,Jpeg/resize_w/1280/69c94ca2-3872-4994-b4e8-27063b08df62.jpg'
  ),
  ctaBg: flowImg(
    'contentAsset/raw-data/1e42ea67-9bd8-4e18-b7fc-709db278e2f9/fileAsset?language_id=1'
  ),
  aiEnergy: flowImg(
    'contentAsset/image/2d407144-7ff8-4220-9f9a-99db98d06fd8/fileAsset/filter/Resize,Jpeg/resize_w/1280/ca9e14a3-50e5-4147-b993-97cae3e8d47el.jpg'
  ),
  invisibleEngine: flowImg(
    'contentAsset/image/f322f5dd-27e0-4952-a2f9-4ebd78959faf/fileAsset/filter/Resize,Jpeg/resize_w/1280/02c0993e-4673-4cf9-895e-b041bc25c42al.jpg'
  ),
  madeInEurope: flowImg(
    'contentAsset/image/106fc356-0da1-41f6-bdab-a75d49e19d70/fileAsset/filter/Resize,Jpeg/resize_w/1280/d64b4dae-eb76-4949-af94-cf7e202ea0a2l.jpg'
  ),
}

const featuredHero = {
  category: 'Trust and securities services, Technology',
  title: 'Ready for take-off: scaling digital assets',
  text: 'As digital assets move from proof of concept to application, banks face a number of operational and regulatory challenges. Sabih Behzad, Head of Digital Assets and Currencies Transformation at Deutsche Bank, shares what it takes to scale digital assets responsibly',
  href: '/flow/topics/technology/ready-for-take-off-scaling-digital-assets',
}

const gridArticles = [
  {
    image: images.aiTreasury,
    category: 'Cash management, Technology',
    title: 'AI in corporate treasury: what are the barriers to adoption?',
    text: 'Data issues and slow integration/adoption are preventing artificial intelligence’s full potential from being realised in corporate treasury. Dr Tobias Miarka of Crisil Coalition Greenwich examines what this means for businesses and treasurers',
    href: '/flow/topics/technology/ai-in-corporate-treasury',
  },
  {
    image: images.fintechs,
    category: 'Cash management, Technology',
    title: 'How fintechs are reshaping payments: lessons for corporate treasury',
    text: 'As real-time payments, APIs, and digital assets transform how money moves, corporates have to keep up. Reporting from EuroFinance 2025, flow explores how fintech companies SumUp and Bitpanda demonstrate treasury’s power as both enabler and catalyst of this transformation',
    href: '/flow/topics/technology/how-fintechs-are-reshaping-payments',
  },
  {
    image: images.paymentsInnovation,
    category: 'Cash management, Technology',
    title: 'One giant step to payments innovation? (Part 2)',
    text: 'In the second of two Sibos 2025 payments wrap-ups, flow reports on sessions discussing how technological advances – from stablecoins and autonomous payments to artificial intelligence (AI) – are powering tomorrow’s payments innovation',
    href: '/flow/topics/technology/one-giant-step-to-payments-innovation-part-2',
  },
  {
    image: images.fragmentation,
    category: 'Technology, Cash management, Opinion',
    title: 'Nobody wins from fragmentation',
    text: 'Heather Lee, Global Head of Payments Strategy at Swift, explains how frictionless capital flows across the world can only happen through interoperability of technologies – and implementation of standards',
    href: '/flow/topics/technology/nobody-wins-from-fragmentation',
  },
]

const mostRead = [
  { tags: 'Technology', title: 'Tomorrow’s Technology today', href: '#' },
  { tags: 'Technology', title: 'Driving data quality', href: '#' },
  {
    tags: 'Technology, Macro and markets',
    title: 'AI: less chat more action – and traction?',
    href: '#',
  },
  { tags: 'Technology, Regulation', title: 'Transforming banking with DLT', href: '#' },
  {
    tags: 'Technology, Cash management, Trade finance',
    title: 'From the engine room',
    href: '#',
  },
]

const opinions = [
  {
    author: 'Matthew Probershteyn',
    title: 'Inside downstream correspondent banking – and why it matters',
    href: '#',
  },
  {
    author: 'Rebecca Harding',
    title: 'After Draghi: what’s next for Europe’s economy?',
    href: '#',
  },
  {
    author: 'Christof Hofmann',
    title: 'Stablecoins: between vision and reality',
    href: '#',
  },
  {
    author: 'David Lynne',
    title: 'View from the top: A different level of athlete',
    href: '#',
  },
]

const secondaryGrid = [
  {
    image: images.aiEnergy,
    category: 'Sustainable finance, Technology',
    title: 'How AI is reshaping the energy transition',
    text: 'As artificial intelligence (AI) drives innovation across sectors, it’s not only fuelling technological progress, but also significantly increasing electricity demand. Deutsche Bank’s Lavinia Bauerochse describes how this development is transforming the global energy transition – and why investments in grid expansion and transition finance are taking centre stage',
    href: '/flow/topics/technology/how-ai-is-reshaping-the-energy-transition',
  },
  {
    image: images.invisibleEngine,
    category: 'Technology, Opinion',
    title: 'The invisible engine of modern finance',
    text: 'Bernd Leukert explains how the right technology ensures enterprise-wide efficiency, interoperability and scalability, whatever the geopolitical climate might bring',
    href: '/flow/topics/technology/the-invisible-engine-of-modern-finance',
  },
  {
    image: images.madeInEurope,
    category: 'Cash management, Technology',
    title: 'Made in Europe: managing payment risk in a fragmented world',
    text: 'Maintaining control over national payments infrastructure is part of Europe’s wider strategy to improve security, ease of doing business and competitiveness. Treasury writer Helen Boyd takes a closer look at the bloc’s recent implementations',
    href: '/flow/topics/technology/made-in-europe-managing-payment-risk',
  },
]

const moreArticles = [
  {
    meta: 'Technology | February 12, 2026',
    title: 'Ready for take-off: scaling digital assets',
    excerpt:
      'As digital assets move from proof of concept to application, banks face a number of operational and regulatory challenges…',
  },
  {
    meta: 'Technology, Cash management | January 28, 2026',
    title: 'AI in corporate treasury: what are the barriers to adoption?',
    excerpt:
      'Data issues and slow integration/adoption are preventing artificial intelligence’s full potential from being realised in corporate treasury…',
  },
  {
    meta: 'Technology, Cash management | January 15, 2026',
    title: 'How fintechs are reshaping payments: lessons for corporate treasury',
    excerpt:
      'As real-time payments, APIs, and digital assets transform how money moves, corporates have to keep up…',
  },
  {
    meta: 'Technology, Cash management | December 20, 2025',
    title: 'One giant step to payments innovation? (Part 2)',
    excerpt:
      'In the second of two Sibos 2025 payments wrap-ups, flow reports on sessions discussing how technological advances are powering tomorrow’s payments innovation…',
  },
  {
    meta: 'Technology, Opinion | December 5, 2025',
    title: 'Nobody wins from fragmentation',
    excerpt:
      'Heather Lee, Global Head of Payments Strategy at Swift, explains how frictionless capital flows across the world can only happen through interoperability…',
  },
  {
    meta: 'Technology, Sustainable finance | November 18, 2025',
    title: 'How AI is reshaping the energy transition',
    excerpt:
      'As artificial intelligence drives innovation across sectors, it’s not only fuelling technological progress, but also significantly increasing electricity demand…',
  },
  {
    meta: 'Technology, Opinion | November 4, 2025',
    title: 'The invisible engine of modern finance',
    excerpt:
      'Bernd Leukert explains how the right technology ensures enterprise-wide efficiency, interoperability and scalability…',
  },
  {
    meta: 'Technology, Cash management | October 22, 2025',
    title: 'Made in Europe: managing payment risk in a fragmented world',
    excerpt:
      'Maintaining control over national payments infrastructure is part of Europe’s wider strategy to improve security, ease of doing business and competitiveness…',
  },
  {
    meta: 'Technology | October 8, 2025',
    title: 'Tomorrow’s Technology today',
    excerpt:
      'From artificial intelligence to distributed ledger technology, flow explores the innovations shaping corporate banking and treasury…',
  },
  {
    meta: 'Technology | September 24, 2025',
    title: 'Driving data quality',
    excerpt:
      'High-quality data is the foundation of effective digital transformation in finance. flow examines why accuracy and consistency matter more than ever…',
  },
]

function FlowEm() {
  return <em>flow</em>
}

function renderCategory(category) {
  return category.split(/,\s*/).map((part, i) => (
    <span key={`${part}-${i}`}>
      {i > 0 ? ', ' : ''}
      {part}
    </span>
  ))
}

function ArticleCard({ image, category, title, text, href, cta = 'More' }) {
  return (
    <article className="fcs-card">
      <a href={href} className="fcs-card-media">
        <img src={image} alt="" loading="lazy" />
      </a>
      <div className="fcs-card-body">
        <h3>{renderCategory(category)}</h3>
        <h2>
          <a href={href}>{title}</a>
        </h2>
        <p>{text}</p>
        <a href={href} className="fcs-btn fcs-btn-primary">
          {cta}
        </a>
      </div>
    </article>
  )
}

export default function FlowTechnologyPage() {
  const [visibleArticles, setVisibleArticles] = useState(6)

  return (
    <FlowLayout activeNav="Topics">
      <div className="cms-content-wrapper">
        <section className="fcs-page-title">
          <h1>Technology</h1>
        </section>
      </div>

      <section className="fcs-hero-section">
        <div className="cms-content-wrapper">
          <div className="fcs-hero">
            <div className="fcs-hero-media">
              <img src={images.hero} alt="Hot air balloons at sunrise" />
            </div>
            <div className="fcs-hero-content">
              <h3>{renderCategory(featuredHero.category)}</h3>
              <h2>
                <a href={featuredHero.href}>{featuredHero.title}</a>
              </h2>
              <p>{featuredHero.text}</p>
              <a href={featuredHero.href} className="fcs-btn fcs-btn-primary">
                More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="cms-content-wrapper fcs-row-with-sidebar">
          <div className="fcs-cards-stack">
            {gridArticles.map((card) => (
              <ArticleCard key={card.title} {...card} />
            ))}
          </div>

          <aside className="fcs-sidebar">
            <div className="fcs-most-read">
              <h2>Most read</h2>
              {mostRead.map((item) => (
                <div key={item.title} className="fcs-most-read-item">
                  {item.tags}
                  <a href={item.href}>{item.title}</a>
                </div>
              ))}
            </div>

            <div className="fcs-opinions">
              <h2>Opinions</h2>
              {opinions.map((item) => (
                <div key={item.title} className="fcs-opinions-item">
                  <span className="fcs-opinions-author">{item.author}</span>
                  <a href={item.href}>{item.title}</a>
                </div>
              ))}
            </div>

            <div className="fcs-digest-card">
              <img src={images.digest} alt="" />
              <div className="fcs-digest-card-content">
                <h3>Stay up-to-date with</h3>
                <h2>
                  <a href="https://flow.db.com/newsbites/newsbites-subscription">
                    <FlowEm /> digest
                  </a>
                </h2>
                <p>
                  Choose your preferred banking topics and we will send you updated emails based on
                  your selection
                </p>
                <a
                  href="https://flow.db.com/newsbites/newsbites-subscription"
                  className="fcs-btn fcs-btn-primary"
                >
                  Sign-up
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="fcs-promo-section">
        <div className="cms-content-wrapper">
          <div className="fcs-wide-promo">
            <img className="fcs-wide-promo-bg" src={images.requestToPay} alt="" />
            <div className="fcs-wide-promo-overlay" aria-hidden="true" />
            <div className="fcs-wide-promo-content">
              <h2>
                <a
                  href="https://corporates.db.com/publications/White-papers-guides/request-to-pay-through-open-banking"
                  target="_blank"
                  rel="noreferrer"
                >
                  Request to Pay through open banking
                </a>
              </h2>
              <p>Realising the potential of PSD2 and instant payments</p>
              <a
                href="https://corporates.db.com/publications/White-papers-guides/request-to-pay-through-open-banking"
                target="_blank"
                rel="noreferrer"
                className="fcs-btn fcs-btn-primary"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="cms-content-wrapper fcs-grid-3">
          {secondaryGrid.map((card) => (
            <ArticleCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section>
        <div className="cms-content-wrapper">
          <div className="fcs-cta-banner">
            <img className="fcs-cta-banner-bg" src={images.ctaBg} alt="" />
            <div className="fcs-cta-banner-overlay" />
            <div className="fcs-cta-banner-content">
              <h3>
                <FlowEm /> digest
              </h3>
              <h2>
                <a href="https://flow.db.com/newsbites/newsbites-subscription?kid=10.years.flow.cp">
                  Go beyond the headlines
                </a>
              </h2>
              <p>
                <FlowEm /> digest delivers actionable insights to help you stay ahead of emerging
                trends and drive business success
              </p>
              <a
                href="https://flow.db.com/newsbites/newsbites-subscription?kid=10.years.flow.cp"
                className="fcs-btn fcs-btn-white"
              >
                Sign up for insights
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="fcs-more-articles">
        <div className="cms-content-wrapper">
          <h1>More articles</h1>
          <div className="fcs-articles-grid">
            {moreArticles.slice(0, visibleArticles).map((article) => (
              <article key={article.title} className="fcs-article-entry">
                <p className="fcs-article-meta">{article.meta}</p>
                <h3>
                  <a href="#">{article.title}</a>
                </h3>
                <p>{article.excerpt}</p>
              </article>
            ))}
          </div>
          {visibleArticles < moreArticles.length && (
            <div className="fcs-load-more">
              <button
                type="button"
                className="fcs-btn fcs-btn-primary"
                onClick={() => setVisibleArticles(moreArticles.length)}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </FlowLayout>
  )
}
