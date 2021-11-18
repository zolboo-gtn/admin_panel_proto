export { UsersRepository } from "./users";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { backend } from "config/default";
const config: AxiosRequestConfig = {
  baseURL: backend.baseURL,
};
export const backendClient = axios.create(config);

const requestInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return config;
};
const requestErrorHandler = (error: AxiosError) => {
  return Promise.reject(error);
};
backendClient.interceptors.request.use(requestInterceptor, requestErrorHandler);

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};
const responseErrorHandler = (error: AxiosError) => {
  return Promise.reject(error);
};
backendClient.interceptors.response.use(
  responseInterceptor,
  responseErrorHandler
);
