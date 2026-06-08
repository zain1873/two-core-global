import React from "react";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import CTASection from "../components/CtaSection";
import WhyChooseUiUx from "../components/WhyChooseUiUx";
import UiUxServices from "../components/UiUxServices";
import UiUxStats from "../components/UiUxStats";
import UiUxProcess from "../components/UiUxProcess";
import UiUxTools from "../components/UiUxTools";
import UiUxPackages from "../components/UiUxPackages";
import "../css/PagesCss/webDev.css";
import "../css/PagesCss/UiUx.css";
import uiuxBanner from "../assets/uiux-banner.png";

function UiUxPage() {
  return (
    <div className="uiux-page">
      <Navbar />

      {/* Banner */}
      <section
        className="web-banner"
        style={{
          backgroundImage: `url(${uiuxBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="banner-dark-overlay" />
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb
              items={[{ label: "Home", to: "/" }, { label: "UI/UX Design" }]}
            />
            <h1>UI/UX Design Services</h1>
            <p className="banner-sub">
              Crafting intuitive, beautiful digital experiences that users love and businesses trust.
            </p>
            <button className="banner-btn">Start Your Project</button>
          </div>
        </div>
      </section>

      <WhyChooseUiUx />
      <UiUxServices />
      <UiUxStats />
      <UiUxProcess />
      <UiUxTools />
      <UiUxPackages />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}

export default UiUxPage;
