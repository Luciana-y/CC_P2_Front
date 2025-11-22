import axios from "axios";

const api = axios.create({
  baseURL: "https://tu-api.amazonaws.com/prod", // cámbialo
});

// 🔐 Agrega token automáticamente si existe
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export default api;
