import { Link } from 'react-router-dom';

interface CTABandProps {
  title: string;
  description: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  className?: string;
}

export default function CTABand({
  title,
  description,
  primaryText = "Get a Free Quote",
  primaryLink = "/contact",
  secondaryText = "Call Now",
  secondaryLink = "tel:+19845007308",
  className = "",
}: CTABandProps) {
  return (
    <section className={`cta-band ${className}`.trim()}>
      <div className="container cta-band-wrap">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="hero-cta">
          <Link className="btn btn-primary" to={primaryLink}>{primaryText}</Link>
          <a className="btn btn-secondary" href={secondaryLink}>{secondaryText}</a>
        </div>
      </div>
    </section>
  );
}

