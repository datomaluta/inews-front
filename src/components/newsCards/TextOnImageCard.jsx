import { Link } from "react-router-dom";

const TextOnImageCard = (props) => {
  const maxLength = 65;
  return (
    <Link
      to={`/news/${props.news.id}`}
      className="bg-green-400 lg:w-1/2 sm:w-full h-full lg:h-[14rem] rounded-lg rounded-b overflow-hidden relative border-b-4 border-primary"
    >
      <img
        src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
          props.news?.thumbnail
        }`}
        alt="newsimg"
        className="w-full h-full object-cover"
      />
      <div className="bg-blackgr absolute top-0 left-0  w-full h-full z-20"></div>
      <p className="absolute bottom-0 text-base sm:text-sm z-30 px-3 py-2">
        {props.news.title.length > maxLength
          ? props.news.title.substring(0, maxLength) + "..."
          : props.news.title}
      </p>
    </Link>
  );
};

export default TextOnImageCard;
