import Navbar from "../components/navbar";
import HeroVideo from "../components/banner-video";
import HeroBannerText from "../components/HeroBannerText";
import ServicesCards from "../components/ServicesCards";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import ProjectSlider from "../components/ProjectSlider";
import Footer from "../components/Footer";
import MarketingSection from "../components/MarketingSection";
import CTASection from "../components/CtaSection";
import FAQ from "../components/Faqs";
// import HeroTagline from "../components/HeroTagline";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBannerText />
      <HeroVideo/>
      <ServicesCards/>
      {/* <HeroTagline/> */}
      <ProjectSlider/>
      <MarketingSection/>
      <CTASection/>
      <TestimonialSlider/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}