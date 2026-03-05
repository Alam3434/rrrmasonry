import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components';
import { useScrollAnimation } from '../hooks';

export default function ServicesPage() {
  useScrollAnimation();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        title="Masonry Services in Raleigh, NC"
        description="Built for homeowners and contractors who need durable, detail-driven masonry work done right."
        showCTA
      />

      <section className="section">
        <div className="container grid-3">
          <article className="card service-card fade-in stagger-1">
            <video autoPlay muted loop playsInline preload="metadata" poster="/rrr/project-2.jpg" aria-label="Brick and block masonry">
              <source src="/rrr/masonry-3.mp4" type="video/mp4" />
            </video>
            <h2>Brick &amp; Block Masonry</h2>
            <p>Brick veneer, structural block walls, chimney masonry, and residential brick details.</p>
            <p><Link to="/services/brick-block">View Service Page</Link></p>
          </article>
          <article className="card service-card fade-in stagger-2">
            <video autoPlay muted loop playsInline preload="metadata" poster="/rrr/project-3.jpg" aria-label="Stone and veneer masonry">
              <source src="/rrr/masonry-2.mp4" type="video/mp4" />
            </video>
            <h2>Stone Masonry &amp; Veneer</h2>
            <p>Natural and manufactured stone for facades, columns, fireplaces, and feature walls.</p>
            <p><Link to="/services/stone">View Service Page</Link></p>
          </article>
          <article className="card service-card fade-in stagger-3">
            <video autoPlay muted loop playsInline preload="metadata" poster="/rrr/project-4.jpg" aria-label="Patios and retaining walls">
              <source src="/rrr/masonry-1.mp4" type="video/mp4" />
            </video>
            <h2>Patios, Pavers &amp; Retaining Walls</h2>
            <p>Outdoor living masonry including pavers, hardscape patios, and retaining systems.</p>
            <p><Link to="/services/patios-retaining-walls">View Service Page</Link></p>
          </article>
        </div>
      </section>

      <CTABand
        title="Not sure which masonry service fits your project?"
        description="We can walk the site and recommend the best path based on structure, design, and budget."
        primaryText="Start My Quote"
        className="fade-in"
      />
    </>
  );
}

