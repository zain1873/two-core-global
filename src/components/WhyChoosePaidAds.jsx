import { useEffect, useRef } from "react";

const checks = [
  "Data-Driven Paid Ad Campaigns Across All Platforms",
  "Expert Team Managing Google, Meta & Social Ads",
  "Transparent Reporting With Real ROI Focus",
];

const stats = [
  { value: "3.5×", label: "Average ROAS" },
  { value: "40%", label: "Lower Cost-Per-Click" },
  { value: "200+", label: "Campaigns Launched" },
];

export default function WhyChoosePaidAds() {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateX(-20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      }, 200 + i * 120);
    });
  }, []);

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif", background: "var(--color-bg)" }}
      className="min-h-screen flex items-center justify-center px-4 py-16"
    >
      <style>{`
        .padwhy-check-item:hover { transform: translateX(6px); }
        .padwhy-check-item { transition: transform 0.2s ease; }
        .padwhy-stat { text-align: center; }
        .padwhy-stat-val {
          font-size: 2rem;
          font-weight: 900;
          color: var(--color-primary);
          text-shadow: var(--glow-primary);
          font-family: 'Syne', sans-serif;
          line-height: 1;
        }
        .padwhy-stat-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
      `}</style>

      <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* LEFT — Image with stats */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            className="relative w-full max-w-md"
            style={{
              border: "1px solid var(--color-border-primary)",
              borderRadius: "1rem",
              padding: "4px",
              background: "var(--color-bg-secondary)",
            }}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                background: "var(--color-primary)",
                opacity: 0.08,
                borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                transform: "scale(1.08) translate(4%, 2%)",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80"
              alt="Paid advertising analytics"
              className="relative z-10 w-full rounded-2xl object-cover"
              style={{
                maxHeight: "420px",
                objectPosition: "center top",
                boxShadow: "var(--glow-primary)",
              }}
            />

            {/* Stats bar floating below image */}
            <div
              className="relative z-20 flex justify-around mt-4 px-3 py-4 rounded-xl"
              style={{
                background: "var(--color-bg-dark-alt)",
                border: "1px solid var(--color-border-primary)",
                marginTop: "12px",
              }}
            >
              {stats.map((s) => (
                <div key={s.label} className="padwhy-stat">
                  <div className="padwhy-stat-val">{s.value}</div>
                  <div className="padwhy-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <span
            className="text-sm font-semibold px-4 py-2 rounded-lg mb-5"
            style={{
              background: "var(--color-bg-dark-alt)",
              color: "var(--color-primary)",
              border: "1px solid var(--color-primary)",
              boxShadow: "var(--glow-primary)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Why Choose Us
          </span>

          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
            style={{ fontFamily: "'Syne', sans-serif", color: "var(--color-heading)" }}
          >
            We Turn Ad Spend Into Measurable Business Growth
          </h2>

          <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: "var(--color-text)" }}>
            From Google Search to Meta and TikTok, we build high-performance
            paid advertising campaigns engineered for conversions — not just
            clicks. Every dollar you invest is tracked, optimized, and scaled.
          </p>

          <ul className="flex flex-col gap-5 w-full">
            {checks.map((item, i) => (
              <li
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="padwhy-check-item flex items-center gap-4"
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--color-primary)",
                    boxShadow: "var(--glow-primary)",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="var(--color-bg-dark-alt)"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span
                  className="font-bold text-base sm:text-lg"
                  style={{ color: "var(--color-heading)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
