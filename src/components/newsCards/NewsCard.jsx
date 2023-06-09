import { Link } from "react-router-dom";
import { timeAgo } from "../../helpers/timeAgo";

const maxLength = 100;

const NewsCard = (props) => {
  return (
    <Link
      to={`/news/${props.news.id}`}
      key={props.news.id}
      className="bg-neutral-800 font-bpg h-72 lg:h-[16.875rem] md:h-[22rem] 
      sm:h-[16rem] rounded-lg rounded-b overflow-hidden flex flex-col"
    >
      <div className="w-full h-48 md:h-[16rem] sm:h-40 bg-blue-600 relative">
        <img
          src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
            props.news?.thumbnail
          }`}
          alt="kki"
          className="w-full h-full object-cover"
        />

        <div className="bg-neutral-900 bg-opacity-80 absolute bottom-2 right-2 px-2 py-1 rounded-lg">
          {timeAgo(props.news.created_at)}
        </div>
      </div>

      <p className="text-base font-bold md:text-base  flex-grow flex items-center px-2">
        {props.news.title.length > maxLength
          ? props.news.title.substring(0, maxLength) + "..."
          : props.news.title}
      </p>
    </Link>
  );
};

export default NewsCard;
