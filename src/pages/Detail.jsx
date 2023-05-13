import axios from "axios";
import Header from "../components/sharedComponents/Header";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { timeAgo } from "../helpers/timeAgo";
import NewsCard from "../components/newsCards/NewsCard";
import ShowNews from "../components/newsCards/ShowNews";
import MobileHeaderContent from "../components/sharedComponents/MobileHeaderContent";
import Footer from "../components/sharedComponents/Footer";

const Detail = () => {
  const { id } = useParams();

  const {
    data: allNews,
    fetchData,
    error: allNewsErorr,
  } = useGetData(`/api/news`);
  const {
    data: news,
    fetchData: fetchCertainNews,
    error: newsError,
  } = useGetData(`/api/news/${id}`);

  useEffect(() => {
    fetchData();
    fetchCertainNews();
  }, [id]);

  return (
    <>
      <div className="animate-smoothLoad mt-20 px-8 sm:px-3">
        <Header />
        {/* {headerModalIsOpen && <MobileHeaderContent closer={modalCloserHandler} />} */}
        <div className="flex gap-10 mt-10 lg:flex-col">
          <div className="w-2/3 lg:w-full">
            <div className="w-full  overflow-hidden relative">
              <ShowNews news={news} newsError={newsError} />

              <div className="bg-red-600 h-40 text-4xl  flex items-center justify-center text-center">
                აქ იქნება კომენტარების სექცია
              </div>
            </div>
          </div>
          <div className="flex-grow w-1/3 lg:w-full rounded-lg overflow-hidden">
            <p className="text-xl mb-4 bg-blue-600 px-2 py-2">ბოლო სიახლეები</p>
            {allNewsErorr && <p>დაფიქსირდა შეცდომა</p>}
            <div className="lg:grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-4">
              {allNews &&
                allNews
                  .filter((news) => news.id !== +id)
                  .map(
                    (news, index) =>
                      index < 3 && <NewsCard key={news.id} news={news} />
                  )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
