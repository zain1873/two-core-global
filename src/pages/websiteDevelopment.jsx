import React from "react";
import "../css/PagesCss/webDev.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import DevelopmentCards from "../components/DevelopmentCards";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/contactForm";
import MarketingSection from "../components/MarketingSection";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";

function WebsiteDevelopment() {
  return (
    <div className="website-development">
      <Navbar />

      {/* Banner Section */}
      <section className="web-banner">
        <div className="banner-dark-overlay"></div>
        <div className="banner-glass">
          <div className="banner-content">
            <p className="banner-breadcrumb">Home / Website Development</p>
            <h1>Building Seamless Experiences</h1>
            <button className="banner-btn">Make Your Website</button>
          </div>
        </div>
      </section>

    <section className="overview-section">
      {/* Left Content */}
      <div className="overview-text">
        <span className="overview-eyebrow">What We Do</span>

        <h2>
          Crafting <em>Digital</em><br />Experiences That Last
        </h2>

        <p>
          Our web development services provide enterprise-grade solutions
          tailored to the evolving demands of modern businesses. Scalable,
          secure, and high-performance — from a landing page to a full-scale
          web application.
        </p>

        <div className="overview-cta">
          <button className="btn-primary">Learn More</button>
          <button className="btn-secondary">
            View Our Work <span className="arrow-circle">→</span>
          </button>
        </div>

        <div className="overview-stats">
          <div>
            <div className="overview-stat-value">200+</div>
            <div className="overview-stat-label">Projects Shipped</div>
          </div>
          <div>
            <div className="overview-stat-value">98%</div>
            <div className="overview-stat-label">Client Satisfaction</div>
          </div>
          <div>
            <div className="overview-stat-value">6yr</div>
            <div className="overview-stat-label">In Business</div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="overview-image">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Web Development"
        />
      </div>
    </section>

      <DevelopmentCards />
      <WhyChooseUs />
      <CTASection />
      <TestimonialSlider />
      <MarketingSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default WebsiteDevelopment;
