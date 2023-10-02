import { configureStore } from "@reduxjs/toolkit";
import rentDataSlice from './slice/dataSlice'
export default configureStore({
    reducer:{
        dataReducer:rentDataSlice
    }
})
