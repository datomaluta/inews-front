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
    console.log(response);
    console.log(response.data.data.categories);
    if (response.statusText === "OK") {
      setError(null);
    }
    // if (type === "all") {
    //   setData(response.data.data);
    // } else {
    //   setData({ news: response.data.data, category: response.data.category });
    // }
    // setData({ news: response.data.data, category: response.data.category });
    setData(response.data.data);
  };

  return { data, fetchData, error };
};

export default useGetData;
