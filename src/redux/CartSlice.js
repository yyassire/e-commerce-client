import { createSlice } from '@reduxjs/toolkit'
  
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        total:0,
        quantity:0,
    },
    reducers: {
        addCart:(state,action)=>{
            state.products.push(action.payload);
            state.quantity+=1;
            state.total+= action.payload.price*action.payload.quantity
        },
    }
  })

  export const {addCart} = cartSlice.actions
  export default cartSlice.reducer