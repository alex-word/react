import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { useDispatch, useSelector } from "react-redux"
import { RootState, SliceDispatch } from "."

export interface UserState {
  token: string | null
}

const initialState: UserState = {
  token: localStorage.getItem("token"),
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (store, action: PayloadAction<string>) => {
      console.log(action.payload);
      
      localStorage.setItem('token', action.payload)
      return {
        ...store,
        token: action.payload,
      }
    },
    removeToken: (store) => {
      localStorage.removeItem('token')
      return {
        ...store,
        token: null,
      }
    },
  },
})

export const { addToken, removeToken } = userSlice.actions
export const useUserSelector = () =>
  useSelector((state: RootState) => state.user)
export const useUserDispatch = () => useDispatch<SliceDispatch>()
export default userSlice.reducer
