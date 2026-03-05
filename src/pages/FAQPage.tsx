import { PageHero, FAQItem } from '../components';
import { useScrollAnimation } from '../hooks';

export default function FAQPage() {
  useScrollAnimation();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
        title="FAQ"
        description="Helpful answers for masonry customers across Raleigh and nearby cities."
      />

      <section className="section">
        <div className="container grid-2">
          <FAQItem
            question="Do you offer free estimates?"
            answer="Yes, all masonry estimates are cost-free."
            className="fade-in stagger-1"
          />
          <FAQItem
            question="What areas do you serve?"
            answer="Raleigh, Cary, Wake Forest, Chapel Hill, and Durham."
            className="fade-in stagger-2"
          />
          <FAQItem
            question="Are you licensed and insured?"
            answer="Yes, RRR Masonry is licensed and insured."
            className="fade-in stagger-3"
          />
          <FAQItem
            question="Do you work with contractors?"
            answer="Yes, we work with homeowners and contractors."
            className="fade-in stagger-4"
          />
        </div>
      </section>
    </>
  );
}

