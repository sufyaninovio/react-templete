import React from 'react'
import { AboutSec, Banner, ClientSlides, PackagesSec, ServicesSec, Testimonials } from '../../components'

const Home = () => {
  
  return (
    <>
      <Banner />
      <ClientSlides />
      <AboutSec />
      <ServicesSec />
      <PackagesSec />
      <Testimonials />
    </>
  )
}

export default Home