import React from 'react'
import AboutHero from './AboutHero/AboutHero'
import AboutContents from './AboutContents/AboutContents'
import AboutQuality from './AboutQuality/AboutQuality'
import AboutPeople from './AboutPeople/AboutPeople'
import AboutHero2 from './AboutHero/AboutHero2/AboutHero2'

const AboutIndex = () => {
  return (
    <div>
      <AboutHero/>
      <AboutHero2/>
      <AboutContents/>
      <AboutQuality/>
      <AboutPeople/>
    </div>
  )
}

export default AboutIndex
