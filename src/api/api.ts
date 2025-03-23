import axios from "axios";

const apiHost = import.meta.env.VITE_API_HOST;

const api = axios.create({
  baseURL: `${apiHost}/api`,
});

api.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem("access-token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // TODO: сделать обработку серверных ошибок и ошибок клиента
    throw error;
  },
);

export default api;
