import React from 'react';
import { Product } from './features/counter/Product/Product.js';
import { Cart } from './features/counter/Cart/Cart.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Product />
      <Cart />
    </div>
  );
}

export default App; //import to index.js
