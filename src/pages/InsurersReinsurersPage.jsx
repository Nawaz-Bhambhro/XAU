import { SiteLayout } from '../components/Layout'
import '../Corporates.css'
import '../AssetManagers.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/b69c060a-6744-45a2-8f5f-68a5489342d1/fileAsset?language_id=1'
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

export default function InsurersReinsurersPage() {
  return (
    <SiteLayout activeSubNav="Clients" headerVariant="corporates" footerVariant="corporates">
      <main className="am-page">
        <section className="am-hero" aria-label="Insurers and reinsurers">
          <img className="am-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper am-hero-content">
            <h1>Insurers and reinsurers</h1>
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
              Insurers and reinsurers
            </span>
          </nav>

          <p className="am-intro">
            We are a trusted partner to our insurance clients, offering a strong industry focus,
            global network and leading technology capability to ensure they receive reliable and
            innovative solutions tailored to the insurance industry and their specific situation
          </p>

          <h2 className="am-section-title">Challenge</h2>
          <p className="am-body">
            In a low yield environment with tightening regulation there is a constant need for
            innovation. The efficient use of cash and the ability to generate enhanced returns
            continues to be of high strategic importance to our insurance clients.
          </p>

          <h2 className="am-section-title">Solutions</h2>
          <p className="am-body">
            Deutsche Banks&apos; effective liquidity management programme can &apos;free up&apos; trapped
            cash and deliver substantial savings. As the industry continues to face a challenging
            regulatory and capital management environment, new technologies are helping insurers to
            keep ahead of these developments. Insurance companies may also need to set up collateral
            trusts and escrows – whether to comply with regulation or make better use of cash and
            securities.
          </p>

          <h2 className="am-section-title">Benefits</h2>
          <p className="am-body">
            As one of the market-leading providers of best-in-class working capital solutions, our
            team of experts can help insurance companies optimise liquidity and improve process
            efficiency and risk governance, helping clients free trapped cash and deliver substantial
            savings, as well as meet their growing needs for operational and regulatory capital. As
            the industry continues to face a challenging regulatory and capital management
            environment, new technologies are also helping insurers keep ahead of these developments.
          </p>
          <p className="am-body">
            We are an award-winning provider of collateral trust and escrow services to the global
            insurance industry. We have provided trust, escrow and custodial services to hundreds of
            insurance companies and offer our clients a fast, expert service across a wide range of
            products whether they are looking to comply with regulations or make better use of cash
            and securities.
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
