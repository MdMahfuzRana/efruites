import React from 'react'
import { FaEye } from 'react-icons/fa'
import { GoTag } from 'react-icons/go'
import './style.css'

function ShopBrands() {
  return (
    <div>
        <div className='h-20 w-full flex items-center justify-center text-center font-bold mt-10 text-2xl sm:text-4xl'>
            <p>Shop By Brands</p>
        </div>
        <div className='brandBox h-80 w-full flex items-center '>
            <div className='brandItems h-full flex items-center justify-center'>
                <div className=' h-40 w-40 rounded-full  flex items-center justify-center cursor-pointer'>
                    <img className='h-full w-full object-cover rounded-full' src="https://mironmahmud.com/greeny/assets/ltr/images/brand/02.jpg" alt=""/>
                    <div className='absolute opacity-0 hover:opacity-100 duration-200 cursor-pointer ease-in  h-40 w-40 rounded-full flex items-center justify-center text-center hover:outline-dashed  outline-green-600 text-green-800 font-bold text-4xl'>
                        <GoTag className=''/>
                    </div>
                </div>
            </div>
            <div className='brandItems h-full flex items-center justify-center'>
                <div className=' h-40 w-40 rounded-full  flex items-center justify-center cursor-pointer'>
                    <img className='h-full w-full object-cover rounded-full' src="https://mironmahmud.com/greeny/assets/ltr/images/brand/02.jpg" alt=""/>
                    <div className='absolute opacity-0 hover:opacity-100 duration-200 cursor-pointer ease-in  h-40 w-40 rounded-full flex items-center justify-center text-center hover:outline-dashed  outline-green-600 text-green-800 font-bold text-4xl'>
                        <GoTag className=''/>
                    </div>
                </div>
            </div>
            <div className='brandItems h-full flex items-center justify-center'>
                <div className=' h-40 w-40 rounded-full  flex items-center justify-center cursor-pointer'>
                    <img className='h-full w-full object-cover rounded-full' src="https://mironmahmud.com/greeny/assets/ltr/images/brand/02.jpg" alt=""/>
                    <div className='absolute opacity-0 hover:opacity-100 duration-200 cursor-pointer ease-in  h-40 w-40 rounded-full flex items-center justify-center text-center hover:outline-dashed  outline-green-600 text-green-800 font-bold text-4xl'>
                        <GoTag className=''/>
                    </div>
                </div>
            </div>
            <div className='brandItems h-full flex items-center justify-center'>
                <div className=' h-40 w-40 rounded-full  flex items-center justify-center cursor-pointer'>
                    <img className='h-full w-full object-cover rounded-full' src="https://mironmahmud.com/greeny/assets/ltr/images/brand/02.jpg" alt=""/>
                    <div className='absolute opacity-0 hover:opacity-100 duration-200 cursor-pointer ease-in  h-40 w-40 rounded-full flex items-center justify-center text-center hover:outline-dashed  outline-green-600 text-green-800 font-bold text-4xl'>
                        <GoTag className=''/>
                    </div>
                </div>
            </div>
            <div className='brandItems h-full flex items-center justify-center'>
                <div className=' h-40 w-40 rounded-full  flex items-center justify-center cursor-pointer'>
                    <img className='h-full w-full object-cover rounded-full' src="https://mironmahmud.com/greeny/assets/ltr/images/brand/02.jpg" alt=""/>
                    <div className='absolute opacity-0 hover:opacity-100 duration-200 cursor-pointer ease-in  h-40 w-40 rounded-full flex items-center justify-center text-center hover:outline-dashed  outline-green-600 text-green-800 font-bold text-4xl'>
                        <GoTag className=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopBrands