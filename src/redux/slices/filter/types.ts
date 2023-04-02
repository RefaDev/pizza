export enum SortEnum {
  RATING = 'rating',
  PRICE = 'price',
  TITLE = 'title',
}

export type SortType = {
  name: string
  sort: SortEnum
}

export interface IFilterSliceState {
  searchValue: string
  categoryId: number
  currentPage: number
  sort: SortType
  order: boolean
}
