import { Link } from 'react-router-dom';
import { PageHero, FAQItem, CTABand } from '../components';
import { useScrollAnimation } from '../hooks';

export default function PatiosRetainingWallsPage() {
  useScrollAnimation();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Patios & Retaining Walls' }
        ]}
        title="Patios & Retaining Walls in Raleigh, NC"
        description="Custom hardscape masonry that improves function, drainage, and outdoor living value."
        showCTA
      />

      <section className="section content">
        <div className="container grid-2 service-split">
          <article className="fade-in-left">
            <h2>Outdoor Chimney &amp; Fireplace Masonry in Raleigh</h2>
            <p>
              RRR Masonry designs and builds outdoor chimney and fireplace masonry for homeowners and
              contractors throughout Raleigh and nearby communities. We focus on stable foundations,
              clean firebox and surround detailing, and durable stone or brick finishes built for
              long-term outdoor exposure.
            </p>
            <p>
              From statement backyard fireplaces to full chimney features, our team balances visual
              impact with safe performance. We account for draft behavior, weather exposure, and proper
              material choices so your outdoor feature looks premium and performs season after season.
            </p>
            <p>
              We also handle supporting patios, seat walls, and connected hardscape details so your
              chimney feature integrates cleanly with the rest of your outdoor space.
            </p>
            <h2>Process</h2>
            <div className="process-step">
              <h3>1. Site and Grade Assessment</h3>
              <p>Evaluate layout area, elevation changes, and drainage needs.</p>
            </div>
            <div className="process-step">
              <h3>2. Design + Material Selection</h3>
              <p>Choose paver/stone type, edge detail, and wall style.</p>
            </div>
            <div className="process-step">
              <h3>3. Base Preparation + Build</h3>
              <p>Install compacted base and execute masonry scope to spec.</p>
            </div>
            <div className="process-step">
              <h3>4. Final Detailing</h3>
              <p>Finish edges, joints, transitions, and site cleanup.</p>
            </div>
          </article>
          <aside className="card fade-in-right">
            <img src="/rrr/project-3.jpg" alt="Outdoor stone chimney masonry project" />
            <h3>Need a Chimney-Focused Masonry Team?</h3>
            <p>
              See <Link to="/services/brick-block">brick and block masonry</Link> and{' '}
              <Link to="/services/stone">stone masonry</Link> for chimney surrounds, facade tie-ins,
              and full exterior upgrades.
            </p>
            <p><Link className="btn btn-primary" to="/contact">Start Estimate</Link></p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="fade-in">FAQs</h2>
          <div className="grid-2">
            <FAQItem
              question="Do retaining walls require permits?"
              answer="Some walls do depending on height and site conditions. We advise during scoping."
              className="fade-in stagger-1"
            />
            <FAQItem
              question="Can you build paver driveways?"
              answer="Yes, we provide paver driveway and patio installation services."
              className="fade-in stagger-2"
            />
            <FAQItem
              question="Do you serve Durham and Chapel Hill?"
              answer="Yes, both are in our active service area."
              className="fade-in stagger-3"
            />
          </div>
        </div>
      </section>

      <CTABand
        title="Build an outdoor space that lasts"
        description="Get a free patio or retaining wall quote from RRR Masonry."
        className="fade-in"
      />
    </>
  );
}

