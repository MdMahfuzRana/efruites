import { createSlice } from '@reduxjs/toolkit'

export const addtoCart = createSlice({
  name: 'busket',
  initialState: {
    items: [],
    total: 0
  },
  reducers: {
    addto: (state,actions) => {
        state.items = [...state.items,actions.payload]
        state.total = state.total+actions.payload.price
    },

  }
})

export const { addto } = addtoCart.actions
export default addtoCart.reducer