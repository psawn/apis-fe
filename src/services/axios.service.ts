import axios from "axios";

const env = import.meta.env;

export const axiosInstance = axios.create({
  baseURL: env.VITE_BE_ORIGIN,
});
