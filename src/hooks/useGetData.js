import axios from "axios";
import { useCallback, useState } from "react";
import { getAllNews } from "../services/newsService";

const useGetData = (url, type) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchData = async () => {
    const response = await getAllNews(url).catch((error) =>
      setError("Something went wrong!")
    );

    if (response.statusText === "OK") {
      setError(null);
    }
    setData(response.data.data);
  };

  return { data, fetchData, error };
};

export default useGetData;
