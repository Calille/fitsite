/**
 * Coach / studio carousel image config.
 *
 * Swap, reorder, or toggle photos here — HeroSlider reads this array.
 * Set `enabled: false` to keep an entry in the list without showing it.
 * Entries with `placeholder: true` are skipped until a real `src` is supplied.
 *
 * Photo refresh workflow:
 * 1. Drop new files into /public (or /public/team).
 * 2. Add/update an entry below with src, alt, and subject.
 * 3. Rebuild / redeploy — no component edits required.
 */

export type CarouselSubject =
  | 'teighlor'
  | 'will'
  | 'jo'
  | 'ed'
  | 'ben'
  | 'community'
  | 'studio';

export interface CarouselImage {
  /** Public path, e.g. '/TP_160.webp' or '/team/teighlor.webp' */
  src: string;
  alt: string;
  subject: CarouselSubject;
  /** Defaults to true. Set false to de-prioritise without deleting. */
  enabled?: boolean;
  /**
   * Mark slots for photos that are not in the repo yet.
   * These are not rendered until placeholder is removed and src is set.
   */
  placeholder?: boolean;
}

/**
 * Curated mix: roughly even representation of Teighlor, Will, Jo, Ed,
 * with Ben de-prioritised (fewer, newer shots only).
 * Older / duplicate Ben-heavy frames and non-coach fillers are disabled below.
 */
export const coachCarouselImages: CarouselImage[] = [
  // —— Teighlor ——
  {
    src: '/team/teighlor.webp',
    alt: 'Teighlor, Founder and Head Coach at TP Health & Fitness',
    subject: 'teighlor',
  },
  // PLACEHOLDER: drop a new Teighlor coaching action shot here when available
  {
    src: '/carousel/teighlor-action-1.webp',
    alt: 'Teighlor coaching a client at TP Health & Fitness',
    subject: 'teighlor',
    placeholder: true,
  },
  // PLACEHOLDER: second Teighlor studio / community shot
  {
    src: '/carousel/teighlor-action-2.webp',
    alt: 'Teighlor leading a session at TP Health & Fitness',
    subject: 'teighlor',
    placeholder: true,
  },

  // —— Will ——
  {
    src: '/TP_160.webp',
    alt: 'Will, Team Leader and Senior Coach at TP Health & Fitness',
    subject: 'will',
  },
  {
    src: '/team/will.webp',
    alt: 'Will, Team Leader and Senior Coach',
    subject: 'will',
  },
  // PLACEHOLDER: newer Will coaching action shot
  {
    src: '/carousel/will-action-1.webp',
    alt: 'Will coaching a client at TP Health & Fitness',
    subject: 'will',
    placeholder: true,
  },

  // —— Jo ——
  {
    src: '/team/jo.webp',
    alt: 'Jo, Junior Coach at TP Health & Fitness',
    subject: 'jo',
  },
  {
    src: '/TP_133.webp',
    alt: 'Training session at TP Health & Fitness studio',
    subject: 'jo',
  },
  {
    src: '/TP_154.webp',
    alt: 'Strength training with kettlebell at TP Health & Fitness',
    subject: 'jo',
  },
  // PLACEHOLDER: dedicated Jo coaching portrait / action shot
  {
    src: '/carousel/jo-action-1.webp',
    alt: 'Jo coaching a client at TP Health & Fitness',
    subject: 'jo',
    placeholder: true,
  },

  // —— Ed ——
  {
    src: '/team/ed.webp',
    alt: 'Ed, Junior Coach at TP Health & Fitness',
    subject: 'ed',
  },
  // PLACEHOLDER: Ed coaching action shot
  {
    src: '/carousel/ed-action-1.webp',
    alt: 'Ed coaching a client at TP Health & Fitness',
    subject: 'ed',
    placeholder: true,
  },
  // PLACEHOLDER: second Ed studio shot
  {
    src: '/carousel/ed-action-2.webp',
    alt: 'Ed on the gym floor at TP Health & Fitness',
    subject: 'ed',
    placeholder: true,
  },

  // —— Ben (kept lean — newer / clearer shots only) ——
  {
    src: '/TP_186.webp',
    alt: 'Ben coaching with dumbbells at TP Health & Fitness',
    subject: 'ben',
  },
  {
    src: '/TP_190.webp',
    alt: 'Coach guiding a client on the air bike at TP Health & Fitness',
    subject: 'ben',
  },
  // Older / duplicate Ben-heavy frames — kept for easy restore, not shown
  {
    src: '/TP_185.webp',
    alt: 'Ben overhead press at TP Health & Fitness',
    subject: 'ben',
    enabled: false,
  },
  {
    src: '/TP_134.webp',
    alt: 'Coach observing a client squat',
    subject: 'ben',
    enabled: false,
  },
  {
    src: '/TP_143.webp',
    alt: 'Coach smiling during a session',
    subject: 'ben',
    enabled: false,
  },
  {
    src: '/TP_150.webp',
    alt: 'Coach speaking with clients in the studio',
    subject: 'ben',
    enabled: false,
  },
  {
    src: '/TP_151.webp',
    alt: 'Coach with clients near the cable machine',
    subject: 'ben',
    enabled: false,
  },

  // —— Community / studio atmosphere (light mix) ——
  {
    src: '/TP_139.webp',
    alt: 'Clients logging training at TP Health & Fitness',
    subject: 'community',
  },
  {
    src: '/TP_172.webp',
    alt: 'TP Health & Fitness studio interior',
    subject: 'studio',
  },
  {
    src: '/TP_141.webp',
    alt: 'Cable training session at TP Health & Fitness',
    subject: 'community',
  },

  // De-prioritised fillers / duplicates (not shown)
  { src: '/TP_132.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_135.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_136.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_137.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_138.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_140.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_149.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_152.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_153.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_155.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_170.webp', alt: '', subject: 'studio', enabled: false },
  { src: '/TP_171.webp', alt: '', subject: 'studio', enabled: false },
  { src: '/TP_175.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_180.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_181.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_182.webp', alt: '', subject: 'studio', enabled: false },
  { src: '/TP_184.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_198.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_199.webp', alt: '', subject: 'community', enabled: false },
  { src: '/TP_200.webp', alt: '', subject: 'studio', enabled: false },
  { src: '/TP_202.webp', alt: '', subject: 'community', enabled: false },
];

/** Images actually rendered by the carousel. */
export function getActiveCarouselImages(): CarouselImage[] {
  return coachCarouselImages.filter(
    (image) => image.enabled !== false && !image.placeholder && Boolean(image.src)
  );
}
