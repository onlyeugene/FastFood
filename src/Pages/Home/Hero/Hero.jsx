import React, { useEffect, useRef, useState } from 'react'
import familyeating from '../../../assets/family eating.jpeg'
import search from '../../../assets/search.svg'
// import Typed from 'typed.js'


// const typed = newTyped('element', {
//   strings: ['Delivery', 'Fast', 'Takeaway'],
//   typespeed:30
// });



const Hero = () => {

// TYPED JS ON THE FOOD PART 
  // const typedTextRef = useRef(null);
  
  //     useEffect(() => {
  
  //       const options = {
  //         strings: ["Fast","Delivery", "Takeaway"], 
  //         typeSpeed: 20,
  //         showCursor: false,
  //         loop: true,
  //         delay: 500,
  //       };
  
  //       const typed = new Typed(typedTextRef.current, options);
  
  //       return () => {
  //         typed.destroy();
  //       };
  //     }, []);

      const typedTextRef = useRef(null);
  const [typedTextIndex, setTypedTextIndex] = useState(0);
  const typedTexts = ['fast', 'Takeaway', 'Delivery'];

  useEffect(() => {
    const typedTextTimeout = setTimeout(() => {
      setTypedTextIndex((prevIndex) => (prevIndex + 1) % typedTexts.length);
    }, 2000); // Change text every 2 seconds

    // Clear timeout on component unmount
    return () => clearTimeout(typedTextTimeout);
  }, [typedTextIndex]);

  useEffect(() => {
    // Add 'fade-in' class to trigger fade-in effect
    typedTextRef.current.classList.add('fade-in');

    // Remove 'fade-in' class after the transition ends
    const transitionEndListener = () => {
      typedTextRef.current.classList.remove('fade-in');
    };

    typedTextRef.current.addEventListener('transitionend', transitionEndListener);

    // Cleanup event listener
    return () => {
      typedTextRef.current.removeEventListener('transitionend', transitionEndListener);
    };
  }, [typedTextIndex]);

  
      


  return (
    <div className='w-full h-full relative'>
    <div>
      <img src={familyeating} alt="family eating image" className='filter blur-sm'/>
    </div>
    <div className='absolute top-[20rem]  w-full  text-white text-center'>
      <h1 className='text-[4rem] font-extralight'>Order <span className='font-normal typed-text' ref={typedTextRef}>{typedTexts[typedTextIndex]}</span> Food</h1>
      <p className='text-[.8rem] mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit vehivcula.</p>
      <div className='relative'>
        <input className='border rounded-3xl py-[.7rem] px-[20rem] pl-[1rem] text-[.8rem] text-gray-600 font-semibold outline-none' type="text" placeholder='Your Address or postal code' />
        <div className='w-full '>
          <img src={search} alt="search icon" className='w-[2rem] inline-block absolute top-1 ml-[12.5rem]' />
        </div>
      </div>
    </div>
      <div className='text-white  justify-center items-center absolute bottom-0 gap-x-6 bg-[#1f1f1f6b] w-full p-3 xl:flex hidden'>
        <p className='font-semibold text-[1.2rem]'>2650 <span className='font-normal text-[.9rem]'>Restaurant</span></p>
        <p className='font-semibold text-[1.2rem]'>5350 <span className='font-normal text-[.9rem]'>People Served</span></p>
        <p className='font-semibold text-[1.2rem]'>12350 <span className='font-normal text-[.9rem]'>Registered Users</span></p>
      </div>
    </div>
  )
}

export default Hero
