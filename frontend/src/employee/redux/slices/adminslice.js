import { createSlice } from '@reduxjs/toolkit';
import { getAdmin } from '../actions/adminactions';
const initialState = {
  adminInfo: null,
  error: null,
  loading: false,
};

const adminslice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdmin.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.adminInfo = action.payload;
      })
      .addCase(getAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default adminslice.reducer;
