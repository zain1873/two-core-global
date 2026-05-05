import { useEffect, useRef, useState } from 'react';
import '../css/projectSlider.css';

const CARDS = [
  {
    title: 'Cars Daily',
    year: '2025',
    tags: ['Transportation', 'Brand and Packaging'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop',
  },
  {
    title: 'Moto Hub',
    year: '2025',
    tags: ['Automotive', 'Identity'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop',
  },
  {
    title: 'Drive Co.',
    year: '2024',
    tags: ['Branding', 'Digital'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop',
  },
  {
    title: 'SpeedLane',
    year: '2024',
    tags: ['Web', 'Motion'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop',
  },
];

function Card({ card, scale, opacity }) {
  return (
    <div
      className="ps-card"
      style={{
        transform: `scale(${scale})`,
        opacity,
        transformOrigin: 'center center',
      }}
    >
      {/* Hero */}
      <div className="ps-hero">
        <img
          className="ps-hero-image"
          src={card.image}
          alt={card.title}
        />
        <div className="ps-hero-tint" />
        <div className="ps-brand">
          <svg width="34" height="22" viewBox="0 0 36 24" fill="none">
            <rect x="2" y="10" width="32" height="10" rx="3" fill="white" />
            <rect x="8" y="4" width="20" height="8" rx="2" fill="white" />
            <circle cx="9" cy="21" r="3" fill="white" />
            <circle cx="27" cy="21" r="3" fill="white" />
          </svg>
          <span className="ps-brand-name">CarsDaily</span>
        </div>
      </div>

      {/* Info Bar */}
      <div className="ps-info-bar">
        <span className="ps-info-label ps-info-label--year">{card.year}</span>
        {card.tags.map((tag, i) => (
          <span key={i} className="ps-info-label">{tag}</span>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="ps-bottom-row">
        <h2 className="ps-project-title">{card.title}</h2>
        <button className="ps-cta-btn" aria-label="View project">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ProjectSlider() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrolled = window.scrollY - sectionTop;
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / sectionHeight));

      setProgress(p);

      // Horizontal slide
      const totalSlide = track.scrollWidth - window.innerWidth + 120;
      track.style.transform = `translateX(${-(p * totalSlide)}px)`;

      // Active dot
      const index = Math.round(p * (CARDS.length - 1));
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Per-card scale: active card = 1, upcoming cards scale from 0.82 → 1 as they approach
  const getCardScale = (i) => {
    const segmentSize = 1 / (CARDS.length - 1);
    // How far this card is from being "active"
    const cardProgress = progress * (CARDS.length - 1); // 0 → CARDS.length-1
    const distFromActive = i - cardProgress; // negative = past, positive = upcoming

    if (distFromActive <= 0) {
      // Past or active card → full size
      return 1;
    }
    // Upcoming card → scale from 0.82 (far) to 1 (about to become active)
    // distFromActive ranges from 1 (just next) to CARDS.length-1 (last card when at start)
    const scaleMin = 0.82;
    const t = Math.max(0, Math.min(1, 1 - (distFromActive - 0) / 1.2));
    return scaleMin + (1 - scaleMin) * t;
  };

  const getCardOpacity = (i) => {
    const cardProgress = progress * (CARDS.length - 1);
    const distFromActive = i - cardProgress;
    if (distFromActive <= 0) return 1;
    // Upcoming: fade from 0.55 to 1
    const t = Math.max(0, Math.min(1, 1 - (distFromActive - 0) / 1.4));
    return 0.55 + 0.45 * t;
  };

  return (
    <section className="ps-scroll-section" ref={sectionRef}>
      {/* Section heading — visible on all screens */}
      <div className="ps-heading-wrap">
        <h2 className="ps-heading-title theme-title">Our Projects</h2>
      </div>

      <div className="ps-sticky-container">
        {/* Cards track */}
        <div className="ps-track-outer" ref={trackRef}>
          {CARDS.map((card, i) => (
            <Card
              key={i}
              card={card}
              scale={getCardScale(i)}
              opacity={getCardOpacity(i)}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="ps-progress">
          {CARDS.map((_, i) => (
            <div
              key={i}
              className={`ps-dot ${i === activeIndex ? 'ps-dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}