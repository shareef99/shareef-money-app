import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setUpInterceptors = () => {
  axiosClient.interceptors.request.use(
    (request) => {
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosClient.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalConfig = error.config;
      if (error.response && originalConfig.url !== "/user/signin") {
        if (error.response.status === 401 && !originalConfig._retry) {
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );
};
