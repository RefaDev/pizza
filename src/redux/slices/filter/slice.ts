import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilterSliceState, SortEnum, SortType } from './types'


const initialState: IFilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sort: SortEnum.RATING,
  },
  order: true,
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload
    },
    setDir(state, action: PayloadAction<boolean>) {
      state.order = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
  },
})

export const {
  setCategoryId,
  setSort,
  setDir,
  setCurrentPage,
  setSearchValue,
} = filterSlice.actions

export default filterSlice.reducer
