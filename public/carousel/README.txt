Coach carousel photo drop folder
================================

Place refreshed coach photos here, then update entries in:
  src/data/coachCarousel.ts

Suggested filenames (already referenced as placeholders in the config):
  teighlor-action-1.webp
  teighlor-action-2.webp
  will-action-1.webp
  jo-action-1.webp
  ed-action-1.webp
  ed-action-2.webp

After adding a file, open src/data/coachCarousel.ts, find the matching
placeholder entry, set a real src (e.g. '/carousel/teighlor-action-1.webp'),
and remove `placeholder: true` (or set it to false).
