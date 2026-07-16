/*
 * Placeholder for Teighlor's coaching headshot.
 * Swap the inner content for a real <Image> when the asset arrives,
 * then delete this placeholder treatment.
 */
export default function CoachPhoto() {
  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-sm border-2 border-dashed border-gold/50 bg-coal-card"
      aria-label="Placeholder for Teighlor coaching photo"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-coal">
          <svg
            viewBox="0 0 24 24"
            className="h-9 w-9 text-gold"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.5-1.632z"
            />
          </svg>
        </div>
        <p className="font-display text-sm font-semibold text-gold">Teighlor Pengelley</p>
        <p className="text-[0.75rem] leading-relaxed text-white/55">
          Coaching photo placeholder
          <br />
          Replace when image is ready
        </p>
      </div>
    </div>
  );
}
