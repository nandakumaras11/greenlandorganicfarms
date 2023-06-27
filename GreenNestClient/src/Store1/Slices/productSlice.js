import { createSlice } from "@reduxjs/toolkit";
const initialState={
    productList:[],
}
export const  productSlice=createSlice({
    name:'productdetails',
    initialState,
    reducers:{
        fetchandstore:(state,action)=>{
            //  console.log(action.payload);
            state.productList=action.payload;
            
        },
    },
})

export const {fetchandstore} = productSlice.actions  

export default productSlice.reducer;