import { useEffect, useRef } from "react";
import "../css/SeoProcess.css"
const processes = [
  {
    number: "01",
    title: "MARKET & KEYWORD RESEARCH",
    allTitles: [
      "MARKET & KEYWORD RESEARCH",
      "CAMPAIGN STRATEGY SETUP",
      "AD OPTIMIZATION",
      "CONVERSION TRACKING",
      "PERFORMANCE REPORTING",
    ],
    description:
      "We analyze your market, competitors, and high-performing keywords to build a strong SEM foundation for profitable ad campaigns.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&fit=crop",
    bg: "#0B1020",
    accent: "#7CFF00",
  },
  {
    number: "02",
    title: "CAMPAIGN STRATEGY SETUP",
    allTitles: [
      "MARKET & KEYWORD RESEARCH",
      "CAMPAIGN STRATEGY SETUP",
      "AD OPTIMIZATION",
      "CONVERSION TRACKING",
      "PERFORMANCE REPORTING",
    ],
    description:
      "We create high-performing PPC campaigns with structured ad groups, targeting setup, and bidding strategies to maximize ROI.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&fit=crop",
    bg: "#05070D",
    accent: "#7CFF00",
  },
  {
    number: "03",
    title: "AD OPTIMIZATION",
    allTitles: [
      "MARKET & KEYWORD RESEARCH",
      "CAMPAIGN STRATEGY SETUP",
      "AD OPTIMIZATION",
      "CONVERSION TRACKING",
      "PERFORMANCE REPORTING",
    ],
    description:
      "We continuously optimize ads, keywords, and bids to improve CTR, reduce cost-per-click, and increase conversions.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80&fit=crop",
    bg: "#0B1020",
    accent: "#7CFF00",
  },
  {
    number: "04",
    title: "CONVERSION TRACKING",
    allTitles: [
      "MARKET & KEYWORD RESEARCH",
      "CAMPAIGN STRATEGY SETUP",
      "AD OPTIMIZATION",
      "CONVERSION TRACKING",
      "PERFORMANCE REPORTING",
    ],
    description:
      "We implement advanced tracking tools to measure clicks, leads, sales, and user behavior for better decision-making.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=80&fit=crop",
    bg: "#05070D",
    accent: "#7CFF00",
  },
  {
    number: "05",
    title: "PERFORMANCE REPORTING",
    allTitles: [
      "MARKET & KEYWORD RESEARCH",
      "CAMPAIGN STRATEGY SETUP",
      "AD OPTIMIZATION",
      "CONVERSION TRACKING",
      "PERFORMANCE REPORTING",
    ],
    description:
      "Get clear SEM reports showing ad performance, ROI, conversions, and insights to scale your paid campaigns effectively.",
    image:
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=900&q=80&fit=crop",
    bg: "#0B1020",
    accent: "#7CFF00",
  },
];

export default function SemProcess() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const container = containerRef.current;
          if (!container) return;

          const containerTop = container.getBoundingClientRect().top;
          const scrolled = -containerTop;
          const vh = window.innerHeight;

          sections.forEach((section, i) => {
            if (!section) return;
            section.style.zIndex = i + 2;

            if (i === 0) {
              section.style.transform = "translateY(0%)";
              section.style.opacity = "1";
              return;
            }

            const sectionStart = i * vh;
            const progress = (scrolled - sectionStart) / vh;

            if (progress <= 0) {
              section.style.transform = "translateY(100%)";
              section.style.opacity = "0";
            } else if (progress >= 1) {
              section.style.transform = "translateY(0%)";
              section.style.opacity = "1";
            } else {
              const ease = 1 - Math.pow(1 - progress, 3);
              section.style.transform = `translateY(${(1 - ease) * 100}%)`;
              section.style.opacity = `${Math.min(1, ease * 1.6)}`;
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>

      <div className="seo-process-heading"
        style={{
          padding: "72px 94px 56px",
          background: "var(--color-bg)",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            fontWeight: "700",
            letterSpacing: "0.22em",
            color: "var(--color-text-muted)",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Our Process
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 68px)",
            fontWeight: "900",
            color: "var(--color-heading)",
            letterSpacing: "-2.5px",
            lineHeight: 1.02,
            margin: "0 0 18px",
            textTransform: "uppercase",
          }}
        >
          OUR SEM PROCESS
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "var(--color-text)",
            lineHeight: 1.75,
            maxWidth: "500px",
            margin: 0,
          }}
        >
          We help increase your website traffic and deliver measurable results that drive your business growth.
        </p>
      </div>

      <div
        ref={containerRef}
        style={{ height: `${processes.length * 100 + 100}vh`, position: "relative" }}
      >
        {processes.map((proc, i) => {
          return (
            <div
              key={i}
              ref={(el) => (sectionsRef.current[i] = el)}
              style={{
                position: "sticky",
                top: "18px",
                height: "100vh",
                width: "90%",
                margin: "auto",
                backgroundColor: proc.bg,
                zIndex: i + 2,
                overflow: "hidden",
                transform: i === 0 ? "translateY(0%)" : "translateY(100%)",
                opacity: i === 0 ? 1 : 0,
                willChange: "transform, opacity",
                border: "1px solid var(--color-border-primary)",
                boxShadow: "var(--glow-primary)",
              }}
            >
              <div className="seo-panel-inner">

                <div
                  className="seo-sidebar"
                  style={{ borderRight: "1px solid var(--color-border-primary)" }}
                >
                  <div
                    style={{
                      fontSize: "clamp(52px, 6vw, 84px)",
                      fontWeight: "600",
                      color: "var(--color-primary)",
                      lineHeight: 1,
                      letterSpacing: "-3px",
                      marginBottom: "28px",
                      textShadow: "var(--glow-primary)",
                    }}
                  >
                    {proc.number}
                  </div>
                  <nav className="seo-nav">
                    {proc.allTitles.map((t, j) => (
                      <span
                        key={j}
                        style={{
                          fontSize: "9px",
                          fontWeight: j === i ? "800" : "400",
                          letterSpacing: "0.14em",
                          color: j === i ? "var(--color-primary)" : "var(--color-text-muted)",
                          textTransform: "uppercase",
                          lineHeight: 1.4,
                          cursor: "default",
                          display: "block",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </nav>
                </div>

                <div className="seo-content">
                  <h1 className="process-title"
                    style={{
                      fontSize: "52px",
                      fontWeight: "600",
                      color: "var(--color-heading)",
                      letterSpacing: "-2px",
                      lineHeight: 1,
                      margin: "0 0 22px",
                      textTransform: "uppercase",
                    }}
                  >
                    {proc.title}
                  </h1>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--color-text)",
                      lineHeight: 1.85,
                      maxWidth: "520px",
                      margin: "0 0 32px",
                    }}
                  >
                    {proc.description}
                  </p>

                  <div
                    className="seo-image-card"
                    style={{
                      boxShadow: "var(--glow-primary), 0 24px 60px rgba(0,0,0,0.65)",
                      border: "1px solid var(--color-border-primary)",
                    }}
                  >
                    <img
                      src={proc.image}
                      alt={proc.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        right: "16px",
                        width: "42px",
                        height: "42px",
                        backgroundColor: "var(--color-primary)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        fontWeight: "800",
                        letterSpacing: "0.05em",
                        color: "var(--color-bg-dark-alt)",
                        boxShadow: "var(--glow-primary)",
                      }}
                    >
                      {proc.number}
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  right: "18px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                  zIndex: 20,
                }}
              >
                {processes.map((_, dot) => (
                  <div
                    key={dot}
                    style={{
                      width: dot === i ? "7px" : "4px",
                      height: dot === i ? "7px" : "4px",
                      borderRadius: "50%",
                      backgroundColor: dot === i ? "var(--color-primary)" : "var(--color-text-muted)",
                      transition: "all 0.25s",
                      boxShadow: dot === i ? "var(--glow-primary)" : "none",
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}