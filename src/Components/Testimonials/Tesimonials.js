import React from 'react'
import { AiFillShop } from 'react-icons/ai'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { GoTag } from 'react-icons/go'

function Tesimonials() {
  return (
    <div className=''>
        <div className='h-20 w-full flex items-center justify-center text-center font-bold mt-10 text-2xl sm:text-4xl'>
            <p>Client's Feedback</p>
        </div>
        <div className='md:h-96 h-full w-full bg-green-500'>
        <div className='h-full w-full flex justify-center items-center'>
            <div className='w-4/6 text-center sm:ml-10 p-2 flex justify-center items-center flex-col'>
                <div className='h-32 w-32 rounded-full bg-green-600 p-1'>
                    <img className='h-full w-full object-cover rounded-full' src="https://mironmahmud.com/greeny/assets/ltr/images/avatar/04.jpg" alt="" />
                </div>
                <p className='text-slate-200 mt-3 flex text-xs font-medium'>Messages sent to these dedicated numbers are delivered to a secure website and responded to by one of the team’s health professionals. Out of hours, anyone who texts the service receives a bounce-back messag</p>
                <div className='text-xl font-bold mt-6'>Designer/Mahmud Hasan</div>
            </div>
        </div>
        <div className='absolute left-0 -mt-48 ml-2 sm:block hidden' >
            <FaArrowLeft  />
        </div>
        <div className='absolute right-0 -mt-48 mr-2 sm:block hidden' >
            <FaArrowRight />
        </div>
    </div>
    </div>
  )
}

export default Tesimonials