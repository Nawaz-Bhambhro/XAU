import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/211324df-0da5-4ca6-95f8-4e65d60d267a/fileAsset?language_id=1'
  ),
  corporateTrust: corpImg(
    'contentAsset/image/570ff0fe-e8f3-49f3-8de0-e8f195768cbd/fileAsset/filter/Resize,Jpeg/resize_w/1280/07009f22-47ea-4c37-a33f-90111b4b040dl.jpg'
  ),
  depositaryReceipts: corpImg(
    'contentAsset/image/a27bb032-e12b-43f4-9efb-8990a689c7f0/fileAsset/filter/Resize,Jpeg/resize_w/1280/e152f0ec-d259-4f31-a3d3-f43d53c5bb3el.jpg'
  ),
  postIpo: corpImg(
    'contentAsset/image/f842ebed-68a5-48c0-b9db-a8ad958ab3a9/fileAsset/filter/Resize,Jpeg/resize_w/1280/1630d42a-f7e0-4b7b-8ef1-4f51100b2d4al.jpg'
  ),
  navigator: corpImg(
    'contentAsset/image/4319f893-b104-4dbc-942e-252984a07b5b/fileAsset/filter/Resize,Jpeg/resize_w/1280/5f90f9d0-fada-406c-a5f5-9822b671cf34l.jpg'
  ),
  partner: corpImg(
    'contentAsset/image/1674d298-2178-4e41-8747-db2d208dbff7/fileAsset/filter/Resize,Jpeg/resize_w/1280/98af3725-9354-4fdc-9a4f-f237130c72cdl.jpg'
  ),
  getInTouch: corpImg(
    'contentAsset/image/4ed174e5-74a7-4449-b461-7e8fafc508e2/fileAsset/filter/Resize,Jpeg/resize_w/1280/c94daa60-dccc-40e2-93de-a417e10a9520.jpg'
  ),
  followUs: corpImg(
    'contentAsset/image/86bce125-61c6-4994-8625-c5ff6309d17d/fileAsset/filter/Resize,Jpeg/resize_w/1280/0339703c-5abe-4cfc-aaf8-83c6176ef2e5.jpg'
  ),
  exploreVideos: corpImg(
    'contentAsset/image/3c84a265-d986-4d5a-b71e-e717c65434ca/fileAsset/filter/Resize,Jpeg/resize_w/1280/3a39334f-9e6b-4e3d-9b57-4e08502469d6l.jpg'
  ),
  clientStories: corpImg(
    'contentAsset/image/e756fabe-1285-442c-9740-263aeeed3ef1/fileAsset/filter/Resize,Jpeg/resize_w/1280/913d9d2a-5f38-4901-be90-a3884367c235l.jpg'
  ),
  sustainableFinance: corpImg(
    'contentAsset/image/b5c3abe7-67c4-4141-90f6-db1c5a6cd11e/fileAsset/filter/Resize,Jpeg/resize_w/1280/164cd808-d812-4288-b8e7-af51b103569cl.jpg'
  ),
  award1: corpImg(
    'contentAsset/image/af1b0b94-dd93-4a6a-9f6f-f3ae47d1073d/fileAsset/filter/Resize,Jpeg/resize_w/1280/b2cb5af9-ee5c-4313-8cda-546e8c58f051l.jpg'
  ),
  award2: corpImg(
    'contentAsset/image/d6b26c33-d6d7-4dca-a273-121317519c71/fileAsset/filter/Resize,Jpeg/resize_w/1280/7d5e8781-b283-4991-af63-aab75e42754bl.jpg'
  ),
  award3: corpImg(
    'contentAsset/image/85e1d0fb-f33a-4ec0-8de3-331b1600205f/fileAsset/filter/Resize,Jpeg/resize_w/1280/542ca0e7-5cf7-407e-972f-fe5b2ead9283l.jpg'
  ),
  newsletter: corpImg(
    'contentAsset/image/c087a081-389e-4541-a3cb-7b14e6a86c04/fileAsset/filter/Resize,Jpeg/resize_w/1280/7650d730-5cca-4c70-bb8c-939b1638deab.jpg'
  ),
}

const solutionCards = [
  {
    title: 'Corporate trust',
    text: 'We offer a very broad range of services for diverse products, from complex securitisation and project finance to syndicated loans, debt exchange and restructuring',
    image: images.corporateTrust,
  },
  {
    title: 'Depositary receipts',
    text: 'We specialise in administering cross-border equity structures such as American and global depositary receipts',
    image: images.depositaryReceipts,
  },
  {
    title: 'Post IPO services',
    text: 'Post IPO services provides a wide range of services for corporates listed on a German stock exchange as well as investment funds registered for public distribution in Germany',
    image: images.postIpo,
  },
]

const exploreCards = [
  {
    title: 'Watch our latest videos and listen to our flow podcasts',
    image: images.exploreVideos,
  },
  {
    title: 'Review our work with clients and read our client stories',
    image: images.clientStories,
  },
  {
    title: 'Integrate sustainability into your finance activities',
    image: images.sustainableFinance,
    href: '/solutions/corporate-bank-solutions/sustainable-finance',
  },
]

const awards = [
  {
    image: images.award1,
    title: 'IJGlobal Awards Winner 2023, April 2024',
    subtitle: 'Corporate Trust Provider of the Year — Global, Asia Pacific, Europe & Africa, North America',
  },
  {
    image: images.award2,
    title: 'The Asset Triple A Sustainable Investing Awards 2024, May 2024',
    subtitle:
      'Best Depositary Receipts Bank — Best Corporate Trust Mandate: Bauhinia ILBS 1 Limited, Hong Kong',
  },
  {
    image: images.award3,
    title: 'emeafinance Achievement Awards 2023, June 2024',
    subtitle: 'Best Depositary Receipt Bank — Best Depositary Receipt Program (Heineken)',
  },
]

const contacts = [
  { region: 'Americas Sales', email: 'TAS-AMERICAS-SALES@list.db.com' },
  { region: 'Asia Sales', email: 'TAS-APAC-SALES@list.db.com' },
  { region: 'EMEA Sales', email: 'TAS-EMEA-SALES@list.db.com' },
]

export default function TrustAndAgencyServicesPage() {
  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="tas-page">
        <section className="tas-hero" aria-label="Trust and agency services">
          <img className="tas-hero-image" src={images.hero} alt="" />
          <div className="tas-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper tas-hero-content">
            <h1>
              Trust and agency
              <br />
              services
            </h1>
          </div>
        </section>

        <div className="cms-content-wrapper tas-content">
          <nav className="tas-breadcrumb" aria-label="Breadcrumb">
            <span className="tas-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/corporates">Solutions</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/corporate-bank-solutions">Corporate Bank solutions</a>
            <span aria-hidden="true">&gt;</span>
            <span className="tas-breadcrumb-current" aria-current="page">
              Trust and agency services
            </span>
          </nav>

          <p className="tas-intro">
            Deutsche Bank&apos;s extensive offerings across the debt and equity capital markets
            include trustee, agency, escrow, document custody and related services as well as
            depositary receipts
          </p>

          <blockquote className="tas-quote">
            <span className="tas-quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p>
              <em>
                Passionate about being the trusted capital markets partner for our clients,
                <br />
                excited to become the industry leader of digital services
              </em>
            </p>
          </blockquote>

          <h2 className="tas-section-heading">Global solutions for specific needs</h2>
          <p className="tas-body">
            We offer a suite of services tailored to support complex securitisations, project
            finance, escrows, syndicated and bilateral loans, and liability management as well as
            more vanilla products such as medium-term notes and commercial paper.
          </p>
          <p className="tas-body">
            Additionally, we specialise in administering cross-border equity structures such as
            American and global depositary receipts and transferable custody receipts as well as
            post IPO services in Germany.
          </p>
        </div>

        <section className="tas-solutions" aria-label="Global solutions">
          <div className="cms-content-wrapper tas-solutions-grid">
            {solutionCards.map((card) => (
              <article key={card.title} className="tas-solution-card">
                <div className="tas-solution-image">
                  <img src={card.image} alt="" />
                </div>
                <div className="tas-solution-body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <a href="#" className="corp-btn corp-btn-solid">
                    More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="tas-featured" aria-label="Featured content">
          <div className="cms-content-wrapper tas-featured-grid">
            <a href="#" className="tas-featured-tile tas-featured-navigator">
              <img src={images.navigator} alt="" />
              <div className="tas-featured-tile-overlay" aria-hidden="true" />
              <div className="tas-featured-tile-content">
                <h3>CLIENT NAVIGATOR</h3>
                <span className="corp-btn corp-btn-solid">More</span>
              </div>
            </a>
            <div className="tas-featured-assist">
              <h3>Visit our trust and agency contact assist</h3>
              <a href="#" className="corp-btn corp-btn-solid">
                More
              </a>
            </div>
          </div>
          <div className="cms-content-wrapper tas-promo-grid">
            <div className="tas-promo-image">
              <img src={images.partner} alt="" />
            </div>
            <div className="tas-promo-blocks">
              <div className="tas-promo-block">
                <h3>#yourcapitalmarketspartner</h3>
                <p>
                  Our broad range of capital markets services are focused on supporting public and
                  private companies, law firms, government entities, special purpose vehicles, asset
                  managers, financial institutions, hedge funds, supranational agencies, insurance
                  firms and pension funds.
                </p>
                <a href="#" className="corp-btn corp-btn-solid">
                  Play
                </a>
              </div>
              <div className="tas-promo-block">
                <h3>Watch our trust and agency services playlist</h3>
                <p>
                  See how our team has supported clients with extensive offerings across the debt
                  and equity capital markets
                </p>
                <a href="#" className="corp-btn corp-btn-solid">
                  Play
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="tas-contact" aria-label="Get in touch">
          <div className="cms-content-wrapper tas-contact-grid">
            <div className="tas-contact-main">
              <img className="tas-contact-bg" src={images.getInTouch} alt="" />
              <div className="tas-contact-overlay" aria-hidden="true" />
              <div className="tas-contact-content">
                <h2>
                  Get in touch with
                  <br />
                  our experts
                </h2>
                <div className="tas-contact-list">
                  {contacts.map((contact) => (
                    <div key={contact.region} className="tas-contact-item">
                      <p className="tas-contact-region">{contact.region}</p>
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tas-follow">
              <img className="tas-follow-bg" src={images.followUs} alt="" />
              <div className="tas-follow-content">
                <h2>Follow us</h2>
                <a href="#">on LinkedIn</a>
                <a href="#">on twitter</a>
              </div>
            </div>
          </div>
        </section>

        <section className="tas-explore" aria-label="Explore more">
          <div className="cms-content-wrapper">
            <h2 className="tas-section-heading">Explore more</h2>
            <div className="tas-explore-grid">
              {exploreCards.map((card) => (
                <article key={card.title} className="tas-explore-card">
                  <div className="tas-explore-image">
                    <img src={card.image} alt="" />
                  </div>
                  <div className="tas-explore-body">
                    <h3>{card.title}</h3>
                    <a href={card.href || '#'} className="corp-btn corp-btn-solid">
                      More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tas-recognition" aria-label="Global recognition">
          <div className="cms-content-wrapper">
            <h2 className="tas-section-heading">Global recognition</h2>
            <div className="tas-awards-grid">
              {awards.map((award) => (
                <article key={award.title} className="tas-award-card">
                  <div className="tas-award-image">
                    <img src={award.image} alt="" />
                  </div>
                  <div className="tas-award-body">
                    <h3>{award.title}</h3>
                    <p>{award.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tas-newsletter" aria-label="Newsletter sign-up">
          <img className="tas-newsletter-image" src={images.newsletter} alt="" />
          <div className="tas-newsletter-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper tas-newsletter-content">
            <h2>
              Sign-up for
              <br />
              newsletters and
              <br />
              exclusive insights
            </h2>
            <a href="#" className="corp-btn corp-btn-solid">
              Sign me up
            </a>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
