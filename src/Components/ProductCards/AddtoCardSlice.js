import { createSlice } from '@reduxjs/toolkit'

export const addtoCart = createSlice({
  name: 'busket',
  initialState: {
    items: [],
    total: 0  // total price of all items in busket
  },
  reducers: {
    addto: (state,actions) => {
        state.items = [...state.items,actions.payload]
        state.total = state.total+actions.payload.price
    },
    removeCard: (state,actions) => {
      state.items.forEach((item,index) => {
        if(item.id===actions.payload.id){
            state.total = (state.total).toFixed(2)-actions.payload.price
            state.items.splice(index,1)
        }
    })
    },
    increaseQuantity: (state,actions) => {
      // console.log(actions.payload)
        state.items.forEach((item,index) => {
          if(item.id===actions.payload.id){
              item.quantity = item.quantity+1;
              // item.price = actions.payload.price/item.quantity 
              state.total = state.total+actions.payload.price
          }
      })
  }

  }
})

export const { addto, removeCard, increaseQuantity } = addtoCart.actions
export default addtoCart.reducer