import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* LEFT */}
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

        {/* RIGHT */}
        <div className="footer__right">
          {/* Nav Links */}
          <ul className="footer__nav">
            <li className="footer__nav-item"><a href="#work">WORK</a></li>
            <li className="footer__nav-item"><a href="#about">ABOUT</a></li>
            <li className="footer__nav-item"><a href="#services">SERVICES</a></li>
            <li className="footer__nav-item"><a href="#careers">CAREERS</a></li>
            <li className="footer__nav-item"><a href="#contact">CONTACT</a></li>
            <li className="footer__nav-item"><a href="#design-news">DESIGN NEWS</a></li>
          </ul>

          {/* Social Links */}
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

      {/* BOTTOM BAR */}
      <div className="footer__bottom">
        <div className="footer__location">
          <span>Pakistan</span>
          <span>Asia</span>
        </div>
        <div className="footer__legal">
          <a href="#terms">Terms &amp; Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;