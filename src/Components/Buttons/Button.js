import React from 'react'

function Button({text}) {
  return (
    <div className='h-9 w-32 duration-300 ease-in hover:bg-black cursor-pointer bg-green-600 text-white font-medium rounded flex items-center justify-center'>
        {text}
    </div>
  )
}

export default Button