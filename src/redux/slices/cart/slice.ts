import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { calcTotalPrice } from 'utils/calcTotalPrice'
import { getCartFromLocalStorage } from 'utils/getCartFromLocalStorage'
import { minusTotalPrice } from 'utils/minusTotalPrice'
import { CartItem, ICartSliceState } from './types'

const { items, totalPrice } = getCartFromLocalStorage()

const initialState: ICartSliceState = {
  totalPrice,
  items,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id)
      if (findItems) {
        findItems.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = calcTotalPrice(state.items)
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItems = state.items.find((obj) => obj.id === action.payload)
      if (findItems && findItems.count > 1) {
        findItems.count--
      }
      state.totalPrice = minusTotalPrice(state.items)
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
      state.totalPrice = minusTotalPrice(state.items)
    },
    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions

export default cartSlice.reducer
