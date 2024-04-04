import React from 'react'
import taco from '../../../assets/taco.jpg';
import mexican from '../../../assets/mexican.jpeg'

const RestaurantHero = () => {
  return (
    <div className='w-full relative flex flex-col justify-center items-center'>
        <div>
            <img src={taco} alt="" className=''/>
        </div>
        <div className='bg-[#000000a2] absolute flex flex-col text-white justify-center items-center  py-[1rem] h-full w-full'>
            <img src={mexican} alt="mexican taco logo" className='border-white border-[4px]'/>
            <h1 className='text-[2.3rem]  font-extralight'>Mexican TacoMex</h1>
            <p className='italic font-light text-[.8rem]'>Mexican / American</p>
            <div className='text-[.9rem] font-light'>
                <div>
                    <img src="" alt="" />
                </div>
                <p>135 Newtownards Road, Belfast, BT4 1AB - <b>Delivery charge</b>: $10, free over $15.</p>
            </div>
        </div>
        
    </div>
  )
}

export default RestaurantHero