import React from 'react'
import visa from '../../assets/visa.png'
import mastercard from '../../assets/mastercard.svg'
import discovercard from '../../assets/discover.svg'
import amexcard from '../../assets/amexcard.svg'

const Footer = () => {
  return (
    <div className='bg-white w-full '>
        <div className='flex justify-between py-[2rem] px-[6rem]'>
        <div>
            <h1 className='text-[15px]'>Secure payments with</h1>
            <div className='flex gap-2'>
                <img src={visa} alt="visa card" className='w-[2rem]' />
                <img src={mastercard} alt="mastercard" className='w-[2rem]' />
                <img src={discovercard} alt="discovercard" className='w-[2rem]' />
                <img src={amexcard} alt="amexcard" className='w-[2rem] h-[1.75rem]' />
                
            </div>
        </div>

            <div className='text-[12px] text-gray-500'>
                <h1 className='text-[15px] text-black mb-3'>About</h1>
                <h1>About us</h1>
                <h1>Faq</h1>
                <h1>Contacts</h1>
                <h1>Login</h1>
                <h1>Register</h1>
                <h1>Terms and conditions</h1>
            </div>
            <div >
                <h1 className='text-[15px]'>Newsletter</h1>
                <h1 className='text-gray-500 text-[12px] mb-3'>Join our newsletter to keep be informed <br /> about offers and news</h1>
                <input className='border py-[.4rem] outline-none font-normal text-gray-500 px-[.5rem] pr-[11rem] rounded-md text-[12px] mb-3' type="text" placeholder='Your mail' />
                <div>
                    <button className='border mb-3 rounded-md text-white bg-gray-600 text-[12px] py-[.3rem] px-[1rem] '>Subscribe</button>
                </div>
            </div>
            <div>
                <h1 className='text-[15px] mb-4'>Settings</h1>
                <select name="" id="" className='border py-[.2rem] px-[.5rem] pr-[3rem] text-sm mb-4 rounded-md bg-gray-300'>
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Russian">Russian</option>
                </select>
                <div>
                <select name="" id="" className='border py-[.2rem] px-[.5rem] pr-[4.6rem] rounded-md text-sm bg-gray-300'>
                    <option value="USD">USD</option>
                    <option value="NGN">NGN</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
