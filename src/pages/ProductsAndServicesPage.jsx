import { SiteLayout } from '../components/Layout'
import '../ProductsAndServices.css'

const diagramImage =
  'https://www.db.com/contentAsset/image/7d956d42-8cd0-43b8-b480-5ade91b4b6c8/fileAsset/filter/Resize,Jpeg/resize_w/1280/94862fd2-4dd4-4625-80b3-c779050b58fcl.jpg'

const leftBusinesses = [
  {
    title: 'Investment Bank',
    href: '/investment-bank',
    bullets: [
      'Delivers project finance and structured development for mega-scale infrastructure, energy and technology programmes backed by gold-secured funding.',
      'Supports governments, institutions and developers with capital deployment, advisory services and end-to-end project structuring from USD $50M and above.',
    ],
  },
  {
    title: 'Asset Management',
    href: '/dws',
    bullets: [
      'Offers gold-backed investment solutions, tiered return structures and Swiss vault custody for private and institutional clients.',
      'Enables clients to access active, passive and alternative strategies aligned with the X.A.U Global financial ecosystem and K.ULLAS digital platform.',
    ],
  },
]

const rightBusinesses = [
  {
    title: 'Corporate Bank',
    href: '/corporates',
    bullets: [
      'Provides capital development systems and treasury solutions for corporations, governments and financial institutions worldwide.',
      'Supports sovereign partnerships, structured financing and transaction services across infrastructure, technology and energy sectors.',
    ],
  },
  {
    title: 'Private Bank',
    href: '/private-bank',
    bullets: [
      'Serves as the trusted partner for land capital financing, unlocking value from land assets through structured development and long-term investment.',
      'Provides high-net-worth individuals and family entrepreneurs with gold-backed wealth solutions, personalised advisory and omnichannel digital access via the X.A.U System.',
    ],
  },
]

function BusinessBlock({ title, href, bullets }) {
  return (
    <div className="ps-business">
      <p className="ps-business-title">
        <a href={href}>{title}</a>
      </p>
      <ul>
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function ProductsAndServicesPage() {
  return (
    <SiteLayout activeSubNav="What we do">
      <main className="ps-page">
        <div className="cms-content-wrapper">
          <nav className="ps-breadcrumb" aria-label="Breadcrumb">
            You are here:
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/products-and-services">What we do</a>
            <span aria-hidden="true">&gt;</span>
            <span className="ps-breadcrumb-current" aria-current="page">
              Products and services
            </span>
          </nav>

          <h1 className="ps-title">Products and services</h1>
        </div>

        <section className="ps-blue-section" aria-labelledby="ps-section-heading">
          <div className="cms-content-wrapper">
            <h2 id="ps-section-heading" className="ps-section-heading">
              Four client-centric businesses
            </h2>
            <p className="ps-intro">
              Each of the four core divisions is positioned to deliver the full expertise of the
              X.A.U Global financial ecosystem — from land capital and project finance to
              gold-backed asset management and sovereign partnerships.
            </p>

            <div className="ps-grid">
              <div className="ps-col ps-col-left">
                {leftBusinesses.map((business) => (
                  <BusinessBlock key={business.title} {...business} />
                ))}
              </div>

              <div className="ps-col ps-col-center">
                <img
                  className="ps-diagram"
                  src={diagramImage}
                  alt="An infographic illustrating the main business divisions of XAU Global."
                  loading="lazy"
                />
              </div>

              <div className="ps-col ps-col-right">
                {rightBusinesses.map((business) => (
                  <BusinessBlock key={business.title} {...business} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
