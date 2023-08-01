import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        //nameOfSlice: reducerExportedFromThatSlice
        cart: cartSlice
    }

})

export default store;