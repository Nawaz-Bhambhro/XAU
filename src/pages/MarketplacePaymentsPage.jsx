import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/ab7805bd-7057-4803-a191-9bebe399c9f1/fileAsset?language_id=1'
  ),
  featuredVideo: corpImg(
    'contentAsset/raw-data/9c12d158-afb8-475a-b77f-57b909aeb222/fileAsset?language_id=1'
  ),
  expert: corpImg(
    'contentAsset/image/c7009822-717a-41cb-a0c3-45734fd7aeb4/fileAsset/filter/Resize,Jpeg/resize_w/1280/be7ec53a-0ffa-482d-b360-e151a5eb3595.jpg'
  ),
}

const sliderCards = [
  {
    title: 'B2B marketplaces offer FIs game-changing opportunity to drive payments innovation',
    image: corpImg(
      'contentAsset/image/55d861d3-a866-451d-8922-359dc036d564/fileAsset/filter/Resize,Jpeg/resize_w/1280/20f09554-b9c5-444c-a70a-1f3e2a95616dl.jpg'
    ),
    href: 'https://www.pymnts.com/news/b2b-payments/2022/b2b-marketplaces-offer-fis-game-changing-opportunity-to-drive-payments-innovation/',
    cta: 'Watch video',
  },
  {
    title: 'ExpeditionFinance smart',
    image: corpImg(
      'contentAsset/image/e4729163-101a-496b-9f5c-94cfde7d5e22/fileAsset/filter/Resize,Jpeg/resize_w/1280/c3e8e398-c755-4db7-bb68-0873bc698c12l.jpg'
    ),
    href: 'https://www.youtube.com/watch?v=vGjwmhl_kQg',
    cta: 'Watch video',
  },
  {
    title: 'Deutsche Bank: E-commerce marketplace solution (in French)',
    image: corpImg(
      'contentAsset/image/0c658f0c-54ad-45bc-9176-14e2cf197523/fileAsset/filter/Resize,Jpeg/resize_w/1280/02e3db69-35a3-4511-b8cf-79a478f74286l.jpg'
    ),
    href: 'https://www.youtube.com/watch?v=tQpR-Db_HlY',
    cta: 'Watch video',
  },
  {
    title: 'FinextraTV: Staying ahead in a customer-centric era with Deutsche Bank',
    image: corpImg(
      'contentAsset/image/5efdfaeb-4f72-4b1c-8a0d-ce0b808b828e/fileAsset/filter/Resize,Jpeg/resize_w/1280/71256a4f-ce89-4552-afed-3b8d9746a13fl.jpg'
    ),
    href: 'https://www.youtube.com/watch?v=dYzUn-LSTbw',
    cta: 'Watch video',
  },
  {
    title: 'Smart payments for smart cameras',
    image: corpImg(
      'contentAsset/image/ec37a1b6-dd9f-4bd6-9fdb-eac3eb5aa297/fileAsset/filter/Resize,Jpeg/resize_w/1280/ee3741c2-6a7e-4819-84d5-49e841f8fdacl.jpg'
    ),
    href: 'https://flow.db.com/case-studies/smart-payments-for-smart-cameras',
    cta: 'Read more',
  },
]

const exploreCards = [
  {
    eyebrow: 'flow article',
    title: 'How treasury can support B2B marketplaces',
    image: corpImg(
      'contentAsset/image/0c694d30-43a8-4a52-b6e9-670527f7cfe6/fileAsset/filter/Resize,Jpeg/resize_w/1280/c48d0936-0150-409c-80e9-bcad81a0c1d4l.jpg'
    ),
    href: 'https://flow.db.com/topics/cash-management/how-treasury-can-support-b2b-marketplaces',
  },
  {
    eyebrow: 'flow article',
    title: 'Digital marketplaces – a gamechanger for payments and treasury',
    image: corpImg(
      'contentAsset/image/58101578-f9ff-4e59-bc91-f080ea98f0e6/fileAsset/filter/Resize,Jpeg/resize_w/1280/3ef00f84-95ef-4118-aacf-ad6fbb76e268l.jpg'
    ),
    href: 'https://flow.db.com/topics/cash-management/digital-marketplaces-a-gamechanger-for-payments-and-treasury',
  },
  {
    eyebrow: 'News',
    title: 'Deutsche Bank and smart are cooperating on online payment for the new smart #1',
    image: corpImg(
      'contentAsset/image/7856279b-6f24-4766-91c3-4af15b7d4dbb/fileAsset/filter/Resize,Jpeg/resize_w/1280/9ca8e074-ea06-4405-b650-4fa7da18acfel.jpg'
    ),
    href: 'https://www.db.com/news/detail/20221017-deutsche-bank-and-smart-are-cooperating-on-online-payment-for-the-new-smart-1?language_id=1',
  },
]

const offeringPoints = [
  'Payment acceptance – wide range of pay-in methods through single integration',
  'Split payments and reconciliation – supporting splitting and holding of funds amongst multiple payees in a single transaction of the buyer',
  'Global settlement – broad geographic availability for pay out to sellers',
  'Avoid need for Marketplace taking on regulatory and liability responsibilities',
  'Flexibility, scalability and expertise to support marketplace growth',
]

const uspRows = [
  {
    label: 'Counterparty risk',
    text: 'Established, reputable relationship bank as counterparty with proven risk management, global regulatory compliance and security standards for vendor selection and payment service',
  },
  {
    label: 'Reconciliation',
    text: 'Granular settlement information of each mixed basked purchase transaction and for improved cash application and reconciliation flows',
  },
  {
    label: 'Settlement cycles',
    text: 'Bank-owned, end-to-end clearing and global settlement capabilities with optional credit facilities lines for same-day settlement cycles',
  },
  {
    label: 'FX capabilities',
    text: 'Improved FX margins below reseller prices from intermediary PSPs and innovative DCC/MCP solution embedded in the check-out process',
  },
  {
    label: 'Payment method pricing',
    text: 'Competitive fees on account-based payment methods, such as online direct debits, credit transfers and request-to-pay',
  },
  {
    label: 'Technology',
    text: 'Deutsche Bank has made significant investments to expand its payment acceptance and settlement platform, offering each service on a modular basis through APIs',
  },
]

const trustedCards = [
  {
    title: 'Establishing trust in integration and operational excellence',
    items: [
      'Liquidity: enhanced settlement cycle',
      'Legal and Compliance: legal setup incl. KYC requirement for sellers',
      'FX: FX risk exposure when operating in multi-locations',
    ],
  },
  {
    title: 'Building trust with consumers and growing brand loyalty',
    items: [
      'Conversion rate',
      'User experience',
      'Risk and fraud',
      'Customer service model',
      '3rd party provider management',
    ],
  },
  {
    title: 'Creating exceptional trust in technology, cyber fraud detection, scalable and stable solutions',
    items: ['Scalable technology solution', 'Stability and security', 'Customisation'],
  },
]

const contactMailto =
  'mailto:MerchantSolutions.Inquiry@db.com?body=Please%20contact%20me%20regarding%0A%0A%0A%0AContact details:%0A*Company%20name%20is:%0A*Company%20address:%0A*Contact%20person:%0A*Phone:%0A*Email:'

function SliderCard({ card }) {
  return (
    <article className="mp-slider-card">
      <a href={card.href} className="mp-slider-card-media" target="_blank" rel="noreferrer">
        <img src={card.image} alt="" loading="lazy" />
      </a>
      <div className="mp-slider-card-body">
        <h3>
          <a href={card.href} target="_blank" rel="noreferrer">
            {card.title}
          </a>
        </h3>
        <a href={card.href} className="corp-btn corp-btn-solid" target="_blank" rel="noreferrer">
          {card.cta}
        </a>
      </div>
    </article>
  )
}

export default function MarketplacePaymentsPage() {
  const [slide, setSlide] = useState(0)
  const maxSlide = Math.max(0, sliderCards.length - 3)

  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="mp-page">
        <section className="mp-hero-top" aria-label="Marketplace Payments">
          <div className="cms-content-wrapper mp-hero-top-inner">
            <h1>Marketplace Payments</h1>
            <img className="mp-hero-illustration" src={images.hero} alt="" />
          </div>
        </section>

        <section className="mp-intro-band">
          <div className="cms-content-wrapper">
            <nav className="mp-breadcrumb" aria-label="Breadcrumb">
              <span className="mp-breadcrumb-label">You are here:</span>
              <a href="/">Home</a>
              <span aria-hidden="true">&gt;</span>
              <a href="/solutions/corporate-bank-solutions">Solutions</a>
              <span aria-hidden="true">&gt;</span>
              <a href="/solutions/corporate-bank-solutions">Corporate Bank solutions</a>
              <span aria-hidden="true">&gt;</span>
              <a href="/solutions/corporate-bank-solutions/cash-management">Cash management</a>
              <span aria-hidden="true">&gt;</span>
              <a href="/solutions/corporate-bank-solutions/cash-management/merchant-solutions">
                Merchant Solutions
              </a>
              <span aria-hidden="true">&gt;</span>
              <span className="mp-breadcrumb-current" aria-current="page">
                Marketplace Payments
              </span>
            </nav>

            <p className="mp-intro-text">
              Enabling customers to accelerate their digital transformation easier, faster and at
              scale by cutting through the complexity with our Marketplace Payments
            </p>
          </div>
        </section>

        <section className="mp-featured-video" aria-label="Featured video">
          <div className="cms-content-wrapper">
            <div className="mp-featured-video-inner">
              <video
                className="mp-featured-video-media"
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                poster={images.hero}
              >
                <source src={images.featuredVideo} type="video/mp4" />
              </video>
              <a
                href="https://www.youtube.com/watch?v=8VNoJQceY1E"
                className="mp-play-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="Play video"
              >
                <span aria-hidden="true">▶</span> Play
              </a>
            </div>
          </div>
        </section>

        <section className="mp-slider-section" aria-label="Related videos and articles">
          <div className="cms-content-wrapper">
            <div className="mp-slider-controls">
              <button
                type="button"
                className="mp-slider-arrow"
                aria-label="Previous slide"
                disabled={slide === 0}
                onClick={() => setSlide((s) => Math.max(0, s - 1))}
              >
                ‹
              </button>
              <button
                type="button"
                className="mp-slider-arrow"
                aria-label="Next slide"
                disabled={slide >= maxSlide}
                onClick={() => setSlide((s) => Math.min(maxSlide, s + 1))}
              >
                ›
              </button>
            </div>
            <div className="mp-slider-grid">
              {sliderCards.slice(slide, slide + 3).map((card) => (
                <SliderCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </section>

        <section className="mp-explore" aria-label="Explore more">
          <div className="cms-content-wrapper">
            <h2 className="mp-section-title">Explore more</h2>
            <div className="mp-explore-grid">
              {exploreCards.map((card) => (
                <article key={card.title} className="mp-explore-card">
                  <a href={card.href} className="mp-explore-card-media" target="_blank" rel="noreferrer">
                    <img src={card.image} alt="" loading="lazy" />
                  </a>
                  <div className="mp-explore-card-body">
                    <p className="mp-explore-eyebrow">{card.eyebrow}</p>
                    <h3>
                      <a href={card.href} target="_blank" rel="noreferrer">
                        {card.title}
                      </a>
                    </h3>
                    <a href={card.href} className="corp-btn corp-btn-white" target="_blank" rel="noreferrer">
                      More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mp-offering" aria-label="Our offering">
          <div className="cms-content-wrapper">
            <h2 className="mp-section-title">Our offering</h2>
            <p>
              Deutsche Bank offers one stop shop for our clients to overcome payment challenges in
              their day-to-day marketplace operations.
            </p>
            <p>
              Our innovative and state of the art marketplace payment solutions fulfil the specific
              requirements
            </p>
            <ul>
              {offeringPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mp-usps" aria-label="Our USPs">
          <div className="cms-content-wrapper">
            <h2 className="mp-section-title">Our USPs/ Value propositions</h2>
            <table className="mp-usps-table">
              <tbody>
                {uspRows.map((row) => (
                  <tr key={row.label}>
                    <th>{row.label}</th>
                    <td>{row.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mp-trusted" aria-label="Deutsche Bank being your trusted partner">
          <div className="cms-content-wrapper">
            <h2 className="mp-section-title">Deutsche Bank being your trusted partner</h2>
            <div className="mp-trusted-grid">
              {trustedCards.map((card) => (
                <article key={card.title} className="mp-trusted-card">
                  <h3>{card.title}</h3>
                  <ul>
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mp-quote" aria-label="Quote">
          <div className="cms-content-wrapper">
            <blockquote className="mp-quote-box">
              Potential made possible by your Global Hausbank.
              <br />
              Shaping the future together with innovative solutions
            </blockquote>
          </div>
        </section>

        <section className="mp-contact" aria-label="Speak with an expert">
          <div className="cms-content-wrapper">
            <div className="mp-contact-banner">
              <img className="mp-contact-image" src={images.expert} alt="" />
              <div className="mp-contact-content">
                <h2>Speak with an expert</h2>
                <a href={contactMailto} className="corp-btn corp-btn-solid">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
