import { SiteLayout } from '../components/Layout'
import '../Corporates.css'
import '../AssetManagers.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/5c689f34-87d4-41f4-a4bf-6f162405a04e/fileAsset?language_id=1'
  ),
  corporateTrust: corpImg(
    'contentAsset/image/947bbe39-6235-4735-a5dc-d18a233d6bc4/fileAsset/filter/Resize,Jpeg/resize_w/1280/baa06e8c-0a79-412d-b8db-172f6eaa9782.jpg'
  ),
  whyChoose: corpImg(
    'contentAsset/image/33d24351-95c0-42e4-9900-8c778721a637/fileAsset/filter/Resize,Jpeg/resize_w/1280/9119afd7-a325-4f78-8cb3-9a3a39c8d657.jpg'
  ),
  newsletter: corpImg(
    'contentAsset/image/c087a081-389e-4541-a3cb-7b14e6a86c04/fileAsset/filter/Resize,Jpeg/resize_w/1280/7650d730-5cca-4c70-bb8c-939b1638deab.jpg'
  ),
}

const solutionCards = [
  {
    title: 'Corporate trust',
    text: 'We offer a very broad range of services for diverse products, from complex securitisation and project finance to syndicated loans, debt exchanges and restructuring',
    cta: 'Find out more',
    image: images.corporateTrust,
    imagePosition: 'right center',
    textWidth: 'wide',
    theme: 'trust',
  },
  {
    title: 'Why choose Corporate Bank?',
    text: 'Review our work with clients and read our client stories',
    cta: 'More',
    image: images.whyChoose,
    imagePosition: 'right center',
    textWidth: 'wide',
    theme: 'why',
  },
]

export default function SovereignsSupranationalsPage() {
  return (
    <SiteLayout activeSubNav="Clients" headerVariant="corporates" footerVariant="corporates">
      <main className="am-page">
        <section className="am-hero" aria-label="Sovereigns, supranationals and agencies">
          <img className="am-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper am-hero-content">
            <h1>Sovereigns, supranationals and agencies</h1>
          </div>
        </section>

        <div className="cms-content-wrapper am-content">
          <nav className="am-breadcrumb" aria-label="Breadcrumb">
            <span className="am-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/corporates">Clients</a>
            <span aria-hidden="true">&gt;</span>
            <span className="am-breadcrumb-current" aria-current="page">
              Sovereigns, supranationals and agencies
            </span>
          </nav>

          <p className="am-intro">
            Our clients issue debt consistently throughout the year to support important local
            government projects, sovereign and multilateral budgets, export financing, and
            international development programmes. To achieve these goals, they require a capital
            markets partner with global reach and proven debt expertise
          </p>

          <h2 className="am-section-title">Challenges</h2>
          <p className="am-body">
            Issuers of Sovereigns, supranationals and agencies (SSA) face a number of hurdles when
            undertaking their funding requirements, all of which are against a dynamic regulatory
            landscape. They must factor in considerations including market volatility, issuance
            windows, counterparty balance sheet constraints and capital requirements, and new issue
            premiums. All of this while ensuring that they retain investors&apos; interest.
          </p>

          <h2 className="am-section-title">Solutions</h2>
          <p className="am-body">
            Deutsche Bank is an established top tier arranger of SSA bonds. Across currencies,
            maturities and geographies, Deutsche Bank has been entrusted by the most prominent SSA
            issuers to manage their funding needs. For issuers navigating the market for the very
            first time, Deutsche Bank has consistently been the banking partner of choice. Our
            impeccable advisory and execution capabilities have enabled us to lead rare and
            strategic issues. Our commitment is to consistently deliver for our SSA clients,
            investors, and the market.
          </p>
          <p className="am-body">
            Deutsche Bank has proven expertise in the administration of issuance and we are well
            placed to help SSA clients succeed in new or unfamiliar markets as well as at home. When
            it comes to issuance and facilitating deals, our team of experts provide global
            opportunities to overcome the challenges.
          </p>

          <h2 className="am-section-title am-explore-heading">Explore our solutions</h2>
        </div>

        <section className="am-solutions" aria-label="Explore our solutions">
          <div className="cms-content-wrapper am-solutions-stack">
            {solutionCards.map((card) => (
              <a
                key={card.title}
                href="#"
                className={`am-solution-block am-solution-block-${card.theme}`}
              >
                <img
                  src={card.image}
                  alt=""
                  style={{ objectPosition: card.imagePosition }}
                />
                <div
                  className={`am-solution-overlay am-solution-overlay-${card.theme}`}
                  aria-hidden="true"
                />
                <div
                  className={`am-solution-inner am-solution-inner-${card.textWidth} am-solution-inner-${card.theme}`}
                >
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className="corp-btn corp-btn-solid">{card.cta}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="am-promos">
          <div className="cms-content-wrapper am-promos-stack">
            <a href="#" className="am-promo am-promo-newsletter am-promo-block">
              <img src={images.newsletter} alt="" />
              <div className="am-promo-overlay am-promo-overlay-blue" aria-hidden="true" />
              <div className="am-promo-inner am-promo-inner-newsletter">
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
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
