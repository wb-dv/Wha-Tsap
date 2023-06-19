import { createSlice } from '@reduxjs/toolkit';

export const activeChatSlice = createSlice({
  name: 'activeChat',
  initialState: '',
  reducers: {
    setActiveChat: (currentId, { payload: id }) => id,
  },
});

export const activeChatActions = activeChatSlice.actions;

export default activeChatSlice.reducer;
