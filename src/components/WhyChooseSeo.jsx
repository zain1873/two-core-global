import { useEffect, useRef } from "react";

const checks = [
  "Professional SEO Optimizations",
  "Experience Team Members & Lot's Of Customers",
  "Digital Business & SEO Solutions",
];

export default function WhyChooseUs() {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateX(-20px)";
      setTimeout(
        () => {
          el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
        },
        200 + i * 120,
      );
    });
  }, []);

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif", background: "var(--color-bg)" }}
      className="min-h-screen flex items-center justify-center px-4 py-16"
    >
      <style>{`
        .check-item:hover { transform: translateX(6px); }
        .check-item { transition: transform 0.2s ease; }
      `}</style>

      <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* LEFT — Unsplash Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md" style={{ border: "1px solid var(--color-border-primary)", borderRadius: "1rem", padding: "4px", background: "var(--color-bg-secondary)" }}>
            {/* Pink blob behind image */}
            <div
              className="absolute inset-0 z-0 img-bg"
              style={{
              background: "var(--color-primary)",
              opacity: 0.1,
                borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                transform: "scale(1.08) translate(4%, 2%)",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80"
              alt="Digital services team at work"
              className="relative z-10 w-full rounded-2xl object-cover"
              style={{ maxHeight: "460px", objectPosition: "center top", boxShadow: "var(--glow-primary)" }}
            />
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          {/* Badge */}
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

          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
            style={{ fontFamily: "'Syne', sans-serif", color: "var(--color-heading)" }}
          >
            We're Professional Digital Services Provider Agency
          </h2>

          {/* Description */}
          <p className="text-base leading-relaxed mb-8 max-w-lg"
            style={{ color: "var(--color-text)" }}>
            Improve your search engine rankings with powerful SEO strategies
            focused on organic growth, better visibility, faster website
            performance, and attracting high-quality traffic that converts into
            real customers.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-5 w-full">
            {checks.map((item, i) => (
              <li
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="check-item flex items-center gap-4"
              >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "var(--color-primary)", boxShadow: "var(--glow-primary)" }}
                  >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-bold text-base sm:text-lg"
                  style={{ color: "var(--color-heading)" }}>
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
