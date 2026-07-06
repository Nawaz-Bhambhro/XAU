import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/c0054d36-d5a2-4f39-9407-2b537ce8724f/fileAsset?language_id=1'
  ),
}

export default function Iso20022OverviewPage() {
  return (
    <SiteLayout activeSubNav="In focus" headerVariant="corporates" footerVariant="corporates">
      <main className="iso-page">
        <section className="cbs-hero iso-hero" aria-label="ISO 20022 migration">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="iso-hero-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper cbs-hero-content iso-hero-content">
            <h2 className="iso-hero-title">ISO 20022 MIGRATION</h2>
            <p className="iso-hero-subtitle">
              Get ready for the industry&apos;s largest transformation
            </p>
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
            <a href="/in-focus/focus-topics/iso20022/overview">ISO 20022</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              ISO 20022 overview
            </span>
          </nav>

          <h1 className="iso-page-title">ISO 20022 migration first-hand</h1>

          <p className="cbs-body">
            The ISO 20022 migration deadline for banks in November 2025 and the deadline of
            unstructured postal address impacting corporate clients in November 2026 is approaching
            quickly. To help you navigate the transition period, we welcome you to our ISO 20022
            knowledge repository, which offers educational materials, guidelines and first-hand
            insights on the ISO 20022 migration for high-value, international, urgent domestic and
            direct debit payments.
          </p>

          <h2 className="iso-lead">
            Whether your interest is in the ISO 20022 standard itself, or the implications for
            financial institutions or corporates – get started here to learn and stay up to date on
            the different formats, implications and integration requirements of new, XML-based
            payment instruction formats.
          </h2>

          <div className="iso-cta-row">
            <a
              href="/in-focus/focus-topics/iso20022/index"
              className="corp-btn corp-btn-solid"
            >
              Implications for institutional clients
            </a>
            <a
              href="/in-focus/focus-topics/iso20022/implications-for-corporate-clients"
              className="corp-btn corp-btn-solid"
            >
              Implications for corporate clients
            </a>
          </div>
        </div>
      </main>
    </SiteLayout>
  )
}
