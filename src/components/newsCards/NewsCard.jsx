import { Link } from "react-router-dom";
import { timeAgo } from "../../helpers/timeAgo";

const NewsCard = (props) => {
  return (
    <Link
      to={`/news/${props.news.id}`}
      key={props.news.id}
      className="bg-neutral-800  h-80 lg:h-[21.875rem] sm:h-[16rem] rounded-lg overflow-hidden flex flex-col"
    >
      <div className="w-full h-52 md:h-64 sm:h-44 bg-blue-500 relative">
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

      <p className="text-xl md:text-base flex-grow flex items-center px-2">
        {props.news.title}
      </p>
    </Link>
  );
};

export default NewsCard;
