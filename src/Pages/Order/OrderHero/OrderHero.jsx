import React, { useState } from 'react'
import help from '../../../assets/help.png'
import fajita from '../../../assets/fajita.jpg'
import royal from '../../../assets/royal.jpg'
import chicken from '../../../assets/chicken.jpg'
import cheese from '../../../assets/cheese.jpg'
import chorizo from '../../../assets/chorizo.jpg'
import chocolate from '../../../assets/chocolate.jpg'
import cake from '../../../assets/cake.jpg'
import apple from '../../../assets/apple.jpg'
import roles from '../../../assets/roles.jpg'
import coke from '../../../assets/coke.jpg'
import dietcoke from '../../../assets/diet coke.jpg'
import diet from '../../../assets/diet.jpg'
import fanta from '../../../assets/fanta.jpg'
import enchiladas from '../../../assets/enchiladas.jpg'
import shopping from '../../../assets/shopping.png'
import arrow from '../../../assets/rightarrow.png'
import checked from '../../../assets/checked.png'
import {Link} from 'react-router-dom'

const OrderHero = () => {

  const [selectedOption, setSelectedOption] = useState('delivery');

  // Function to handle option selection
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };


  return (
    <div className='w-full p-[3rem] justify-center items-center flex flex-col bg-gray-100'>
      <div className='flex gap-[4rem]'>

      {/* BACK TO SEARCH SECTION  */}
        <div className='flex flex-col gap-[2rem]'>
            <div className='border w-full rounded-[3px] py-[1rem] px-[1rem] flex flex-col gap-[1rem]  bg-white'>
                <div className='text-[.7rem]'>
                    <h1 className='font-medium text-[.9rem]'>Delivery time</h1>
                    <p>Lorem ipsum dolor sit amet, in pri <br /> partem essent. Qui debitis meliore <br /> ex, tollit debitis conclusionemque te eos.</p>
                    <div className='border-b-[1px] pt-[1.5rem]'></div>
                </div>
                <div className='text-[.7rem] '>
                    <h1 className='font-medium text-[.9rem]'>Secure payment</h1>
                    <p>Lorem ipsum dolor sit amet, in pri <br /> partem essent. Qui debitis meliore <br /> ex, tollit debitis conclusionemque te eos.</p>
                </div>
            </div>

          <div className='border rounded-md py-[2rem] px-[1rem] bg-white flex flex-col justify-center items-center'>
            <img src={help} alt="help icon" />
            <h1>Need Help?</h1>
            <a href="tel: +234 803 066 2127" className='text-lime-600 text-[1.3rem]'>+234 803 066 2127</a>
            <p className='text-[.6rem]'>Monday to Friday 9:00am - 7:30pm </p>
          </div>
        </div>

        {/* YOUR ORDER DETAILS SECTION  */}
          
        <div className=''>
          <div id='starters'>
            <h1 className='border-lime-600 border bg-lime-600 py-[.8rem] font-medium  text-white px-[1rem] pr-[em] rounded-sm'>Your order details</h1>
          </div>


          <div className='border bg-white w-full rounded-b-sm'>
            <form className='p-[1rem] flex flex-col gap-4' action="">

                {/* FIRST NAME  */}

                <div className='flex flex-col gap-[.3rem]'>
                    <label className='text-[.75rem] font-medium ml-1' htmlFor="Name">First name</label>
                    <input className='outline-lime-400 border py-2 rounded-md px-3 pr-[18rem] text-[.7rem] ' type="text" placeholder='First name' />
                </div>

                {/* LAST NAME  */}

                <div className='flex flex-col gap-[.3rem]'>
                    <label className='text-[.75rem] font-medium ml-1' htmlFor="Name">Last name</label>
                    <input className='outline-lime-400 border py-2 rounded-md px-3 pr-[18rem] text-[.7rem] ' type="text" placeholder='Last name' />
                </div>

                {/* TELEPHONE  */}

                <div className='flex flex-col gap-[.3rem]'>
                    <label className='text-[.75rem] font-medium ml-1' htmlFor="Name">Telephone/mobile</label>
                    <input className='outline-lime-400 border py-2 rounded-md px-3 pr-[18rem] text-[.7rem] ' type="text" placeholder='Telephone/mobile' />
                </div>

                {/* EMAIL  */}
                
                <div className='flex flex-col gap-[.3rem]'>
                    <label className='text-[.75rem] font-medium ml-1' htmlFor="Name">Email</label>
                    <input className='outline-lime-400 border py-2 rounded-md px-3 pr-[18rem] text-[.7rem] ' type="text" placeholder='Your email' />
                </div>

                {/* ADDRESS  */}

                <div className='flex flex-col gap-[.3rem]'>
                    <label className='text-[.75rem] font-medium ml-1' htmlFor="Name">Your full address</label>
                    <input className='outline-lime-400 border py-2 rounded-md px-3 pr-[18rem] text-[.7rem] ' type="text" placeholder='Your full address' />
                </div>

                {/* CITY AND POSTAL CODE  */}

                <div className='flex gap-[2rem]'>
                    <div className='flex flex-col gap-[.3rem]'>
                        <label className='text-[.75rem] font-medium ml-1' htmlFor="Name">City</label>
                        <input className='outline-lime-400 border py-2 rounded-md px-3 pr-[4rem] text-[.7rem] ' type="text" placeholder='Your city' />
                    </div>
                    <div className='flex flex-col gap-[.3rem]'>
                        <label className='text-[.75rem] font-medium ml-1' htmlFor="Name">Postal code</label>
                        <input className='outline-lime-400 border py-2 rounded-md px-3 pr-[4rem] text-[.7rem] ' type="text" placeholder='Your postal code' />
                    </div>
                </div>


                {/* DELIVERY DAY AND TIME  */}

                <div className='flex gap-[2rem]'>
                    <div className='flex flex-col gap-[.3rem]'>
                        <label className='text-[.75rem] font-medium ml-1' htmlFor="Name">Delivery day</label>
                        <select className='outline-lime-400 border py-2 rounded-md px-3 pr-[6.5rem] text-[.7rem]'>
                            <option value="Select time">Select day</option>
                            <option value="">Today</option>
                            <option value="">Tomorrow</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-[.3rem]'>
                        <label className='text-[.75rem] font-medium ml-1' htmlFor="Name">Delivery time</label>
                        <select className='outline-lime-400 border py-2 rounded-md px-3 pr-[6rem] text-[.7rem]'>
                            <option value="Select time">Select time</option>
                            <option value="">11:30am</option>
                            <option value="">11:40am</option>
                            <option value="">11:50am</option>
                            <option value="">11:55am</option>
                            <option value="">12:30pm</option>
                            <option value="">12:45pm</option>
                            <option value="">01:10pm</option>
                            <option value="">01:45pm</option>
                            <option value="">07:15pm</option>
                            <option value="">07:55pm</option>
                            <option value="">08:35pm</option>
                        </select>
                    </div>
                </div>

                <div className='py-2'>
                <div className='flex flex-col gap-[.3rem]'>
                    <label className='text-[.75rem] font-medium ml-1' htmlFor="Name">Notes for the restaurant</label>
                    <textarea className='outline-lime-400 bg-transparent border py-2 rounded-md px-3  text-[.7rem] w-full h-20 resize-none' type="text" placeholder='Ex. Allergies, cash change...' />
                </div>
                </div>
            </form>

            
          </div>
        </div>


        {/* YOUR ORDER SECTION  */}
        <div className=''>
          <div className='flex justify-between  items-center border-gray-200 border bg-gray-200 py-2.5 text-[.9rem] px-[1rem] pr-[rem] '>
            <h1 className=''>Your order</h1>
            <div>
              <img src={shopping} alt="" className='w-[1.2rem]'/>
            </div>
          </div>

          
          <div  className='border bg-white p-3'>
            <div>
              <div className='flex p-1.5 items-center justify-between font-medium text-[.7rem]'>
                <div className='flex gap-1 items-center'>
                <div className='text-white border-[1px] hover:border-red-900 py-[.5px] px-[5px] hover:bg-red-900  rounded-[2rem] bg-gray-200'>
                  -
                  </div>
                  <div>
                    <h1>1x <span className='text-gray-600 font-light'>Enchiladas</span></h1>
                  </div>
                </div>
                <p className='text-[.8rem]'>$11</p>
              </div>



              <div className='flex p-1.5 items-center justify-between font-medium text-[.7rem]'>
                <div className='flex gap-1 items-center'>
                <div className='text-white border-[1px] hover:border-red-900 py-[.5px] px-[5px] hover:bg-red-900  rounded-[2rem] bg-gray-200'>
                  -
                  </div>
                  <div>
                    <h1>2x <span className='text-gray-600 font-light'>Buritto</span></h1>
                  </div>
                </div>
                <p className='text-[.8rem]'>$14</p>
              </div>


              <div className='flex p-1.5 items-center justify-between font-medium text-[.7rem]'>
                <div className='flex gap-1 items-center'>
                <div className='text-white border-[1px] hover:border-red-900 py-[.5px] px-[5px] hover:bg-red-900  rounded-[2rem] bg-gray-200'>
                  -
                  </div>
                  <div>
                    <h1>1x <span className='text-gray-600 font-light'>Chicken</span></h1>
                  </div>
                </div>
                <p className='text-[.8rem]'>$20</p>
              </div>



              <div className='flex p-1.5 items-center justify-between font-medium text-[.7rem]'>
                <div className='flex gap-1 items-center'>
                <div className='text-white border-[1px] hover:border-red-900 py-[.5px] px-[5px] hover:bg-red-900  rounded-[2rem] bg-gray-200'>
                  -
                  </div>
                  <div>
                    <h1>2x <span className='text-gray-600 font-light'>Corona Beer</span></h1>
                  </div>
                </div>
                <p className='text-[.8rem]'>$9</p>
              </div>


              <div className='flex p-1.5 items-center justify-between font-medium text-[.7rem]'>
                <div className='flex gap-1 items-center'>
                  <div className='text-white border-[1px] hover:border-red-900 py-[.5px] px-[5px] hover:bg-red-900  rounded-[2rem] bg-gray-200'>
                  -
                  </div>
                  <div>
                    <h1>2x <span className='text-gray-600 font-light'>Cheese Cake</span></h1>
                  </div>
                </div>
                <p className='text-[.8rem]'>$11</p>
              </div>
            </div>
          </div>
          <div className='border bg-white p-3'>
            <div className='flex justify-between px-[1rem] gap-[2rem] text-[.8rem]'>
              <div className='flex items-center gap-2'>
                <div
                  className={`border-[1.5px] border-gray-400 py-[5px] px-[5px] rounded-3xl ${
                    selectedOption === 'delivery' ? 'border-gray-600' : 'hover:border-gray-600'
                  }`}
                  onClick={() => handleOptionChange('delivery')}
                >
                  {/* Icon or Checkmark for Delivery */}
                  {selectedOption === 'delivery' && (
                    <img src={checked} alt="" className='w-[1rem]'/>
                  )}
                </div>
                <h1 className='text-[.7rem] font-medium'>Delivery</h1>
              </div>
              {/* Takeaway Option */}
              <div className='flex items-center gap-2'>
                <div
                  className={`border-[1.5px] border-gray-400 py-[5px] px-[5px] rounded-3xl ${
                    selectedOption === 'takeaway' ? 'border-gray-600' : 'hover:border-gray-600'
                  }`}
                  onClick={() => handleOptionChange('takeaway')}
                >
                  {/* Icon or Checkmark for Takeaway */}
                  {selectedOption === 'takeaway' && (
                    <img src={checked} alt="" className='w-[1rem]'/>
                    
                  )}
                </div>
                <h1 className='text-[.7rem] font-medium'>Takeaway</h1>
              </div>
            </div>
          </div>

          <div className='border bg-white p-5 flex flex-col gap-2'>
              <div className='flex justify-between text-[.7rem] text-gray-500 font-light'>
                <h1>Subtotal</h1>
                <p>$56</p>
              </div>


              <div className='flex justify-between text-[.7rem] text-gray-500 font-light'>
                <h1>Delivery fee</h1>
                <p>$10</p>
              </div>


              <div className='flex justify-between font-semibold text-gray-600'>
                <h1>Total</h1>
                <p>$66</p>
              </div>
          </div>


          <div className='p-3 border rounded-b-md bg-white flex justify-center'>
            <Link to={'/orderPage'}>
              <button className='border border-pink-500 rounded-sm bg-pink-500 text-white p-1.5 px-[5rem] text-[.8rem]'>ORDER NOW</button>
            </Link>
          </div>
        </div>




      </div>
    </div>
  )
}

export default OrderHero

