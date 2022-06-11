import React from 'react'
import Bannerbody from '../Banner/Bannerbody'
import CatologoHeader from '../CatologoHeader/CatologoHeader'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ChackIitems from './ChackIitems'

function Chackout() {
  return (
    <div>
        <Header /> 
       <CatologoHeader/>
       <Bannerbody />
       <ChackIitems/>
       <Footer />
    </div>
  )
}

export default Chackout