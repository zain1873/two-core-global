import { useEffect, useRef } from "react";
import "../css/SeoProcess.css";

const processes = [
  {
    number: "01",
    title: "BRAND AUDIT & STRATEGY",
    allTitles: [
      "BRAND AUDIT & STRATEGY",
      "CONTENT PLANNING",
      "CONTENT CREATION",
      "PUBLISHING & COMMUNITY",
      "ANALYTICS & GROWTH",
    ],
    description:
      "We analyze your current social presence, competitors, and target audience to build a channel-specific strategy — defining brand voice, content pillars, posting cadence, and platform priorities that align with your business goals.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80&fit=crop",
    bg: "#0B1020",
    accent: "#7CFF00",
  },
  {
    number: "02",
    title: "CONTENT PLANNING",
    allTitles: [
      "BRAND AUDIT & STRATEGY",
      "CONTENT PLANNING",
      "CONTENT CREATION",
      "PUBLISHING & COMMUNITY",
      "ANALYTICS & GROWTH",
    ],
    description:
      "We build a detailed monthly content calendar — mapping post types, formats, themes, and campaign hooks across every platform so your feed stays consistent, strategic, and aligned with key dates and trends.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=80&fit=crop",
    bg: "#05070D",
    accent: "#7CFF00",
  },
  {
    number: "03",
    title: "CONTENT CREATION",
    allTitles: [
      "BRAND AUDIT & STRATEGY",
      "CONTENT PLANNING",
      "CONTENT CREATION",
      "PUBLISHING & COMMUNITY",
      "ANALYTICS & GROWTH",
    ],
    description:
      "Our creative team produces scroll-stopping graphics, reels, carousels, and copy that reflects your brand identity — crafted specifically for each platform's format, audience behaviour, and algorithm preferences.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80&fit=crop",
    bg: "#0B1020",
    accent: "#7CFF00",
  },
  {
    number: "04",
    title: "PUBLISHING & COMMUNITY",
    allTitles: [
      "BRAND AUDIT & STRATEGY",
      "CONTENT PLANNING",
      "CONTENT CREATION",
      "PUBLISHING & COMMUNITY",
      "ANALYTICS & GROWTH",
    ],
    description:
      "We handle scheduled publishing at peak engagement windows, respond to comments and DMs, and actively engage with your community — turning followers into loyal brand advocates through genuine, timely interaction.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80&fit=crop",
    bg: "#05070D",
    accent: "#7CFF00",
  },
  {
    number: "05",
    title: "ANALYTICS & GROWTH",
    allTitles: [
      "BRAND AUDIT & STRATEGY",
      "CONTENT PLANNING",
      "CONTENT CREATION",
      "PUBLISHING & COMMUNITY",
      "ANALYTICS & GROWTH",
    ],
    description:
      "We track reach, engagement, follower growth, and conversions with monthly performance reports — using data to continuously refine content strategy, double down on what works, and compound your social media growth.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&fit=crop",
    bg: "#0B1020",
    accent: "#7CFF00",
  },
];

export default function SocialMediaProcess() {
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
      <div
        className="seo-process-heading"
        style={{ padding: "72px 94px 56px", background: "var(--color-bg)" }}
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
          OUR SOCIAL MEDIA PROCESS
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
          A proven five-step framework that transforms your social presence from
          scattered posts to a consistent, community-driven growth engine.
        </p>
      </div>

      <div
        ref={containerRef}
        style={{ height: `${processes.length * 100 + 100}vh`, position: "relative", backgroundColor: "#05070D" }}
      >
        {processes.map((proc, i) => (
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
                <h1
                  className="process-title"
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
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
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

            {/* Dot navigation */}
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
        ))}
      </div>
    </div>
  );
}
