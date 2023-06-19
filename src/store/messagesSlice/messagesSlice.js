import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {},
  reducers: {
    addMessage: (messages, { payload: message }) => {
      if (messages[message.chatId]) {
        if (!messages[message.chatId].includes[message.idMessage]) {
          messages[message.chatId].list.push(message);
          messages[message.chatId].includes[message.idMessage] = true;
        }
      } else {
        messages[message.chatId] = {
          list: [message],
          includes: {
            [message.idMessage]: true,
          },
        };
      }
    },
    clearMessages: (messages, { payload: chatId }) => {
      messages[chatId] = undefined;
    },
  },
});

export const messagesActions = messagesSlice.actions;

export default messagesSlice.reducer;
