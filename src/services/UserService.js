import instance from "./axios";

export const getAllNews = async (url) => {
  return await instance.get(url);
};

export const userRegister = async (data) => {
  return await instance.post("/api/register", data);
};

export const login = async (data) => {
  return await instance.post("/api/login", data);
};

export const getUserData = async () => {
  return await instance.get("/api/user");
};

export const logout = async () => {
  return await instance.get("/api/logout");
};

export const fetchCSRFToken = async () => {
  return await instance.get("/sanctum/csrf-cookie");
};

export const sanctumUser = async () => {
  return await instance.get("/api/user");
};
