import { timeAgo } from "../../helpers/timeAgo";

const ShowNews = (props) => {
  return (
    <>
      <p className="text-neutral-900 dark:text-white text-xl md:text-lg sm:text-base mb-2">
        {props.news?.title}
      </p>
      {props.newsError && <p className="text-xl">დაფიქსირდა შეცდომა</p>}
      <div className="w-full max-h-[28rem] rounded-lg overflow-hidden relative">
        {props.news && (
          <>
            <img
              src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
                props.news?.thumbnail
              }`}
              alt="neewsimg"
              className="w-full h-auto object-cover"
            />
            <div className="bg-neutral-900 bg-opacity-80 absolute bottom-2 text-white right-2 px-2 py-1 rounded-lg text-sm">
              {timeAgo(props.news.created_at)}
            </div>
          </>
        )}
      </div>
      <div className="mt-6 font-arial md:text-sm">
        {props.news?.body.split("\r\n").map((para, index) => (
          <p key={index} className="mb-4">
            {para}
          </p>
        ))}
      </div>
    </>
  );
};

export default ShowNews;
