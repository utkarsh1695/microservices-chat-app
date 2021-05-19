import Axios from "axios";

const BASE_URL = 'http://localhost:7101/';
const TIMEOUT = 20000; // 20 seconds

class AxiosInstance {
  static fetch = Axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    headers: {
      'Content-Type': 'application/json'
    }
  });

}


export default AxiosInstance;