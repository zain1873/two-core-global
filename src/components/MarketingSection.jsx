import { useState, useEffect } from "react";

const slides = [
  {
    number: "01",
    title: "Marketing Strategy",
    description:
      "Efficient & Effective Marketing Strategies to Build Your Brand. With the help of the best marketing strategy, Cynosure Designs, the top advertising agency in the UK & UAE, assists businesses in establishing an enduring Brand Image in the thoughts of their target consumers.",
  },
  {
    number: "02",
    title: "Brand Identity",
    description:
      "We craft powerful brand identities that resonate with your audience. From logo design to full brand guidelines, our team creates cohesive visual languages that set you apart from competitors and leave lasting impressions.",
  },
  {
    number: "03",
    title: "Digital Presence",
    description:
      "Dominate the digital landscape with a strong online presence. Our comprehensive digital strategies cover SEO, social media, PPC, and content marketing to ensure your brand reaches the right audience at the right time.",
  },
  {
    number: "04",
    title: "Content Creation",
    description:
      "Compelling content that drives engagement and conversions. Our creative team produces high-quality videos, graphics, copy, and multimedia content tailored to your brand voice and optimised for every digital platform.",
  },
];

// ─── Slide Card ───────────────────────────────────────────────────────────────
function SliderCard({ slide, animKey }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [animKey]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(24px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        minHeight: "260px",
      }}
    >
      {/* Slide number */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-6 h-px" style={{ backgroundColor: "var(--color-primary)" }} />
        <span className="text-sm font-semibold tracking-widest" style={{ color: "var(--color-primary)" }}>
          {slide.number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 leading-snug" style={{ color: "var(--color-heading)" }}>
        {slide.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-text)" }}>
        {slide.description}
      </p>

      {/* CTA */}
      <button
        className="text-xs font-bold tracking-widest px-6 py-3 uppercase transition-colors duration-200"
        style={{
          border: "1px solid var(--color-primary)",
          color: "var(--color-primary)",
          background: "transparent",
        }}
      >
        Discover More
      </button>
    </div>
  );
}

// ─── Nav Button ───────────────────────────────────────────────────────────────
function NavButton({ onClick, children, lighter = false }) {
  return (
    <button
      onClick={onClick}
      aria-label={lighter ? "Next slide" : "Previous slide"}
      className="w-12 h-12 flex items-center justify-center text-xl font-bold transition-colors duration-200 focus:outline-none"
      style={{
        color: "var(--color-heading)",
        background: "var(--color-bg-dark-alt)",
        border: "1px solid var(--color-primary)",
      }}
    >
      {children}
    </button>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function MarketingSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row">

          {/* ── Left: Copy ──────────────────────────────────────────── */}
          <div className="flex-1 flex flex-col justify-center pr-0 lg:pr-12 pb-8 lg:pb-0">
            <p className="text-sm mb-2 tracking-wide" style={{ color: "var(--color-text-muted)" }}>
              Establish A Strong Online Presence Through
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight" style={{ color: "var(--color-primary)" }}>
              Marketing & Advertising
            </h2>

            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text)" }}>
              As London's premier digital marketing business, we are committed
              to what we do and cover all aspects needed to show your internet
              presence.
            </p>

            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
              We reinforce your brand's identity via the use of digital
              technology, effective marketing, communication, and design
              strategies implemented on the appropriate platforms. Our
              substantial teams' deep awareness of industry dynamics, research
              capabilities, broad business shrewdness, and digital intelligence
              set us apart from other digital marketing businesses in London.
            </p>
          </div>

          {/* ── Right: Slider Card ──────────────────────────────────── */}
          <div className="w-full lg:w-96 flex-shrink-0 relative" style={{ background: "var(--color-bg-dark-alt)" }}>

            {/* Navigation arrows — top-right corner */}
            <div className="absolute top-0 right-0 flex z-10">
              <NavButton onClick={prev}>&#8249;</NavButton>
              <NavButton onClick={next} lighter>&#8250;</NavButton>
            </div>

            {/* Slide body */}
            <div className="p-8 pt-16 marketing-card">
              <SliderCard slide={slides[current]} animKey={current} />
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5 px-8 pb-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="h-1 rounded-full transition-all duration-300 focus:outline-none"
                  style={{
                    background: i === current ? "var(--color-primary)" : "var(--color-text-muted)",
                    width: i === current ? "24px" : "12px",
                  }}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}