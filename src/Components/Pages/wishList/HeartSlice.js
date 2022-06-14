import { createSlice } from '@reduxjs/toolkit'

export const heartSlice = createSlice({
  name: 'heart',
  initialState: {
    items: []
  },
  reducers: {
    storHeart: (state,actions) => {
        state.items.forEach(item => {
            if(item.name===actions.payload.name){
               return alert('already in wishlist')
            }
        })
        state.items = [...state.items,actions.payload]
    },
    remove: (state,actions) => {
        state.items.forEach(item => {
            if(item.name===actions.payload.name){
                return state.items.splice(state.items.indexOf(item),1)
            }
        })
    },
  }
})

export const { storHeart,remove } = heartSlice.actions

export default heartSlice.reducer