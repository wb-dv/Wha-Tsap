import { api } from './api';

export const chatsApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getChats: query({
      query: ({ idInstance, apiTokenInstance }) => `waInstance${idInstance}/getContacts/${apiTokenInstance}`,
    }),
  }),
});

export const { useGetChatsQuery } = chatsApi;
