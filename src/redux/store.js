import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import budgetReducer from './budgetSlice';
import productsReducer from './productsSlice';
import offersReducer from './offersSlice';  
export const store = configureStore({
  reducer: {
    auth: authReducer,
    budget: budgetReducer,
    products: productsReducer,
    offers: offersReducer, 
  },
});