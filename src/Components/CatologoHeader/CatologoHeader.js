import React, { useState } from 'react'
import {BsFillPhoneFill} from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function CatologoHeader() {
    const [contactInfo, setcontactInfo] = useState([
        {
            icon: <BsFillPhoneFill className='text-green-700 text-3xl'/>,
            text: 'Call Us',
            tel: 'tel:+7 (999) 999-99-99',
            link: 'tel:+7 (999) 999-99-99'
        },
        {
            icon: <FiMail className='text-green-700 text-3xl'/>,
            text: 'Mail Us',
            tel: 'mdmahfuzrana41@gmail.com',
            link: 'mailto:mdmahfuzrana41@gmail.com'
        }
    ])
  return (
    <div className='h-14 w-full hidden md:block'>
        <div className='flex items-center h-full w-5/6 m-auto '>
        <div className='flex font-medium w-1/2'>
            <Link to='/' >
                <div className='m-2'>Home</div>
            </Link>
            <Link to='/productAll' >
                <div className='m-2'>Shop</div>
            </Link>
            {/* <Link to='/' >
                <div className='m-2'>Contact Contact</div>
            </Link> */}
        </div>
        <div className='flex items-center justify-around w-1/2'>
            {
                contactInfo.map((item,index)=>{
                    return(
                        <div className='flex items-center'>
                        <a href={item.link} >{item.icon}</a>
                        <div className='ml-2 text-gray-700 leading-5	' >
                            <p className=''>{item.text}</p>
                            <p className=' font-medium '>{item.tel}</p>
                        </div>
                    </div>
                    )
                }   )   
            }
        </div>
        </div>
    </div>
  )
}

export default CatologoHeader