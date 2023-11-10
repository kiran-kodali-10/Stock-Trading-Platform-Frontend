const { createSlice } = require("@reduxjs/toolkit");

const initialState = {show: false}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setShow: (state, action) =>{

        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;