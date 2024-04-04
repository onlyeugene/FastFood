import React from 'react'

const RestaurantContents = () => {
  return (
    <div className='w-full p-[3rem] justify-center items-center flex flex-col bg-gray-100'>
      <div className='flex gap-[4rem]'>

      {/* BACK TO SEARCH SECTION  */}
        <div className='flex flex-col gap-[1rem]'>
          <div>
            <h1 className='border-gray-800 border bg-gray-800 rounded-sm text-white text-[.8rem] py-1.5 px-[3rem]'>BACK TO SEARCH</h1>
          </div>

          
          <div className='border w-[15rem  rounded-sm flex flex-col text-[.8rem]'>
            <div className='bg-gray-200'>
              <h1 className='border-b-[1px] border-gray-300'>Starters 
              <span className='text-[.6rem] text-gray-500'>
                (131)
              </span>
              </h1>
            </div>

            <div>
              <h1 className='border-b-[1px] border-gray-300'>Main Courses
              <span className='text-[.6rem] text-gray-500'>
                (20)
              </span>
              </h1>
            </div>

            <div>
              <h1 className='border-b-[1px] border-gray-300'>Desserts
              <span className='text-[.6rem] text-gray-500'>
                (11)
              </span>
              </h1>
            </div>

            <div>
              <h1 className='border-b-[1px] border-gray-300'>Drinks
              <span className='text-[.6rem] text-gray-500'>
                (20)
              </span>
              </h1>
            </div>
          </div>
        </div>

        {/* MENU SECTION  */}
        <div>
          <h1 className='border-lime-600 border bg-lime-600 py-[.6rem] font-medium  text-white px-[1rem] pr-[30.5rem] rounded-sm'>Menu</h1>
        </div>


        {/* YOUR ORDER SECTION  */}
        <div>
          <h1 className='border-gray-200 border bg-gray-200 py-2.5 text-[.9rem] px-[1rem] pr-[10rem] '>Your order</h1>
        </div>
      </div>
    </div>
  )
}

export default RestaurantContents
