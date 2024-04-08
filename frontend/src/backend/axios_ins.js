import { BASE_URL } from "./api";
import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    }
});