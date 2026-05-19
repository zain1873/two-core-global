import { useEffect, useRef } from "react";
import heroVideo from "../assets/banner_video.mp4";

export default function HeroVideo() {
  const heroRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const media = mediaRef.current;

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const totalScroll = hero.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / totalScroll, 0), 1);
      const scale = 0.65 + 0.15 * p;
      media.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
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
        }
        .sh-media {
          width: 100%;
          transform: scale(0.65);
          transform-origin: center center;
          transition: transform 0.3s ease;
          border-radius: 16px;
          overflow: hidden;
        }
        .sh-media video {
          width: 100%;
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
