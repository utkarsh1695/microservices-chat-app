import { AxiosError } from "axios";
import { useHistory } from 'react-router';
import requestInterceptor from './interceptor/request';
import { responseRejectInterceptor, responseInterceptor } from './interceptor/response';
import AxiosInstance from "../../service/axiosInstance";

const ApiInterceptor = () => {
  const history = useHistory();

  AxiosInstance.fetch.interceptors.request.use(requestInterceptor);
  AxiosInstance.fetch.interceptors.response.use(
    responseInterceptor,
    (error: AxiosError) => responseRejectInterceptor(error, history)
  );

  return null;
}

export default ApiInterceptor;
