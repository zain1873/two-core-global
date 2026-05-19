import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroTagline() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
      offset: -200, // negative so it triggers even if element is in view
    });
    // Force refresh after mount
    setTimeout(() => AOS.refresh(), 100);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&display=swap');
        .htl-section {
          height: 60vh;
          width: 100%;
          background: var(--color-bg);
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 0 5vw 5vh 0;
          box-sizing: border-box;
          overflow: hidden;
        }
        .htl-text {
          text-align: left;
          line-height: 0.95;
        }
        .htl-line {
          display: block;
          font-family: 'Barlow Condensed', 'Arial Narrow', Arial, sans-serif;
          font-weight: 900;
          font-size: 60px;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: var(--color-primary);
          text-shadow: var(--glow-primary);
        }
        @media (max-width: 768px) {
          .htl-section {
            height: 50vh;
            padding: 0 5vw 5vh 5vw;
          }
          .htl-line {
            font-size: clamp(20px, 5.5vw, 34px);
          }
        }
      `}</style>
      <section className="htl-section">
        <div className="htl-text">
          <span
            className="htl-line"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-offset="-200"
          >
            Bringing Your 

          </span>
          <span
            className="htl-line"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-offset="-200"
          >
            Business To Light
          </span>
        </div>
      </section>
    </>
  );
}