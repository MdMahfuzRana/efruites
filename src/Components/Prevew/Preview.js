import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import {ImCancelCircle} from 'react-icons/im'
import { RiShoppingBasket2Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { previewprcts } from '../../PreviewSlice'
import { addto } from '../ProductCards/AddtoCardSlice'

function Preview({product}) {
    const dispatch = useDispatch()    
  return (
    <div className='h-96  sm:w-96 w-full z-10 fixed top-1/4 left-0 md:ml-24  sm:left-1/4 right-0 bottom-0 bg-white  rounded-xl '>
        <div onClick={()=>{dispatch(previewprcts(null))}} className='flex justify-end items-center mr-5 mt-5 text-xl hover:text-rose-600 ease-in duration-300 cursor-pointer'>
            <ImCancelCircle/>
        </div>
        <div className='w-full h-40'>
            <img className='h-full w-full object-contain' src={product?.image} alt="" />
        </div>
        <div className='flex p-1 items-center justify-center text-sm text-slate-400 mt-2'>
            <BsFillStarFill className=' text-amber-400 mr-1' />
            <BsFillStarFill className=' text-amber-400 mr-1' />
            <BsFillStarFill className=' text-amber-400 mr-1' />
            <BsFillStarFill className=' text-amber-400 mr-1' />
            <BsFillStarFill className=' text-amber-400 mr-1' />
            <p>(242)</p>
        </div>
        <p className=' text-lg font-bold p-1 text-center'>{product?.title}</p>
        <p className=' text-lg font-bold text-lime-900 text-center'>{product?.price}/piece</p>
        <div className=' flex justify-between items-center '>
        <div onClick={()=>{
                dispatch(addto(product))}}  className='h-10 w-36 m-auto mt-2 mb-2 hover:bg-lime-700 hover:text-white cursor-pointer ease-in duration-300 rounded-lg p-2 bg-gray-200 text-neutral-600 font-bold flex items-center'>
            <RiShoppingBasket2Fill className=' text-2xl mr-2' />
            Add to Cart
        </div>
        <Link to="/chackout" >
        <div className='h-10 w-36 m-auto mt-2 mb-2 hover:bg-lime-700 hover:text-white cursor-pointer ease-in duration-300 rounded-lg p-2 bg-gray-200 text-neutral-600 font-bold flex items-center'>
            <FaShoppingCart className=' text-2xl mr-2' />
            Shop Now
        </div>
        </Link>
        </div>
    </div>
  )
}

export default Preview