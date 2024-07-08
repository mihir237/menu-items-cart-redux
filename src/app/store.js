import { configureStore } from "@reduxjs/toolkit";
import categoryListReducer from "../feature/categoryListSlice";
import menuItemModalReducer from "../feature/menuItemModalSlice";

const store = configureStore({
  reducer: {
    categoryList: categoryListReducer,
    menuItemModal: menuItemModalReducer

  }
});

export default store;
