import { configureStore } from '@reduxjs/toolkit';

import { api } from './api/api';

import instanceReducer from './instanceSlice/instanceSlice';
import chatsReducer from './chatsSlice/chatsSlice';
import activeChatReducer from './activeChatSlice/activeChatSlice';
import messagesReducer from './messagesSlice/messagesSlice';

export const store = configureStore({
  reducer: {
    instanceInfo: instanceReducer,
    chats: chatsReducer,
    activeChat: activeChatReducer,
    messages: messagesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
