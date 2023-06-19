import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = `https://api.green-api.com`;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: ({ query }) => ({
    getAccountSettings: query({
      query: ({ idInstance, apiTokenInstance }) => `waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
    }),
  }),
});

export const { useGetAccountSettingsQuery } = api;
