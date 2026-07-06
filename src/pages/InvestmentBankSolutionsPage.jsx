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
    title: 'Fixed Income and Currencies',
    image: images.fixedIncome,
    href: '/solutions/investment-bank-solutions/fixed-income-and-currencies',
    size: 'tall',
  },
  {
    title: 'Investment Banking and Capital Markets',
    image: images.capitalMarkets,
    href: '/solutions/investment-bank-solutions/investment-banking-and-capital-markets',
    size: 'standard',
  },
  {
    title: 'Research',
    image: images.research,
    href: '/solutions/investment-bank-solutions/research',
    size: 'standard',
  },
]

export default function InvestmentBankSolutionsPage() {
  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="ibs-page">
        <section className="cbs-hero" aria-label="Investment Bank solutions">
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
            <a href="/solutions/corporate-bank-solutions">Solutions</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Investment Bank solutions
            </span>
          </nav>

          <p className="ibs-intro-lead">
            Deutsche Bank&apos;s Investment Bank brings together a wealth of expertise, combining
            its core strengths in Fixed Income and Currencies, Investment Banking and Capital
            Markets, and{' '}
            <a href="https://www.dbresearch.com" target="_blank" rel="noreferrer">
              Research
            </a>
            .
          </p>

          <p className="cbs-body">
            Our multi-faceted approach covers financing, advisory, fixed income and currencies. The
            offering extends beyond financial transactions; we also provide advisory services to our
            corporate clients. We house a specialised equity capital markets division that works in
            harmony with our established equity and macro research capabilities. This synergy is
            further enhanced by a dedicated equity sales team, ensuring that our clients benefit from
            a holistic suite of services tailored to their unique needs.
          </p>
          <p className="cbs-body">
            At Deutsche Bank&apos;s Investment Bank, we recognise that success hinges on more than
            individual products – it&apos;s about providing solutions and building enduring
            relationships that enable our clients to navigate the intricate landscape of finance with
            confidence and clarity.
          </p>
          <p className="cbs-body">
            Our Fixed Income and Currencies division is driven by a top-tier institutional sales
            force, world renowned research capability, and expertise spanning Foreign Exchange,
            Rates, Credit, and Emerging Markets. This business allows Deutsche Bank to adapt to the
            evolving landscape of automation, regulatory expectations, and the growing demand for
            standardization and transparency in fixed income, currency, and emerging markets
            execution.
          </p>
          <p className="cbs-body">
            With regards to debt origination, mergers and acquisitions, and focused equity advisory
            and origination, our teams work closely with clients to provide the full suite of
            corporate finance services. Operating globally across regions and client segments, we
            enable clients to optimize their business operations, assess valuations, make strategic
            investments, divest assets and secure funding through both established and innovative
            financial solutions.
          </p>
          <p className="cbs-body">
            <a href="https://www.dbresearch.com" target="_blank" rel="noreferrer">
              Deutsche Bank Research
            </a>{' '}
            plays a pivotal role, serving as the primary source of macro and microanalysis within
            Deutsche Bank Group. We act as trusted consultants for the bank, its clients and
            stakeholders. Our analysis examines significant trends across financial markets, the
            economy, and society, while identifying potential risks and opportunities. Deutsche Bank
            Research is dedicated to delivering high-quality, impartial analysis, actively fostering
            public discourse on economic, fiscal, labour market and social policy matters.
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

            <article className="ibs-numis-banner" aria-label="Deutsche Numis">
              <div className="ibs-numis-inner">
                <div className="ibs-numis-media">
                  <img src={images.numis} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="ibs-numis-content">
                  <h2>
                    New Partnerships.
                    <br />
                    New Opportunities.
                  </h2>
                  <a
                    href="https://www.dbnumis.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="corp-btn corp-btn-solid"
                  >
                    Find out more
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
