import { configureStore } from '@reduxjs/toolkit';
import authslice from './slices/authslice';
import adminslice from './slices/adminslice';
const store = configureStore({
  reducer: {
    aslice: authslice,
    adminslice: adminslice,
  },
});

export { store };
