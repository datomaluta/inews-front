import { Link } from "react-router-dom";
import Header from "../components/sharedComponents/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import useGetData from "../hooks/useGetData";
import { timeAgo } from "../helpers/timeAgo";
import usePaginateData from "../hooks/usePaginateData";
import NewsCard from "../components/newsCards/NewsCard";
import SpecialNewsCard from "../components/newsCards/SpecialNewsCard";
import MobileHeaderContent from "../components/sharedComponents/MobileHeaderContent";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const {
    data: allNews,
    fetchData: fetchAllNews,
    error,
    isLastPage,
  } = usePaginateData(`news?page=${pageNumber}`, false);

  useEffect(() => {
    fetchAllNews();
  }, [pageNumber]);

  const loadMoreHandler = () => {
    setPageNumber((currentNumber) => currentNumber + 1);
  };

  return (
    <div className="animate-smoothLoad">
      <Header />
      {/* <MobileHeaderContent /> */}
      <div className="mt-20 font-archy">
        {error && <p className="text-xl">დაფიქსირდა შეცდომა</p>}
        {/* two main */}
        <div className="flex gap-10 lg:gap-8 sm:gap-2  lg:flex-col">
          {allNews &&
            allNews.map(
              (news, index) =>
                index < 2 && <SpecialNewsCard key={news.id} news={news} />
            )}
        </div>
        {/* three at row */}
        <div className="grid grid-cols-3 gap-9 mt-10 lg:grid-cols-2 md:grid-cols-1">
          {allNews &&
            allNews.map(
              (news, index) =>
                index >= 2 && <NewsCard key={news.id} news={news} />
            )}
        </div>
        {!isLastPage && (
          <button
            onClick={loadMoreHandler}
            className="bg-blue-600 px-4 py-1 rounded-lg mt-10 text-lg mx-auto block"
          >
            მეტი სიახლე
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
