import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import {
  HomePage,
  ServicesPage,
  AboutPage,
  ProjectsPage,
  ReviewsPage,
  ContactPage,
  FAQPage,
  BrickBlockPage,
  StoneMasonryPage,
  PatiosRetainingWallsPage,
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/brick-block" element={<BrickBlockPage />} />
          <Route path="services/stone" element={<StoneMasonryPage />} />
          <Route path="services/patios-retaining-walls" element={<PatiosRetainingWallsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

