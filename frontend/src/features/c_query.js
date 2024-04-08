import { createSlice } from '@reduxjs/toolkit'

export const cqSlice = createSlice({
  name: 'query',
  initialState: {
    "quest":"",
    "jugad":1,
  },
  reducers: {
    current_quest: (state, action) => {
      state.quest=action.payload;
    },
    increment:(state) => {
      state.jugad+=1;
    }
  },
})

export const {current_quest,increment} = cqSlice.actions

export default cqSlice.reducer