import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/50acde06-1f4a-45ff-ad0e-8f78db3c9ae8/fileAsset?language_id=1'
  ),
  fixedIncome: corpImg(
    'contentAsset/image/70453fe7-7b27-4dc5-be22-a239a7a8f4c3/fileAsset/filter/Resize,Jpeg/resize_w/1280/0825016b-346b-48b3-a23d-e3b96e7b60c0.jpg'
  ),
  capitalMarkets: corpImg(
    'contentAsset/image/cb56b7e8-adc4-439e-a115-12c1342aa083/fileAsset/filter/Resize,Jpeg/resize_w/1280/332751b3-2727-4983-a2c2-99225662d845.jpg'
  ),
  research: corpImg(
    'contentAsset/image/a913c421-ec21-4f2d-909a-ba4c5373b149/fileAsset/filter/Resize,Jpeg/resize_w/1280/df93ef6e-32b9-480a-b464-dad40c6a8644.jpg'
  ),
  numis: corpImg(
    'contentAsset/image/d8943548-917b-4f97-b577-ec1d84bc93b7/fileAsset/filter/Resize,Jpeg/resize_w/1280/4241c2bf-8ae2-42a2-98f4-c732658cb5db.jpg'
  ),
}

const featureBanners = [
  {
    title: 'Project Finance & Structured Development',
    image: images.fixedIncome,
    href: '/investment-bank',
    size: 'tall',
  },
  {
    title: 'Gold-Backed Investment Returns',
    image: images.capitalMarkets,
    href: '/dws',
    size: 'standard',
  },
  {
    title: 'Capital Development Systems',
    image: images.research,
    href: '/corporates',
    size: 'standard',
  },
]

export default function InvestmentBankPage() {
  return (
    <SiteLayout activeSubNav="What we do">
      <main className="ibs-page">
        <section className="cbs-hero" aria-label="Investment Bank">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper cbs-hero-content">
            <h1>Welcome to the Investment Bank</h1>
          </div>
        </section>

        <div className="cms-content-wrapper cbs-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/products-and-services">What we do</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/products-and-services">Products and services</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Investment Bank
            </span>
          </nav>

          <p className="ibs-intro-lead">
            XAU Global&apos;s Investment Bank delivers project finance and structured development for
            mega-scale programmes across infrastructure, energy and technology — backed by{' '}
            <a href="/dws">gold-secured funding</a>
            .
          </p>

          <p className="cbs-body">
            Our multi-faceted approach covers project structuring, capital deployment, advisory
            services and end-to-end development finance. The offering extends beyond financial
            transactions; we partner with governments, institutions and developers to deliver
            programmes from USD $50M and above.
          </p>
          <p className="cbs-body">
            At XAU Global&apos;s Investment Bank, we recognise that success hinges on more than
            individual products — it&apos;s about providing integrated solutions and building
            enduring relationships that enable our clients to deliver large-scale development with
            confidence and clarity.
          </p>
          <p className="cbs-body">
            Our Project Structured Development division supports mega projects across seven service
            sectors — infrastructure, technology, energy, real assets and more. With gold-backed
            funding structures and Swiss vault custody, we provide the capital foundation for
            long-term value creation.
          </p>
          <p className="cbs-body">
            With regards to sovereign partnerships, land capital financing and institutional
            development programmes, our teams work closely with clients to provide the full suite of
            structured finance services. Operating globally across regions and client segments, we
            enable partners to optimise operations, secure funding and deploy capital through both
            established and innovative financial solutions.
          </p>
          <p className="cbs-body">
            <a href="/dws">DWS Asset Management</a>{' '}
            plays a pivotal role, serving as the primary source of gold-backed investment analysis
            within XAU Global. We act as trusted advisors for the platform, its clients and
            stakeholders. Our analysis examines significant trends across financial markets, project
            development and gold markets, while identifying potential risks and opportunities.
          </p>
        </div>

        <section className="ibs-features" aria-label="Investment Bank divisions">
          <div className="cms-content-wrapper ibs-features-stack">
            {featureBanners.map((banner) => (
              <article
                key={banner.title}
                className={`ibs-feature-banner ibs-feature-banner--${banner.size}`}
              >
                <div className="ibs-feature-banner-inner">
                  <div className="ibs-feature-banner-media">
                    <img src={banner.image} alt="" loading="lazy" decoding="async" />
                    <div className="ibs-feature-banner-gradient" aria-hidden="true" />
                  </div>
                  <div className="ibs-feature-banner-content">
                    <h2>
                      <a href={banner.href}>{banner.title}</a>
                    </h2>
                    <a href={banner.href} className="corp-btn corp-btn-solid">
                      More
                    </a>
                  </div>
                </div>
              </article>
            ))}

            <article className="ibs-numis-banner" aria-label="Onboarding Portal">
              <div className="ibs-numis-inner">
                <div className="ibs-numis-media">
                  <img src={images.numis} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="ibs-numis-content">
                  <h2>
                    Investor Onboarding.
                    <br />
                    Due Diligence Portal.
                  </h2>
                  <a
                    href="/client-logins"
                    className="corp-btn corp-btn-solid"
                  >
                    Access portal
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}

