import React from 'react'
import Article from './Article'
import Prism from './prism'
import Cup from './Cup'
export default function Exp() {
  return (
    <div id='Experience' className='relative light-pink lg:min-h-[27rem] xl:min-h-[3rem]'>
      <div className='pt-5 sm:pt-0'>
        <h1 className='text-3xl lg:text-5xl font-bold py-2.5 text-white font-poppins text-center'>
          <span>Experiences</span>
        </h1>
        <div className=" md:p-3 lg:p-3 lg:px-3">
          <Article />
        </div>

    <div className='hidden md:flex lg:hidden absolute bottom-30 right-27'>
      <Cup />
    </div>

        <div className="flex flex-row justify-center md:hidden lg:flex items-center pl-5 py-3 lg:gap-32">
            <Cup/>
            <Prism />
</div>

        <h1 className='font-poppins italic text-pink-500 text-center p-1 text-sm md:text-lg'>
          Achievements are in under development
        </h1>
      </div>
    </div>
  )
}