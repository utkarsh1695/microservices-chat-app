import { AxiosRequestConfig } from "axios";

const requestInterceptor = (request: AxiosRequestConfig) => {
  return request;
};

export default requestInterceptor;
