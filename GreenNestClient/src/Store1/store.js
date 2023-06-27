import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import bannerSlice from "./Slices/bannerSlice";
import UserSlice from "./Slices/UserSlice";
export const store = configureStore({
  reducer: {
    productdetails: productSlice,
    banner: bannerSlice,
    user:UserSlice
  },
});
