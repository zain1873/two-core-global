import { useEffect, useRef } from "react";
import "../css/SeoProcess.css"

const processes = [
  {
    number: "01",
    title: "WEBSITE AUDIT",
    allTitles: [
      "WEBSITE AUDIT",
      "CUSTOM SEO STRATEGY",
      "CONTINUOUS OPTIMIZATION",
      "SEO–OPTIMIZED CONTENT",
      "TRANSPARENT REPORTING",
    ],
    description:
      "We conduct a thorough website review to identify areas for improvement. You'll get a detailed keyword list, competitor analysis, and a full performance report.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&fit=crop",
    bg: "#ffffff",
    accent: "#111111",
  },
  {
    number: "02",
    title: "CUSTOM SEO STRATEGY",
    allTitles: [
      "WEBSITE AUDIT",
      "CUSTOM SEO STRATEGY",
      "CONTINUOUS OPTIMIZATION",
      "SEO–OPTIMIZED CONTENT",
      "TRANSPARENT REPORTING",
    ],
    description:
      "We enhance user experience across 100+ devices with link building, content optimization, speed improvements, and local SEO to boost your visibility.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&fit=crop",
    bg: "#ffffff",
    accent: "#111111",
  },
  {
    number: "03",
    title: "CONTINUOUS OPTIMIZATION",
    allTitles: [
      "WEBSITE AUDIT",
      "CUSTOM SEO STRATEGY",
      "CONTINUOUS OPTIMIZATION",
      "SEO–OPTIMIZED CONTENT",
      "TRANSPARENT REPORTING",
    ],
    description:
      "Our team follows search engine best practices to refine strategies, improve rankings, and drive high-quality traffic to your site.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80&fit=crop",
    bg: "#ffffff",
    accent: "#111111",
  },
  {
    number: "04",
    title: "SEO–OPTIMIZED CONTENT",
    allTitles: [
      "WEBSITE AUDIT",
      "CUSTOM SEO STRATEGY",
      "CONTINUOUS OPTIMIZATION",
      "SEO–OPTIMIZED CONTENT",
      "TRANSPARENT REPORTING",
    ],
    description:
      "Our expert writers create engaging, high-quality content that aligns with SEO standards to improve search performance and user engagement.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=80&fit=crop",
    bg: "#ffffff",
    accent: "#111111",
  },
  {
    number: "05",
    title: "TRANSPARENT REPORTING",
    allTitles: [
      "WEBSITE AUDIT",
      "CUSTOM SEO STRATEGY",
      "CONTINUOUS OPTIMIZATION",
      "SEO–OPTIMIZED CONTENT",
      "TRANSPARENT REPORTING",
    ],
    description:
      "Stay informed with clear, data-driven reports that track progress and show real growth in traffic, rankings, and conversions.",
    image:
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=900&q=80&fit=crop",
    bg: "#ffffff",
    accent: "#111111",
  },
];

export default function SeoProcess() {
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
          // scrolled distance inside the stacking container
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

            // each subsequent panel slides in over the previous one
            // panel i starts entering when scrolled reaches i * vh
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
    // Run once on mount so initial state is correct
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>

      {/* ── Page header — scrolls normally before stacking begins ── */}
      <div className="seo-process-heading"
        style={{
          padding: "72px 94px 56px",
          background: "#ffffff",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            fontWeight: "700",
            letterSpacing: "0.22em",
            color: "rgba(0,0,0,0.38)",
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
            color: "#111111",
            letterSpacing: "-2.5px",
            lineHeight: 1.02,
            margin: "0 0 18px",
            textTransform: "uppercase",
          }}
        >
          OUR SEO PROCESS
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(0,0,0,0.48)",
            lineHeight: 1.75,
            maxWidth: "500px",
            margin: 0,
          }}
        >
          We're here to improve your web traffic and create results that help
          your business reach new heights.
        </p>
      </div>

      {/* ── Stacking panels ── */}
      {/*
        Total height = N panels × 100vh
        Panel i starts sliding in when the container has been scrolled by i × 100vh.
        The last panel (i=4) therefore fully reveals at 4×100vh of container scroll,
        which equals 4×100vh + header scroll = fully visible before the container ends.
      */}
      <div
        ref={containerRef}
        style={{ height: `${processes.length * 100 + 100}vh`, position: "relative" }}
      >
        {processes.map((proc, i) => {
          const isDark = proc.bg === "#111111" || proc.bg === "#0a0a0a";
          const textColor = isDark ? "#ffffff" : "#111111";
          const mutedColor = isDark
            ? "rgba(255,255,255,0.32)"
            : "rgba(0,0,0,0.32)";
          const borderColor = isDark
            ? "rgba(255,255,255,0.07)"
            : "rgba(0,0,0,0.07)";

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
                /* initial state: first visible, rest hidden below */
                transform: i === 0 ? "translateY(0%)" : "translateY(100%)",
                opacity: i === 0 ? 1 : 0,
                willChange: "transform, opacity",
              }}
            >
              {/* ─ Responsive inner wrapper ─ */}
              <div className="seo-panel-inner">

                {/* LEFT SIDEBAR */}
                <div
                  className="seo-sidebar"
                  style={{ borderRight: `1px solid ${borderColor}` }}
                >
                  <div
                    style={{
                      fontSize: "clamp(52px, 6vw, 84px)",
                      fontWeight: "600",
                      color: textColor,
                      lineHeight: 1,
                      letterSpacing: "-3px",
                      marginBottom: "28px",
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
                          color: j === i ? textColor : mutedColor,
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

                {/* RIGHT CONTENT */}
                <div className="seo-content ">
                  <h1 className="process-title"
                    style={{
                      fontSize: "52px",
                      fontWeight: "600",
                      color: textColor,
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
                      color: isDark
                        ? "rgba(255,255,255,0.65)"
                        : "rgba(0,0,0,0.58)",
                      lineHeight: 1.85,
                      maxWidth: "520px",
                      margin: "0 0 32px",
                    }}
                  >
                    {proc.description}
                  </p>

                  {/* Image card */}
                  <div
                    className="seo-image-card"
                    style={{
                      boxShadow: isDark
                        ? "0 24px 60px rgba(0,0,0,0.65)"
                        : "0 24px 60px rgba(0,0,0,0.09)",
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
                    {/* Badge */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        right: "16px",
                        width: "42px",
                        height: "42px",
                        backgroundColor: proc.accent,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        fontWeight: "800",
                        letterSpacing: "0.05em",
                        color:
                          proc.accent === "#ffffff" || proc.accent === "#e0ff4f"
                            ? "#111"
                            : "#fff",
                      }}
                    >
                      {proc.number}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dot progress indicator */}
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
                      backgroundColor: dot === i ? textColor : mutedColor,
                      transition: "all 0.25s",
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Scoped styles ── */}
    
    </div>
  );
}