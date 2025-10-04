// Custom image loader for cPanel deployment
export default function imageLoader({ src, width, quality }) {
  // Ensure all image paths are relative for cPanel
  const relativeSrc = src.startsWith('/') ? `.${src}` : src;
  return `${relativeSrc}?w=${width}&q=${quality || 75}`;
}
