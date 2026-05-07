import React from "react";
import "../css/PagesCss/webDev.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import DevelopmentCards from "../components/DevelopmentCards";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/contactForm";
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

      <DevelopmentCards />
      <WhyChooseUs />
      <CTASection />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
}

export default WebsiteDevelopment;
