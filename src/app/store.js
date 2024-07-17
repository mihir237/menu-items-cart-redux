import { configureStore } from "@reduxjs/toolkit";
import categoryListReducer from "../feature/categoryListSlice";
import menuItemModalReducer from "../feature/menuItemModalSlice";
import cartReducer from "../feature/addToCart/addToCartSlice";

const store = configureStore({
  reducer: {
    categoryList: categoryListReducer,
    menuItemModal: menuItemModalReducer,
    cart: cartReducer,

  }
});

export default store;
