import { Link } from "react-router-dom";
import Header from "../components/sharedComponents/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import useGetData from "../hooks/useGetData";

const Home = () => {
  const { data: allNews, fetchData: fetchAllNews, error } = useGetData("news");

  useEffect(() => {
    fetchAllNews();
  }, []);

  return (
    <div>
      <Header />
      <div className="mt-10 font-archy">
        {error && <p className="text-xl">დაფიქსირდა შეცდომა</p>}
        {/* two main */}
        <div className="flex gap-10 lg:gap-8 sm:gap-2  lg:flex-col">
          {allNews &&
            allNews.map(
              (news, index) =>
                index < 2 && (
                  <Link
                    to={`/news/${news.id}`}
                    key={news.id}
                    className="w-1/2 lg:w-full bg-red-400 h-96 lg:h-80 sm:h-56 rounded-lg relative overflow-hidden"
                  >
                    <img
                      alt="news"
                      src={`http://127.0.0.1:8000/storage/${news.thumbnail}`}
                      className="w-full h-full  object-cover"
                    />
                    <div className="bg-blackgr absolute top-0 left-0  w-full h-full z-40"></div>
                    <p className="absolute bottom-4 text-2xl sm:text-base z-50 px-2">
                      {news.title}
                    </p>
                  </Link>
                )
            )}
        </div>
        {/* three at row */}
        <div className="grid grid-cols-3 gap-9 mt-10 lg:grid-cols-2 md:grid-cols-1">
          {allNews &&
            allNews.map(
              (news, index) =>
                index >= 2 && (
                  <Link
                    to={`/news/${news.id}`}
                    key={news.id}
                    className="bg-neutral-800  h-80 lg:h-[21.875rem] sm:h-[18rem] rounded-lg overflow-hidden flex flex-col"
                  >
                    <div className="w-full h-52 md:h-64 sm:h-52 bg-blue-500">
                      <img
                        src={`http://127.0.0.1:8000/storage/${news.thumbnail}`}
                        alt="kki"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-xl flex-grow flex items-center px-2">
                      {news.title}
                    </p>
                  </Link>
                )
            )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
