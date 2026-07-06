import { SiteLayout } from '../components/Layout'
import '../Corporates.css'
import '../AssetManagers.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/46dd189b-3627-414b-9dd0-a1396b806a48/fileAsset?language_id=1'
  ),
  practiceTable: corpImg(
    'contentAsset/image/61ab8c9a-d609-44a8-91a9-7e061e5229d9/fileAsset/filter/Resize,Jpeg/resize_w/1280/4352d331-fe64-445c-9f53-d38e036eab99l.jpg'
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

export default function LawFirmsPage() {
  return (
    <SiteLayout activeSubNav="Clients" headerVariant="corporates" footerVariant="corporates">
      <main className="am-page">
        <section className="am-hero" aria-label="Law firms">
          <img className="am-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper am-hero-content">
            <h1>Law firms</h1>
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
              Law firms
            </span>
          </nav>

          <p className="am-intro">
            With the increasing complexity of financial transactions, law firms often have to
            recommend providers of trust and agency services to their clients that are both qualified
            and experienced. They need specialists who understand different markets, different
            products, different settlement systems; they need experts to ensure the smooth execution
            and administration of their transactions; they need professionals who know the securities
            markets inside out. Deutsche Bank provides the necessary corporate trust services to law
            firms to assist in their M&amp;A and project finance transactions
          </p>

          <h2 className="am-section-title lf-practice-heading">Law firm area of practice</h2>
          <div className="lf-practice-table-wrap">
            <img
              className="lf-practice-table"
              src={images.practiceTable}
              alt="Law firm area of practice table showing services across bankruptcy, corporate, litigation, M&A, private equity, project finance and real estate practice areas"
            />
          </div>

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
