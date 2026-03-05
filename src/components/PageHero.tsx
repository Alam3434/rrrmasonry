import { Link } from 'react-router-dom';

interface Breadcrumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  breadcrumbs: Breadcrumb[];
  title: string;
  description: string;
  showCTA?: boolean;
}

export default function PageHero({ breadcrumbs, title, description, showCTA = false }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="breadcrumbs">
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {crumb.to ? (
                <Link to={crumb.to}>{crumb.label}</Link>
              ) : (
                crumb.label
              )}
              {index < breadcrumbs.length - 1 && ' / '}
            </span>
          ))}
        </p>
        <h1>{title}</h1>
        <p>{description}</p>
        {showCTA && (
          <p><Link className="btn btn-primary" to="/contact">Get a Free Quote</Link></p>
        )}
      </div>
    </section>
  );
}

