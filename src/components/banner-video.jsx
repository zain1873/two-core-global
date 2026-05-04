import { useEffect, useRef } from "react";
import heroVideo from "../assets/banner-video.mp4";

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

      const w = lerp(80.3698, 100, p);
      const h = lerp(80.3817, 100, p);
      const rotation = lerp(-6, 0, p);

      const x1 = lerp(9.8131, 0, p),  y1 = lerp(0.4907, 0, p);
      const x2 = lerp(94.1121, 100, p), y2 = lerp(19.6262, 0, p);
      const x3 = lerp(99.5093, 100, p), y3 = lerp(99.5093, 100, p);
      const x4 = lerp(0, 0, p),         y4 = lerp(87.243, 100, p);

      Object.assign(media.style, {
        width: `${w}%`,
        height: `${h}vh`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        clipPath: `polygon(${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%, ${x4}% ${y4}%)`,
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
          background: #000;
        }
        .sh-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          background-color:#ffff;
        }
        .sh-media {
          position: absolute;
          top: 50%;
          left: 50%;
          will-change: transform, width, height, clip-path;
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