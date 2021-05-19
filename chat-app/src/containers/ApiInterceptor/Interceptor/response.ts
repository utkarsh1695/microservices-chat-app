import { AxiosResponse, AxiosError } from "axios";
import { ROUTES } from "../../../constants/common";
import { History } from "history";

// !TODO: Response interceptor is getting called twice for a call
export const responseInterceptor = (response: AxiosResponse) => response;

export const responseRejectInterceptor = (error: AxiosError, history: History) => {
  console.log({
    error_12345: error
  })
  switch (error?.response?.status) {
    case 401:
        history.replace(ROUTES.LOGIN);
      break;
    default: return error?.response?.data;
  }
}