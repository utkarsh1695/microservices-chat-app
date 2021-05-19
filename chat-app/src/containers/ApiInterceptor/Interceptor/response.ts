import { AxiosResponse, AxiosError } from "axios";
import { ROUTES } from "../../../constants/common";
import { History } from "history";

export const responseInterceptor = (response: AxiosResponse) => {
  if(response?.status === 200) return response?.data;
};

export const responseErrorInterceptor = (error: AxiosError, history: History) => {
  switch (error?.response?.status) {
    case 401:
      setTimeout(() => {
        history.replace(ROUTES.LOGIN);
      }, 100);
      break;
    default: return error?.response?.data;
  }
}