import React from 'react'
import Adrress from '../../address/Adrress'
import Addrescard from '../../AddressCard/Addrescard'
import Bannerbody from '../../Banner/Bannerbody'
import CatologoHeader from '../../CatologoHeader/CatologoHeader'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import SuscirbeChanel from '../../Suscribe/SuscirbeChanel'

function ContactPage() {
  return (
    <div className=''>
        <Header /> 
       <CatologoHeader/>
       <Bannerbody />
       <Addrescard/>
       <Adrress/>
       <SuscirbeChanel/>
       <Footer />
    </div>
  )
}

export default ContactPage