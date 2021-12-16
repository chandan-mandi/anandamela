import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import products from "../../fakedata/products.json";

// First, create the thunk
export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
      const response = await fetch("")
      .then(res => res.json())
      return response
    }
  )

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        cartList: [],
        completeOrder: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartList.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cartList = state.cartList.filter(product => product.id !== action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
          // Add user to the state array
          state.products.push(action.payload)
        })
      },

})

export const {addToCart, removeFromCart} = productSlice.actions;

export default productSlice.reducer;