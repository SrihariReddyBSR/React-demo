import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from './HomeComponents/Hero'
import About from './HomeComponents/About'
import Services from './HomeComponents/Services'
import CallToAction from './HomeComponents/CallToAction'
import Faqs from './HomeComponents/Faqs'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About heading = "About Us" />
        <Services />
        <CallToAction />
        <Faqs />
        <Footer />
    </>
  )
}

export default Home