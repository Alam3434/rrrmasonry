import { PageHero, Testimonial } from '../components';
import { useScrollAnimation } from '../hooks';

export default function ReviewsPage() {
  useScrollAnimation();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]}
        title="Reviews / Testimonials"
        description="RRR Masonry is building local trust through quality work and consistent professionalism."
      />

      <section className="section">
        <div className="container grid-2">
          <Testimonial
            quote="High standards and excellent attention to detail. The finished masonry work came out exactly how we wanted."
            author="Raleigh Homeowner"
            className="fade-in stagger-1"
          />
          <Testimonial
            quote="Professional crew and clear communication. They kept the project clean and on schedule."
            author="Cary Client"
            className="fade-in stagger-2"
          />
          <Testimonial
            quote="Reliable and accountable from estimate to completion. Great quality on our retaining wall install."
            author="Durham Client"
            className="fade-in stagger-3"
          />
          <Testimonial
            quote="Cost-free estimate, no pressure, and strong workmanship. I would hire RRR Masonry again."
            author="Wake Forest Homeowner"
            className="fade-in stagger-4"
          />
        </div>
      </section>
    </>
  );
}

