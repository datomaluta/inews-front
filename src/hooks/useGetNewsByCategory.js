import { useState } from "react";
import { getNewsByCategory } from "../services/newsService";

const useGetNewsByCategory = (category, count) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await getNewsByCategory(category, count).catch((error) => {
      setError("დაფიქსირდა შეცდომა");
      setIsLoading(false);
    });
    setData(response?.data?.data);
    setIsLoading(false);
    console.log(response?.data?.data);
  };

  return { data, error, isLoading, fetchData };
};

export default useGetNewsByCategory;
