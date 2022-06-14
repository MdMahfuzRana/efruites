import React from 'react'
import Allsotore from '../../Allproducts/Allsotore'
import CatologoHeader from '../../CatologoHeader/CatologoHeader'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Pdetails from './Pdetails'

function ProductDetails() {
  return (
    <div>
        <Header /> 
        <CatologoHeader/>
        <Pdetails />
        <Allsotore />
        <Footer />
    </div>
  )
}

export default ProductDetails