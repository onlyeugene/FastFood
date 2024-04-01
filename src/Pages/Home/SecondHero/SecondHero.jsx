import React from 'react'
import location from '../../../assets/location.png'
import shop from '../../../assets/shop.png'
import secure from '../../../assets/secure.png'
import delivery from '../../../assets/delivery.png'

const SecondHero = () => {
  return (
    <div className='w-full p-[2rem] bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-[2.2rem] font-extralight'>How it works</h1>
        <p className='font-extralight text-[.9rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='flex justify-center items-center text-center gap-[2rem] p-[2rem]'>
        <div className='relative flex justify-center items-center'>
            <h1 className=' border absolute inline-block top-[-.9rem] text-[13px] rounded-full py-[.25rem] px-3 bg-white border-gray-400'>1</h1>
            <div className='border border-gray-200 bg-white py-[2rem] px-[2rem] rounded-md  flex flex-col justify-center items-center'>
                <img src={location} alt="location icon" className='w-[5rem] mb-3'/>
                <h2 className='text-[.8rem] font-medium mb-1'>Search my address</h2>
                <p className='text-[.7rem] text-gray-500'>Find all restaurants available in <br /> your location</p>
            </div>
        </div>
        <div className='relative flex justify-center items-center'>
            <h1 className=' border absolute inline-block top-[-1rem] text-[13px] rounded-full py-[.35rem] px-3 bg-white border-gray-400'>2</h1>
            <div className='border border-gray-200 rounded-md bg-white py-[2rem] px-[2.5rem] flex flex-col justify-center items-center'>
                <img src={shop} alt="shop icon" className='w-[5rem] mb-3'/>
                <h2 className='text-[.8rem] font-medium'>Choose a restaurant</h2>
                <p className='text-[.7rem] text-gray-500'>We have more than 1000s of <br /> menus online.</p>
            </div>
        </div>
        <div className='relative flex justify-center items-center'>
            <h1 className=' border absolute inline-block top-[-1rem] text-[13px] rounded-full py-[.35rem] px-3 bg-white border-gray-400'>3</h1>
            <div className='border border-gray-200 bg-white py-[2rem] px-[2.5rem] rounded-md flex flex-col justify-center items-center'>
                <img src={secure} alt="secure icon" className='w-[5rem] mb-3'/>
                <h2 className='text-[.8rem] font-medium'>Pay by card or cash</h2>
                <p className='text-[.7rem] text-gray-500'>It's quick, easy and totally<br /> secure</p>
            </div>
        </div>
        <div className='relative flex justify-center items-center'>
            <h1 className=' border absolute inline-block top-[-1rem] text-[13px] rounded-full py-[.4rem] px-3 bg-white border-gray-400'>4</h1>
            <div className='border border-gray-200 bg-white py-[2rem] px-[2rem] rounded-md flex flex-col justify-center items-center'>
                <img src={delivery} alt="delivery icon" className='w-[5rem] mb-3'/>
                <h2 className='text-[.8rem] font-medium'>Delivery - Takeaway</h2>
                <p className='text-[.7rem] text-gray-500'>You are lazy? Are you backing <br /> home?</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SecondHero
