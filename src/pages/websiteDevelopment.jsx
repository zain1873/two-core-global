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
        {/* Light Black Overlay */}
        <div className="banner-dark-overlay"></div>

        {/* Glass Overlay */}
        <div className="banner-glass">
          {/* Content */}
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
          <h2 className="theme-title">Web Development Overview</h2>

          <p>
            Our web development services provide enterprise-grade and customized
            solutions tailored to meet the evolving demands of modern
            businesses. We focus on building scalable, secure, and
            high-performance web applications that help businesses grow in a
            competitive digital world. Whether you need a simple landing page, a
            corporate website, or a complex web application, our team has the
            expertise to turn your ideas into reality. We combine modern
            technologies, clean UI/UX design, and strong backend architecture to
            deliver results that not only meet expectations but exceed them.
          </p>

          <button>Learn More</button>
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
