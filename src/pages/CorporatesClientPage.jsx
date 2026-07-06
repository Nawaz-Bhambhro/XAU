import { SiteLayout } from '../components/Layout'
import '../Corporates.css'
import '../AssetManagers.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/0caf28d4-f698-48dc-a53a-25915b74ce4b/fileAsset?language_id=1'
  ),
  bulkPayments: corpImg(
    'contentAsset/image/3ab96845-ded7-41e7-a6f9-e324d65faf6e/fileAsset/filter/Resize,Jpeg/resize_w/1280/453b410f-2784-4bb4-9077-691f0fccdda0.jpg'
  ),
  cheques: corpImg(
    'contentAsset/image/8541b98b-c712-495e-94ee-04e09e422ff7/fileAsset/filter/Resize,Jpeg/resize_w/1280/89294298-298e-46e9-a85a-6376c088a890.jpg'
  ),
  corporateTrust: corpImg(
    'contentAsset/image/947bbe39-6235-4735-a5dc-d18a233d6bc4/fileAsset/filter/Resize,Jpeg/resize_w/1280/baa06e8c-0a79-412d-b8db-172f6eaa9782.jpg'
  ),
  crossCurrency: corpImg(
    'contentAsset/image/670b02c5-9e06-423a-b2fc-adea3eb75b42/fileAsset/filter/Resize,Jpeg/resize_w/1280/f8b4bd35-a2e5-4d8b-b141-dafc91ef2f6e.jpg'
  ),
  singlePayments: corpImg(
    'contentAsset/image/e82b01f5-3d9c-4492-b3a3-722b2d690d32/fileAsset/filter/Resize,Jpeg/resize_w/1280/f379b655-d7b0-44c1-a170-55c6af939b0b.jpg'
  ),
  liquidity: corpImg(
    'contentAsset/image/8cc2cd8a-a17e-4a13-8536-f77c7147f79d/fileAsset/filter/Resize,Jpeg/resize_w/1280/64625ed4-1999-459c-8336-63cae9a1aa94.jpg'
  ),
  tradeFinance: corpImg(
    'contentAsset/image/1841643e-4be3-42c1-9b7f-a2900a635ae9/fileAsset/filter/Resize,Jpeg/resize_w/1280/c88d677d-3f98-4ddf-80bd-0ef2ad6236ba.jpg'
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
    title: 'Bulk payments',
    text: 'Corporates need a payments partner that can meet the challenges of a rapidly globalising international payments system',
    cta: 'Find out more',
    image: images.bulkPayments,
    imagePosition: 'right center',
    textWidth: 'narrow',
    theme: 'cash',
  },
  {
    title: 'Cheques',
    text: 'We provide a complete range of efficient and secure services for payment transfers "on paper"',
    cta: 'Find out more',
    image: images.cheques,
    imagePosition: 'center center',
    textWidth: 'narrow',
    theme: 'trust',
  },
  {
    title: 'Corporate trust',
    text: 'We offer a very broad range of services for diverse products, from complex securitisation and project finance to syndicated loans, debt exchanges and restructuring',
    cta: 'Find out more',
    image: images.corporateTrust,
    imagePosition: 'right center',
    textWidth: 'wide',
    theme: 'fund',
  },
  {
    title: 'Cross currency transactions',
    text: 'FX4Cash™ leverages our expertise as a leading cash management provider. Its renowned capabilities as a global FX trading powerhouse offer a broad range of solutions for cross border payments targeted to financial institutions, non bank and corporate clients',
    cta: 'Find out more',
    image: images.crossCurrency,
    imagePosition: '70% center',
    textWidth: 'wide',
    theme: 'custody',
  },
  {
    title: 'Single payments and receipts',
    text: 'We offer a specialised services for every type of payment',
    cta: 'Find out more',
    image: images.singlePayments,
    imagePosition: 'center top',
    textWidth: 'narrow',
    theme: 'dbselect',
  },
  {
    title: 'Liquidity management services',
    text: 'A simple product to make liquidity management more efficient and transparent',
    cta: 'Find out more',
    image: images.liquidity,
    imagePosition: 'right center',
    textWidth: 'narrow',
    theme: 'cash',
  },
  {
    title: 'Trade finance & Lending',
    text: "Moving goods and services across borders and within supply chains is highly complex and exposes counterparties to a wide range of risks – most particularly non-payment. Trade finance delivers fast, efficient, reliable and comprehensive solutions for every stage of a client's trade value chain to support their foreign and domestic trade activities",
    cta: 'Find out more',
    image: images.tradeFinance,
    imagePosition: 'right center',
    textWidth: 'wide',
    theme: 'fund',
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

export default function CorporatesClientPage() {
  return (
    <SiteLayout activeSubNav="Clients" headerVariant="corporates" footerVariant="corporates">
      <main className="am-page">
        <section className="am-hero" aria-label="Corporates">
          <img className="am-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper am-hero-content">
            <h1>Corporates</h1>
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
              Corporates
            </span>
          </nav>

          <p className="am-intro">
            We offer specialist expertise and tailored services for our corporate clients. Whether you
            are considering your strategic alternatives, looking to raise capital or require liability
            and risk management advice, our corporate finance team has the experience and expertise to
            assist. Our award-winning transaction bank will help you strengthen your treasury and
            supply chain operations, optimise cash management, support your issuance programmes and
            achieve compliance as seamlessly as possible
          </p>

          <h2 className="am-section-title">Challenge</h2>
          <p className="am-body">
            To flourish, businesses require the flawless execution of their strategy and the rapid
            and unimpeded flow of goods, services, capital, ideas and information. Restricting any
            of these key components can hinder performance.
          </p>
          <p className="am-body">
            However, modern international businesses face a broad and complex range of issues and
            challenges. Running a global operation requires thinking across borders, often venturing
            into the unknown in terms of local market knowledge, regulatory environments, real-time
            currency information and many other crucial factors.
          </p>

          <h2 className="am-section-title">Solutions</h2>
          <p className="am-body">
            With a global overview and on-the-ground presence in all regions, we have established a
            track record of success in assisting our corporate clients to meet and overcome these
            challenges, and believe we are uniquely placed to help you succeed in new or far-flung
            markets as well as at home.
          </p>
          <p className="am-body">
            When it comes to advisory, issuance, risk management, facilitating trade and providing
            access to the opportunities of globalisation, our teams of global and product experts are
            ready to help.
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
