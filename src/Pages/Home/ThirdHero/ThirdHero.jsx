import React, { useEffect, useState } from 'react'
import office from '../../../assets/office.jpg'

const ThirdHero = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        <div style={{backgroundImage: `url(${office})`, backgroundPositionY: `${scrollPosition /8}px` }} className='relative bg-cover bg-center h-[30rem]'>
            <div className='absolute bg-lime-600 w-full py-[2.5rem] flex justify-center items-center gap-[21rem]     text-white'>
                <div>
                    <h1 className='text-[1.8rem] font-extralight inset-x-0 '>Choose from over 2,000 Restaurants</h1>
                    <p className='text-[.7rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae voluptas veritatis.</p>
                </div>
                <div>
                    <button className='border-white border-[1.5px] rounded-sm py-[.5rem] px-[1.5rem] text-[.7rem]'>VIEW ALL RESTUARANTS</button>
                </div>
            </div>
            <div className=' p-[16rem] text-white text-center px-[22rem]'>
                <h1 className='text-[2.5rem] font-extralight'>We also deliver to your office</h1>
                <p className='text-[.8rem]'>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
            </div>
        </div>
    </div>
  )
}

export default ThirdHero
