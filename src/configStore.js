import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./modules/cartSlice";
import goodsSlice from "./modules/goodsSlice";
import membersSlice from "./modules/membersSlice";

const store = configureStore({
  reducer: { members: membersSlice, cart: cartSlice, goods: goodsSlice },
  devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
