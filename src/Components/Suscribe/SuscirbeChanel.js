import React from 'react'

function SuscirbeChanel() {
  return (
    <div className="p-2 h-44 mt-20 w-full bg-[url('https://mironmahmud.com/greeny/assets/ltr/images/newsletter.jpg')]">
        <div className='h-full w-full flex sm:flex-row flex-col  items-center justify-center'>
            <div className='z-10 sm:w-2/4 w-full h-full flex items-center justify-center text-left flex-col'>
                <p className=' font-medium text-3xl text-white '>Get 20% Discount For Subscriber</p>
                <p className=' text-white'>Lorem ipsum dolor consectetur adipisicing accusantium</p>
            </div>
            <div className=' z-10 w-full sm:w-96 h-14 rounded-lg flex items-center justify-between bg-white'>
                <input type='text' placeholder='Enter Your Email' className='sm:w-full rounded-md h-10 p-2 outline-none'/>
                <div className='flex items-center sm:mr-4 mr-2 p-1 justify-center sm:text-sm text-xs font-medium h-9 w-40 bg-green-600 text-white rounded-md'>
                    Subscribe Now      
                </div>
            </div>
        </div>
        <div className='absolute bg-green-600 opacity-30 -mt-40 left-0 h-40 w-full'>

        </div>
    </div>
  )
}

export default SuscirbeChanel