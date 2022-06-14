import React, { useEffect, useState } from 'react'
import './styles.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
import Button from '../Buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { increaseQuantity, removeCard } from '../ProductCards/AddtoCardSlice'

function Busket({totalPrice}) {
    const [text, settext] = useState('Healthy Vegetables - Organically Grown, 1Kg')
    const [quantity, setquantity] = useState(1)
    const busket = useSelector(state=>state.busket.items)
    const dispatch = useDispatch()

    useEffect(() => {
        if(text?.length>40){
            settext(text.slice(0,40).trim()+'...')
        }
    }, [text])
    const countIncrease = (product) => {
        if(quantity>10)return;
        setquantity(quantity+1)
        dispatch(increaseQuantity(product))
    }
    const decrease = ( ) => {
        if(quantity<2) return;
        setquantity(quantity-1)
    }

  return (
    <div className='card__box p-2 bg-slate-100 absolute top-0 mt-16 sm:right-5 right-0 z-10 sm:w-80 bg-gray max-h-80 w-full sm:rounded-md'>
 { busket.length>0?
       <>
        <div className='max-h-52 product__box'>
            {
                busket?.map((product,index)=>(
            <div className='flex items-center w-full h-20'>
                <div className= 'product__image h-16 w-16'>
                    <img className='h-full w-full object-cover' src={product.image} alt="" />
                </div>
                <div className='p-2 w-full sm:w-60  '>
                    <div className='cursor-pointer flex items-start justify-between text-fontColor font-medium text-xs'>
                        <p className='pr-1'>{text}</p>
                        <RiDeleteBin6Line onClick={()=>{dispatch(removeCard(product))}} className='h-6 w-6'/>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='h-7 mt-1 flex counterBOx items-center justify-between pl-2 pr-2 cursor-pointer'>
                            <p onClick={()=>{countIncrease(product)}} className=' font-medium text-lg'>+</p>
                            <p>{product?.quantity}</p>
                            <p onClick={decrease} className=' font-medium text-lg'>-</p>
                        </div>
                        <div className=' text-fontColor font-medium'>{product.price}</div>
                    </div>
                </div>
            </div>

                ))
            }   

            </div>
        <div className='p-1'>
            <div className='text-fontColor flex items-center justify-between'>
                <p className='font-medium'>Subtotal</p>
                <p className='font-bold text-lg'>${totalPrice.toFixed(2)}</p>
            </div>
            <div className=' flex  w-full justify-between items-center mt-3'>
                <Button text='View Cart' />
                <Link to="/chackout" >
                    <Button text="Check Out" />
                </Link>
            </div>
        </div>
        </>:<p className='text-xl text-center'>Not Busket's Item</p>
}
    </div>
  )
}

export default Busket