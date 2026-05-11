import { useState, useEffect, useRef } from "react";
const FeatureItem = ({ icon, text }) => (
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
      marginBottom: "10px",
    }}
  >
    <span
      style={{
        color: "#374151",
        marginTop: "1px",
        fontSize: "13px",
        flexShrink: 0,
      }}
    >
      ▶
    </span>
    <span style={{ fontSize: "14px", color: "#374151", lineHeight: 1.5 }}>
      {text}
    </span>
  </div>
);
export default function WebDevelopmentSideby() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`

        .tao-section {
          font-family: 'Inter', sans-serif;
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 80px 0;
        }

        .tao-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,205,216,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,205,216,0.3) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .tao-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }

        .tao-phase {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: #6b7280;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .tao-phase::after {
          content: '';
          flex: 1;
          max-width: 160px;
          height: 1px;
          background: #c8cdd8;
        }

        .tao-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.05;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
        }

        .tao-desc {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 28px;
          max-width: 400px;
        }

        .tao-features {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .tao-right {
          position: relative;
        }

        .tao-preview-card {
          background: #f1f3f8;
          border-radius: 18px;
          padding: 20px;
          overflow: hidden;
          position: relative;
          min-height: 380px;
        }

        .tao-preview-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .tao-preview-desc {
          font-size: 11px;
          color: #6b7280;
          line-height: 1.5;
          max-width: 300px;
          margin-bottom: 20px;
        }

        .tao-cards-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
        }

        .tao-cards-row::-webkit-scrollbar { display: none; }

        .tao-bottom-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          background: rgba(255,255,255,0.7);
          border-top: 1px solid rgba(200,205,216,0.5);
          padding: 16px 0 20px;
          margin: 0 -24px;
          padding-left: 24px;
          padding-right: 24px;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-up-d1 { transition-delay: 0.1s; }
        .fade-up-d2 { transition-delay: 0.25s; }
        .fade-up-d3 { transition-delay: 0.4s; }
        .fade-up-d4 { transition-delay: 0.55s; }

        .unstable-card {
          transition: transform 0.3s ease;
        }

        .unstable-card:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .tao-container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 0 24px;
          }
          .tao-right { max-width: 600px; margin: 0 auto; width: 100%; }
        }

        @media (max-width: 640px) {
          .tao-section { padding: 48px 0; }
          .tao-container { padding: 0 16px; }
          .tao-preview-card { padding: 20px 16px 0; min-height: auto; }
          .tao-bottom-features { grid-template-columns: repeat(3,1fr); gap: 8px; }
          .tao-heading { font-size: 32px; }
        }
      `}</style>

      <section className="tao-section" ref={ref}>
        <div className="tao-container">
          {/* LEFT SIDE */}
          <div>
            <div className={`tao-phase fade-up ${visible ? "visible" : ""}`}>
              Web Development
            </div>

            <h1
              className={`tao-heading fade-up fade-up-d1 ${visible ? "visible" : ""}`}
            >
              Web Testing & Optimization
            </h1>

            <p
              className={`tao-desc fade-up fade-up-d2 ${visible ? "visible" : ""}`}
            >
              Web Development Before launch, the website goes through thorough
              testing and optimization to ensure stability, performance, and a
              smooth user experience across all devices.
            </p>

              <ul
                className={`tao-features fade-up fade-up-d3 ${visible ? "visible" : ""}`}
              >
                {[
                  "Cross-browser & device compatibility testing",
                  "Website performance optimization for faster loading",
                  "Bug fixing & layout stability improvements",
                  "UI/UX refinements for better user experience",
                  "Security testing & data protection checks",
                ].map((item) => (
                  <li key={item}>
                    <FeatureItem text={item} />
                  </li>
                ))}
              </ul>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`tao-right fade-up fade-up-d2 ${visible ? "visible" : ""}`}
          >
            <div className="tao-preview-card">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80&auto=format&fit=crop"
                alt="App Development"
                className="tao-preview-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
