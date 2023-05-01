import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});

export default instance;
