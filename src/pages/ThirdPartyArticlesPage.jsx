import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path.replace(/^\//, '')}`

const heroImage = corpImg(
  'contentAsset/raw-data/da462f3b-2696-4f5b-bc96-68e337ef277a/fileAsset?language_id=1'
)

const articles = [
  {
    id: 'fc-barcelona',
    title: 'Who has the cure for FC Barcelona?',
    text: "When one of the world's most iconic football clubs was on the brink of financial collapse, it wasn't a banker or a career sports executive who stepped in—it was a psychiatrist. In this fascinating conversation, Ferran Olivé, treasurer of FC Barcelona, shares how he helped steer the club out of crisis and into a bold new era of financial strategy, digital innovation, and long-term vision. From balancing budgets to rebuilding Camp Nou, this is the story of calm under pressure—on and off the pitch.",
    href: 'https://events.economist.com/global-treasury-leaders/wp-content/uploads/sites/93/2025/04/Barcelona-FC-3-1.pdf',
  },
  {
    id: 'bmw-treasury',
    title: "Who drives BMW's treasury?",
    text: "Ritu Chandy, the woman behind the wheel of BMW's treasury and investor relations, shares her career journey and insights on navigating treasury priorities for a global company with Mariel Barclay, Editor of the Economist Impact's Global Treasury Leaders Series.",
    href: 'https://cdn.ymaws.com/eurofinancectn.com/resource/resmgr/docs/bmw_treasury.pdf',
  },
  {
    id: 'cash-repatriation',
    title: 'From risk to reward: how treasurers manage cash repatriation in restricted markets',
    text: 'Treasurers face significant challenges with cash repatriation in restricted markets, navigating complex regulations and economic uncertainties. Corporate treasures shared with Economist Impact their strategies for proactive planning, effective risk management, and enhancing financial resilience in these environments',
    href: 'https://bit.ly/risktoreward',
  },
  {
    id: 'ecommerce',
    title: "Treasury's role in redefining e-commerce: Revolutionising the digital marketplace",
    text: 'Treasury teams are central to the success of digital marketplaces, navigating complex challenges like cash flow management, FX risks, data security and payment service provider relationships. Under Armour, BMW of North America, and British American Tobacco share with Economist Impact how they are driving innovation and improving customer experiences in this rapidly evolving space',
    href: 'https://www.eurofinance.com/news/treasurys-role-in-redefining-e-commerce-revolutionising-the-digital-marketplace/',
  },
  {
    id: 'anita-mehra',
    title: "Anita Mehra's recipe for life at the top of treasury",
    text: "Anita Mehra, Microsoft's Corporate VP of global treasury and financial services, exemplifies the dynamic role of treasury leaders in today's fast-paced financial environment. As she navigates the complexities of managing a $65 billion of debt and an investment portfolio exceeding $130 billion, her insights into leadership, innovation, and mentorship are invaluable. In a conversation with Economist Impact, Mehta discusses her journey from academia to the pinnacle of treasury",
    href: 'https://bit.ly/microsofttreasury',
  },
]

const VISIBLE_CARDS = 3

function ArticleCarousel() {
  const [offset, setOffset] = useState(0)
  const canPrev = offset > 0
  const canNext = offset + VISIBLE_CARDS < articles.length

  return (
    <div className="tpa-carousel">
      <div className="tpa-carousel-layout">
        <div className="tpa-carousel-viewport">
          <div
            className="tpa-carousel-track"
            style={{ transform: `translateX(-${offset * (100 / VISIBLE_CARDS)}%)` }}
          >
            {articles.map((article) => (
              <article key={article.id} className="tpa-article-card">
                <h2 className="tpa-article-title">
                  <a href={article.href} target="_blank" rel="noreferrer" title={article.title}>
                    {article.title}
                  </a>
                </h2>
                <p className="tpa-article-text">{article.text}</p>
                <a
                  href={article.href}
                  className="corp-btn corp-btn-solid tpa-article-btn"
                  target="_blank"
                  rel="noreferrer"
                  title={article.title}
                >
                  More
                </a>
              </article>
            ))}
          </div>
        </div>
        <div className="tpa-carousel-nav" aria-label="Article carousel navigation">
          <button
            type="button"
            className="tpa-carousel-btn"
            aria-label="Previous slide item"
            disabled={!canPrev}
            onClick={() => setOffset((value) => Math.max(0, value - 1))}
          >
            ‹
          </button>
          <button
            type="button"
            className="tpa-carousel-btn"
            aria-label="Next slide item"
            disabled={!canNext}
            onClick={() =>
              setOffset((value) => Math.min(articles.length - VISIBLE_CARDS, value + 1))
            }
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ThirdPartyArticlesPage() {
  return (
    <SiteLayout activeSubNav="Publications" headerVariant="corporates" footerVariant="corporates">
      <main className="tpa-page">
        <section className="tpa-hero" aria-label="Third-party articles">
          <img className="tpa-hero-image" src={heroImage} alt="" />
          <div className="tpa-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper tpa-hero-content">
            <h1>Third-party articles</h1>
          </div>
        </section>

        <div className="cms-content-wrapper tpa-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/publications/magazines">Publications</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Third-party articles
            </span>
          </nav>

          <div className="tpa-intro">
            <p>
              The award-winning &ldquo;Global Treasury Leaders&rdquo; programme with The Economist
              has been highly successful in convening, and engaging with, key group treasurers of
              large-sized corporations around the world with a compelling series of events and
              content. It consists of different digital and analog formats that deal with relevant
              treasury topics. Treasurers are hereby offered a platform for insights and discussion.
            </p>
          </div>

          <h2 className="tpa-subheading">Find all articles which have been published here.</h2>
        </div>

        <section className="tpa-carousel-section" aria-label="Published articles">
          <div className="cms-content-wrapper">
            <ArticleCarousel />
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
