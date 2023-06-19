import { api } from './api';

export const messageApi = api.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getChatMessages: mutation({
      query: ({ idInstance, apiTokenInstance, chatId }) => ({
        url: `waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
        method: 'POST',
        body: { chatId },
      }),
      // transformResponse: (response) => response.filter((message) => message.typeMessage === 'textMessage'),
    }),
    sendMessage: mutation({
      query: ({ idInstance, apiTokenInstance, chatId, message }) => ({
        url: `waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        method: 'POST',
        body: { chatId, message },
      }),
    }),
    receiveMessageNotification: query({
      query: ({ idInstance, apiTokenInstance }) => `waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
    }),
    deleteMessageNotification: mutation({
      query: ({ idInstance, apiTokenInstance, receiptId }) => ({
        url: `waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { 
  useGetChatMessagesMutation, 
  useSendMessageMutation, 
  useReceiveMessageNotificationQuery, 
  useDeleteMessageNotificationMutation,
} = messageApi;
