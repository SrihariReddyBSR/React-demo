import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import About from './HomeComponents/About'

const Training = () => {
  return (
    <>
      <Navbar />
      <Header heading="Training Page" />
      <About heading = "Training" />
      <Footer />
    </>
  )
}

export default Training