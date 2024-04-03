import React from 'react'
import people from '../../../assets/people.jpg'

const AboutPeople = () => {
  return (
    <div className='flex w-full'>
      <div>
        <img src={people} alt="" className='w-[100rem]'/>
      </div>
      <div className='bg-lime-600 flex flex-col justify-center text-white items-start p-[5rem]'>
        <h1 className='gochi text-[32px] pb-2'>"EX VERO MEDIOCREM"</h1>
        <p className='pb-4 text-[.8rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        <p className=' text-[.8rem]'>Per ea erant aeque corpora, an agam tibique nec. At recusabo expetendis vim. Tractatos principes mel te, dolor solet viderer usu ad.</p>
      </div>
    </div>
  )
}

export default AboutPeople
