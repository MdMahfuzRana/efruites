import React, { useState } from 'react'
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'  // https://react-icons.netlify.com/#/icons/all
import { BiHeart } from 'react-icons/bi'
import { DiGitCompare } from 'react-icons/di'
import { RiShoppingBasket2Fill } from 'react-icons/ri'
import Busket from '../Busket/Busket'
import IconButtons from '../Buttons/IconButtons'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'


function Header() {
    const [searchOpen, setsearchOpen] = useState(false)
    const [openBusket, setopenBusket] = useState(false)
    const hearts = useSelector(state=>state.heart.items)
    const busket = useSelector(state=>state.busket.items) 
    const totalPrice = useSelector(state=>state.busket.total)
    
    console.log(busket)

    let user = JSON.parse(localStorage.getItem('user'))
    let name = user?.email.split("@")[0]
    if(name?.length > 8) {
        name = name.substring(0,8) + '...'
    }

  return (
    <div className=''>
        <div className='h-16 flex items-center justify-around  border-b border-gray-300'>
            <div className='flex items-center justify-around w-72'>
                <div className='h-8 w-fit'>
                    <img className='h-full w-full object-contain' src='https://mironmahmud.com/greeny/assets/ltr/images/logo.png' alt="" />
                </div>
                <div onClick={()=>{setsearchOpen(searchOpen?false:true)}} className='sm:hidden bg-gray-200 h-9 w-9 rounded-full flex items-center justify-center'><AiOutlineSearch className=' text-2xl  '/></div>

                <Link to={user? '/profile':'/login'}>
                    <div className='flex items-center cursor-pointer'>
                        <div className=' bg-gray-200 hover:bg-green-600 hover:text-white ease-in duration-300 h-9 w-9 rounded-full flex items-center justify-center'><AiOutlineUser className=' text-2xl  '/></div>
                        <p className='ml-2 hidden md:flex'>{user? name:'join'}</p>
                    </div>
                </Link>

            </div>
            <div className='h-10 w-2/5 hidden bg-gray-200 rounded-md sm:flex items-center pr-2 active:outline outline-lime-800 outline-offset-2 outline-2'> 
                <SearchBar />
            </div>
            <div className='items-center justify-center ml-2 mr-2 hidden md:flex  '>
                <Link to="/wishlists">
                    <IconButtons itemlength={hearts? hearts.length:0} color="text-gray-500"  height='h-10' width='w-10' fontSize='text-2xl' background='bg-gray-200' icon={<BiHeart/>} />
                </Link>
                <IconButtons itemlength={busket? busket.length:0} color="text-gray-500"  height='h-10' width='w-10' fontSize='text-2xl' background='bg-gray-200' icon={<RiShoppingBasket2Fill onClick={()=>{setopenBusket(openBusket?false:true)}} />} />
            <div className='hidden md:block' >
                <p className='text-xs'>Total Price</p>
                <p className='font-bold text-black '>${totalPrice.toFixed(2)}</p>
            </div>
            </div>
        </div>
{searchOpen?        
        <div className='sm:hidden h-12 flex items-center pl-2 pr-2 bg-gray-200'>
            <SearchBar />
        </div>:null}

{openBusket?<Busket totalPrice={totalPrice} />:null}
    </div>
  )
}

export default Header