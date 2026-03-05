import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>RRR Masonry</h3>
          <p>Licensed and insured masonry contractor serving Raleigh and surrounding areas with quality craftsmanship.</p>
        </div>
        <div>
          <h3>Pages</h3>
          <p>
            <Link to="/services">Services</Link> | <Link to="/projects">Projects</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            <a href="tel:+19845007308">(984) 500-7308</a><br />
            <a href="mailto:rrrmasonry1@gmail.com">rrrmasonry1@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="container">
        <small>Copyright {currentYear} RRR Masonry. All rights reserved.</small>
      </div>
    </footer>
  );
}

