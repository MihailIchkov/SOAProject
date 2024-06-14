// AuthService.js

import axios from 'axios';

const API_URL = 'http://localhost:5008/api/auth'; // Replace with your backend API base URL

const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
