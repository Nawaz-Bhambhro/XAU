const researchNavItems = [
  { label: 'Home', to: '/research' },
  { label: 'Macro', to: '#' },
  { label: 'Germany', to: '#' },
  { label: 'Technology', to: '#' },
  { label: 'Geopolitics', to: '#' },
  { label: 'Corporate Landscape', to: '#' },
  { label: 'Expert Voices', to: '#' },
  { label: 'Subscribe', to: '#' },
]

export function ResearchShell({ activeNav = 'Home', children }) {
  return (
    <>
      <div className="reweb-header-image" aria-label="Deutsche Bank Research Institute">
        <div className="cms-content-wrapper reweb-header-text">
          <div className="reweb-header-text-inner">
            <div className="rhti1">Deutsche Bank Research Institute</div>
            <div className="rhti2">Bringing the world to Europe and Europe to the world</div>
          </div>
        </div>
      </div>

      <nav className="research-subnav" aria-label="Research navigation">
        <div className="cms-content-wrapper research-subnav-inner">
          <ul>
            {researchNavItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.to}
                  className={activeNav === item.label ? 'active' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="research-subnav-actions">
            <a href="#" className="research-portal-btn">
              <span>
                Deutsche Bank Research
                <br />
                Client Portal
              </span>
            </a>
            <button type="button" className="research-search-btn" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="cms-content-wrapper research-breadcrumb">
        You are here: <a href="/research">Home</a>
      </div>

      {children}
    </>
  )
}
