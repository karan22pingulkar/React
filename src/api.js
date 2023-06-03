import axios from 'axios';

const API_BASE_URL = 'http://your-api-url';

export const login = (username, password) => {
  return axios.post(`${API_BASE_URL}/login`, { username, password });
};

export const fetchData = () => {
  return axios.get(`${API_BASE_URL}/data`);
};