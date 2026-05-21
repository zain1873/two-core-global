import React from "react";
import "../css/PagesCss/webDev.css";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import DevelopmentCards from "../components/DevelopmentCards";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import WebDevelopmentSideby from "../components/webDevelopmentSideby";
import developmentBanner from "../assets/development-banner.png";

function WebsiteDevelopment() {
  return (
    <div className="website-development">
      <Navbar />

      {/* Banner Section */}
      <section
        className="web-banner"
        style={{ backgroundImage: `url(${developmentBanner})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="banner-dark-overlay"></div>
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Website Development" }]} />
            <h1>Building Seamless Experiences</h1>
            <button className="banner-btn">Make Your Website</button>
          </div>
        </div>
      </section>
      <WebDevelopmentSideby/>
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
