import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import DevelopmentCards from '../components/DevelopmentCards';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from "../components/contactForm";
import MarketingSection from '../components/MarketingSection';
import TestimonialSlider from '../components/Testimonials';
import CTASection from '../components/CtaSection';


function websiteDevelopment() {
  return (
      <div className="website-development">
        <Navbar/>
        <DevelopmentCards/>
        <WhyChooseUs/>
        <CTASection/>
        <TestimonialSlider/>
        <MarketingSection/>
        <Contact/>
        <Footer/>

      </div>
  )
}

export default websiteDevelopment
