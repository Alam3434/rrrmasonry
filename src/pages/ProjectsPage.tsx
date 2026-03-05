import { PageHero, GalleryItem, CTABand } from '../components';
import { useScrollAnimation } from '../hooks';

export default function ProjectsPage() {
  useScrollAnimation();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
        title="Masonry Portfolio"
        description="Selected examples from RRR Masonry work across the Triangle."
      />

      <section className="section">
        <div className="container">
          <h2 className="fade-in">Work In Motion</h2>
          <div className="grid-3">
            <GalleryItem
              videoSrc="/rrr/masonry-1.mp4"
              posterSrc="/rrr/project-1.jpg"
              title="On-Site Installation"
              location="Raleigh"
              className="fade-in stagger-1"
            />
            <GalleryItem
              videoSrc="/rrr/masonry-2.mp4"
              posterSrc="/rrr/project-3.jpg"
              title="Stone Detail Work"
              location="Cary"
              className="fade-in stagger-2"
            />
            <GalleryItem
              videoSrc="/rrr/masonry-3.mp4"
              posterSrc="/rrr/project-2.jpg"
              title="Brick/Block Craftsmanship"
              location="Wake Forest"
              className="fade-in stagger-3"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <GalleryItem
              imageSrc="/rrr/project-1.jpg"
              title="Custom Masonry Feature"
              location="Location: Raleigh"
              className="fade-in stagger-1"
            />
            <GalleryItem
              imageSrc="/rrr/project-2.jpg"
              title="Brick and Block Work"
              location="Location: Cary"
              className="fade-in stagger-2"
            />
            <GalleryItem
              imageSrc="/rrr/project-3.jpg"
              title="Stone Veneer Installation"
              location="Location: Wake Forest"
              className="fade-in stagger-3"
            />
            <GalleryItem
              imageSrc="/rrr/project-4.jpg"
              title="Outdoor Masonry Hardscape"
              location="Location: Durham"
              className="fade-in stagger-4"
            />
          </div>
        </div>
      </section>

      <CTABand
        title="Send us your project idea"
        description="We will provide a practical estimate and scope direction."
        className="fade-in"
      />
    </>
  );
}

