interface FAQItemProps {
  question: string;
  answer: string;
  className?: string;
}

export default function FAQItem({ question, answer, className = "" }: FAQItemProps) {
  return (
    <article className={`faq-item ${className}`.trim()}>
      <h3>{question}</h3>
      <p>{answer}</p>
    </article>
  );
}

