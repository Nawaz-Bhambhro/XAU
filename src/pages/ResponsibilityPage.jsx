import { SiteLayout } from '../components/Layout'
import '../Responsibility.css'

const dbImg = (assetId, fileId, width = 640) =>
  `https://www.db.com/contentAsset/image/${assetId}/fileAsset/filter/Resize,Jpeg/resize_w/${width}/${fileId}.jpg`

const pillars = [
  {
    title: 'Sustainability',
    image: dbImg('3f409bca-b584-49e5-b273-c7990b72064d', '7c3a4ea2-4815-4c09-88a1-08671a713028s'),
    paragraphs: [
      'Deutsche Bank aspires to contribute to an environmentally sound, socially inclusive and well-governed world.',
      'With its financial expertise and product offerings, the bank wants to enable the path to a more sustainable way of conducting business.',
    ],
  },
  {
    title: 'Society',
    image: dbImg('85920a4e-5ced-4299-843b-ad7bdb8fa46e', '69c173d1-3509-41a3-be96-929155385331s'),
    paragraphs: [
      "We're not just a part of communities – we play an active role in helping to shape them. Wherever we are in the world, we create a culture of giving.",
      "Whether it's through education or environmental conservation, by delivering basic needs or finding long-term solutions, we are passionate about making a difference.",
    ],
  },
  {
    title: 'Art & Culture',
    image: dbImg('f7dbc92e-3666-4304-b0c6-10c81b526fab', 'dfb7660c-7b14-4955-9351-78e65ae674abs'),
    paragraphs: [
      'Promoting art & culture means helping to shape our society, to give it new impetus and enabling people to have unforgettable experiences.',
      'Art works inspire people to engage with the present and helps them develop creative ideas for the future. Culture inspires – across borders.',
    ],
  },
  {
    title: 'Sports',
    image: dbImg('9068bf4e-d553-458e-b9c5-05f3ca0823bb', '8080017d-d16c-4ab5-b4ed-089549be06dcs'),
    paragraphs: [
      'Deutsche Bank is a longtime sponsor of competitive sports and helps talented athletes combine sports and an education.',
      'Sports connect people across borders and motivate them to be fair and perform to the best of their ability, regardless of the discipline.',
    ],
  },
]

const newsItems = [
  {
    meta: 'Media Release | June 4, 2026',
    title: "Deutsche Bank celebrates 20 years of partnership with Shakespeare's Globe",
  },
  {
    meta: 'Media Release | June 3, 2026',
    title: 'Deutsche Bank recognised for LGBTQ+ inclusion in Australia and Europe',
  },
  {
    meta: 'Media Release | May 19, 2026',
    title:
      'Deutsche Bank and the Sutton Trust launch research on widening access for young people in banking and finance',
  },
  {
    meta: 'Media Release | May 6, 2026',
    title: 'Deutsche Bank sets new implementation timeline for its thermal coal guideline',
  },
]

export default function ResponsibilityPage() {
  return (
    <SiteLayout activeSubNav="Who we are" activeUtility="Responsibility">
      <main className="responsibility-page">
        <section className="resp-hero" aria-label="Corporate Social Responsibility">
          <div className="resp-hero-pattern" aria-hidden="true" />
          <div className="cms-content-wrapper resp-hero-content">
            <h1 className="resp-hero-title">
              Dedicated to the society of today and generations of tomorrow
            </h1>
          </div>
        </section>

        <div className="cms-content-wrapper">
          <nav className="resp-breadcrumb" aria-label="Breadcrumb">
            You are here:
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/">Who we are</a>
            <span aria-hidden="true">&gt;</span>
            <span className="resp-breadcrumb-current" aria-current="page">Responsibility</span>
          </nav>

          <h2 className="resp-page-title">Corporate Social Responsibility</h2>

          <section className="resp-pillars" aria-label="Responsibility pillars">
            <div className="resp-pillars-grid">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="resp-pillar-card">
                  <div className="resp-pillar-image">
                    <img src={pillar.image} alt="" />
                  </div>
                  <div className="resp-pillar-body">
                    <h3>{pillar.title}</h3>
                    {pillar.paragraphs.map((text) => (
                      <p key={text.slice(0, 40)}>{text}</p>
                    ))}
                    <a href="#" className="resp-pillar-btn">{pillar.title}</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="resp-news-reports" aria-label="News and reports">
            <div className="resp-news-col">
              <ul className="resp-news-list">
                {newsItems.map((item) => (
                  <li key={item.title}>
                    <a href="#" className="resp-news-item">
                      <span className="resp-news-meta">{item.meta}</span>
                      <span className="resp-news-title">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#" className="resp-btn resp-btn-primary">all responsibility news</a>
            </div>

            <aside className="resp-reports-col">
              <div className="resp-reports-image">
                <img
                  src={dbImg('8418340a-e570-4aec-a50c-f9bc4c7ce18b', '3d2595cd-d0e7-4159-902a-4156a148deedl', 1280)}
                  alt=""
                />
              </div>
              <h3 className="resp-reports-title">Sustainability reports</h3>
              <a href="#" className="resp-btn resp-btn-primary">to the reports</a>
            </aside>
          </section>
        </div>
      </main>
    </SiteLayout>
  )
}
