import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
  name: 'query',
  initialState: {
    sessionHistory:[]
  },
  reducers: {
    session_history: (state, action) => {
      state.sessionHistory.push(action.payload);
    },
  },
})

export const {session_history} = sessionSlice.actions

export default sessionSlice.reducer