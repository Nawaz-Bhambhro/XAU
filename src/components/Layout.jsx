import { useState } from 'react'
import '../Corporates.css'

const utilityLinks = [
  { label: 'Media', to: '/media' },
  { label: 'Careers', to: '/careers' },
  { label: 'Investor Relations', to: '/investor-relations' },
  { label: 'Research', to: '/research' },
  { label: 'Responsibility', to: '/responsibility' },
  { label: 'Contact', to: '/research/contact' },
]

const mainNav = [
  { label: 'Deutsche Bank', active: true },
  { label: 'Corporates/Institutions', active: false },
  { label: 'Private Clients', active: false },
  { label: 'Locations', active: false },
  { label: 'Client logins', active: false },
]

const privateBankMainNav = [
  { label: 'Deutsche Bank', active: false },
  { label: 'Corporates/Institutions', active: false },
  { label: 'Private Clients', active: true },
  { label: 'Locations', active: false },
  { label: 'Client logins', active: false },
]

const clientLoginsMainNav = [
  { label: 'Deutsche Bank', active: false },
  { label: 'Corporates/Institutions', active: false },
  { label: 'Private Clients', active: false },
  { label: 'Locations', active: false },
  { label: 'Client logins', active: true },
]

const locationsMainNav = [
  { label: 'Deutsche Bank', active: false },
  { label: 'Corporates/Institutions', active: false },
  { label: 'Private Clients', active: false },
  { label: 'Locations', active: true },
  { label: 'Client logins', active: false },
]

const corporatesMainNav = [
  { label: 'Deutsche Bank', active: false },
  { label: 'Corporates/Institutions', active: true },
  { label: 'Private Clients', active: false },
  { label: 'Locations', active: false },
  { label: 'Client logins', active: false },
]

const corporatesSubNav = [
  { label: 'Clients', to: '/corporates', megaMenu: 'clients' },
  { label: 'Solutions', to: '#', megaMenu: 'solutions' },
  { label: 'In focus', to: '#', megaMenu: 'in-focus' },
  { label: 'Publications', to: '/publications/magazines', megaMenu: 'publications' },
  { label: 'Multimedia', to: '#', megaMenu: 'multimedia' },
  { label: 'Events', to: '#' },
  { label: 'Latest news', to: '#' },
  { label: 'More', to: '#', megaMenu: 'more' },
]

const clientsMegaMenu = [
  {
    items: [
      {
        label: 'Asset managers',
        href: '/clients/asset-managers',
        children: [
          {
            label: 'Solutions for Alternative Asset Managers',
            href: '/clients/asset-managers/alternative-asset-managers',
          },
        ],
      },
      { label: 'Services for Financial Sponsor Clients', href: '/clients/financial-sponsors' },
      { label: 'Global recognition', href: '/clients/global-recognition' },
    ],
  },
  {
    items: [
      { label: 'Value-Added Services for Broker Dealers', href: '/clients/broker-dealers' },
      { label: 'Insurers and reinsurers', href: '/clients/insurers-and-reinsurers' },
    ],
    spaced: true,
  },
  {
    items: [
      { label: 'Corporates', href: '/clients/corporates' },
      { label: 'Corporate Trust Services for Law Firms', href: '/clients/law-firms' },
    ],
    spaced: true,
  },
  {
    items: [
      { label: 'Financial institutions', href: '/clients/financial-institutions' },
      { label: 'Sovereigns, supranationals and agencies', href: '/clients/sovereigns-supranationals-and-agencies' },
    ],
    spaced: true,
  },
]

const solutionsMegaMenu = [
  {
    items: [
      {
        label: 'Corporate Bank solutions',
        href: '/solutions/corporate-bank-solutions',
        children: [
          { label: 'Cash management', href: '/solutions/corporate-bank-solutions/cash-management' },
          { label: 'Securities services', href: '/solutions/corporate-bank-solutions/securities-services' },
          { label: 'Sustainable and Transformation Finance', href: '/solutions/corporate-bank-solutions/sustainable-finance' },
          { label: 'Trade finance/Lending', href: '/solutions/corporate-bank-solutions/trade-finance' },
          { label: 'Trust and agency services', href: '/solutions/corporate-bank-solutions/trust-and-agency-services' },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'Investment Bank solutions',
        href: '/solutions/investment-bank-solutions',
        children: [
          { label: 'Fixed Income and Currencies', href: '/solutions/investment-bank-solutions/fixed-income-and-currencies' },
          { label: 'Investment Banking and Capital Markets', href: '/solutions/investment-bank-solutions/investment-banking-and-capital-markets' },
          { label: 'Research', href: '/solutions/investment-bank-solutions/research' },
        ],
      },
    ],
    spaced: true,
  },
  {
    items: [{ label: 'Asset Management solutions', href: '/solutions/asset-management-solutions' }],
    spaced: true,
  },
  {
    items: [
      {
        label: 'Client access solutions',
        href: '/solutions/client-access-solutions',
        children: [
          { label: 'API Connectivity', href: '/solutions/client-access-solutions/corporate-api-connectivity' },
          { label: 'Autobahn', href: '/autobahn/login' },
          { label: 'Global Office', href: '/global-office/login' },
          { label: 'Integration and Messaging Products', href: '/solutions/client-access-solutions/integration-and-messaging-products' },
          { label: 'International Payment Tracking', href: '/solutions/client-access-solutions/international-payment-tracking' },
          { label: 'Investor reporting', href: '/investor-reporting' },
          { label: 'Solutions: Secure E-mail Communication', href: '/solutions/client-access-solutions/secure-exchange-of-information-via-e-mail' },
          { label: 'Web ABIRS', href: '/web-abirs/login' },
        ],
      },
    ],
    spaced: true,
  },
]

const inFocusMegaMenu = [
  {
    items: [
      {
        label: 'Focus topics',
        href: '/in-focus/focus-topics',
        children: [
          { label: 'Cyber security', href: '/in-focus/focus-topics/cyber-security' },
          { label: 'Digitalisation', href: '/in-focus/focus-topics/digitalisation' },
          { label: 'ISO 20022', href: '/in-focus/focus-topics/iso20022/overview' },
          {
            label: 'Marketplace Payments',
            href: '/solutions/corporate-bank-solutions/cash-management/merchant-solutions/marketplace-payments',
          },
          {
            label: 'SEPA Instant Payment Regulation/VoP',
            href: '/in-focus/focus-topics/instant-payments-vop',
          },
          {
            label: 'Sustainable and Transition Finance',
            href: '/solutions/corporate-bank-solutions/sustainable-finance',
          },
        ],
      },
    ],
  },
  {
    items: [{ label: 'Regional dossiers', href: '/in-focus/regional-dossiers' }],
    spaced: true,
  },
  {
    items: [{ label: 'Event reports', href: '/in-focus/event-reports' }],
    spaced: true,
  },
]

const publicationsMegaMenu = [
  {
    items: [
      {
        label: 'Magazines',
        href: '/publications/magazines',
        children: [
          { label: 'flow magazine', href: 'https://flow.db.com/magazine/index' },
          {
            label: 'results magazine',
            href: 'https://www.deutsche-bank.de/ub/results/finanzwissen-fuer-unternehmen.html',
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'Market-focused capital markets guides',
        href: '/publications/market-focused-capital-markets-guides',
        children: [
          { label: 'China Compass guide', href: '/publications/magazines/china-compass' },
          {
            label: 'Marhaba Saudi Arabia guide',
            href: '/publications/magazines/marhaba-saudi-arabia',
          },
          { label: 'Namaste India guide', href: '/publications/magazines/namaste-india' },
          {
            label: 'Navigating ASEAN-6 Capital Markets guide',
            href: '/publications/magazines/navigating-asean-6-capital-markets',
          },
          { label: 'Salam Indonesia guide', href: '/publications/magazines/salam-indonesia' },
        ],
      },
    ],
    spaced: true,
  },
  {
    items: [{ label: 'flow white papers and guides', href: '#' }],
    spaced: true,
  },
  {
    items: [{ label: 'Third-party articles', href: '/publications/third-party-articles' }],
    spaced: true,
  },
]

const multimediaMegaMenu = [
  {
    items: [{ label: '#ExpeditionFinance', href: '#' }],
  },
  {
    items: [{ label: 'Podcasts', href: '#' }],
    spaced: true,
  },
  {
    items: [{ label: 'Videos', href: '#' }],
    spaced: true,
  },
]

const moreMegaMenu = [
  {
    items: [{ label: 'Subscribe to newsletter', href: '#' }],
  },
  {
    items: [{ label: 'Edit your profile and preferences', href: '#' }],
    spaced: true,
  },
  {
    items: [{ label: 'LinkedIn', href: '#' }],
    spaced: true,
  },
  {
    items: [{ label: 'YouTube', href: '#' }],
    spaced: true,
  },
]

const careersMainNav = [
  { label: 'Deutsche Bank', active: false },
  { label: 'Corporates/Institutions', active: false },
  { label: 'Private Clients', active: false },
  { label: 'Client Logins', active: false },
  { label: 'Locations', active: false },
  { label: 'Careers', active: true },
]

const irMainNav = [
  { label: 'Deutsche Bank', active: false },
  { label: 'Corporates/Institutions', active: false },
  { label: 'Private Clients', active: false },
  { label: 'Client logins', active: false },
  { label: 'Locations', active: false },
  { label: 'Investor Relations', active: true },
]

const subNav = [
  { label: 'What we do', to: '/', megaMenu: 'what-we-do' },
  { label: 'Who we are', to: '/', megaMenu: 'who-we-are' },
  { label: 'Media', to: '/media', megaMenu: 'media' },
  { label: 'What Next', to: '/', megaMenu: 'what-next' },
]

const whatWeDoMegaMenu = [
  {
    heading: 'Products and services',
    href: '/products-and-services',
    links: [
      { label: 'Client logins, online banking', href: '/client-logins' },
      { label: 'Locations worldwide', href: '/locations' },
      { label: 'Mobile services', href: '/mobile-services' },
      { label: 'Corporate Bank', href: '/corporates' },
      { label: 'DWS – Global Asset Management Solutions', href: '/dws' },
      { label: 'Investment Bank', href: '/investment-bank' },
      { label: 'Private Bank', href: '/private-bank' },
      { label: 'Reports', href: '#' },
    ],
  },
  {
    heading: 'Responsibility',
    href: '/responsibility',
    links: [
      { label: 'Art & Culture', href: '/responsibility' },
      { label: 'Sports', href: '/responsibility' },
      { label: 'Society', href: '/responsibility' },
      { label: 'Sustainability', href: '/responsibility' },
      { label: 'Sustainability Deep Dive', href: '#' },
      { label: 'Sustainability Publications', href: '#' },
    ],
  },
  {
    heading: 'Focus topics',
    href: '#',
    links: [
      { label: 'Corporate Venture Capital (CVC)', href: '#' },
      { label: 'Digital disruption', href: '#' },
      { label: 'Entrepreneurial success', href: '#' },
      { label: 'Responsible growth', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Technology Transformation', href: '#' },
    ],
  },
]

const whoWeAreMegaMenu = [
  {
    items: [
      { label: 'Purpose', href: '#' },
      {
        label: 'Global network',
        href: '#',
        children: [{ label: 'Addresses and contact', href: '#' }],
      },
    ],
  },
  {
    items: [
      { label: 'Strategy', href: '#' },
      {
        label: 'Boards and committees',
        href: '#',
        children: [
          { label: 'Management Board', href: '#' },
          { label: 'Supervisory Board', href: '#' },
          { label: 'Committees of the Supervisory Board', href: '#' },
          { label: 'Global Advisory Board', href: '#' },
        ],
      },
    ],
    spaced: true,
  },
  {
    items: [
      {
        label: 'Corporate Culture',
        href: '#',
        children: [{ label: 'Inclusion at Deutsche Bank', href: '#' }],
      },
      {
        label: 'History',
        href: '#',
        children: [
          { label: 'Historical Institute', href: '#' },
          { label: 'History of Deutsche Bank', href: '#' },
          { label: 'Historical publications', href: '#' },
          { label: 'Frequently asked questions', href: '#' },
          { label: 'Historical Association of Deutsche Bank', href: '#' },
        ],
      },
    ],
    spaced: true,
  },
  {
    items: [{ label: 'Claim', href: '#' }],
    spaced: true,
  },
]

const mediaMegaMenu = [
  {
    items: [
      {
        label: 'News, Media Releases, Announcements, Stories and Press Information',
        href: '/media',
      },
      {
        label: 'Social Media',
        href: '#',
        children: [
          { label: 'Netiquette', href: '#' },
          { label: 'Social media channels', href: '#' },
        ],
      },
    ],
  },
  {
    items: [
      { label: 'Podcasts', href: '#' },
      { label: 'Focus Topics', href: '#' },
    ],
    spaced: true,
  },
  {
    items: [{ label: 'Videos', href: '#' }],
    spaced: true,
  },
  {
    items: [{ label: 'Images', href: '#' }],
    spaced: true,
  },
]

const whatNextMegaMenu = [
  {
    heading: 'Technological Transformation',
    href: '#',
    links: [
      { label: 'Space economy', href: '#' },
      { label: 'Tokenised economy', href: '#' },
      { label: 'How to defend against the greatest threats of our digital age', href: '#' },
      { label: "After the hype – what's next for the metaverse?", href: '#' },
      { label: 'How cloud technology is silently revolutionising our economy', href: '#' },
      { label: 'AI in banking and business – what can it do and who stands to gain?', href: '#' },
      { label: 'Cash, card, crypto: how the way you pay will affect your life', href: '#' },
      { label: 'Banks or Fintechs – Who will be shaping the future of the financial industry?', href: '#' },
    ],
  },
  {
    heading: 'Bold Entrepreneurship',
    href: '#',
    links: [
      { label: 'How the food industry is revolutionising our diets', href: '#' },
      { label: 'Which way to a radically new future of work?', href: '#' },
      { label: 'Resilience: the recipe for a strong economy', href: '#' },
      { label: 'My way, your way – different paths to success', href: '#' },
      { label: 'What does it take to make bold moves in business?', href: '#' },
      { label: 'How can companies and decision-makers reset for growth beyond coronavirus?', href: '#' },
    ],
  },
  {
    heading: 'Responsible Growth',
    href: '#',
    links: [
      { label: 'Sustainable construction', href: '#' },
      { label: 'Protecting biodiversity', href: '#' },
      { label: 'Circular economy: a way out of the dead end?', href: '#' },
      { label: 'Climate emergency: can green tech save us?', href: '#' },
      { label: 'Are sustainable cities a solution to climate change?', href: '#' },
      { label: 'Will greater investment in water resources make for a more sustainable future?', href: '#' },
      { label: 'Will Covid-19 be an opportunity or threat to sustainable development?', href: '#' },
    ],
  },
]

const careersSubNav = [
  { label: 'This is DB', to: '/careers' },
  { label: 'Our Business', to: '#' },
  { label: 'Professionals', to: '#' },
  { label: 'Students and Graduates', to: '#' },
  { label: 'School leavers GER', to: '#' },
  { label: 'School leavers UK', to: '#' },
]

const irSubNav = [
  { label: 'Reports and Events', to: '/investor-relations' },
  { label: 'Corporate Governance', to: '#' },
  { label: 'Share', to: '#' },
  { label: 'Creditors', to: '#' },
  { label: 'Annual General Meeting', to: '#' },
  { label: 'ESG', to: '#' },
  { label: 'Service and Contacts', to: '#' },
  { label: 'FAQ', to: '#' },
]

const footerLinks = [
  'Imprint',
  'Legal resources',
  'Privacy Notice',
  'Accessibility',
  'Sitemap',
  'Contact',
  'Cookies',
]

const locationsFooterLinks = [
  'Imprint',
  'Legal resources',
  'Data protection',
  'Accessibility',
  'Contact',
  'Cookies',
]

const corporatesFooterLinks = [
  'Imprint',
  'Legal resources',
  'Privacy notice',
  'Accessibility',
  'Consent management',
  'Cookies',
]

const careersFooterLinks = [
  'Imprint',
  'Legal Resources',
  'Data Privacy Statement',
  'Accessibility',
  'Sitemap',
  'Contact',
  'Cookies',
]

const irFooterLinks = [
  'Imprint',
  'Legal Resources',
  'Data protection',
  'Accessibility',
  'Contact',
  'Cookies',
]

const researchFooterLinks = [
  'Imprint',
  'Legal Resources',
  'Data protection',
  'Accessibility',
  'Contact',
  'Cookies',
]

const researchContactFooterLinks = [
  'Imprint',
  'Legal notice',
  'Data privacy statement',
  'Cookies',
  'About',
  'dbSustainability',
]

const customerPageLinks = {
  'Deutsche Bank': '/',
  'Corporates/Institutions': '/corporates',
  'Private Clients': '/private-bank',
  Locations: '/locations',
  'Client logins': '/client-logins',
  Careers: '/careers',
  'Investor Relations': '/investor-relations',
}

const toolboxItems = [
  {
    id: 'lang',
    label: 'Deutsch',
    title: 'Language',
    href: '#',
    content: <span className="toolbox-text-icon">DE</span>,
  },
  {
    id: 'accessibility',
    label: 'Accessibility',
    title: 'Accessibility',
    href: '#',
    content: (
      <svg className="toolbox-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 8v2.5M8.5 11.5 12 10l3.5 1.5M9.5 20.5 12 12.5l2.5 8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'sitemap',
    label: 'Sitemap',
    title: 'Sitemap',
    href: '#',
    content: (
      <svg className="toolbox-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    title: 'Contact',
    href: '#',
    content: (
      <svg className="toolbox-svg toolbox-svg--filled" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    id: 'share',
    label: 'Share',
    title: 'Share – opens in new window',
    href: '#',
    content: (
      <svg className="toolbox-svg toolbox-svg--filled" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
      </svg>
    ),
  },
]

export function LogoSprite() {
  return (
    <svg aria-hidden="true" className="svg-sprite" focusable="false">
      <symbol id="svgsymbol-logo" viewBox="0 0 32 32">
        <path d="M4.5 4.5v23h23v-23h-23zM0 0h32v32H0V0zm7 24.3L19.2 7.7H25L12.8 24.3H7z" />
      </symbol>
      <symbol id="svgsymbol-home" viewBox="0 0 24 24">
        <path
          d="M18.095 21v-8.524a1 1 0 1 1 2 0V23H2.857V12.476a1 1 0 1 1 2 0V21h13.238zM11.476 3.292l-9.843 8.053A1 1 0 0 1 .367 9.797l11.11-9.09 11.109 9.09a1 1 0 1 1-1.267 1.548l-9.843-8.053z"
          fillRule="evenodd"
        />
      </symbol>
    </svg>
  )
}

function DbLogoLink() {
  return (
    <a href="/" className="logo wt-enabled" title="XAU Global">
      <span className="hidden-title">Home</span>
      <img
        src="/xau-logo.png"
        alt="XAU Global"
        className="xau-logo-mark"
        width={70}
        height={70}
      />
    </a>
  )
}

function DbIdentifier() {
  return (
    <a href="/" className="identifier wt-enabled" title="XAU Global">
      <span className="xau-brand-wordmark" aria-label="XAU Global">
        XAU Global
      </span>
    </a>
  )
}

function HomeIcon() {
  return (
    <svg className="icon" focusable="false" aria-hidden="true">
      <use href="#svgsymbol-home" xlinkHref="#svgsymbol-home" />
    </svg>
  )
}

function Toolbox() {
  return (
    <nav className="mod-toolbox" aria-label="Toolbox">
      <ul>
        {toolboxItems.map((item) => (
          <li key={item.id} className="itm-toolbox">
            <a href={item.href} title={item.title}>
              <span className="icon">{item.content}</span>
              {item.label && <span className="label">{item.label}</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ColumnMegaMenu({ menu, label, columns = 4, compact = false }) {
  return (
    <div
      className={`corp-mega-menu${compact ? ' corp-mega-menu-compact' : ''}`}
      role="region"
      aria-label={label}
    >
      <div
        className={`cms-content-wrapper corp-mega-menu-inner${
          columns === 3 ? ' db-mega-menu-inner-3' : ''
        }`}
      >
        {menu.map((column) => (
          <div
            key={column.items.map((item) => item.label).join('-')}
            className={`corp-mega-col${column.spaced ? ' corp-mega-col-spaced' : ''}`}
          >
            {column.items.map((item) => (
              <div key={item.label} className="corp-mega-group">
                <a href={item.href} className="corp-mega-link corp-mega-link-primary">
                  {item.label}
                </a>
                {item.children?.map((child) => (
                  <a key={child.label} href={child.href} className="corp-mega-link corp-mega-link-sub">
                    {child.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function HeadingLinksMegaMenu({ menu, label }) {
  return (
    <div className="corp-mega-menu" role="region" aria-label={label}>
      <div className="cms-content-wrapper corp-mega-menu-inner db-mega-menu-inner-3">
        {menu.map((column) => (
          <div key={column.heading} className="corp-mega-col">
            <div className="corp-mega-group">
              <a href={column.href} className="corp-mega-link corp-mega-link-primary">
                {column.heading}
              </a>
              {column.links.map((link) => (
                <a key={link.label} href={link.href} className="corp-mega-link corp-mega-link-sub">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function WhatWeDoMegaMenu() {
  return <HeadingLinksMegaMenu menu={whatWeDoMegaMenu} label="What we do menu" />
}

function WhatNextMegaMenu() {
  return <HeadingLinksMegaMenu menu={whatNextMegaMenu} label="What Next menu" />
}

function ClientsMegaMenu() {
  return <ColumnMegaMenu menu={clientsMegaMenu} label="Clients menu" />
}

function SolutionsMegaMenu() {
  return (
    <div className="corp-mega-menu-with-footer">
      <ColumnMegaMenu menu={solutionsMegaMenu} label="Solutions menu" />
      <div className="cms-content-wrapper corp-mega-menu-footer">
        <a href="/flow/case-studies" className="corp-mega-link corp-mega-link-sub">
          flow client case studies
        </a>
      </div>
    </div>
  )
}

function InFocusMegaMenu() {
  return <ColumnMegaMenu menu={inFocusMegaMenu} label="In focus menu" columns={3} />
}

function PublicationsMegaMenu() {
  return <ColumnMegaMenu menu={publicationsMegaMenu} label="Publications menu" />
}

function MultimediaMegaMenu() {
  return <ColumnMegaMenu menu={multimediaMegaMenu} label="Multimedia menu" columns={3} compact />
}

function MoreMegaMenu() {
  return <ColumnMegaMenu menu={moreMegaMenu} label="More menu" compact />
}

function WhoWeAreMegaMenu() {
  return <ColumnMegaMenu menu={whoWeAreMegaMenu} label="Who we are menu" />
}

function MediaMegaMenu() {
  return <ColumnMegaMenu menu={mediaMegaMenu} label="Media menu" />
}

const dbSubNavMegaMenuVariants = new Set(['default', 'private-bank', 'client-logins'])

export function SiteHeader({
  activeSubNav = '',
  activeUtility = '',
  customerNav = mainNav,
  subNavItems = subNav,
  headerVariant = 'default',
}) {
  const [openMegaMenu, setOpenMegaMenu] = useState(null)

  const hasDbSubNavMegaMenus = dbSubNavMegaMenuVariants.has(headerVariant)

  const showClientsMenu = headerVariant === 'corporates' && openMegaMenu === 'clients'
  const showSolutionsMenu = headerVariant === 'corporates' && openMegaMenu === 'solutions'
  const showInFocusMenu = headerVariant === 'corporates' && openMegaMenu === 'in-focus'
  const showPublicationsMenu = headerVariant === 'corporates' && openMegaMenu === 'publications'
  const showMultimediaMenu = headerVariant === 'corporates' && openMegaMenu === 'multimedia'
  const showMoreMenu = headerVariant === 'corporates' && openMegaMenu === 'more'
  const showWhatWeDoMenu = hasDbSubNavMegaMenus && openMegaMenu === 'what-we-do'
  const showWhoWeAreMenu = hasDbSubNavMegaMenus && openMegaMenu === 'who-we-are'
  const showMediaMenu = hasDbSubNavMegaMenus && openMegaMenu === 'media'
  const showWhatNextMenu = hasDbSubNavMegaMenus && openMegaMenu === 'what-next'

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="main-header cms-content-wrapper">
          <DbIdentifier />
          <nav className="navigation-cross" aria-label="meta">
            <ul>
              {utilityLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.to}
                    className={`wt-enabled${activeUtility === link.label ? ' active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <DbLogoLink />
        </div>
      </div>

      <div className="header-customer">
        <div className="cms-content-wrapper">
          <nav className="navigation-customer" aria-label="Customer navigation">
            <ul className="nav-root">
              {customerNav.map((item) => (
                <li key={item.label} className={item.active ? 'active' : undefined}>
                  <a href={customerPageLinks[item.label] || '#'}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div
        className="header-main"
        onMouseLeave={() => setOpenMegaMenu(null)}
      >
        <div className={`cms-content-wrapper${headerVariant === 'corporates' ? ' header-main-row' : ''}`}>
          <nav className="navigation-main" aria-label="main">
            <ul className="nav-root">
              <li>
                <a href="/" className="home-link" aria-label="Home">
                  <HomeIcon />
                </a>
              </li>
              {subNavItems.map((item) => (
                <li
                  key={item.label}
                  className={
                    item.megaMenu && openMegaMenu === item.megaMenu
                      ? 'corp-nav-has-menu is-open'
                      : item.megaMenu
                        ? 'corp-nav-has-menu'
                        : undefined
                  }
                  onMouseEnter={() => {
                    if (item.megaMenu) setOpenMegaMenu(item.megaMenu)
                  }}
                >
                  <a
                    href={item.to}
                    className={activeSubNav === item.label ? 'active' : undefined}
                    aria-expanded={item.megaMenu ? openMegaMenu === item.megaMenu : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {headerVariant === 'corporates' && (
            <div className="corp-header-actions">
              <a href="#" className="corp-header-btn corp-header-btn-outline">flow magazine</a>
              <a href="/autobahn/login" className="corp-header-btn corp-header-btn-solid">Autobahn</a>
            </div>
          )}
        </div>
        {showClientsMenu && <ClientsMegaMenu />}
        {showSolutionsMenu && <SolutionsMegaMenu />}
        {showInFocusMenu && <InFocusMegaMenu />}
        {showPublicationsMenu && <PublicationsMegaMenu />}
        {showMultimediaMenu && <MultimediaMegaMenu />}
        {showMoreMenu && <MoreMegaMenu />}
        {showWhatWeDoMenu && <WhatWeDoMegaMenu />}
        {showWhoWeAreMenu && <WhoWeAreMegaMenu />}
        {showMediaMenu && <MediaMegaMenu />}
        {showWhatNextMenu && <WhatNextMegaMenu />}
      </div>
    </header>
  )
}

function SocialIcon({ name }) {
  const common = { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }
  switch (name) {
    case 'LinkedIn':
      return (
        <svg {...common}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )
    case 'Instagram':
      return (
        <svg {...common}>
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.45-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      )
    case 'Facebook':
      return (
        <svg {...common}>
          <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
        </svg>
      )
    case 'X':
      return (
        <svg {...common}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    case 'Xing':
      return (
        <svg {...common}>
          <path d="M4.5 3h3.2l7.2 12.6L18.5 21h-3.2l-3.6-6.3-3.6 6.3H5.1l7.2-12.6L4.5 3zm11.4 0h3.1l-4.8 8.4 2.4 4.2h-3.1l-2.4-4.2L12.3 3z" />
        </svg>
      )
    case 'YouTube':
      return (
        <svg {...common}>
          <path d="M21.58 7.19a2.43 2.43 0 0 0-1.7-1.73C18.25 5 12 5 12 5s-6.25 0-7.88.46a2.43 2.43 0 0 0-1.7 1.73C2 8.83 2 12 2 12s0 3.17.42 4.81a2.43 2.43 0 0 0 1.7 1.73C5.75 19 12 19 12 19s6.25 0 7.88-.46a2.43 2.43 0 0 0 1.7-1.73C22 15.17 22 12 22 12s0-3.17-.42-4.81zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      )
    case 'RSS':
      return (
        <svg {...common}>
          <path d="M6.18 15.64a2.18 2.18 0 1 1 0 4.36 2.18 2.18 0 0 1 0-4.36M4 4.44A15.9 15.9 0 0 1 19.56 20h-2.12A13.78 13.78 0 0 0 4 6.56V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.12A7.78 7.78 0 0 0 4 12.78V10.1z" />
        </svg>
      )
    case 'Email':
      return (
        <svg {...common}>
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.982 4.982 0 0 1-1-.48z" />
        </svg>
      )
  }
}

export function SiteFooter({ variant = 'default' }) {
  const links =
    variant === 'careers' ? careersFooterLinks
    : variant === 'ir' ? irFooterLinks
    : variant === 'corporates' ? corporatesFooterLinks
    : variant === 'locations' ? locationsFooterLinks
    : variant === 'research-contact' ? researchContactFooterLinks
    : variant === 'research' ? researchFooterLinks
    : footerLinks

  const socialItems =
    variant === 'careers'
      ? ['LinkedIn', 'Instagram', 'Facebook', 'TikTok']
      : variant === 'ir'
        ? ['X', 'LinkedIn', 'Facebook', 'Xing']
        : variant === 'corporates'
          ? ['LinkedIn', 'YouTube']
          : variant === 'research-contact'
          ? ['X', 'LinkedIn', 'Facebook', 'Xing', 'RSS', 'Email']
          : variant === 'research'
            ? ['X', 'LinkedIn', 'YouTube']
            : []

  const isResearchFooter = variant === 'research' || variant === 'research-contact'

  return (
    <footer className={`site-footer${variant === 'careers' ? ' careers-footer' : ''}${variant === 'ir' ? ' ir-footer' : ''}${variant === 'corporates' ? ' corporates-footer' : ''}${isResearchFooter ? ' research-footer' : ''}${variant === 'research-contact' ? ' research-contact-footer' : ''}`}>
      {variant === 'research-contact' && (
        <div className="research-footer-bar">
          <div className="cms-content-wrapper research-footer-bar-inner">
            <span className="research-footer-breadcrumb">
              You are here: <a href="/research">Home</a>
            </span>
            <button
              type="button"
              className="research-footer-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to top ^
            </button>
          </div>
        </div>
      )}
      <div className="cms-content-wrapper">
        {socialItems.length > 0 && (
          <nav className="careers-social" aria-label="Social media">
            {socialItems.map((name) => (
              <a key={name} href="#" title={name} aria-label={name}>
                <SocialIcon name={name} />
              </a>
            ))}
          </nav>
        )}
        <nav className="footer-nav" aria-label="footer">
          <ul>
            {links.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="copyright">Copyright © 2026 Deutsche Bank AG, Frankfurt am Main</p>
      </div>
      <button
        type="button"
        className="back-to-top"
        aria-label="back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="back-to-top-arrow" aria-hidden="true">^</span>
        back to top
      </button>
    </footer>
  )
}

export function SiteLayout({
  children,
  activeSubNav = '',
  activeUtility = '',
  headerVariant = 'default',
  footerVariant = 'default',
}) {
  const customerNav =
    headerVariant === 'careers' ? careersMainNav
    : headerVariant === 'ir' ? irMainNav
    : headerVariant === 'corporates' ? corporatesMainNav
    : headerVariant === 'locations' ? locationsMainNav
    : headerVariant === 'private-bank' ? privateBankMainNav
    : headerVariant === 'client-logins' ? clientLoginsMainNav
    : mainNav
  const subNavItems =
    headerVariant === 'careers' ? careersSubNav
    : headerVariant === 'ir' ? irSubNav
    : headerVariant === 'corporates' ? corporatesSubNav
    : headerVariant === 'locations' ? []
    : subNav

  return (
    <div className="page">
      <LogoSprite />
      <SiteHeader
        activeSubNav={activeSubNav}
        activeUtility={activeUtility}
        customerNav={customerNav}
        subNavItems={subNavItems}
        headerVariant={headerVariant}
      />
      {children}
      <SiteFooter variant={footerVariant} />
      <Toolbox />
    </div>
  )
}
