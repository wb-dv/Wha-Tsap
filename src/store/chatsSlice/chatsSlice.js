import { createSlice } from '@reduxjs/toolkit';

export const chatsSlice = createSlice({
  name: 'chats',
  initialState: {
    list: [],
    phones: {},
  },
  reducers: {
    addChat: ({ list, phones }, { payload: { phone, id } }) => {
      if (!phones[phone]) {
        list.push({ phone, id, name: '' });
        phones[phone] = true;
      }
    },
  },
});

export const chatsActions = chatsSlice.actions;

export default chatsSlice.reducer;
