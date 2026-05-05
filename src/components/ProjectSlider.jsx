import { useEffect, useRef, useState } from 'react';
import '../css/projectSlider.css';

const CARDS = [1, 2, 3, 4];

function Card() {
  return (
    <div className="ps-card">
      {/* Hero */}
      <div className="ps-hero">
        <img
          className="ps-hero-image"
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop"
          alt="Orange delivery van"
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
        <span className="ps-info-label ps-info-label--year">2025</span>
        <span className="ps-info-label">Transportation</span>
        <span className="ps-info-label">Brand and Packaging</span>
      </div>

      {/* Bottom Row */}
      <div className="ps-bottom-row">
        <h2 className="ps-project-title">Cars Daily</h2>
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

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrolled = window.scrollY - sectionTop;
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));

      // Total horizontal distance to scroll
      const totalSlide = track.scrollWidth - window.innerWidth + 120;
      const translateX = -(progress * totalSlide);
      track.style.transform = `translateX(${translateX}px)`;

      // Active dot
      const index = Math.round(progress * (CARDS.length - 1));
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="ps-scroll-section" ref={sectionRef}>
      <h2 className='theme-title text-center project-title'>Our Projects</h2>
      <div className="ps-sticky-container">
        {/* Cards track */}
        <div className="ps-track-outer" ref={trackRef}>
          {CARDS.map((_, i) => (
            <Card key={i} />
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