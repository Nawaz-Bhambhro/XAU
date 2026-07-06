import { useMemo, useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Locations.css'

const globeImage =
  'https://country.db.com/contentAsset/image/3b8cbf35-91e3-459b-a65f-6c4f48f64eec/fileAsset/filter/Resize,Jpeg/resize_w/1280/8f56b107-aa36-4883-b34e-1e97deb0f195l.jpg'

const marketRegions = [
  {
    title: 'Europe',
    countries: [
      'Zurich',
      'London',
      'Vienna',
      'Luxembourg',
      'Frankfurt',
      'Paris',
      'Istanbul',
    ],
  },
  {
    title: 'Middle East',
    countries: ['Dubai'],
  },
  {
    title: 'Asia-Pacific',
    countries: ['Hong Kong', 'Singapore'],
  },
  {
    title: 'Americas',
    countries: ['New York'],
  },
]

const allCountries = marketRegions.flatMap((region) => {
  if (region.countries) return region.countries
  return region.columns.flat()
})

function CountryList({ countries }) {
  return (
    <ul className="loc-country-list">
      {countries.map((country) => (
        <li key={country}>
          <a href="#">{country}</a>
        </li>
      ))}
    </ul>
  )
}

export default function LocationsPage() {
  const [query, setQuery] = useState('')
  const [azView, setAzView] = useState(false)

  const filteredAz = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return [...allCountries]
      .filter((country) => !normalized || country.toLowerCase().includes(normalized))
      .sort((a, b) => a.localeCompare(b))
  }, [query])

  const filteredRegions = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return marketRegions

    return marketRegions
      .map((region) => {
        if (region.countries) {
          const countries = region.countries.filter((country) =>
            country.toLowerCase().includes(normalized)
          )
          return countries.length ? { ...region, countries } : null
        }

        const columns = region.columns
          .map((column) => column.filter((country) => country.toLowerCase().includes(normalized)))
          .filter((column) => column.length > 0)

        return columns.length ? { ...region, columns } : null
      })
      .filter(Boolean)
  }, [query])

  const hasResults = azView ? filteredAz.length > 0 : filteredRegions.length > 0

  return (
    <SiteLayout headerVariant="locations" footerVariant="locations">
      <main className="locations-page">
        <div className="cms-content-wrapper">
          <h1 className="loc-title">Global network</h1>

          <section className="loc-intro" aria-label="Global network overview">
            <div className="loc-intro-text">
              <h2 className="loc-intro-heading">
                Global financial services across 11 offices worldwide
              </h2>
              <p>
                Against a backdrop of increasing globalisation, XAU Global is{' '}
                <a href="#">well-positioned</a> with a network spanning Europe, the Middle East,
                Asia-Pacific and the Americas — delivering gold-backed finance, project development
                and digital asset management.
              </p>
              <p>
                XAU Global has established strong bases in all major financial centres, with offices
                in Zurich, Dubai, London, New York, Hong Kong, Singapore, Vienna, Luxembourg,
                Frankfurt, Paris and Istanbul.
              </p>
              <p>
                Our global presence enables us to serve governments, institutions and private
                clients with integrated solutions across the{' '}
                <a href="/products-and-services">X.A.U financial ecosystem</a>, from land capital and
                project finance to Swiss vault custody and the K.ULLAS digital platform.
              </p>
            </div>
            <figure className="loc-intro-image">
              <img src={globeImage} alt="Global network globe sculpture" />
            </figure>
          </section>

          <section className="loc-markets" aria-label="Markets">
            <h2 className="loc-markets-title">Global offices of XAU Global:</h2>

            <div className="loc-search-row">
              <div className="loc-search-field">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder=""
                  aria-label="Search locations"
                />
                <span className="loc-search-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <button
                type="button"
                className={`loc-az-btn${azView ? ' active' : ''}`}
                onClick={() => setAzView((view) => !view)}
              >
                A - Z
              </button>
            </div>

            {!hasResults && <p className="loc-no-results">No results</p>}

            {azView ? (
              <div className="loc-az-grid">
                <CountryList countries={filteredAz} />
              </div>
            ) : (
              <div className="loc-regions-grid">
                {filteredRegions.map((region) => (
                  <section key={region.title} className="loc-region">
                    <h3>{region.title}</h3>
                    {region.countries ? (
                      <CountryList countries={region.countries} />
                    ) : (
                      <div
                        className={`loc-region-columns loc-region-columns-${region.columns.length}`}
                      >
                        {region.columns.map((column, index) => (
                          <CountryList key={`${region.title}-${index}`} countries={column} />
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </SiteLayout>
  )
}
