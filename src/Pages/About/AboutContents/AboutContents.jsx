import React from 'react'
import food from '../../../assets/pancakes.jpg'

const AboutContents = () => {
  return (
    <div className='w-full bg-gray-100 py-[2.5rem] px-[5rem]'>
      <div className='flex gap-[2rem]'>
        <div>
          <div className='gap-2 flex flex-col '>
            <h1 className='font-medium text-[1.3rem]'>Some words about us</h1>
            <p className='text-[.7rem]'>Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot persecuti mel. Libris hendrerit ex sea. Duo legere evertitur an, pri hinc <b>doctus definitiones</b>  an, vix id dicam putent. Ius ornatus instructior in. </p>
            <p className='text-[.7rem] pb-3'>Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot persecuti mel. Libris hendrerit ex sea. Duo legere evertitur an, pri hinc doctus definitiones an, vix id dicam putent. Ius ornatus instructior in.</p>
          </div>
          <div className='gap-2 flex flex-col '>
            <h1 className='font-medium text-[1.1rem]'>  Mission</h1>
            <p className='text-[.7rem]'>Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot persecuti mel. <b>Libris hendrerit</b>  ex sea. Duo legere evertitur an, pri hinc doctus definitiones  an, vix id dicam putent. Ius ornatus instructior in. </p>
            <p className='text-[.7rem] pb-3'>Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot persecuti mel. Libris hendrerit ex sea. Duo legere evertitur an, pri hinc doctus definitiones an, vix id dicam putent. Ius ornatus instructior in.</p>
          </div>
          <div className='gap-2 flex flex-col '>
            <h1 className='font-medium text-[1.1rem]'> Filosofy</h1>
            <p className='text-[.7rem]'>Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot persecuti mel. <b>Libris hendrerit</b> ex sea. Duo legere evertitur an, pri hinc doctus definitiones an, vix id dicam putent. Ius ornatus instructior in. </p>
          </div>
        </div>
        <div>
          <img src={food} alt="" className='w-[100rem] h-[25rem] rounded-md blur-[3px]'/>
        </div>
      </div>
        <div className='border-b-[1px] border-gray-300 w-[69.5rem] mt-[6rem]'></div>
    </div>
  )
}

export default AboutContents
