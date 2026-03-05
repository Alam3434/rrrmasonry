import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/">
          <img src="/rrr/logo.png" alt="RRR Masonry logo" />
          <span>RRR Masonry</span>
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
        <nav className={isOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link className="btn btn-primary" to="/contact">Get a Free Quote</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

