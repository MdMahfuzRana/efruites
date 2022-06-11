import React from 'react'

function Adrress() {
  return (
    <div className=' h-full w-full  md:flex'>
        <div className='h-96 w-full md:w-2/4 md:m-2 md:mb-0 mb-3 p-3 bg-gray-300 rounded-xl'>

        </div>
        <div className='h-96 w-full  md:w-2/4 md:m-2 md:mb-0 mb-3 p-3 bg-gray-300 rounded-xl'>
            <p className='sm:p-2  sm:mb-4 mb-8  font-bold text-center text-3xl text-slate-800'>Drop Your Thoughts</p>
            <div className=' rounded-md h-10 w-full bg-white'><input className='p-2 rounded-md h-full w-full outline-none ' type="text" placeholder="Your Name here..." /></div>
            <div className=' rounded-md mt-4 h-10 w-full bg-white'><input className='p-2 rounded-md h-full w-full outline-none ' type="email" placeholder="Your email here..." /></div>
            <div className='max-h-40 rounded-md mt-4 w-full bg-white'><textarea className='p-2 max-h-40 rounded-md h-full w-full outline-none ' type="email" placeholder="Your thougts here..." /></div>
        </div>
    </div>
  )
}

export default Adrress