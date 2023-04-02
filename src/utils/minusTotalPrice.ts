import { CartItem } from 'redux/slices/cart/types'

export const minusTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => sum + obj.price * obj.count, 0)
}
