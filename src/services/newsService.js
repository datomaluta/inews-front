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

export const getNewsByCategory = async (category, count) => {
  return await instance.get(`/api/news/${category}/${count}}`);
};

export const getAllNewsByCategoryForHomePage = async (url) => {
  return await instance.get(url);
};

export const getAllCategories = async () => {
  return await instance.get("/api/categories");
};

// export const searchNews = async (query) => {
//   return await instance.get(`/api/search?query=${query}`);
// };
export const searchNews = async (url) => {
  console.log(url);
  return await instance.get(url);
};
