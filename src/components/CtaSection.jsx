import { useEffect, useState } from "react";

// ── Badge ──────────────────────────────────────────────
function Badge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-fade-in">
      <svg
        className="w-4 h-4 text-yellow-300"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13 2L4.09 12.26 3 11l9-9 1 0zm-2 0l1 0 9 9-1.09 1.26L11 2zm1 10l-2-2-7 7h4v5h6v-5h4l-7-7z" />
        <path d="M11.5 2.5l1 19" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <polygon points="12,2 15.5,10 22,10.5 17,15.5 18.5,22 12,18.5 5.5,22 7,15.5 2,10.5 8.5,10" />
      </svg>
      <span>Ready to Innovate?</span>
    </div>
  );
}

// ── CTA Button ─────────────────────────────────────────
function CTAButton({ children }) {
  return (
    <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold text-base rounded-full hover:bg-gray-100 hover:gap-5 transition-all duration-300 ease-out shadow-xl hover:shadow-2xl active:scale-95">
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}

// ── Noise texture overlay (subtle grain like the screenshot) ──
function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

// ── Main Section ───────────────────────────────────────
export default function CTASection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap');

        .cta-root { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-1 { animation: fadeUp 0.6s ease both; animation-delay: 0.05s; }
        .animate-fade-up-2 { animation: fadeUp 0.6s ease both; animation-delay: 0.2s; }
        .animate-fade-up-3 { animation: fadeUp 0.6s ease both; animation-delay: 0.35s; }
        .animate-fade-up-4 { animation: fadeUp 0.6s ease both; animation-delay: 0.5s; }
        .animate-fade-in   { animation: fadeUp 0.5s ease both; animation-delay: 0s; }
      `}</style>

      <section
        className="cta-root relative w-full min-h-[420px] flex items-center justify-center overflow-hidden py-24 px-4"
        style={{
          background:"linear-gradient(135deg, rgb(102 194 14), rgb(22 143 148))"
        }}
      >
        {/* Noise grain texture */}
        <NoiseOverlay />

        {/* Radial light glow — top center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
          style={{
          background:
            "var(--gradient-white-glow)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">

          {/* Badge */}
          <div className="animate-fade-up-1">
            <Badge />
          </div>

          {/* Heading */}
          <h2 className="animate-fade-up-2 text-white font-extrabold leading-tight tracking-tight mb-5
            text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            We Build Strategies{" "}
            <span className="whitespace-nowrap">That Drive Results</span>
          </h2>

          {/* Subtext */}
          <p className="animate-fade-up-3 text-blue-100/80 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
            Elevate your brand with innovative marketing, stunning web experiences, and growth-focused digital solutions.
          </p>

          {/* CTA */}
          <div className="animate-fade-up-4">
            <CTAButton>Explore All Services</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}