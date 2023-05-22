import { useLocation } from "react-router-dom";
import Header from "../components/sharedComponents/Header";
import { useEffect, useState } from "react";
import { searchNews } from "../services/newsService";
import NewNewsCard from "../components/newsCards/NewNewsCard";
import usePaginateData from "../hooks/usePaginateData";
import LoadingSpinner from "../components/sharedComponents/LoadingSpinner";

const ForSearchResult = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const encodedQuery = encodeURIComponent(query);

  const {
    data: searchedNews,
    fetchData: search,
    error,
    isLastPage: isSearchlastPage,
    setData: setSearchData,
  } = usePaginateData(
    `/api/search?query=${encodedQuery}&page=${pageNumber}`,
    false,
    searchNews
  );

  useEffect(() => {
    setSearchData([]);
  }, [query]);

  useEffect(() => {
    search();
  }, [query, pageNumber]);

  const loadMoreHandler = () => {
    setPageNumber((currentNumber) => currentNumber + 1);
  };

  console.log(searchedNews);

  return (
    <div className="mt-20 px-4 py-10">
      <Header />

      {isLoading && !error && <LoadingSpinner />}

      <div className="grid grid-cols-4 gap-4 sm:gap-4 mt-4 lg:grid-cols-2 md:grid-cols-1">
        {error && (
          <p className="absolute top-1/4 left-1/2 -translate-x-1/2 text-xl">
            შესაბამისი სიახლე ვერ მოიძებნა
          </p>
        )}
        {searchedNews &&
          searchedNews.map((news) => <NewNewsCard key={news.id} news={news} />)}
      </div>

      {!isSearchlastPage && !error && (
        <button
          onClick={loadMoreHandler}
          className="bg-blue-600 px-4 py-1 rounded-lg mt-10 text-lg mx-auto block"
        >
          მეტი სიახლე
        </button>
      )}
    </div>
  );
};

export default ForSearchResult;
