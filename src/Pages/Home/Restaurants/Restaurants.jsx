import React from 'react'
import mexican from '../../../assets/mexican.jpeg'
import NaplesPizza from '../../../assets/Naples Pizza.jpeg'
import Japan from '../../../assets/Japan Food.jpeg'
import Sushi from '../../../assets/Sushi.jpeg'
import Dragon from '../../../assets/Dragon.jpeg'
import China from '../../../assets/China.jpeg'
import check from '../../../assets/check.png'

const Restaurants = () => {
  return (
    <div className='w-full text-center flex flex-col justify-center items-center py-[2rem] pb-[5rem]'>
      <div className='p-[2.5rem]'>
        <h1 className='font-extralight text-[2rem]'>Choose from Most Popular</h1>
        <p className='text-[.8rem] text-gray-600 '>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
      </div>
      <div className='flex gap-[2rem]'>
        <div className='flex flex-col gap-5'>
            <div className='card w-[32rem]'>
                <div className='flex'>
                    <img src={mexican} alt="" className='p-1 ml-[3em] m-3 border w-[6rem]'/>
                    <div className='p-3'>
                        <h1 className='text-start text-[1.2rem]'>Taco Mexican</h1>
                        <p className='text-start italic text-[.65rem] text-gray-500 mb-3'>Mexican / American</p>
                        <p className='text-[.65rem]'>135 Newtownards Road, Belfast BT4. <span className='text-red-600'>Opens at 17:00</span></p>
                        <div className='flex items-center gap-2'>
                            <p className='text-[.7rem]'>Take away</p>
                            <div>
                                <img src={check} alt="" className='w-[.8rem]'/>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <p className='text-[.7rem]'>Delivery</p>
                                <div>
                                    <img src={check} alt="" className='w-[.8rem]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='ribbon-1'>
                </span>
            </div>
            <div className='card w-[32rem]'>
                <div className='flex'>
                    <img src={NaplesPizza} alt="" className='p-1 m-3 border w-[6rem] ml-[3em]'/>
                    <div className='p-3'>
                        <h1 className='text-start text-[1.2rem]'>Naples Pizza</h1>
                        <p className='text-start italic text-[.65rem] text-gray-500 mb-3'>Italian / Pizza</p>
                        <p className='text-[.65rem]'>135 Newtownards Road, Belfast BT4. <span className='text-red-600'>Opens at 17:00</span></p>
                        <div className='flex items-center gap-2'>
                            <p className='text-[.7rem]'>Take away</p>
                            <div>
                                <img src={check} alt="" className='w-[.8rem]'/>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <p className='text-[.7rem]'>Delivery</p>
                                <div>
                                    <img src={check} alt="" className='w-[.8rem]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='ribbon-1'>
                </span>
            </div>
            <div className='card w-[32rem]'>
                <div className='flex'>
                    <img src={Japan} alt="" className='p-1 m-3 border w-[6rem] ml-[3em]'/>
                    <div className='p-3'>
                        <h1 className='text-start text-[1.2rem]'>Japan Food</h1>
                        <p className='text-start italic text-[.65rem] text-gray-500 mb-3'>Sushi / Japanese</p>
                        <p className='text-[.65rem]'>135 Newtownards Road, Belfast BT4. <span className='text-red-600'>Opens at 17:00</span></p>
                        <div className='flex items-center gap-2'>
                            <p className='text-[.7rem]'>Take away</p>
                            <div>
                                <img src={check} alt="" className='w-[.8rem]'/>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <p className='text-[.7rem]'>Delivery</p>
                                <div>
                                    <img src={check} alt="" className='w-[.8rem]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='ribbon-1'>
                </span>
            </div>
        </div>


        {/* SECOND ROW OF CARDS */}

        <div className='flex flex-col gap-5'>
            <div className='card w-[32rem]'>
                <div className='flex'>
                    <img src={Sushi} alt="" className='p-1 m-3 border w-[6rem] ml-[3em]'/>
                    <div className='p-3'>
                        <h1 className='text-start text-[1.2rem]'>Sushi Gold</h1>
                        <p className='text-start italic text-[.65rem] text-gray-500 mb-3'>Sushi / Japanese</p>
                        <p className='text-[.65rem]'>135 Newtownards Road, Belfast BT4. <span className='text-red-600'>Opens at 17:00</span></p>
                        <div className='flex items-center gap-2'>
                            <p className='text-[.7rem]'>Take away</p>
                            <div>
                                <img src={check} alt="" className='w-[.8rem]'/>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <p className='text-[.7rem]'>Delivery</p>
                                <div>
                                    <img src={check} alt="" className='w-[.8rem]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='ribbon-1'>
                </span>
            </div>
            <div className='card w-[32rem]'>
                <div className='flex'>
                    <img src={Dragon} alt="" className='p-1 m-3 border w-[6rem] ml-[3em]'/>
                    <div className='p-3'>
                        <h1 className='text-start text-[1.2rem]'>Dragon Tower</h1>
                        <p className='text-start italic text-[.65rem] text-gray-500 mb-3'>Chinese / Thai</p>
                        <p className='text-[.65rem]'>135 Newtownards Road, Belfast BT4. <span className='text-red-600'>Opens at 17:00</span></p>
                        <div className='flex items-center gap-2'>
                            <p className='text-[.7rem]'>Take away</p>
                            <div>
                                <img src={check} alt="" className='w-[.8rem]'/>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <p className='text-[.7rem]'>Delivery</p>
                                <div>
                                    <img src={check} alt="" className='w-[.8rem]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='ribbon-1'>
                </span>
            </div>
            <div className='card w-[32rem]'>
                <div className='flex'>
                    <img src={China} alt="" className='p-1 m-3 border w-[6rem] ml-[3em]'/>
                    <div className='p-3'>
                        <h1 className='text-start text-[1.2rem]'>China Food</h1>
                        <p className='text-start italic text-[.65rem] text-gray-500 mb-3'>Chinese / Vietnam</p>
                        <p className='text-[.65rem]'>135 Newtownards Road, Belfast BT4. <span className='text-red-600'>Opens at 17:00</span></p>
                        <div className='flex items-center gap-2'>
                            <p className='text-[.7rem]'>Take away</p>
                            <div>
                                <img src={check} alt="" className='w-[.8rem]'/>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <p className='text-[.7rem]'>Delivery</p>
                                <div>
                                    <img src={check} alt="" className='w-[.8rem]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='ribbon-1'>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurants
