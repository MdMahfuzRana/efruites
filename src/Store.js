import { configureStore } from '@reduxjs/toolkit'
import  heartSlice  from './Components/Pages/wishList/HeartSlice'
import addtoCart  from './Components/ProductCards/AddtoCardSlice'
import  previewSlice  from './PreviewSlice'

export default configureStore({
  reducer: {
    preview:previewSlice,
    heart:heartSlice,
    busket:addtoCart,
  }

})