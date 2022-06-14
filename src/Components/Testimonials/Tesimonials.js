import React, { useEffect, useState } from 'react'
import { AiFillShop } from 'react-icons/ai'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { GoTag } from 'react-icons/go'
import './style.css'

function Tesimonials() {

    const [sliderData, setsliderData] = useState([
        {
            name:'John Doe',
            proffession:'graphics designer',
            desc:'Messages sent to these dedicated numbers are delivered to a secure website and responded to by one of the team’s health professionals. Out of hours, anyone who texts the service receives a bounce-back messag',
            pimage:'https://mironmahmud.com/greeny/assets/ltr/images/avatar/04.jpg'
        },
        {
            name:'John Doe',
            proffession:'graphics designer',
            desc:'Messages sent to these dedicated numbers are delivered to a secure website and responded to by one of the team’s health professionals. Out of hours, anyone who texts the service receives a bounce-back messag',
            pimage:'https://cdn.shopify.com/s/files/1/0583/0564/2689/files/testi1_100x100.png?v=1625654637'
        },
        {
            name:'nowew',
            proffession:'graphics designer',
            desc:'Messages sent to these dedicated numbers are delivered to a secure website and responded to by one of the team’s health professionals. Out of hours, anyone who texts the service receives a bounce-back messag',
            pimage:'https://cdn.shopify.com/s/files/1/0583/0564/2689/files/testi2_100x100.png?v=1625654653'
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
    <div className=''>
        <div className='h-20 w-full flex items-center justify-center text-center font-bold mt-10 text-2xl sm:text-4xl'>
            <p>Client's Feedback</p>
        </div>
        <div className='md:h-96 h-full w-full bg-green-500'>
        <div className={`h-full w-full flex justify-center items-center ${slide} `}>
            <div className='w-4/6 text-center sm:ml-10 p-2 flex justify-center items-center flex-col'>
                <div className='h-32 w-32 rounded-full bg-green-600 p-1'>
                    <img className='h-full w-full object-cover rounded-full' src={sliderData[current].pimage} alt="" />
                </div>
                <p className='text-slate-200 mt-3 flex text-xs font-medium'>{sliderData[current].desc}</p>
                <div className='text-xl font-bold mt-6'>{sliderData[current].proffession}/{sliderData[current].name}</div>
            </div>
        </div>
        <div className='absolute left-0 -mt-48 ml-2 sm:block hidden' >
            <FaArrowLeft onClick={()=>{
                setslide('slide__left')
                setcurrent(current === 0? sliderData.length-1 : current-1)}}  />
        </div>
        <div className='absolute right-0 -mt-48 mr-2 sm:block hidden' >
            <FaArrowRight onClick={()=>{
                setslide('slide__left')
                setcurrent(current===sliderData.length-1? 0:current+1)}} />
        </div>
    </div>
    </div>
  )
}

export default Tesimonials