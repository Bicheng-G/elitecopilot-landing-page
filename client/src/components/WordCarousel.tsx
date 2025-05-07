import { useState, useEffect } from 'react';

interface WordCarouselProps {
  words: string[];
  interval?: number;
}

export function WordCarousel({ words, interval = 2000 }: WordCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  if (words.length === 0) {
    return null;
  }

  return (
    <span className="inline-block relative overflow-hidden align-bottom">
      {words.map((word, index) => (
        <span
          key={word}
          className={`transition-all duration-500 ease-in-out absolute whitespace-nowrap ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: '50%',
            transform: `translateX(-50%) ${
              index === currentIndex
                ? 'translateY(0)'
                : index < currentIndex
                ? 'translateY(100%)'
                : 'translateY(-100%)'
            }`,
            opacity: index === currentIndex ? 1 : 0,
            transitionProperty: 'transform, opacity',
          }}
        >
          {word}
        </span>
      ))}
      {/* Placeholder to maintain width based on the longest word */}
      <span className="invisible whitespace-nowrap">
        {words.reduce((longest, current) => current.length > longest.length ? current : longest, "")}
      </span>
    </span>
  );
} 