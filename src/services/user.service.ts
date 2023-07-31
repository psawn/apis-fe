import { axiosInstance } from "./axios.service";

const loginApi = (email: string, password: string) => {
  return axiosInstance.post("/auth/login", { email, password });
};

const registerApi = (email: string, password: string) => {
  return axiosInstance.post("/auth/register", { email, password });
};

const getProfileApi = (token: string) => {
  return axiosInstance.get("/user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { loginApi, registerApi, getProfileApi };
