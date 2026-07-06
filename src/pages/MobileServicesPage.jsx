import { SiteLayout } from '../components/Layout'
import '../MobileServices.css'

const phoneImage =
  'https://www.db.com/contentAsset/image/7d956d42-8cd0-43b8-b480-5ade91b4b6c8/fileAsset/filter/Resize,Jpeg/resize_w/1280/94862fd2-4dd4-4625-80b3-c779050b58fcl.jpg'

export default function MobileServicesPage() {
  return (
    <SiteLayout activeSubNav="What we do">
      <main className="ms-page">
        <div className="cms-content-wrapper">
          <nav className="ms-breadcrumb" aria-label="Breadcrumb">
            You are here:
            <a href="/">Home</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/products-and-services">What we do</a>
            <span aria-hidden="true">&gt;</span>
            <a href="/products-and-services">Products and services</a>
            <span aria-hidden="true">&gt;</span>
            <span className="ms-breadcrumb-current" aria-current="page">
              Mobile services
            </span>
          </nav>

          <h1 className="ms-title">Mobile services</h1>

          <section className="ms-hero" aria-label="Mobile services apps">
            <div className="ms-grid">
              <div className="ms-media">
                <img className="ms-image" src={phoneImage} alt="" />
              </div>
              <div className="ms-content">
                <h2 className="ms-heading">X.A.U System — K.ULLAS mobile platform</h2>
                <p className="ms-text">
                  Access the X.A.U Global digital ecosystem on your mobile device. Manage your gold
                  vault, digital wallet, payment cards and project dashboard securely through the
                  K.ULLAS app for Android and iOS.
                </p>

                <div className="ms-badges" aria-label="App store links">
                  <a
                    className="ms-badge ms-badge--google"
                    href="#"
                    aria-label="Get it on Google Play"
                  >
                    <span className="ms-badge-top">Get it on</span>
                    <span className="ms-badge-bottom">Google Play</span>
                  </a>
                  <a
                    className="ms-badge ms-badge--apple"
                    href="#"
                    aria-label="Download on the App Store"
                  >
                    <span className="ms-badge-top">Download on the</span>
                    <span className="ms-badge-bottom">App Store</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </SiteLayout>
  )
}

