import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import DevelopmentCards from '../components/DevelopmentCards';
import WhyChooseUs from '../components/WhyChooseUs';

function websiteDevelopment() {
  return (
      <div className="website-development">
        <Navbar/>
        <DevelopmentCards/>
        <WhyChooseUs/>
        <Footer/>

      </div>
  )
}

export default websiteDevelopment
