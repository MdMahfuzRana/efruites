import React from 'react'
import { FaBabyCarriage } from 'react-icons/fa'

function Conditons() {
  return (
    <div className=' flex p-2 h-36 sm:w-80 w-full items-center justify-center bg-gray-300 rounded-md'>
        <div className='flex items-center justify-center'>
            <div className='h-14 w-14 hover:bg-green-600 hover:text-white cursor-pointer ease-in duration-300 rounded-full flex items-center justify-center text-4xl bg-gray-200'><FaBabyCarriage/></div>
        </div>
        <div className='flex items-start ml-1 p-1 justify-center flex-col' >
            <p className='font-medium text-xl'>Free Home Delivery</p>
            <p className=' text-xs font-medium '>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
        </div>
    </div>
  )
}

export default Conditons