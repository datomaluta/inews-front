import { Link } from "react-router-dom";

const SpecialNewsCard = (props) => {
  const maxLength = 80;
  return (
    <Link
      to={`/news/${props.news.id}`}
      className="bg-blue-500 w-2/3 lg:w-full sm:h-[14rem] relative rounded-lg overflow-hidden border-b-4 border-primary rounded-b"
    >
      <img
        src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
          props.news?.thumbnail
        }`}
        alt="news"
        className="h-full w-full object-cover"
      />
      <div className="bg-blackgr absolute top-0 left-0  w-full h-full z-20"></div>
      <p className="absolute bottom-0 text-xl sm:text-sm z-30 px-3  py-2">
        {props.news.title.length > maxLength
          ? props.news.title.substring(0, maxLength) + "..."
          : props.news.title}
      </p>
    </Link>
  );
};

export default SpecialNewsCard;
