import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/8e9827da-3471-41bf-a7a2-63973d6ae9f9/fileAsset?language_id=1'
  ),
  marketplace: corpImg(
    'contentAsset/image/4c811d49-61ce-40f9-ba11-60b48560027d/fileAsset/filter/Resize,Jpeg/resize_w/1280/4226067c-9cab-4bb0-95e7-fb6c137b58fd.jpg'
  ),
  cyberSecurity: corpImg(
    'contentAsset/image/ab30333b-6a9b-4956-8b47-007093ff2c01/fileAsset/filter/Resize,Jpeg/resize_w/1280/94d017e9-b192-4823-9c78-a67b85b3e02a.jpg'
  ),
  cashManagement: corpImg(
    'contentAsset/image/330f8f09-7f7d-4f4d-a50f-275a57985907/fileAsset/filter/Resize,Jpeg/resize_w/1280/7d9496f9-06e6-431b-91c2-fdad29515d2d.jpg'
  ),
  sustainableFinance: corpImg(
    'contentAsset/image/9e060469-ef82-4493-be0f-2128ec64b3a6/fileAsset/filter/Resize,Jpeg/resize_w/1280/5ed5b29b-ddd0-4e61-bc9b-4dc54dfab502.jpg'
  ),
}

export default function FocusTopicsPage() {
  return (
    <SiteLayout activeSubNav="In focus" headerVariant="corporates" footerVariant="corporates">
      <main className="ft-page">
        <section className="cbs-hero" aria-label="Focus topics">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper cbs-hero-content">
            <h1>Focus topics</h1>
          </div>
        </section>

        <div className="cms-content-wrapper cbs-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/in-focus/focus-topics">In focus</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Focus topics
            </span>
          </nav>

          <p className="ft-intro">
            Regular market and regulatory changes are an integral part of today&apos;s industry. We
            engage our clients to help them navigate the uncertainty and manage the challenges of a
            constantly evolving business environment. Each of these topics demonstrates how Deutsche
            Bank Corporate Bank is there for its clients in offering valuable insights and innovative
            solutions to respond to their specific need
          </p>
        </div>

        <section className="ft-banners" aria-label="Focus topic highlights">
          <div className="cms-content-wrapper ft-banners-stack">
            <article className="ft-banner ft-banner--marketplace">
              <div className="ft-banner-inner">
                <div className="ft-banner-media">
                  <img src={images.marketplace} alt="" />
                  <div className="ft-banner-gradient ft-banner-gradient--light" aria-hidden="true" />
                </div>
                <div className="ft-banner-content ft-banner-content--dark">
                  <h2>
                    <a href="/solutions/corporate-bank-solutions/cash-management/merchant-solutions/marketplace-payments">
                      Learn more about our Marketplace Payments solutions
                    </a>
                  </h2>
                  <a
                    href="/solutions/corporate-bank-solutions/cash-management/merchant-solutions/marketplace-payments"
                    className="corp-btn corp-btn-solid"
                  >
                    Explore more
                  </a>
                </div>
              </div>
            </article>

            <div className="ft-grid">
              <article className="ft-banner ft-banner--card">
                <div className="ft-banner-inner">
                  <div className="ft-banner-media ft-banner-media--tall">
                    <img src={images.cyberSecurity} alt="" />
                    <div className="ft-banner-gradient ft-banner-gradient--blue" aria-hidden="true" />
                  </div>
                  <div className="ft-banner-content ft-banner-content--light">
                    <h2>
                      <a href="/in-focus/focus-topics/cyber-security">Cyber security</a>
                    </h2>
                    <p>
                      Digitalisation brings opportunities. At the same time, however, the threat of
                      cyber attacks are widespread and can affect anyone
                    </p>
                    <a href="/in-focus/focus-topics/cyber-security" className="corp-btn corp-btn-solid">
                      Read more
                    </a>
                  </div>
                </div>
              </article>

              <article className="ft-banner ft-banner--card">
                <div className="ft-banner-inner">
                  <div className="ft-banner-media ft-banner-media--tall">
                    <img src={images.cashManagement} alt="" />
                    <div className="ft-banner-gradient ft-banner-gradient--white" aria-hidden="true" />
                  </div>
                  <div className="ft-banner-content ft-banner-content--dark">
                    <h2>
                      <a href="/in-focus/focus-topics/tomorrows-treasury/global-navigator-app">
                        Cash management worldwide
                      </a>
                    </h2>
                    <p>
                      We offer cash management services to corporate clients in 34 countries
                      worldwide. View our Solutions Country Guide and explore our services
                    </p>
                    <a
                      href="/in-focus/focus-topics/tomorrows-treasury/global-navigator-app"
                      className="corp-btn corp-btn-solid"
                    >
                      Explore more
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <article className="ft-banner ft-banner--sustainable">
              <div className="ft-banner-inner">
                <div className="ft-banner-media">
                  <img src={images.sustainableFinance} alt="" />
                  <div className="ft-banner-gradient ft-banner-gradient--sustainable" aria-hidden="true" />
                </div>
                <div className="ft-banner-content ft-banner-content--light">
                  <p className="ft-banner-eyebrow">
                    Integrate sustainability into your finance activities
                  </p>
                  <h2>
                    <a href="/solutions/corporate-bank-solutions/sustainable-finance">
                      Sustainable &amp; Transformation Finance
                    </a>
                  </h2>
                  <p>
                    Explore our new ESG hub for the latest insights and learn more about
                    sustainability targets and solutions
                  </p>
                  <a
                    href="/solutions/corporate-bank-solutions/sustainable-finance"
                    className="corp-btn corp-btn-white"
                  >
                    Read more
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
