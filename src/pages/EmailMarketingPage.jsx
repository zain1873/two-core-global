import React from "react";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import WhyChooseEmail from "../components/WhyChooseEmail";
import EmailServices from "../components/EmailServices";
import EmailProcess from "../components/EmailProcess";
import EmailPakages from "../components/EmailPakages";
import marketingBanner from "../assets/marketing_banner.png";
import "../css/PagesCss/webDev.css";

function EmailMarketingPage() {
  return (
    <div className="email-marketing-page">
      <Navbar />

      {/* Banner */}
      <section
        className="web-banner"
        style={{
          backgroundImage: `url(${marketingBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="banner-dark-overlay" />
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb
              items={[{ label: "Home", to: "/" }, { label: "Email Marketing" }]}
            />
            <h1>Results-Driven Email Marketing Services</h1>
            <button className="banner-btn">Start Your Campaign</button>
          </div>
        </div>
      </section>

      <WhyChooseEmail />
      <EmailServices />
      <EmailProcess />
      <EmailPakages />
      <CTASection />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
}

export default EmailMarketingPage;
