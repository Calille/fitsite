/*
 * Pure-CSS mockup of the PDF guide: a dark cover with gold detailing,
 * sitting on two lighter sheets fanned out behind it.
 */
export default function GuideMockup() {
  return (
    <div className="relative mx-auto h-[380px] w-[280px] sm:h-[430px] sm:w-[320px]" aria-hidden="true">
      {/* back sheet */}
      <div className="absolute inset-0 translate-x-6 translate-y-3 rotate-6 rounded-sm bg-coal-card shadow-2xl" />

      {/* middle sheet, a peek of the inside pages */}
      <div className="absolute inset-0 -translate-x-6 -rotate-6 rounded-sm bg-cream p-6 shadow-2xl">
        <p className="font-display text-[0.6rem] font-semibold uppercase tracking-eyebrow text-gold">
          Principle Two
        </p>
        <p className="mt-2 font-display text-lg font-bold text-ink">Lift Weights</p>
      </div>

      {/* front cover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-sm border border-white/10 bg-coal-card px-8 text-center shadow-2xl">
        <p className="eyebrow text-gold text-[0.6rem]">A Guide For Busy Women</p>
        <p className="mt-6 font-display text-2xl font-bold leading-snug text-gold-soft">
          6 Principles Every Busy Woman 35+ Needs To Know
        </p>
        <div className="mt-8 h-px w-16 bg-gold/50" />
        <p className="mt-8 font-display text-[0.7rem] font-medium uppercase tracking-eyebrow text-white/70">
          Teighlor Pengelley
        </p>
      </div>
    </div>
  );
}
