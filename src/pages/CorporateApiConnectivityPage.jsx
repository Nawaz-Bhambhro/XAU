import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/da7572e3-d671-4e59-a6b9-1ecb6bc0a156/fileAsset?language_id=1'
  ),
  useCases: corpImg(
    'contentAsset/image/e5a55510-d879-4962-943e-48769b4fef88/fileAsset/filter/Resize,Jpeg/resize_w/1280/2374c268-6802-45b7-9483-400e41efecb9l.jpg'
  ),
  apiProducts: corpImg(
    'contentAsset/image/b6139cdf-1812-4b81-92cd-993b4db56fec/fileAsset/filter/Resize,Jpeg/resize_w/1280/416047cc-ce64-4eb3-91e5-6b79f0610bcbl.jpg'
  ),
  insights: corpImg(
    'contentAsset/image/cabdfc39-d047-400c-9149-982e481d6c85/fileAsset/filter/Resize,Jpeg/resize_w/1280/4be4ebea-bbfd-4ecd-a8d0-29c79abbe17bl.jpg'
  ),
  faq: corpImg(
    'contentAsset/image/103314e3-ddaa-4280-ad03-5e8dc012ba12/fileAsset/filter/Resize,Jpeg/resize_w/1280/7e43ac56-f751-46fa-a427-b75647de7b2el.jpg'
  ),
  globalCoverage: corpImg(
    'contentAsset/image/51eab3ad-b721-4ef4-bc9b-e8a2550e9cea/fileAsset/filter/Resize,Jpeg/resize_w/1280/fa4a3be7-8dec-4a88-8aae-68dc599de5c3.jpg'
  ),
  news1: corpImg(
    'contentAsset/image/cb53277b-edcf-431c-a85d-24d54fdc2043/fileAsset/filter/Resize,Jpeg/resize_w/1280/e218abb7-a5f6-4d36-85a7-b088db812e3fl.jpg'
  ),
  news2: corpImg(
    'contentAsset/image/f77c5980-0845-437a-b261-fa8006b4aa78/fileAsset/filter/Resize,Jpeg/resize_w/1280/bccf14a2-fed1-4c49-a1ee-fd8c3fce4289l.jpg'
  ),
  news3: corpImg(
    'contentAsset/image/d2fa9940-36ce-4313-aeb8-13292eb78512/fileAsset/filter/Resize,Jpeg/resize_w/1280/c7381049-a044-410a-8396-e93755541e71l.jpg'
  ),
}

const quickLinks = [
  { title: 'Use Cases', image: images.useCases, href: '#usecases' },
  { title: 'API Products', image: images.apiProducts, href: '#apiproducts' },
  { title: 'Insights', image: images.insights, href: '#insights' },
  { title: 'FAQ', image: images.faq, href: '#faq' },
]

const useCases = [
  {
    title: 'Liquidity Management',
    text: 'Live visibility of cash to enable real-time liquidity management',
  },
  {
    title: 'Cash Flow Forecasting',
    text: 'Up-to-the-minute data for more accurate and confident forecasts',
  },
  {
    title: 'Reconciliation',
    text: 'Instant matching of transaction data',
  },
  {
    title: 'Payment Initiation',
    text: 'Real-time payouts and instant refunds',
  },
  {
    title: 'Payment Tracking',
    text: 'Payment status and transactions tracking: live notifications',
  },
  {
    title: 'Request-to-Pay',
    text: 'Request to pay for account-to-account transfers and streamlined collections',
  },
  {
    title: 'Foreign Exchange',
    text: 'Foreign exchange: live streaming rates for 125+ payment currencies',
  },
  {
    title: 'Fraud Prevention',
    text: 'Auto-validation of IBANs and account holders',
  },
  {
    title: 'TMS/ERP Integration',
    text: 'Treasury management system (TMS) and ERP integrations',
  },
]

const apiProducts = [
  {
    id: 'balances',
    title: 'Real-Time Balances API',
    content: (
      <p>
        The Real-Time Balances API provides corporate customers an overview of their real-time
        account balances. Use this API to retrieve real time account balance information consisting
        of amount and currency to gain instant visibility of cash positions for faster, more precise
        decisions and forecasting. Users can update data (delivered in camt.052 format) in one click
        whenever they want, 24*7*365 days a year (including weekends and holidays). Please visit our{' '}
        <a href="https://developer.db.com/products/accountbalance" target="_blank" rel="noreferrer">
          Developer Portal
        </a>{' '}
        or contact our{' '}
        <a href="mailto:corporate.api@db.com">Corporate API team</a> for more information.
      </p>
    ),
  },
  {
    id: 'notifications',
    title: 'Real-Time Transaction Notifications API',
    content: (
      <p>
        Deutsche Bank&apos;s Real-Time Transaction Notifications API service allows corporate clients
        to receive credit and debit information on transaction-level in real-time. Additionally,
        customers can choose to include updated real-time account balance information. The API
        eliminates the need to wait for periodical bank statements as it enables users to consume
        transaction data as it occurs. Using this API, Deutsche Bank corporate clients can develop
        just-in-time experience by securely releasing physical goods (e.g., cars) and digital
        services to their customers upon confirmed receipt of payment. Please visit our{' '}
        <a href="https://developer.db.com/products/notificationsservice" target="_blank" rel="noreferrer">
          Developer Portal
        </a>{' '}
        or contact our <a href="mailto:corporate.api@db.com">Corporate API team</a> for more
        information.
      </p>
    ),
  },
  {
    id: 'prevalidation',
    title: 'Real-Time Account Pre-Validation API',
    content: (
      <p>
        The Account Pre-Validation API enables auto-validation of beneficiary account to prevent
        fraud and reduction of returned payments due to false details. Using this API, Deutsche Bank
        corporate clients can automatically check beneficiary IBAN and account holder name before
        initiating a payment, available 24*7*365 days a year (including weekends and holidays). To
        provide best-in class data quality and bank coverage (including accounts of third-party
        banks), this API services combines data from SWIFT gpi, Deutsche Bank&apos;s internal
        database as the world&apos;s largest Euro clearer, as well as additional data sources of
        local market aggregators and bi-lateral bank partnerships. Please visit our{' '}
        <a href="https://developer.db.com/products/accountprevalidation" target="_blank" rel="noreferrer">
          Developer Portal
        </a>{' '}
        or contact our <a href="mailto:corporate.api@db.com">Corporate API team</a> for more
        information.
      </p>
    ),
  },
  {
    id: 'payments',
    title: 'Real-Time Payments API',
    content: (
      <p>
        Using Deutsche Bank&apos;s Real-Time Payments API, corporate clients can now initiate
        instant payments to cater to multiple scenarios in their day-to-day business. The payments
        can be done instantly and round the clock offering a new line of business and improved
        customer experience with efficient business processes. This includes use cases such
        processing refunds, instant top-ups and payouts of digital wallets, real-time insurance
        redemptions, and more. Please visit our{' '}
        <a href="https://developer.db.com/products/instantpayment" target="_blank" rel="noreferrer">
          Developer Portal
        </a>{' '}
        or contact our <a href="mailto:corporate.api@db.com">Corporate API team</a> for more
        information.
      </p>
    ),
  },
  {
    id: 'statements',
    title: 'Account Statements API',
    content: (
      <p>
        The Account Statements API enables Deutsche Bank corporate clients to consume intraday and
        end-of-day bank statements in camt.053 format. Using this API can help to eliminate the need
        to maintain or set up legacy bank connectivity channels, therefore reducing costs and
        improving efficiencies. The API provides data both in push- and pull logic, meaning that
        customers choose to receive updated bank statements either automatically or on-demand. Please
        contact our <a href="mailto:corporate.api@db.com">Corporate API team</a> for more
        information.
      </p>
    ),
  },
  {
    id: 'fx4cash',
    title: 'FX4Cash API',
    content: (
      <p>
        FX4Cash API provides clients with an additional channel to access the capabilities of
        FX4Cash. With FX4Cash you can access live streaming rates for 125+ payment currencies at
        trade execution. For more information, please visit our{' '}
        <a href="https://developer.db.com/products/fx4cash-api" target="_blank" rel="noreferrer">
          Developer Portal
        </a>{' '}
        or contact our <a href="mailto:corporate.api@db.com">Corporate API team</a>.
      </p>
    ),
  },
  {
    id: 'requesttopay',
    title: 'Request to Pay API',
    content: (
      <p>
        Corporate customers can now offer Request to Pay as new payment method to their end customer.
        Request to Pay offers a number of advantages compared to credit cards, direct debits and
        other collection methods, such as real-time processing, finality of payment and lower cost.
        Deutsche Bank acts as a Payment Initiation Service Provider and helps end customers to create
        and authorise a direct bank transfer from their bank account to Deutsche Bank&apos;s
        corporate customer. The payment can be a SEPA Instant Credit Transfer or a SEPA Credit
        Transfer. For more information, please visit our{' '}
        <a href="https://developer.db.com/products/requesttopay" target="_blank" rel="noreferrer">
          Developer Portal
        </a>{' '}
        or contact our <a href="mailto:corporate.api@db.com">Corporate API team</a>.
      </p>
    ),
  },
]

const newsCards = [
  {
    title: 'APIs and virtual accounts, real-time benefits',
    text: "German fintech Moss offers small and medium-sized companies real-time visibility and control over their expenses. flow's Desirée Buchholz reports on why APIs and virtual account numbers are essential for the start-up – and how Moss has teamed up with Deutsche Bank to enable real-time account top ups and withdrawals for its clients",
    image: images.news1,
    cta: 'Read more',
    href: 'https://flow.db.com/case-studies/apis-and-virtual-accounts-real-time-benefits',
  },
  {
    title: 'Unlocking Real-time Treasury: How to Benefit from APIs and Instant Data on Demand',
    text: "In this dynamic panel discussion, Deutsche Bank's Kerstin Montiegel sat down with Daniel Gramunt (Director Cash Management, Nokia) and Rita Jardan (Head of CAM Finance, Freeway Entertainment Group) to discuss real-world examples of APIs being put to use in the treasury function.",
    image: images.news2,
    cta: 'Watch now',
    href: 'https://treasury-management.com/events/api-masterclass-how-to-accelerate-and-embrace-real-time-treasury/',
  },
  {
    title: 'Will corporate bank APIs replace legacy connectivity?',
    text: "In this article by Euromoney, Deutsche Bank's Kerstin Montiegel explains her views on what drives the shift from legacy connectivity to real-time APIs, and how she considers the relationship between legacy bank connectivity and APIs.",
    image: images.news3,
    cta: 'Read more',
    href: 'https://www.euromoney.com/article/2aowuxqvv9sf20qz3icqo/treasury/will-corporate-bank-apis-replace-legacy-connectivity',
  },
]

const faqItems = [
  {
    id: 'what-is-api',
    title: 'What is API connectivity?',
    content: (
      <p>
        API stands for Application Programming Interface. APIs allow you to integrate bank account
        information and payment initiation directly into business applications (e.g., TMS and ERP
        systems). Unlike legacy bank connectivity, data retrieval and payment initiation happen in
        real-time, therefore unlocking new use cases and value.
      </p>
    ),
  },
  {
    id: 'benefits',
    title: 'What are the benefits of APIs?',
    content: (
      <p>
        APIs enable corporate clients to receive account information and initiate payments in
        real-time, without manual intervention. Leveraging real-time data and payments, businesses
        can automate and accelerate processes, ease administrative burden of treasury and finance
        teams, save time and costs, and help product teams to deliver state-of-the-art customer
        experiences.
      </p>
    ),
  },
  {
    id: 'h2h',
    title: 'What is the difference between API and other types of bank connectivity like host-to-host (H2H)?',
    content: (
      <p>
        APIs provide an &ldquo;always on&rdquo; connection between business applications, and bank
        account information and payment services. They allow data to flow in real-time and on demand.
        In practice, this means that you can initiate and track payments in real-time, and to get
        instant notifications of new transactions. APIs are also key to workflow automation based on
        a continuous stream of real-time balances and transactions. By contrast, traditional
        connectivity like host-to-host (H2H) relies on batched processing, meaning that any data
        exchange runs on pre-determined time intervals. Against this background, data provided
        through H2H always has at least 15 to 30 minutes of lag time, whereas APIs provide
        up-to-the-minute data.
      </p>
    ),
  },
  {
    id: 'setup-time',
    title: 'How long does it take to set up APIs?',
    content: (
      <p>
        Depending on the individual setup and requirements of your business, API connectivity can be
        established in short time. Using our pre-built integrations with selected TMS and ERP systems
        can further help you accelerate the setup process down to a few weeks. Once onboarded to our
        API platform, you can activate new accounts within a few business days.
      </p>
    ),
  },
  {
    id: 'security',
    title: 'How secure are APIs?',
    content: (
      <>
        <p>
          In order to ensure a safe, secure and stable environment, we use proven industry standards
          like REST, and state-of-the-art security mechanisms for our APIs. To prove API security,
          we perform API penetration tests on a regular basis.
        </p>
        <p>The CB Connect API platform incorporates two security mechanisms:</p>
        <ol>
          <li>
            Mutually Authenticated TLS, known as 2-way TLS based on a client certificate — Deutsche
            Bank Corporate Bank API endpoints are protected by mTLS (Mutually Authenticated TLS, also
            known as 2 way TLS). To access our APIs, you will need to make sure you have setup your
            transport certificate accordingly.
          </li>
          <li>
            Payload signing, known as Corporate Seal based on a client certificate — Having this
            non-repudiation mechanism in place provides enhanced security to DB and clients by
            ensuring that all requests originated from the legitimate source and data was not
            modified during transit.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'countries',
    title: 'For which countries does CB Connect provide API connectivity?',
    content: (
      <p>
        Deutsche Bank offers Cash Management Services to corporate clients in 35 countries worldwide.
        To learn more about local API availability in specific countries, please visit the{' '}
        <a href="https://corporates.db.com/in-focus/focus-topics/tomorrows-treasury/global-navigator-app">
          Deutsche Bank Solutions Country Guide
        </a>{' '}
        and select &ldquo;Real-Time API&rdquo; from the &ldquo;Service&rdquo; tab.
      </p>
    ),
  },
  {
    id: 'cost',
    title: 'How can I implement APIs and how much does it cost?',
    content: (
      <p>
        CB Connect is specifically designed to meet the professional needs and scale of fast growing
        digital businesses and multinational corporations. You can choose to either directly
        integrate with our APIs or to leverage our pre-built API integrations with TMS and ERP systems
        which eliminate implementation time and costs down to a minimum. Please contact your client
        advisor for pricing or send an email to{' '}
        <a href="mailto:corporate.api@db.com">corporate.api@db.com</a>.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Who can I talk to if I have additional questions?',
    content: (
      <p>
        For more information on APIs and real-time treasury, please reach out to your client advisor
        or send an email to <a href="mailto:corporate.api@db.com">corporate.api@db.com</a>.
      </p>
    ),
  },
]

function AccordionList({ items, defaultOpen }) {
  const [openId, setOpenId] = useState(defaultOpen ?? null)

  return (
    <div className="fic-accordion">
      {items.map((item) => {
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
  )
}

export default function CorporateApiConnectivityPage() {
  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="api-page">
        <section className="api-hero cbs-hero" aria-label="CB Connect">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper cbs-hero-content api-hero-content">
            <div>
              <h1>CB Connect - Corporate Bank API Platform</h1>
              <p className="api-hero-subtitle">Making real-time treasury real</p>
              <a href="mailto:corporate.api@db.com" className="corp-btn corp-btn-white">
                Contact us
              </a>
            </div>
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
              Real-time treasury and API Connectivity
            </span>
          </nav>

          <p className="api-intro-lead">
            CB Connect is Deutsche Bank&apos;s global API platform for corporate clients, empowering
            treasury teams and digital products of the world&apos;s most successful businesses.
            Real-time data and instant payments are no longer the future but they are here — and they
            are here to stay.
          </p>

          <p className="cbs-body">
            For years, treasurers have envisioned real-time – the ability to instantly access bank data
            and execute payments. CB Connect makes this vision becomes a reality, enabling a broad
            range of use cases and bringing benefits across industries.
          </p>
          <p className="cbs-body">
            CB Connect makes connecting to Deutsche Bank APIs easy: more than 5.000 developers already
            use our developer portal to get all the tools and documentation to integrate with our APIs
            in short time. In addition, we provide pre-built API connectivity with leading TMS and ERP
            providers that reduce time-to-production from months to a few days. Ready to get started?
            Reach out to our dedicated CB Connect product team: our experts will support you every step
            of the way.
          </p>
          <a href="mailto:corporate.api@db.com" className="corp-btn corp-btn-solid api-get-touch">
            Get in touch
          </a>
        </div>

        <section className="api-quicklinks cms-content-wrapper" aria-label="Quick links">
          <div className="api-quicklinks-grid">
            {quickLinks.map((link) => (
              <a key={link.title} href={link.href} className="api-quicklink-card">
                <img src={link.image} alt="" />
                <div className="api-quicklink-gradient" aria-hidden="true" />
                <div className="api-quicklink-content">
                  <h2>{link.title}</h2>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="api-section api-section--blue" id="usecases" aria-labelledby="usecases-title">
          <div className="cms-content-wrapper">
            <h2 className="api-section-title" id="usecases-title">
              Use cases
            </h2>
            <p className="cbs-body">
              Deutsche Bank enables API-driven use cases for leading businesses and fintechs,
              including B2B and B2C scenarios across industries such as payments service,
              telecommunications, sports and entertainment, consumer, automotive, insurance, and
              payments. Interested to learn more about use cases for your industry? Our CB Connect
              team will help you find out how you can benefit, too.
            </p>
            <a href="mailto:corporate.api@db.com" className="corp-btn corp-btn-solid">
              Contact us
            </a>
          </div>
        </section>

        <section className="api-usecases-grid-wrap" aria-label="Use case cards">
          <div className="cms-content-wrapper">
            <div className="api-usecases-grid">
              {useCases.map((item) => (
                <article key={item.title} className="api-usecase-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="api-section"
          id="apiproducts"
          aria-labelledby="apiproducts-title"
        >
          <div className="cms-content-wrapper">
            <h2 className="api-section-title" id="apiproducts-title">
              API Products
            </h2>
            <p className="cbs-body">
              CB Connect makes real-time treasury a reality, providing a comprehensive suite of APIs
              for cash management, instant payments, auto-reconciliation, forecasting and other daily
              functions.
            </p>
            <AccordionList items={apiProducts} />
          </div>
        </section>

        <section className="api-coverage cms-content-wrapper" aria-label="Global API platform">
          <div className="api-coverage-inner">
            <div className="api-coverage-media">
              <img src={images.globalCoverage} alt="" />
            </div>
            <div className="api-coverage-content">
              <h2>A global API platform for corporates</h2>
              <p>
                CB Connect offers API connectivity and payments services to corporate clients in 34
                countries worldwide. For local availability, please visit our Global Navigator App
              </p>
              <a href="#" className="corp-btn corp-btn-solid">
                Explore more
              </a>
            </div>
          </div>
        </section>

        <section
          className="api-section api-section--blue"
          id="insights"
          aria-labelledby="insights-title"
        >
          <div className="cms-content-wrapper">
            <h2 className="api-section-title" id="insights-title">
              News &amp; Insights
            </h2>
          </div>
        </section>

        <section className="cbs-insights cms-content-wrapper" aria-label="News and insights">
          <div className="cbs-insights-grid api-insights-grid">
            {newsCards.map((card) => (
              <article key={card.title} className="cbs-insight-card api-insight-card">
                <div className="cbs-insight-image">
                  <img src={card.image} alt="" loading="lazy" />
                </div>
                <div className="cbs-insight-body">
                  <h3>
                    <a href={card.href} target="_blank" rel="noreferrer">
                      {card.title}
                    </a>
                  </h3>
                  <p>{card.text}</p>
                  <a href={card.href} className="corp-btn corp-btn-solid" target="_blank" rel="noreferrer">
                    {card.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="api-section" id="faq" aria-labelledby="faq-title">
          <div className="cms-content-wrapper">
            <h2 className="api-section-title" id="faq-title">
              Frequently Asked Questions
            </h2>
            <AccordionList items={faqItems} />
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
