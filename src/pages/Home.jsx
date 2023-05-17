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
import Footer from "../components/sharedComponents/Footer";
import { getUserData, sanctumUser } from "../services/UserService";
import OneMainNews from "../components/layouts/OneMainNews";
import TextOnImageCard from "../components/newsCards/TextOnImageCard";
import CategoryOnHomePage from "../components/layouts/CategoryOnHomePage";
import NewNewsCard from "../components/newsCards/NewNewsCard";
import useGetNewsByCategory from "../hooks/useGetNewsByCategory";
import { getNewsByCategory } from "../services/newsService";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [threeNewsForHome, setThreeNewsForHome] = useState([]);

  const {
    data: allNews,
    fetchData: fetchAllNews,
    error,
    isLastPage,
  } = usePaginateData(`/api/news?page=${pageNumber}`, false);

  const {
    data: politicNews,
    error: politicNewsError,
    isLoading: politicNewsIsLoading,
    fetchData: fetchPoliticNews,
  } = useGetNewsByCategory("politic", 4);

  const {
    data: societyNews,
    error: societyNewsError,
    isLoading: societyNewsIsLoading,
    fetchData: fetchSocietyNews,
  } = useGetNewsByCategory("society", 4);

  const {
    data: sportNews,
    error: sportNewsError,
    isLoading: sportNewsIsLoading,
    fetchData: fetchSportNews,
  } = useGetNewsByCategory("sport", 4);

  useEffect(() => {
    fetchAllNews();
    fetchPoliticNews();
    fetchSocietyNews();
    fetchSportNews();
  }, [pageNumber]);

  useEffect(() => {
    if (politicNews && societyNews && sportNews) {
      setThreeNewsForHome((currentState) => [
        ...currentState,
        politicNews[0],
        societyNews[0],
        sportNews[0],
      ]);
    }
  }, [politicNews, societyNews, sportNews]);

  const loadMoreHandler = () => {
    setPageNumber((currentNumber) => currentNumber + 1);
  };

  return (
    <>
      <div className="animate-smoothLoad px-8 sm:px-3 mb-4">
        <Header />
        <div className="mt-20">
          {error && <p className="text-xl gap-4">დაფიქსირდა შეცდომა</p>}
          {/* one main and two semi-main*/}
          <OneMainNews>
            {/* <TextOnImageCard key={news.id} news={news} /> */}
            {threeNewsForHome &&
              threeNewsForHome.map(
                (news, index) =>
                  index === 0 && <SpecialNewsCard key={news.id} news={news} />
              )}
            <div className="flex flex-col lg:flex-row sm:flex-col gap-4  w-1/3 lg:w-full pl-4 lg:pl-0">
              {threeNewsForHome &&
                threeNewsForHome.map(
                  (news, index) =>
                    index > 0 &&
                    index < 3 && <TextOnImageCard key={news.id} news={news} />
                )}
            </div>
          </OneMainNews>

          {/* three at row */}
          <CategoryOnHomePage categoryName="პოლიტიკა">
            <div className="grid grid-cols-4 gap-4 sm:gap-4 mt-4 lg:grid-cols-2 md:grid-cols-1">
              {politicNewsIsLoading && <div className="h-48">isloading</div>}
              {politicNewsError && <p>{politicNewsError}</p>}
              {politicNews &&
                politicNews.map(
                  (news, index) =>
                    index < 4 && <NewNewsCard key={news.id} news={news} />
                )}
            </div>
          </CategoryOnHomePage>

          <CategoryOnHomePage categoryName="საზოგადოება">
            <div className="grid grid-cols-4 gap-4 sm:gap-4 mt-4 lg:grid-cols-2 md:grid-cols-1">
              {societyNewsError && <p>{societyNewsError}</p>}
              {societyNews &&
                societyNews.map(
                  (news, index) =>
                    index < 4 && <NewNewsCard key={news.id} news={news} />
                )}
            </div>
          </CategoryOnHomePage>

          <CategoryOnHomePage categoryName="სპორტი">
            <div className="grid grid-cols-4 gap-4 sm:gap-4 mt-4 lg:grid-cols-2 md:grid-cols-1">
              {sportNewsError && <p>{sportNewsError}</p>}
              {sportNews &&
                sportNews.map(
                  (news, index) =>
                    index < 4 && <NewNewsCard key={news.id} news={news} />
                )}
            </div>
          </CategoryOnHomePage>

          {/* {!isLastPage && (
            <button
              onClick={loadMoreHandler}
              className="bg-blue-600 px-4 py-1 rounded-lg mt-10 text-lg mx-auto block"
            >
              მეტი სიახლე
            </button>
          )} */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
