import React, { useEffect, useState } from 'react'
import { AiFillShop } from 'react-icons/ai'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './style.css'

function Slider() {

    const [sliderData, setsliderData] = useState([
        {
            title:'Free Home Dalivery within 24 hours',
            desc:'Messages sent to these dedicated numbers are delivered to a secure website and responded to by one of the team’s health professionals. Out of hours, anyone who texts the service receives a bounce-back messag',
            bgimage:'https://cdn.shopify.com/s/files/1/0583/0564/2689/files/slider-1.jpg?v=1625654971'
        },
        {
            title:'Free Home Dalivery within 24 hours',
            desc:'Messages sent to these dedicated numbers are delivered to a secure website and responded to by one of the team’s health professionals. Out of hours, anyone who texts the service receives a bounce-back messag',
            bgimage:'https://cdn.shopify.com/s/files/1/0583/0564/2689/files/slider-2.jpg?v=1625655001'
        },
        {
            title:'Free Home Dalivery within 24 hours',
            desc:'Messages sent to these dedicated numbers are delivered to a secure website and responded to by one of the team’s health professionals. Out of hours, anyone who texts the service receives a bounce-back messag',
            bgimage:'https://cdn.shopify.com/s/files/1/0621/0273/3051/files/1920-636.jpg?v=1641796187'
        }
    ])
    const [current, setcurrent] = useState(0)
    const [slide, setslide] = useState('')

    useEffect(() => {
      const timeOut = setTimeout(() => {
          setslide('')
      }, 600)
      return () => {
        clearTimeout(timeOut)
      }
    }, [slide])
  return (
    <div className='md:h-96 h-72 w-full'>
        <div className='h-full w-full '>
            <img className={`h-full w-full object-cover ${slide}`} src={sliderData[current].bgimage} alt='' />
            <div className={`slid__info absolute sm:-mt-72 -mt-56 sm:w-96 w-full sm:ml-10 p-2 text-left ${slide}`}>
                <p className=' text-3xl font-bold'>{sliderData[current].title}</p>
                <p className=' mt-3 hidden sm:flex text-xs font-medium from-neutral-400'>{sliderData[current].desc}</p>
                <Link to='/productAll'   >
                <div className='h-10 w-40 p-2 mt-3 rounded-md border-2 duration-300 ease-in border-solid text-lime-800 border-lime-800 hover:bg-lime-800 cursor-pointer hover:text-white flex justify-center items-center text-2xl'>
                    <AiFillShop  />
                    <p className=' text-lg ml-2' >Shop Now</p>
                </div>
                </Link>
            </div>
        </div>
        
        <div className='absolute left-0 -mt-48 ml-2 sm:block hidden' >
            <FaArrowLeft onClick={()=>{
                setslide('slide__left')
                setcurrent(current === 0? sliderData.length-1 : current-1)}} />
        </div>
        <div className='absolute right-0 -mt-48 mr-2 sm:block hidden' >
            <FaArrowRight onClick={()=>{
                setslide('slide__left')
                setcurrent(current===sliderData.length-1? 0:current+1)}}  />
        </div>
    </div>
  )
}

export default Slider