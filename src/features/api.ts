import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { adjustUsedToken, authTokenChange, logoutUser } from "./auth/authSlice";
import { tagTypes } from "./tagTypes";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.usedToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const state = api.getState() as RootState;

  if (result.error && result.error.status === 401) {
    if (!state.auth.accessToken || !state.auth.refreshToken) {
      api.dispatch(logoutUser());
      return result;
    }

    // Try to refresh the token
    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh-token",
        method: "POST",
        body: {
          refreshToken: state.auth.refreshToken
        }
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // Store the new tokens
      const tokens = refreshResult.data as { accessToken: string; refreshToken: string };
      api.dispatch(
        authTokenChange({
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken || state.auth.refreshToken,
        })
      );
      // Retry the original request with the new access token
      api.dispatch(adjustUsedToken(tokens.accessToken));
      result = await baseQuery(args, api, extraOptions);
    } else {
      // If refresh fails, log the user out
      api.dispatch(logoutUser());
    }
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: tagTypes,
  endpoints: () => ({}),
});