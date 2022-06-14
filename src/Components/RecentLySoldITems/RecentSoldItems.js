import React, { useState } from 'react'
import Card from '../ProductCards/Card'
import './style.css'
import {FaEye} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function RecentSoldItems() {
  const [recentsoldProducts, setrecentsoldProducts] = useState([
    {
      title:'Fresh Green Chilis',
      price: 1.99,
      image:'https://mironmahmud.com/greeny/assets/ltr/images/product/06.jpg',
    },
    {
      title:'Fresh Green Chilis',
      price: 1.99,
      image:'https://mironmahmud.com/greeny/assets/ltr/images/product/07.jpg',
    },
    {
      title:'Fresh Green Chilis',
      price: 1.99,
      image:'https://mironmahmud.com/greeny/assets/ltr/images/product/09.jpg',
    },
    {
      title:'Fresh Green Chilis',
      price: 1.99,
      image:'https://mironmahmud.com/greeny/assets/ltr/images/product/10.jpg',
    },
    {
      title:'Fresh Green Chilis',
      price: 1.99,
      image:'https://mironmahmud.com/greeny/assets/ltr/images/product/05.jpg',
    },
  ])
  return (
    <div className='flex items-center justify-center flex-col mt-5'>
       <div className=' font-bold text-3xl h-20 flex items-center justify-center text-center mb-10'> <p>Recently Sold Items</p></div>
       <div className='grid__box'>
        {
          recentsoldProducts.map((product,index)=>{
            return(
              <Card key={index} product={product}/>
            )
          })
        }
       </div>
        <Link to='/productAll'   >
              <div className='w-32 h-10 rounded-md m-5 border-2 border-solid border-green-600 text-sm font-medium text-black hover:text-white hover:bg-green-600 hover:cursor-pointer flex items-center justify-center '>
                <FaEye className='mr-2 text-2xl'/>
                Show More
            </div>
        </Link>
    </div>
  )
}

export default RecentSoldItems