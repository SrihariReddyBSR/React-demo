import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Form from './contactComponents/Form'

const Contact = () => {
  return (
    <>
      <Navbar />
      <Header heading="Contact Page"/>
      <Form />
      <Footer />
    </>
  )
}

export default Contact