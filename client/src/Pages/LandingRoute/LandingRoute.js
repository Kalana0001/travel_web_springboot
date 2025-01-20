import React from 'react'
import LandingPage from '../LandingPage/LandingPage'
import AboutUs from '../AboutUs/AboutUs'
import HomePackages from '../HomePackages/HomePackages'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../../components/Footer/Footer'

const LandingRoute = () => {
  return (
    <div className="App">
      <LandingPage />
      <AboutUs/>
      <HomePackages/>
      <ImageSlider/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default LandingRoute