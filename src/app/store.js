import { configureStore } from "@reduxjs/toolkit";
import categoryListReducer from "../feature/addToCart/categoryListSlice";

const store = configureStore({
  reducer: {
    categoryList: categoryListReducer
  }
});

export default store;
