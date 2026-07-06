import { SiteLayout } from '../components/Layout'
import '../ClientLogins.css'

const loginColumns = [
  {
    title: 'Investor onboarding',
    links: [
      { label: 'Onboarding portal login', href: '#' },
      { label: 'KYC document submission', href: '#' },
      { label: 'Due diligence checklist', href: '#' },
      { label: 'Identity verification', href: '#' },
      { label: 'Accredited investor registration', href: '#' },
      { label: 'Memorandum access request', href: '#' },
      { label: 'Application status tracker', href: '#' },
    ],
  },
  {
    title: 'Client portals',
    links: [
      { label: 'K.ULLAS digital wallet', href: '#' },
      { label: 'Gold vault dashboard', href: '#' },
      { label: 'X.A.U payment cards', href: '#' },
      { label: 'Portfolio analytics', href: '#' },
      { label: 'Project milestone tracker', href: '#' },
      { label: 'Transaction history', href: '#' },
      { label: 'Account settings', href: '#' },
    ],
  },
  {
    title: 'Project finance',
    links: [
      { label: 'Land Capital portal', href: '/private-bank' },
      { label: 'Project submission portal', href: '#' },
      { label: 'Structured development login', href: '#' },
      { label: 'Capital deployment dashboard', href: '#' },
      { label: 'Government partnership portal', href: '#' },
      { label: 'Institutional project access', href: '#' },
    ],
  },
  {
    title: 'Partner access',
    links: [
      { label: 'Sovereign partnership login', href: '#' },
      { label: 'Institutional investor portal', href: '#' },
      { label: 'DWS asset management login', href: '/dws' },
      { label: 'Swiss vault custody portal', href: '#' },
      { label: 'Developer partner access', href: '#' },
      { label: 'Global office login', href: '/global-office-login' },
    ],
  },
]

export default function ClientLoginsPage() {
  return (
    <SiteLayout activeSubNav="What we do" headerVariant="client-logins">
      <main className="client-logins-page">
        <div className="cms-content-wrapper">
          <nav className="cl-breadcrumb" aria-label="Breadcrumb">
            You are here:
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/products-and-services">What we do</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/products-and-services">Products and services</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cl-breadcrumb-current" aria-current="page">
              Client logins
            </span>
          </nav>

          <h1 className="cl-title">Client logins</h1>

          <div className="cl-columns">
            {loginColumns.map((column) => (
              <section key={column.title} className="cl-column" aria-labelledby={`cl-col-${column.title}`}>
                <h2 id={`cl-col-${column.title}`}>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
    </SiteLayout>
  )
}
