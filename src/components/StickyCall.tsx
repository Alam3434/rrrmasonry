interface StickyCallProps {
  message?: string;
}

export default function StickyCall({ message = "Free masonry estimates in the Triangle" }: StickyCallProps) {
  return (
    <div className="sticky-call">
      <div className="container">
        <span>{message}</span>
        <a href="tel:+19845007308">Call (984) 500-7308</a>
      </div>
    </div>
  );
}

