import { Link } from 'react-router-dom';
import { PageHero, FAQItem, CTABand } from '../components';
import { useScrollAnimation } from '../hooks';

export default function BrickBlockPage() {
  useScrollAnimation();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Brick & Block' }
        ]}
        title="Brick Masonry in Raleigh, NC"
        description="Professional brick and block installs with clean lines, structural integrity, and lasting curb appeal."
        showCTA
      />

      <section className="section content">
        <div className="container grid-2 service-split">
          <article className="fade-in-left">
            <h2>Brick and Block Work You Can Trust</h2>
            <p>
              RRR Masonry provides brick masonry and block wall services for homeowners and contractors
              across Raleigh, Cary, Wake Forest, Chapel Hill, and Durham. We focus on durable install
              quality, consistent workmanship, and responsible project communication from estimate to
              final cleanup.
            </p>
            <p>
              Our team handles brick veneer, structural block walls, residential chimney masonry, and
              foundation-related masonry scopes. We start by reviewing the project intent, layout
              constraints, and structural requirements so every run, corner, and joint is intentional
              and accurate.
            </p>
            <p>
              Customers choose RRR Masonry because we hold high standards and full accountability on
              every job. If you need professional masonry that balances appearance and performance, we
              are ready to scope your project.
            </p>
            <h2>Process</h2>
            <div className="process-step">
              <h3>1. Site Review</h3>
              <p>Confirm dimensions, substrate, and existing conditions.</p>
            </div>
            <div className="process-step">
              <h3>2. Scope + Estimate</h3>
              <p>Clear proposal with recommended material and layout approach.</p>
            </div>
            <div className="process-step">
              <h3>3. Build + Detail Work</h3>
              <p>Precision install with consistent joints and finish quality.</p>
            </div>
            <div className="process-step">
              <h3>4. Final Walkthrough</h3>
              <p>Quality check and punch list completion.</p>
            </div>
          </article>
          <aside className="card fade-in-right">
            <img src="/rrr/project-2.jpg" alt="Brick masonry wall detail" />
            <h3>Also Need Stone or Hardscape?</h3>
            <p>
              Explore related services: <Link to="/services/stone">stone masonry</Link> and{' '}
              <Link to="/services/patios-retaining-walls">patios/retaining walls</Link>.
            </p>
            <p><Link className="btn btn-primary" to="/contact">Book Estimate</Link></p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="fade-in">FAQs</h2>
          <div className="grid-2">
            <FAQItem
              question="Do you repair existing brick work?"
              answer="Yes, we handle repair and replacement depending on condition."
              className="fade-in stagger-1"
            />
            <FAQItem
              question="Are you licensed and insured?"
              answer="Yes, RRR Masonry is licensed and insured."
              className="fade-in stagger-2"
            />
            <FAQItem
              question="Do you provide free estimates?"
              answer="Yes, cost-free estimates are part of our process."
              className="fade-in stagger-3"
            />
          </div>
        </div>
      </section>

      <CTABand
        title="Ready for quality brick masonry?"
        description="Get your scope reviewed by a local masonry pro."
        className="fade-in"
      />
    </>
  );
}

