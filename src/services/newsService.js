import instance from "./axios";

export const getAllNews = async (url) => {
  return await instance.get(url);
};

export const createNews = async (data) => {
  return await instance.post("/create", data);
};

export const updateNews = async (id, data) => {
  return await instance.post(`/news/${id}`, data);
};

export const deleteNews = async (id) => {
  return await instance.delete(`/news/${id}`);
};
