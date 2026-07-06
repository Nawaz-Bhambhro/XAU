import InvestorReportingLayout from '../components/InvestorReportingLayout'

export default function InvestorReportingPage() {
  return (
    <InvestorReportingLayout activeNav="home" showDealSearch>
      <section className="ir-hero">
        <div className="ir-hero-inner">
          <h2 className="ir-hero-title">
            Welcome to Deutsche Bank Corporate Trust Investor Reporting
          </h2>
          <p className="ir-hero-subtitle">
            Learn more about Deutsche Bank Trust and Agency Services.
          </p>
          <a
            href="https://corporates.db.com/solutions/corporate-bank-solutions/Trust-and-agency-services/"
            className="ir-hero-cta"
            target="_blank"
            rel="noreferrer"
          >
            Find Out More
          </a>
        </div>
      </section>

      <section className="ir-notice">
        <h2 className="ir-notice-heading">
          Welcome, Bienvenue, Willkommen, Fáilte, Benvenuto, Bienvenido
        </h2>
        <p className="ir-notice-text">
          Please contact us via{' '}
          <a href="mailto:investor-reporting@list.db.com">investor-reporting@list.db.com</a>{' '}
          should you have any questions about the new site or encounter any difficulties.
        </p>
      </section>
    </InvestorReportingLayout>
  )
}
