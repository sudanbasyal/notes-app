import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../interface/auth";
import { decrypt, encrypt } from "../../lib/utils";
const initialState:AuthState = {
    accessToken: decrypt(localStorage.getItem("accessToken") || ""),
    refreshToken: decrypt(localStorage.getItem("refreshToken") || ""),
    usedToken: decrypt(localStorage.getItem("accessToken") || "")
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authTokenChange: (state, action) => {
      localStorage.setItem("accessToken", encrypt(action.payload.accessToken));
      localStorage.setItem("refreshToken", encrypt(action.payload.refreshToken));
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.usedToken = action.payload.accessToken;
    },
    logoutUser: (state) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      state.accessToken = null;
      state.refreshToken = null;
      state.usedToken = null;
    },
    adjustUsedToken: (state, action) => {
      state.usedToken = action.payload;
    },
  },
});

export const { authTokenChange, logoutUser, adjustUsedToken } = authSlice.actions;
export default authSlice.reducer;