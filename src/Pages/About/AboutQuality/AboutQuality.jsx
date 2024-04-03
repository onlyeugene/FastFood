import React, { useEffect, useState } from 'react'
import phone from '../../../assets/phone.png'
import cart from '../../../assets/cart.png'
import building from '../../../assets/building.png'
import card from '../../../assets/card.png'
import wallet from '../../../assets/wallet.png'
import documents from '../../../assets/documents.png'

const AboutQuality = () => {
        const [scrolled, setScrolled] = useState(false);
      
        useEffect(() => {
          const handleScroll = () => {
            if (window.scrollY > 0) {
              setScrolled(true);
            } else {
              setScrolled(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
  return (
    <div className='w-full text-center p-[2rem] bg-gray-100'>
        <h1 className='text-[2.1rem] font-extralight'>Quick food quality features</h1>
        <p className='text-[.8rem] text-gray-500 pb-[1.5rem]'>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        <div className={`flex p-[3rem] gap-[2rem] ${scrolled ? 'fade' : ''}`}>
            <div className='flex flex-col gap-[2rem]'>
                <div className='border flex gap-4 py-[2rem] px-[1rem] bg-white'>
                    <div>
                        <img src={building} alt="building icon" className='w-[6rem] border-dashed border-gray-300 border-[1px] rounded-full p-2'/>
                    </div>
                    <div>
                        <span className='text-[#d63d56] font-medium flex gap-2'>+1000<p className='text-gray-800 font-medium'>Restaurants</p></span>
                        <p className='text-[.6rem] font-light text-gray-600 text-start'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                    </div>
                </div>
                <div className='border flex gap-4 py-[2rem] px-[1rem] bg-white'>
                    <div>
                        <img src={cart} alt="building icon" className='w-[6rem] border-dashed border-gray-300 border-[1px] rounded-full p-2'/>
                    </div>
                    <div>
                        <span className='text-[#d63d56] font-medium flex gap-2'>Delivery<p className='text-gray-800 font-medium'>or Takeaway</p></span>
                        <p className='text-[.6rem] font-light text-gray-600 text-start'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                    </div>
                </div>
                <div className='border flex gap-4 py-[2rem] px-[1rem] bg-white'>
                    <div>
                        <img src={wallet} alt="building icon" className='w-[6rem] border-dashed border-gray-300 border-[1px] rounded-full p-2'/>
                    </div>
                    <div>
                        <span className='text-[#d63d56] font-medium flex gap-2'>Cash<p className='text-gray-800 font-medium'>Payment</p></span>
                        <p className='text-[.6rem] font-light text-gray-600 text-start'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[2rem]'>
                <div className='border flex gap-4 py-[2rem] px-[1rem] bg-white'>
                    <div>
                        <img src={documents} alt="building icon" className='w-[6rem] border-dashed border-gray-300 border-[1px] rounded-full p-2'/>
                    </div>
                    <div>
                        <span className='text-[#d63d56] font-medium flex gap-2'>+1000<p className='text-gray-800 font-medium'>Food Menu</p></span>
                        <p className='text-[.6rem] font-light text-gray-600 text-start'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                    </div>
                </div>
                <div className='border flex gap-4 py-[2rem] px-[1rem] bg-white'>
                    <div>
                        <img src={phone} alt="building icon" className='w-[6rem] border-dashed border-gray-300 border-[1px] rounded-full p-2'/>
                    </div>
                    <div>
                        <span className='text-[#d63d56] font-medium flex gap-2'>Mobile<p className='text-gray-800 font-medium'>support</p></span>
                        <p className='text-[.6rem] font-light text-gray-600 text-start'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                    </div>
                </div>
                <div className='border flex gap-4 py-[2rem] px-[1rem] bg-white'>
                    <div>
                        <img src={card} alt="building icon" className='w-[6rem] border-dashed border-gray-300 border-[1px] rounded-full p-2'/>
                    </div>
                    <div>
                        <span className='text-[#d63d56] font-medium flex gap-2'>Secure card<p className='text-gray-800 font-medium'>Payment</p></span>
                        <p className='text-[.6rem] font-light text-gray-600 text-start'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutQuality
