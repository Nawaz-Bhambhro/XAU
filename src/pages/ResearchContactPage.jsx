import { SiteLayout } from '../components/Layout'
import { ResearchShell } from '../components/ResearchShell'
import '../Research.css'
import '../ResearchContact.css'

const formFields = [
  { id: 'surname', label: 'Surname:', type: 'text' },
  { id: 'firstname', label: 'First name(s):', type: 'text' },
  { id: 'company', label: 'Company:', type: 'text' },
  { id: 'street', label: 'Street:', type: 'text' },
  { id: 'city', label: 'City, postal code:', type: 'text' },
  { id: 'phone', label: 'Phone number:', type: 'text' },
  { id: 'email', label: 'E-Mail:', type: 'email' },
]

export default function ResearchContactPage() {
  return (
    <SiteLayout activeUtility="Contact" footerVariant="research-contact">
      <main className="research-page research-contact-page">
        <ResearchShell activeNav="Home">
          <div className="cms-content-wrapper research-contact-content">
            <h1 className="research-contact-title">Contact Deutsche Bank Research Institute</h1>

            <p className="research-contact-intro">For more information, please contact us:</p>

            <div className="research-contact-info">
              <div className="research-contact-col">
                <p className="research-contact-org">Deutsche Bank AG</p>
                <p>
                  <strong>Address:</strong> 21 Moorfields, EC2Y 9DB London
                </p>
                <p>
                  <strong>E-mail:</strong>{' '}
                  <a href="mailto:DBResearch.institute@db.com">DBResearch.institute@db.com</a>
                </p>
              </div>

              <div className="research-contact-col">
                <p>
                  <strong>Responsible:</strong> David Folkerts-Landau
                </p>
                <p>Group Chief Economist and Global Head of Research</p>
                <p>Deutsche Bank AG</p>
                <p>21 Moorfields, EC2Y 9DB London</p>
              </div>
            </div>

            <section className="research-contact-form-section" aria-label="Contact form">
              <h2 className="research-contact-form-title">Contact form</h2>

              <form className="research-contact-form" onSubmit={(e) => e.preventDefault()}>
                {formFields.map((field) => (
                  <div key={field.id} className="research-contact-field">
                    <label htmlFor={field.id}>{field.label}</label>
                    <input id={field.id} name={field.id} type={field.type} />
                  </div>
                ))}

                <div className="research-contact-field research-contact-field--textarea">
                  <label htmlFor="comments">Your comments:</label>
                  <textarea id="comments" name="comments" rows={6} />
                </div>

                <div className="research-contact-actions">
                  <button type="submit" className="research-contact-btn">Submit form</button>
                  <button type="reset" className="research-contact-btn">Reset</button>
                </div>
              </form>
            </section>
          </div>
        </ResearchShell>
      </main>
    </SiteLayout>
  )
}
