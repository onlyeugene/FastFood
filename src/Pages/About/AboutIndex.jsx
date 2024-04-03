import React from 'react'
import AboutHero from './AboutHero/AboutHero'
import AboutContents from './AboutContents/AboutContents'
import AboutQuality from './AboutQuality/AboutQuality'
import AboutPeople from './AboutPeople/AboutPeople'

const AboutIndex = () => {
  return (
    <div>
      <AboutHero/>
      <AboutContents/>
      <AboutQuality/>
      <AboutPeople/>
    </div>
  )
}

export default AboutIndex
