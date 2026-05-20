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

const RedditIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Reddit">
              <RedditIcon />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Twitter / X">
              <TwitterIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="LinkedIn">
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
