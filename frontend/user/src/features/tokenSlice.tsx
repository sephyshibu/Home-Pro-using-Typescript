import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface tokenState{
    token:string
}

const initialState:tokenState={
    token:""
}

const tokenSlice=createSlice({
    name:'token',
    initialState,
    reducers:{
        addtoken(state,action:PayloadAction<{token:string}>){
                state.token=action.payload.token
        }
    }

})

export const { addtoken } = tokenSlice.actions;
export default tokenSlice.reducer;