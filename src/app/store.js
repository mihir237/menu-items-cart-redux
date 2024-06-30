import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from '../feature/addToCart/addToCartSlice'

export default configureStore({
  addToCart: addToCartReducer,
})