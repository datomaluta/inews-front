import axios from "axios";
import { useCallback, useState } from "react";
import { getAllNews } from "../services/newsService";

const useGetData = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchData = async () => {
    const response = await getAllNews(url).catch((error) =>
      setError("Something went wrong!")
    );
    if (response.statusText === "OK") {
      setError(null);
    }
    // console.log(response.data.data);
    // console.log(response.data.data);
    // const response = await axios.get(url);
    // console.log(url, response);
    // console.log(response.data.news);
    setData(response.data.data);
  };

  //   const fetch = useCallback( async () => {
  //     const response = await axios.get(url);
  //     setData(response.data.news);
  //   }, []);

  //   fetchData();

  return { data, fetchData, error };
};

export default useGetData;
