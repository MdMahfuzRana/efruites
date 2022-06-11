import React from 'react'
import Card from '../ProductCards/Card'
import './style.css'
import {FaEye} from 'react-icons/fa'

function RecentSoldItems() {
  return (
    <div className='flex items-center justify-center flex-col mt-5'>
       <div className=' font-bold text-3xl h-20 flex items-center justify-center text-center mb-10'> <p>Recently Sold Items</p></div>
       <div className='grid__box'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
       </div>
       <div className='w-32 h-10 rounded-md m-5 border-2 border-solid border-green-600 text-sm font-medium text-black hover:text-white hover:bg-green-600 hover:cursor-pointer flex items-center justify-center '>
           <FaEye className='mr-2 text-2xl'/>
           Show More
       </div>
    </div>
  )
}

export default RecentSoldItems