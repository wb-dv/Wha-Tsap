import { api } from './api';

export const contactApi = api.injectEndpoints({
  endpoints: ({ mutation }) => ({
    getUserInfo: mutation({
      query: ({ idInstance, apiTokenInstance, chatId }) => ({
        url: `waInstance${idInstance}/getContactInfo/${apiTokenInstance}`,
        method: 'POST',
        body: { chatId },
      }),
    }),
    getUserAvatar: mutation({
      query: ({ idInstance, apiTokenInstance, chatId }) => ({
        url: `waInstance${idInstance}/getAvatar/${apiTokenInstance}`,
        method: 'POST',
        body: { chatId },
      }),
    }),
  }),
});

export const { useGetUserInfoMutation, useGetUserAvatarMutation } = contactApi;
