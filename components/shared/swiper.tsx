"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwiperProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  loop?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
}

export default function SwiperComponent({
  children,
  autoplay = false,
  loop = true,
  showArrows = true,
  showDots = true,
  className = "",
}: SwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = children.length;

  const goToNext = () => {
    if (loop) {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
    }
  };

  const goToPrev = () => {
    if (loop) {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useState(() => {
    if (autoplay) {
      const interval = setInterval(goToNext, 3000);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="min-w-full">
            {child}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#E2EAF8] hover:bg-[#E2EAF8]/50 rounded-full p-2 shadow transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#E2EAF8] hover:bg-[#E2EAF8]/50 rounded-full p-2 shadow transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}