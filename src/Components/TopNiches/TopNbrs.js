import React, { useState } from 'react'
import {BsReceipt } from 'react-icons/bs'
import Card from '../ProductCards/Card'
import '../RecentLySoldITems/style.css'

function TopNbrs() {
  const [recentsoldProducts, setrecentsoldProducts] = useState([
    {
      title:'Fresh Green Chilis',
      price: '$1.99',
      image:'https://mironmahmud.com/greeny/assets/ltr/images/product/06.jpg',
    },
    {
      title:'Fresh Green Chilis',
      price: '$1.99',
      image:'https://mironmahmud.com/greeny/assets/ltr/images/product/07.jpg',
    },
    {
      title:'Fresh Green Chilis',
      price: '$1.99',
      image:'https://mironmahmud.com/greeny/assets/ltr/images/product/09.jpg',
    },
    {
      title:'Fresh Green Chilis',
      price: '$1.99',
      image:'https://mironmahmud.com/greeny/assets/ltr/images/product/10.jpg',
    },
    {
      title:'Fresh Green Chilis',
      price: '$1.99',
      image:'https://mironmahmud.com/greeny/assets/ltr/images/product/05.jpg',
    },
  ])
  return (
    <div className='mt-10 '>
        <div className='flex items-center justify-center text-3xl font-bold p-1'><p>Browse By Top Niche</p></div>
        <div className='w-3/6 flex items-center justify-center m-auto h-14 mt-5'>
            <div className='flex items-center justify-center  hover:text-green-700 text-center p-2 w-32 font-medium cursor-pointer'><BsReceipt className='mr-1'/><p>Top Order</p> </div>
            |
            <div className='flex items-center justify-center  hover:text-green-700 text-center p-2 w-32 font-medium cursor-pointer'><BsReceipt className='mr-1'/><p>Top Order</p> </div>
            |
            <div className='flex items-center justify-center  hover:text-green-700 text-center p-2 w-32 font-medium cursor-pointer'><BsReceipt className='mr-1'/><p>Top Order</p> </div>
        </div>
        <div className='grid__box mt-10'>
        {
          recentsoldProducts.map((product,index)=>{
            return(
              <Card key={index} product={product}/>
            )
          })
        }
       </div>
    </div>
  )
}

export default TopNbrs