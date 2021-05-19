import axios from "axios";

const BASE_URL = 'http://localhost:7101/';
const TIMEOUT = 20000; // 20 seconds

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

export default instance;