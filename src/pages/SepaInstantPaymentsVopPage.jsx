import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/5375f421-7c02-4aae-8199-356e4240f5b7/fileAsset?language_id=1'
  ),
  johnny: corpImg(
    'contentAsset/image/b50ea73f-e883-4b21-864e-5a216d7cdc3d/fileAsset/filter/Resize,Jpeg/resize_w/1280/2beb90b7-4bec-4999-985b-dc2780c506d9l.jpg'
  ),
  stopwatch: corpImg(
    'contentAsset/image/61b99225-0fa4-47f6-a48d-e22d58d6e9e8/fileAsset/filter/Resize,Jpeg/resize_w/1280/a3d822ae-47ef-42b3-8deb-a3b65e294613.jpg'
  ),
  webinar: corpImg(
    'contentAsset/image/172474f5-2678-40b7-9a38-416b5268f3cc/fileAsset/filter/Resize,Jpeg/resize_w/1280/237888b5-9d91-49bb-9c4b-68b38c9c7662l.jpg'
  ),
}

const overviewTabs = [
  {
    id: 'background',
    title: 'Background',
    content:
      'In April 2024, the EU Instant Payment Regulation 2024/886 (IPR) came into force, allowing real-time transfers. From October 2025, a Verification of Payee (VoP) service will be applicable to all real-time and Single Euro Payments Area (SEPA) credit transfers within EU/EEA countries in the Euro currency.',
  },
  {
    id: 'benefits',
    title: 'Benefits',
    content:
      'All banks will accept instant payments and will be able to instruct without an amount limit while enabling the same costs between SEPA credit transfers and instant payments. VoP will be the new key service. VoP is the verification of the recipient data contained in a payment and is primarily intended to counteract fraud that affects the immediate and irrevocable execution of real-time transfers, but also classic SEPA transfers.',
  },
  {
    id: 'requirements',
    title: 'Requirements',
    content:
      "The aim of the VoP is to ensure that before the payment is authorised, a verification check takes place whereby the recipient's IBAN and name are forwarded to the recipient bank for verification. The European Payments Council (EPC) has published a new set of rules for this VoP scheme, which sets out obligations, rights and standards. These rules allow for our corporate clients to opt out of VoP checking for their bulk files, or to use the VoP service. We are developing solutions and enhancing our channels to support VoP.",
  },
]

const resourceItems = [
  {
    title: 'Instant payments for corporate treasurers and their clients – what\u2019s in our toolbox?',
    eyebrow: '23 July 2025: flow briefing',
    text: 'As global adoption accelerates, instant payments are reshaping the payments landscape – delivering real-time, 24/7 transactions that meet rising expectations for speed and convenience. While initially driven by retail demand, their impact on corporate clients prompts a rethink of how businesses send, receive, and manage payments.',
    href: 'https://flow.db.com/files/documents/more/publications/flow-briefing/DB-Flow-Briefing-Instant-Payments.pdf',
    cta: 'Read flow briefing',
  },
  {
    title: 'Taking instant payments in Europe to the next level',
    eyebrow: '22 May 2025: flow briefing',
    text: "The EU regulators' adoption of the SEPA Instant Payment Regulation marks the next stage of development for harmonised instant payments in Europe, bringing numerous new possibilities and use cases, as well as new requirements for payment service providers and their customers",
    href: 'https://flow.db.com/files/documents/more/publications/flow-briefing/Deutsche-Bank-flow-briefing-Taking-instant-payments-in-Europe-to-the-next-level.pdf',
    cta: 'Read flow briefing',
  },
  {
    title: 'Verification of Payee',
    eyebrow: 'May 2025: Client fact sheet',
    text: 'In April 2024, the EU Instant Payment Regulation 2024/886 (IPR) came into force, allowing real-time transfers. From October 2025, a Verification of Payee (VoP) service will be applicable to all real-time and Single Euro Payments Area (SEPA) credit transfers within EU/EEA countries in the Euro currency.',
    href: 'https://corporates.db.com/files/documents/cash-investment-service/Client-Factsheet-Verfication-of-Payee.pdf?language_id=1',
    cta: 'Read Client fact sheet',
  },
]

const faqItems = [
  {
    id: 'purpose',
    title: 'What is the purpose of VoP?',
    content:
      'VoP is the verification of the recipient data contained in a payment and is primarily intended to counteract fraud that affects the immediate and irrevocable execution of real-time transfers, but also classic SEPA transfers. The EPC published a new set of rules for the VoP scheme, which sets out obligations, rights and standards for checking the IBAN and recommendations for name matching.',
  },
  {
    id: 'how',
    title: 'How does VoP work?',
    content:
      "The aim of the VoP is to ensure that before the payment is authorised, a verification check takes place whereby the recipient's IBAN and name are forwarded to the recipient bank for verification. The bank will verify that the name matches the account and then reports back to the commissioning bank. Fundamentally, VoP is a comparison of whether the payee's IBAN and name correspond to the information stored with the recipient bank. The test result (VoP Status) must be known by the payer before authorisation.",
  },
  {
    id: 'results',
    title: 'What VoP results can I obtain?',
    content:
      'The results of the VoP check will be one of the following: Match: Name matches the name on the beneficiary account. Close match: Name is very similar; as part of VoP status, the real name is also advised. No match: Given name does not match. None: No bank accessibility/no account found/VoP service temporarily unavailable due to technical reasons. VoP is an information service. The payer can then decide, based on the VoP status, whether the payment is addressed to the right beneficiary before authorising the payment. Even in case of \u2018No match\u2019 or \u2018Close match\u2019, a client will be able to initiate the payment.',
  },
  {
    id: 'single-bulk',
    title: 'Is VoP applicable to single and bulk payments?',
    content:
      'Yes, VoP is available for all SEPA classic and instant payments for single and bulk files. In the case of bulk payment files, clients will have the option to opt out of the VoP service, or will need to make changes to their own systems before they use the service. VoP does not apply to SEPA Direct Debit.',
  },
  {
    id: 'ebics-h2h',
    title:
      'What do I have to consider when I use the Electronic Banking Internet Communication Standard (EBICS) or Host-to-Host (H2H)?',
    content:
      'For corporate customers who submit payment files, you will either be able to use VoP checking on these files, or alternatively you will have the option to \u2018opt out\u2019 of this VoP service. If a client wishes to use a VoP for their bulk files, they will need to submit their payment files with an indicator – a file name for H2H/GVO for EBICS, which activates the VoP check for the file. To opt out and to send the files without VoP service, the client has to submit their payment files without a VoP indicator.',
  },
  {
    id: 'api',
    title: 'Will I have to do changes when I use API, or can I opt out?',
    content:
      'Transactions that initiate single payments (both SEPA Credit Transfers and SEPA Credit Transfers Instant) via API cannot opt out from VoP. Before October 2025, the below actions are required on the client side: Integrate and go live on the new Verification of Payee API. Migrate to the latest version of the SEPA Instant Payments API. For testing and questions please reach out to your individual Deutsche Bank representative.',
  },
  {
    id: 'receivables',
    title:
      'For receivables, what matching logic will Deutsche Bank apply to VoP requests on my accounts?',
    content:
      'Deutsche Bank is currently developing our VoP matching algorithm, according to EPC guidelines, with the most appropriate logic to minimise \u2018partial match\u2019 or \u2018no match\u2019 responses, with consideration for virtual accounts, as well as use of trade names.',
  },
  {
    id: 'payment-types',
    title: 'Will VoP be applicable to all payment types? Are Direct Debits also in scope?',
    content:
      'VoP will be applicable to all SEPA Classic and SEPA Inst payments. SEPA DD\u2019s are not mandated by the IPR regulation.',
  },
  {
    id: 'validation-timing',
    title: 'When will the VoP validation be performed?',
    content:
      'VoP will be part of the Payment Initiation process, and the validation will be performed as soon as the necessary beneficiary data is available at the Bank and before payment execution.',
  },
  {
    id: 'not-possible',
    title: 'What can be reasons for \u201cNot possible to perform VoP\u201d?',
    content:
      'Beneficiary bank not reachable/does not (yet) support VoP. Technical issues. Beneficiary account may be closed/not found.',
  },
  {
    id: 'no-match-proceed',
    title:
      'In the case of a \u2018No Match\u2019 or Close Match\u2019 or \u2018Not possible to perform VoP\u2019 result can the payment(s) still proceed?',
    content:
      'Yes, payments are processed based on a valid IBAN so even if the VoP result was a \u2018No Match\u2019 or \u2018Close Match\u2019 or \u2018Not possible to perform VoP\u2019 payment will still be processed if client decides to proceed. However, in case of potential fraud liability will be on client side.',
  },
  {
    id: 'cost',
    title: 'Is there a cost associated to VoP?',
    content:
      'No, the Instant Payment Regulation mandates that all PSPs need to offer VoP free of charge.',
  },
  {
    id: 'opt-out',
    title: 'Can I opt-out of VoP?',
    content: 'There is an opt-out for corporates (non consumers) for bulk files.',
  },
]

export default function SepaInstantPaymentsVopPage() {
  const [activeTab, setActiveTab] = useState('background')
  const [openFaq, setOpenFaq] = useState(null)
  const activeOverview = overviewTabs.find((tab) => tab.id === activeTab)

  return (
    <SiteLayout activeSubNav="In focus" headerVariant="corporates" footerVariant="corporates">
      <main className="vop-page">
        <section className="cbs-hero vop-hero" aria-label="SEPA Instant Payment Regulation and VoP">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="vop-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper cbs-hero-content vop-hero-content">
            <p className="vop-hero-eyebrow">October 2025</p>
            <h1>
              SEPA Instant Payment Regulation and Verification of Payee: fast and safe payments for
              Europe
            </h1>
          </div>
        </section>

        <div className="cms-content-wrapper cbs-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/in-focus/focus-topics">In focus</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/in-focus/focus-topics">Focus topics</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              SEPA Instant Payment Regulation/VoP
            </span>
          </nav>

          <p className="vop-intro-lead">
            As part of the upcoming Instant Payments Regulation requirements, Verification of Payee
            (VoP) within the EU/EEA will become mandatory in October 2025. This checks the
            correspondence between payee and account holder using IBAN and name to prevent
            fraudulent or misdirected payments. To help you navigate and prepare for this we welcome
            you to our VoP knowledge repository, which provides key information and guidelines on
            this upcoming change to SEPA payments.
          </p>
        </div>

        <section className="vop-video-band" aria-label="Johnny Grimes video">
          <div className="cms-content-wrapper vop-video-band-inner">
            <div className="vop-video-thumb">
              <img src={images.johnny} alt="Johnny Grimes" loading="lazy" />
              <span className="vop-play-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="48" height="48" fill="currentColor">
                  <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.45)" />
                  <path d="M20 16l16 8-16 8V16z" fill="#fff" />
                </svg>
              </span>
            </div>
            <div className="vop-video-copy">
              <h2>
                See Johnny Grimes, Head of Corporate Cash Products, Deutsche Bank explain how
                regulatory changes represent opportunities to enhance efficiency, transparency, and
                trust in the payments ecosystem.
              </h2>
              <p>
                At Deutsche Bank, we are here to help our clients navigate these regulatory shifts,
                offering solutions for real-time payments, fraud prevention, and seamless ISO 20022
                migration.
              </p>
            </div>
          </div>
        </section>

        <section className="vop-overview" aria-label="Overview">
          <div className="cms-content-wrapper">
            <h2 className="vop-section-title">Overview</h2>
            <div className="vop-tabs" role="tablist" aria-label="Overview topics">
              {overviewTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`vop-tab${activeTab === tab.id ? ' vop-tab--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="vop-tab-panel" role="tabpanel">
              <h3>{activeOverview.title}</h3>
              <p>{activeOverview.content}</p>
            </div>
          </div>
        </section>

        <section className="vop-guide" aria-label="H2H Swift guide">
          <div className="cms-content-wrapper vop-guide-inner">
            <h2>
              <a
                href="https://corporates.db.com/files/documents/in-focus/focus-topics/instant-payments-vop/H2H-Swift-guide.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Implementation of VoP in H2H/Swift
              </a>
            </h2>
            <p>
              This document provides an overview of what clients need to do if they want to avail of
              VoP and how they can access the VoP status information on CB Portal.
            </p>
            <a
              href="https://corporates.db.com/files/documents/in-focus/focus-topics/instant-payments-vop/H2H-Swift-guide.pdf"
              target="_blank"
              rel="noreferrer"
              className="corp-btn corp-btn-white"
            >
              Read now
            </a>
          </div>
        </section>

        <section className="vop-resources" aria-label="What corporates need to know">
          <div className="cms-content-wrapper">
            <h2 className="vop-section-title">What corporates need to know</h2>
            <div className="vop-resource-list">
              {resourceItems.map((item) => (
                <article key={item.title} className="vop-resource-item">
                  <div className="vop-resource-image">
                    <img src={images.stopwatch} alt="" loading="lazy" />
                  </div>
                  <div className="vop-resource-body">
                    <h3>{item.title}</h3>
                    <p className="vop-resource-eyebrow">{item.eyebrow}</p>
                    <p>{item.text}</p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="corp-btn corp-btn-solid"
                    >
                      {item.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vop-webinar" aria-label="Webinar">
          <div className="cms-content-wrapper vop-webinar-inner">
            <h2 className="vop-section-title">Webinar</h2>
            <div className="vop-webinar-grid">
              <div className="vop-video-thumb">
                <img
                  src={images.webinar}
                  alt="Screenshot of Client Webinar Verification of Payee (VoP)"
                  loading="lazy"
                />
                <span className="vop-play-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" width="48" height="48" fill="currentColor">
                    <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.45)" />
                    <path d="M20 16l16 8-16 8V16z" fill="#fff" />
                  </svg>
                </span>
              </div>
              <div className="vop-webinar-copy">
                <h3>Impact of the new EU SEPA regulation: Verification of Payee (VoP)</h3>
                <p>
                  The Webinar held by Deutsche Bank&apos;s Patricia McLoughlin, Heike Matzner and
                  Olga Shults-Alekperova touches upon the upcoming changes of the Instant Payment
                  Regulation and Verification of Payee (VoP) coming into effect on October 9th. It
                  also provides an overview of the implementation of VoP in CashManager, dbdi and
                  H2H/Swift channels and covers incoming VoP requests and DB&apos;s Approach to
                  handle them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="vop-faq" aria-label="FAQ">
          <div className="cms-content-wrapper cbs-content">
            <h2 className="vop-section-title">FAQ</h2>
            <div className="cs-accordion">
              {faqItems.map((item) => {
                const isOpen = openFaq === item.id
                return (
                  <div
                    key={item.id}
                    className={`cs-accordion-item${isOpen ? ' cs-accordion-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="cs-accordion-trigger"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : item.id)}
                    >
                      {item.title}
                      <span className="cs-accordion-icon" aria-hidden="true">
                        <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                          <path
                            d="M4 6l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                          />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="cs-accordion-panel">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
