import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/fc35e97e-4ad8-4275-adde-693eac5820c8/fileAsset?language_id=1'
  ),
  custody: corpImg(
    'contentAsset/image/4cba0ae3-d625-4eda-8899-dc9deb05b4c0/fileAsset/filter/Resize,Jpeg/resize_w/1280/73fb4964-45d9-4fef-9da2-02505681c5b9l.jpg'
  ),
  fundServices: corpImg(
    'contentAsset/image/5e793b21-077d-435c-8f6d-a7e70506943c/fileAsset/filter/Resize,Jpeg/resize_w/1280/d3d82b6c-3155-49f7-9016-0c61078ae3bbl.jpg'
  ),
  namasteIndia: corpImg(
    'contentAsset/image/57cc583d-6dca-49f3-a29b-ed5eb1cfe70d/fileAsset/filter/Resize,Jpeg/resize_w/1280/9e289b33-b13c-4f5a-a102-654188abd242.jpg'
  ),
  spotlight1: corpImg(
    'contentAsset/image/7aa6d492-819c-4634-891a-07cc8e9b58ba/fileAsset/filter/Resize,Jpeg/resize_w/1280/24e9e6bd-7a2f-4e0b-9553-60c514e5b3f1l.jpg'
  ),
  spotlight2: corpImg(
    'contentAsset/image/a44e45f5-2f5a-4cfe-9ba3-f8cb4f2e1aed/fileAsset/filter/Resize,Jpeg/resize_w/1280/ca2f4afc-1da7-4169-a9ef-3374344090fcl.jpg'
  ),
  spotlight3: corpImg(
    'contentAsset/image/080d457c-30ec-4cbf-8ab9-01693a19dc7c/fileAsset/filter/Resize,Jpeg/resize_w/1280/8c46e944-7302-4919-84ea-368de1ad9224l.jpg'
  ),
  spotlight4: corpImg(
    'contentAsset/image/31bbb0ad-2d8d-4a47-ad04-cf62eff3405e/fileAsset/filter/Resize,Jpeg/resize_w/1280/91a59536-0728-47b9-bf17-a6b3cbef4079l.jpg'
  ),
  smarterCustody: corpImg(
    'contentAsset/image/e14fe120-19c1-4ade-8d64-fdcc629e94bf/fileAsset/filter/Resize,Jpeg/resize_w/1280/ff5194f4-0652-4d07-bae6-2bbe5beedd1d.jpg'
  ),
  trendsVideo: corpImg(
    'contentAsset/image/bcc46893-6a5b-4d75-aba5-0260cb031019/fileAsset/filter/Resize,Jpeg/resize_w/1280/67fb2204-3b07-443c-b64c-eda89c1136a9.jpg'
  ),
  planningArticle: corpImg(
    'contentAsset/image/58704a4a-37e3-40ae-af76-665091f28ec3/fileAsset/filter/Resize,Jpeg/resize_w/1280/56de1fb9-6231-4ae8-8925-529b971a6b10.jpg'
  ),
  apiVideo: corpImg(
    'contentAsset/image/0035d483-734c-4f24-b73d-099eb94e5a20/fileAsset/filter/Resize,Jpeg/resize_w/1280/1b35b4a3-02f9-45e2-90ba-9710f9ea5b24.jpg'
  ),
  networkPaper: corpImg(
    'contentAsset/image/b2e86fb8-2e2e-4a5d-8ab1-5e8a76162825/fileAsset/filter/Resize,Jpeg/resize_w/1280/d96e9564-5d66-450b-a6b9-3b1db97289f6.jpg'
  ),
  worldMap: corpImg(
    'contentAsset/image/021b073b-bbbc-4dd4-ab59-9da36611b324/fileAsset/filter/Resize,Jpeg/resize_w/1280/9465f2ac-3c33-4893-951d-26ee508b5b4dl.jpg'
  ),
  newsletter: corpImg(
    'contentAsset/image/c087a081-389e-4541-a3cb-7b14e6a86c04/fileAsset/filter/Resize,Jpeg/resize_w/1280/7650d730-5cca-4c70-bb8c-939b1638deab.jpg'
  ),
}

const solutionCards = [
  {
    title: 'Custody and clearing',
    text: "Nimble and efficient custody and clearing services that provide direct access to a country's capital market infrastructure and consolidated post-trade services with a single point of contact, covering custody, cash, FX services and market news",
    image: images.custody,
  },
  {
    title: 'Fund services',
    text: 'We offer a full range of fund administration, custody and banking services to traditional asset managers. Fund managers benefit from our scale, expertise and technology',
    image: images.fundServices,
  },
]

const spotlightCards = [
  {
    title: 'Sabih Behzad recaps Digital Assets Week New York 2026',
    text: "Sabih Behzad shares his insights on tokenisation's impact on liquidity, as well as the current status of digital asset adoption.",
    image: images.spotlight1,
    cta: 'Watch',
  },
  {
    title: 'Road to Sibos video series: The impact of moving custody services onto the cloud',
    text: 'In our first video of our Road to Sibos campaign, we share insights on the impact and benefits of moving custody services to the cloud.',
    image: images.spotlight2,
    cta: 'Watch',
  },
  {
    title: 'Road to Sibos video series: The Asia growth story',
    text: 'Watch the concluding video of our Road to Sibos campaign where Chris Lemmon talks to Anand Rengarajan on the development and growth in the Asian market.',
    image: images.spotlight3,
    cta: 'Watch',
  },
  {
    title: 'Road to Sibos video series: AI applications for Asset Servicing',
    text: 'Watch our third video of our Road To Sibos campaign where Paul Maley speaks to Jonathan Watkins on AI and its application for asset servicing.',
    image: images.spotlight4,
    cta: 'Play',
  },
]

const exploreTiles = [
  {
    eyebrow: 'FOCUS',
    title: '#smartercustody',
    text: 'New regulations and technology are fostering changes in the custody arena, providing clients with more choice and flexibility.',
    image: images.smarterCustody,
    cta: 'More',
    wide: true,
  },
  {
    eyebrow: 'VIDEO',
    title: 'Trends impacting the post trade securities services industry',
    text: 'Watch this video featuring Anand Rengarajan on trends shaping the post trade Securities Services industry.',
    image: images.trendsVideo,
    cta: 'Play',
    wide: true,
  },
  {
    eyebrow: 'ARTICLE',
    title: 'Planning for the people',
    text: "India's government aims to make the country a US$5trn economy by 2024. Janet Du Chenne talks to Sundeep Sikka about Nippon Life India Asset Management's plans.",
    image: images.planningArticle,
    cta: 'More',
  },
  {
    eyebrow: 'VIDEO',
    title: 'Automating FX custody using APIs',
    text: 'Deutsche Bank and BNY Mellon have collaborated on an API-enabled FX custody solution which reduces confirmation times for trades.',
    image: images.apiVideo,
    cta: 'Play',
  },
  {
    eyebrow: 'WHITE PAPER',
    title: 'Re-imagining network management',
    text: 'Covid-19 has brought unprecedented challenges and change for the securities services industry.',
    image: images.networkPaper,
    cta: 'More',
  },
]

const contacts = [
  { region: 'EMEA', name: 'Steven Hondelink', email: 'steven.hondelink@db.com' },
  { region: 'Asia', name: 'Anand Rengarajan', email: 'anand.rengaragan@db.com' },
  { region: 'Americas', name: 'Kamalita Abdool', email: 'kamalita.abdool@db.com' },
]

export default function SecuritiesServicesPage() {
  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="ss-page">
        <section className="ss-hero" aria-label="Securities services">
          <img className="ss-hero-image" src={images.hero} alt="" />
          <div className="ss-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper ss-hero-content">
            <h1>Securities services</h1>
          </div>
        </section>

        <div className="cms-content-wrapper ss-content">
          <nav className="ss-breadcrumb" aria-label="Breadcrumb">
            <span className="ss-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/corporates">Solutions</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/corporate-bank-solutions">Corporate Bank solutions</a>
            <span aria-hidden="true">&gt;</span>
            <span className="ss-breadcrumb-current" aria-current="page">
              Securities services
            </span>
          </nav>

          <p className="ss-intro">
            Corporates and institutions investing globally need to keep pace with a changing
            regulatory landscape, as well as market infrastructure change and new technological
            innovations. They need bespoke solutions that focus on their specific post-trade goals
            and data that empowers them to improve their efficiency and process
          </p>
          <p className="ss-body">
            Financial intermediaries such as global custodians and broker dealers as well as buy-side
            firms and other institutional clients need to focus on achieving their business goals,
            whilst ensuring continued regulatory compliance, and reducing capital and financing
            costs, as well as improving their operational efficiency.
          </p>
          <p className="ss-body">
            To help them, we provide custody and clearing, asset servicing, securities financing
            and liquidity services in more than 30 markets around the world. These are tailored to
            their specific requirements, leveraging our digital and data tools.
          </p>

          <blockquote className="ss-quote">
            <span className="ss-quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p>
              <em>
                Passionate about integrated services for securities,
                <br />
                excited to shape post-trade digital transformation and to become a custodian of
                digital assets
              </em>
            </p>
          </blockquote>

          <h2 className="ss-section-heading">Global solutions for your specific needs</h2>
        </div>

        <section className="ss-solutions" aria-label="Global solutions">
          <div className="cms-content-wrapper ss-solutions-grid">
            {solutionCards.map((card) => (
              <article key={card.title} className="ss-solution-card">
                <div className="ss-solution-image">
                  <img src={card.image} alt="" />
                </div>
                <div className="ss-solution-body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <a href="#" className="corp-btn corp-btn-solid">
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ss-namaste" aria-label="Namaste India">
          <img className="ss-namaste-image" src={images.namasteIndia} alt="" />
          <div className="ss-namaste-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper ss-namaste-content">
            <p className="ss-namaste-eyebrow">10th Edition</p>
            <h2>Namaste India</h2>
            <p>The comprehensive guide to investing in India</p>
            <a href="#" className="ss-btn-outline">
              Read the new edition 2023
            </a>
          </div>
        </section>

        <section className="ss-spotlight" aria-label="Spotlight">
          <div className="cms-content-wrapper ss-spotlight-grid">
            {spotlightCards.map((card) => (
              <article key={card.title} className="ss-spotlight-card">
                <div className="ss-spotlight-image">
                  <img src={card.image} alt="" />
                </div>
                <div className="ss-spotlight-body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <a href="#" className="corp-btn corp-btn-solid">
                    {card.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ss-explore" aria-label="Explore the world of securities services">
          <div className="cms-content-wrapper">
            <h2 className="ss-section-heading">Explore the world of securities services</h2>
            <div className="ss-explore-grid">
              {exploreTiles.map((tile) => (
                <a
                  key={tile.title}
                  href="#"
                  className={`ss-explore-tile${tile.wide ? ' ss-explore-tile-wide' : ''}`}
                >
                  <img src={tile.image} alt="" />
                  <div className="ss-explore-tile-overlay" aria-hidden="true" />
                  <div className="ss-explore-tile-content">
                    <p className="ss-explore-eyebrow">{tile.eyebrow}</p>
                    <h3>{tile.title}</h3>
                    <p>{tile.text}</p>
                    <span className="corp-btn corp-btn-solid">{tile.cta}</span>
                  </div>
                </a>
              ))}
            </div>
            <a href="#" className="ss-browse-link">
              Browse all articles
            </a>
          </div>
        </section>

        <section className="ss-where" aria-label="Where we are">
          <div className="cms-content-wrapper ss-where-grid">
            <div className="ss-where-map">
              <h2 className="ss-section-heading">Where we are</h2>
              <img src={images.worldMap} alt="Securities Services world map" />
            </div>
            <div className="ss-where-contact">
              <h2 className="ss-section-heading">Contact us</h2>
              <div className="ss-contact-list">
                {contacts.map((contact) => (
                  <div key={contact.region} className="ss-contact-item">
                    <h3>{contact.region}</h3>
                    <p>{contact.name}</p>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ss-newsletter" aria-label="Newsletter sign-up">
          <img className="ss-newsletter-image" src={images.newsletter} alt="" />
          <div className="ss-newsletter-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper ss-newsletter-content">
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
