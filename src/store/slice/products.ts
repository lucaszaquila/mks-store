import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReducerFunction } from "../type";

// const setProducts: ReducerFunction<typeof initialState> = (state, actions) => {
//   state = actions.payload;
// };

const initialState = { data: [] };
const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, actions) => {
      state.data = actions.payload;
    });
  },
});

export const products = productsSlice.reducer;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch(
      "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=9&sortBy=id&orderBy=ASC"
    );
    const data = await res.json();

    return data.products;
  }
);
