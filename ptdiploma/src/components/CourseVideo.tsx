interface CourseVideoProps {
  src: string;
  title: string;
  className?: string;
}

export default function CourseVideo({ src, title, className = '' }: CourseVideoProps) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl bg-navy/10 shadow-sm">
        <video
          controls
          playsInline
          preload="metadata"
          className="aspect-video w-full bg-navy"
          aria-label={title}
        >
          <source src={src} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <figcaption className="mt-3 text-center text-sm font-medium text-navy/80 sm:text-base">
        {title}
      </figcaption>
    </figure>
  );
}
