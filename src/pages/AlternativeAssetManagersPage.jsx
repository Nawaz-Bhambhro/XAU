import { SiteLayout } from '../components/Layout'
import '../Corporates.css'
import '../AssetManagers.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/fb014b61-d573-4eb9-bd28-cf41fadde11d/fileAsset?language_id=1'
  ),
  cashManagement: corpImg(
    'contentAsset/image/374a2dea-040a-44e1-9e17-bee75925748c/fileAsset/filter/Resize,Jpeg/resize_w/1280/a959b5ac-0dec-48fb-8588-0276623d1157.jpg'
  ),
  corporateTrust: corpImg(
    'contentAsset/image/947bbe39-6235-4735-a5dc-d18a233d6bc4/fileAsset/filter/Resize,Jpeg/resize_w/1280/baa06e8c-0a79-412d-b8db-172f6eaa9782.jpg'
  ),
  custodyClearing: corpImg(
    'contentAsset/image/1a85227d-8332-4de5-9a2a-f7907b09a739/fileAsset/filter/Resize,Jpeg/resize_w/1280/64355f29-8691-4350-8ac4-394d274400d4.jpg'
  ),
  fundServices: corpImg(
    'contentAsset/image/8192ce5b-9513-4001-b448-b8a4f4b7228d/fileAsset/filter/Resize,Jpeg/resize_w/1280/383d0e10-5b4c-45a9-b333-9a9d451fa7cf.jpg'
  ),
  dbSelect: corpImg(
    'contentAsset/image/7016ab32-2c66-4c4e-b024-80db63bb29f6/fileAsset/filter/Resize,Jpeg/resize_w/1280/d8195909-4e90-48d9-b003-21867228371c.jpg'
  ),
  newsletter: corpImg(
    'contentAsset/image/c087a081-389e-4541-a3cb-7b14e6a86c04/fileAsset/filter/Resize,Jpeg/resize_w/1280/7650d730-5cca-4c70-bb8c-939b1638deab.jpg'
  ),
}

const solutionCards = [
  {
    title: 'Cash management',
    text: 'Our global cash management services, underpinned by advanced technology and the expertise of our teams, allow both corporates and financial institutions to generate synergies though greater efficiency and automation. The results include improved control and cost-benefits across borders, currencies and payment types',
    cta: 'Find out more',
    image: images.cashManagement,
    imagePosition: '70% center',
    textWidth: 'narrow',
    theme: 'cash',
  },
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
    title: 'Custody and clearing',
    text: 'Sub-custody and clearing services for large banks, including trust banks and global custodians',
    cta: 'Read more',
    image: images.custodyClearing,
    imagePosition: 'center center',
    textWidth: 'wide',
    theme: 'custody',
  },
  {
    title: 'Fund services',
    text: 'Our Fund Services franchise offers a full range of fund administration, custody and banking services to traditional and alternative asset managers. Fund managers benefit from our scale, expertise, talent and technology',
    cta: 'Find out more',
    image: images.fundServices,
    imagePosition: 'right center',
    textWidth: 'wide',
    theme: 'fund',
  },
  {
    eyebrow: 'Managed Account Platform',
    title: 'dbSelect',
    text: 'dbSelect is a market-leading unique solution to access alternative strategies in a cash-efficient and flexible way. The most common strategies are Managed Futures, global macro, FX, commodity and risk premia',
    cta: 'Find out more',
    image: images.dbSelect,
    imagePosition: 'right center',
    textWidth: 'narrow',
    theme: 'dbselect',
  },
]

export default function AlternativeAssetManagersPage() {
  return (
    <SiteLayout activeSubNav="Clients" headerVariant="corporates" footerVariant="corporates">
      <main className="am-page">
        <section className="am-hero am-hero-alt" aria-label="Alternative asset managers">
          <img className="am-hero-image" src={images.hero} alt="" />
          <div className="am-hero-green-bar" aria-hidden="true" />
          <div className="cms-content-wrapper am-hero-content">
            <h1>Alternative asset managers</h1>
          </div>
        </section>

        <div className="cms-content-wrapper am-content">
          <nav className="am-breadcrumb" aria-label="Breadcrumb">
            <span className="am-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/corporates">Clients</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/clients/asset-managers">Asset managers</a>
            <span aria-hidden="true">&gt;</span>
            <span className="am-breadcrumb-current" aria-current="page">
              Alternative asset managers
            </span>
          </nav>

          <p className="am-intro">
            We provide a full range of fund administration, depositary and banking services for
            alternative asset managers. During the entire fund lifecycle, managers have access to a
            comprehensive range of fund service solutions and a broad variety of securities services
            such as foreign exchange and cash services that draw on the Bank&apos;s global expertise
          </p>

          <h2 className="am-section-title">Challenge</h2>
          <p className="am-body">
            In an ever changing market place with increased regulatory, client and competitor
            dynamics as well as product complexity, asset managers need service providers with the
            capability to adapt rapidly to change and to ensure that their needs and those of their
            investors and regulators can be met effectively. Outsourcing these services to the right
            provider is key and at DB Fund Services, we offer today&apos;s alternative managers a
            range of services supported by Deutsche Bank&apos;s global presence and local market
            expertise to ensure those needs are met.
          </p>

          <h2 className="am-section-title">Solutions</h2>
          <p className="am-body">
            With a proven track record in servicing alternative asset managers, a global
            award-winning platform and flexible solutions, we support a variety of alternative
            funds, strategies and asset classes across multiple jurisdictions. Our solutions, built
            on market leading technology and supported by our teams of experienced professionals
            from global locations include: fund accounting services, transfer agency, depositary
            services, fund of fund middle office as well as extended services such as regulatory
            reporting and cash management. Our flexible models can provide our managers with both
            the necessary levels of process optimization while still offering scale and robustness to
            support growth.
          </p>
          <p className="am-body">
            Given the challenges faced by today&apos;s alternatives managers, our solutions ensure
            that our clients benefit from our scale, expertise, talent and technology. DB Fund
            Services has the strength and flexibility to work with our clients to meet those market
            challenges and partner with them to success. Whether it&apos;s generating additional
            income through securities lending, avoiding the costs associated with extensive
            infrastructure build or enhancement, or increasing the client service and regulatory
            reporting they are able to offer, our alternative asset management clients have one thing
            in common: by partnering with us, they are free to dedicate more resources and time to
            their investment activities – increasing the value they deliver to investors and
            shareholders.
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
                  {card.eyebrow && <p className="am-solution-eyebrow">{card.eyebrow}</p>}
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
