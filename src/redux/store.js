import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import budgetReducer from './budgetSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    budget: budgetReducer,
  },
});