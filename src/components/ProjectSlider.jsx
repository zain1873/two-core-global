import { useEffect, useRef, useState } from 'react';
import "../css/projectSlider.css"
import noorrixProject from '../assets/noorrix-project.png';

/* ─── DATA ─── */
const CARDS = [
  {
    title: 'Noorrix Motors',
    year: '2025',
    tags: ['Automotive', 'Web Development'],
    image: noorrixProject,
    link: 'https://www.noorrixmotors.co.uk/',
    accent: '#7CFF00',
    number: '01',
  },
  {
    title: 'Pixel Studio',
    year: '2025',
    tags: ['UI/UX', 'Brand Identity'],
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1400&q=80&fit=crop',
    accent: '#7CFF00',
    number: '02',
  },
  {
    title: 'CloudSync',
    year: '2024',
    tags: ['SaaS Platform', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80&fit=crop',
    accent: '#7CFF00',
    number: '03',
  },
  {
    title: 'Vision Tech',
    year: '2024',
    tags: ['Development', 'Mobile App'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80&fit=crop',
    accent: '#7CFF00',
    number: '04',
  },
];

/* ─── CARD COMPONENT ─── */
function Card({ card, scale, opacity }) {
  return (
    <div
      className="ps-card"
      style={{
        transform: `scale(${scale})`,
        opacity,
        '--card-accent': card.accent,
      }}
    >
      <div className="ps-card-num">{card.number}</div>
      <div className="ps-hero">
        <img className="ps-hero-image" src={card.image} alt={card.title} />
        <div className="ps-hero-overlay" />
        <div className="ps-brand">
          {/* <span className="ps-brand-name">CarsDaily</span> */}
        </div>
        <div className="ps-year-pill">{card.year}</div>
      </div>
      <div className="ps-body">
        <div className="ps-tags">
          {card.tags.map((tag, i) => (
            <span key={i} className="ps-tag">{tag}</span>
          ))}
        </div>
        <div className="ps-bottom-row">
          <h2 className="ps-project-title">{card.title}</h2>
          {card.link ? (
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="ps-cta-btn" aria-label={`View ${card.title} project`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ) : (
            <button className="ps-cta-btn" aria-label="View project">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── SEE ALL CARD ─── */
function SeeAllCard({ scale, opacity }) {
  return (
    <div
      className="ps-card ps-see-all-card"
      style={{
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      <div className="ps-see-all-inner">
        <h2 className="ps-see-all-heading">Projects</h2>
        <p className="ps-see-all-desc">
          These are not just projects, they are stories of our clients, our work, and the impact we made.{' '}
          <a href="/projects" className="ps-see-all-link">See More ↗</a>
        </p>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function ProjectSlider() {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress]       = useState(0);

  /* ── Single unified scroll handler for BOTH desktop & mobile ── */
  useEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const handleScroll = () => {
      const sectionTop    = section.getBoundingClientRect().top + window.scrollY;
      const scrolled      = window.scrollY - sectionTop;
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / sectionHeight));
      setProgress(p);

      const padding    = window.innerWidth < 768 ? 48 : 160;
      const totalSlide = track.scrollWidth - window.innerWidth + padding;
      track.style.transform = `translateX(${-(p * totalSlide)}px)`;

      setActiveIndex(Math.round(p * CARDS.length));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardScale = (i) => {
    const cardProgress   = progress * CARDS.length;
    const distFromActive = i - cardProgress;
    if (distFromActive <= 0) return 1;
    const t = Math.max(0, Math.min(1, 1 - distFromActive / 1.2));
    return 0.85 + 0.15 * t;
  };

  const getCardOpacity = (i) => {
    const cardProgress   = progress * CARDS.length;
    const distFromActive = i - cardProgress;
    if (distFromActive <= 0) return 1;
    const t = Math.max(0, Math.min(1, 1 - distFromActive / 1.4));
    return 0.5 + 0.5 * t;
  };

  return (
    <>
      <section className="ps-section" ref={sectionRef}>
        <div className="ps-scroll-section">
          <div className="ps-sticky-container">
            <div className="ps-header">
              <div className="ps-header-left">
                <span className="ps-eyebrow">Selected Work</span>
                <h2 className="ps-heading theme-title">Our <span>Projects</span></h2>
              </div>
              <div className="ps-header-right">
                <div className="ps-scroll-icon">
                  <div className="ps-scroll-dot" />
                </div>
                Scroll to explore
              </div>
            </div>
            <div className="ps-track-outer" ref={trackRef}>
              {CARDS.map((card, i) => (
                <Card
                  key={i}
                  card={card}
                  scale={getCardScale(i)}
                  opacity={getCardOpacity(i)}
                  isActive={i === activeIndex}
                />
              ))}
              <SeeAllCard
                scale={getCardScale(CARDS.length)}
                opacity={getCardOpacity(CARDS.length)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}