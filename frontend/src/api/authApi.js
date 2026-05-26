import { BACKEND_API_URL } from "../constants/settings";
import { HEADERS } from "../constants/fetch";
import fetchDefault from "../utils/fetchDefault";

export const login = async (loginData) => {
  return await fetchDefault(`${BACKEND_API_URL}/account-management/token/`, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: HEADERS,
    credentials: "include",
  });
};

export const register = async (registerData) => {
  return await fetchDefault(`${BACKEND_API_URL}/account-management/register/`, {
    method: "POST",
    body: JSON.stringify(registerData),
    headers: HEADERS,
  });
};

export const fetchMe = async (token) => {
  return await fetchDefault(`${BACKEND_API_URL}/account-management/me/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const refreshToken = async () => {
  return await fetchDefault(
    `${BACKEND_API_URL}/account-management/token/refresh/`,
    {
      method: "POST",
      headers: HEADERS,
      credentials: "include",
    },
  );
};

export const logout = async () => {
  return await fetchDefault(
    `${BACKEND_API_URL}/account-management/token/logout/`,
    {
      method: "POST",
      headers: HEADERS,
      credentials: "include",
    },
  );
};
