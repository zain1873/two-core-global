import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import SemProcess from "../components/SemProcess";
import SemPakages from "../components/SemPakages";
import WhyChooseUs from "../components/WhyChooseSem";

function SeoSection() {
  return (
    <div className="sem-services">
      <Navbar />

      {/* Banner Section */}
      <section className="web-banner">
        <div className="banner-dark-overlay"></div>
        <div className="banner-glass">
          <div className="banner-content">
            <p className="banner-breadcrumb">Home / Sem</p>
            <h1>Leading Global Sem Services Company</h1>
            <button className="banner-btn">Make Your Website</button>
          </div>
        </div>
      </section>
      <WhyChooseUs/>
      <SemProcess/>
      <SemPakages/>
      <CTASection />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
}

export default SeoSection;