import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, fetchMe, refreshToken, logout } from "../../api/authApi";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (loginData, { rejectWithValue }) => {
    try {
      return await login(loginData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (registerData, { rejectWithValue }) => {
    try {
      return await register(registerData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchMeThunk = createAsyncThunk(
  "auth/fetchMe",
  async (token, { rejectWithValue }) => {
    try {
      return await fetchMe(token);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const refreshTokenThunk = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      return await refreshToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      return await logout();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
