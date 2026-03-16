"use client";

import { useEffect, useState, useRef } from "react";

export function useScrollProgress() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      const start = rect.top - windowHeight;
      const end = rect.bottom;
      const total = end - start;
      const current = -start;

      const p = Math.min(Math.max(current / total, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, progress };
}
