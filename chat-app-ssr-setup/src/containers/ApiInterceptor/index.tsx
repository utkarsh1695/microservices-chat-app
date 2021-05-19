import React from 'react';
import { AxiosError } from "axios";
import { useHistory } from 'react-router';
import axios from "../../service/axiosInstance";
import requestInterceptor from './Interceptor/request';
import { responseErrorInterceptor, responseInterceptor } from './Interceptor/response';

const ApiInterceptor = () => {
  const history = useHistory();

  axios.interceptors.request.use(requestInterceptor);
  axios.interceptors.response.use(
    responseInterceptor,
    (error: AxiosError) => responseErrorInterceptor(error, history)
  );

  return <></>;
};

export default ApiInterceptor;
