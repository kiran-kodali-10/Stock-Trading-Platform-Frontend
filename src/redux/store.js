import { configureStore } from '@reduxjs/toolkit';
import userReducer from "redux/userSlice.js";
import uiReducer from "redux/uiSlice.js";
import orderSlice from './orderSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        ui: uiReducer,
        order: orderSlice 
    }
});

export default store;