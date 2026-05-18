import { useEffect, useRef } from "react";
import heroVideo from "../assets/banner_video.mp4";

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

export default function HeroVideo() {
  const heroRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const media = mediaRef.current;
    let raf;

    const update = () => {
      const vh = window.innerHeight;
      const rect = hero.getBoundingClientRect();
      const totalScroll = hero.offsetHeight - vh;
      const raw = clamp(-rect.top / totalScroll, 0, 1);
      const p = easeInOut(raw);

      const w = lerp(100, 58, p);
      const h = lerp(100, 62, p);
      const radius = lerp(0, 22, p);
      const rotation = lerp(0, 2.5, p);
      const shadowBlur = lerp(0, 80, p);
      const shadowSpread = lerp(0, 20, p);
      const shadowOpacity = lerp(0, 0.55, p);

      Object.assign(media.style, {
        width: `${w}%`,
        height: `${h}vh`,
        borderRadius: `${radius}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        boxShadow: `0 ${shadowBlur / 2}px ${shadowBlur}px ${shadowSpread}px rgba(0,0,0,${shadowOpacity})`,
        clipPath: "none",
      });

      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <style>{`
        .sh-hero {
          position: relative;
          height: 400vh;
          background: var(--color-bg-dark);
        }
        .sh-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          background: var(--color-bg-dark);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sh-media {
          position: absolute;
          top: 50%;
          left: 50%;
          will-change: transform, width, height, border-radius, box-shadow;
          overflow: hidden;
        }
        .sh-media video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <section className="sh-hero" ref={heroRef}>
        <div className="sh-sticky">
          <div className="sh-media" ref={mediaRef}>
            <video autoPlay muted loop playsInline>
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
}