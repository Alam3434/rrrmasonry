import { useForm, ValidationError } from '@formspree/react';
import { PageHero } from '../components';
import { useScrollAnimation } from '../hooks';

export default function ContactPage() {
  useScrollAnimation();
  const [state, handleSubmit] = useForm("xgonwgjn");

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        title="Get a Free Masonry Quote"
        description="Tell us what you need and we will respond with scope guidance and next steps."
      />

      <section className="section">
        <div className="container grid-2">
          <div className="form-wrap fade-in-left">
            <h2>Quote Request Form</h2>
            {state.succeeded ? (
              <div className="form-success">
                <h3>Thank you for your request!</h3>
                <p>We've received your quote request and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" required />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service" required>
                  <option value="">Select a service</option>
                  <option>Brick Masonry</option>
                  <option>Stone Masonry</option>
                  <option>Block Walls</option>
                  <option>Retaining Walls</option>
                  <option>Pavers / Driveways</option>
                  <option>Patios</option>
                  <option>Outdoor Fireplaces</option>
                  <option>Foundation Work</option>
                  <option>Residential Masonry</option>
                  <option>Brick Veneer / Chimneys</option>
                </select>
                <ValidationError prefix="Service" field="service" errors={state.errors} />

                <label htmlFor="description">Project Description</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  placeholder="Share location, timeline, and what you want built"
                ></textarea>
                <ValidationError prefix="Description" field="description" errors={state.errors} />

                <button className="btn btn-primary" type="submit" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Get a Free Quote'}
                </button>
              </form>
            )}
          </div>
          <aside className="card fade-in-right">
            <h2>Direct Contact</h2>
            <p><strong>Owner:</strong> Rogelio Ruiz</p>
            <p><strong>Phone:</strong> <a href="tel:+19845007308">(984) 500-7308</a></p>
            <p><strong>Email:</strong> <a href="mailto:rrrmasonry1@gmail.com">rrrmasonry1@gmail.com</a></p>
            <p><strong>Service Areas:</strong> Raleigh, Cary, Wake Forest, Chapel Hill, Durham</p>
            <p><strong>Business Address:</strong> Available on request</p>
            <p>
              <strong>Business Hours:</strong><br />
              Mon-Fri: 7:00 AM - 6:00 PM<br />
              Sat: 8:00 AM - 2:00 PM<br />
              Sun: Closed
            </p>
            <p><a className="btn btn-secondary" href="tel:+19845007308">Tap to Call</a></p>
          </aside>
        </div>
      </section>

      <section className="section fade-in">
        <div className="container map-wrap">
          <h2>Service Area Map</h2>
          <div className="map-container">
            <iframe
              className="service-area-map-iframe"
              title="RRR Masonry service area map"
              loading="lazy"
              src="https://www.google.com/maps?q=35.87,-78.79&z=9&output=embed"
            ></iframe>
            <svg className="service-area-circle" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <circle cx="50" cy="50" r="38" fill="rgba(123, 18, 38, 0.2)" stroke="#7b1226" strokeWidth="2" strokeDasharray="4,3"/>
            </svg>
          </div>
          <p className="map-legend">Serving Raleigh, Cary, Wake Forest, Chapel Hill, and Durham</p>
        </div>
      </section>
    </>
  );
}

