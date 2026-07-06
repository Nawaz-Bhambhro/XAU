import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path.replace(/^\//, '')}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/0f6e745d-db30-4e0d-a60c-c6883318a5bf/fileAsset?language_id=1'
  ),
}

const editions = [
  {
    id: '2025-english',
    title: '2025 English',
    image: corpImg(
      'files/images-new/2025/publications/magazines/namaste-india/Namaste-India-2025-cover.JPG?language_id=1'
    ),
    href: '/publications/magazines/namaste-india/2025/english',
    external: true,
  },
  {
    id: '2024-english',
    title: '2024 English',
    image: corpImg(
      'files/images-new/2024/publications/magazines/namaste-india/Namaste-India-2024-cover.JPG?language_id=1'
    ),
    href: '/publications/magazines/namaste-india/2024/english',
    external: true,
  },
  {
    id: '2023-english',
    title: '2023 English',
    image: corpImg('files/images-new/2023/publications/Namaste-India-2023-EN-cover.jpg?language_id=1'),
    href: '/publications/magazines/namaste-india/2023/english',
    external: true,
  },
  {
    id: '2022-english',
    title: '2022 English',
    image: corpImg(
      'files/images-new/publications/nameste-india/Namaste_India_2022.png?language_id=1'
    ),
    href: '/publications/magazines/namaste-india/2022/english',
    external: true,
  },
  {
    id: '2021-english',
    title: '2021 English',
    image: corpImg('files/images-new/publications/nameste-india/Namaste_India_2021.jpg?language_id=1'),
    href: '/publications/magazines/namaste-india/2021/english',
    external: true,
  },
  {
    id: '2021-japanese',
    title: '2021 Japanese',
    image: corpImg(
      'files/images-new/publications/nameste-india/namaste-india-2021-japanese-cover.jpg'
    ),
    href: '/publications/magazines/namaste-india/2021/japanese',
    external: true,
  },
  {
    id: '2020-english',
    title: '2020 English',
    image: corpImg('files/images-new/publications/nameste-india/Nameste_India_2020.jpg?language_id=1'),
    href: corpImg('files/documents/namaste-India/Namaste_India_2020.pdf'),
    external: true,
  },
  {
    id: '2020-japanese',
    title: '2020 Japanese',
    image: corpImg(
      'files/images-new/publications/nameste-india/nameste-india-2020-final-japanese.jpg?language_id=1'
    ),
    href: corpImg('files/documents/namaste-India/Namaste India 2020 Final JP.PDF'),
    external: true,
  },
  {
    id: '2020-korean',
    title: '2020 Korean',
    image: corpImg(
      'files/images-new/publications/nameste-india/nameste-india-2020-final-korean.jpg?language_id=1'
    ),
    href: corpImg('files/documents/namaste-India/Namaste India 2020 Final KO.PDF'),
    external: true,
  },
  {
    id: '2019-english',
    title: '2019 English',
    image: corpImg(
      'files/images-new/publications/nameste-india/Namaste_India_2019_English.png?language_id=1'
    ),
    href: corpImg('files/documents/namaste-India/Namaste India 2019.pdf'),
    external: true,
  },
  {
    id: '2019-japanese',
    title: '2019 Japanese',
    image: corpImg(
      'files/images-new/publications/nameste-india/Namaste_India_2019_Japanese.jpg?language_id=1'
    ),
    href: corpImg('files/documents/namaste-India/Namaste-India-2019-Japanese.pdf'),
    external: true,
  },
  {
    id: '2019-korean',
    title: '2019 Korean',
    image: corpImg(
      'files/images-new/publications/nameste-india/Namaste_India_2019_Korean.jpg?language_id=1'
    ),
    href: corpImg('files/documents/namaste-India/Namaste India_2019 (Korean).pdf'),
    external: true,
  },
  {
    id: '2018-english',
    title: '2018 English',
    image: corpImg('files/images-new/publications/nameste-india/Namaste_India_2018.jpg?language_id=1'),
    href: corpImg('files/documents/namaste-India/Namaste India 2018.pdf'),
    external: true,
  },
  {
    id: '2018-japanese',
    title: '2018 Japanese',
    image: corpImg(
      'files/images-new/publications/nameste-india/Namaste_India_2018_Japanese.jpg?language_id=1'
    ),
    href: corpImg('files/documents/namaste-India/Namaste_India_2018_Japanese.pdf'),
    external: true,
  },
  {
    id: '2017-english',
    title: '2017 English',
    image: corpImg('files/images-new/publications/nameste-india/Namaste_India_2017.jpg?language_id=1'),
    href: corpImg('files/documents/namaste-India/Namaste India 2017.pdf'),
    external: true,
  },
  {
    id: '2017-japanese',
    title: '2017 Japanese',
    image: corpImg(
      'files/images-new/publications/nameste-india/Namaste_India_2017_Japanese.jpg?language_id=1'
    ),
    href: corpImg('files/documents/namaste-India/Namaste India 2017 Japanese.pdf'),
    external: true,
  },
  {
    id: '2016-english',
    title: '2016 English',
    image: corpImg('files/images-new/publications/nameste-india/Namaste_India_2016.jpg?language_id=1'),
    href: corpImg('files/documents/namaste-India/Namaste India - 2016.pdf'),
    external: true,
  },
  {
    id: '2016-japanese',
    title: '2016 Japanese',
    image: corpImg(
      'files/images-new/publications/nameste-india/Namaste_India_2016_Japanese.jpg?language_id=1'
    ),
    href: corpImg('files/documents/namaste-India/Namaste India 2016 Japanese version.pdf'),
    external: true,
  },
  {
    id: '2015-english',
    title: '2015 English',
    image: corpImg('files/images-new/publications/nameste-india/Namaste_India_2015.png?language_id=1'),
    href: corpImg('files/documents/namaste-India/Namaste India 2015.pdf'),
    external: true,
  },
  {
    id: '2014-english',
    title: '2014 English',
    image: corpImg(
      'files/images-new/publications/nameste-india/Namaste_India_Edition_2014.jpg?language_id=1'
    ),
    href: corpImg('files/documents/namaste-India/Book_NamasteIndia_Edition2014.pdf'),
    external: true,
  },
]

function editionLink(edition) {
  if (edition.href.startsWith('http')) return edition.href
  return `https://corporates.db.com${edition.href}`
}

export default function NamasteIndiaGuidePage() {
  return (
    <SiteLayout activeSubNav="Publications" headerVariant="corporates" footerVariant="corporates">
      <main className="ni-page">
        <section className="ni-hero" aria-label="Namaste India">
          <img className="ni-hero-image" src={images.hero} alt="" />
          <div className="ni-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper ni-hero-content">
            <h1>Namaste India</h1>
            <p>The comprehensive guide for professionals investing in India</p>
          </div>
        </section>

        <div className="cms-content-wrapper ni-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/publications/magazines">Publications</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/publications/magazines">Magazines</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Namaste India guide
            </span>
          </nav>
        </div>

        <section className="ni-editions" aria-label="Namaste India editions">
          <div className="cms-content-wrapper ni-editions-grid">
            {editions.map((edition) => (
              <article key={edition.id} className="ni-edition-card">
                <h2 className="ni-edition-title">{edition.title}</h2>
                <a
                  href={editionLink(edition)}
                  className="ni-edition-link"
                  title={edition.title}
                  {...(edition.external
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  <img
                    className="ni-edition-cover"
                    src={edition.image}
                    alt={edition.title}
                    loading="lazy"
                  />
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
