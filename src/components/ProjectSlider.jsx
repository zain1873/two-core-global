import { useEffect, useRef, useState } from 'react';

/* ─── DATA ─── */
const CARDS = [
  {
    title: 'Cars Daily',
    year: '2025',
    tags: ['Transportation', 'Brand & Packaging'],
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1400&q=80&fit=crop',
    accent: '#F06A0F',
    number: '01',
  },
  {
    title: 'Moto Hub',
    year: '2025',
    tags: ['Automotive', 'Identity'],
    image: 'https://images.unsplash.com/photo-1558618047-f4e60b370a2c?w=1400&q=80&fit=crop',
    accent: '#C0420A',
    number: '02',
  },
  {
    title: 'Drive Co.',
    year: '2024',
    tags: ['Branding', 'Digital'],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80&fit=crop',
    accent: '#E85D04',
    number: '03',
  },
  {
    title: 'SpeedLane',
    year: '2024',
    tags: ['Web', 'Motion'],
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400&q=80&fit=crop',
    accent: '#F06A0F',
    number: '04',
  },
];

/* ─── CARD COMPONENT ─── */
function Card({ card, scale, opacity, isActive }) {
  return (
    <div
      className="ps-card"
      style={{
        transform: `scale(${scale})`,
        opacity,
        '--card-accent': card.accent,
      }}
    >
      {/* Number badge */}
      <div className="ps-card-num">{card.number}</div>

      {/* Hero Image */}
      <div className="ps-hero">
        <img className="ps-hero-image" src={card.image} alt={card.title} />
        <div className="ps-hero-overlay" />

        {/* Brand mark top-left */}
        <div className="ps-brand">
          <div className="ps-brand-icon">
            <svg width="18" height="12" viewBox="0 0 36 24" fill="none">
              <rect x="2" y="10" width="32" height="10" rx="3" fill="white" />
              <rect x="8" y="4" width="20" height="8" rx="2" fill="white" />
              <circle cx="9" cy="21" r="3" fill="white" />
              <circle cx="27" cy="21" r="3" fill="white" />
            </svg>
          </div>
          <span className="ps-brand-name">CarsDaily</span>
        </div>

        {/* Floating year pill top-right */}
        <div className="ps-year-pill">{card.year}</div>
      </div>

      {/* Card Body */}
      <div className="ps-body">
        {/* Tags row */}
        <div className="ps-tags">
          {card.tags.map((tag, i) => (
            <span key={i} className="ps-tag">{tag}</span>
          ))}
        </div>

        {/* Title + CTA */}
        <div className="ps-bottom-row">
          <h2 className="ps-project-title">{card.title}</h2>
          <button className="ps-cta-btn" aria-label="View project">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── MOBILE CARD (Touch Slider) ─── */
function MobileCard({ card }) {
  return (
    <div className="ps-mobile-card" style={{ '--card-accent': card.accent }}>
      <div className="ps-mobile-hero">
        <img src={card.image} alt={card.title} className="ps-mobile-hero-img" />
        <div className="ps-mobile-overlay" />
        <div className="ps-mobile-num">{card.number}</div>
        <div className="ps-mobile-year">{card.year}</div>
      </div>
      <div className="ps-mobile-body">
        <div className="ps-mobile-tags">
          {card.tags.map((t, i) => <span key={i} className="ps-tag">{t}</span>)}
        </div>
        <div className="ps-mobile-footer">
          <h2 className="ps-mobile-title">{card.title}</h2>
          <button className="ps-cta-btn" aria-label="View project">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function ProjectSlider() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const mobileTrackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileActive, setMobileActive] = useState(0);

  /* Detect mobile */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* Desktop scroll handler */
  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrolled = window.scrollY - sectionTop;
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / sectionHeight));
      setProgress(p);

      const totalSlide = track.scrollWidth - window.innerWidth + 160;
      track.style.transform = `translateX(${-(p * totalSlide)}px)`;

      const index = Math.round(p * (CARDS.length - 1));
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  /* Mobile scroll spy on the touch track */
  useEffect(() => {
    if (!isMobile) return;
    const track = mobileTrackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const scrollLeft = track.scrollLeft;
      const cardWidth = track.scrollWidth / CARDS.length;
      setMobileActive(Math.round(scrollLeft / cardWidth));
    };
    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const getCardScale = (i) => {
    const cardProgress = progress * (CARDS.length - 1);
    const distFromActive = i - cardProgress;
    if (distFromActive <= 0) return 1;
    const scaleMin = 0.85;
    const t = Math.max(0, Math.min(1, 1 - (distFromActive - 0) / 1.2));
    return scaleMin + (1 - scaleMin) * t;
  };

  const getCardOpacity = (i) => {
    const cardProgress = progress * (CARDS.length - 1);
    const distFromActive = i - cardProgress;
    if (distFromActive <= 0) return 1;
    const t = Math.max(0, Math.min(1, 1 - (distFromActive - 0) / 1.4));
    return 0.5 + 0.5 * t;
  };

  const current = isMobile ? mobileActive : activeIndex;

  return (
    <>
      <style>{`
        /* ── SECTION ── */
        .ps-section {
          position: relative;
          background: #FEFAF4;
        }

        /* ── SECTION HEADER ── */
        .ps-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 72px 64px 0;
        }
        .ps-header-left {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ps-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #F06A0F;
        }
        .ps-heading {
          font-size: clamp(42px, 6vw, 72px);
          font-weight: 800;
          letter-spacing: -3px;
          line-height: 0.9;
          color: #1A1106;
          text-transform: uppercase;
        }
        .ps-heading span {
          color: #F06A0F;
        }
        .ps-header-right {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #B89F80;
        }
        .ps-scroll-icon {
          width: 28px;
          height: 48px;
          border: 2px solid #D4C4AE;
          border-radius: 14px;
          position: relative;
          display: flex;
          justify-content: center;
          padding-top: 7px;
        }
        .ps-scroll-dot {
          width: 4px;
          height: 8px;
          background: #F06A0F;
          border-radius: 2px;
          animation: scrollDot 1.6s ease-in-out infinite;
        }
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          60% { transform: translateY(12px); opacity: 0; }
          61% { transform: translateY(0); opacity: 0; }
          80% { opacity: 1; }
        }

        /* ── DESKTOP SCROLL SECTION ── */
        .ps-desktop-section {
          height: 400vh;
        }
        .ps-sticky-container {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 20px;
        }

        /* ── TRACK ── */
        .ps-track-outer {
          display: flex;
          gap: 32px;
          padding: 0 80px;
          transition: transform 0.08s linear;
          will-change: transform;
        }

        /* ── CARD ── */
        .ps-card {
          flex: 0 0 min(760px, 78vw);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.13);
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      opacity 0.45s ease;
          position: relative;
          background: #F5EFE0;
        }
        .ps-card-num {
          position: absolute;
          top: 20px;
          right: 24px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.6);
          z-index: 10;
          font-variant-numeric: tabular-nums;
        }

        /* ── HERO ── */
        .ps-hero {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 7;
          overflow: hidden;
        }
        .ps-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .ps-card:hover .ps-hero-image { transform: scale(1.05); }
        .ps-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            140deg,
            rgba(240,106,15,0.6) 0%,
            rgba(180,60,5,0.3) 50%,
            rgba(0,0,0,0.15) 100%
          );
          mix-blend-mode: multiply;
        }

        /* ── BRAND (top-left) ── */
        .ps-brand {
          position: absolute;
          top: 22px;
          left: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }
        .ps-brand-icon {
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 8px;
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ps-brand-name {
          font-weight: 700;
          font-size: 16px;
          color: #fff;
          letter-spacing: -0.2px;
        }

        /* ── YEAR PILL ── */
        .ps-year-pill {
          position: absolute;
          top: 22px;
          right: 50px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 20px;
          padding: 5px 14px;
          backdrop-filter: blur(8px);
          z-index: 5;
        }

        /* ── BODY ── */
        .ps-body {
          background: #F5EFE0;
          padding: 20px 32px 26px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* ── TAGS ── */
        .ps-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .ps-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--card-accent, #F06A0F);
          border: 1.5px solid var(--card-accent, #F06A0F);
          border-radius: 4px;
          padding: 4px 11px;
          opacity: 0.85;
        }

        /* ── BOTTOM ROW ── */
        .ps-bottom-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
        .ps-project-title {
          font-size: clamp(44px, 6vw, 64px);
          font-weight: 800;
          letter-spacing: -3px;
          line-height: 0.88;
          color: var(--card-accent, #F06A0F);
          text-transform: uppercase;
          margin: 0;
        }

        /* ── CTA BUTTON ── */
        .ps-cta-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--card-accent, #F06A0F);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 24px rgba(240,106,15,0.35);
        }
        .ps-cta-btn:hover {
          transform: scale(1.12) rotate(5deg);
          box-shadow: 0 12px 32px rgba(240,106,15,0.45);
        }

        /* ── PROGRESS BAR (desktop) ── */
        .ps-progress-bar {
          position: absolute;
          bottom: 36px;
          left: 80px;
          right: 80px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .ps-progress-track {
          flex: 1;
          height: 2px;
          background: rgba(0,0,0,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .ps-progress-fill {
          height: 100%;
          background: #F06A0F;
          border-radius: 2px;
          transition: width 0.1s linear;
        }
        .ps-progress-count {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #B89F80;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }

        /* ── DOTS ── */
        .ps-dots {
          display: flex;
          gap: 7px;
          flex-shrink: 0;
        }
        .ps-dot {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: #C8C0B0;
          transition: background 0.3s, width 0.3s;
        }
        .ps-dot.ps-dot--active {
          background: #F06A0F;
          width: 24px;
        }

        /* ── DIVIDER LINE ── */
        .ps-divider {
          width: 2px;
          height: 16px;
          background: #D4C4AE;
          border-radius: 1px;
        }

        /* ═══════════════════════════════════════
           MOBILE STYLES (max-width: 767px)
        ═══════════════════════════════════════ */
        @media (max-width: 767px) {
          .ps-header {
            padding: 52px 24px 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .ps-header-right { display: none; }

          .ps-mobile-section {
            padding: 32px 0 52px;
          }

          /* ── MOBILE TOUCH TRACK ── */
          .ps-mobile-track {
            display: flex;
            gap: 16px;
            padding: 0 24px 8px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .ps-mobile-track::-webkit-scrollbar { display: none; }

          /* ── MOBILE CARD ── */
          .ps-mobile-card {
            flex: 0 0 82vw;
            scroll-snap-align: start;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 20px 56px rgba(0,0,0,0.12);
            background: #F5EFE0;
            position: relative;
          }

          .ps-mobile-hero {
            position: relative;
            width: 100%;
            aspect-ratio: 4/3;
            overflow: hidden;
          }
          .ps-mobile-hero-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .ps-mobile-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              135deg,
              rgba(240,106,15,0.55) 0%,
              rgba(0,0,0,0.12) 100%
            );
            mix-blend-mode: multiply;
          }
          .ps-mobile-num {
            position: absolute;
            top: 14px;
            left: 16px;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.18em;
            color: rgba(255,255,255,0.7);
            z-index: 5;
          }
          .ps-mobile-year {
            position: absolute;
            bottom: 14px;
            right: 14px;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.12em;
            color: rgba(255,255,255,0.9);
            background: rgba(255,255,255,0.15);
            border: 1px solid rgba(255,255,255,0.25);
            border-radius: 16px;
            padding: 4px 12px;
            backdrop-filter: blur(6px);
          }

          .ps-mobile-body {
            padding: 16px 20px 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .ps-mobile-tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
          }
          .ps-mobile-footer {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
          }
          .ps-mobile-title {
            font-size: 38px;
            font-weight: 800;
            letter-spacing: -2px;
            line-height: 0.88;
            color: var(--card-accent, #F06A0F);
            text-transform: uppercase;
            margin: 0;
          }

          /* ── MOBILE PROGRESS ── */
          .ps-mobile-progress {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 24px 0;
          }
          .ps-mobile-count {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.1em;
            color: #B89F80;
          }
        }

        /* Hide mobile on desktop, hide desktop on mobile */
        @media (min-width: 768px) {
          .ps-mobile-section { display: none; }
        }
        @media (max-width: 767px) {
          .ps-desktop-section { display: none; }
        }
      `}</style>

      <section className="ps-section" ref={sectionRef}>

        {/* ── SHARED HEADER ── */}
        <div className="ps-header">
          <div className="ps-header-left">
            <span className="ps-eyebrow">Selected Work</span>
            <h2 className="ps-heading">Our <span>Projects</span></h2>
          </div>
          <div className="ps-header-right">
            <div className="ps-scroll-icon">
              <div className="ps-scroll-dot" />
            </div>
            Scroll to explore
          </div>
        </div>

        {/* ══════════════════════
            DESKTOP: Scroll-driven
        ══════════════════════ */}
        <div className="ps-desktop-section">
          <div className="ps-sticky-container">
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
            </div>

            {/* Progress bar + dots */}
            <div className="ps-progress-bar">
              <div className="ps-dots">
                {CARDS.map((_, i) => (
                  <div key={i} className={`ps-dot ${i === activeIndex ? 'ps-dot--active' : ''}`} />
                ))}
              </div>
              <div className="ps-divider" />
              {/* <div className="ps-progress-track">
                <div className="ps-progress-fill" style={{ width: `${progress * 100}%` }} />
              </div> */}
              <span className="ps-progress-count">
                {String(activeIndex + 1).padStart(2, '0')} / {String(CARDS.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* ══════════════════════
            MOBILE: Touch Slider
        ══════════════════════ */}
        <div className="ps-mobile-section">
          <div className="ps-mobile-track" ref={mobileTrackRef}>
            {CARDS.map((card, i) => (
              <MobileCard key={i} card={card} />
            ))}
          </div>

          <div className="ps-mobile-progress">
            <div className="ps-dots">
              {CARDS.map((_, i) => (
                <div key={i} className={`ps-dot ${i === mobileActive ? 'ps-dot--active' : ''}`} />
              ))}
            </div>
            <span className="ps-mobile-count">
              {String(mobileActive + 1).padStart(2, '0')} / {String(CARDS.length).padStart(2, '0')}
            </span>
          </div>
        </div>

      </section>
    </>
  );
}