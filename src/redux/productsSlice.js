import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productsData from '../data/products.json';


const productsArray = productsData.products || productsData;

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // Simulate async loading
    return new Promise((resolve) => {
      setTimeout(() => resolve(productsArray), 200);
    });
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],   // This will become an array
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Now payload is the array
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;