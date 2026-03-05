import { Link } from 'react-router-dom';
import { PageHero, FAQItem, CTABand } from '../components';
import { useScrollAnimation } from '../hooks';

export default function StoneMasonryPage() {
  useScrollAnimation();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Stone Masonry' }
        ]}
        title="Stone Masonry in Raleigh, NC"
        description="Custom stone and veneer installs that bring texture, value, and premium finish quality to your property."
        showCTA
      />

      <section className="section content">
        <div className="container grid-2 service-split">
          <article className="fade-in-left">
            <h2>Natural and Manufactured Stone Install Specialists</h2>
            <p>
              RRR Masonry installs stone systems for residential and contractor-led projects throughout
              the Triangle. We build exterior features, entry upgrades, fireplaces, accent walls, and
              veneer applications with close attention to pattern, alignment, and clean transitions.
            </p>
            <p>
              Stone work must look right and perform right. Our team prioritizes substrate preparation,
              layout strategy, and detail control so the final installation remains solid and visually
              consistent over time.
            </p>
            <p>
              Whether you need one statement feature or full stone integration, we provide clear scope
              guidance and quality execution from start to finish.
            </p>
            <h2>Process</h2>
            <div className="process-step">
              <h3>1. Style and Scope Planning</h3>
              <p>Confirm stone type, desired look, and layout approach.</p>
            </div>
            <div className="process-step">
              <h3>2. Surface Preparation</h3>
              <p>Prepare substrate and support system for durable install.</p>
            </div>
            <div className="process-step">
              <h3>3. Installation and Detail Cuts</h3>
              <p>Place stones with consistent pattern and clean joints.</p>
            </div>
            <div className="process-step">
              <h3>4. Final Cleanup and Review</h3>
              <p>Walk the project and confirm finish expectations.</p>
            </div>
          </article>
          <aside className="card fade-in-right">
            <img src="/rrr/project-4.jpg" alt="Stone chimney masonry example" />
            <h3>Related Services</h3>
            <p>
              Need structural support or hardscape integration? Visit{' '}
              <Link to="/services/brick-block">brick and block masonry</Link> and{' '}
              <Link to="/services/patios-retaining-walls">patios/retaining walls</Link>.
            </p>
            <p><Link className="btn btn-primary" to="/contact">Request Estimate</Link></p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="fade-in">FAQs</h2>
          <div className="grid-2">
            <FAQItem
              question="Do you install both natural and manufactured stone?"
              answer="Yes, we install both depending on project goals and budget."
              className="fade-in stagger-1"
            />
            <FAQItem
              question="Can stone be added to an existing facade?"
              answer="In many cases yes, after evaluating surface condition and support needs."
              className="fade-in stagger-2"
            />
            <FAQItem
              question="Do you provide no-cost estimates?"
              answer="Yes, all estimates are cost-free."
              className="fade-in stagger-3"
            />
          </div>
        </div>
      </section>

      <CTABand
        title="Upgrade your property with stone craftsmanship"
        description="Speak with RRR Masonry for a practical quote and timeline."
        className="fade-in"
      />
    </>
  );
}

