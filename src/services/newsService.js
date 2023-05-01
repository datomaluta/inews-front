import instance from "./axios";

export const getAllNews = async (url) => {
  return await instance.get(url);
};
