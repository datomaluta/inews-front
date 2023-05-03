import { Link } from "react-router-dom";

const SpecialNewsCard = (props) => {
  return (
    <Link
      to={`/news/${props.news.id}`}
      key={props.news.id}
      className="w-1/2 lg:w-full bg-red-400 h-96 lg:h-80 sm:h-56 rounded-lg relative overflow-hidden"
    >
      <img
        alt="news"
        src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
          props.news?.thumbnail
        }`}
        className="w-full h-full  object-cover"
      />
      <div className="bg-blackgr absolute top-0 left-0  w-full h-full z-20"></div>
      <p className="absolute bottom-4 text-2xl sm:text-base z-30 px-2">
        {props.news.title}
      </p>
    </Link>
  );
};

export default SpecialNewsCard;
