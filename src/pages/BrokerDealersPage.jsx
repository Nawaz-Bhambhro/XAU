import { SiteLayout } from '../components/Layout'
import '../Corporates.css'
import '../AssetManagers.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/f4afdb1b-ce84-4336-8e63-9e4784f762f5/fileAsset?language_id=1'
  ),
  corporateTrust: corpImg(
    'contentAsset/image/947bbe39-6235-4735-a5dc-d18a233d6bc4/fileAsset/filter/Resize,Jpeg/resize_w/1280/baa06e8c-0a79-412d-b8db-172f6eaa9782.jpg'
  ),
  custodyClearing: corpImg(
    'contentAsset/image/1a85227d-8332-4de5-9a2a-f7907b09a739/fileAsset/filter/Resize,Jpeg/resize_w/1280/64355f29-8691-4350-8ac4-394d274400d4.jpg'
  ),
  cashManagement: corpImg(
    'contentAsset/image/374a2dea-040a-44e1-9e17-bee75925748c/fileAsset/filter/Resize,Jpeg/resize_w/1280/a959b5ac-0dec-48fb-8588-0276623d1157.jpg'
  ),
  whyChoose: corpImg(
    'contentAsset/image/33d24351-95c0-42e4-9900-8c778721a637/fileAsset/filter/Resize,Jpeg/resize_w/1280/9119afd7-a325-4f78-8cb3-9a3a39c8d657.jpg'
  ),
  newsletter: corpImg(
    'contentAsset/image/c087a081-389e-4541-a3cb-7b14e6a86c04/fileAsset/filter/Resize,Jpeg/resize_w/1280/7650d730-5cca-4c70-bb8c-939b1638deab.jpg'
  ),
}

const challenges = [
  {
    title: 'Prudential liquidity and capital regulatory changes',
    text: 'Regulations like Dodd-Frank, Basel III and the Capital Requirements Directive (CRDIV) place pressure on banks around issues such as the quality and level of capital required, risk coverage, leverage, global liquidity standards and supervisory monitoring.',
  },
  {
    title: 'Market and trading regulations',
    text: 'Market and trading regulations and the drive for a central clearing regime for OTC Derivatives all present challenges for the industry. For example, the latter calls for increased margin and collateral requirements, higher risk weightings, stricter reporting requirements.',
  },
  {
    title: 'Funding and investment options',
    text: 'The increased capital and liquidity requirements and the decrease in funding sources, along with regulatory pressure, prevent some institutions from conducting certain investment activities.',
  },
]

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
    title: 'Custody and clearing',
    text: 'Sub-custody and clearing services for large banks, including trust banks and global custodians',
    cta: 'Read more',
    image: images.custodyClearing,
    imagePosition: 'center center',
    textWidth: 'wide',
    theme: 'custody',
  },
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
    title: 'Why choose Corporate Bank?',
    text: 'Review our work with clients and read our client stories',
    cta: 'More',
    image: images.whyChoose,
    imagePosition: 'right center',
    textWidth: 'wide',
    theme: 'why',
  },
]

export default function BrokerDealersPage() {
  return (
    <SiteLayout activeSubNav="Clients" headerVariant="corporates" footerVariant="corporates">
      <main className="am-page">
        <section className="am-hero" aria-label="Broker dealers">
          <img className="am-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper am-hero-content">
            <h1>Broker dealers</h1>
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
              Broker dealers
            </span>
          </nav>

          <p className="am-intro">
            The broker dealer community has a very specific set of requirements. Like banks, they are
            under pressure to maintain operational efficiency while also meeting the demands of their
            clients. Their business is ever more complex as business becomes increasingly cross-border
          </p>

          <h2 className="am-section-title">Challenges</h2>
          <p className="am-body am-body-tight">
            We recognise that the broker dealer segment needs efficient fund-transfer mechanisms and
            liquidity management facilities.
          </p>
          {challenges.map((item) => (
            <div key={item.title} className="bd-challenge-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}

          <h2 className="am-section-title">Solutions</h2>
          <p className="am-body">
            As one of the largest clearing banks in the world, with expertise in US dollars, Euros
            and other currencies, we can handle payments to and on behalf of your clients to any
            financial institution in the world. Our global offering extends across cash management,
            trade finance, custody, trust and agency services, liquidity management, securities
            lending, and collateral management. We have the range of customisable solutions that
            clients need to operate across the full range of currencies, markets and regions,
            supported by our market-leading FX4Cash and cutting edge technology and infrastructure.
          </p>
          <p className="am-body">
            Your success is our success. By offering value-added services across payment processing,
            currencies and risk mitigation, we allow you to make operational efficiency gains and
            leverage growth potential.
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
