import Navbar from "../components/navbar";
import Contact from "../components/contactForm";
import Footer from "../components/Footer";
import CTASection from "../components/CtaSection";

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
      <CTASection/>
      <Contact/>
      <Footer/>
    </div>
  );
}