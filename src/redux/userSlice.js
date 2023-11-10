import { createSlice } from "@reduxjs/toolkit"


const initialState = {userDetails:{}}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        validate: (state, action)=>{
            state.userToken = action.payload.userDetails.userToken;
            state.userDetails = action.payload.userDetails;
        }
    }
})

export const userActions = userSlice.actions;

export default userSlice.reducer;