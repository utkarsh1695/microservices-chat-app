import axios from "./axiosInstance";
import { API_ENDPOINTS } from "../constants/common";

const getUserList = async () => {
  const response = await axios.get(API_ENDPOINTS.userList);
  return response;
};

export default {
  getUserList
};