import { createSlice } from "@reduxjs/toolkit";
const initialState={
   addressList:[],
}
export const  addressSlice=createSlice({
    name:'addressdetails',
    initialState,
    reducers:{
        fetchaddressandstore:(state,action)=>{
            //  console.log(action.payload);
            state.addressList=action.payload;
            
        },
    },
})

export const {fetchaddressandstore} = addressSlice.actions  

export default addressSlice.reducer;