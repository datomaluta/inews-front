import { Link } from "react-router-dom";
import CloseIcon from "../icons/CloseIcon";

const MobileHeaderContent = (props) => {
  return (
    <div className=" fixed animate-smoothLoad top-0 left-0 bg-blue-700 bg-opacity-95 w-screen h-screen z-50 flex gap-4 flex-col justify-center items-center">
      <div className="bg-blackgr w-full h-full absolute z-20"></div>
      <div className="text-3xl bg-white text-blue-600 px-2 py-1 rounded-lg">
        inews
      </div>
      <Link className="text-xl border-b border-white z-30" to="/">
        სიახლეები
      </Link>
      <Link
        className="text-xl border-b border-white z-30 mb-32"
        to="/admin/add"
      >
        დამატება
      </Link>
      <button onClick={props.closer} className="absolute top-4 right-6 z-50">
        <CloseIcon />
      </button>
    </div>
  );
};

export default MobileHeaderContent;
