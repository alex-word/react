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
      return {
        ...store,
        token: action.payload,
      }
    },
    removeToken: (store) => {
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
