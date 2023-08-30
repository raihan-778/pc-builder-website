
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  total: 0,
};

const pcBuilderSlice = createSlice({
  name: 'pcBuilder',
  initialState,
  reducers: {
    addToPcBuilder: (state, action) => {
      const isExist = state.products.find(
        (component) => component._id === action.payload._id
      );
      if (isExist) {
        isExist.quantity = isExist.quantity + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeOne: (state, action) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (isExist && isExist.quantity > 1) {
        isExist.quantity = isExist.quantity - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity;
    },
  },
});

const { addToPcBuilder, removeFromCart, removeOne } = pcBuilderSlice.actions;
module.exports = { addToPcBuilder, removeFromCart, removeOne, pcBuilderSlice };
