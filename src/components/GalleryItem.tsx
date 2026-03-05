interface GalleryItemProps {
  imageSrc?: string;
  videoSrc?: string;
  posterSrc?: string;
  title: string;
  location: string;
  className?: string;
}

export default function GalleryItem({
  imageSrc,
  videoSrc,
  posterSrc,
  title,
  location,
  className = "",
}: GalleryItemProps) {
  return (
    <article className={`gallery-item ${className}`.trim()}>
      {videoSrc ? (
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
      ) : (
        <img src={imageSrc} alt={title} />
      )}
      <div className="meta">
        <strong>{title}</strong>
        <p>{location}</p>
      </div>
    </article>
  );
}

