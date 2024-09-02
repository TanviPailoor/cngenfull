import { createAsyncThunk } from '@reduxjs/toolkit';
import configuredUrl from '../../../employee/utilities/request';
const getAdmin = createAsyncThunk('getAdmin', async ({ rejectWithValue }) => {
  try {
    const { data } = await configuredUrl.get(`admin/checkadmin`);
    console.log(data);
  } catch (e) {
    console.log(e.response.data.message);
    return rejectWithValue(e);
  }
});

export { getAdmin };
