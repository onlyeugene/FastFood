import React, { useState } from 'react'
import food from '../../../assets/food.jpeg'

const AboutHero = () => {
  return (
    <div className='relative flex flex-col justify-center items-center'>
        <div>
            <img src={food} alt="" className=''/>
        </div>
        <div className='bg-[#1f1f1f81] absolute flex flex-col text-white justify-center items-center  py-[1rem] h-full w-full'>
            <h1 className='px-[16rem] text-[2.7rem]'>About Us</h1>
            <p className='text-[.8rem]'>Qui debitis meliore ex, tollit debitis conclusionemque te eos.</p>
        </div>


        {/* BORDER  */}
        
    </div>
  )
}

export default AboutHero
