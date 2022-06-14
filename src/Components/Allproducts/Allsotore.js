import React, { useEffect, useState } from 'react'
import { BiRotateRight } from 'react-icons/bi'
import { socket } from '../../socket/Socket'
import Card from '../ProductCards/Card'
import './style.css'

function Allsotore() {
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
      const [currentPage, setcurrentPage] = useState(1)
      const [totalPage, settotalPage] = useState(null)

      useEffect(() => {
        socket.emit('page',currentPage)
        socket.on('result',(data)=>{
          setrecentsoldProducts(data)
        })
        socket.on('totalPage',data=>{
          settotalPage(data)
        })
      }, [currentPage])

      const loadMore = (page) => {
        setcurrentPage(page+1)
      }
      

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
                {
                  recentsoldProducts.map((product,index)=>(
                      <Card product={product} />
                  ))
                }
            </div>
            <div className="text-center flex items-center justify-center mt-5">
                {
                  totalPage?.map(page=>(
                    <div onClick={()=>{loadMore(page)}} className={`h-8 mr-2 rounded-md hover:bg-black cursor-pointer text-white flex items-center justify-center w-10 ${currentPage===page+1? 'bg-green-600':'bg-gray-400'} `}>{page+1}</div>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default Allsotore