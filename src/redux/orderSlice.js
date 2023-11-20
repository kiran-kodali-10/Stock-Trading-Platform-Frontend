const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    prices: {
        
    }
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers:{
        setPrice:(state, action)=>{

        }
    }
});

export const orderAction = orderSlice.actions;

export default orderSlice.reducer;