import React from 'react'
import { FaSearchLocation } from 'react-icons/fa'
import './style.css'

function Addrescard() {
  return (
    <div className=' cardstack h-full w-full mt-28 p-2 sm:p-10 '>
        <div className='h-56 w-full rounded-lg p-5 bg-green-600 text-center flex items-center justify-center flex-col '>
            <div className='h-14 w-14 text-xl rounded-full bg-white text-center flex items-center justify-center'>
                <FaSearchLocation/>
            </div>
            <p className='text-xl font-bold text-slate-800 '>Head Office</p>
            <p className='font-bold text-xs '>1Hd- 50, 010 Avenue, NY 90001 United States</p>
        </div>
        <div className='h-56 w-full rounded-lg p-5 bg-green-600 text-center flex items-center justify-center flex-col '>
            <div className='h-14 w-14 text-xl rounded-full bg-white text-center flex items-center justify-center'>
                <FaSearchLocation/>
            </div>
            <p className='text-xl font-bold text-slate-800 '>Head Office</p>
            <p className='font-bold text-xs '>1Hd- 50, 010 Avenue, NY 90001 United States</p>
        </div>
        <div className='h-56 w-full rounded-lg p-5 bg-green-600 text-center flex items-center justify-center flex-col '>
            <div className='h-14 w-14 text-xl rounded-full bg-white text-center flex items-center justify-center'>
                <FaSearchLocation/>
            </div>
            <p className='text-xl font-bold text-slate-800 '>Head Office</p>
            <p className='font-bold text-xs '>1Hd- 50, 010 Avenue, NY 90001 United States</p>
        </div>
    </div>
  )
}

export default Addrescard