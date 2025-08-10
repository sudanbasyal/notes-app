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
import { RefreshTokenResponse } from "../interface/auth";

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
    api.dispatch(adjustUsedToken(state.auth.refreshToken));
    const refreshResult = (await baseQuery(
      {
        url: "/auth/refresh-token",
        method: "POST",
      },
      api,
      extraOptions
    )) as { data: RefreshTokenResponse };

    if (refreshResult.data) {
      const tokens = refreshResult.data.data;
      api.dispatch(
        authTokenChange({
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken || state.auth.refreshToken,
        })
      );

      api.dispatch(adjustUsedToken(tokens.accessToken));
      result = await baseQuery(args, api, extraOptions);
    } else {
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
