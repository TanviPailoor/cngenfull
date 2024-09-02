import { createSlice } from '@reduxjs/toolkit';
import { loginAction, registerAction } from '../actions/authactions.js';
const initialState = {
  loginInfo: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  registerInfo: null,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  error: null,
  loading: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.loading = false;
      state.loginInfo = null;
      state.registerInfo = null;
      state.error = null;
      state.token = null;
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.loginInfo = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerAction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.registerInfo = action.payload;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
const { logout } = authSlice.actions;
export { logout };
