import { createSlice } from "@reduxjs/toolkit"


const initialState = {userDetails:[], logout:false}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        validate: (state, action)=>{
            state.userToken = action.payload.userDetails.userToken;
            state.userDetails = action.payload.userDetails;
        },
        logout:(state, action)=>{
            state.userDetails = []
            state.logout = true
        },
        updateBalance: (state, action)=>{
            state.userDetails[0].balance = action.payload.balance
        }
    }
})

export const userActions = userSlice.actions;

export default userSlice.reducer;