import React from 'react'
import Bannerbody from '../Banner/Bannerbody'
import CatologoHeader from '../CatologoHeader/CatologoHeader'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Allsotore from './Allsotore'

function ProductsPagesAll() {
  return (
    <div>
        <Header /> 
       <CatologoHeader/>
        <Allsotore />
       <Footer />
    </div>
  )
}

export default ProductsPagesAll