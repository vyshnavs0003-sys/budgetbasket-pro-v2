import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  monthlyBudget: 1200, 
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    setMonthlyBudget: (state, action) => {
      state.monthlyBudget = action.payload;
      localStorage.setItem('monthlyBudget', action.payload);
    },
    loadBudgetFromStorage: (state) => {
      const stored = localStorage.getItem('monthlyBudget');
      if (stored && !isNaN(parseFloat(stored))) {
        state.monthlyBudget = parseFloat(stored);
      }
    },
  },
});

export const { setMonthlyBudget, loadBudgetFromStorage } = budgetSlice.actions;
export default budgetSlice.reducer;