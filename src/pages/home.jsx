import Navbar from "../components/navbar";
import HeroVideo from "../components/banner-video";
import HeroBannerText from "../components/HeroBannerText";
import ServicesCards from "../components/ServicesCards";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import ProjectSlider from "../components/ProjectSlider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBannerText />
      <HeroVideo/>
      <ServicesCards/>
      <ProjectSlider/>
      <TestimonialSlider/>
      <Contact/>
    </div>
  );
}