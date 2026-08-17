/*
 * Central place for the details most likely to change.
 * Drop Teighlor's Stripe Payment Link into CHECKOUT_URL and every
 * buy button on the page picks it up.
 *
 * After payment, set the Stripe Payment Link "Confirmation page" to
 * redirect to SUCCESS_URL (Stripe Dashboard → Payment Links → After payment).
 *
 * Drop the guide PDF at: public/guides/strongher-fat-loss-guide.pdf
 */
export const CHECKOUT_URL =
  'https://buy.stripe.com/bJe6oGdPE6cLdyU6DA5Vu05';

export const SUCCESS_URL = 'https://strongher.tphealthfitness.com/thank-you/';

export const GUIDE_PDF_PATH = '/guides/strongher-fat-loss-guide.pdf';
export const GUIDE_PDF_FILENAME = 'StrongHER-Fat-Loss-Guide.pdf';

export const PRICE = '£19';

export const INSTAGRAM_HANDLE = '@tphealthandfitness_';
export const INSTAGRAM_URL = 'https://www.instagram.com/tphealthandfitness_';

export const META_PIXEL_ID = '1570949691427033';
