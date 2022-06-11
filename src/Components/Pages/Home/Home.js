import React from 'react'
import SpecialOfferCardContainer from '../../../SpecialOffer/SpecialOfferCardContainer'
import DoubleBanners from '../../Banner/DoubleBanners'
import SingleBanner from '../../Banner/SingleBanner'
import ShopBrands from '../../Brands/ShopBrands'
import CatologoHeader from '../../CatologoHeader/CatologoHeader'
import Conditons from '../../Conditions/Conditons'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import ProductSlick from '../../ProductSlick/ProductSlick'
import RecentSoldItems from '../../RecentLySoldITems/RecentSoldItems'
import Slider from '../../Slider/Slider'
import SuscirbeChanel from '../../Suscribe/SuscirbeChanel'
import Tesimonials from '../../Testimonials/Tesimonials'
import TopNbrs from '../../TopNiches/TopNbrs'
import './style.css'

function Home() {
  return (
    <div>
       <Header /> 
       <CatologoHeader/>
       <Slider />
       <RecentSoldItems/>
       <SingleBanner />
       <RecentSoldItems/>
       <SpecialOfferCardContainer/>
       <RecentSoldItems/>
       <DoubleBanners/>
       <TopNbrs/>
       {/* <ShopBrands/> */}
       <Tesimonials/>
       <SuscirbeChanel/>
       <div className='conditions'>
        <Conditons/>
        <Conditons/>
        <Conditons/>
        <Conditons/>
       </div>
       <Footer />
    </div>
  )
}

export default Home