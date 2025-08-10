import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import modalSlice from "../features/modal/modalSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { api } from "../features/api";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    modal: modalSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
