import React from 'react'
import taco from '../../../assets/taco.jpg'

const OrderPage = () => {
  return (
    <div className='w-full relative flex flex-col justify-center items-center'>
        <div>
            <img src={taco} alt="" className='w-full'/>
        </div>
        <div className='bg-[#000000a2] absolute flex flex-col text-white justify-center items-center  py-[1rem] h-full w-full'>
           <h1 className='text-[2.5rem] font-extralight'>Place Your Order</h1>
           <div className='flex justify-between w-[40em] pb-4'>
                <p>1. <span>Your details</span></p>
                <p>2. <span>Payment</span></p>
                <p>3. <span>Finish!</span></p>
           </div>
           <div className='w-[35rem] border-[4px]  rounded relative'>
                <div className=''>
                    <div className='absolute rounded-[2rem] border-[2px] py-[.5rem] px-[.5rem] bg-yellow-400 border-yellow-400 -top-4 -left-1'>
                        <div className='rounded-[2rem] p-[8px] border-red-600 bg-red-600'></div>
                    </div>
                    <div className='absolute rounded-[2rem] border-[2px] py-[1rem] px-[1rem] bg-white border-white middle -top-[16px] left-[17rem]'>
                    </div>
                    <div className='absolute rounded-[2rem] border-[2px] py-[1rem] px-[1rem] bg-white border-white -top-[16px] -right-2'>
                    </div>
                </div>
           </div>
        </div>
        
    </div>
  )
}

export default OrderPage
