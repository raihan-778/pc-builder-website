
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  total: 0,
  quantity: 0,
};

const pcBuilderSlice = createSlice({
  name: 'pcBuilder',
  initialState,
  reducers: {
    addToPcBuilder: (state, action) => {
      const isExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (isExist) {
        isExist.quantity = isExist.quantity + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
      state.quantity += action.payload.quantity;
    },
    removeOne: (state, action) => {
      const isExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (isExist && isExist.quantity > 1) {
        isExist.quantity = isExist.quantity - 1;
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      }
      state.total -= action.payload.price;
      state.quantity -= action.payload.quantity;
    },
    removeFromPcBuilder: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.total -= action.payload.price * action.payload.quantity;
      state.quantity -= action.payload.quantity 
    },
  },
});

export const { addToPcBuilder, removeFromBuilder, removeOne } = pcBuilderSlice.actions
export default pcBuilderSlice.reducer

