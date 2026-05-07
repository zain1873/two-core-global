import { useState, useEffect, useRef } from "react";
import "../css/WhyChooseUs.css";

const cards = [
  {
    id: "quality",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-icon-svg">
        <path d="M24 4L28.9 15.6L42 17.3L32.5 26.5L35.1 39.5L24 33.2L12.9 39.5L15.5 26.5L6 17.3L19.1 15.6L24 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2"/>
      </svg>
    ),
    label: "Quality",
    tagline: "Excellence in every detail",
    description: "We deliver meticulous craftsmanship in every project, adapting to your needs and capturing your audience's attention with precision.",
    before: "Generic, forgettable results",
    after: "Distinctive, memorable outcomes",
    color: "teal",
  },
  {
    id: "personnel",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-icon-svg">
        <circle cx="18" cy="16" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="32" cy="16" r="4.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 38C4 30.268 10.268 24 18 24C25.732 24 32 30.268 32 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M34 26C38.4183 26 42 29.134 42 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: "Personnel",
    tagline: "People who genuinely care",
    description: "Our expert team is fully dedicated to your success, ready to adapt and serve your unique goals with unwavering passion.",
    before: "Faceless, rotating contractors",
    after: "Dedicated long-term partners",
    color: "purple",
  },
  {
    id: "innovation",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-icon-svg">
        <path d="M24 6C16.268 6 10 12.268 10 20C10 25.372 12.978 30.048 17.4 32.6V38H30.6V32.6C35.022 30.048 38 25.372 38 20C38 12.268 31.732 6 24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M18 38H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 42H28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 14V20M24 20L20 17M24 20L28 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Innovation",
    tagline: "Always ahead of the curve",
    description: "We stay at the forefront with cutting-edge solutions that capture your audience's attention and keep you ahead of competitors.",
    before: "Yesterday's tired playbook",
    after: "Tomorrow's bold strategy",
    color: "coral",
  },
  {
    id: "commitment",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-icon-svg">
        <path d="M24 40C24 40 8 30 8 18C8 13.029 12.029 9 17 9C20.016 9 22.696 10.553 24 12.875C25.304 10.553 27.984 9 31 9C35.971 9 40 13.029 40 18C40 30 24 40 24 40Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M16 20L21 25L32 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Commitment",
    tagline: "Standing by you always",
    description: "We stand by our work and our clients, adapting to your needs with unwavering dedication throughout the entire journey.",
    before: "Promises made, then forgotten",
    after: "Results delivered, always",
    color: "blue",
  },
];

function Card({ card, index }) {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`wcu-card wcu-card--${card.color} ${visible ? "wcu-card--visible" : ""}`}
      style={{ animationDelay: `${index * 120}ms` }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      role="article"
      aria-label={card.label}
    >
      <div className={`wcu-card-inner ${flipped ? "wcu-card-inner--flipped" : ""}`}>
        {/* FRONT */}
        <div className="wcu-card-face wcu-card-face--front">
          <div className="wcu-icon-ring">
            <div className="wcu-icon-ring__pulse" />
            {card.icon}
          </div>
          <h3 className="wcu-card-label">{card.label}</h3>
          <p className="wcu-card-tagline">{card.tagline}</p>
          <p className="wcu-card-desc">{card.description}</p>
          <div className="wcu-hover-hint">
            <span>Hover to reveal</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M7 2L4 5M7 2l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>

        {/* BACK — before/after */}
        <div className="wcu-card-face wcu-card-face--back">
          <div className="wcu-ba-header">
            <span className="wcu-ba-title">{card.label}</span>
            <span className="wcu-ba-sub">Before &amp; After</span>
          </div>
          <div className="wcu-ba-block wcu-ba-block--before">
            <div className="wcu-ba-label">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M4 6h4M6 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" transform="rotate(45 6 6)"/></svg>
              Before
            </div>
            <p className="wcu-ba-text">{card.before}</p>
          </div>
          <div className="wcu-ba-divider">
            <div className="wcu-ba-arrow">↓</div>
          </div>
          <div className="wcu-ba-block wcu-ba-block--after">
            <div className="wcu-ba-label">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M3.5 6l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              After
            </div>
            <p className="wcu-ba-text">{card.after}</p>
          </div>
          <div className="wcu-back-glow" />
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTitleVisible(true); }, { threshold: 0.3 });
    if (titleRef.current) obs.observe(titleRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="wcu-section" aria-labelledby="wcu-heading">
      <div className="wcu-bg-orbs" aria-hidden="true">
        <div className="wcu-orb wcu-orb--1" />
        <div className="wcu-orb wcu-orb--2" />
        <div className="wcu-orb wcu-orb--3" />
      </div>

      <div className="wcu-container">
        <div ref={titleRef} className={`wcu-header ${titleVisible ? "wcu-header--visible" : ""}`}>
          <span className="wcu-eyebrow">Our Differentiators</span>
          <h2 id="wcu-heading" className="wcu-heading">
            Why Choose <span className="wcu-heading-accent">Us</span>
          </h2>
          <p className="wcu-subheading">
            We don't just deliver services — we craft experiences that transform how your audience sees you.
          </p>
        </div>

        <div className="wcu-grid">
          {cards.map((card, i) => (
            <Card key={card.id} card={card} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}