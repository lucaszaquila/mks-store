import { configureStore } from '@reduxjs/toolkit'
import { cart } from './slice/cart'
import { products } from './slice/products'

export const store = configureStore({
  reducer: {
    products,
    cart
  },
})