import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './slices/ProductSlice'
import UserSlice from './slices/UserSlice'

export const store = configureStore({
  reducer: {
      products: ProductSlice,
      user: UserSlice
  },
})