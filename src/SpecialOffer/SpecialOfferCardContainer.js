import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'

function SpecialOfferCardContainer() {
  return (
    <div className='md:h-96 w-full bg-green-400 flex p-5 items-center justify-center mt-16 flex-col md:flex-row h-full '>
        <div className='md:w-2/4 w-full flex flex-col items-center'>
            <p className='font-bold text-center sm:text-4xl text-2xl '>SPECIAL DISCOUNT OFFER FOR VEGETABLE ITEMS</p> 
            <p className='text-center text-sm text-gray-700 font-medium mt-5'>
            Reprehenderit sed quod autem molestiae aut modi minus veritatis iste dolorum suscipit quis voluptatum fugiat mollitia quia minim
            </p>
        <div className='flex items-center justify-start mt-12'>
            <div className='sm:w-40 w-20 '>
                <p className=' sm:text-4xl text-xl font-bold text-center text-green-800'>2006</p>
                <p className=' text-white text-sm text-center'>Days</p>
            </div>
            <p className='font-bold text-white font-2xl -mt-4'>:</p>
            <div className='sm:w-40 w-20 '>
                <p className=' sm:text-4xl text-xl font-bold text-center text-green-800'>2006</p>
                <p className=' text-white text-sm text-center'>Days</p>
            </div>
            <p className='font-bold text-white font-2xl -mt-4'>:</p>
            <div className='sm:w-40 w-20 '>
                <p className=' sm:text-4xl text-xl font-bold text-center text-green-800'>2006</p>
                <p className=' text-white text-sm text-center'>Days</p>
            </div>
        </div>
        <div className='w-32 h-10 rounded-md m-5 border-2 border-solid border-green-600 text-sm font-medium text-black hover:text-white hover:bg-green-600 hover:cursor-pointer flex items-center justify-center '>
           <HiOutlineShoppingBag className='mr-2 text-2xl'/>
           Shop Now
       </div>
        </div>
        <div className='h-5/6 w-full md:w-2/6'><img className='h-full w-full object-contain' src='https://mironmahmud.com/greeny/assets/ltr/images/countdown.png' alt='' /></div>
    </div>
  )
}

export default SpecialOfferCardContainer