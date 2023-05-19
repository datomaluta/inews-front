import { useEffect, useState } from "react";
import Header from "../components/sharedComponents/Header";
import axios from "axios";
import { getNewsByCategory } from "../services/newsService";
import useGetData from "../hooks/as";
import useGetNewsByCategory from "../hooks/useGetNewsByCategory";
import NewNewsCard from "../components/newsCards/NewNewsCard";
import { useLocation, useParams } from "react-router-dom";

const CategoryAllNews = (props) => {
  const [categoryNameInGeorgian, setCategoryNameInGeorgian] = useState("");
  const location = useLocation();

  const { data, error, isLoading, fetchData } = useGetNewsByCategory(
    props.category,
    "all"
  );

  const {
    data: allNews,
    fetchData: fetchAllNews,
    error: allNewsErorr,
  } = useGetData(`/api/news`);

  useEffect(() => {
    if (props.category === "all") {
      fetchAllNews();
    } else {
      fetchData();
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
  }, [location.pathname]);

  return (
    <div className="mt-20 px-4">
      <Header />
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 block bg-secondary rounded shrink-0"></span>
        <p className="text-lg mt-1 shrink-0">{categoryNameInGeorgian}</p>
        <div className="h-[0.01rem] w-full bg-secondary ml-2"></div>
      </div>

      <div className="grid grid-cols-4 gap-4 sm:gap-4 mt-4 lg:grid-cols-2 md:grid-cols-1">
        {error && <p>{error}</p>}
        {props.category === "all"
          ? allNews?.map((news) => <NewNewsCard key={news.id} news={news} />)
          : data?.map((news) => <NewNewsCard key={news.id} news={news} />)}
        {/* {data && data.map((news) => <NewNewsCard key={news.id} news={news} />)} */}
      </div>
    </div>
  );
};

export default CategoryAllNews;
