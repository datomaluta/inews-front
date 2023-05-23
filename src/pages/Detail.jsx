import Header from "../components/sharedComponents/Header";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import ShowNews from "../components/newsCards/ShowNews";
import Footer from "../components/sharedComponents/Footer";
import NewNewsCard from "../components/newsCards/NewNewsCard";

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
  } = useGetData(`/api/news/${id}`, true);

  useEffect(() => {
    fetchData();
    fetchCertainNews();
  }, [id]);

  return (
    <>
      <div className="animate-smoothLoad mt-20 px-8 sm:px-3">
        <Header />
        <div className="flex gap-10 mt-10 mb-10 lg:flex-col">
          <div className=" w-[72%] lg:w-full">
            <div className="w-full  overflow-hidden relative">
              <ShowNews news={news} newsError={newsError} />
            </div>
          </div>
          {!allNews && <div className="h-screen"></div>}
          <div className="flex-grow  w-[28%] lg:w-full rounded-lg overflow-hidden">
            <p className="text-lg text-white sm:text-base mb-4 bg-secondary px-2 py-2">
              ბოლო სიახლეები
            </p>
            {allNewsErorr && <p>დაფიქსირდა შეცდომა</p>}
            <div className="grid gap-y-4 lg:grid-cols-2 sm:grid-cols-1 lg:gap-4">
              {allNews &&
                allNews
                  .filter((news) => news.id !== +id)
                  .map(
                    (news, index) =>
                      index < 3 && <NewNewsCard key={news.id} news={news} />
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
