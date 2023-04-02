export type Pizza = {
  id: string
  name: string
  price: number
  imageUrl: string
  sizes: number[]
  types: number[]
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IPizzaSliceState {
  items: Pizza[]
  status: Status
}