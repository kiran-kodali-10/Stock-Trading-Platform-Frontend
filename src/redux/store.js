import { configureStore } from '@reduxjs/toolkit';
import userReducer from "redux/userSlice.js";
import uiReducer from "redux/uiSlice.js";

const store = configureStore({
    reducer: {
        user: userReducer,
        ui: uiReducer
    }
});

export default store;