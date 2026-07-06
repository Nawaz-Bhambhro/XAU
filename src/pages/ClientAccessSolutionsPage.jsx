import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/6fdea554-6da5-4924-9628-40d94fd700f2/fileAsset?language_id=1'
  ),
  autobahn: corpImg(
    'contentAsset/image/d6168a28-cc74-4935-abe6-0ffb3228e841/fileAsset/filter/Resize,Jpeg/resize_w/1280/58242a2a-855e-4bf6-85e7-e60d039c7f81.jpg'
  ),
  apiConnectivity: corpImg(
    'contentAsset/image/6b270c34-fafa-4812-b320-054cf4a14e29/fileAsset/filter/Resize,Jpeg/resize_w/1280/3dfe404f-6f90-4a2a-b9ba-e5f29ec474b0.jpg'
  ),
  fx4cash: corpImg(
    'contentAsset/image/1acf153a-e022-4a9d-9793-07fc581c949f/fileAsset/filter/Resize,Jpeg/resize_w/1280/9f60e2b5-1f71-4f20-a0e6-8e1e2c6618c6.jpg'
  ),
  globalOffice: corpImg(
    'contentAsset/image/258d7b41-c1aa-40cb-8da2-9226d10562b5/fileAsset/filter/Resize,Jpeg/resize_w/1280/7b5ea67f-d5e2-4ae4-8dec-d1b67dd9b010.jpg'
  ),
  integration: corpImg(
    'contentAsset/image/bf177e34-52c7-4911-9ea3-3a3c9cb3ff21/fileAsset/filter/Resize,Jpeg/resize_w/1280/6c9dc72a-d23e-4991-a9a0-ed7ba749546d.jpg'
  ),
  paymentTracking: corpImg(
    'contentAsset/image/6e63d330-3ae7-44c8-9481-fadb09b728b4/fileAsset/filter/Resize,Jpeg/resize_w/1280/479debba-707f-4e10-98c6-d1f1b8d90371.jpg'
  ),
  investorReporting: corpImg(
    'contentAsset/image/2bf18160-3b14-44f1-8aa0-e6818d8a5af6/fileAsset/filter/Resize,Jpeg/resize_w/1280/3c49a697-2931-4954-ac1c-7da7be0c2b33.jpg'
  ),
  secureEmail: corpImg(
    'contentAsset/image/9818de13-afc4-4455-a770-b76372efe3e6/fileAsset/filter/Resize,Jpeg/resize_w/1280/ade27ae8-3af7-4708-9bf3-b889efecbb1c.jpg'
  ),
  webAbirs: corpImg(
    'contentAsset/image/3da6a8be-f89c-4dff-a4d1-a67418aa3363/fileAsset/filter/Resize,Jpeg/resize_w/1280/6554be09-be84-4271-8244-06c11f1ba61e.jpg'
  ),
  serviceManagement: corpImg(
    'contentAsset/image/2b727337-dcb8-4283-95d6-b4c1aeff29cb/fileAsset/filter/Resize,Jpeg/resize_w/1280/5bbccbb5-ff36-45bb-acf8-dd0152b28302.jpg'
  ),
}

const solutionCards = [
  {
    title: 'API Connectivity & Real-Time Treasury',
    image: images.apiConnectivity,
    cta: 'Read more',
    href: '/solutions/client-access-solutions/corporate-api-connectivity',
    gradient: true,
  },
  {
    title: 'FX4Cash',
    image: images.fx4cash,
    cta: 'Read more',
    href: '#',
  },
  {
    title: 'Global Office',
    image: images.globalOffice,
    cta: 'Access service',
    href: '/global-office/login',
  },
  {
    title: 'Integration and messaging products',
    image: images.integration,
    cta: 'Read more',
    href: '/solutions/client-access-solutions/integration-and-messaging-products',
  },
  {
    title: 'International payment tracking',
    image: images.paymentTracking,
    cta: 'Read more',
    href: '/solutions/client-access-solutions/international-payment-tracking',
    gradient: true,
  },
  {
    title: 'Investor Reporting',
    image: images.investorReporting,
    cta: 'Access service',
    href: '/investor-reporting',
  },
  {
    title: 'Secure exchange of information via e-mail',
    image: images.secureEmail,
    cta: 'Read more',
    href: '/solutions/client-access-solutions/secure-exchange-of-information-via-e-mail',
  },
  {
    title: 'Web ABIRS',
    image: images.webAbirs,
    cta: 'Access service',
    href: '/web-abirs/login',
  },
]

export default function ClientAccessSolutionsPage() {
  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="cas-page">
        <section className="cbs-hero" aria-label="Client access solutions">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper cbs-hero-content">
            <h1>Client access solutions</h1>
          </div>
        </section>

        <div className="cms-content-wrapper cbs-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/corporate-bank-solutions">Solutions</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Client access solutions
            </span>
          </nav>

          <p className="cas-intro-lead">
            Through online, messaging, integration and client care solutions, the client access
            product suite aims to deliver quality, reliable services that provide market leading
            user experience and enable our transaction banking clients to meet their business
            goals
          </p>

          <p className="cbs-body">
            Increasing regulatory and market change, shifts in technology trends and on going
            efficiency drives, have meant that service demands are becoming more and more complex in
            the transaction banking industry. A tangible need has developed for intuitive,
            integrated products that reduce complexity and the demand of daily workflow tasks.
          </p>
          <p className="cbs-body">
            The core focus of client access products is to resolve our clients&apos; problems through
            the delivery of innovative, sustainable online, integration, messaging and customer care
            solutions.
          </p>
          <p className="cbs-body">
            We offer a wide range of award winning e-banking services that can be used independently
            or bundled together. With a personalised mix of solutions, optimised by individual
            business needs, clients can conveniently complete a range of tasks from initiating
            transactions, checking account balances and payment history to self managing account
            portfolios.
          </p>
          <p className="cbs-body">
            Our integration and messaging products are flexible in design to support standardisation,
            automation and centralisation of clients&apos; treasury processes.
          </p>
          <p className="cbs-body">
            Additionally, through the Autobahn App Market, our clients can access a wealth of
            electronic products across business divisions, asset classes and regions, including our
            research, analytics, investment and transaction banking services.
          </p>
          <p className="cbs-body">
            Continuous client focus is a core value for us. Our teams constantly engage with our
            clients, as well as our partners, to fully understand their needs and ensure that our
            solutions and platforms are compatible with the relevant systems and standards across the
            globe.
          </p>

          <h2 className="cas-section-title">Global solutions for specific needs</h2>
          <p className="cbs-body cas-section-intro">
            Client access products provide an easy to use, functionally rich interface into Corporate
            Bank within Deutsche Bank. Services cover the award winning Autobahn App Market,
            Integration and messaging products, such as Bank Communications, Global Formats, Partner
            Client Integration and Regional Access Channels
          </p>
        </div>

        <section className="cas-autobahn cms-content-wrapper" aria-label="Autobahn App Market">
          <div className="cas-autobahn-inner">
            <div className="cas-autobahn-media">
              <img src={images.autobahn} alt="" />
              <div className="cas-autobahn-gradient" aria-hidden="true" />
            </div>
            <div className="cas-autobahn-content">
              <p className="cas-autobahn-eyebrow">Autobahn App Market</p>
              <h2>Welcome to the next generation of electronic transaction banking</h2>
              <p>
                The Autobahn App Market is our award winning electronic service offering, giving you
                simple, intuitive and consistent access to an array of transaction banking,
                investment banking and post-trade services – across asset classes and markets – as
                well as powerful Deutsche Bank research, commentary and analytics
              </p>
              <a href="/autobahn/login" className="corp-btn corp-btn-solid">
                More
              </a>
            </div>
          </div>
        </section>

        <section className="cas-grid-section cms-content-wrapper" aria-label="Client access products">
          <div className="cas-grid">
            {solutionCards.map((card) => (
              <article key={card.title} className="cas-grid-card">
                <img src={card.image} alt="" />
                {card.gradient ? <div className="cas-grid-card-gradient" aria-hidden="true" /> : null}
                <div className="cas-grid-card-overlay" aria-hidden="true" />
                <div className="cas-grid-card-content">
                  <h3>
                    <a href={card.href}>{card.title}</a>
                  </h3>
                  <a href={card.href} className="cas-grid-card-btn">
                    {card.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cas-service cms-content-wrapper" aria-label="Service Management">
          <div className="cas-service-inner">
            <div className="cas-service-media">
              <img src={images.serviceManagement} alt="" />
              <div className="cas-service-gradient" aria-hidden="true" />
            </div>
            <div className="cas-service-content">
              <h2>Service Management via the Corporate Bank Portal</h2>
              <p>
                Service Management via the Corporate Bank Portal provides corporate clients secure
                access to bank-wide services in one place. This allows you to easily search, pick
                and choose services that are relevant. Here, you can manage service requests online
                – anywhere and anytime.
              </p>
              <a href="#" className="corp-btn corp-btn-solid">
                More
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
