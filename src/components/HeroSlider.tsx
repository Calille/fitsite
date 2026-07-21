'use client';

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

// Hero carousel images — only files that exist in /public
const heroImages = [
  '/TP_132.webp',
  '/TP_133.webp',
  '/TP_134.webp',
  '/TP_135.webp',
  '/TP_136.webp',
  '/TP_137.webp',
  '/TP_138.webp',
  '/TP_139.webp',
  '/TP_140.webp',
  '/TP_141.webp',
  '/TP_143.webp',
  '/TP_149.webp',
  '/TP_150.webp',
  '/TP_151.webp',
  '/TP_152.webp',
  '/TP_153.webp',
  '/TP_154.webp',
  '/TP_155.webp',
  '/TP_160.webp',
  '/TP_170.webp',
  '/TP_171.webp',
  '/TP_172.webp',
  '/TP_175.webp',
  '/TP_180.webp',
  '/TP_181.webp',
  '/TP_182.webp',
  '/TP_184.webp',
  '/TP_185.webp',
  '/TP_186.webp',
  '/TP_190.webp',
  '/TP_198.webp',
  '/TP_199.webp',
  '/TP_200.webp',
  '/TP_202.webp',
];

interface HeroSliderProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function HeroSlider({ title, subtitle, children }: HeroSliderProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: 'start',
      containScroll: false,
      watchDrag: true,
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playOnInit: true,
      }),
    ]
  );

  // Preload all images into browser cache on mount
  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      const promises = heroImages.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
          })
      );
      await Promise.all(promises);
      if (isMounted) {
        setImagesLoaded(true);
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  // Resume auto-scroll when the slider comes back into view
  useEffect(() => {
    if (!emblaApi) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const autoScroll = emblaApi.plugins().autoScroll;
        if (!autoScroll) return;

        if (entry.isIntersecting) {
          (autoScroll as any).play();
        } else {
          (autoScroll as any).stop();
        }
      },
      { threshold: 0.1 }
    );

    const rootNode = emblaApi.rootNode();
    if (rootNode) {
      observer.observe(rootNode);
    }

    return () => {
      observer.disconnect();
    };
  }, [emblaApi]);

  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center bg-gray-900 text-white overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {heroImages.map((src, index) => (
              <div
                key={index}
                className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 h-full"
              >
                <img
                  src={src}
                  alt=""
                  role="presentation"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imagesLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Content overlay */}
      <div className="container-custom relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl text-white max-w-2xl drop-shadow-md">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}
