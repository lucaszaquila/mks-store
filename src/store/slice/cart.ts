import { createSlice } from "@reduxjs/toolkit";

const initialState = { subtotal: 0, items: {} };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, { payload }) {
      state.subtotal += Number(payload.price);
      state.items[payload.id] = { ...payload, total: 1 };
    },
    removeItemToCart(state, { payload }) {
      const item = state.items[payload];
      state.subtotal -= Number(item.price) * item.total;

      delete state.items[payload];
    },
    incrementItemInCart(state, { payload }) {
      const item = state.items[payload];

      state.subtotal += Number(item.price);
      state.items[payload].total++;
    },
    decrementItemInCart(state, { payload }) {
      const item = state.items[payload];

      state.subtotal -= Number(item.price);
      state.items[payload].total--;
    },
  },
});

export const {
  addItemToCart,
  decrementItemInCart,
  incrementItemInCart,
  removeItemToCart,
} = cartSlice.actions;

export const cart = cartSlice.reducer;
