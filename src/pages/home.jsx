import Navbar from "../components/navbar";
import HeroVideo from "../components/banner-video";
import HeroBannerText from "../components/HeroBannerText";
import ServicesCards from "../components/ServicesCards";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import ProjectSlider from "../components/ProjectSlider";
import Footer from "../components/Footer";
import CTASection from "../components/CtaSection";
import FAQ from "../components/Faqs";
import HeroTagline from "../components/HeroTagline";
import "../css/home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroBannerText />
      <HeroVideo/>
      <ServicesCards/>
      <ProjectSlider/>
      <CTASection/>
      <TestimonialSlider/>
      <FAQ/>
      <HeroTagline/>
      <Contact/>

      <Footer/>
    </div>
  );
}