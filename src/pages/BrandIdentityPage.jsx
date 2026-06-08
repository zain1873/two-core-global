import React from "react";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import brandIdentityBanner from "../assets/brand-identity.png";
import "../css/PagesCss/webDev.css";

function BrandIdentityPage() {
  return (
    <div className="brand-identity-page">
      <Navbar />

      {/* Banner */}
      <section
        className="web-banner"
        style={{
          backgroundImage: `url(${brandIdentityBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="banner-dark-overlay" />
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb
              items={[{ label: "Home", to: "/" }, { label: "Brand Identity" }]}
            />
            <h1>Brand Identity & Design Services</h1>
            <button className="banner-btn">Build Your Brand</button>
          </div>
        </div>
      </section>

      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}

export default BrandIdentityPage;
