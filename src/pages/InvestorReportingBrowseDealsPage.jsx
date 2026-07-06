import InvestorReportingLayout from '../components/InvestorReportingLayout'

const deals = [
  { name: '321 Henderson Receivables II, LLC 2006-3', productType: 'ABS', privacy: 'Private', closingDate: '26 Sep 2006', issuer: '-' },
  { name: '321 Henderson Receivables II, LLC 2006-2', productType: 'ABS', privacy: 'Private', closingDate: '15 Mar 2006', issuer: '-' },
  { name: '321 Henderson Receivables II, LLC 2005-1', productType: 'ABS', privacy: 'Private', closingDate: '08 Nov 2005', issuer: '-' },
  { name: '321 Henderson Receivables Trust I 2004-A', productType: 'ABS', privacy: 'Private', closingDate: '21 Jul 2004', issuer: '-' },
  { name: '321 Henderson Receivables Trust I 2003-B', productType: 'ABS', privacy: 'Private', closingDate: '12 Dec 2003', issuer: '-' },
  { name: '321 Henderson Receivables Trust I 2002-A', productType: 'ABS', privacy: 'Private', closingDate: '19 Jun 2002', issuer: '-', active: true },
  { name: 'Aames Investment Trust 2004-1', productType: 'ABS', privacy: 'Private', closingDate: '30 Apr 2004', issuer: '-' },
  { name: 'Aames Investment Trust 2003-2', productType: 'ABS', privacy: 'Private', closingDate: '14 Oct 2003', issuer: '-' },
  { name: 'Aames Investment Trust 2002-1', productType: 'ABS', privacy: 'Public', closingDate: '22 Feb 2002', issuer: '-' },
  { name: 'ABFC Asset-Backed Certificates Series 2006-OPT1', productType: 'ABS', privacy: 'Private', closingDate: '07 Aug 2006', issuer: '-' },
  { name: 'ABFC Asset-Backed Certificates Series 2005-OPT2', productType: 'ABS', privacy: 'Private', closingDate: '03 May 2005', issuer: '-' },
  { name: 'ABFC Asset-Backed Certificates Series 2004-OPT1', productType: 'ABS', privacy: 'Public', closingDate: '18 Nov 2004', issuer: '-' },
  { name: 'ABFC Asset-Backed Certificates Series 2003-OPT3', productType: 'ABS', privacy: 'Private', closingDate: '09 Sep 2003', issuer: '-' },
  { name: 'ABFC Asset-Backed Certificates Series 2002-OPT2', productType: 'ABS', privacy: 'Private', closingDate: '27 Mar 2002', issuer: '-' },
  { name: 'ABFC Asset-Backed Certificates Series 2001-OPT1', productType: 'ABS', privacy: 'Private', closingDate: '11 Dec 2001', issuer: '-' },
]

const columns = ['Deal Name', 'Product Type', 'Privacy', 'Closing Date', 'Issuer']

function SortIcon() {
  return (
    <span className="ir-deals-sort" aria-hidden="true">
      <svg viewBox="0 0 10 12" width="10" height="12">
        <path d="M5 0L9 4H1L5 0Z" fill="currentColor" />
        <path d="M5 12L1 8H9L5 12Z" fill="currentColor" />
      </svg>
    </span>
  )
}

export default function InvestorReportingBrowseDealsPage() {
  return (
    <InvestorReportingLayout activeNav="browse">
      <div className="ir-browse">
        <aside className="ir-browse-filters" aria-label="Search and filters">
          <form className="ir-browse-filters-form" onSubmit={(e) => e.preventDefault()}>
            <div className="ir-browse-search">
              <input type="search" placeholder="Search Name, Cusip, Ticker" aria-label="Search Name, Cusip, Ticker" />
              <button type="submit" aria-label="Search">
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <circle cx="6.5" cy="6.5" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 10l4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <label className="ir-browse-field">
              <span className="ir-browse-label">Product Type</span>
              <div className="ir-browse-select-wrap">
                <select defaultValue="" aria-label="Product Type">
                  <option value="" />
                </select>
                <span className="ir-browse-select-arrow" aria-hidden="true" />
              </div>
            </label>

            <label className="ir-browse-field">
              <span className="ir-browse-label">Issuer</span>
              <div className="ir-browse-select-wrap">
                <select defaultValue="" aria-label="Issuer">
                  <option value="" />
                </select>
                <span className="ir-browse-select-arrow" aria-hidden="true" />
              </div>
            </label>

            <div className="ir-browse-date-group">
              <label className="ir-browse-field ir-browse-field--date">
                <span className="ir-browse-label">Closing Date From:</span>
                <input type="text" placeholder="dd mmm yyyy" aria-label="Closing Date From" />
              </label>
              <label className="ir-browse-field ir-browse-field--date">
                <span className="ir-browse-label">Closing Date To:</span>
                <input type="text" placeholder="dd mmm yyyy" aria-label="Closing Date To" />
              </label>
            </div>

            <fieldset className="ir-browse-privacy">
              <legend>Deal Privacy:</legend>
              <label className="ir-browse-radio">
                <input type="radio" name="privacy" value="all" defaultChecked />
                <span>All</span>
              </label>
              <label className="ir-browse-radio">
                <input type="radio" name="privacy" value="private" />
                <span>Private</span>
              </label>
              <label className="ir-browse-radio">
                <input type="radio" name="privacy" value="public" />
                <span>Public</span>
              </label>
            </fieldset>
          </form>
        </aside>

        <section className="ir-browse-results" aria-label="Deal search results">
          <p className="ir-browse-total">
            <strong>Total Results: 5241</strong>
          </p>

          <div className="ir-deals-table-wrap">
            <table className="ir-deals-table">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th key={col} scope="col">
                      <button type="button" className="ir-deals-th-btn">
                        {col}
                        <SortIcon />
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {deals.map((deal) => (
                  <tr key={deal.name}>
                    <td>
                      <a href="#" className={deal.active ? 'ir-deals-link ir-deals-link--active' : 'ir-deals-link'}>
                        {deal.name}
                      </a>
                    </td>
                    <td>{deal.productType}</td>
                    <td>{deal.privacy}</td>
                    <td>{deal.closingDate}</td>
                    <td>{deal.issuer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </InvestorReportingLayout>
  )
}
