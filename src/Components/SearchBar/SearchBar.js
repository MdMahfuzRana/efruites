import React, { useEffect, useState } from 'react'
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'  // https://react-icons.netlify.com/#/icons/all
import {BsArrowRightShort} from 'react-icons/bs'
import {BiLoaderCircle} from 'react-icons/bi'
import { socket } from '../../socket/Socket'
import { Link } from 'react-router-dom'

function SearchBar() {
  
  const [text, settext] = useState(null)
  const [results, setresults] = useState([
      {
          loading:true
      }
  ])

  console.log(results)

  useEffect(() => {
    if(text){
        socket.emit('search', text)
        socket.on('result',(res)=>{
            setresults(res)
        })
        socket.on('error',(err)=>{
            console.log(err)
        })
    }
  }, [text])
  
  return (
    <>
     <input onChange={(e)=>{settext(e.target.value)}} className='h-full w-full pl-3 bg-gray-200 rounded-md outline-none' placeholder='Search anything...' type='text' />
     <AiOutlineSearch className='text-2xl cursor-pointer text-lime-700 hover:text-lime-900 '/>
     <div className='mt-52 z-10 w-full sm:w-96 right-0 lg:right-1/3 absolute  h-fit bg-gray-200'>
     {text? 
        <div className='min-h-20 rounded max-w-3xl w-96 absolute bg-white -mt-20 m-auto p-2 bg-gray'>
        <div className='flex justify-between text-sm p-1 md:text-base'>
            <p className='font-medium'>Products</p>
            {/* <p>loading...</p> */}
        </div>
        <div className='max-h-64 overflow-auto'>
            <>
        {results?.length>0?  
        <>
        {
        results?.map((item,index)=>(
        <Link to={`productDetails/${item._id}`}>
            <div key={index} className=' flex items-center cursor-pointer mb-2'>
                <div className='border-solid border-1 border-darkGray h-20 w-20'>
                    <img className='h-full w-full object-cover'  src={item.image} alt="" />
                </div>
                <div className='leading-loose ml-2'>
                    <p className='hover:text-outline'>{item?.name}</p>
                    <p className='font-medium	'>{item.price?  '$'+item.price : 'free'}</p>
                </div>
            </div>
        </Link>
        ))
        }
        </>

        :
        <div className='flex items-center justify-center text-xl'>No Products Found</div>
        }
        </>
        </div>
        <div className='flex justify-between text-sm p-1 md:text-base'>
            <p>Search for <span>'{text}'</span></p>
            <BsArrowRightShort className='cursor-pointer text-2xl' />
        </div>
        </div>
        :
        null
        
    
    }
     </div>
    </>
  )
}

export default SearchBar