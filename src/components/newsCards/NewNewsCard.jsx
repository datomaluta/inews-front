import { Link } from "react-router-dom";
import { timeAgo } from "../../helpers/timeAgo";

const maxLength = 85;

const NewNewsCard = (props) => {
  return (
    <Link
      to={`/news/${props.news.id}`}
      key={props.news.id}
      className="bg-white text-neutral-900 dark:text-white dark:bg-neutral-800 font-bpg 
       rounded-lg overflow-hidden flex flex-col min-h-[16rem] group shadow-lg md:min-h-[20rem] sm:min-h-[16rem]"
    >
      <div className="w-full h-3/5 lg:h-4/6  bg-blue-600 relative overflow-hidden">
        <img
          src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
            props.news?.thumbnail
          }`}
          alt="kki"
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
        />

        <div className="bg-neutral-900 bg-opacity-80 absolute bottom-2 right-2 px-2 py-1 rounded-lg text-sm text-white">
          {timeAgo(props.news.created_at)}
        </div>
      </div>

      <p className="text-sm font-bold md:text-sm flex-grow flex items-center px-2 leading-5 group-hover:text-primary dark:group-hover:text-neutral-400">
        {props.news.title.length > maxLength
          ? props.news.title.substring(0, maxLength) + "..."
          : props.news.title}
      </p>
    </Link>
  );
};

export default NewNewsCard;
