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
            <p className="banner-breadcrumb">
              Home / Website Development
            </p>

            <h1>
              Building Seamless Experiences
            </h1>

            <button className="banner-btn">
              Make Your Website
            </button>
          </div>
        </div>
      </section>


    <section className="overview-section">
      {/* Left Content */}
      <div className="overview-text">
        <h2>Web Development Overview</h2>

        <p>
          We build modern, scalable, and high-performance websites using the
          latest technologies. Our focus is on creating smooth user experiences,
          clean UI design, and fully responsive web applications that work on all devices.
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