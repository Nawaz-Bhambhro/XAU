import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/2789f947-2b46-47aa-8501-541774afac2d/fileAsset?language_id=1'
  ),
  infographic: corpImg(
    'files/images-new/solutions/client-access-solutions/Secure-exchange-of-information-via-e-mail-02.jpg?language_id=1'
  ),
  newsletter: corpImg(
    'contentAsset/image/c087a081-389e-4541-a3cb-7b14e6a86c04/fileAsset/filter/Resize,Jpeg/resize_w/1280/7650d730-5cca-4c70-bb8c-939b1638deab.jpg'
  ),
}

export default function SecureEmailCommunicationPage() {
  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="sec-page">
        <section className="cbs-hero" aria-label="Secure exchange of information via e-mail">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper cbs-hero-content">
            <h1>Secure exchange of information via e-mail</h1>
          </div>
        </section>

        <div className="cms-content-wrapper cbs-content">
          <nav className="cbs-breadcrumb" aria-label="Breadcrumb">
            <span className="cbs-breadcrumb-label">You are here:</span>
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/corporate-bank-solutions">Solutions</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/solutions/client-access-solutions">Client access solutions</a>
            <span aria-hidden="true">&gt;</span>
            <span className="cbs-breadcrumb-current" aria-current="page">
              Secure e-mail communication
            </span>
          </nav>

          <p className="sec-intro-lead">
            Cyber attacks on the systems and data of companies and their clients are on the rise
            around the globe. Confidential information and data require special protection to prevent
            access and manipulation by unauthorised persons. Deutsche Bank is therefore encrypting
            e-mail communications with its clients. Read on to find out what you need to do and how
            you stand to benefit
          </p>

          <h2 className="sec-section-title">
            Secure e-mail communication using digital certificates and encryption
          </h2>

          <p className="cbs-body">
            Digital certificates form the basis of secure e-mail communication. These digital
            documents identify senders and recipients as the bonafide holders of their e-mail
            addresses. Certificates are only issued following verification of identity. Both parties
            communicating must be in possession of such a certificate and the issuing organisations
            must have confidence in one another. If these criteria are satisfied, an e-mail can be
            sent in an encrypted form (see diagram). The code required to decrypt an e-mail is
            available only to the clearly specified recipient.
          </p>

          <figure className="sec-infographic">
            <img
              src={images.infographic}
              alt="How encrypted e-mail communication with Deutsche Bank works"
              width={696}
              height={181}
              loading="lazy"
            />
          </figure>
        </div>

        <section className="ss-newsletter" aria-label="Newsletter sign-up">
          <img className="ss-newsletter-image" src={images.newsletter} alt="" />
          <div className="ss-newsletter-overlay" aria-hidden="true" />
          <div className="cms-content-wrapper ss-newsletter-content">
            <h2>
              Sign-up for
              <br />
              newsletters and
              <br />
              exclusive insights
            </h2>
            <a href="#" className="corp-btn corp-btn-solid">
              Sign me up
            </a>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
