import React from 'react'
import Hero from '../components/Hero'
import FeaturedScam from '../components/FeaturedScam'
import ReportScam from '../components/ReportScam'
import HelplineSection from '../components/HelplineSection'


const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedScam/>
      <ReportScam/>
      <HelplineSection/>
    </div>
  )
}

export default Home