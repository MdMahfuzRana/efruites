import React from 'react'
import Bannerbody from '../../Banner/Bannerbody'
import CatologoHeader from '../../CatologoHeader/CatologoHeader'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import ItemsTable from './ItemsTable'

function WishList() {
  return (
    <div>
        <Header /> 
       <CatologoHeader/>
       <Bannerbody />
        <ItemsTable />
       <Footer />
    </div>
  )
}

export default WishList