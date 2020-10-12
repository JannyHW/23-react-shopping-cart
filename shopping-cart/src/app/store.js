import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/counter/Product/productSlice';
import cartReducer from '../features/counter/Cart/cartSlice';

//combining all reducers here
export default configureStore({
  reducer: {
    // counter: counterReducer,
    products: productsReducer,
    cart: cartReducer,

  },
});
