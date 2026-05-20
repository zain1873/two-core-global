import "../css/PagesCss/Contact.css";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import Contact from "../components/contactForm";
import Footer from "../components/Footer";
import CTASection from "../components/CtaSection";
import ContactStats from "../components/ContactStats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/Faqs";

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      {/* ── Contact Banner ── */}
      <section className="contact-banner">
        <div className="contact-banner-overlay"></div>
        <div className="contact-banner-glow-left"></div>
        <div className="contact-banner-glow-bottom"></div>
        <div className="contact-banner-grid"></div>

        <div className="contact-banner-inner">
          {/* Left Content */}
          <div className="contact-banner-left">
            <p className="contact-banner-breadcrumb">
              <Link to="/">Home</Link> <span>/</span> Contact
            </p>

            <div className="contact-banner-chip">
              <span className="contact-banner-chip-dot"></span>
              Get In Touch
            </div>

            <h1 className="contact-banner-title">
              Let's Build Something{" "}
              <span className="accent-cyan">Amazing</span>
              <br />
              <span className="accent-green">Together</span>
            </h1>

            <p className="contact-banner-subtitle">
              Have a project in mind? We'd love to hear about it. Drop us a
              message and our team will get back to you within 24 hours.
            </p>

            <div className="contact-banner-actions">
              <button className="contact-btn-primary">Send a Message</button>
              <button className="contact-btn-secondary">Call Us ↗</button>
            </div>
          </div>

          {/* Right Info Card */}
          <div className="contact-banner-card">
            <div className="contact-info-item">
              <div className="contact-info-icon">✉</div>
              <div className="contact-info-text">
                <span className="contact-info-label">Email Us</span>
                <span className="contact-info-value">twocoreglobal@gmail.com</span>
              </div>
            </div>

            <div className="contact-card-divider"></div>

            <div className="contact-info-item">
              <div className="contact-info-icon">📍</div>
              <div className="contact-info-text">
                <span className="contact-info-label">Our Office</span>
                <span className="contact-info-value">Worldwide — Remote Friendly</span>
              </div>
            </div>

            <div className="contact-card-divider"></div>

            <div className="contact-info-item">
              <div className="contact-info-icon">🕐</div>
              <div className="contact-info-text">
                <span className="contact-info-label">Working Hours</span>
                <span className="contact-info-value">Mon – Fri, 9am – 6pm</span>
              </div>
            </div>

            <div className="contact-card-divider"></div>

            <div className="contact-response-badge">
              <span className="contact-response-dot"></span>
              <span className="contact-response-text">We respond within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="contact-scroll-indicator">
          <div className="contact-scroll-line"></div>
          Scroll
        </div>
      </section>

      <ContactStats />
      <CTASection />
      <Contact />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
