import axios from "axios";
import Header from "../components/sharedComponents/Header";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";

const Detail = () => {
  const { id } = useParams();

  const { data: allNews, fetchData, error: allNewsErorr } = useGetData(`news`);
  const {
    data: news,
    fetchData: fetchCertainNews,
    error: newsError,
  } = useGetData(`news/${id}`);

  useEffect(() => {
    fetchData();
    fetchCertainNews();
  }, [id]);

  const relatedNews = allNews.map((news) => news);

  return (
    <div>
      <Header />
      <div className="flex gap-10 mt-10">
        <div className="w-2/3">
          <div className="w-full  overflow-hidden relative">
            <p className="text-2xl mb-2">{news?.title}</p>
            {newsError && <p className="text-xl">დაფიქსირდა შეცდომა</p>}
            <div className="w-full h-[28rem] rounded-lg overflow-hidden">
              {news && (
                <img
                  src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
                    news?.thumbnail
                  }`}
                  alt="neewsimg"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className=" mt-4 font-serif">
              {news?.body.split("\r\n").map((para, index) => (
                <p key={index} className="mb-4">
                  {para}
                </p>
              ))}
            </div>

            <div className="bg-red-600 h-40 text-4xl  flex items-center justify-center">
              აქ იქნება კომენტარების სექცია
            </div>
          </div>
        </div>
        <div className="flex-grow w-1/3  rounded-lg overflow-hidden">
          <p className="text-xl mb-4 bg-blue-500 px-2 py-2">ბოლო სიახლეები</p>
          {allNewsErorr && <p>დაფიქსირდა შეცდომა</p>}
          {allNews &&
            allNews
              .filter((news) => news.id !== +id)
              .map(
                (news, index) =>
                  index < 4 && (
                    <Link
                      to={`/news/${news.id}`}
                      key={news.id}
                      className="bg-neutral-800 w-full h-72 mb-8 lg:h-[21.875rem] sm:h-[18rem] rounded-lg overflow-hidden flex flex-col"
                    >
                      <div className="w-full h-52 md:h-64 sm:h-52 bg-blue-500">
                        <img
                          src={`http://127.0.0.1:8000/storage/${news.thumbnail}`}
                          // src="https://i.ytimg.com/vi_webp/HLRAZKbHl_c/maxresdefault.webp"
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
      </div>
    </div>
  );
};

export default Detail;
