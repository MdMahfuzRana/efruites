import { createSlice } from '@reduxjs/toolkit'

export const previewSlice = createSlice({
  name: 'preview',
  initialState: {
    value: null
  },
  reducers: {
    previewprcts: (state,actions) => {
        state.value = actions.payload
        console.log(actions.payload)
    },
  }
})

export const { previewprcts } = previewSlice.actions

export default previewSlice.reducer