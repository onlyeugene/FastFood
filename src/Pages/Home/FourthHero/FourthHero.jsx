import React from 'react'
import foodbanner from '../../../assets/foodbanner.jpg'
import driver from '../../../assets/driver.jpg'

const FourthHero = () => {
  return (
    <div className='py-[1rem] pb-[4rem] w-full bg-gray-100'>
      <div className='text-center p-[2rem]'>
        <h1 className='text-[2.2rem] font-extralight'>Work with Us</h1>
        <p className='text-[.8rem] text-gray-600 font-light'>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
      </div>
      <div className='flex justify-center items-center gap-[2rem]'>
        <div className='text-center border bg-white py-[1.5rem] border-container px-[1rem] rounded-md'>
            <img src={foodbanner} alt="order food online picture" className='w-[21rem] mb-4 rounded-md'/>
            <h1 className='text-[1.2rem]'>Submit your Restaurant</h1>
            <h2 className='text-[.9rem] text-gray-500 font-extralight mb-2'>Start to earn customers</h2>
            <p className='text-[.7rem] text-gray-600 mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Pariatur reiciendis quod explicabo yuping <br /> molestiae numq  necessitatibus <br /> laudantium assumenda.</p>
            <div>
                <button className='text-[.7rem] text-white border bg-lime-600 py-[.4rem] px-[.7rem] rounded-md'>READ MORE</button>
            </div>
        </div>
        <div className='text-center border bg-white py-[1.5rem] border-container px-[1rem] rounded-md'>
            <img src={driver} alt="picture of a rider" className='w-[20rem] mb-4 rounded-md'/>
            <h1 className='text-[1.2rem]'>We are looking for a Driver</h1>
            <h2 className='text-[.9rem] text-gray-500 font-extralight mb-2'>Start to earn money</h2>
            <p className='text-[.7rem] text-gray-600 mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Pariatur reiciendis quod explicabo yuping <br /> molestiae numq  necessitatibus <br /> laudantium assumenda.</p>
            <div>
                <button className='text-[.7rem] text-white border bg-lime-600 py-[.4rem] px-[.7rem] rounded-md'>READ MORE</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FourthHero
