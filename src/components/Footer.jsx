import React, { useEffect, useRef, useState } from "react";
import "../css/footer.css";
import logo from "../assets/nav-logo.png";

const letters = ["T", "C", "G"];

const TCGReveal = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false);
          requestAnimationFrame(() =>
            requestAnimationFrame(() => setAnimate(true))
          );
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&display=swap');
        .tcg-wrap {
          display: flex;
          justify-content: start;
          align-items: flex-end;
          width: 100%;
          overflow: hidden;
          padding: 20px 0px;
          box-sizing: border-box;
          line-height: 0.82;
        }
        .tcg-clip {
          overflow: hidden;
          display: inline-block;
        }
        .tcg-letter {
          display: inline-block;
          color: #ffff !important;
          font-weight: 900;
          font-size: 20rem;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 0.85;
          color: rgba(255,255,255,0.07);
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.18);
          will-change: transform, opacity;
        }
      `}</style>

      <div className="tcg-wrap" ref={ref}>
        {letters.map((letter, i) => (
          <div className="tcg-clip" key={letter}>
            <span
              className="tcg-letter"
              style={{
                transform: animate ? "translateY(0%)" : "translateY(110%)",
                opacity: animate ? 1 : 0,
                transition: animate
                  ? `transform 0.95s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s, opacity 0.5s ease ${i * 0.15}s`
                  : "none",
              }}
            >
              {letter}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <h2 className="footer__headline">Design it once. Design it right</h2>
          <a href="#talk" className="footer__cta-btn">
            Lets Talk <span className="footer__cta-arrow">→</span>
          </a>
          <div className="footer__contact">
            <span className="footer__contact-label">New Business :</span>
            <a href="mailto:hello@dzinr.in" className="footer__contact-email">
              hello@dzinr.in
            </a>
          </div>
        </div>

        <div className="footer__right">
          <ul className="footer__nav">
            <li className="footer__nav-item"><a href="#work">WORK</a></li>
            <li className="footer__nav-item"><a href="#about">ABOUT</a></li>
            <li className="footer__nav-item"><a href="#services">SERVICES</a></li>
            <li className="footer__nav-item"><a href="#careers">CAREERS</a></li>
            <li className="footer__nav-item"><a href="#contact">CONTACT</a></li>
            <li className="footer__nav-item"><a href="#design-news">DESIGN NEWS</a></li>
          </ul>

          <ul className="footer__social">
            <li className="footer__social-item">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                INSTAGRAM <span className="footer__external-icon">↗</span>
              </a>
            </li>
            <li className="footer__social-item">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LINKEDIN <span className="footer__external-icon">↗</span>
              </a>
            </li>
            <li className="footer__social-item">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                X (TWITTER) <span className="footer__external-icon">↗</span>
              </a>
            </li>
            <li className="footer__social-item">
              <a href="mailto:hello@dzinr.in">
                EMAIL <span className="footer__external-icon">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__location">
          <span>Pakistan</span>
          <span>Asia</span>
        </div>
        {/* <div className="footer-logo">
          <img src={logo} alt="" />
        </div> */}
        <div className="footer__legal">
          <a href="#terms">Terms &amp; Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
      <TCGReveal />
      
      <div className="footer__copyright">
        Copyright © 2025 Two Core Global, All Rights Reserved – Designed by twocoreglobal.com
      </div>
    </footer>
  );
};

export default Footer;