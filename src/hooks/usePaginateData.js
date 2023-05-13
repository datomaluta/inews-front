import axios from "axios";
import { useCallback, useState } from "react";
import { getAllNews } from "../services/newsService";

const usePaginateData = (url, isNumeric = false) => {
  const [data, setData] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    const response = await getAllNews(url).catch((error) =>
      setError("Something went wrong!")
    );

    if (response.statusText === "OK") {
      setError(null);
    }

    if (isNumeric) {
      setData(response.data.data);
    } else {
      if (data.length === 0) {
        setData(response.data.data);
      } else {
        setData((currentData) => [...currentData, ...response.data.data]);
      }
    }

    if (!response?.data.next_page_url) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  };

  return { data, fetchData, error, isLastPage };
};

export default usePaginateData;
