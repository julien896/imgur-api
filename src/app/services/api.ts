import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.imgur.com',
});

api.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_IMGUR_CLIENT_ID}`;

export default api;