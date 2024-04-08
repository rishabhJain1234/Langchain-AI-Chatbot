import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: '',
  },
  reducers: {
    change_token: (state, action) => {
      state.token = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {change_token} = tokenSlice.actions

export default tokenSlice.reducer