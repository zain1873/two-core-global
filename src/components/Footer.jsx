import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import logo from "../assets/nav-logo.png";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <h2 className="footer__headline">Do It Once. Do It Right.</h2>
          <a href="#talk" className="footer__cta-btn">
            Let's Talk <span className="footer__cta-arrow">→</span>
          </a>
          <p className="footer__desc">
            We create impactful digital experiences through modern design, strategic marketing, and scalable solutions that help brands grow, compete, and lead online.
          </p>
          <div className="footer__socials">
            <a href="https://www.facebook.com/twocoreglobal" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/twocoreglobal/" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/twocoreglobal/" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="footer__columns">
          <div className="footer__col">
            <h4 className="footer__col-title">Who We Are</h4>
            <ul className="footer__col-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Our Team</Link></li>
              <li><Link to="/contact">Careers</Link></li>
              <li><Link to="/portfolio">Case Studies</Link></li>
              <li><Link to="/about">Testimonials</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Insights & Resources</h4>
            <ul className="footer__col-list">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#industry-insights">Industry Insights</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Digital Solutions</h4>
            <ul className="footer__col-list">
              <li><Link to="/website-development">Website Development</Link></li>
              <li><Link to="/seo-services">Search Engine Optimization</Link></li>
              <li><Link to="/social-media-services">Social Media Marketing</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
              <li><Link to="/services">Branding &amp; Identity</Link></li>
              <li><Link to="/sem-services">Ads Management</Link></li>
              <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__col-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><Link to="/contact">Get a Quote</Link></li>
              <li><Link to="/contact">Book a Call</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__logo-center">
        <img src={logo} alt="Two Core Global" />
      </div>

      <div className="footer__copyright">
        2026 © twocoreglobal.com. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
