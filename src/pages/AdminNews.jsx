import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usePaginateData from "../hooks/usePaginateData";
import { dateFormatter } from "../helpers/dateFormatter";
import { deleteNews, getAllNews } from "../services/newsService";
import { fetchCSRFToken, logout, sanctumUser } from "../services/UserService";
import LogoutIcon from "../components/icons/LogoutIcon";
import useColorMode from "../hooks/theme/useColorMode";
import Theme from "../components/headerComponents/Theme";

const AdminNews = () => {
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: allNews,
    fetchData: fetchAllNews,
    error,
    isLastPage,
  } = usePaginateData(`/api/news?page=${pageNumber}`, true, getAllNews);

  useEffect(() => {
    fetchAllNews();
  }, [pageNumber]);

  const [deleteError, setDeleteError] = useState();

  const nextPageHandler = () => {
    setPageNumber((currentNumber) => currentNumber + 1);
  };

  const prevPageHandler = () => {
    setPageNumber((currentNumber) => currentNumber - 1);
  };

  const deleteHandler = async (event, id) => {
    event.preventDefault();
    await fetchCSRFToken();
    const response = await deleteNews(id).catch((error) => {
      deleteError("წაშლა ვერ მოხერხდა.");
    });

    if (response.statusText == "OK") {
      fetchAllNews();
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await logout();
    navigate("/login");
  };

  return (
    <div className="bg-blue-60 pb-10 px-8 sm:px-3">
      {error && <p>დაფიქსირდა შეცდომა</p>}
      <div className=" sm:text-base flex items-center justify-between mb-8 text-white">
        <Link
          to="/"
          className="bg-blue-600 px-2 py-2 rounded-lg  sm:py-[0.3rem]"
        >
          საიტი
        </Link>

        <div className="flex items-center gap-2  sm:text-base ">
          <Theme />
          <Link
            className="bg-white text-blue-600 px-2 py-1 rounded-lg  sm:py-[0.3rem]"
            to="/admin/add"
          >
            დამატება
          </Link>

          <form onSubmit={submitHandler}>
            <button
              className="flex items-center bg-blue-600 px-2 py-1 rounded-lg sm:py-[0.3rem]"
              type="submit"
            >
              <span>გასვლა</span>
              <span className="md:hidden">
                <LogoutIcon />
              </span>
            </button>
          </form>
        </div>
      </div>

      <div className="dark:bg-neutral-800 bg-white rounded-lg px-3 py-1 min-h-[46rem] sm:px-2">
        {allNews &&
          allNews.map((news) => (
            <div
              key={news.id}
              className="h-14 sm:h-20 flex sm:gap-2 items-center justify-between border-b border-neutral-200 pb-2 mb-4"
            >
              <div className="flex gap-4 sm:gap-2 items-center">
                <Link
                  to={`/admin/news/${news.id}`}
                  className="font-arial md:text-sm hover:text-blue-600"
                >
                  {/* {news.title} */}
                  {news.title.length > 80
                    ? news.title.substring(0, 80) + "..."
                    : news.title}
                </Link>
              </div>

              <form
                onSubmit={(event) => deleteHandler(event, news.id)}
                className="ml-2"
              >
                <button
                  type="submit"
                  className="bg-red-500 text-sm px-2 py-1 rounded-lg  text-white"
                >
                  წაშლა
                </button>
              </form>
            </div>
          ))}
      </div>
      <div className="flex items-center gap-4 justify-center mt-4 ">
        {pageNumber !== 1 ? (
          <button
            onClick={prevPageHandler}
            className="bg-blue-600 w-12 px-2 py-2 rounded-lgtext-white"
          >
            უკან
          </button>
        ) : (
          <div className="w-12"></div>
        )}
        <p>გვერდი: {pageNumber} </p>
        {!isLastPage ? (
          <button
            onClick={nextPageHandler}
            className="bg-blue-600 w-12 px-2 py-2 rounded-lg text-white"
          >
            წინ
          </button>
        ) : (
          <div className="w-12 "></div>
        )}
      </div>
    </div>
  );
};

export default AdminNews;
