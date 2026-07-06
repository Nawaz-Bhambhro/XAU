import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/e44c61fd-8092-43a7-bf86-7f3530848945/fileAsset?language_id=1'
  ),
  knowledge: corpImg(
    'contentAsset/image/0082b075-2f43-4cbb-94f2-14dabdaf714e/fileAsset/filter/Resize,Jpeg/resize_w/1280/a9a3a383-03f6-4b30-a6bd-2b1d38bbec5bl.jpg'
  ),
  securityTips: corpImg(
    'contentAsset/image/0aba05b3-bde9-4a5a-bc0b-c1434ad5bc23/fileAsset/filter/Resize,Jpeg/resize_w/1280/4f6d3d42-5008-401b-b29c-0e989a938265l.jpg'
  ),
  securityAtDb: corpImg(
    'contentAsset/image/273fdd18-6a2a-4ac1-874c-63eacdf1838a/fileAsset/filter/Resize,Jpeg/resize_w/1280/0ce20602-151d-4a1f-80e7-e82a142fe3d6l.jpg'
  ),
  newsletter: corpImg(
    'contentAsset/image/c087a081-389e-4541-a3cb-7b14e6a86c04/fileAsset/filter/Resize,Jpeg/resize_w/1280/7650d730-5cca-4c70-bb8c-939b1638deab.jpg'
  ),
}

const accordions = [
  {
    id: 'ransomware',
    title: 'Ransomware',
    content:
      'Ransomware are malware programs used by hackers to block access or use of the data and the entire computer system. The aim is to encrypt the data and then extort money for unlocking the data.',
  },
  {
    id: 'phishing',
    title: 'Phishing',
    content:
      'Phishing tries to get users to disclose confidential information such as user IDs and passwords using fake emails and/or manipulated web pages.',
  },
  {
    id: 'man-in-the-browser',
    title: 'Man-in-the-Browser-Attacks',
    content:
      'In the case of man-in-the-browser attacks, data is intercepted by attacking a secure connection between the user and an online application. A Trojan is, for example, anchored in the browser application and can intercept and manipulate information that has been entered.',
  },
  {
    id: 'keylogger',
    title: 'Keylogger Robot',
    content:
      'Keylogger robots are programs that register keyboard strokes in order to store user IDs and account information.',
  },
  {
    id: 'vishing',
    title: 'Vishing',
    content:
      'Vishing gets so-called “war dialers” to dial thousands of numbers at a specific point in time. As soon as someone takes a call a recording is played stating that e.g. a credit card or a bank account is at risk and that personal information is required.',
  },
  {
    id: 'social-engineering',
    title: 'Social engineering',
    content:
      'Social engineering refers to the art of manipulating people through conviction, seduction or influence in such a way that they reveal confidential information e.g. names, contact data, corporate names or company information.',
  },
  {
    id: 'password-hacking',
    title: 'Password hacking',
    content:
      'Password hacking refers to the unauthorised and unwanted procurement of passwords for devices, applications and services – usually with criminal intent.',
  },
  {
    id: 'invoice-redirection',
    title: 'Invoice redirection fraud',
    content:
      'Invoice redirection fraud is practiced by cyber criminals who have managed to access the correct payment information and account details of, for example, genuine suppliers or customers of a particular company, then try to change these details in order to divert significant sums of money to their own accounts.',
  },
  {
    id: 'smishing',
    title: 'Smishing',
    content:
      'Smishing uses a technique to get people to reveal confidential information via SMS messages.',
  },
]

const topicCards = [
  {
    title: 'Knowledge',
    text: 'Understand what terms like phishing mean.',
    image: images.knowledge,
    href: '/in-focus/focus-topics/cyber-security/knowledge',
    variant: 'dove',
  },
  {
    title: 'Security Tips',
    text: 'Know how to protect yourself.',
    image: images.securityTips,
    href: '/in-focus/focus-topics/cyber-security/security-tips',
    variant: 'violet',
  },
  {
    title: 'Security @ Deutsche Bank',
    text: 'How is Deutsche Bank tackling cyber fraud?',
    image: images.securityAtDb,
    href: '/in-focus/focus-topics/cyber-security/security-at-deutsche-bank',
    variant: 'pale',
  },
]

export default function CyberSecurityPage() {
  const [openAccordion, setOpenAccordion] = useState(null)

  return (
    <SiteLayout activeSubNav="In focus" headerVariant="corporates" footerVariant="corporates">
      <main className="cs-page">
        <section className="cbs-hero cs-hero" aria-label="Cyber Security">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="cs-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper cbs-hero-content cs-hero-content">
            <p className="cs-hero-eyebrow">You are the target!</p>
            <h1>Cyber Security</h1>
          </div>
        </section>

        <div className="cms-content-wrapper cbs-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/in-focus/focus-topics">In focus</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/in-focus/focus-topics">Focus topics</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Cyber security
            </span>
          </nav>

          <p className="cs-intro-lead">
            Digitalisation brings opportunities. At the same time, however, the threat of cyber
            attacks are widespread and can affect anyone
          </p>

          <h2 className="cs-section-title">
            Find out more about the key components of information security
          </h2>

          <div className="cs-accordion">
            {accordions.map((item) => {
              const isOpen = openAccordion === item.id
              return (
                <div
                  key={item.id}
                  className={`cs-accordion-item${isOpen ? ' cs-accordion-open' : ''}`}
                >
                  <button
                    type="button"
                    className="cs-accordion-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                  >
                    {item.title}
                    <span className="cs-accordion-icon" aria-hidden="true">
                      <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="cs-accordion-panel">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <section className="cs-cards" aria-label="Cyber security resources">
          <div className="cms-content-wrapper cs-cards-grid">
            {topicCards.map((card) => (
              <article key={card.title} className={`cs-card cs-card--${card.variant}`}>
                <a href={card.href} className="cs-card-image">
                  <img src={card.image} alt="" loading="lazy" />
                </a>
                <div className="cs-card-body">
                  <h3>
                    <a href={card.href}>{card.title}</a>
                  </h3>
                  <p>{card.text}</p>
                  <a
                    href={card.href}
                    className={`corp-btn ${card.variant === 'violet' ? 'corp-btn-white' : 'corp-btn-solid'}`}
                  >
                    Find out more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-newsletter" aria-label="Newsletter sign-up">
          <img className="cs-newsletter-image" src={images.newsletter} alt="" />
          <div className="cs-newsletter-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper cs-newsletter-content">
            <h2>
              Sign-up for
              <br />
              newsletters and
              <br />
              exclusive insights
            </h2>
            <a
              href="https://flow.db.com/newsbites/newsbites-subscription"
              target="_blank"
              rel="noreferrer"
              className="corp-btn corp-btn-solid"
            >
              Sign me up
            </a>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
