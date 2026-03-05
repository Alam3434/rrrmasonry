import { Link } from 'react-router-dom';
import { ServiceCard, CTABand, GalleryItem, StatBox } from '../components';
import { useScrollAnimation } from '../hooks';

export default function HomePage() {
  useScrollAnimation();

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Masonry Contractor in Raleigh, NC</h1>
            <p>
              RRR Masonry delivers brick, stone, pavers, and structural masonry with high standards,
              careful detail, and professional service. Residential homeowners and contractors trust us
              for consistent work and clean execution.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" to="/contact">Get a Free Quote</Link>
              <a className="btn btn-secondary" href="tel:+19845007308">Call (984) 500-7308</a>
            </div>
            <div className="badges">
              <span>Licensed</span>
              <span>Insured</span>
              <span>10 Years Experience</span>
              <span>Quality-First Workmanship</span>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-video-wrap">
              <video autoPlay muted loop playsInline preload="metadata" aria-label="RRR Masonry crew working on masonry construction">
                <source src="/rrr/masonry-1.mp4" type="video/mp4" />
              </video>
            </div>
            <img className="hero-seal" src="/rrr/10yearExperience.png" alt="10 years experience badge" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="fade-in">Masonry Services</h2>
          <p className="section-intro fade-in">From decorative installs to structural wall systems, we build masonry that lasts and looks right.</p>
          <div className="grid-3">
            <ServiceCard
              videoSrc="/rrr/masonry-3.mp4"
              posterSrc="/rrr/project-2.jpg"
              title="Brick & Block Masonry"
              description="Brick veneer, block walls, chimneys, and structural masonry for residential and contractor projects."
              link="/services/brick-block"
              className="fade-in stagger-1"
            />
            <ServiceCard
              videoSrc="/rrr/masonry-2.mp4"
              posterSrc="/rrr/project-3.jpg"
              title="Stone Masonry & Veneer"
              description="Natural and manufactured stone installs for facades, accent walls, fireplaces, and outdoor features."
              link="/services/stone"
              className="fade-in stagger-2"
            />
            <ServiceCard
              videoSrc="/rrr/masonry-1.mp4"
              posterSrc="/rrr/project-4.jpg"
              title="Patios, Pavers & Retaining Walls"
              description="Hardscape builds that improve curb appeal, drainage control, and usable outdoor living space."
              link="/services/patios-retaining-walls"
              className="fade-in stagger-3"
            />
          </div>
        </div>
      </section>

      <CTABand
        title="Need pricing for your masonry project?"
        description="Get a cost-free estimate and a practical scope recommendation."
        className="fade-in"
      />

      <section className="section">
        <div className="container">
          <h2 className="fade-in">Why Customers Choose RRR Masonry</h2>
          <div className="grid-2">
            <div className="card fade-in-left">
              <ul className="trust">
                <li><strong>Full accountability:</strong> We own the details from estimate to completion.</li>
                <li><strong>High standards:</strong> Work is held to clean lines and durable installs.</li>
                <li><strong>Attention to detail:</strong> Precision layout, cuts, joints, and finish consistency.</li>
                <li><strong>Cost-free estimates:</strong> Clear scope and pricing without pressure.</li>
                <li><strong>Consistent professional work:</strong> Reliable communication and site respect.</li>
              </ul>
            </div>
            <div className="grid-2">
              <StatBox value="10+" label="Years in Business" className="scale-in stagger-1" />
              <StatBox value="Licensed" label="Professional Standards" className="scale-in stagger-2" />
              <StatBox value="Insured" label="Protected Projects" className="scale-in stagger-3" />
              <StatBox value="Fast" label="Estimate Response" className="scale-in stagger-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="fade-in">Project Preview</h2>
          <div className="grid-3">
            <GalleryItem
              imageSrc="/rrr/project-1.jpg"
              title="Custom Masonry Install"
              location="Raleigh, NC"
              className="fade-in stagger-1"
            />
            <GalleryItem
              imageSrc="/rrr/project-2.jpg"
              title="Brick Detail Work"
              location="Cary, NC"
              className="fade-in stagger-2"
            />
            <GalleryItem
              imageSrc="/rrr/project-3.jpg"
              title="Stone Exterior Upgrade"
              location="Wake Forest, NC"
              className="fade-in stagger-3"
            />
          </div>
          <p className="fade-in"><Link className="btn btn-primary" to="/projects">View Full Portfolio</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="fade-in">Service Areas</h2>
          <p className="section-intro fade-in">Primary coverage across the Triangle:</p>
          <div className="locations fade-in">
            <span>Raleigh</span><span>Cary</span><span>Wake Forest</span><span>Chapel Hill</span><span>Durham</span>
          </div>
        </div>
      </section>

      <CTABand
        title="Start your masonry project with confidence"
        description="Tell us your scope and we will provide a clear next-step quote plan."
        secondaryText="(984) 500-7308"
        className="fade-in"
      />
    </>
  );
}

