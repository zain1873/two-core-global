import { useEffect, useRef } from "react";
import heroVideo from "../assets/banner_video.mp4";

const lines = [
  "Digital growth isn't just about being online anymore.",
  "Modern brands need strategy, creativity, and performance.",
  "We combine design, marketing, and technology to build",
  "digital experiences that attract attention, generate leads,",
  "and turn visitors into customers.",
];

export default function HeroVideo() {
  const heroRef = useRef(null);
  const mediaRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const media = mediaRef.current;
    const text = textRef.current;
    const textLines = text.querySelectorAll(".sh-line");

    const isMobile = () => window.innerWidth <= 768;

    const resetStyles = () => {
      media.style.transform = "";
      text.style.opacity = "";
      textLines.forEach((line) => {
        line.style.opacity = "";
      });
    };

    const onScroll = () => {
      if (isMobile()) {
        resetStyles();
        return;
      }

      const rect = hero.getBoundingClientRect();
      const totalScroll = hero.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / totalScroll, 0), 1);

      const scale = 1 - 0.52 * p;
      const tx = -p * 26;
      media.style.transform = `translateX(${tx}vw) scale(${scale})`;

      const tp = Math.min(Math.max((p - 0.45) / 0.55, 0), 1);
      text.style.opacity = tp;

      textLines.forEach((line, i) => {
        const lp = Math.min(Math.max((tp - i * 0.12) / 0.4, 0), 1);
        line.style.opacity = lp;
      });
    };

    const onResize = () => {
      if (isMobile()) resetStyles();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── Desktop ── */
        .sh-hero {
          height: 300vh;
          background: var(--color-bg-dark);
        }
        .sh-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-bg-dark);
          overflow: hidden;
        }
        .sh-media-wrap {
          width: 85%;
          border-radius: 16px;
          overflow: hidden;
          will-change: transform;
          flex-shrink: 0;
        }
        .sh-media-wrap video {
          width: 100%;
          display: block;
        }
        .sh-text {
          position: absolute;
          right: 5%;
          width: 44%;
          display: block;
          opacity: 0;
        }
        .sh-line {
          display: inline;
          line-height: 1.6;
          color: var(--color-text, #fff);
          opacity: 0;
          font-size: 30px;
          will-change: opacity;
          margin: 0 !important;
          padding: 0 !important;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .sh-hero {
            height: auto;
            padding: 24px 20px 40px;
          }
          .sh-line {
           font-size: 26px;
          }
            
          .sh-sticky {
            position: relative;
            top: auto;
            height: auto;
            flex-direction: column;
            gap: 0;
            overflow: visible;
          }
          .sh-media-wrap {
            width: 100%;
          }
          .sh-text {
            position: relative;
            right: auto;
            width: 100%;
            opacity: 1 !important;
          }
          .sh-line {
            opacity: 1 !important;
            transform: none !important;
            font-size: clamp(14px, 4vw, 17px);
            margin: 0 !important;
            padding: 0 !important;
          }
        }
      `}</style>

      <section className="sh-hero" ref={heroRef}>
        <div className="sh-sticky">
          <div className="sh-media-wrap" ref={mediaRef}>
            <video autoPlay muted loop playsInline>
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
          <div className="sh-text" ref={textRef}>
            <p style={{ margin: 0, padding: 0 }}>
              {lines.map((line, i) => (
                <span key={i} className="sh-line">
                  {line}{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
