import { useEffect, useState } from "react";
import Header from "../components/sharedComponents/Header";
import {
  getAllNews,
  getAllNewsByCategoryForHomePage,
  getNewsByCategory,
} from "../services/newsService";
import useGetNewsByCategory from "../hooks/useGetNewsByCategory";
import NewNewsCard from "../components/newsCards/NewNewsCard";
import { useLocation } from "react-router-dom";
import usePaginateData from "../hooks/usePaginateData";

const CategoryAllNews = (props) => {
  const [categoryNameInGeorgian, setCategoryNameInGeorgian] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  // const [loadMoreButtonIsVisible, setLoadMoreButtonIsVisible] = useState(true);
  const location = useLocation();
  const [showLoadMore, setShowLoadMore] = useState();

  const {
    data: allNews,
    fetchData: fetchAllNews,
    error: er,
    isLastPage,
    setData: setAllNewsData,
  } = usePaginateData(`/api/news?page=${pageNumber}`, false, getAllNews);

  const {
    data: categoryNews,
    fetchData: fetchCategoryNews,
    error: err,
    isLastPage: isCategoryNewsLastPage,
    setData: setCategoryData,
  } = usePaginateData(
    `/api/allnews/${props.category}?page=${pageNumber}`,
    false,
    getAllNewsByCategoryForHomePage
  );

  // let loadMoreButtonIsVisible = isLastPage || isCategoryNewsLastPage;

  useEffect(() => {
    setPageNumber(1);
    setCategoryData([]);
    setAllNewsData([]);
    // loadMoreButtonIsVisible = true;
  }, [props.category]);

  useEffect(() => {
    if (props.category === "all") {
      fetchAllNews();
    } else {
      fetchCategoryNews();
    }

    if (props.category === "politic") {
      setCategoryNameInGeorgian("პოლიტიკა");
    } else if (props.category === "society") {
      setCategoryNameInGeorgian("საზოგადოება");
    } else if (props.category === "sport") {
      setCategoryNameInGeorgian("სპორტი");
    } else {
      setCategoryNameInGeorgian("ყველა სიახლე");
    }
    // loadMoreButtonIsVisible = true;
  }, [location.pathname, pageNumber]);

  const loadMoreHandler = () => {
    setPageNumber((currentNumber) => currentNumber + 1);
  };

  // useEffect(() => {
  //   if (isLastPage || isCategoryNewsLastPage) {
  //     setLoadMoreButtonIsVisible(false);
  //   } else {
  //     setLoadMoreButtonIsVisible(true);
  //   }
  // }, [pageNumber, props.category]);

  return (
    <div className="mt-20 px-4">
      <Header />
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 block bg-secondary rounded shrink-0"></span>
        <p className="text-lg mt-1 shrink-0">{categoryNameInGeorgian}</p>
        <div className="h-[0.01rem] w-full bg-secondary ml-2"></div>
      </div>

      <div className="grid grid-cols-4 gap-4 sm:gap-4 mt-4 lg:grid-cols-2 md:grid-cols-1">
        {/* {error && <p>{error}</p>} */}
        {props.category === "all"
          ? allNews?.map((news) => <NewNewsCard key={news.id} news={news} />)
          : categoryNews?.map((news) => (
              <NewNewsCard key={news.id} news={news} />
            ))}
      </div>
      {!isLastPage && props.category === "all" && (
        <button
          onClick={loadMoreHandler}
          className="bg-blue-600 px-4 py-1 rounded-lg mt-10 text-lg mx-auto block text-white"
        >
          მეტი სიახლე
        </button>
      )}
      {!isCategoryNewsLastPage && props.category !== "all" && (
        <button
          onClick={loadMoreHandler}
          className="bg-blue-600 px-4 py-1 rounded-lg mt-10 text-lg mx-auto block text-white"
        >
          მეტი სიახლე
        </button>
      )}
    </div>
  );
};

export default CategoryAllNews;
