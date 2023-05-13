import instance from "./axios";

export const getAllNews = async (url) => {
  return await instance.get(url);
};

export const createNews = async (data) => {
  return await instance.post("/api/create", data);
};

export const updateNews = async (id, data) => {
  return await instance.post(`/api/news/${id}`, data);
};

export const deleteNews = async (id) => {
  return await instance.delete(`/api/news/${id}`);
};
