import { SiteLayout } from '../components/Layout'
import { ResearchShell } from '../components/ResearchShell'
import '../Research.css'

const riImg = (num, ratio = '16_9', ext = 'jpg') =>
  `https://www.dbresearch.com/PROD/IE-PROD/PROD${String(num).padStart(16, '0')}.GAL_IMG_${ratio}.${ext}`

const germanyArticles = [
  {
    id: '628964',
    topic: 'Politics & Policy',
    date: 'May 26, 2026',
    title: 'In the Shadow of Fiscal Expansion: A Chartbook',
    excerpt:
      'The municipalities are in a major budgetary crisis, which escalated in 2025. In this chartbook, we highlight the structural causes and discuss potential solutions.',
    tag: 'Germany',
  },
  {
    id: '624590',
    topic: 'Macro',
    date: 'April 21, 2026',
    title: "Germany's Automotive Transition: A Chartbook",
    excerpt:
      'Germany as an automotive location and the German automotive industry have been challenged by cyclical headwinds and massive structural changes in recent years.',
    tag: 'Germany',
  },
  {
    id: '621543',
    topic: 'Macro',
    date: 'January 27, 2026',
    title: 'More tempo - a catalyst for faster infrastructure spending is in the making',
    excerpt:
      "Germany's historical fiscal regime change has been live since October. Now, a new law promises to act as a catalyst for faster infrastructure spending.",
    tag: 'Germany',
  },
  {
    id: '610852',
    topic: 'Industry & Energy',
    date: 'November 19, 2025',
    title: 'Industrial power price: Short-term relief rather than a cure',
    excerpt:
      'The German government has agreed to introduce an industrial electricity price starting in 2026. The target price is to be 5 cents per kilowatt-hour for half of the electricity consumption.',
    tag: 'Germany',
  },
]

const featuredArticles = [
  {
    id: '632165',
    ext: 'png',
    topic: 'Macro',
    date: 'July 1, 2026',
    title: 'I, robot... you, unemployed: How workers are responding to AI fears',
    excerpt:
      'The AI paradox: Our survey shows that workers fearing job loss are surprisingly spending more and proactively upskilling.',
    tag: 'Featured Research',
  },
  {
    id: '632122',
    ext: 'png',
    topic: 'Technology',
    date: 'July 1, 2026',
    title: "AI IPOs 101: why they'll change the boom forever",
    excerpt:
      'Four reasons why the expected IPOs of OpenAI and Anthropic matter so much to the companies themselves, the industry and the AI boom.',
    tag: 'Featured Research',
  },
  {
    id: '632059',
    ext: 'png',
    topic: 'Macro',
    date: 'June 30, 2026',
    title: "FIFA World Cup: What economics sees that fans don't",
    excerpt:
      'The World Cup is more than football: it is a live economics lab where scarcity, emotion, incentives, data, and money reprice in real time.',
    tag: 'Featured Research',
  },
  {
    id: '632129',
    ext: 'png',
    topic: 'Geopolitics',
    date: 'July 1, 2026',
    title: 'This Month in Geopolitics: July 2026',
    excerpt:
      'Get ready for July 2026! Our geopolitical outlook unpacks UK leadership, NATO shifts, escalating trade wars, Iran talks, and tariffs.',
    tag: 'Featured Research',
  },
  {
    id: '632164',
    ext: 'png',
    topic: 'Technology',
    date: 'July 1, 2026',
    title: 'Q2 Tech Performance Review: Memory Wins, Chips Dominate',
    excerpt: 'We round up tech equities performance and wider trends in Q2.',
    tag: 'Featured Research',
  },
]

const gridArticles = [...germanyArticles, ...featuredArticles]

function ResearchCard({ article, large = false }) {
  const ext = article.ext || 'jpg'
  return (
    <article className={`research-card${large ? ' research-card--large' : ''}`}>
      <a href="#" className="research-card-link">
        <div className="research-card-image">
          <img src={riImg(article.id, large ? '32_9' : '16_9', ext)} alt="" />
          <span className="research-card-tag">{article.tag}</span>
        </div>
        <div className="research-card-body">
          <p className="research-card-meta">
            <span className="research-card-topic">{article.topic}</span>
            <span className="research-card-meta-sep">|</span>
            <span className="research-card-date">{article.date}</span>
          </p>
          <h3>{article.title}</h3>
          {article.excerpt && <p>{article.excerpt}</p>}
        </div>
      </a>
    </article>
  )
}

function ChartSvg() {
  return (
    <svg className="research-chart-svg" viewBox="0 0 1022 527" aria-hidden="true">
      <rect width="1022" height="527" fill="#fafbfc" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1="60" y1={60 + i * 75} x2="980" y2={60 + i * 75} stroke="#e8edf2" strokeWidth="1" />
      ))}
      <polyline
        fill="none"
        stroke="#1e2a78"
        strokeWidth="3"
        points="60,380 140,340 220,360 300,280 380,300 460,200 540,230 620,160 700,180 780,120 860,140 940,90"
      />
      <polyline
        fill="none"
        stroke="#7ba3d4"
        strokeWidth="2.5"
        points="60,400 140,370 220,350 300,320 380,330 460,260 540,280 620,220 700,240 780,190 860,200 940,160"
      />
      <rect x="560" y="100" width="180" height="110" fill="none" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
    </svg>
  )
}

function MoreButton({ children, align }) {
  return (
    <div className={`research-more-wrap${align ? ` research-more-wrap--${align}` : ''}`}>
      <a href="#" className="research-round-btn">{children}</a>
    </div>
  )
}

function PlayIcon() {
  return (
    <span className="research-media-play" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 14.5v-9l7 4.5-7 4.5z" />
      </svg>
    </span>
  )
}

function ResearchMediaCard({ title, date, imageId, action, pubType, pubVariant }) {
  return (
    <article className="research-media-card">
      <h3 className="research-media-title">{title}</h3>
      <p className="research-media-date">{date}</p>
      <div className="research-media-banner">
        <img src={riImg(imageId)} alt="" />
      </div>
      <div className={`research-media-footer research-media-footer--${pubVariant}`}>
        <button type="button" className="research-media-btn">
          <PlayIcon />
          {action}
        </button>
        <div className={`research-media-pub-wrap research-media-pub-wrap--${pubVariant}`}>
          <span className="research-media-pub">{pubType}</span>
        </div>
      </div>
    </article>
  )
}

export default function ResearchPage() {
  return (
    <SiteLayout activeUtility="Research" footerVariant="research">
      <main className="research-page">
        <ResearchShell activeNav="Home">
        <div className="cms-content-wrapper research-ipl-grid">
          <section className="research-spotlights" aria-label="Featured research">
            <div className="research-spotlights-row">
              <div className="research-spotlight-col">
                <ResearchCard
                  large
                  article={{
                    id: '631547',
                    topic: 'Macro',
                    date: 'June 24, 2026',
                    title: 'US at 250 – Why has the US been so successful and can it continue?',
                    excerpt:
                      'To mark the 250 year anniversary of US independence, we explore how the US emerged as a global superpower, and why it is likely to remain one despite new challenges.',
                    tag: 'Featured Research',
                  }}
                />
                <MoreButton>More Featured Research</MoreButton>
              </div>

              <div className="research-spotlight-col">
                <article className="research-card research-card--audio">
                  <a href="#" className="research-card-link">
                    <div className="research-card-image">
                      <img src={riImg('631438')} alt="" />
                      <span className="research-card-tag">Rate Check</span>
                    </div>
                    <div className="research-card-body">
                      <p className="research-card-meta">
                        <span className="research-card-topic">Macro</span>
                        <span className="research-card-meta-sep">|</span>
                        <span className="research-card-date">June 23, 2026</span>
                      </p>
                      <h3>Markets after the US-Iran deal and the Fed</h3>
                    </div>
                  </a>
                </article>
                <MoreButton>More Expert Voices</MoreButton>
              </div>
            </div>
          </section>

          <div className="research-divider" aria-hidden="true" />

          <section className="research-cotd-row" aria-label="German research and chart">
            <div className="research-cotd-col">
              <ResearchCard
                article={{
                  id: '628484',
                  topic: 'Macro',
                  date: 'May 20, 2026',
                  title: 'Stepping up trade defences against China',
                  excerpt:
                    'The growing bilateral EU-China trade deficit is symptomatic of the "second China shock" hitting the EU manufacturing sector and will reinforce calls for the EU to step up its trade defences against China.',
                  tag: 'Germany',
                }}
              />
              <MoreButton align="left">More German Research</MoreButton>
            </div>

            <div className="research-cotd-col">
              <div className="research-cotd-shadow">
                <p className="research-cotd-head">
                  <span className="research-cotd-cat">Macro</span>
                  <span className="research-cotd-sep">|</span>
                  <span className="research-cotd-date">July 2, 2026</span>
                </p>
                <h2 className="research-cotd-title">
                  <a href="#">Chart of The Day: Happy Quarter of a Millennium</a>
                </h2>
                <p className="research-cotd-lead">
                  The US has resumed its productivity outperformance in recent years
                </p>
                <ChartSvg />
                <p className="research-cotd-source">
                  Source: Deutsche Bank Research, www.longtermproductivity.com
                </p>
                <p className="research-cotd-note">
                  Note: Rest of G7 is the simple average of Canada, France, Germany, Italy, Japan and the UK
                </p>
                <span className="research-cotd-corner">Chart of The Day</span>
              </div>
              <MoreButton align="right">More Charts of The Day</MoreButton>
            </div>
          </section>

          <div className="research-divider" aria-hidden="true" />

          <section className="research-grid-section" aria-label="Research articles">
            <div className="research-article-grid">
              {gridArticles.map((article) => (
                <ResearchCard key={article.id} article={article} />
              ))}
            </div>
            <div className="research-grid-buttons">
              <MoreButton align="left">Germany</MoreButton>
              <MoreButton align="right">Featured Research</MoreButton>
            </div>
          </section>
        </div>

        <section className="research-media" aria-label="Videos and webinars">
          <div className="cms-content-wrapper">
            <div className="research-media-grid">
              <ResearchMediaCard
                title="AI in Financial Services"
                date="June 8, 2026"
                imageId="630194"
                action="Watch video"
                pubType="dbInsights"
                pubVariant="insights"
              />
              <ResearchMediaCard
                title="dbAccess European Champions Conference"
                date="June 2, 2026"
                imageId="629649"
                action="Play audio"
                pubType="Podzept"
                pubVariant="podzept"
              />
            </div>
            <MoreButton>More Expert Voices</MoreButton>
          </div>
        </section>
        </ResearchShell>
      </main>
    </SiteLayout>
  )
}
