import type { IProduct } from "../types/product"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CartState {
  items: IProduct[]
}

const initialState: CartState= {
  items: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IProduct>) =>{
      if (!state.items.find((item) => item.id=== action.payload.id)) state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) =>{
      state.items= state.items.filter((item) => item.id !== action.payload);
    },
    clear: (state) =>{
      state.items= []
    }
  }
})
export default cartSlice.reducer
export const { add, remove, clear } = cartSlice.actions