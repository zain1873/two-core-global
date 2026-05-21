import React from "react";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import StickySideBy from "../components/StickySideby";
import tcgBanner from "../assets/tcg-banner.jpg";

function AboutPage() {
  return (
    <div className="sem-services about-page">
      <Navbar />

      {/* Banner Section */}
      <section className="web-banner" style={{ backgroundImage: `url(${tcgBanner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="banner-dark-overlay"></div>
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "About" }]} />
            <h1>About Our Company</h1>
            <button className="banner-btn">Make Your Website</button>
          </div>
        </div>
      </section>
      <StickySideBy/>
      <CTASection />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
}

export default AboutPage;