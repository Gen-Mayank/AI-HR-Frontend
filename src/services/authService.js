import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const signup = async (userData) => {
  const response = await axios.post(
    `${API_URL}/auth/signup/`,
    userData
  );

  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post(
    `${API_URL}/token/`,
    credentials
  );

  return response.data;
};