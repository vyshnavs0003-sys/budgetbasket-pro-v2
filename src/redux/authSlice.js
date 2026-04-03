import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthModalOpen: false,
  user: null,          
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openAuthModal: (state) => {
      state.isAuthModalOpen = true;
    },
    closeAuthModal: (state) => {
      state.isAuthModalOpen = false;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isAuthModalOpen = false; 
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { openAuthModal, closeAuthModal, login, logout } = authSlice.actions;
export default authSlice.reducer;