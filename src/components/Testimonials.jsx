import { useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    quote: '"Working with this team completely changed our online presence. The website looks amazing and our leads increased within the first few months."',
    name: "Sarah Mitchell",
    location: "Dubai",
    rating: 5,
  },
  {
    id: 2,
    quote: '"They handled everything professionally — from social media to Google Ads. Communication was smooth and the results were exactly what we needed."',
    name: "Ahmed Al Mansoori",
    location: "Abu Dhabi",
    rating: 5,
  },
  {
    id: 3,
    quote: '"Our brand finally feels modern and professional. The team understood our vision and delivered beyond expectations."',
    name: "Jessica Carter",
    location: "Toronto",
    rating: 5,
  },
  {
    id: 4,
    quote: '"Very reliable team. They redesigned our website and improved our SEO rankings noticeably within a short time."',
    name: "Omar Khalid",
    location: "Dubai",
    rating: 5,
  },
  {
    id: 5,
    quote: '"The creativity, support, and attention to detail stood out the most. Highly recommended for businesses looking to grow online."',
    name: "Daniel Brooks",
    location: "London",
    rating: 5,
  },
  {
    id: 6,
    quote: '"They made digital marketing simple for us. We started getting quality inquiries consistently after launching our campaigns."',
    name: "Fatima Al Neyadi",
    location: "Sharjah",
    rating: 5,
  },
  {
    id: 7,
    quote: '"Professional, responsive, and easy to work with. The entire process felt smooth from start to finish."',
    name: "Michael Reyes",
    location: "Miami",
    rating: 5,
  },
  {
    id: 8,
    quote: '"We appreciated how involved the team was throughout the project. They genuinely cared about the growth of our business."',
    name: "Hassan Raza",
    location: "Riyadh",
    rating: 5,
  },
];

const VISIBLE = 3;
const AUTO_SLIDE_INTERVAL = 3000;

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);
  const autoRef = useRef(null);

  const maxIndex = testimonials.length - VISIBLE;

const navigate = (dir) => {
  if (animating) return;

  let nextCurrent;

  if (dir === "next") {
    nextCurrent = current >= maxIndex ? 0 : current + 1;
  } else {
    nextCurrent = current <= 0 ? maxIndex : current - 1;
  }

  setDirection(dir);
  setAnimating(true);

  clearTimeout(timeoutRef.current);

  timeoutRef.current = setTimeout(() => {
    setCurrent(nextCurrent);
    setAnimating(false);
  }, 320);
};
  // Auto-slide
  useEffect(() => {
    if (paused) return;
    autoRef.current = setInterval(() => {
      navigate("next", true);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(autoRef.current);
  }, [paused, current, animating]);

  useEffect(() => () => {
    clearTimeout(timeoutRef.current);
    clearInterval(autoRef.current);
  }, []);

  const visible = testimonials.slice(current, current + VISIBLE);

  return (
    <section className="testimonials-section">
      <style>{`

        .testimonials-section {
          font-family: 'Syne', sans-serif;
          background: var(--color-bg);
          padding: 80px 64px 100px;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
          overflow: hidden;
        }

        .testimonials-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 64px;
        }

        .testimonials-heading-block h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--color-heading);
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .testimonials-heading-block p {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 700;
          color: var(--color-text-muted);
          margin: 4px 0 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .nav-buttons {
          display: flex;
          gap: 8px;
          align-items: center;
          flex-shrink: 0;
          padding-top: 8px;
        }

        .nav-btn {
          width: 52px;
          height: 52px;
          border: 1.5px solid var(--color-border);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.18s, border-color 0.18s, transform 0.12s, box-shadow 0.18s;
          border-radius: 0;
          outline: none;
        }

        .nav-btn:hover:not(:disabled) {
          background: var(--color-primary);
          border-color: var(--color-primary);
          box-shadow: var(--glow-primary);
        }

        .nav-btn:hover:not(:disabled) svg path {
          stroke: var(--color-bg-dark-alt);
        }

        .nav-btn:active:not(:disabled) {
          transform: scale(0.95);
        }

        .nav-btn svg {
          width: 18px;
          height: 18px;
        }

        .nav-btn svg path {
          stroke: var(--color-primary);
          stroke-width: 2;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke 0.18s;
        }

        .cards-viewport {
          overflow: hidden;
          width: 100%;
        }

        .cards-track {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap:10px !important;
          gap: 0;
          transition: opacity 0.32s ease, transform 0.32s ease;
        }

        .cards-track.slide-left {
          opacity: 0;
          transform: translateX(-24px);
        }

        .cards-track.slide-right {
          opacity: 0;
          transform: translateX(24px);
        }

        .testimonial-card {
          padding: 0 48px 0 0;
          position: relative;
          padding: 10px;
          border:1px solid var(--color-border-light);
          transition: .3s ease;
        }
         .testimonial-card:hover {
         border:1px solid var(--color-primary);
         box-shadow: var(--glow-primary);
         
         }


        .testimonial-card:last-child {
          padding-right: 0;
        }

        .quote-mark-box {
          width: 46px;
          height: 46px;
          background: var(--color-primary);
          box-shadow: var(--glow-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          flex-shrink: 0;
        }

        .quote-mark-box svg {
          width: 18px;
          height: 14px;
        }

        .quote-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.85rem, 1.1vw, 1rem);
          font-weight: 400;
          line-height: 1.72;
          color: var(--color-text);
          min-height: 140px;
          letter-spacing: 0;
        }

        .stars-row {
          display: flex;
          gap: 4px;
          margin-bottom: 12px;
        }

        .star-icon {
          color: var(--color-primary);
          font-size: 1rem;
          filter: drop-shadow(0 0 4px rgba(124, 255, 0, 0.5));
        }

        .author-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: auto;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-family: 'Syne', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-heading);
          margin: 0 0 2px;
          letter-spacing: -0.01em;
        }

        .author-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--color-text-muted);
          margin: 0;
          line-height: 1.4;
        }

        .progress-bar-wrap {
          width: 100%;
          height: 2px;
          background: var(--color-border-light);
          margin-top: 48px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: var(--color-primary);
          animation: fillBar 3s linear infinite;
          box-shadow: var(--glow-primary);
        }

        .progress-bar-fill.paused {
          animation-play-state: paused;
        }

        @keyframes fillBar {
          from { width: 0% }
          to { width: 100% }
        }

        .progress-dots {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-top: 32px;
        }

        .progress-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--color-border);
          transition: background 0.3s, transform 0.25s;
          cursor: pointer;
          border: none;
          padding: 0;
          outline: none;
        }

        .progress-dot.active {
          background: var(--color-primary);
          transform: scale(1.4);
          box-shadow: var(--glow-primary);
        }

        /* Responsive */

        @media (max-width: 1024px) {
          .testimonials-section {
            padding: 60px 40px 80px;
          }
          .testimonial-card {
            padding: 0 32px 0 0;
          }
          .quote-text {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 48px 24px 64px;
          }

          .cards-track {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .testimonial-card {
            padding: 10px;
          }

          .quote-text {
            min-height: unset;
            font-size: 0.9rem;
          }

          .testimonials-header {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 480px) {
          .testimonials-section {
            padding: 36px 20px 48px;
          }

          .testimonials-heading-block h2 {
            font-size: 1.75rem;
          }

          .testimonials-heading-block p {
            font-size: 1.4rem;
          }

          .nav-btn {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>

      <div className="testimonials-header">
        <div className="testimonials-heading-block">
          <h2>Real Relationships</h2>
          <p>More Than Just Clients.</p>
        </div>
        <div className="nav-buttons">
          <button
            className="nav-btn"
            onClick={() => navigate("prev")}
            aria-label="Previous"
          >
            <svg viewBox="0 0 18 18" fill="none">
              <path d="M11 14L6 9L11 4" />
            </svg>
          </button>
          <button
            className="nav-btn"
            onClick={() => navigate("next")}
            aria-label="Next"
          >
            <svg viewBox="0 0 18 18" fill="none">
              <path d="M7 4L12 9L7 14" />
            </svg>
          </button>
        </div>
      </div>

      <div className="cards-viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`cards-track${
            animating && direction === "next"
              ? " slide-left"
              : animating && direction === "prev"
              ? " slide-right"
              : ""
          }`}
        >
          {visible.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <div className="quote-mark-box">
                <svg viewBox="0 0 22 16" fill="none">
                  <path
                    d="M0 16V9.6C0 6.93333 0.666667 4.6 2 2.6C3.33333 0.866667 5.2 0 7.6 0L8.8 2C7.2 2.26667 5.86667 3 4.8 4.2C3.73333 5.4 3.2 6.8 3.2 8.4H6.4V16H0ZM13.6 16V9.6C13.6 6.93333 14.2667 4.6 15.6 2.6C16.9333 0.866667 18.8 0 21.2 0L22.4 2C20.8 2.26667 19.4667 3 18.4 4.2C17.3333 5.4 16.8 6.8 16.8 8.4H20V16H13.6Z"
                    fill="white"
                  />
                </svg>
              </div>

              <p className="quote-text">{t.quote}</p>

              <div className="stars-row">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>

              <div className="author-row">
                <div className="author-info">
                  <span className="author-name">{t.name}</span>
                  <span className="author-title">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="progress-dots">
        {Array.from({ length: testimonials.length - VISIBLE + 1 }).map((_, i) => (
          <button
            key={i}
            className={`progress-dot${current === i ? " active" : ""}`}
            onClick={() => {
              if (!animating) {
                setDirection(i > current ? "next" : "prev");
                setAnimating(true);
                clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => {
                  setCurrent(i);
                  setAnimating(false);
                }, 320);
              }
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}