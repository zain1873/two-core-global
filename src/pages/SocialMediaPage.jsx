import React from "react";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import SocialMediaPackages from "../components/SocialMediaPakages";
import WhyChooseUs from "../components/WhyChooseSocial";

function SocialMedia() {
  return (
    <div className="seo-services bg-[white]">
      <Navbar />

      {/* Banner Section */}
      <section className="web-banner">
        <div className="banner-dark-overlay"></div>
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Social Media" }]} />
            <h1>Social Media Management</h1>
            <button className="banner-btn">Make Your Website</button>
          </div>
        </div>
      </section>
      <WhyChooseUs/>
      <SocialMediaPackages/>
      <TestimonialSlider />
      <CTASection />
      <Footer />
    </div>
  );
}

export default SocialMedia;