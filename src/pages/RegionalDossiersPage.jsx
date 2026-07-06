import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import regionalData from '../data/regionalDossiersData.json'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const heroImage = corpImg(
  'contentAsset/raw-data/ccf9f302-72e1-4b93-9aae-a1f137763f7a/fileAsset?language_id=1'
)

const regionNav = [
  { id: 'apac', label: 'ASEAN' },
  { id: 'apac', label: 'Asia Pacific (APAC)' },
  { id: 'china', label: 'China' },
  { id: 'emea', label: 'EMEA' },
  { id: 'india', label: 'India' },
]

const regionSections = [
  { id: 'americas', title: 'Americas' },
  { id: 'apac', title: 'APAC' },
  { id: 'china', title: 'China' },
  { id: 'emea', title: 'EMEA' },
  { id: 'india', title: 'India' },
]

const VISIBLE_CARDS = 3

function RegionCarousel({ cards }) {
  const [offset, setOffset] = useState(0)
  const canPrev = offset > 0
  const canNext = offset + VISIBLE_CARDS < cards.length

  return (
    <div className="rd-carousel">
      <div className="rd-carousel-header">
        <div className="rd-carousel-nav">
          <button
            type="button"
            className="rd-carousel-btn"
            aria-label="Previous articles"
            disabled={!canPrev}
            onClick={() => setOffset((value) => Math.max(0, value - 1))}
          >
            ‹
          </button>
          <button
            type="button"
            className="rd-carousel-btn"
            aria-label="Next articles"
            disabled={!canNext}
            onClick={() =>
              setOffset((value) => Math.min(cards.length - VISIBLE_CARDS, value + 1))
            }
          >
            ›
          </button>
        </div>
      </div>
      <div className="rd-carousel-viewport">
        <div
          className="rd-carousel-track"
          style={{ transform: `translateX(-${offset * (100 / VISIBLE_CARDS)}%)` }}
        >
          {cards.map((card) => (
            <article key={card.title} className="rd-card">
              <a href={card.href} className="rd-card-image" target="_blank" rel="noreferrer">
                <img src={corpImg(card.image.replace(/^\//, ''))} alt="" loading="lazy" />
              </a>
              <div className="rd-card-body">
                <h3>
                  <a href={card.href} target="_blank" rel="noreferrer">
                    {card.title}
                  </a>
                </h3>
                {card.summary ? <p>{card.summary}</p> : null}
                <a href={card.href} target="_blank" rel="noreferrer" className="corp-btn corp-btn-solid">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function RegionalDossiersPage() {
  return (
    <SiteLayout activeSubNav="In focus" headerVariant="corporates" footerVariant="corporates">
      <main className="rd-page">
        <section className="rd-hero" aria-label="Regional dossiers">
          <img className="rd-hero-image" src={heroImage} alt="" />
          <div className="rd-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper rd-hero-content">
            <h1>Regional dossiers</h1>
          </div>
        </section>

        <div className="cms-content-wrapper rd-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/in-focus/focus-topics">In focus</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Regional dossiers
            </span>
          </nav>

          <p className="rd-lead">
            The world of corporate banking is diverse and complex, with each region presenting its
            own specific issues and challenges
          </p>

          <div className="rd-intro">
            <p>
              Our user-friendly regional dossiers gather together the best of our articles under the
              following six sections:
            </p>
            <ul className="rd-region-list">
              {regionNav.map((item) => (
                <li key={item.label}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {regionSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="rd-region"
            aria-label={section.title}
          >
            <div className="cms-content-wrapper">
              <h2 className="rd-region-title">{section.title}</h2>
              <RegionCarousel cards={regionalData[section.title]} />
            </div>
          </section>
        ))}
      </main>
    </SiteLayout>
  )
}
