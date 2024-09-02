import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;

      const registeredUsername = localStorage.getItem('registeredUsername');
      const registeredPassword = localStorage.getItem('registeredPassword');

      if (username === registeredUsername && password === registeredPassword) {
        state.isAuthenticated = true;
        state.user = { username };
      } else {
        state.isAuthenticated = false;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
