import { clearToken } from "./storageService";

export const login = async (email, password) => {
  const response = await axios.post("/auth/login", { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const logout = () => {
  clearToken();
};
