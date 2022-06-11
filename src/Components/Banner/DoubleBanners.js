import React from 'react'
import Banner from './Banner'

function DoubleBanners() {
  return (
    <div className='flex flex-col sm:flex-row'>
        <Banner/>
        <Banner/>
    </div>
  )
}

export default DoubleBanners