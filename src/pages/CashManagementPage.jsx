import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/37fbb6e4-61d8-4e95-8f00-8ccbab463d5f/fileAsset?language_id=1'
  ),
  dbxInstitutions: corpImg(
    'contentAsset/raw-data/9e1c092e-7346-474b-b305-c3298f5fdc73/fileAsset?language_id=1'
  ),
  dbxCorporates: corpImg(
    'contentAsset/raw-data/4d375a3f-a1fe-47eb-91f1-7de5f76a4a2e/fileAsset?language_id=1'
  ),
  flow: corpImg(
    'contentAsset/image/63fee112-1040-4b71-836f-b4125910ee32/fileAsset/filter/Resize,Jpeg/resize_w/1280/658c5edf-8eac-4a40-9cb9-9f94d5603b62l.jpg'
  ),
  whitePapers: corpImg(
    'contentAsset/image/11b1d242-d06f-4619-9bb9-edcf0a02503a/fileAsset/filter/Resize,Jpeg/resize_w/1280/a1c23795-0483-40f8-8f93-e20870d5e98bl.jpg'
  ),
  multimedia: corpImg(
    'contentAsset/image/1776e3fd-b913-4087-88fd-c2816d71a66a/fileAsset/filter/Resize,Jpeg/resize_w/1280/4b72a898-865f-4d98-9562-5412faea2ea7l.jpg'
  ),
  worldwide: corpImg(
    'contentAsset/image/d11fdb69-1844-46d5-b3ec-fba713705bea/fileAsset/filter/Resize,Jpeg/resize_w/1280/e8f39ca9-44ab-40db-aca0-4cad69ec0f9d.jpg'
  ),
}

const dbxCards = [
  {
    title: 'dbX for Institutions',
    image: images.dbxInstitutions,
  },
  {
    title: 'dbX for Corporates, NBFIs & Fintechs',
    image: images.dbxCorporates,
  },
]

const latestCards = [
  {
    eyebrow: 'flow',
    title: 'Explore more on cash management @flow',
    text: 'Exclusive insights and reference tools from the world of corporate and institutional financial services. flow, through articles, special reports and broadcast media is where goods, capital and ideas connect',
    image: images.flow,
  },
  {
    eyebrow: 'WHITE PAPERS/GUIDES',
    title: 'Insights and commentary',
    text: 'Detailed insights and bank-agnostic commentary from our experts on themes ranging from cash management to emerging technologies',
    image: images.whitePapers,
  },
  {
    eyebrow: 'MULTIMEDIA',
    title: 'Videos and podcasts',
    text: 'Watch our latest videos and listen to our flow podcast series',
    image: images.multimedia,
  },
]

export default function CashManagementPage() {
  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="cm-page">
        <section className="cm-hero" aria-label="Cash management">
          <img className="cm-hero-image" src={images.hero} alt="" />
          <div className="cm-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper cm-hero-content">
            <h1>Cash management</h1>
            <p className="cm-hero-subtitle">
              Powered by <span className="cm-dbx">dbX</span> next-generation solutions
            </p>
          </div>
        </section>

        <div className="cms-content-wrapper cm-content">
          <nav className="cm-breadcrumb" aria-label="Breadcrumb">
            <span className="cm-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/corporates">Solutions</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/corporate-bank-solutions">Corporate Bank solutions</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cm-breadcrumb-current" aria-current="page">
              Cash management
            </span>
          </nav>

          <p className="cm-intro">
            dbX merges next-generation technology with treasury expertise to empower global
            institutions to operate faster and smarter across borders, currencies, and payment types
            – delivering visibility, seamless control, automation, and tangible value through our
            global cash management services.
          </p>
        </div>

        <section className="cm-dbx-cards" aria-label="dbX solutions">
          <div className="cms-content-wrapper cm-dbx-grid">
            {dbxCards.map((card) => (
              <a key={card.title} href="#" className="cm-dbx-card">
                <img src={card.image} alt="" />
                <div className="cm-dbx-card-overlay" aria-hidden="true" />
                <div className="cm-dbx-card-content">
                  <h2>{card.title}</h2>
                  <span className="cm-btn-outline">Explore more</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="cm-latest" aria-label="The latest from cash management">
          <div className="cms-content-wrapper">
            <h2 className="cm-latest-heading">The latest from cash management</h2>
            <div className="cm-latest-grid">
              {latestCards.map((card) => (
                <article key={card.title} className="cm-latest-card">
                  <div className="cm-latest-image">
                    <img src={card.image} alt="" />
                  </div>
                  <div className="cm-latest-body">
                    <p className="cm-latest-eyebrow">{card.eyebrow}</p>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <a href="#" className="corp-btn corp-btn-solid">
                      More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cm-worldwide" aria-label="Cash management worldwide">
          <img className="cm-worldwide-image" src={images.worldwide} alt="" />
          <div className="cm-worldwide-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper cm-worldwide-content">
            <h2>Cash management worldwide</h2>
            <p>
              We offer cash management services to corporate clients in 34 countries worldwide.
              View our Solutions Country Guide and explore our services
            </p>
            <a href="#" className="corp-btn corp-btn-solid">
              Explore more
            </a>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
