import { createSlice } from '@reduxjs/toolkit'

export const historySlice = createSlice({
  name: 'query',
  initialState: {
    history:[]
  },
  reducers: {
    user_history: (state, action) => {
      state.history.push(action.payload);
    },
  },
})

export const {user_history} = historySlice.actions

export default historySlice.reducer