import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Card from './pricecomponents/Card'

const Pricing = () => {
  return (
    <>
      <Navbar />
      <Header heading="Pricing Page"/>
      <Card />
      <Footer />
    </>
  )
}

export default Pricing