import { DwsLayout } from '../components/DwsLayout'
import '../DwsSolutions.css'

const dwsImg = (path) => `https://dws.com/${path}`

const images = {
  hero: dwsImg(
    'globalassets/_-insights/miscellaneous/539449394_dws_grading-loesungen-mainside.png?width=1903&height=420&v=740474744'
  ),
  gateway: dwsImg(
    'globalassets/_-solutions/gateway-to-europe-branding.png?width=1280&height=760&v=2012024083'
  ),
}

export default function AssetManagementSolutionsPage() {
  return (
    <DwsLayout activeNav="Solutions">
      <section className="dws-hero" aria-label="Solutions">
        <div className="dws-hero-pattern" aria-hidden="true" />
        <img className="dws-hero-image" src={images.hero} alt="" />
        <div className="dws-hero-overlay" aria-hidden="true" />
        <div className="dws-hero-content">
          <div className="dws-hero-box">
            <h1>Solutions</h1>
          </div>
        </div>
      </section>

      <div className="dws-page-toolbar">
        <div className="dws-page-toolbar-inner">
          <nav className="dws-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <span aria-current="page">Solutions</span>
          </nav>
          <div className="dws-toolbar-actions">
            <button type="button" title="Share">
              ↗
            </button>
            <button type="button" title="Print">
              🖨
            </button>
          </div>
        </div>
      </div>

      <section className="dws-content">
        <div className="dws-content-inner">
          <h2 className="dws-section-title">At a glance</h2>

          <div className="dws-intro">
            <p>
              Encouraging to look back, inspiring to look forward: while we are an established
              global asset manager, we have built a rich platform enabling us to make a new impact
              in the world of investing. We offer comprehensive solutions, engineered by a team that
              is committed to our clients&apos; best interests.
            </p>
            <p>
              The diversity of cultures, languages and expertise in our global teams creates an
              impressive array of perspectives and energy. While our deep heritage in different
              locations is the fundament that provides stability, our spirit is the driving force to
              innovate and shape the future. Our entrepreneurial thinking and collaborative approach
              have formed the way we do business and drive our high-performance culture.
            </p>
          </div>

          <article className="dws-feature-block">
            <div className="dws-feature-text">
              <h3>Gateway to Europe</h3>
              <p>
                In an increasingly complex geopolitical environment, Europe has re-emerged as both
                an investment destination, and a region with renewed strategic potential.
              </p>
              <a href="#" className="dws-btn-outline">
                Explore more
              </a>
            </div>
            <div className="dws-feature-media">
              <img src={images.gateway} alt="" loading="lazy" />
            </div>
          </article>
        </div>
      </section>
    </DwsLayout>
  )
}
