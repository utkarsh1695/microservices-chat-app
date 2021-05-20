import AxiosInstance from "../axiosInstance";
import { API_ENDPOINTS } from "../../constants/common";
import { GET_USER_LIST } from "./queries";

const fetch = AxiosInstance.fetch

const getUserList = async () => {
  const response = await fetch.post(
    API_ENDPOINTS.graphql,
    {
      query: GET_USER_LIST
    }
  );
  return response?.data?.data?.allUsers;
};

const UserService = {
  getUserList
}

export default UserService;