const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    stockTransactions:[]
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers:{
        buyStock:(state, action)=>{
            // state.
        }
    }
});

export const orderAction = orderSlice.actions;

export default orderSlice.reducer;