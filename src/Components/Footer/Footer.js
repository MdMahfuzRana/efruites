import React from 'react'
import {TiSocialFacebook} from 'react-icons/ti'
import {ImLocation } from 'react-icons/im'
import './style.css'

function Footer() {
  return (
    <div className=' h-full w-full bg-slate-200 p-5 '>
        <div className='gridFooter'>
        <div className='sm:w-56 w-full flex  justify-start flex-col items-start '>
            <div className='h-10 mb-5'>
                <img src="https://mironmahmud.com/greeny/assets/ltr/images/logo.png" alt="logo" className=' object-contain h-full w-full'/>
            </div>
            <p className='text-left text-xs font-bold '>
            Adipisci asperiores ipsum ipsa repellat consequatur repudiandae quisquam assumenda dolor perspiciatis sit ipsum dolor amet.
            </p>
            <div className='flex mt-5'>
                <div className='h-8 w-8 flex mr-1 bg-slate-300 text-green-600 text-xl rounded-full hover:bg-green-600
                hover:text-white ease-in duration-300 cursor-pointer justify-center items-center'><TiSocialFacebook/>
                </div>
                <div className='h-8 w-8 flex mr-1 bg-slate-300 text-green-600 text-xl rounded-full hover:bg-green-600
                hover:text-white ease-in duration-300 cursor-pointer justify-center items-center'><TiSocialFacebook/>
                </div>
                <div className='h-8 w-8 flex mr-1 bg-slate-300 text-green-600 text-xl rounded-full hover:bg-green-600
                hover:text-white ease-in duration-300 cursor-pointer justify-center items-center'><TiSocialFacebook/>
                </div>
            </div>
        </div>
        <div className='sm:w-56 w-full flex  justify-start flex-col items-start '>
            <p className='mb-5 font-bold text-xl '>Contact Us</p>
            <div>
                <div className='flex mb-3 font-medium items-center'><ImLocation className='h-5 w-5 text-green-600' /><p className='text-xs'>1Hd- 50, 010 United States</p></div>
                <div className='flex mb-3 font-medium items-center'><ImLocation className='h-5 w-5 text-green-600' /><p className='text-xs'>1Hd- 50, 010 United States</p></div>
                <div className='flex mb-3 font-medium items-center'><ImLocation className='h-5 w-5 text-green-600' /><p className='text-xs'>1Hd- 50, 010 United States</p></div>
                <div className='flex mb-3 font-medium items-center'><ImLocation className='h-5 w-5 text-green-600' /><p className='text-xs'>1Hd- 50, 010 United States</p></div>
            </div>
        </div>
        <div className='sm:w-56 w-full flex  justify-start flex-col items-start '>
            <p className='mb-5 font-bold text-xl '>Contact Us</p>
            <div>
                <div className='flex mb-3 font-medium items-center'><ImLocation className='h-5 w-5 text-green-600' /><p className='text-xs'>1Hd- 50, 010 United States</p></div>
                <div className='flex mb-3 font-medium items-center'><ImLocation className='h-5 w-5 text-green-600' /><p className='text-xs'>1Hd- 50, 010 United States</p></div>
                <div className='flex mb-3 font-medium items-center'><ImLocation className='h-5 w-5 text-green-600' /><p className='text-xs'>1Hd- 50, 010 United States</p></div>
                <div className='flex mb-3 font-medium items-center'><ImLocation className='h-5 w-5 text-green-600' /><p className='text-xs'>1Hd- 50, 010 United States</p></div>
            </div>
        </div>
        </div>
        <div className='mt-10 w-full flex sm:flex-row flex-col items-center justify-between bg-green-600 p-5 rounded-md font-bold text-white'>
            <p className='sm:mb-0 mb-5' >© All Copyrights Reserved by Mironcoder</p>
            <div className='flex items-center justify-center'>
                <div className='h-10 w-16' ><img className='h-full w-full object-contain' src="https://mironmahmud.com/greeny/assets/ltr/images/payment/jpg/02.jpg" alt="" /></div>
                <div className='h-10 w-16' ><img className='h-full w-full object-contain' src="https://mironmahmud.com/greeny/assets/ltr/images/payment/jpg/04.jpg" alt="" /></div>
                <div className='h-10 w-16' ><img className='h-full w-full object-contain' src="https://mironmahmud.com/greeny/assets/ltr/images/payment/jpg/03.jpg" alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Footer