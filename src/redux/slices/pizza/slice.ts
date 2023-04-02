import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { IPizzaSliceState, Pizza, Status } from './types'

const initialState: IPizzaSliceState = {
  items: [],
  status: Status.LOADING,
}

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { category, orderReq, search, sorted, currentPage } = params

    const res = await axios.get<Pizza[]>(
      `https://63f75f65e8a73b486af676c6.mockapi.io/items?page=${currentPage}&limit=4&
	${category}&sortBy=${sorted}&order=
	${orderReq}${search}`
    )
    return res.data
  }
)

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING
      state.items = []
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = []
    })
  },
})
export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
