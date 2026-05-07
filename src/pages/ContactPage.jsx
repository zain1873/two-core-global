import Navbar from "../components/navbar";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import ProjectSlider from "../components/ProjectSlider";
import Footer from "../components/Footer";
import MarketingSection from "../components/MarketingSection";
import CTASection from "../components/CtaSection";
import FAQ from "../components/Faqs";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      {/* Banner Section */}
      <section className="web-banner">
        <div className="banner-dark-overlay"></div>
        <div className="banner-glass">
          <div className="banner-content">
            <p className="banner-breadcrumb">Home / Conact</p>
            <h1>Let’s Build Something Amazing Together</h1>
            <button className="banner-btn">Make Your Website</button>
          </div>
        </div>
      </section>
      <MarketingSection/>
      <CTASection/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}