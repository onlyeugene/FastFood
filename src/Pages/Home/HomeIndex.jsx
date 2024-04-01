import React from 'react'
import Hero from './Hero/Hero'
import SecondHero from './SecondHero/SecondHero'
import ThirdHero from './ThirdHero/ThirdHero'
import FourthHero from './FourthHero/FourthHero'
import Restaurants from './Restaurants/Restaurants'

function HomeIndex() {
  return (
    <div>
      <Hero/>
      <SecondHero/>
      <Restaurants/>
      <ThirdHero/>
      <FourthHero/>
    </div>
  )
}

export default HomeIndex
