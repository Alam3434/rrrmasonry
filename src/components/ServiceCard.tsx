import { Link } from 'react-router-dom';

interface ServiceCardProps {
  videoSrc: string;
  posterSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  className?: string;
}

export default function ServiceCard({
  videoSrc,
  posterSrc,
  title,
  description,
  link,
  linkText = "Explore Service",
  className = "",
}: ServiceCardProps) {
  return (
    <article className={`card service-card ${className}`.trim()}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={posterSrc}
        aria-label={title}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>{linkText}</Link>
    </article>
  );
}

