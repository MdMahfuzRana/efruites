import React from 'react'
import {BsFillHeartFill, BsFillStarFill} from 'react-icons/bs'
import {RiShoppingBasket2Fill} from 'react-icons/ri'
import {FiEye} from 'react-icons/fi'
import {GoGitCompare} from 'react-icons/go'

function Card() {
  return (
    <div className='h-96  bg-white sm:max-w-xs rounded-lg '>
        <div className='h-10 pt-5 pr-9 flex items-center justify-between'>
            <div></div>
            <div className='flex items-center'>
            <BsFillHeartFill className=' text-xl mr-3 text-gray-400 hover:text-green-600 ease-in duration-300  cursor-pointer' />
            <GoGitCompare className=' text-xl mr-3 text-gray-400 hover:text-green-600 ease-in duration-300  cursor-pointer' />
            <FiEye className=' text-2xl text-gray-400 hover:text-green-600 ease-in duration-300  cursor-pointer' />
            </div>
        </div>
        <div className='w-full h-40 flex justify-center items-start'>
            <img className='w-full h-full object-contain' src="https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg" alt=""/>
        </div>
        <div className='border border-solid border-stone-200'></div>
        <div className='flex p-1 items-center justify-center text-sm text-slate-400 mt-2'>
            <BsFillStarFill className=' text-amber-400 mr-1' />
            <BsFillStarFill className=' text-amber-400 mr-1' />
            <BsFillStarFill className=' text-amber-400 mr-1' />
            <BsFillStarFill className=' text-amber-400 mr-1' />
            <BsFillStarFill className=' text-amber-400 mr-1' />
            <p>(242)</p>
        </div>
        <p className=' text-lg font-bold p-1 text-center'>Fresh Green Chilis</p>
        <p className=' text-lg font-bold text-lime-900 text-center'>$23/piece</p>
        <div className='h-10 w-36 m-auto mt-2 mb-2 hover:bg-lime-700 hover:text-white cursor-pointer ease-in duration-300 rounded-lg p-2 bg-gray-200 text-neutral-600 font-bold flex items-center'>
            <RiShoppingBasket2Fill className=' text-2xl mr-2' />
            Add to Cart
        </div>
    </div>
  )
}

export default Card