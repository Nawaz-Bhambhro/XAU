import { useState } from 'react'
import { SiteLayout } from '../components/Layout'
import '../Corporates.css'

const corpImg = (path) => `https://corporates.db.com/${path}`

const images = {
  hero: corpImg(
    'contentAsset/raw-data/b7eb5dbd-3b38-4ef7-80be-beafd9b72b6f/fileAsset?language_id=1'
  ),
  flowVideo: corpImg(
    'contentAsset/image/6e63d330-3ae7-44c8-9481-fadb09b728b4/fileAsset/filter/Resize,Jpeg/resize_w/1280/479debba-707f-4e10-98c6-d1f1b8d90371.jpg'
  ),
  googlePlay: corpImg(
    'contentAsset/image/11d6034b-6005-4f2c-b8be-3d023b5d3e09/fileAsset/filter/Resize,Jpeg/resize_w/1280/fef29193-619e-46a9-a73e-fe8c22187317l.jpg'
  ),
  appStore: corpImg(
    'contentAsset/image/7270f879-6a6a-44b6-8e50-f7cfd8ad5bd7/fileAsset/filter/Resize,Jpeg/resize_w/1280/dec89650-edb0-480f-ad59-1030763dcac0l.jpg'
  ),
}

export default function InternationalPaymentTrackingPage() {
  const [activeTab, setActiveTab] = useState('uetr')

  return (
    <SiteLayout activeSubNav="Solutions" headerVariant="corporates" footerVariant="corporates">
      <main className="ipt-page">
        <section className="cbs-hero" aria-label="International payment tracking">
          <img className="cbs-hero-image" src={images.hero} alt="" />
          <div className="cms-content-wrapper cbs-hero-content">
            <h1>International payment tracking</h1>
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
              International Payment Tracking
            </span>
          </nav>

          <p className="ipt-intro">
            Welcome to the Deutsche Bank International payments tracker. This page provides our
            clients and their customers the ability to trace cross-border payments that are
            processed through the Deutsche Bank branch network, utilising the Unique End-to-End
            Transaction Reference (UETR) identifier that is now required on all cross border
            transactions processed via the SWIFT network to provide you with up to the minute status
            on your transactions
          </p>

          <a
            href="/solutions/client-access-solutions/international-payment-tracking/help-guide"
            className="corp-btn corp-btn-solid ipt-help-btn"
          >
            Read our help guide
          </a>
        </div>

        <section className="ipt-tracker-section cms-content-wrapper" aria-label="Payment Tracker">
          <div className="ipt-tracker-card cb-payment-tracker">
            <div className="ipt-tracker-card-content">
              <div className="ipt-tracker-headline">
                <h2>Payment Tracker</h2>
              </div>
              <p className="ipt-tracker-hint">
                Please enter your UETR or alternatively your payment details. All fields are
                mandatory.
              </p>

              <div className="ipt-tabs" role="tablist" aria-label="Search type">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'uetr'}
                  className={`ipt-tab${activeTab === 'uetr' ? ' ipt-tab--active' : ''}`}
                  onClick={() => setActiveTab('uetr')}
                >
                  UETR
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'payment-details'}
                  className={`ipt-tab${activeTab === 'payment-details' ? ' ipt-tab--active' : ''}`}
                  onClick={() => setActiveTab('payment-details')}
                >
                  Payment Details
                </button>
              </div>

              <form className="ipt-tracker-form" onSubmit={(e) => e.preventDefault()}>
                {activeTab === 'uetr' ? (
                  <div className="ipt-field">
                    <label htmlFor="ipt-uetr">Unique End-to-End Transaction Reference</label>
                    <input id="ipt-uetr" name="uetr" type="text" />
                  </div>
                ) : (
                  <>
                    <div className="ipt-field">
                      <label htmlFor="ipt-amount">Payment amount</label>
                      <input id="ipt-amount" name="amount" type="text" />
                    </div>
                    <div className="ipt-field">
                      <label htmlFor="ipt-currency">Currency</label>
                      <input id="ipt-currency" name="currency" type="text" />
                    </div>
                    <div className="ipt-field">
                      <label htmlFor="ipt-date">Value date</label>
                      <input id="ipt-date" name="valueDate" type="date" />
                    </div>
                  </>
                )}
                <button type="submit" className="corp-btn corp-btn-solid ipt-submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="ipt-flow-section cms-content-wrapper" aria-label="flow app">
          <h2 className="ipt-flow-title">
            Did you know that you can track your cross-border payments with our flow app?
          </h2>

          <div className="ipt-flow-banner">
            <div className="ipt-flow-video">
              <img src={images.flowVideo} alt="" />
              <button type="button" className="ipt-play-btn" aria-label="Play video">
                ▶
              </button>
            </div>
            <div className="ipt-flow-panel">
              <p>
                Download Deutsche Bank&apos;s flow app to track your payments on-the-go
              </p>
            </div>
          </div>

          <div className="ipt-app-badges">
            <a
              href="https://flow.db.com/app/flow-app-google"
              target="_blank"
              rel="noreferrer"
            >
              <img src={images.googlePlay} alt="Get it on Google Play" />
            </a>
            <a href="https://flow.db.com/app/flow-app-apple" target="_blank" rel="noreferrer">
              <img src={images.appStore} alt="Download on the App Store" />
            </a>
          </div>

          <p className="ipt-flow-footer">Deutsche Bank flow app. Download now.</p>
        </section>
      </main>
    </SiteLayout>
  )
}
