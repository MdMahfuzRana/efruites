import React from 'react'
import { useParams } from 'react-router-dom'

function Pdetails() {
    const param = useParams();
    
  return (
    <div className='sm:h-56 h-fit w-full flex sm:flex-row flex-col items-center justify-center p-5'>
        <div className='sm:h-full h-56 w-fit border border-solid border-gray-300'>
            <img className='h-full w-full ' src="https://mironmahmud.com/greeny/assets/ltr/images/product/06.jpg" alt="" />
        </div>
        <div className='sm:w-3/6 w-full p-5 '>
            <p>This post might sound very much stereotyping. I grew up in a culture that was all about people pleasing- I have hardly ever said no to anything until I was in my twenties. </p>
        </div>
    </div>
  )
}

export default Pdetails