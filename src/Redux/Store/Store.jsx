import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import ProductReducer from "./ProductSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: ProductReducer,
  },
});
export default store;
