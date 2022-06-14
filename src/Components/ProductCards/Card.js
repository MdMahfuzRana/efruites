import React, { useEffect, useState } from 'react'
import {BsFillHeartFill, BsFillStarFill} from 'react-icons/bs'
import {RiShoppingBasket2Fill} from 'react-icons/ri'
import {FiEye} from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'
import { previewprcts } from '../../PreviewSlice'
import { remove, storHeart } from '../Pages/wishList/HeartSlice'
import { addto } from './AddtoCardSlice'

function Card({product}) {     
    const [clcked, setclcked] = useState(false)
    const dispatch = useDispatch()
    const wishLists = useSelector(state => {return (state.heart.items)})

    // useEffect(() => {
    // wishLists?.forEach(element => {
    //     if(element.name === product.name){
    //         setclcked(true)
    //     }
    // });
    // }, [wishLists])
    
    
  return (
    <div className='h-96  bg-white sm:max-w-xs rounded-lg '>
        <div className='h-10 pt-5 pr-9 flex items-center justify-between'>
            <div></div>
            <div className='flex items-center'>
            {
            clcked?
            <BsFillHeartFill onClick={()=>{
                setclcked(false)
                dispatch(remove(product))}} className=' text-xl mr-3 text-green-600 ease-in duration-300  cursor-pointer' />:
            <BsFillHeartFill onClick={()=>{
             setclcked(true)
             dispatch(storHeart(product))}} className=' text-xl mr-3 text-gray-400 hover:text-green-600 ease-in duration-300  cursor-pointer' />}
            <FiEye onClick={()=>{dispatch(previewprcts(product))}} className=' text-2xl text-gray-400 hover:text-green-600 ease-in duration-300  cursor-pointer' />
            </div>
        </div>
        <div className='w-full h-40 flex justify-center items-start'>
            <img className='w-full h-full object-contain' src={product?.image} alt=""/>
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
        <p className=' text-lg font-bold p-1 text-center'>{product?.title}</p>
        <p className=' text-lg font-bold text-lime-900 text-center'>{product?.price}/piece</p>
        <div onClick={()=>{dispatch(addto({...product,quantity:1}))}} className='h-10 w-36 m-auto mt-2 mb-2 hover:bg-lime-700 hover:text-white cursor-pointer ease-in duration-300 rounded-lg p-2 bg-gray-200 text-neutral-600 font-bold flex items-center'>
            <RiShoppingBasket2Fill className=' text-2xl mr-2' />
            Add to Cart
        </div>
    </div>
  )
}

export default Card