import { createSlice } from '@reduxjs/toolkit';
import { getInstanceInfo } from '../../helpers/localStorage';

const instanceInfo = getInstanceInfo();

export const instanceSlice = createSlice({
  name: 'instanceInfo',
  initialState: instanceInfo,
  reducers: {
    setInstanceInfo: (state, { payload }) => {
      state.idInstance = payload.idInstance;
      state.apiTokenInstance = payload.apiTokenInstance;
    },
  },
});

export const instanceActions = instanceSlice.actions;

export default instanceSlice.reducer;
