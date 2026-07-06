import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/387cfa51-54c3-490a-94fc-930552331cb3/fileAsset?language_id=1'
  ),
  flow: corpImg(
    'contentAsset/image/5ecba695-d677-4592-8635-a5d7ad61238e/fileAsset/filter/Resize,Jpeg/resize_w/1280/047723d0-f845-4ed8-8063-8bdb43a7aae0.jpg'
  ),
  results: corpImg(
    'contentAsset/image/63247fb2-689c-4e4a-89f9-fd14a555e4f5/fileAsset/filter/Resize,Jpeg/resize_w/1280/b73ad818-fe69-4c7b-a14b-2f3b7da7f9cb.jpg'
  ),
}

const magazines = [
  {
    id: 'flow',
    title: 'flow',
    text: 'Magazine from the world of corporate and transaction banking for multi-national companies and institutions in English language',
    image: images.flow,
    href: 'https://flow.db.com/magazine/index',
    variant: 'flow',
  },
  {
    id: 'results',
    title: 'results.',
    text: 'Our editorial take on current developments, business and corporate finance for German corporate clients, in German language only',
    image: images.results,
    href: 'https://www.deutsche-bank.de/ub/results/finanzwissen-fuer-unternehmen.html',
    variant: 'results',
  },
]

export default function MagazinesPage() {
  return (
    <SiteLayout activeSubNav="Publications" headerVariant="corporates" footerVariant="corporates">
      <main className="mg-page">
        <section className="mg-hero" aria-label="Magazines">
          <img className="mg-hero-image" src={images.hero} alt="" />
          <div className="mg-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper mg-hero-content">
            <h1>Magazines</h1>
          </div>
        </section>

        <div className="cms-content-wrapper mg-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/publications/magazines">Publications</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Magazines
            </span>
          </nav>

          <p className="mg-lead">
            Format matters and while online articles work well for many of our clients, we have had
            such positive feedback from our print magazines and their digital versions that these
            have been made centre stage of our information portfolio
          </p>

          <p className="mg-body">
            Carefully designed, with sympathetic and aligned photography, our flow and results.
            magazines are high points of Deutsche Bank&apos;s communications year, with clients and
            partners being part of the story. So pick up a magazine and step into a world where we
            connect problems with solutions and show on-the-ground corporate banking in action
          </p>
        </div>

        <section className="mg-magazines" aria-label="Featured magazines">
          <div className="cms-content-wrapper mg-magazines-stack">
            {magazines.map((magazine) => (
              <article
                key={magazine.id}
                id={magazine.id}
                className={`mg-magazine mg-magazine--${magazine.variant}`}
              >
                <img className="mg-magazine-image" src={magazine.image} alt="" loading="lazy" />
                <div
                  className={`mg-magazine-shade mg-magazine-shade--${magazine.variant}`}
                  aria-hidden="true"
                />
                <div className="mg-magazine-content">
                  <h2>
                    <a href={magazine.href} target="_blank" rel="noreferrer">
                      {magazine.title}
                    </a>
                  </h2>
                  <p>{magazine.text}</p>
                  <a
                    href={magazine.href}
                    target="_blank"
                    rel="noreferrer"
                    className="corp-btn corp-btn-solid"
                  >
                    Find out more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
