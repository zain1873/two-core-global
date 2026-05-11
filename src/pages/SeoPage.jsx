import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import WhyChooseSeo from "../components/WhyChooseSeo";
import SeoExpertise from "../components/SeoExpertise";
import SeoProcess from "../components/SeoProcess";
import SEOPackages from "../components/SeoPakages";
import SeoTagline from "../components/SeoTagline";

function SeoSection() {
  return (
    <div className="seo-services bg-[white]">
      <Navbar />

      {/* Banner Section */}
      <section className="web-banner">
        <div className="banner-dark-overlay"></div>
        <div className="banner-glass">
          <div className="banner-content">
            <p className="banner-breadcrumb">Home / Seo</p>
            <h1>Leading Global Seo Services Company</h1>
            <button className="banner-btn">Make Your Website</button>
          </div>
        </div>
      </section>
      <WhyChooseSeo/>
      <SeoExpertise/>
      <SeoProcess/>
      <SEOPackages/>
      <TestimonialSlider />
      <SeoTagline/>
      <CTASection />
      <Footer />
    </div>
  );
}

export default SeoSection;