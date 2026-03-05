interface TestimonialProps {
  quote: string;
  author: string;
  className?: string;
}

export default function Testimonial({ quote, author, className = "" }: TestimonialProps) {
  return (
    <article className={`card testimonial ${className}`.trim()}>
      <p>"{quote}"</p>
      <strong>- {author}</strong>
    </article>
  );
}

