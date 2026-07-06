import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/fa35db2d-0f9b-422b-b2ac-44715ce0549f/fileAsset?language_id=1'
  ),
  guide1: corpImg(
    'contentAsset/image/61638673-cdfb-4144-b3ac-3e376da883e7/fileAsset/filter/Resize,Jpeg/resize_w/1280/fdfe92ea-0047-42cf-9eca-83711d78c66cl.jpg'
  ),
  guide2: corpImg(
    'contentAsset/image/741bdeb0-876d-4010-bbb0-285508a0434d/fileAsset/filter/Resize,Jpeg/resize_w/1280/f9fad54e-07b5-4d72-a30f-dcb1cc1b02b5l.jpg'
  ),
  guide3: corpImg(
    'contentAsset/image/0f2737dd-2946-4c0d-9462-b33ade3e7eef/fileAsset/filter/Resize,Jpeg/resize_w/1280/ebcfaae4-ef36-4b48-930e-26396ee7ecdcl.jpg'
  ),
  newsletter: corpImg(
    'contentAsset/image/c087a081-389e-4541-a3cb-7b14e6a86c04/fileAsset/filter/Resize,Jpeg/resize_w/1280/7650d730-5cca-4c70-bb8c-939b1638deab.jpg'
  ),
}

const accordions = [
  {
    id: '3skey',
    title: '3SKey digital signature',
    content: (
      <p>
        With 3SKey, clients can overcome the hassle of using a variety of tokens for different
        channels and banks. We support the use of the 3SKey digital signature token on all major
        transaction banking platforms
      </p>
    ),
  },
  {
    id: 'bank-communications',
    title: 'Bank communications',
    content: (
      <p>
        We offer a wide range of bank communication solutions to automate and optimise secure file
        transfers
      </p>
    ),
  },
  {
    id: 'global-format',
    title: 'Global format',
    content: (
      <p>
        The usage of global file formats in line with industry standards (ISO 20022) is a key aspect
        for corporate clients to realise cost efficiencies and a seamless integration with their
        banks
      </p>
    ),
  },
  {
    id: 'ebam',
    title: 'Message based electronic bank account management',
    content: (
      <p>
        To support clients´ needs in electronic bank account management, we offer ISO 20022 acmt
        messages which are defined by SWIFT
      </p>
    ),
  },
  {
    id: 'mt798',
    title: 'MT798 SWIFT solution for trade finance business',
    content: (
      <p>
        Our MT798 SWIFT offering for trade finance business allows clients to standardise and
        automate their trade finance processes
      </p>
    ),
  },
  {
    id: 'partner-integration',
    title: 'Partner client integration',
    content: (
      <p>
        As part of our &ldquo;partner client integration program&rdquo;, we cooperate and integrate
        with leading treasury management - and ERP system providers
      </p>
    ),
  },
]

const guideCards = [
  {
    date: 'September 2020',
    title: 'Guide to ISO 20022 migration: Part 3',
    text: 'In 2019, recognising the magnitude of the transformational initiative underway in the payments world, we launched a series of guides to ISO 20022 migration. These were designed to help the industry navigate and understand the evolving journey towards a single global payments standard. The Deutsche Bank team now presents Part 3 of this journey in advance of Sibos 2020',
    image: images.guide1,
    href: '#',
  },
  {
    date: 'September 2019',
    title: 'Guide to ISO 20022 migration, Part 2',
    text: 'As the migration to ISO 20022 – the new global standard for payments messaging – progresses the benefits are clear: uplifted customer experience, more streamlined compliance procedures, and the ability to deliver new services. Yet with rapid change comes the challenge of keeping abreast of the latest developments and understanding the key points for consideration',
    image: images.guide2,
    href: '#',
  },
  {
    date: 'May 2019',
    title: 'Ultimate guide to ISO 20022 migration',
    text: 'The decision by major central banks and SWIFT to migrate to ISO 20022 is a watershed moment for the payments industry',
    image: images.guide3,
    href: '#',
  },
]

export default function IntegrationAndMessagingProductsPage() {
  const [openId, setOpenId] = useState(null)

  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="imp-page">
        <section className="cbs-hero" aria-label="Integration and messaging products">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper cbs-hero-content">
            <h1>Integration and messaging products</h1>
          </div>
        </section>

        <div className="cms-content-wrapper cbs-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/corporate-bank-solutions">Solutions</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/client-access-solutions">Client access solutions</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Integration and messaging products
            </span>
          </nav>

          <p className="imp-intro-lead">
            The Integration and messaging products facilitate the end to end integration from your
            IT systems to our platform. We provide a wide range of solutions to streamline and
            automate your treasury processes, from generating and sending payment instructions all
            the way through to automated reconciliation
          </p>

          <h2 className="imp-section-title">Streamlining solutions for greater reliability</h2>

          <p className="cbs-body">
            The increasing importance of security, shifts in technology trends and ongoing efficiency
            drives have meant that clients are looking for products and services which support the
            optimisation and streamlining of their treasury processes.
          </p>
          <p className="cbs-body">
            Our integration and messaging products are flexible, and designed to support and enable
            the standardisation, automation and centralisation of clients´ Treasury workflows.
          </p>
          <p className="cbs-body">
            We support several bank communication options in accordance with varying client needs.
            And to process global transaction banking services via the bank communication we offer a
            wide range of standardised industry formats, for example ISO 20022 XML messages.
          </p>
          <p className="cbs-body">
            Through our &lsquo;partner client integration&rsquo; solutions, global transaction
            business can be seamlessly integrated, from client IT-environments to our systems,
            reducing operational risks, increasing automation and streamlining processes.
          </p>
          <p className="cbs-body">
            Additionally, we provide a variety of messaging products, including &lsquo;Message Based
            Electronic Bank Account Management` which can further complement and facilitate treasury
            business.
          </p>
          <p className="cbs-body">
            Client centricity is a core value for us. We continually engage with our clients, as well
            as the Enterprise Resource Planning (ERP) and Treasury Management (TM) system providers
            to understand the market and ensure that our solutions are compatible with their needs.
          </p>

          <div className="fic-accordion">
            {accordions.map((item) => {
              const isOpen = openId === item.id
              return (
                <div
                  key={item.id}
                  className={`fic-accordion-item${isOpen ? ' fic-accordion-open' : ''}`}
                >
                  <button
                    type="button"
                    className="fic-accordion-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    {item.title}
                    <span className="fic-accordion-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && <div className="fic-accordion-panel">{item.content}</div>}
                </div>
              )
            })}
          </div>
        </div>

        <section className="cbs-insights cms-content-wrapper" aria-label="ISO 20022 guides">
          <div className="cbs-insights-grid">
            {guideCards.map((card) => (
              <article key={card.title} className="cbs-insight-card imp-guide-card">
                <div className="cbs-insight-image">
                  <img src={card.image} alt="" loading="lazy" />
                </div>
                <div className="cbs-insight-body">
                  <p className="imp-guide-date">{card.date}</p>
                  <h3>
                    <a href={card.href}>{card.title}</a>
                  </h3>
                  <p>{card.text}</p>
                  <a href={card.href} className="corp-btn corp-btn-solid">
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ss-newsletter" aria-label="Newsletter sign-up">
          <img className="ss-newsletter-image" src={images.newsletter} alt="" />
          <div className="ss-newsletter-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper ss-newsletter-content">
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
