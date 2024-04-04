import React from 'react'
import help from '../../../assets/help.png'
import plus1 from '../../../assets/plus red.png'
import plus2 from '../../../assets/plus black.png'
import enchiladas from '../../../assets/enchiladas.jpg'
import No from '../../../assets/No.png'
import shopping from '../../../assets/shopping.png'
import {Link} from 'react-router-dom'

const RestaurantContents = () => {
  return (
    <div className='w-full p-[3rem] justify-center items-center flex flex-col bg-gray-100'>
      <div className='flex gap-[4rem]'>

      {/* BACK TO SEARCH SECTION  */}
        <div className='flex flex-col gap-[2rem]'>
          <div>
            <h1 className='border-gray-800 border bg-gray-800 rounded-sm text-white text-[.8rem] py-1.5 px-[3rem]'>BACK TO SEARCH</h1>
          </div>

          
          <div className='border w-full rounded-[3px]  pr-[rem] bg-white'>
            <a href="#starters">
              <div className='border-b-[1px] py-[1rem] bg-gray-200 w-full pr-[2rem] pl-[.5rem]'>
                <h1 className='text-[.7rem] font-light'>Starters 
                <span className='text-[.6rem] text-gray-500'>
                  (131)
                </span>
                </h1>
              </div>
            </a>

            <a href="#main">
              <div className='border-b-[1px] py-[1rem] w-full pr-[2rem] pl-[.5rem]'>
                <h1 className='text-[.7rem] font-light'>Main Courses
                <span className='text-[.6rem] text-gray-500'>
                  (20)
                </span>
                </h1>
              </div>
            </a>

            <a href="#dessert">
              <div className='border-b-[1px] py-[1rem] w-full pr-[2rem] pl-[.5rem]'>
                <h1 className='text-[.7rem] font-light'>Desserts
                <span className='text-[.6rem] text-gray-500'>
                  (11)
                </span>
                </h1>
              </div>
            </a>

            <a href="#drinks">
              <div className='py-[1rem] w-full pr-[2rem] pl-[.5rem]'>
                <h1 className='text-[.7rem] font-light'>Drinks
                <span className='text-[.6rem] text-gray-500'>
                  (20)
                </span>
                </h1>
              </div>
            </a>
          </div>

          <div className='border rounded-md py-[2rem] px-[1rem] bg-white flex flex-col justify-center items-center'>
            <img src={help} alt="help icon" />
            <h1>Need Help?</h1>
            <a href="tel: +234 803 066 2127" className='text-lime-600 text-[1.3rem]'>+234 803 066 2127</a>
            <p className='text-[.6rem]'>Monday to Friday 9:00am - 7:30pm </p>
          </div>
        </div>

        {/* MENU SECTION  */}
          
        <div className=''>
          <div id='starters'>
            <h1 className='border-lime-600 border bg-lime-600 py-[.8rem] font-medium  text-white px-[1rem] pr-[25rem] rounded-sm'>Menu</h1>
          </div>


          <div className='border bg-white w-full rounded-b-sm'>
            <div>
              <div className='px-5 py-4 start'>
                <h1>STARTERS</h1>
                <p className='text-[.6rem] pb-4 text-gray-500 '>Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus <br /> reprimique eu pro. Fuisset mentitum deleniti sit ea.</p>
                <div className='border-b-[1px] '></div>
              </div>

              <div  className='py-1 text-[.8rem]'>
                <div className='flex flex-col px-[1.2rem]'>
                  <div className='flex justify-between px-[.5rem] mb-2'>
                    <h1>Item</h1>
                    <div className='flex gap-[2rem] px-[1rem]'>
                      <h2>Price</h2>
                      <p>Order</p>
                    </div>
                  </div>
                  <div className='border-b-[2px]'></div>
                </div>
              </div>

              {/* DELICACIES  */}

              <div>
                <div className=' px-[1.6rem] py-2'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>1. Mexican Enchiladas</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 9,40</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                  <div className='border-b-[1px] p-2'></div>
                </div>
                <div className=' px-[1.6rem] py-2'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>2. Fajitas</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 6,80</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                  <div className='border-b-[1px] p-2'></div>
                </div>
                <div className=' px-[1.6rem] py-2'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>3. Royal Fajitas</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 5,70</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                  <div className='border-b-[1px] p-2'></div>
                </div>
                <div className=' px-[1.6rem] py-2 mb-4'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>4. Chicken Enchilada Wrap</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p id='main' className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 5,20</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN COURSES  */}

            <div className='border-t-[1px] p-2'>
              <div className='px-5 py-4'>
                <h1 className='mb-2'>MAIN COURSES</h1>
                <p className='text-[.6rem] pb-4 text-gray-500 '>Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus <br /> reprimique eu pro. Fuisset mentitum deleniti sit ea.</p>
                <div className='border-b-[1px] '></div>
              </div>

              <div className='py-1 text-[.8rem]'>
              <div className='flex flex-col px-[1.2rem]'>
                <div className='flex justify-between px-[.5rem] mb-2'>
                  <h1>Item</h1>
                  <div className='flex gap-[2rem] px-[1rem]'>
                    <h2>Price</h2>
                    <p>Order</p>
                  </div>
                </div>
                <div className='border-b-[2px]'></div>
              </div>


              <div>
                <div className=' px-[1.6rem] py-2'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>5. Cheeses Quesidilla</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 12,00</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                  <div className='border-b-[1px] p-2'></div>
                </div>
                <div className=' px-[1.6rem] py-2'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>6. Chorizo & Cheese</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p id='dessert' className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 24,71</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                </div>
                </div>
              </div>
            </div>


            {/* DESERTS  */}


            <div className='border-t-[1px] p-2'>
              <div className='px-5 py-4 start'>
                <h1>DESSERTS</h1>
                <p className='text-[.6rem] pb-4 text-gray-500 '>Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus <br /> reprimique eu pro. Fuisset mentitum deleniti sit ea.</p>
                <div className='border-b-[1px] '></div>
              </div>

              <div  className='py-1 text-[.8rem]'>
                <div className='flex flex-col px-[1.2rem]'>
                  <div className='flex justify-between px-[.5rem] mb-2'>
                    <h1>Item</h1>
                    <div className='flex gap-[2rem] px-[1rem]'>
                      <h2>Price</h2>
                      <p>Order</p>
                    </div>
                  </div>
                  <div className='border-b-[2px]'></div>
                </div>
              </div>

              {/* DELICACIES  */}

              <div>
                <div className=' px-[1.6rem] py-2'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>7. Chocolate Fudge Cake</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 24,71</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                  <div className='border-b-[1px] p-2'></div>
                </div>
                <div className=' px-[1.6rem] py-2'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>8. Cheesecake</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 7,50</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                  <div className='border-b-[1px] p-2'></div>
                </div>
                <div className=' px-[1.6rem] py-2'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>9. Apple Pie & Custard</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 9,70</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                  <div className='border-b-[1px] p-2'></div>
                </div>
                <div className=' px-[1.6rem] py-2 mb-4'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>10. Profiteroles</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p id='drinks' className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 12,00</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                </div>
              </div>
            </div>

            {/* DRINKS  */}


            <div className='border-t-[1px] p-2'>
              <div className='px-5 py-4 start'>
                <h1 className='mb-3'>DRINKS</h1>
                <p className='text-[.6rem] pb-4 text-gray-500 '>Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus <br /> reprimique eu pro. Fuisset mentitum deleniti sit ea.</p>
                <div className='border-b-[1px] '></div>
              </div>

              <div  className='py-1 text-[.8rem]'>
                <div className='flex flex-col px-[1.2rem]'>
                  <div className='flex justify-between px-[.5rem] mb-2'>
                    <h1>Item</h1>
                    <div className='flex gap-[2rem] px-[1rem]'>
                      <h2>Price</h2>
                      <p>Order</p>
                    </div>
                  </div>
                  <div className='border-b-[2px]'></div>
                </div>
              </div>

              {/* DELICACIES  */}

              <div>
                <div className=' px-[1.6rem] py-2'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>11. Coke 0.33L</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 5,70</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                  <div className='border-b-[1px] p-2'></div>
                </div>
                <div className=' px-[1.6rem] py-2'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>12. Diet Coke 0.33L</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 2,70</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                  <div className='border-b-[1px] p-2'></div>
                </div>
                <div className=' px-[1.6rem] py-2'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>13. Diet Coke 1L</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 5,70</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                  <div className='border-b-[1px] p-2'></div>
                </div>
                <div className=' px-[1.6rem] py-2 mb-4'>
                  <div className='flex gap-[1rem] items-center'>
                    <img src={enchiladas} alt="meixcan enchiladas" className='w-[3rem] h-[3rem]'/>
                    <div className='text-[.7rem] text-gray-600'>
                      <h1 className='font-medium text-[.8rem] text-black'>14. Fanta Orange 0.33L</h1>
                      <p>Fuisset mentitum deleniti sit ea.</p>
                    </div>
                    <p className='pl-[2.2rem] font-semibold text-gray-600 text-[.7rem]'>&euro; 2,70</p>
                    <img src={plus1} alt="plus icon" className='w-[2.5rem] pl-[1rem]'/>
                  </div>
                </div>
              </div>
            </div>

            
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
                  <div>
                    <img src={No} alt="" className='w-[1rem]'/>
                  </div>
                  <div>
                    <h1>1x <span className='text-gray-600 font-light'>Enchiladas</span></h1>
                  </div>
                </div>
                <p className='text-[.8rem]'>$11</p>
              </div>



              <div className='flex p-1.5 items-center justify-between font-medium text-[.7rem]'>
                <div className='flex gap-1 items-center'>
                  <div>
                    <img src={No} alt="" className='w-[1rem]'/>
                  </div>
                  <div>
                    <h1>2x <span className='text-gray-600 font-light'>Buritto</span></h1>
                  </div>
                </div>
                <p className='text-[.8rem]'>$14</p>
              </div>


              <div className='flex p-1.5 items-center justify-between font-medium text-[.7rem]'>
                <div className='flex gap-1 items-center'>
                  <div>
                    <img src={No} alt="" className='w-[1rem]'/>
                  </div>
                  <div>
                    <h1>1x <span className='text-gray-600 font-light'>Chicken</span></h1>
                  </div>
                </div>
                <p className='text-[.8rem]'>$20</p>
              </div>



              <div className='flex p-1.5 items-center justify-between font-medium text-[.7rem]'>
                <div className='flex gap-1 items-center'>
                  <div>
                    <img src={No} alt="" className='w-[1rem]'/>
                  </div>
                  <div>
                    <h1>2x <span className='text-gray-600 font-light'>Corona Beer</span></h1>
                  </div>
                </div>
                <p className='text-[.8rem]'>$9</p>
              </div>


              <div className='flex p-1.5 items-center justify-between font-medium text-[.7rem]'>
                <div className='flex gap-1 items-center'>
                  <div>
                    <img src={No} alt="" className='w-[1rem]'/>
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
                <div>
                  <img src={No} alt="" className='w-[1rem]'/>
                </div>
                <h1>Delivery</h1>
              </div>
              <div className='flex items-center gap-2'>
                <div>
                  <img src={No} alt="" className='w-[1rem]'/>
                </div>
                <h1>Takeaway</h1>
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
                <h1>Subtotal</h1>
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

export default RestaurantContents
