import React from 'react'

function IconButtons({icon,height,width,fontSize,color,background,itemlength }) {
  return (
    <div className={` ease-in duration-300 flex items-center justify-center cursor-pointer rounded-full m-2 ${height} ${width} ${fontSize} ${background} ${color} hover:text-white hover:bg-green-700 font-medium`}>
        {icon}
        <div className='flex items-center justify-center absolute -mt-10 ml-7 h-6 w-6 bg-white rounded-full '>
        <div className='h-5 w-5 flex items-center justify-center  bg-green-700 text-xs p-1 text-white rounded-full'>{itemlength}</div>
        </div>
    </div>
  )
}

export default IconButtons