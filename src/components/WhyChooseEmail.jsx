import { useEffect, useRef } from "react";

const checks = [
  "Personalised Email Campaigns That Drive Real Opens & Clicks",
  "Full-Funnel Automation From Welcome Series to Re-Engagement",
  "Data-Backed Strategy With Detailed Monthly Reports",
];

const stats = [
  { value: "42×", label: "Average Email ROI" },
  { value: "60%", label: "Higher Open Rate" },
  { value: "500+", label: "Campaigns Sent" },
];

export default function WhyChooseEmail() {
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
        .emwhy-check-item:hover { transform: translateX(6px); }
        .emwhy-check-item { transition: transform 0.2s ease; }
      `}</style>

      <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* LEFT — Image with stats */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            className="relative w-full max-w-md"
            style={{
              border: "1px solid rgba(0,245,255,0.25)",
              borderRadius: "1rem",
              padding: "4px",
              background: "var(--color-bg-secondary)",
            }}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                background: "var(--color-accent)",
                opacity: 0.07,
                borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                transform: "scale(1.08) translate(4%, 2%)",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80"
              alt="Email marketing strategy"
              className="relative z-10 w-full rounded-2xl object-cover"
              style={{
                maxHeight: "420px",
                objectPosition: "center top",
                boxShadow: "var(--glow-accent)",
              }}
            />

            {/* Stats bar */}
            <div
              className="relative z-20 flex justify-around px-3 py-4 rounded-xl"
              style={{
                background: "var(--color-bg-dark-alt)",
                border: "1px solid rgba(0,245,255,0.25)",
                marginTop: "12px",
              }}
            >
              {stats.map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.9rem",
                      fontWeight: "900",
                      color: "var(--color-accent)",
                      textShadow: "var(--glow-accent)",
                      fontFamily: "'Syne', sans-serif",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--color-text-muted)",
                      marginTop: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {s.label}
                  </div>
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
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent)",
              boxShadow: "var(--glow-accent)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Why Choose Us
          </span>

          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
            style={{ fontFamily: "'Syne', sans-serif", color: "var(--color-heading)" }}
          >
            Email That Converts — Not Just Gets Delivered
          </h2>

          <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: "var(--color-text)" }}>
            We craft email marketing strategies that speak directly to your
            subscribers — with the right message, at the right time. From list
            building to automated workflows, every campaign is engineered to
            generate revenue.
          </p>

          <ul className="flex flex-col gap-5 w-full">
            {checks.map((item, i) => (
              <li
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="emwhy-check-item flex items-center gap-4"
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--color-accent)",
                    boxShadow: "var(--glow-accent)",
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
                <span className="font-bold text-base sm:text-lg" style={{ color: "var(--color-heading)" }}>
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
