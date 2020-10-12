import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addItem: (state, action) => {
      // state.cartItem.push(action.payload);
      const newItem = {...action.payload}
      const foundItem = state.cartItem.find((item) => item.id == newItem.id)
      if (foundItem) {
        foundItem.quantity = foundItem.quantity + 1
        state.cartItem = state.cartItem.map(item => item.id === foundItem.id ? foundItem : item)
      } else {
        state.cartItem.push({ ...newItem, quantity: 1 })
      }
    },

    deleteItem: (state, action) => {
      state.cartItem = state.cartItem.filter((item)=>item.id !== action.payload.id);
    }
  },
});


export const { addItem, deleteItem } = cartSlice.actions;//import to Product.js

export const selectCart = state => state.cart.cartItem; 

export default cartSlice.reducer; //import to store.js