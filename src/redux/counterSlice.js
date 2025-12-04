import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: {}  // dishId: quantity
}

export const counterSlice=createSlice({
    //name of the slice
    name:"counter",
    //initial value of the state
    initialState,
    //action
    reducers:{
        //logic
        increment:(state,action)=>{
            const id=action.payload
            state.items[id]=(state.items[id]||0)+1
        },
        decrement:(state,action)=>{
            const id = action.payload;

            if(state.items[id]>=1){
            state.items[id]-=1
        }},
        

    }
})

export const selectCartCount = (state) => {
  return Object.values(state.counterReducer.items).reduce((sum, qty) => sum + qty, 0);
};

//slice holdes bothreducer and action
//action is needed for the component to update the state
export const {increment,decrement}=counterSlice.actions
//reducer needed for thre store
export default counterSlice.reducer