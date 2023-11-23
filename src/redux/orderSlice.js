const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    stockTransactions: []
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setStockTransactions: (state, action) => {
            console.log(action.payload.userStocks)
            state.stockTransactions = action.payload.userStocks
        },
        addStock: (state, action) => {
            const stock = {
                company: action.payload.company,
                quantity: action.payload.quantity
            }
            let existingStock = state.stockTransactions.find((stock)=> stock.company === action.payload.company)
            if(existingStock){
                existingStock.quantity += action.payload.quantity
            }
            else{
                state.stockTransactions.push(stock)
            }
            console.log(`user stocks: ${state.stockTransactions}`)
        },
        sellStock:(state, action)=>{
            let existingStock = state.stockTransactions.find((stock)=>stock.company === action.payload.company)
            if(existingStock){
                existingStock.quantity -= action.payload.quantity
            }
            if(existingStock.quantity===0)
                state.stockTransactions = state.stockTransactions.filter((stock)=> stock.company !== action.payload.company)
            else{
                // state.stockTransactions.push(stock)
            }
        }
    }
});

export const orderAction = orderSlice.actions;

export default orderSlice.reducer;