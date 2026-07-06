import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/8b678deb-3d94-464f-9f52-bb79aab8d27f/fileAsset?language_id=1'
  ),
  cashManagement: corpImg(
    'contentAsset/image/374a2dea-040a-44e1-9e17-bee75925748c/fileAsset/filter/Resize,Jpeg/resize_w/1280/a959b5ac-0dec-48fb-8588-0276623d1157.jpg'
  ),
  foreignExchange: corpImg(
    'contentAsset/image/c6806e4f-1216-4f9b-92f2-e7de2ccfc570/fileAsset/filter/Resize,Jpeg/resize_w/1280/d6fe5d25-1255-45cc-8d18-96e815ce0092.jpg'
  ),
  securitiesServices: corpImg(
    'contentAsset/image/ecc6b555-0141-4487-9359-22acce981b39/fileAsset/filter/Resize,Jpeg/resize_w/1280/ff566ecc-58bf-4a7b-975b-13e75f52bf86.jpg'
  ),
  sustainableFinance: corpImg(
    'contentAsset/image/3456a3aa-85a1-4f77-a5ba-d7d5fa8f9151/fileAsset/filter/Resize,Jpeg/resize_w/1280/9fe5ded9-640b-4cca-b4cc-d004353c5d12.jpg'
  ),
  tradeFinance: corpImg(
    'contentAsset/image/1841643e-4be3-42c1-9b7f-a2900a635ae9/fileAsset/filter/Resize,Jpeg/resize_w/1280/c88d677d-3f98-4ddf-80bd-0ef2ad6236ba.jpg'
  ),
  trustAgency: corpImg(
    'contentAsset/image/a6d7d0de-fe77-4400-a4e1-0cd04afe9199/fileAsset/filter/Resize,Jpeg/resize_w/1280/9914f9a3-9eeb-4de6-b048-3248d7de0a2d.jpg'
  ),
  clientStories: corpImg(
    'contentAsset/image/e756fabe-1285-442c-9740-263aeeed3ef1/fileAsset/filter/Resize,Jpeg/resize_w/1280/913d9d2a-5f38-4901-be90-a3884367c235l.jpg'
  ),
  latestInsights: corpImg(
    'contentAsset/image/f078a92d-aeaa-48df-9636-99304419c950/fileAsset/filter/Resize,Jpeg/resize_w/1280/a1f545a4-c1e0-4b92-a95c-f2e25f451426l.jpg'
  ),
  focusTopics: corpImg(
    'contentAsset/image/33d24351-95c0-42e4-9900-8c778721a637/fileAsset/filter/Resize,Jpeg/resize_w/1280/9119afd7-a325-4f78-8cb3-9a3a39c8d657.jpg'
  ),
}

const serviceCards = [
  {
    title: 'Cash management',
    text: 'Our global cash management services, underpinned by advanced technology and the expertise of our teams, allow both corporates and financial institutions to generate synergies though greater efficiency and automation. The results include improved control and cost-benefits across borders, currencies and payment types',
    image: images.cashManagement,
    href: '/solutions/corporate-bank-solutions/cash-management',
  },
  {
    title: 'Foreign exchange',
    text: 'Deutsche Bank is an industry recognised leader in foreign exchange business. Our approach responds to customers’ needs across the product spectrum from liquidity provision in the spot market to innovative derivative solutions for asset and liability managers',
    image: images.foreignExchange,
  },
  {
    title: 'Securities services',
    text: 'Corporates and institutions investing globally need to keep pace with a changing regulatory landscape, as well as market infrastructure change and new technological innovations. They need bespoke solutions that focus on their specific post-trade goals and data that empowers them to improve their efficiency and process',
    image: images.securitiesServices,
    href: '/solutions/corporate-bank-solutions/securities-services',
  },
  {
    title: 'Sustainable & Transformation finance',
    text: 'Integrate sustainability in your finance activities: We support you in your sustainability journey, jointly contributing to the economy’s transformation towards Sustainable Development Goals and climate targets',
    image: images.sustainableFinance,
    href: '/solutions/corporate-bank-solutions/sustainable-finance',
  },
  {
    title: 'Trade finance & Lending',
    text: "Moving goods and services across borders and within supply chains is highly complex and exposes counterparties to a wide range of risks – most particularly non-payment. Trade finance delivers fast, efficient, reliable and comprehensive solutions for every stage of a client's trade value chain to support their foreign and domestic trade activities",
    image: images.tradeFinance,
    href: '/solutions/corporate-bank-solutions/trade-finance',
  },
  {
    title: 'Trust and agency services',
    text: 'We offer a suite of services tailored to support our clients’ requirements, from complex securitisation, or project finance to syndicated and bilateral loans, debt exchanges and restructurings — as well as more vanilla products such as medium-term notes and commercial paper. We also specialize in administering cross-border equity structures such as American and global depositary receipts',
    image: images.trustAgency,
    href: '/solutions/corporate-bank-solutions/trust-and-agency-services',
  },
]

const insightCards = [
  {
    title: 'Review our work with clients and read our client stories',
    text: '',
    cta: 'More',
    image: images.clientStories,
  },
  {
    title: 'Explore latest insights',
    text: 'flow magazine is where experts offer keen analysis and commentary',
    cta: 'More',
    image: images.latestInsights,
  },
  {
    title: 'Learn more about our focus topics',
    text: 'At the forefront of delivering change and support to transaction banking service providers and their clients´ businesses',
    cta: 'More',
    image: images.focusTopics,
  },
]

export default function CorporateBankSolutionsPage() {
  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="cbs-page">
        <section className="cbs-hero" aria-label="Corporate Bank solutions">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper cbs-hero-content">
            <h1>Corporate Bank solutions</h1>
          </div>
        </section>

        <div className="cms-content-wrapper cbs-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/corporates">Solutions</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Corporate Bank solutions
            </span>
          </nav>

          <h2 className="cbs-welcome-title">Welcome to the Corporate Bank</h2>
          <p className="cbs-body">
            Deutsche Bank&apos;s Corporate Bank addresses the needs of corporate clients, financial
            institutions, investors and issuers in three segments
          </p>
          <p className="cbs-body">
            In Corporate Treasury Services we provide corporate clients with liquidity management,
            foreign exchange, payment, trade finance and lending solutions. These services are
            orchestrated by a treasury coverage team that works closely with the Investment Bank to
            ensure cross-divisional alignment.
          </p>
          <p className="cbs-body">
            Our Institutional Client Services provide financial institutions, investors and issuers
            with institutional cash management, trust and agency solutions as well as securities
            services.
          </p>
          <p className="cbs-body">
            In Germany, our Business Banking segment supports small businesses and self-employed
            business owners with payment and credit solutions as well as other banking services
            across our three brands Deutsche Bank, Postbank and the digital bank FYRST.
          </p>

          <blockquote className="cbs-quote">
            <span className="cbs-quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p>
              Potential made possible by your Global Hausbank. Shaping the future together with
              innovative solutions
            </p>
          </blockquote>
        </div>

        <section className="cbs-services" aria-label="Corporate Bank services">
          <div className="cms-content-wrapper cbs-services-stack">
            {serviceCards.map((card) => (
              <article key={card.title} className="cbs-service-row">
                <div className="cbs-service-text">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <a href={card.href || '#'} className="corp-btn corp-btn-solid">
                    Find out more
                  </a>
                </div>
                <div className="cbs-service-image">
                  <img src={card.image} alt="" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cbs-insights" aria-label="More from Corporate Bank">
          <div className="cms-content-wrapper cbs-insights-grid">
            {insightCards.map((card) => (
              <article key={card.title} className="cbs-insight-card">
                <div className="cbs-insight-image">
                  <img src={card.image} alt="" />
                </div>
                <div className="cbs-insight-body">
                  <h3>{card.title}</h3>
                  {card.text && <p>{card.text}</p>}
                  <a href="#" className="corp-btn corp-btn-solid">
                    {card.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
