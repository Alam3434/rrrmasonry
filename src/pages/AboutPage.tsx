import { PageHero } from '../components';
import { useScrollAnimation } from '../hooks';

export default function AboutPage() {
  useScrollAnimation();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        title="About RRR Masonry"
        description="Owner-led masonry craftsmanship built on quality, accountability, and professional service."
      />

      <section className="section content">
        <div className="container grid-2">
          <article className="fade-in-left">
            <h2>Company Story</h2>
            <p>
              RRR Masonry was founded by Rogelio Ruiz to deliver masonry work with high standards and
              consistent professionalism. Over the past 10 years, the company has built a strong local
              reputation by focusing on quality work, attention to detail, and clear communication.
            </p>
            <p>
              We work with homeowners and contractors on projects ranging from decorative masonry to
              structural wall systems and hardscape construction. Every project starts with a practical
              plan and ends with clean, durable workmanship.
            </p>
            <h2>Why Clients Choose Us</h2>
            <ul className="check-list">
              <li>Accept full accountability</li>
              <li>High standards and consistent work quality</li>
              <li>Professional and respectful site conduct</li>
              <li>Licensed and insured services</li>
              <li>Cost-free estimates</li>
            </ul>
          </article>
          <aside className="card fade-in-right">
            <img src="/rrr/project-1.jpg" alt="RRR Masonry owner on site" />
            <h3>Company Snapshot</h3>
            <img className="about-badge" src="/rrr/10yearExperience.png" alt="10 years experience badge" />
            <p>
              <strong>Owner:</strong> Rogelio Ruiz<br />
              <strong>Years in Business:</strong> 10<br />
              <strong>Service Area:</strong> Raleigh, Cary, Wake Forest, Chapel Hill, Durham
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

