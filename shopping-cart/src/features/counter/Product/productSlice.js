//Redux Toolkit Package: helping to manage states easyier by creating its own Slice of state
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const productSlice = createSlice({
  name: 'products',
  initialState: {
    productItem: [],
  },
  reducers: {
    display: (state, action) => {
       state.productItem = action.payload;
    },
  },
});

export const { display } = productSlice.actions;


export const getProduct =()=> (dispatch)=> { //import to Product.js
   axios.get("http://localhost:3001/products").then((resp)=>dispatch(display(resp.data)));

};

export const selectProduct = (state) => state.products.productItem; //import to Product.js

export default productSlice.reducer;