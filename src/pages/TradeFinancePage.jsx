import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/d42e7552-edad-4fef-8171-14b3ef9bbb14/fileAsset?language_id=1'
  ),
  award: corpImg(
    'contentAsset/image/a3babb69-e3ba-4e42-84bb-c05dd4f31ed5/fileAsset/filter/Resize,Jpeg/resize_w/1280/4960bbe4-e71a-458d-9ed3-7f0fa7286795.jpg'
  ),
  existingClient: corpImg(
    'contentAsset/image/e4f90f3e-aea7-4938-a38f-38f9f8a9fd10/fileAsset/filter/Resize,Jpeg/resize_w/1280/bafb903d-ad9a-48f2-ba88-659b5c1528a2.jpg'
  ),
  messageHub: corpImg(
    'contentAsset/image/93044e31-5a71-400a-bcf4-a5e961212cd7/fileAsset/filter/Resize,Jpeg/resize_w/1280/628ed568-f6f6-44c5-8b60-eb0b16bcf9c6.jpg'
  ),
  lettersOfCredit: corpImg(
    'contentAsset/image/e61b2028-7be9-4b2b-996d-c5832493795b/fileAsset/filter/Resize,Jpeg/resize_w/1280/cff05d19-cff8-4ebd-9c90-c7f45c422756.jpg'
  ),
  supplyChain: corpImg(
    'contentAsset/image/a1174491-0e45-441d-8d36-1aaacef8ed15/fileAsset/filter/Resize,Jpeg/resize_w/1280/d29551d9-7061-47ce-a440-e7366f853f15.jpg'
  ),
  exportCredit: corpImg(
    'contentAsset/image/35481414-d5e6-402f-addd-55551f80e820/fileAsset/filter/Resize,Jpeg/resize_w/1280/9ed517ed-6879-4dc8-8da8-c03e5b798b4d.jpg'
  ),
  commodities: corpImg(
    'contentAsset/image/7ec041a9-d8c5-4a9c-9883-2861431f08ea/fileAsset/filter/Resize,Jpeg/resize_w/1280/a4f690d0-7963-41e1-9e10-5ab2330c2fb2.jpg'
  ),
  lending: corpImg(
    'contentAsset/image/f228e2f6-172c-42c6-8d89-ad9d4fb5997b/fileAsset/filter/Resize,Jpeg/resize_w/1280/d842a07c-adf5-4e09-b9f3-3ef1ef6d8564.jpg'
  ),
  sustainability: corpImg(
    'contentAsset/image/2a7d1f4d-7636-4f81-b1e9-94669abe4064/fileAsset/filter/Resize,Jpeg/resize_w/1280/158bfb1a-7cc7-42d7-8367-9036b6153d86.jpg'
  ),
  news: corpImg(
    'contentAsset/image/2801eb0b-e188-498b-a1d6-f0fbff3c2089/fileAsset/filter/Resize,Jpeg/resize_w/1280/9f544758-25bd-4bb7-a688-dfb68542df52l.jpg'
  ),
  flow: corpImg(
    'contentAsset/image/63fee112-1040-4b71-836f-b4125910ee32/fileAsset/filter/Resize,Jpeg/resize_w/1280/658c5edf-8eac-4a40-9cb9-9f94d5603b62l.jpg'
  ),
  newsletter: corpImg(
    'contentAsset/image/c087a081-389e-4541-a3cb-7b14e6a86c04/fileAsset/filter/Resize,Jpeg/resize_w/1280/7650d730-5cca-4c70-bb8c-939b1638deab.jpg'
  ),
}

const challengeTopics = [
  'Letters of credit, documentary collections and guarantees',
  'Securing supply chains and paying suppliers',
  'Accessing export credit agency support',
  'Financing commodities and natural resources',
  'Business loans',
  'Financing sustainability',
]

const solutionTiles = [
  {
    title: 'Letters of credit, documentary collections and guarantees',
    image: images.lettersOfCredit,
    wide: true,
  },
  { title: 'Supply Chain Finance', image: images.supplyChain },
  {
    title: 'Accessing export credit agency support and financing infrastructure',
    image: images.exportCredit,
  },
  {
    title: 'Financing commodities and natural resources',
    image: images.commodities,
  },
  { title: 'Lending offering', image: images.lending },
  { title: 'Sustainable & Transition Finance', image: images.sustainability },
]

const accordions = [
  {
    id: 'trade-risks',
    title: 'Trade risks to consider',
    content: (
      <>
        <p>
          First assess your risk using the Figure 1 below as a guide. What jurisdiction and
          regulatory regime are you working in? Could there be a foreign exchange risk? Is there any
          political risk?
        </p>
        <p>
          <strong>Figure 1: Trade risks to consider</strong>
        </p>
        <p>
          Then take a look at your own risk appetite when it comes to your transaction. Open account
          – with no form of trade finance is risky for the seller and has a very low risk to the
          buyer (apart from supply security). But payment in advance is of significant risk to the
          buyer and a low risk to the seller. Can trade finance help manage this?
        </p>
      </>
    ),
  },
  {
    id: 'risk-matrix',
    title: 'Risk matrix',
    content: (
      <p>
        Our experts can help you understand the trade settlement risk ladder and identify the right
        products to mitigate non-payment, currency and political risks across your trade flows.
      </p>
    ),
  },
]

export default function TradeFinancePage() {
  const [openAccordion, setOpenAccordion] = useState(null)
  const [selectedTopics, setSelectedTopics] = useState([])

  const toggleTopic = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    )
  }

  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="tf-page">
        <section className="tf-hero" aria-label="Trade finance and Lending">
          <img className="tf-hero-image" src={images.hero} alt="" />
          <div className="tf-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper tf-hero-content">
            <p className="tf-hero-eyebrow">Globally at home</p>
            <h1>Trade finance and Lending</h1>
          </div>
        </section>

        <div className="cms-content-wrapper tf-content">
          <nav className="tf-breadcrumb" aria-label="Breadcrumb">
            <span className="tf-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/corporates">Solutions</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/corporate-bank-solutions">Corporate Bank solutions</a>
            <span aria-hidden="true">&gt;</span>
            <span className="tf-breadcrumb-current" aria-current="page">
              Trade finance/Lending
            </span>
          </nav>

          <p className="tf-intro">
            Moving goods and services across borders and within supply chains is highly complex and
            exposes counterparties to a wide range of risks – most particularly non-payment. Trade
            finance delivers fast, efficient, reliable and comprehensive solutions for every stage
            of a client&apos;s trade value chain to support their foreign and domestic trade
            activities
          </p>

          <h2 className="tf-section-heading">Managing trade risks</h2>
          <p className="tf-body">
            When carrying out cross-border business, importers and exporters are exposed to specific
            risks, such as exchange and currency risks, non-payment, damage to goods in transit and
            fraud, etc. Let our experts advise you on the best way of mitigating this
          </p>

          <div className="tf-accordion">
            {accordions.map((item) => {
              const isOpen = openAccordion === item.id
              return (
                <div key={item.id} className={`tf-accordion-item${isOpen ? ' tf-accordion-open' : ''}`}>
                  <button
                    type="button"
                    className="tf-accordion-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                  >
                    <span className="tf-accordion-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                    {item.title}
                  </button>
                  {isOpen && <div className="tf-accordion-panel">{item.content}</div>}
                </div>
              )
            })}
          </div>
        </div>

        <section className="tf-award" aria-label="Trade finance award">
          <img className="tf-award-image" src={images.award} alt="" />
          <div className="tf-award-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper tf-award-content">
            <p className="tf-award-eyebrow">Deutsche Bank ranked by corporates as</p>
            <h2>A leading Trade Finance Provider globally</h2>
            <p>Your Global Hausbank</p>
            <a href="#" className="corp-btn corp-btn-solid">
              More
            </a>
          </div>
        </section>

        <section className="tf-challenges" aria-label="What challenges in trade are you facing?">
          <div className="cms-content-wrapper">
            <h2 className="tf-section-heading">What challenges in trade are you facing?</h2>
            <p className="tf-body">
              From arranging a letter of credit to unlocking export credit agency support we can
              help. Please select one or more options below by clicking in the boxes
            </p>
            <div className="tf-challenges-grid">
              {challengeTopics.map((topic) => (
                <label key={topic} className="tf-challenge-card">
                  <input
                    type="checkbox"
                    checked={selectedTopics.includes(topic)}
                    onChange={() => toggleTopic(topic)}
                  />
                  <span className="tf-challenge-check" aria-hidden="true" />
                  <span className="tf-challenge-label">{topic}</span>
                </label>
              ))}
            </div>
            <div className="tf-challenges-actions">
              <button
                type="button"
                className="tf-btn-clear"
                onClick={() => setSelectedTopics([])}
              >
                Clear topics
              </button>
              <button
                type="button"
                className="corp-btn corp-btn-solid"
                disabled={selectedTopics.length === 0}
              >
                Show results
              </button>
            </div>
            <div className="tf-contact-actions">
              <a href="#" className="corp-btn corp-btn-solid">
                Contact us
              </a>
              <a href="#" className="tf-btn-gray">
                Find a contact
              </a>
            </div>
          </div>
        </section>

        <section className="tf-dual-tiles" aria-label="Client resources">
          <div className="cms-content-wrapper tf-dual-tiles-grid">
            <a href="#" className="tf-dual-tile">
              <img src={images.existingClient} alt="" />
              <div className="tf-dual-tile-overlay" aria-hidden="true" />
              <div className="tf-dual-tile-content">
                <h3>Existing client</h3>
                <p>and looking for forms on guarantees and letter of credits?</p>
                <span className="corp-btn corp-btn-solid">Download</span>
              </div>
            </a>
            <a href="#" className="tf-dual-tile">
              <img src={images.messageHub} alt="" />
              <div className="tf-dual-tile-overlay" aria-hidden="true" />
              <div className="tf-dual-tile-content">
                <h3>TF Message Hub</h3>
                <p>
                  A new SWIFT message gateway we offer to our financial institutions clients
                  communicating with us by SWIFT
                </p>
                <span className="corp-btn corp-btn-solid">More</span>
              </div>
            </a>
          </div>
        </section>

        <section className="tf-solutions" aria-label="Global solutions for your specific needs">
          <div className="cms-content-wrapper">
            <h2 className="tf-section-heading">Global solutions for your specific needs</h2>
            <p className="tf-body">
              Our range of solutions seamlessly covers classic trade flow products and services such
              as letters of credit and guarantees; all aspects of export finance, commodities
              finance, as well as securing supply chains with intuitive supply chain finance
              solutions. Our team advise on counterparty and country risk, local regulatory regimes
              and work with other financial institutions to share trade finance risk when required
            </p>
            <div className="tf-solutions-grid">
              {solutionTiles.map((tile) => (
                <a
                  key={tile.title}
                  href="#"
                  className={`tf-solution-tile${tile.wide ? ' tf-solution-tile-wide' : ''}`}
                >
                  <img src={tile.image} alt="" />
                  <div className="tf-solution-tile-overlay" aria-hidden="true" />
                  <div className="tf-solution-tile-content">
                    <h3>{tile.title}</h3>
                    <span className="corp-btn corp-btn-solid">Learn more</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="tf-explore" aria-label="Explore more">
          <div className="cms-content-wrapper">
            <h2 className="tf-section-heading">Explore more</h2>
            <div className="tf-explore-grid">
              <article className="tf-explore-card">
                <div className="tf-explore-image">
                  <img src={images.news} alt="" />
                </div>
                <div className="tf-explore-body">
                  <h3>News and press releases</h3>
                  <p>Latest news about what&apos;s happening globally and locally</p>
                  <a href="#" className="corp-btn corp-btn-solid">
                    More
                  </a>
                </div>
              </article>
              <article className="tf-explore-card">
                <div className="tf-explore-image">
                  <img src={images.flow} alt="" />
                </div>
                <div className="tf-explore-body">
                  <p className="tf-explore-eyebrow">FLOW</p>
                  <h3>Explore more on trade finance @flow</h3>
                  <p>
                    Exclusive insights and reference tools from the world of corporate and
                    institutional financial services.
                  </p>
                  <a href="#" className="corp-btn corp-btn-solid">
                    More
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="tf-newsletter" aria-label="Newsletter sign-up">
          <img className="tf-newsletter-image" src={images.newsletter} alt="" />
          <div className="tf-newsletter-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper tf-newsletter-content">
            <h2>
              Sign-up for
              <br />
              newsletters and
              <br />
              exclusive insights
            </h2>
            <a href="#" className="corp-btn corp-btn-solid">
              Sign me up
            </a>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
