interface ImagePlaceholderProps {
  label: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-video" or "aspect-[4/3]" */
  aspect: string;
  className?: string;
}

// Clearly labelled slot sized to the final image's aspect ratio,
// so the layout does not shift when real photos land.
export default function ImagePlaceholder({ label, aspect, className = '' }: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspect} ${className} flex w-full items-center justify-center rounded-2xl bg-gray-200 text-gray-500`}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <span className="px-4 text-center font-mono text-sm tracking-wide">{label}</span>
    </div>
  );
}
