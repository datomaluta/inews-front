import { Link } from "react-router-dom";
import { timeAgo } from "../../helpers/timeAgo";

const maxLength = 85;

const NewNewsCard = (props) => {
  return (
    <Link
      to={`/news/${props.news.id}`}
      key={props.news.id}
      className="bg-neutral-800 font-bpg 
       rounded-lg overflow-hidden flex flex-col"
    >
      <div className="w-full h-3/5 lg:h-4/6  bg-blue-600 relative">
        <img
          src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
            props.news?.thumbnail
          }`}
          alt="kki"
          className="w-full h-full object-cover"
        />

        <div className="bg-neutral-900 bg-opacity-80 absolute bottom-2 right-2 px-2 py-1 rounded-lg sm:text-sm">
          {timeAgo(props.news.created_at)}
        </div>
      </div>

      <p className="text-sm font-bold md:text-sm  flex-grow flex items-center px-2 leading-5">
        {props.news.title.length > maxLength
          ? props.news.title.substring(0, maxLength) + "..."
          : props.news.title}
      </p>
    </Link>
  );
};

export default NewNewsCard;
