import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/936bc532-4302-44e4-8e43-7635542ae4c8/fileAsset?language_id=1'
  ),
  linkedin: corpImg(
    'contentAsset/image/8b686038-4026-4560-b7d3-f2f14ca41be5/fileAsset/filter/Resize,Jpeg/resize_w/1280/90ac1ee9-e3f1-4844-a25e-317c2fd3a890.jpg'
  ),
}

const accordions = [
  {
    id: 'foreign-exchange',
    title: 'Foreign Exchange',
    content: (
      <a href="#" className="corp-btn corp-btn-solid">
        more
      </a>
    ),
  },
  {
    id: 'rates',
    title: 'Rates',
    content: (
      <>
        <p>
          Deutsche Bank&apos;s Global Rates franchise serves a broad spectrum of clients, from
          corporate entities to institutional and wealth management players. Deutsche Bank&apos;s
          services go beyond offering products; it is about delivering comprehensive financial
          solutions that address the needs of our client base.
        </p>
        <p>
          Within this franchise, we provide essential services such as asset liability management
          and capital-efficient solutions. In addition, we provide access to key income markets
          across the globe, including the US, EMEA, and APAC. Our expertise extends to multi-asset
          quantitative investment solutions, empowering clients to make data-driven investment
          decisions in an ever-evolving market. Our franchise plays a key role in primary issuance
          and market-making across 24 developed government bond markets. This function is critical
          in maintaining the stability and liquidity of the overall market.
        </p>
        <p>
          Our derivatives expertise spans a wide spectrum, including interest rate swaps covering 10
          developed markets and a wide range of structured products. These instruments are designed
          to address various financial objectives, from managing risk to enhancing returns. The bank
          also has the ability to source and transform illiquid assets. This enables us to unlock
          hidden value in assets that may otherwise be underutilized. In addition, we manage
          long-dated bond forwards, strips, total return swaps (TRS) on indices, and single
          securities, ensuring that our clients have access to a diverse set of tools for their
          financial strategies. Finally, our team executes deal contingent trades, allowing us to
          tailor our services to the specific needs and circumstances of our clients. At Deutsche
          Bank, we understand that financial solutions must be as diverse as the clients we serve,
          and our Global Rates franchise embodies this commitment.
        </p>
        <h4>Deutsche Bank Investment Solutions - Where data drives success.</h4>
        <p>
          Deutsche Bank Investment Solutions (DBIS) represents the convergence of data-driven
          precision and investment expertise. Catering to diverse client groups, from private wealth
          managers to insurance and hedge funds, we provide a comprehensive array of investment
          solutions. These encompass three core pillars: QIS (Quantitative Investment Solutions):
          offering systematic investments form to clients, dbSelect: DB&apos;s managed account
          platform and dbMA+ (dbMarketAccess+): leveraging Deutsche Bank&apos;s trading infrastructure
          to offer clients easy and efficient access to markets.
        </p>
        <a href="#" className="corp-btn corp-btn-solid">
          Learn more
        </a>
      </>
    ),
  },
  {
    id: 'emerging-markets',
    title: 'Emerging Markets',
    content: (
      <p>
        In Emerging Markets (EM), Deutsche Bank covers EM sovereigns, quasi-sovereign entities, as
        well as global institutional and corporate clients. Deutsche Bank offers a fully integrated
        and global platform that combines expertise with connectivity, all linked into Deutsche
        Bank&apos;s extensive global network. Our clients benefit from both market access and various
        solutions across a wide array of financial products. These encompass both cash and
        derivative products, including local cash bonds, hard currency sovereign and corporate
        bonds, credit default swaps (CDS), interest rate derivatives, cross currency swaps, and a
        comprehensive suite of foreign exchange (FX) products ranging from spot transactions to
        options. We understand the importance of accessibility, which is why we provide a broad range
        of electronic channels and workflows tailored to Emerging Markets, both onshore and
        offshore. This accessibility ensures that our clients can efficiently navigate these
        markets. We also provide cross-margining capabilities, intermediation services, and a
        complete suite of custody services specific to emerging markets fixed income and FX. We aim
        to give our clients the necessary tools and resources to navigate the complexities of these
        markets.
      </p>
    ),
  },
  {
    id: 'financing',
    title: 'Financing',
    content: (
      <p>
        Deutsche Bank&apos;s renowned financing division confirms our commitment to delivering
        holistic financial solutions, designed to meet the diverse needs of clients across the globe
        and spanning various industries and asset categories. Our extensive offering extends across
        regions, including EMEA, APAC, and the US, and encompass a wide spectrum of financing
        solutions. These include hard asset financing within sectors such as aviation, shipping,
        rail infrastructure, energy, and renewables. Additionally, we provide commercial real
        estate financing, as well as asset backed securities (ABS) financing for a diverse range of
        assets, including consumer loans, residential mortgages, corporate exposures, and other
        unique financial assets. We are also heavily involved in corporate cash-flow lending and
        various forms of illiquid financings. Our expertise also extends to the structuring and
        issuance of public ABS and collateralized loan obligations (CLOs). Our client base reflects
        the diversity of our services, encompassing asset managers, financial sponsors, credit
        funds, corporation, banks, and real-money investors. We work closely with these partners
        to develop tailored financing solutions that align with their unique objectives and
        financial strategies.
      </p>
    ),
  },
  {
    id: 'credit-trading',
    title: 'Credit Trading',
    content: (
      <p>
        At Deutsche Bank we have a comprehensive approach to credit services that, as well as
        offering products, focuses on delivering tailored solutions and expert guidance to clients.
        We provide primary issuance services spanning the entire credit spectrum, ranging from
        investment-grade to high-yield securities and leveraged loans, including securitised
        assets. This breadth of coverage ensures that we are equipped to assist clients across
        various credit categories. To complement our primary issuance capabilities, we maintain
        industry-leading market-making desks that encompass all cash products and credit default
        swaps (CDS), including indices, single-name CDS, and options. This allows us to offer
        clients unparalleled access to liquidity and market insights. Our credit solutions desk
        specializes in bespoke funded and unfunded solutions for institutional and corporate
        clients. These solutions encompass a wide range of offerings, including credit linked notes,
        structured lending, securitised derivatives, swap intermediation trades, and repackaged
        credit structures. This versatility ensures that our clients have access to a diverse
        toolkit to address their credit-related challenges. Our distressed team excels in market
        making, providing essential liquidity to clients, sourcing distressed assets, and generating
        innovative ideas. Their commitment to navigating challenging credit solutions underscores
        our dedication to serving clients through every phase of the credit cycle. We understand
        that credit solutions are not one-size-fits-all, and our approach is rooted in
        customization, expertise, and adaptability to deliver comprehensive credit services that
        meet the dynamic needs of our clients.
      </p>
    ),
  },
]

export default function FixedIncomeAndCurrenciesPage() {
  const [openAccordion, setOpenAccordion] = useState(null)

  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="fic-page">
        <section className="cbs-hero" aria-label="Fixed Income and Currencies">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper cbs-hero-content">
            <h1>Fixed Income and Currencies</h1>
          </div>
        </section>

        <div className="cms-content-wrapper cbs-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/corporate-bank-solutions">Solutions</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/investment-bank-solutions">Investment Bank solutions</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Fixed Income and Currencies
            </span>
          </nav>

          <p className="fic-intro">
            In our Fixed Income and Currencies (FIC) division, we aim to be the trusted risk
            management partner for our clients on a global scale in terms of market access, liquidity
            provision, and financing solutions. We&apos;ve combined an experienced institutional and
            corporate sales team with expertise in trading and structuring across various asset
            classes. This includes our Quantitative Investment Solutions (QIS) team, which has
            successfully executed solution-based transactions with institutional investors worldwide
            over the past decade.
          </p>
          <p className="cbs-body">
            Across the FIC business, we continue to refine our client offerings and adapt to market
            changes, such as increased automation, regulatory updates, and the growing demand for
            standardised and transparent execution.
          </p>

          <div className="fic-accordion">
            {accordions.map((item) => {
              const isOpen = openAccordion === item.id
              return (
                <div
                  key={item.id}
                  className={`fic-accordion-item${isOpen ? ' fic-accordion-open' : ''}`}
                >
                  <button
                    type="button"
                    className="fic-accordion-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                  >
                    {item.title}
                    <span className="fic-accordion-icon" aria-hidden="true">
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>
                  {isOpen && <div className="fic-accordion-panel">{item.content}</div>}
                </div>
              )
            })}
          </div>
        </div>

        <section className="fic-linkedin" aria-label="Investment Bank on LinkedIn">
          <div className="cms-content-wrapper fic-linkedin-stack">
            <article className="fic-linkedin-banner">
              <div className="fic-linkedin-inner">
                <div className="fic-linkedin-media">
                  <img src={images.linkedin} alt="" loading="lazy" decoding="async" />
                  <div className="fic-linkedin-gradient" aria-hidden="true" />
                </div>
                <div className="fic-linkedin-content">
                  <h2>
                    <a
                      href="https://www.linkedin.com/showcase/deutsche-bank-investment-bank/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read the latest news about the Investment Bank on LinkedIn
                    </a>
                  </h2>
                  <a
                    href="https://www.linkedin.com/showcase/deutsche-bank-investment-bank/"
                    target="_blank"
                    rel="noreferrer"
                    className="corp-btn corp-btn-solid"
                  >
                    More
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
