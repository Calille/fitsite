'use client';

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

// All 14 hero images
const heroImages = [
  '/hero1.webp',
  '/hero2.webp',
  '/hero3.webp',
  '/hero4.webp',
  '/hero5.webp',
  '/hero6.webp',
  '/hero7.webp',
  '/hero8.webp',
  '/hero9.webp',
  '/hero10.webp',
  '/hero11.webp',
  '/hero12.webp',
  '/hero13.webp',
  '/hero14.webp',
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
