import React from 'react'
import { BiRotateRight } from 'react-icons/bi'
import Card from '../ProductCards/Card'
import './style.css'

function Allsotore() {
  return (
    <div className='p-4 flex '>
        <div className='filer__container hidden sm:flex flex-col w-56 p-3'> 
        <div className="w-full ">
            <h6 className=" font-medium  ">Filter by Price</h6>
            <div className='w-full'>
                <div className="flex">
                    <input className='outline-green-600 w-2/4 p-1 m-1' type="number" placeholder="Min - 0" />
                    <input className='outline-green-600 w-2/4 p-1 m-1' type="number" placeholder="Max - 5k" />
                </div>
            </div>
        </div>
        <div className="w-full mt-5">
            <h6 className=" font-medium  ">Filter by Catoghory</h6>
            <div className='w-full'>
                <div className="flex font-bold justify-between items-center hover:border-b border-solid  border-green-600 p-1 cursor-pointer text-xs">
                   <p>apple</p>
                   <BiRotateRight/>
                </div>
            </div>
        </div>
        </div>
        <div className='w-full p-3'>
            <div className='flex items-center justify-center font-medium text-bold p-3 rounded-lg text-white bg-green-600'><p>Top 10 Products</p></div>
            <div className='gird_container mt-5 2xl:w-3/6 m-auto gap-5  '>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="text-center mt-5">
                <button className="h-10 w-40 text-white font-medium rounded-md hover:bg-gray-300 duration-300 ease-in cursor-pointer bg-green-600  ">Load more items </button>
            </div>
        </div>
    </div>
  )
}

export default Allsotore