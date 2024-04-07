import React, { useState } from 'react'
import searchs from '../../../../assets/search.svg'
import search from '../../../../assets/search white.png'
import x from '../../../../assets/x-mark.png'
import arrow from '../../../../assets/rightarrow.png'
import location from '../../../../assets/locationsmall.png'

const OrderFooter = () => {
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
    <div className=''>
      <div className='flex gap-2 bg-white items-center justify-start p-3 w-full pl-[5rem] text-gray-600 text-[.75rem] '>
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
        <div className='dark absolute -top-[20rem] flex justify-center items-center w-full h-[115rem]' onClick={handleCloseModalBody}>
            <img src={x} alt="close icon"  className='-mt-[68rem] right-[3rem] absolute w-[1.3rem] cursor-pointer' onClick={handleCloseModal}/>
          <div className='justify-center flex flex-col items-center'>
            <div className='flex justify-center items-center text-white' onClick={(b) => b.stopPropagation()}>
                  <input type="text" placeholder='Search....' className='text-[1.8rem] absolute py-[.2rem] pr-[24rem] font-extralight bg-transparent outline-none border-b-[1px] caret-white'/>
                  <img src={search} alt="search icon" className='pl-[37rem]'/>
            </div>
          </div>
        </div>
        )}
    </div>
  )
}

export default OrderFooter
