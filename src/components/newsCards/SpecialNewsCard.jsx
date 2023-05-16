import { Link } from "react-router-dom";

const SpecialNewsCard = (props) => {
  const maxLength = 80;
  return (
    // <Link
    //   to={`/news/${props.news.id}`}
    //   key={props.news.id}
    //   className="w-1/2 lg:w-full bg-red-400 h-96 lg:h-80 sm:h-56 rounded-lg relative overflow-hidden font-bpg"
    // >
    //   <img
    //     alt="news"
    //     src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
    //       props.news?.thumbnail
    //     }`}
    //     className="w-full h-full object-cover"
    //   />
    //   <div className="bg-blackgr absolute top-0 left-0  w-full h-full z-20"></div>
    //   <p className="absolute bottom-4 text-xl sm:text-base z-30 px-2">
    //     {props.news.title.length > maxLength
    //       ? props.news.title.substring(0, maxLength) + "..."
    //       : props.news.title}
    //   </p>
    // </Link>
    <Link
      to={`/news/${props.news.id}`}
      className="bg-blue-500 w-2/3 lg:w-full  relative rounded-lg overflow-hidden border-b-4 border-primary rounded-b"
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
