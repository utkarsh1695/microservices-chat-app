import { AxiosRequestConfig } from "axios";

const requestInterceptor = (request: AxiosRequestConfig) => {

  console.log({
    request_12345: request
  })

  return request;
};

export default requestInterceptor;
