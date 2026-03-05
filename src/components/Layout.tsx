import { Outlet } from 'react-router-dom';
import StickyCall from './StickyCall';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  stickyMessage?: string;
}

export default function Layout({ stickyMessage }: LayoutProps) {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <StickyCall message={stickyMessage} />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

