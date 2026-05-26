import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  registerThunk,
  fetchMeThunk,
  refreshTokenThunk,
  logoutThunk,
} from "./authThunk";

const initialState = {
  username: null,
  role: null,
  token: null,
  loginStatus: {
    loading: false,
    error: null,
  },
  registerStatus: {
    loading: false,
    error: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.username = null;
      state.token = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loginStatus.loading = true;
        state.loginStatus.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload.access;
        state.loginStatus.loading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loginStatus.loading = false;
        state.loginStatus.error = action.payload;
      })

      .addCase(registerThunk.pending, (state) => {
        state.registerStatus.loading = true;
        state.registerStatus.error = null;
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.registerStatus.loading = false;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.registerStatus.loading = false;
        state.registerStatus.error = action.payload;
      })

      .addCase(fetchMeThunk.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.role = action.payload.role;
      })

      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        state.token = action.payload.access;
      })

      .addCase(logoutThunk.fulfilled, (state) => {
        state.username = null;
        state.token = null;
        state.role = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
