import React, { useState } from 'react'
import food from '../../../assets/food.jpeg'
import searchs from '../../../assets/search.svg'
import search from '../../../assets/search white.png'
import x from '../../../assets/x-mark.png'
import arrow from '../../../assets/rightarrow.png'
import location from '../../../assets/locationsmall.png'

const AboutHero = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Set overflow to hidden when modal is open
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Set overflow to auto when modal is closed
  };
  const handleCloseModalBody = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Set overflow to auto when modal is closed
  };
  return (
    <div className='relative'>
        <div>
            <img src={food} alt="" className=''/>
        </div>
        <div className='bg-[#1f1f1f81] absolute flex flex-col text-white justify-center items-center top-0 h-[auto] p-[16.4rem] w-full'>
            <h1 className='px-[16rem] text-[2.7rem]'>About Us</h1>
            <p className='text-[.8rem]'>Qui debitis meliore ex, tollit debitis conclusionemque te eos.</p>
        </div>


        {/* BORDER  */}
        <div className='flex gap-2 items-center justify-start p-3 w-full pl-[5rem] text-gray-600 text-[.75rem] '>
          <div>
            <img src={location} alt="location icon" className='w-[.8rem]'/>
          </div>
          <div className='flex items-center gap-[.2rem]'>
            <h1>Home</h1>
            <div>
              <img src={arrow} alt="arrow icon"  className='w-[.5rem]'/>
            </div>
          </div>
          <div className='flex items-center gap-[.2rem]'>
            <h1>Category</h1>
            <div>
              <img src={arrow} alt="arrow icon"  className='w-[.5rem]'/>
            </div>
          </div>
          <h1>Page active</h1>
          <div className='flex gap-1 border-l-[1px] border-gray-400 pl-3 items-center cursor-pointer' onClick={handleOpenModal} >
            <div>
              <img src={searchs} alt="search icon" className='w-[1.2rem]  hover:text-rose-600'/>
            </div>
            <p className=' hover:text-rose-600'>Search</p>
          </div>
        </div>
        {modalOpen && (
        <div className='dark justify-center items-center w-full' onClick={handleCloseModalBody}>
            <img src={x} alt="close icon"  className='top-4 right-4 absolute w-[1.3rem] cursor-pointer' onClick={handleCloseModal}/>
          <div className=' absolute top-[30rem] left-1/4 justify-center flex flex-col items-center'>
            <div className='flex justify-center items-center text-white' onClick={(b) => b.stopPropagation()}>
                  <input type="text" placeholder='Search....' className='text-[1.8rem] py-[.2rem] pr-[24rem] font-extralight bg-transparent outline-none border-b-[1px] caret-white'/>
                  <img src={search} alt="" className='absolute top-1 right-2'/>
            </div>
          </div>
        </div>
        )}
    </div>
  )
}

export default AboutHero
