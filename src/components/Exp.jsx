import React from 'react'
import Article from './Article'
export default function Exp() {
  return (
    <div className=' light-pink min-h-[40rem] xl:min-h-[45rem]'>
      <div className=''>
        <h1 className='text-3xl lg:text-5xl font-bold  py-2 text-white font-poppins text-center'><span className=''>Experiences</span></h1>
        <div className=" flex py-0.5 md:p-3 lg:px-1 lg:py-2">
          <Article />
        </div>
      </div>
    </div>
  )
}
