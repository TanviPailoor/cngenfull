import { createAsyncThunk } from '@reduxjs/toolkit';
import configuredUrl from '../../../employee/utilities/request';

const getProfileDetailsAction = createAsyncThunk(
  'getprofiledetails',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await configuredUrl.get(`/profile/get-profile/${id}`);
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e);
    }
  }
);

export { getProfileDetailsAction };
