import { SiteLayout } from '../components/Layout'
import '../Corporates.css'
import '../AssetManagers.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/8961fa90-99a9-4fca-b6cf-6a7535177fce/fileAsset?language_id=1'
  ),
  whyChoose: corpImg(
    'contentAsset/image/33d24351-95c0-42e4-9900-8c778721a637/fileAsset/filter/Resize,Jpeg/resize_w/1280/9119afd7-a325-4f78-8cb3-9a3a39c8d657.jpg'
  ),
  newsletter: corpImg(
    'contentAsset/image/c087a081-389e-4541-a3cb-7b14e6a86c04/fileAsset/filter/Resize,Jpeg/resize_w/1280/7650d730-5cca-4c70-bb8c-939b1638deab.jpg'
  ),
}

const sectors = [
  {
    title: 'Alternative',
    href: '/clients/asset-managers/alternative-asset-managers',
    text: 'We provide a full range of fund administration, custody, securities lending and banking services for alternative asset managers',
    cta: 'Alternative asset managers',
    variant: 'neutral',
  },
  {
    title: 'Traditional',
    href: '/clients/asset-managers/traditional-asset-managers',
    text: 'With a proven track record in servicing asset managers, a global award-winning platform and flexible solutions, we support a variety of funds and asset classes across multiple jurisdictions',
    cta: 'Traditional asset managers',
    variant: 'light',
  },
]

export default function AssetManagersPage() {
  return (
    <SiteLayout activeSubNav="Clients" headerVariant="corporates" footerVariant="corporates">
      <main className="am-page">
        <section className="am-hero" aria-label="Asset managers">
          <img className="am-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper am-hero-content">
            <h1>Asset managers</h1>
          </div>
        </section>

        <div className="cms-content-wrapper am-content">
          <nav className="am-breadcrumb" aria-label="Breadcrumb">
            <span className="am-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/corporates">Clients</a>
            <span aria-hidden="true">&gt;</span>
            <span className="am-breadcrumb-current" aria-current="page">Asset managers</span>
          </nav>

          <p className="am-intro">
            We provide a full range of advisory, capital markets, regulatory, fund administration,
            custody, securities lending and banking services for long and alternative asset managers.
            Managers can access our comprehensive range of solutions throughout the lifecycle of a
            fund, including cash management tools and platforms and a variety of securities services.
            Our clients also benefit from services such as foreign exchange and credit that draw on
            the bank&apos;s global presence and expertise
          </p>

          <h2 className="am-section-title">Challenge</h2>
          <p className="am-body">
            Achieving the best return on clients&apos; investments and delivering world-class service
            and reporting to them are foremost in an asset manager&apos;s mind, and a banking partner
            who can help you execute your strategic objectives is essential. With your clients
            trading and settling in international markets, you may require advice on strengthening
            your infrastructure and local presence expertise in various countries, and in gaining
            direct access to markets and market infrastructures. And you need to achieve this while
            meeting significant and complex regulatory requirements.
          </p>

          <h2 className="am-section-title">Solutions</h2>
          <p className="am-body">
            Our experts offer the full spectrum of products across M&amp;A advisory, capital and
            financing. Deutsche Bank&apos;s bespoke solutions enable our asset management clients to
            avoid the costs associated with extensive infrastructure build or enhancement,
            benefitting from our scale as well as our ongoing investment in talent and
            best-in-class technology. We have built a unique integrated platform which gives us the
            flexibility to deliver sophisticated, effective solutions across all investment fund
            types. Clients benefit from our deep expertise and global footprint - with teams of fund
            services, custody and clearing, and cash management experts in all major asset management
            centres and key alternative fund domiciles.
          </p>

          <h2 className="am-section-title am-sector-heading">Choose your sector</h2>
        </div>

        <section className="am-sectors" aria-label="Choose your sector">
          <div className="cms-content-wrapper am-sectors-grid">
            {sectors.map((sector) => (
              <article
                key={sector.title}
                className={`am-sector-card am-sector-card-${sector.variant}`}
              >
                <h3>
                  <a href={sector.href}>{sector.title}</a>
                </h3>
                <p>{sector.text}</p>
                <a href={sector.href} className="corp-btn corp-btn-solid">
                  {sector.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="am-promos">
          <div className="cms-content-wrapper">
            <a href="#" className="am-promo am-promo-why">
              <img src={images.whyChoose} alt="" />
              <div className="am-promo-overlay am-promo-overlay-white" aria-hidden="true" />
              <div className="am-promo-content">
                <h2>Why choose Corporate Bank?</h2>
                <p>Review our work with clients and read our client stories</p>
                <span className="corp-btn corp-btn-solid">More</span>
              </div>
            </a>
          </div>

          <a href="#" className="am-promo am-promo-newsletter">
            <img src={images.newsletter} alt="" />
            <div className="am-promo-overlay am-promo-overlay-blue" aria-hidden="true" />
            <div className="cms-content-wrapper am-promo-content am-promo-content-newsletter">
              <h2>
                Sign-up for
                <br />
                newsletters and
                <br />
                exclusive insights
              </h2>
              <span className="corp-btn corp-btn-solid">Sign me up</span>
            </div>
          </a>
        </section>
      </main>
    </SiteLayout>
  )
}
