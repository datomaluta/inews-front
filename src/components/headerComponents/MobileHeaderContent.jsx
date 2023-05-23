import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "../icons/CloseIcon";
import logo from "../../assets/images/logo-white.png";

const MobileHeaderContent = (props) => {
  const navigate = useNavigate();
  const switcherHandler = (href) => {
    navigate(href);
    props.closer();
  };
  return (
    <div className="fixed animate-smoothLoad top-0 left-0 bg-primary w-screen h-screen z-50 flex gap-4 flex-col justify-center items-center">
      <div className="bg-blackgr w-full h-full absolute z-20"></div>
      <div className="text-3xl  text-blue-600 px-2 py-2 rounded-lg z-50">
        <img src={logo} alt="logo" className="h-7" />
      </div>
      <Link className="text-xl border-b pb-1 border-white z-30" to="/">
        ყველა სიახლე
      </Link>
      <button
        className="text-xl border-b border-white z-30 "
        onClick={() => switcherHandler("/allnews/society")}
      >
        საზოგადოება
      </button>
      <button
        className="text-xl border-b border-white z-30 "
        onClick={() => switcherHandler("/allnews/politic")}
      >
        პოლიტიკა
      </button>
      <button
        className="text-xl border-b border-white z-30 "
        onClick={() => switcherHandler("/allnews/sport")}
      >
        სპორტი
      </button>
      <button onClick={props.closer} className="absolute top-4 left-4 z-50">
        <CloseIcon />
      </button>
    </div>
  );
};

export default MobileHeaderContent;
