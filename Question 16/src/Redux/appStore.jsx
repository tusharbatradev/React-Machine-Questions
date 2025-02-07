import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice"

export const appStore = configureStore({
    reducer : {
        list : listSlice
    }
})
