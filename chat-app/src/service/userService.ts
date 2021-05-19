import AxiosInstance from "./axiosInstance";
import { API_ENDPOINTS } from "../constants/common";

const fetch = AxiosInstance.fetch

const getUserList = async () => {
  const response = await fetch.get(API_ENDPOINTS.userList);
  return response?.data;
};

const UserService = {
  getUserList
}

export default UserService;