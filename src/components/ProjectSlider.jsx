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
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400&q=80&fit=crop',
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
          <button className="ps-cta-btn" aria-label="View project">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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

      /* How far the track needs to slide:
         full track width − one viewport width + padding on both sides */
      const padding    = window.innerWidth < 768 ? 48 : 160;
      const totalSlide = track.scrollWidth - window.innerWidth + padding;
      track.style.transform = `translateX(${-(p * totalSlide)}px)`;

      setActiveIndex(Math.round(p * (CARDS.length - 1)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardScale = (i) => {
    const cardProgress   = progress * (CARDS.length - 1);
    const distFromActive = i - cardProgress;
    if (distFromActive <= 0) return 1;
    const t = Math.max(0, Math.min(1, 1 - distFromActive / 1.2));
    return 0.85 + 0.15 * t;
  };

  const getCardOpacity = (i) => {
    const cardProgress   = progress * (CARDS.length - 1);
    const distFromActive = i - cardProgress;
    if (distFromActive <= 0) return 1;
    const t = Math.max(0, Math.min(1, 1 - distFromActive / 1.4));
    return 0.5 + 0.5 * t;
  };

  return (
    <>
      <style>{`
        .ps-section {
          position: relative;
          background: #FEFAF4;
        }

        /* ── Header ── */
        .ps-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 60px 64px 0;
          margin-bottom: 30px;
        }
        .ps-header-left { display: flex; flex-direction: column; gap: 8px; }
        .ps-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: #F06A0F;
        }
        .ps-heading {
          font-weight: 600;
          letter-spacing: -3px; line-height: 0.9; color: #1A1106;
          text-transform: uppercase;
        }
        .ps-heading span { color: #F06A0F; }
        .ps-header-right {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: #B89F80;
        }
        .ps-scroll-icon {
          width: 28px; height: 48px; border: 2px solid #D4C4AE;
          border-radius: 14px; position: relative;
          display: flex; justify-content: center; padding-top: 7px;
        }
        .ps-scroll-dot {
          width: 4px; height: 8px; background: #F06A0F;
          border-radius: 2px; animation: scrollDot 1.6s ease-in-out infinite;
        }
        @keyframes scrollDot {
          0%,100% { transform: translateY(0); opacity: 1; }
          60%      { transform: translateY(12px); opacity: 0; }
          61%      { transform: translateY(0); opacity: 0; }
          80%      { opacity: 1; }
        }

        /* ── Scroll section ── */
        .ps-scroll-section {
          position: relative;
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
          padding: 80px 0;
        }

        /* ── Track ── */
        .ps-track-outer {
          display: flex;
          gap: 32px;
          padding: 0 80px;
          transition: transform 0.08s linear;
          will-change: transform;
        }

        /* ── Card ── */
        .ps-card {
          flex: 0 0 min(760px, 78vw);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.13);
          transition: transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.45s ease;
          position: relative;
          background: #F5EFE0;
        }
        .ps-card-num {
          position: absolute; top: 20px; right: 24px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.15em;
          color: rgba(255,255,255,0.6); z-index: 10;
        }

        /* ── Hero ── */
        .ps-hero {
          position: relative; width: 100%;
          aspect-ratio: 16/7; overflow: hidden;
        }
        .ps-hero-image {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .ps-card:hover .ps-hero-image { transform: scale(1.05); }
        .ps-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(140deg,rgba(240,106,15,0.6) 0%,rgba(180,60,5,0.3) 50%,rgba(0,0,0,0.15) 100%);
          mix-blend-mode: multiply;
        }
        .ps-brand {
          position: absolute; top: 22px; left: 28px;
          display: flex; align-items: center; gap: 10px; z-index: 10;
        }
        .ps-brand-icon {
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3);
          border-radius: 8px; backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
        }
        .ps-brand-name { font-weight: 700; font-size: 16px; color: #fff; letter-spacing: -0.2px; }
        .ps-year-pill {
          position: absolute; top: 22px; right: 50px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25);
          border-radius: 20px; padding: 5px 14px; backdrop-filter: blur(8px); z-index: 5;
        }

        /* ── Body ── */
        .ps-body {
          background: #F5EFE0; padding: 20px 32px 26px;
          display: flex; flex-direction: column; gap: 12px;
        }
        .ps-tags { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .ps-tag {
          font-size: 11px; font-weight: 700; letter-spacing: 0.13em;
          text-transform: uppercase; color: var(--card-accent,#F06A0F);
          border: 1.5px solid var(--card-accent,#F06A0F);
          border-radius: 4px; padding: 4px 11px; opacity: 0.85;
        }
        .ps-bottom-row {
          display: flex; align-items: flex-end; justify-content: space-between;
        }
        .ps-project-title {
          font-size: 32px; font-weight: 500;
          letter-spacing: -3px; line-height: 0.88;
          color: var(--card-accent,#F06A0F); text-transform: uppercase; margin: 0;
        }
        .ps-cta-btn {
          width: 50px; height: 50px; border-radius: 50%;
          background: var(--card-accent,#F06A0F); color: white; border: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 24px rgba(240,106,15,0.35);
        }
        .ps-cta-btn:hover { transform: scale(1.12) rotate(5deg); box-shadow: 0 12px 32px rgba(240,106,15,0.45); }

        /* ── Progress bar ── */
        .ps-progress-bar {
          position: absolute; bottom: 20px; left: 80px; right: 80px;
          display: flex; align-items: center; gap: 16px;
        }
        .ps-dots { display: flex; gap: 7px; flex-shrink: 0; }
        .ps-dot {
          width: 8px; height: 8px; border-radius: 4px;
          background: #C8C0B0; transition: background 0.3s, width 0.3s;
        }
        .ps-dot.ps-dot--active { background: #F06A0F; width: 24px; }
        .ps-divider { width: 2px; height: 16px; background: #D4C4AE; border-radius: 1px; }
        .ps-progress-count {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          color: #B89F80; white-space: nowrap;
        }

        /* ═══════════════════════════
           MOBILE overrides
        ═══════════════════════════ */
        @media (max-width: 767px) {
          .ps-header {
            padding: 52px 24px 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .ps-header-right { display: none; }

          /* Taller section so there's enough scroll room */
          .ps-scroll-section { height: 500vh; }

          .ps-track-outer {
            padding: 0 24px;
            gap: 16px;
          }

          /* Slightly taller card on mobile so body text fits */
          .ps-card { flex: 0 0 82vw; }

          /* Hero taller proportion on small screens */
          .ps-hero { aspect-ratio: 4/3; }

          /* Smaller typography inside card */
          .ps-project-title {
            font-size: clamp(32px, 8vw, 44px);
            letter-spacing: -2px;
          }
          .ps-brand-name { font-size: 14px; }
          .ps-body { padding: 16px 20px 20px; }

          .ps-progress-bar { left: 24px; right: 24px; bottom: 24px; }
        }
      `}</style>

      <section className="ps-section" ref={sectionRef}>

        {/* ── Scroll-driven slider (same on desktop + mobile) ── */}
        <div className="ps-scroll-section">
               {/* ── Header ── */}
     
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
            </div>

            {/* <div className="ps-progress-bar">
              <div className="ps-dots">
                {CARDS.map((_, i) => (
                  <div key={i} className={`ps-dot${i === activeIndex ? ' ps-dot--active' : ''}`} />
                ))}
              </div>
              <div className="ps-divider" />
              <span className="ps-progress-count">
                {String(activeIndex + 1).padStart(2, '0')} / {String(CARDS.length).padStart(2, '0')}
              </span>
            </div> */}
          </div>
        </div>

      </section>
    </>
  );
}