import { LoginValues } from "../../interface/auth";
import { api } from "../api";

// authApi.ts
export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginValues>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    signup: builder.mutation<any, LoginValues>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: false, // optional
});

export const { useLoginMutation, useLogoutMutation ,useSignupMutation} = authApi;
