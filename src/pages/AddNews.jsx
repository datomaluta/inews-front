import { Link } from "react-router-dom";
import uploadImg from "../assets/images/uploadimg.png";

const AddNews = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center text-2xl md:text-xl">
        <h1>სიახლის დამატება</h1>
        <Link className="bg-blue-500 px-2 py-1 rounded-lg">ყველა სიახლე</Link>
      </div>

      <form className="flex flex-col items-center" action="">
        <div className="mt-10 max-w-[35rem] w-full ">
          <label className="block text-lg">სათაური</label>
          <input
            className="w-full bg-transparent border rounded-lg px-2 py-2 text-lg focus:outline-none focus:border-blue-500 transition-all"
            type="text"
          />
        </div>
        <div className="mt-10 max-w-[35rem] w-full">
          <label className="block text-lg">სრული აღწერა</label>
          <textarea
            name="news"
            id="news"
            cols="30"
            rows="10"
            className="bg-transparent border rounded-lg w-full text-lg px-2 py-2"
          ></textarea>
        </div>
        <div className="mt-10 max-w-[35rem] w-full">
          <label className="block text-lg ">ფოტო</label>
          <div className="border-dashed border-2 w-full rounded-lg px-4 py-4 h-40 flex flex-col items-center">
            <label
              htmlFor="imgupload"
              className="bg-blue-500 px-2 py-2 text-lg mt-4 rounded-lg"
            >
              აირჩიე ფოტო
            </label>
            <img className="w-10 h-10 mt-4" src={uploadImg} alt="upp" />
            <input hidden id="imgupload" type="file" />
          </div>
        </div>

        <button className="bg-blue-500 px-2 py-2 text-xl rounded-lg mt-10 max-w-[35rem] w-full">
          დამატება
        </button>
      </form>
    </div>
  );
};

export default AddNews;
